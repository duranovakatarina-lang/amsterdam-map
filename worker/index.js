// Cloudflare Worker — spoločná databáza pre Amsterdam mapu.
// Ukladá celý stav mapy (miesta, plán dňa, navštívené) ako jeden JSON blob do KV.
// GET  → vráti aktuálny stav { updatedAt, places }
// POST → uloží nový stav (server nastaví updatedAt = čas servera)

const STATE_KEY = "amsterdam_shared_state";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "no-store",
};

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: CORS });

    if (request.method === "GET") {
      const stored = await env.AMS_KV.get(STATE_KEY);
      if (!stored) return json({ updatedAt: 0, places: null });
      return new Response(stored, {
        headers: { ...CORS, "Content-Type": "application/json" },
      });
    }

    if (request.method === "POST") {
      let data;
      try {
        data = JSON.parse(await request.text());
      } catch {
        return json({ error: "bad json" }, 400);
      }
      if (!data || !Array.isArray(data.places)) {
        return json({ error: "bad shape — chýba places[]" }, 400);
      }
      data.updatedAt = Date.now();
      await env.AMS_KV.put(STATE_KEY, JSON.stringify(data));
      return json({ ok: true, updatedAt: data.updatedAt });
    }

    return json({ error: "method not allowed" }, 405);
  },
};
