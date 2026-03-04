# Implementation Plan for Maris’ Advisor Website in Svelte

## Research synthesis from LuniNora and existing advisor sites

LuniNora positions itself explicitly as a modern, trust-centered platform (“Modern · Fair · Menschlich”) and uses calm, editorial language focused on clarity, trust, and human support. citeturn2view1turn8view0 This tone matters because your standalone advisor pages (“separate websites for each advisor”) function as a bridge between (a) a visitor’s emotional problem-state and (b) the structured, transactional booking flow on LuniNora.

The three reference advisor sites you shared show a consistent template logic that balances “spiritual vibe” with professionalism:

- A simple top navigation with three core destinations: **Home / About / Legal**, sometimes with a prominent “Book” CTA. citeturn1view1turn4view1turn4view0  
- A strong hero block with a short, memorable promise line, a portrait, and a single primary action that routes back to the advisor’s profile on LuniNora. citeturn1view0turn1view1turn4view1  
- Services expressed as **human themes** rather than “feature lists”, usually in a clear card/grid layout with short supporting copy. citeturn1view1turn4view1  
- Trust signals are presented as “experience & volume” and framed as reassurance rather than hype. citeturn1view1turn4view1  
- A dedicated Legal page that includes **Impressum + Datenschutzerklärung** plus disclaimers like “this is a presentation site; consultations happen on the platform”. citeturn3view3turn4view0  

For Maris specifically, LuniNora’s profile already sets key “pillars” you should preserve and amplify: her promise of peace through clarity (“Antworten & Klarheit ergeben Ruhe & Frieden”), the focus on negative energies / soul cleansing, grief support, and animal communication. citeturn2view0 Her questionnaire strengthens credibility with measurable experience (20 years, 6,000+ consultations) and defines her communication style (empathetic, honest, direct, understanding). fileciteturn0file0

## Site objectives and positioning for Maris

This site should feel like a **safe landing room**: calm, grounded, and unmistakably “esoteric” without drifting into kitsch. Your north star is: *a visitor can immediately sense (1) what Maris helps with, (2) how she works, (3) that she’s experienced and trustworthy, and (4) where to book*.

Positioning cues you can use (all grounded in Maris’ provided content/profile):

- **Primary outcomes**: relief, calm sleep, stopping the “thought carousel,” inner peace, clarity. citeturn2view0  
- **Primary problem-language** visitors may bring: “dark energies,” “blockages,” grief, the fear of being cursed, unanswered questions that feel heavy. citeturn2view0  
- **Primary differentiators**: hellfühlig perception + specific tools (Healing Water oracle cards, “Meeres Steine”), plus animal communication as a dedicated heart topic. citeturn2view0  
- **Credibility**: 20 years experience and 6,000+ sessions (questionnaire), combined with a clear interpersonal style (direct + empathetic). fileciteturn0file0  

A subtle but important tone choice: Maris’ writing on LuniNora uses “Du/Dir” and intimate, supportive language; the site should mirror that for consistency and authenticity. citeturn2view0

## Information architecture and page structure

Use the same high-performing structure as the reference sites: a **small multi-page site** with strong internal links and a consistently visible booking CTA. citeturn1view1turn4view1turn3view3

Recommended routes:

- **/** (Home / Startseite): the conversion page (clarity, offer, trust, booking)
- **/about** (Über mich): the depth page (story, methods, values, boundaries)
- **/legal** (Rechtliches): Impressum + Datenschutzerklärung + disclaimers

This maps perfectly to SvelteKit’s file-based routing model (each `+page.svelte` defines a page; shared UI goes in `+layout.svelte`). citeturn10search0turn10search4

Home page section order (designed for emotional pacing)

1) **Hero (portrait + promise + CTA)**  
   - Headline = Maris’ slogan (short, memorable)  
   - Subhead = what she does in one line (soul cleansing, neutralizing negative energies, grief support, animal communication) fileciteturn0file0  
   - CTA = “Jetzt Beratung auf LuniNora starten” (or “Rückruf anfordern”) aligned with the platform flow citeturn2view0  

2) **“When things feel heavy” (problem-to-relief bridge)**  
   - 3–5 short “If you…” lines mirroring Maris’ audience language (dark energies, blockages, grief, fear of curse) citeturn2view0  

3) **Services (structured, scannable cards)**  
   - Seelenreinigung  
   - Negative Energien neutralisieren  
   - Trauerbegleitung  
   - Seelische Blockaden lösen  
   - Tierkommunikation (can be its own highlighted block) fileciteturn0file0  

4) **Approach (“Ruhe und Vertrauen”)**  
   - Explain how a session feels and how Maris works (hellfühlig + cards + sea stones; “calm and trust as pillars”) citeturn2view0  

5) **Trust signals (experience + style)**  
   - 20 years  
   - 6,000+ consultations  
   - “einfühlsam, ehrlich, direkt, verständnisvoll” fileciteturn0file0  

6) **Closing CTA (soft but clear)**  
   - “Wenn du bereit bist…” + single button to LuniNora profile citeturn2view0  

About page sections (depth without overwhelm)

- “My story” (long-form; can reuse the provided story almost verbatim) fileciteturn0file0  
- “How I work” (process + tools) citeturn2view0  
- “My values & boundaries” (professionalism + safety)  
- Mini FAQ (address common anxieties such as feeling cursed; set expectations gently) citeturn2view0  

Legal page

Base it on the template seen on the reference sites (presentation-only disclaimer, liability/copyright sections, and an explicit “Stand:” date). citeturn3view3turn4view0  
Update the statutory wording to current German law (see “Compliance” section below). citeturn9search2turn9search1

## Content blueprint and draft copy pack for Maris

Below is **additional** copy you can add beyond Maris’ provided text. Treat this as “draft language” to refine with your AI coding agent and (ideally) get a quick approval from Maris.

Hero copy options (pick one)

Option A (closest to her slogan)  
- Headline: **„Der heutige Tag bringt Licht und eine Wendung.“** citeturn2view0  
- Subhead: *Seelenreinigung · negative Energien neutralisieren · Trauer begleiten · Tierkommunikation* fileciteturn0file0  
- Support line: *Ruhig. Klar. Auf Augenhöhe.* fileciteturn0file0  

Option B (emphasize outcome)  
- Headline: **Klarheit, die beruhigt.** citeturn2view0  
- Subhead: *Wenn Fragen schwer werden, helfe ich dir, wieder Ruhe und inneren Frieden zu spüren.* citeturn2view0  

Microcopy for the primary CTA (keep it platform-aligned)

- “Jetzt Beratung auf LuniNora starten” citeturn4view1turn1view1  
- “Rückruf anfordern” (if you want to mirror LuniNora’s profile flow) citeturn2view0  
- “Zum Profil auf LuniNora” (used as pattern on reference sites) citeturn1view1turn4view1  

Service card drafts (short, specific, non-overpromising)

- **Seelenreinigung**  
  *Wenn du dich innerlich “beschwert” fühlst, schauen wir gemeinsam, was sich lösen darf — behutsam und klar.* citeturn2view0  

- **Negative Energien neutralisieren**  
  *Ich erspüre Belastungen und unterstütze dich dabei, wieder in deine eigene Kraft und Ruhe zu finden.* citeturn2view0  

- **Begleitung bei Trauer**  
  *Trauer muss nicht einsam sein. In einem geschützten Raum darf alles da sein — ohne Druck, ohne Bewertung.* fileciteturn0file0  

- **Seelische Blockaden**  
  *Wenn das Leben “steht” und du nicht weißt warum: Wir bringen Licht in das, was im Inneren wirkt.* citeturn2view0  

- **Tierkommunikation**  
  *Wenn du dein Tier vermisst oder Fragen offen sind: Wir schauen, welche Botschaft dir begegnen möchte.* citeturn2view0  

Short “How a session works” (professional framing)

A compact 3-step block typically reads very well and reduces uncertainty:

1. **Ankommen** – *Du schilderst kurz, was dich bewegt. Ich höre auch “zwischen den Zeilen”.* fileciteturn0file0  
2. **Wahrnehmen & ordnen** – *Über Hellfühligkeit, Orakelkarten und meine Meeres-Steine sortiert sich das Bild.* citeturn2view0  
3. **Impuls & Stärkung** – *Du gehst mit mehr Klarheit, Ruhe und einem nächsten Schritt.* citeturn2view0  

Trust block copy (use numbers sparingly)

- “20 Jahre Erfahrung” fileciteturn0file0  
- “6.000+ Beratungen” fileciteturn0file0  
- “Einfühlsam · ehrlich · direkt · verständnisvoll” fileciteturn0file0  

Professional boundaries (recommended for both credibility and safety)

The reference legal pages already include medical/therapy boundaries. citeturn4view0  
A concise, friendly version you can place in About (and detail further in Legal):

- *Spirituelle Beratung ersetzt keine medizinische, therapeutische oder rechtliche Beratung.* citeturn4view0  
- *Bitte wende dich bei gesundheitlichen Themen an approbierte Fachpersonen.* citeturn4view0  

## Visual design system for a professional “ocean-light” esoteric vibe

Your target look is: **quiet luxury + sea-witch minimalism** (calm, dark depth, soft light accents). This matches both Maris’ “Healing Water / sea stones” details and LuniNora’s brand photography direction (misty landscapes, candlelight, twilight calm). citeturn2view0turn8view0

image_group{"layout":"carousel","aspect_ratio":"16:9","query":["misty river landscape morning light minimal","candle lavender twilight moon aesthetic","sea stones smooth pebbles close up soft light","tarot cards minimal photography dark background"],"num_per_query":1}

Color palette (design tokens, not “hard rules”)

Define tokens as CSS variables so you can theme per advisor later:

- **Background (deep)**: near-black ocean / charcoal (primary page background)  
- **Surface**: slightly lighter slate for cards and sections  
- **Text**: warm off-white (avoid pure white to keep it premium)  
- **Accent A**: sea-glass aqua (links, focus rings, subtle glow)  
- **Accent B**: muted sand / gold (badges, dividers, “light” motif)  

Why this works with the reference style: the example sites rely on large image sections + clear typography + restrained accents, rather than many bright colors. citeturn1view1turn4view1

Typography system

To keep it modern-professional (not “fantasy”), use a two-font structure:

- Headings: elegant serif (for “ritual / story / depth”)  
- Body: clean sans (for clarity and trust)

Keep line length comfortable (roughly 60–75 characters on desktop) and add generous spacing—the reference sites lean into whitespace and calm pacing. citeturn1view1turn4view1

UI components to define up front

To make building fast with an AI coding agent, decide these components early:

- **Navbar**: transparent on hero → solid on scroll; 3 links + CTA button citeturn1view1turn4view1  
- **Hero**: portrait + background image + gradient overlay (avoid busy patterns)  
- **ServiceCard**: icon (simple SVG), title, 2–3 lines, optional “Learn more” anchor  
- **QuoteBlock**: used heavily on inspiration sites; adds “voice” without clutter citeturn1view0turn1view1  
- **MetricRow**: 2–3 stats (years, sessions) as a trust band fileciteturn0file0  
- **CTASection**: single focus, no competing links  
- **Footer**: mini navigation + “Consultations happen on platform” sentence citeturn3view3turn4view0  

Motion and “magic” (keep it subtle)

Use micro-animations, not heavy effects:

- Fade/slide-in on section entry (reduced motion supported)  
- Subtle gradient “light sweep” on CTA hover  
- No parallax unless it’s extremely gentle (professional first)

## Svelte implementation roadmap and component architecture

### Project approach

Because these advisor sites are primarily content + strong SEO, you can build them as a fully prerendered static site with SvelteKit using `adapter-static`. citeturn10search1turn10search5 This keeps hosting flexible and removes backend complexity.

Route structure with SvelteKit

SvelteKit is file-based:

- `src/routes/+page.svelte` → Home citeturn10search0  
- `src/routes/about/+page.svelte` → About citeturn10search0  
- `src/routes/legal/+page.svelte` → Legal citeturn10search0  
- `src/routes/+layout.svelte` → shared shell (nav/footer) citeturn10search4  

If you deploy on entity["company","Vercel","cloud deployment platform"] and later need SSR features, use the official Vercel adapter guidance; Vercel’s docs recommend explicitly installing the adapter for stability. citeturn11search1turn11search0

### Content-as-data (critical for scaling across advisors)

Even if you’re only building Maris now, structure it like a template:

- `src/lib/content/maris.ts` (or `.json`) exporting:
  - hero headline/subhead
  - services array
  - trust metrics
  - story paragraphs
  - faq items
  - platform CTA link + label

This lets you reuse components and swap advisor content without rewriting layout.

### Suggested component tree

Keep it simple and composable:

- `src/lib/components/layout/`  
  - `Navbar.svelte`  
  - `Footer.svelte`

- `src/lib/components/sections/`  
  - `Hero.svelte`  
  - `ServicesGrid.svelte`  
  - `Approach.svelte`  
  - `TrustBand.svelte`  
  - `AnimalCommunicationHighlight.svelte`  
  - `CTASection.svelte`

- `src/lib/components/ui/`  
  - `Button.svelte`  
  - `Card.svelte`  
  - `Badge.svelte`  
  - `Quote.svelte`  
  - `Section.svelte` (handles spacing + optional background variants)

### Performance guardrails (baked into implementation)

The biggest performance wins typically come from image optimization and correct loading priority. SvelteKit’s own performance guidance emphasizes that reducing image weight is often one of the most impactful changes. citeturn10search14 Lighthouse similarly recommends serving properly sized/optimized images and using modern formats where possible. citeturn11search8

Practical rules for your build:

- Don’t lazy-load the hero portrait if it’s the LCP element; prioritize it. (Keep lazy loading for below-the-fold images.) citeturn11search8turn11search19  
- Add width/height to prevent layout shift. citeturn11search8  
- Prefer AVIF/WebP for large images when possible. citeturn11search8  

### Accessibility essentials (professional polish)

Implement these as acceptance criteria:

- Keyboard focus states clearly visible (especially on CTA)  
- “prefers-reduced-motion” disables section animations  
- Adequate contrast (accent aqua must still pass on dark backgrounds)  
- Semantic headings: one H1, then H2/H3 properly nested

Practical recommendation:

- Prefer a simple outbound link to the Instagram profile rather than embedding posts. (You still meet the marketing goal, with less compliance risk.) citeturn12search1turn12search8  

### On-page disclaimers and safety framing

The “Rechtliches” pages in the reference sites include medical/therapy disclaimers; keep a version of this for Maris to remain professional and avoid over-claiming. citeturn4view0turn3view3  
Place a gentle, short disclaimer on About; place the full text on Legal.

### Definition of done (launch checklist)

A “done” build for this advisor site should satisfy:

- Visual polish consistent with the reference templates (hero + sections + quotes + strong CTA). citeturn1view1turn4view1  
- Content correctness (Maris’ experience, themes, story, approach all match her provided materials). fileciteturn0file0turn2view0  
- Legal correctness updated to DDG/TDDDG realities (no outdated “TMG-only” framing). citeturn9search2turn9search1turn12search1  
- Performance: images optimized; no unnecessary third-party scripts. citeturn10search14turn11search8  
- Deployment: static prerender works end-to-end (ideal for this content-type site). citeturn10search1turn10search5
