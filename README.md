# Budgetbeheer

Een eenvoudige webapp voor persoonlijk budgetbeheer, volledig in het Nederlands en in euro.

- Inkomsten, uitgaven en terugbetalingen invoeren, bewerken en verwijderen
- Terugkerende transacties (wekelijks of maandelijks)
- Week-, maand- en jaaroverzicht met grafieken
- Maandbudget per categorie met voortgangsbalk
- CSV-export en -import, en een JSON-back-up
- Installeerbaar als app en werkt ook zonder internet

## Gegevens

Alles wordt bewaard in de browser van het toestel (`localStorage`). Er gaat niets naar een server.
Gegevens worden dus **niet** gedeeld tussen toestellen of browsers. Gebruik de back-up- of
CSV-knop om gegevens over te zetten, en maak regelmatig een back-up.

## Online zetten met GitHub Pages

1. Maak een nieuwe repository op GitHub, bijvoorbeeld `budgetbeheer`.
2. Upload alle bestanden uit deze map (ook de map `icons` en het bestand `.nojekyll`) naar de hoofdmap van de repository.
3. Ga naar **Settings → Pages**, kies bij *Source* **Deploy from a branch**, selecteer de branch `main` en de map `/ (root)`, en klik op **Save**.
4. Na een minuutje staat de app op `https://<gebruikersnaam>.github.io/budgetbeheer/`.

## Installeren als app

Open de link en kies:

- **Chrome / Edge (computer):** het installatie-icoon in de adresbalk, of het menu → *App installeren*
- **Android (Chrome):** menu ⋮ → *App installeren* of *Toevoegen aan startscherm*
- **iPhone / iPad (Safari):** deelknop → *Zet op beginscherm*

## Bijwerken

Pas je bestanden aan, verhoog dan `VERSION` in `sw.js` (bv. `budgetbeheer-v2`), zodat
geïnstalleerde apps de nieuwe versie ophalen.

## Bestanden

| Bestand | Doel |
|---|---|
| `index.html` | De volledige app (HTML, CSS en JavaScript) |
| `manifest.webmanifest` | Naam, kleuren en iconen voor installatie als app |
| `sw.js` | Service worker voor offline gebruik |
| `icons/` | App-iconen |
| `.nojekyll` | Zorgt dat GitHub Pages de bestanden ongewijzigd serveert |
