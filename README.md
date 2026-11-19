# Siddhesh — Portfolio

An immersive 3D portfolio. Scrolling flies the camera through a dark, misty world, one room per section:

| Room | What happens |
| --- | --- |
| **Smoke chamber** (hero) | 22k particles spell *PORTFOLIO*, flow into *SIDDHESH*, and the portrait condenses out of real-time shader smoke |
| **Portal** | A breathing ring of particles frames the intro; the camera flies through it |
| **Monolith gallery** | Black glass slabs under light shafts, each with a live animated project screen, reflected in the floor |
| **Constellation** | Skills as a 3D neural network with travelling signals; hover a category to light it up |
| **Towers of light** | Coding stats rise from the floor as glowing towers |
| **Corridor of time** | Walk through lit doorways: 2021 → 2023 → 2026 |
| **Certificate orbit** | Eight cards orbit a light core; hover to pull one forward |
| **Horizon** | A moon rises over the mist for the contact section |

## Tech

- [React 18](https://react.dev) + [Vite](https://vitejs.dev)
- [Three.js](https://threejs.org) via [React Three Fiber](https://r3f.docs.pmnd.rs) and [drei](https://github.com/pmndrs/drei)
- Custom GLSL shaders (particle morph, smoke dissolve, ground mist, moon)
- [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing): bloom, film grain, vignette, SMAA
- [Lenis](https://lenis.darkroom.engineering) smooth scroll
- Self-hosted fonts via Fontsource: Inter Tight, Instrument Serif, JetBrains Mono

## Run locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Build & deploy

```bash
npm run build
```

Deploy the `dist/` folder to any static host: Vercel, Netlify, GitHub Pages or Cloudflare Pages. The build uses relative paths, so it works from a sub-folder too.

## Project structure

```
src/
  content.js        all text: projects, skills, stats, journey, certifications
  timeline.js       camera path, room positions and scroll timing
  store.js          shared per-frame state
  App.jsx           canvas, overlay, scroll setup
  lib/scroll.js     Lenis smooth scroll
  world/            3D rooms
    Hero.jsx          particle name morph + smoke portrait
    Gate.jsx          particle portal
    Gallery.jsx       monoliths with canvas-drawn screens
    Constellation.jsx skills network
    Towers.jsx        stat towers
    Corridor.jsx      lit doorways
    CertOrbit.jsx     orbiting certificate cards
    Horizon.jsx       moon + horizon light
    Environment.jsx   reflective floor, dust, ground mist
    World.jsx         camera rig, fog, post-processing
  ui/               HTML overlay: text panels, nav, cursor, contact
```

## Make it yours

1. Edit `src/content.js` with your own projects, skills and journey.
2. Replace `src/assets/siddhesh.webp` with a portrait on a transparent background (about 880×940 px works well).
3. Change the two words in `src/world/Hero.jsx` (search for `sampleWord`).

The contact icons and the Résumé button are display-only by design.

## Performance notes

This is a WebGL-heavy site. Phones get fewer particles and a simpler floor automatically. If a device struggles, lower `dpr` in `App.jsx` or the particle counts in `Hero.jsx`.

---

Designed & built by Siddhesh.
