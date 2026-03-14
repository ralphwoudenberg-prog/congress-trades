# CongressTrades 🏛️

Aandelentransacties van Amerikaanse congresleden — gebaseerd op publieke STOCK Act meldingen.

## Projectstructuur

```
congresstrades/
├── index.html                  ← De website
├── netlify.toml                ← Netlify configuratie
├── netlify/
│   └── functions/
│       ├── house.js            ← Proxy voor House data
│       └── senate.js           ← Proxy voor Senate data
└── README.md
```

## 🚀 Deploy op Netlify (gratis, ~5 minuten)

### Stap 1 — Maak een Netlify account
Ga naar [netlify.com](https://netlify.com) en registreer gratis.

### Stap 2 — Upload de bestanden
**Optie A: drag & drop (makkelijkst)**
1. Ga naar je Netlify dashboard
2. Sleep de hele `congresstrades/` map naar het uploadvenster
3. Klaar! Je krijgt een URL zoals `https://jouwsite.netlify.app`

**Optie B: via GitHub (aanbevolen voor updates)**
1. Maak een gratis account op [github.com](https://github.com)
2. Maak een nieuw repository aan
3. Upload de bestanden
4. In Netlify: kies "Import from Git" → koppel je GitHub repo
5. Elke keer dat je iets aanpast in GitHub, wordt de site automatisch bijgewerkt

### Stap 3 — Eigen domeinnaam (optioneel)
1. Koop een domeinnaam bij bijv. [transip.nl](https://transip.nl) (~€10/jaar)
2. In Netlify: ga naar "Domain settings" → "Add custom domain"
3. Volg de instructies om je DNS in te stellen

## 💻 Lokaal testen

```bash
# Installeer Netlify CLI
npm install -g netlify-cli

# Start lokale server (simuleert Netlify Functions)
netlify dev
```

Ga dan naar `http://localhost:8888`

## 📡 Databronnen

- **House**: [housestockwatcher.com](https://housestockwatcher.com)
- **Senate**: [senatestockwatcher.com](https://senatestockwatcher.com)

Data is publiek en gebaseerd op verplichte STOCK Act meldingen.
Meldingen later dan 45 dagen worden gemarkeerd met ⚠.

## ⚠️ Disclaimer

Deze tool toont uitsluitend publieke, wettelijk verplichte meldingen.
Er worden geen juridische conclusies getrokken over mogelijke handel met voorkennis.
