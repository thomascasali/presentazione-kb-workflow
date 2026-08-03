# Presentazione kb-workflow — Dare una memoria all'AI

## Stack Tecnologico
- HTML5 + CSS3 (CSS Grid, Flexbox, clamp(), media queries)
- React 18 via CDN (unpkg.com)
- Babel standalone per transpilazione JSX
- SVG per diagrammi e simulatori
- Google Fonts: Fraunces, Public Sans, IBM Plex Mono
- NESSUN bundler, NESSUN npm, NESSUN framework aggiuntivo. Solo file HTML standalone, apribili anche da `file://`.

## Architettura
- `index.html`: dashboard con le 4 card degli atti (HTML/CSS puro, nessun React)
- `atto1-il-problema.html`, `atto2-larchitettura.html`, `atto3-le-storie.html`, `atto4-perche-lo-regalo.html`: un file HTML per atto
- Ogni file atto è completamente standalone (include React, Babel, CSS inline)
- I componenti React sono definiti dentro un tag `<script type="text/babel">` nel file HTML

## Design System
Tema scuro con questi colori (definiti come oggetto `colors` in ogni file atto):
```js
const colors = {
  bg: '#0a0e17', bgCard: '#111827', bgLight: '#1e293b',
  accent: '...',      // varia per atto, vedi tabella sotto
  accentAlt: '...',   // variante più chiara dello stesso accent
  text: '#f1f5f9', textDim: '#94a3b8', textMuted: '#64748b',
  border: '#334155',
  success: '#22c55e', danger: '#ef4444', warn: '#f59e0b',
  info: '#0ea5e9', purple: '#a78bfa'
};
```

### Palette per atto

| Atto | Titolo | Accent | Accent-alt | Icona |
|------|--------|--------|------------|-------|
| 1 | Il problema | `#3b82f6` (blu) | `#38bdf8` | 🧠 |
| 2 | L'architettura | `#10b981` (verde) | `#34d399` | 🏗️ |
| 3 | Le tre storie | `#ef4444` (rosso) | `#f87171` | 📖 |
| 4 | Perché lo regalo | `#8b5cf6` (viola) | `#a78bfa` | 🎁 |

## Componenti Riutilizzabili (da definire in ogni file atto)
- `Box({ type, title, children })`: callout `info` / `warn` / `danger` / `tip` / `success`
- `Glow({ children, color })`: card con bordo luminoso gradient
- `StatBlock` (solo Atto 3): numero grande + etichetta, per i 26/4/1 della Storia 3
- `Code`-style block (solo Atto 3, dentro `SpotTheBug`): blocco monospace stile terminale

## Struttura Slide

Ogni atto segue questa struttura:
1. Slide titolo (centrata, icona, nome atto, titolo, sottotitolo)
2. Slide concetti/narrazione (con box informativi e, dove serve, diagrammi SVG)
3. Slide simulatore/i interattivo/i (Atto 2 ne ha 2, Atto 3 ha il componente "spot the bug")
4. Slide di chiusura atto con collegamento all'atto successivo

Conteggio slide: Atto 1 = 5, Atto 2 = 6, Atto 3 = 8, Atto 4 = 5 → **24 slide totali**, 3 simulatori interattivi.

## Simulatori interattivi

- **Atto 2, slide 2.3 — "Il viaggio di un fatto"**: componente React con `useState` + `setInterval`. Un pallino si muove tra i riquadri Sessioni sporche → Wiki viva → esame → KB stabile. Due checkbox ("Verificato in produzione", "Visto almeno 2 volte") determinano se il pallino passa l'esame o si blocca.
- **Atto 2, slide 2.6 — "L'orchestra in azione"**: card cliccabili per i ruoli (Direttore, 4 specialisti, Controllore) con pannello informativo, più un bottone che anima una sequenza a step (con `setTimeout` incatenati) che mostra il ciclo lavoro → verifica → correzione → verifica → fine, includendo un passaggio in cui il controllore respinge il lavoro.
- **Atto 3, slide 3.3 — "Spot the bug"**: due blocchi di codice affiancati, uno corretto (`---`) e uno con il bug reale (`\---`). Un bottone rivela ed evidenzia il carattere di troppo con un'animazione CSS (`@keyframes pulseBug`).

## Responsive Design
- Testo sempre con `clamp()`, mai `px` fissi per font-size dei contenuti
- SVG sempre con `viewBox`, mai dimensioni fisse in px
- Media query a `max-width: 768px` in ogni file: padding ridotto, font più piccoli, grid a 1 colonna dove serve (`.bug-grid`, `.stat-row`)
- Container principale: `maxWidth: '1200px'`, con padding laterale responsive

## Navigazione (uguale in tutti e 4 gli atti)
- Freccia destra / Spazio: slide successiva
- Freccia sinistra: slide precedente
- ESC: torna a `index.html`
- Tasti 1-9: salto diretto alla slide N (se esiste)
- Barra superiore fissa (`top-bar`): link indice, nome atto, contatore slide, progress bar
- Barra inferiore fissa (`bottom-bar`): bottoni indietro/avanti + link all'atto precedente (solo sulla prima slide) e all'atto successivo (solo sull'ultima slide, sull'Atto 4 diventa "Torna all'indice")

## Vincoli di contenuto (da rispettare in ogni modifica futura)
- Mai IP, porte o path di server/macchine privati
- Mai nomi di persone terze (solo "il prof", "io", "voi studenti")
- Mai nomi (né sigle né abbreviazioni) di progetti non pubblici: citabili solo i prodotti pubblici elencati qui sotto
- I nomi di prodotti pubblici del prof (fivbeach.com, maraffaonline.it, tornei.app, beacharena.it, palabvu.it, aibvc.app, clubseries.app, centrosportivo.online, vollytics.com, beachvolleysociety.com) sono citabili e vanno resi cliccabili con `target="_blank"`
- Il repo `https://github.com/thomascasali/claude-kb-workflow` diventa pubblico l'11 agosto 2026: fino ad allora il link nella slide finale va mantenuto con l'etichetta "pubblico dall'11/08/2026"

## Link GitHub Pages
https://thomascasali.github.io/presentazione-kb-workflow/
