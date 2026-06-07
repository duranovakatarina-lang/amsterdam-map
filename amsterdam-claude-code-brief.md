# Zadanie: Interaktívna cestovná mapa Amsterdam

## Čo chcem vytvoriť

Interaktívnu webstránku (single HTML file alebo jednoduchý web app) — cestovnú mapu Amsterdamu, ktorá vyzerá **presne ako Google Maps s kartičkami**: mapa zaberá celú obrazovku, po kliknutí na miesto vyskočí bočný panel s fotografiou, názvom, hodnotením, popisom a tlačidlom Directions. Fotky, hodnotenia a detaily chcem čerpať priamo z **Google Places API**.

---

## Kontext výletu

- **Dátum:** 13–15 júna 2026
- **Skupinka:** 2 páry (4 osoby), prvýkrát v Amsterdame
- **Štýl cestovania:** Hidden gems, jedlo, príroda, zážitky ktoré inde nezažijeme. Šetriví — preferujeme free/lacné aktivity.
- **Lety KLM:**
  - So 13.6: KL1324 KRK → AMS 11:50–13:50 (Boeing 737-700, Economy)
  - Po 15.6: KL1329 AMS → KRK 16:40–18:30 (Embraer 175, Economy)
- **Ubytovanie:** A B&B Amsterdam, Prinsengracht 1049, 1017 JE Amsterdam
  - Check-in: So 15:00–20:00
  - Checkout: Po 07:00–11:00
  - 2 noci, izba s manželskou posteľou, súkromná kúpeľňa

---

## Program výletu

### Sobota 13. júna — prilet + prvý dojem
Prilet 13:50, do mesta ~14:30. Voľné popoludnie a večer.

| Čas | Miesto | Poznámka |
|-----|--------|----------|
| ~15:30 | Begijnhof | Skrytý stredoveký dvor, zadarmo |
| ~16:30 | Jordaan | Prechádzka najkrajšou štvrťou, zadarmo |
| ~18:00 | Brouwerij 't IJ | Pivovar v veternom mlyni, ochutnávka 5 pív |
| ~20:00 | Foodhallen | Street food hala, večera |
| ~22:00 | De Wallen | Večerná prechádzka Red Light District |

### Nedeľa 14. júna — "Amsterdam na punk!" 🎲
Celý deň bez itinerára — darček manželovi k narodeninám. Losovanie v aplikácii rozhoduje o tom, kam pôjdeme, čo zažijeme a čo ochutnáme.

**Losovateľné miesta:**
- NDSM Werf (street art galéria v opustenom doku)
- Hortus Botanicus (botanická záhrada, motýlí dom)
- Cannabis Museum
- Albert Cuyp Markt (pouličný trh)
- The Stroopwafel Workshop (workshop výroby stroopwafelov)
- Vondelpark (piknik, papagáje)
- ARTIS Zoo
- Waterlooplein (blší trh)

### Pondelok 15. júna — ráno voľné, odlet 16:40
Checkout 7–11h → kufre do úschovne na Centraal → ~4 hodiny mesta.

| Čas | Miesto | Poznámka |
|-----|--------|----------|
| ~11:00 | Free Ferry Centraal → Noord | Zadarmo, každých 6 min |
| ~11:15 | EYE Film Museum | Terasa, výhľad na Centraal, káva |
| ~12:00 | A'DAM Lookout | Vyhliadka, swing nad mestom |
| podľa losovania | NDSM Werf | Ak sa nelosovalo v nedeľu |

---

## Zoznam miest na mape (17 pinov)

| # | Miesto | Kategória | Cena |
|---|--------|-----------|------|
| 1 | A B&B Amsterdam, Prinsengracht 1049 | Ubytovanie | — |
| 2 | Begijnhof | Hidden gem | Zadarmo |
| 3 | Jordaan | Hidden gem | Zadarmo |
| 4 | Brouwerij 't IJ | Sobota 13.6 | ~€10–15 |
| 5 | Foodhallen | Jedlo & Piť | ~€10–20 |
| 6 | De Wallen / Red Light District | Sobota 13.6 | Zadarmo |
| 7 | Albert Cuyp Markt | Jedlo & Piť | Zadarmo vstup |
| 8 | The Stroopwafel Workshop | Jedlo & Piť | ~€25/os, rezervácia! |
| 9 | Hortus Botanicus | Príroda | ~€10 |
| 10 | ARTIS Zoo | Príroda | ~€26/os |
| 11 | Vondelpark | Príroda | Zadarmo |
| 12 | Waterlooplein | Hidden gem | Zadarmo vstup |
| 13 | Cannabis Museum | Nedeľa 🎲 | ~€12 |
| 14 | Free Ferry Centraal | Pondelok 15.6 | Zadarmo |
| 15 | EYE Film Museum | Pondelok 15.6 | Terasa zadarmo |
| 16 | A'DAM Lookout | Noord | ~€14 |
| 17 | NDSM Werf | Noord | Zadarmo |

---

## Dizajn požiadavky

- Vyzerá ako **Google Maps** — mapa na celú obrazovku, karty miest s fotografiami z Google Places, hodnotením (hviezdičky + počet recenzií), kategóriou, otváracími hodinami
- **Filter bar** hore s kategóriami (farebné tlačidlá), každá kategória má iný farebný pin na mape
- Po kliknutí na pin → **bočný panel** (desktop) alebo **bottom sheet** (mobile) s detailom miesta:
  - fotogaléria z Google Places Photos
  - hodnotenie + počet recenzií
  - otváracie hodiny
  - cenová kategória
  - vlastná poznámka (môj popis miesta)
  - tlačidlo "Navigovať v Google Maps"
- Moderný čistý dizajn — svetlý, minimalistický
- **Plne funkčné na mobile** — používam to na výlete v telefóne
- Nasaditeľné ako statická stránka (GitHub Pages alebo Netlify)

---

## Technické požiadavky

- **Google Maps JavaScript API** + **Google Places API** (Places Details, Places Photos)
- API kľúč vložím sama po dokončení — kód musí byť dobre komentovaný, kde presne ho vložiť
- Preferujem Google Maps JS (nie Leaflet) kvôli natívnej integrácii s Places API
- Single HTML file ak možné, prípadne minimalistický projekt (index.html + style.css + script.js)

---

## Bonus úloha (samostatná app)

Po dokončení mapy budem potrebovať aj **samostatnú losovací aplikáciu** pre nedeľu — "Amsterdam na punk!":

- Webstránka s heslom na odomknutie (heslo nájde manžel po prílete na letisku)
- Po zadaní hesla sa odomknú kolá šťastia / losovanie v kategóriách:
  - **Miesta** (NDSM, Hortus, Cannabis Museum, Albert Cuyp, Vondelpark, ARTIS, Waterlooplein, Stroopwafel Workshop)
  - **Jedlá** (Stroopwafel, Kibbeling, Bitterballen, Patatje oorlog, Herring, Dutch pancake)
  - **Aktivity** (canal boat, bike rental, coffeeshop, free walking tour, museum, brown café)
  - **Výzvy** (napr. "porozprávaj sa s miestnym", "kúp niečo na trhu pod €2", "nájdi najužší dom")
- Vizuál zábavný, nie seriózny — ladí s darčekovou stránkou (tá je na `https://duranovakatarina-lang.github.io/gift/`)
- Rovnako nasaditeľné na GitHub Pages / Netlify

---

*Výlet pripravila Katarína ako darček manželovi k narodeninám 🎂*
