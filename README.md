# Fragrant Signatures — Projektna dokumentacija

Stranica za priručnik **Mirisni potpisi / Fragrant Signatures** autorice Slobodanke Poštić.  
Astro + Tailwind CSS, deploy na Vercel, domena `fragrant-signatures.eu`.

---

## Struktura stranica

| HR stranica | EN stranica | Datoteka |
|---|---|---|
| `/` | `/en/` | `src/pages/index.astro` / `src/pages/en/index.astro` |
| `/edukacija/` | `/en/education/` | `src/pages/edukacija.astro` / `src/pages/en/education.astro` |
| `/novosti/` | `/en/news/` | `src/pages/novosti.astro` / `src/pages/en/news.astro` |
| `/dogadjanja/` | `/en/events/` | `src/pages/dogadjanja.astro` / `src/pages/en/events.astro` |
| `/naruci/` | `/en/order/` | `src/pages/naruci.astro` / `src/pages/en/order.astro` |
| `/recenzije/` | `/en/reviews/` | `src/pages/recenzije.astro` / `src/pages/en/reviews.astro` |
| `/uvod/` | `/en/introduction/` | `src/pages/uvod.astro` / `src/pages/en/introduction.astro` |
| `/o-prirucniku/` | `/en/about-manual/` | `src/pages/o-prirucniku.astro` / `src/pages/en/about-manual.astro` |
| `/o-autorici/` | `/en/about-author/` | `src/pages/o-autorici.astro` / `src/pages/en/about-author.astro` |
| `/pozadine/` | `/en/wallpapers/` | `src/pages/pozadine.astro` / `src/pages/en/wallpapers.astro` |

---

## Kako dodati novu vijest (Novosti)

### 1. Pripremi sliku
- Dimenzije: **1200 × 800 px**, omjer 3:2
- Format: `.jpg`
- Naziv bez razmaka i dijakritičkih znakova, npr. `naziv-vijesti.jpg`
- Spremi u: `public/images/`

### 2. Kreiraj MDX datoteku — HR verzija
Kopiraj postojeću datoteku iz `src/content/novosti/` i promijeni frontmatter:

```yaml
---
title: 'Naslov vijesti'
date: '22. veljače 2026.'           # Hrvatski format datuma
thumbnail: '/images/naziv-slike.jpg'
heroAlt: 'Opis slike za ekrane čitača (screen reader)'
preview: 'Kratki uvod koji se vidi u listi bez otvaranja (1-2 rečenice).'
order: 1                             # 1 = najnoviji; smanji order broj za sve starije za 1
---

Tekst članka ovdje, u Markdownu.
```

> **Važno:** Za istaknute blokove koristi `<div>`, NIKAD `<p>` — MDX parser generira invalid HTML unutar `<p>` tagova što stvara vizualne artefakte.

```mdx
✅ ISPRAVNO:
<div class="bg-gradient-to-r from-botanical-50 to-nature-50 p-6 rounded-2xl border-l-4 border-accent-500 not-prose">
  Istaknuti tekst.
</div>

❌ POGREŠNO:
<p class="bg-gradient-to-r ...">
  Istaknuti tekst.
</p>
```

### 3. Kreiraj MDX datoteku — EN verzija (ako postoji prijevod)
Isti postupak, datoteka ide u `src/content/news/`, tekst na engleskom.

### 4. Deploy
```bash
cd /Users/renata/Desktop/fragrantsignatures
git add .
git commit -m "Novosti: dodaj članak 'Naslov vijesti'"
git push origin main
```
Vercel automatski rebuilda i deploya.

---

## Deploy workflow

```
Cursor (uredi kod) → git push origin main → Vercel (automatski rebuild)
```

**NE treba:**
- cPanel
- ZIP arhive
- Ručni upload datoteka
- `npm run build` lokalno

**Domene:**
- `https://fragrant-signatures.eu`
- `https://www.fragrant-signatures.eu`

---

## Kontakt podaci (na stranici)

- Telefon: `+385 91 788 6783`
- E-mail: `slo.postic@gmail.com`

---

## Checklist prije objave novih izmjena

- [ ] Lokalni build bez grešaka: `npm run build`
- [ ] Slike su u `public/images/`, bez razmaka u imenu
- [ ] MDX callout blokovi koriste `<div>`, ne `<p>`
- [ ] `order` polje u frontmatteru ispravno postavljeno (manji broj = noviji članak)
- [ ] Cijena je svugdje **55,00 €** (naruci, en/order, index, en/index)
- [ ] Git commit s jasnim opisom, push na `main`

---

## Lokalni razvoj

```bash
npm install
npm run dev        # localhost:4321
```
