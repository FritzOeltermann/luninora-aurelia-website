# Implementation plan for a Svelte advisor microsite inspired by the Luninora ecosystem

## What the reference sites reveal about structure and vibe

The “advisor microsite” pattern you’re aiming for is already visible in how Luninora presents advisors and how the two inspiration pages translate that into a personal, atmospheric landing page.

On Luninora, advisor profiles consistently contain a hero area with identity + trust signals (name, short tagline, rating, years of experience, categories), followed by “Über mich”-style storytelling (“Meine Geschichte”), a “Beratungsansatz” section, and an explicit list of themes/topics the advisor covers. citeturn1view2turn6view2 This gives you a stable information architecture: it’s content-first, trust-first, and makes methods + scope easy to scan.

The two inspiration pages add the crucial “vibe” layer: they feel like calm, premium spiritual brands rather than marketplace listings. Common patterns:

A bold, emotionally framed headline and short manifesto in the hero (“truth/clarity/strength” style) plus a quick set of keyword topics (love, decisions, spiritual growth, etc.). citeturn1view0  
A strong personal authority signal via experience metrics and (optionally) “number of sessions,” combined with a poetic promise of what the session feels like. citeturn1view1  
Repeated, clear CTAs that send users back to the Luninora booking flow (button text like “book now / request consultation”), so the microsite acts as branded top-of-funnel and trust builder rather than a standalone checkout. citeturn1view0turn1view1  
Quote blocks used as “emotional anchors” (a short worldview statement) and a compact “profile card” style block near the bottom summarizing the advisor and linking back to their platform profile. citeturn1view0turn1view1

Brand-wise, Luninora positions itself as modern, fair, and calm (“home for spiritual counseling,” “quiet, serious atmosphere,” “clarity,” “trust”) and explicitly frames spirituality as responsible and not sensational. citeturn6view0turn6view1 That tone is worth mirroring in your microsite copy and visual design, even when the advisor’s individual “flair” is more mystical.

image_group{"layout":"carousel","aspect_ratio":"16:9","query":["moonlit forest background aesthetic","astrology constellation illustration minimal","tarot card texture background","soft gradient spiritual website design"],"num_per_query":1}

## Fictional advisor concept built from the inspirations

Below is a fictional advisor profile that deliberately blends the “honest clarity + directness” style you see on entity["people","Evelyn Pahlke","spiritual advisor, de"] with the “energy work + card system + strong experience proof” style you see on entity["people","Andrea Richter","spiritual advisor, de"], while staying aligned with Luninora’s “responsible, calm, modern” brand language. citeturn1view0turn1view1turn6view1

**Fictional advisor name:** Elara Mondlicht (fiktiv)  
**Core niche (“esoteric area”):** “Moon-cycle clarity readings” — a combination of intuitive perception, “Russian-style oracle / Lenormand-inspired” spreads, and gentle energy clearing as a session closing. (This echoes the “russian cards + energy work” positioning from the inspiration page, but remains original.) citeturn1view1  
**Signature promise:** Calm, honest clarity. No sugarcoating, but always respectful and empowering (mirrors the “no empty hope / honest clarity” stance). citeturn1view0turn1view2  
**Primary topics (chips):** Love & attachment patterns, decision-making, career direction, spiritual growth, self-worth, boundaries. This mirrors the “scan-first topic cluster” pattern from the inspiration hero. citeturn1view0turn1view1  
**Trust signals (fictional but plausible):** “12+ years experience” and “35,000+ sessions” (your choice—keep realistic and consistent with the tone of the page). The “years + sessions count” structure matches the inspiration style. citeturn1view1  
**Safety/disclaimer stance:** Add a gentle but explicit disclaimer similar to Luninora advisor profiles that limit medical/legal topics and frame energy work as non-medical. citeturn1view2  
**CTA strategy:** Buttons that point to “Book on Luninora” (for your fictional site: keep URL as placeholder). The inspiration pages do exactly this. citeturn1view0turn1view1

This gives you enough specificity to design a tailored vibe (moonlight, forest calm, soft starlight accents) while keeping the content modules reusable across many real advisors later.

## Page architecture and component map

To match the inspiration pages, implement this microsite as a **single-page layout with anchored sections** (Start, Story, Approach, Specialties/Services, Booking, Legal). This is consistent with the “simple navigation, scroll-based reading” feel of the reference sites. citeturn1view0turn1view1

Recommended section order:

**Top navigation (sticky, minimal)**  
Links: Start, About, Approach, Specialties, Book, Legal. (Use anchor links like `#about`.) The inspiration pages keep navigation extremely small. citeturn1view0turn1view1

**Hero (above the fold)**  
Content blocks:
- Headline (emotional framing: clarity/trust)
- 2–4 sentence manifesto (“how I work, what you’ll get”)
- Topic chips (keywords)
- Primary CTA (“Book on Luninora”)
- Portrait image (right side or centered)
This mirrors both inspiration pages’ immediate “identity + promise + CTA.” citeturn1view0turn1view1

**Quote block (short, poetic positioning)**  
One strong paragraph or two lines; visually differentiated. This pattern is prominent on the inspiration pages. citeturn1view1turn1view0

**About / My story**  
Long-form story with “origin, training, turning point, what I believe.” This matches both Luninora advisor profiles and the inspiration pages. citeturn1view2turn1view0

**Approach / Methods**  
Present as 3–5 “method cards”:
- Intuitive insight (no tools)
- Oracle spreads (Russian-style / Lenormand-inspired)
- Moon-cycle timing (new moon / full moon reflection)
- Energy clearing close
This echoes the “method list” style used on the inspiration page. citeturn1view0turn1view1

**Specialties / Services**  
A grid of service offerings with short outcomes and what the client can expect.
Example:
- “Relationship clarity reading”
- “Decision compass”
- “Career & calling alignment”
- “Energetic reset (session closing)”
Luninora also categorizes advisors by topics/methods like tarot/astrology/energy work; keep your content compatible with that taxonomy. citeturn6view2turn1view2

**Trust signals and “mini profile card”**  
Add a compact block: years experience, sessions, rating (optional), starting price (optional), and “secure booking via platform.” This mirrors the inspiration “profile on platform” card concept. citeturn1view0turn1view1

**Booking section**  
Include 3 “benefit bullets” (first session online, discreet, clear structure) and a strong CTA button. This mirrors the booking section pattern on the inspiration page. citeturn1view1

**Legal section**  
Impressum + Datenschutz placeholders (since you’re not deploying, treat as content modules). Luninora and the inspiration pages expose legal navigation clearly. citeturn6view1turn1view1

## SvelteKit implementation blueprint and file structure

Because your company uses Svelte and (eventually) deploys on entity["company","Vercel","cloud deployment platform"], the cleanest “microsite template” approach is **SvelteKit**, even if you don’t deploy this particular fictional site. Official SvelteKit docs now recommend scaffolding via `npx sv create`, and they describe the filesystem routing model (`src/routes`, `+page.svelte`). citeturn8view0

### Project setup

Use the SvelteKit scaffolder:

```bash
npx sv create advisor-microsite
cd advisor-microsite
npm install
npm run dev
```

This matches the current SvelteKit recommended flow. citeturn8view0

Suggested options during scaffolding (choose what your team prefers):
- TypeScript: yes (helps keep content schemas stable across many advisors)
- ESLint/Prettier: yes (keeps AI-agent output consistent)

### Folder and route layout

A simple, scalable structure:

```text
src/
  app.html
  routes/
    +layout.svelte
    +page.svelte
  lib/
    data/
      advisor.ts
    components/
      Navbar.svelte
      Hero.svelte
      Section.svelte
      ChipRow.svelte
      QuoteBlock.svelte
      MethodCards.svelte
      ServicesGrid.svelte
      TrustBar.svelte
      BookingCTA.svelte
      Legal.svelte
      Footer.svelte
    styles/
      tokens.css
      global.css
static/
  images/
    elara-portrait.webp
    bg-moonforest.webp
    texture-stars.svg
```

SvelteKit’s routing is file-based; keeping everything in `+page.svelte` supports the “single-page anchored microsite” approach. citeturn8view0turn7search10

### Data-driven content model (so you can scale to many advisors later)

Create a single `advisor.ts` file that exports an object. Your components render from this object, not hardcoded strings in each component. This makes “one template, many advisor sites” straightforward later.

Example (shape only—fill with your fictional copy):

```ts
// src/lib/data/advisor.ts
export type AdvisorTheme = {
  name: string;
  accent: string;
  accent2: string;
  bg: string;
  text: string;
};

export type AdvisorProfile = {
  displayName: string;
  tagline: string;
  heroHeadline: string;
  heroSubcopy: string;
  topics: string[];
  stats: { label: string; value: string }[];
  portraitSrc: string;
  backgroundSrc: string;
  quote: string;

  story: { title: string; paragraphs: string[] };
  methods: { title: string; description: string }[];
  services: { title: string; outcome: string; includes: string[] }[];

  booking: {
    ctaLabel: string;
    ctaHref: string; // placeholder for fictional advisor
    bullets: string[];
    trustNote: string;
  };

  disclaimers: string[];
  legal: { impressum: string; datenschutz: string };
  theme: AdvisorTheme;
};

export const advisor: AdvisorProfile = {
  // ...
};
```

### Layout and anchors

Inside `src/routes/+page.svelte` you compose your components in the page order and pass sections the data they need:

```svelte
<script lang="ts">
  import { advisor } from '$lib/data/advisor';
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import QuoteBlock from '$lib/components/QuoteBlock.svelte';
  import MethodCards from '$lib/components/MethodCards.svelte';
  import ServicesGrid from '$lib/components/ServicesGrid.svelte';
  import TrustBar from '$lib/components/TrustBar.svelte';
  import BookingCTA from '$lib/components/BookingCTA.svelte';
  import Legal from '$lib/components/Legal.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>{advisor.displayName} – Spiritual Guidance</title>
  <meta name="description" content={advisor.tagline} />
</svelte:head>

<Navbar />

<main id="main">
  <Hero {advisor} />
  <QuoteBlock text={advisor.quote} />

  <section id="about">
    <!-- story -->
  </section>

  <section id="approach">
    <MethodCards items={advisor.methods} />
  </section>

  <section id="specialties">
    <ServicesGrid items={advisor.services} />
  </section>

  <TrustBar stats={advisor.stats} />

  <section id="book">
    <BookingCTA booking={advisor.booking} />
  </section>

  <section id="legal">
    <Legal legal={advisor.legal} disclaimers={advisor.disclaimers} />
  </section>

  <Footer />
</main>
```

SvelteKit uses the `<title>` element for route announcements in client-side navigation; even if your microsite is single-page, setting a strong title is still recommended for accessibility and SEO. citeturn9view1

### Scroll and navigation behavior

For anchor navigation, keep it simple with `<a href="#about">About</a>`. SvelteKit’s link-behavior documentation notes that hash links scroll to matching IDs. citeturn9view0  
Also implement a “skip to content” link to match accessibility best practices. A practical approach is to link to `#main` and visually reveal it on focus. citeturn7search2turn9view1

## Design system for an “esoteric but premium” vibe

The fastest way to get the right feel (without overengineering) is to build a tiny theme system with CSS variables, then layer background imagery + subtle glow + careful typography. This approach supports “tailored per advisor” styling with minimal code changes.

### Theme tokens

Create `src/lib/styles/tokens.css`:

```css
:root {
  --bg: #070712;
  --text: #f3f0ff;
  --muted: rgba(243, 240, 255, 0.70);

  --accent: #b49cff;   /* moonlit lavender */
  --accent2: #7ee0d6;  /* aurora teal */

  --card: rgba(255,255,255,0.06);
  --card-border: rgba(255,255,255,0.14);

  --radius: 18px;
  --shadow: 0 20px 60px rgba(0,0,0,0.55);

  --max: 1080px;
}

@media (prefers-reduced-motion: reduce) {
  :root { scroll-behavior: auto; }
}
```

Then in `global.css`, implement:
- a background stack (image + gradient overlay + subtle noise/texture)
- large whitespace and calm line heights
- consistent card styling for method/service items

### Typography choices (inspired by the references)

The inspiration pages communicate “premium calm” through:
- short, strong headings
- readable body paragraphs
- italic/quote styling for emotional anchors citeturn1view0turn1view1

Implementation suggestion:
- Headings: an elegant serif (e.g., Cormorant Garamond)
- Body: a modern sans (e.g., Inter)

Add with a simple `<link>` in `app.html` or self-host. (Keep it simple for your first iteration.)

### Micro-interactions that match the vibe (without being gimmicky)

Use motion sparingly:
- Gentle fade-in for sections (IntersectionObserver + CSS class)
- Soft hover glow on cards/buttons
- Respect `prefers-reduced-motion`

This keeps the “modern, calm atmosphere” aligned with Luninora’s brand language. citeturn6view1

### Content tone guidelines

To stay consistent with the ecosystem:
- Make “clarity and empowerment” central (Luninora emphasizes clarity and responsible guidance). citeturn6view0turn6view1  
- Avoid “guarantees” and sensational claims.
- Add explicit disclaimers similar to those found in Luninora advisor profiles (no legal/medical replacement). citeturn1view2

## Step-by-step workflow to use with an AI coding agent

This is the practical sequence that works well when delegating implementation to an AI coding agent while keeping you in control of structure, aesthetics, and quality.

### Build the skeleton first

Ask your AI coding agent to:
- Scaffold with `npx sv create`
- Create the folder structure
- Add `tokens.css` + `global.css`
- Implement the page composition in `+page.svelte`

Reference: SvelteKit’s recommended project creation and route/file conventions. citeturn8view0turn7search10

**Acceptance check:** the dev server runs, shows placeholder sections, navigation anchors scroll correctly.

### Lock the data contract

Have the agent implement `advisor.ts` with a strict schema and placeholder content first. Then you refine the copy.

Why this matters: It forces consistency across future advisor sites (same modules, different content) while still allowing per-advisor flair (theme + imagery + voice). This mirrors how Luninora can present many advisors with consistent modules, even though each advisor’s story differs. citeturn6view2turn1view2

### Implement components in an order that protects the vibe

Component build order:
1. `Hero` (sets typography + atmosphere baseline)
2. `QuoteBlock` (defines emotional styling language)
3. `MethodCards` + `ServicesGrid` (reusable card system)
4. `TrustBar` (stats, credibility)
5. `BookingCTA` (conversion pattern)
6. `Legal` + `Footer` (completeness)

This matches how the inspiration pages lead with identity + promise, then deepen into story and method, then re-surface the booking CTA. citeturn1view0turn1view1

### Accessibility + UX hardening

Minimum checklist (have the agent implement, you verify):

A skip link that jumps to the `<main>` content. citeturn7search2  
Meaningful `<title>` and meta description in `<svelte:head>`. citeturn9view1  
Keyboard-visible focus states on nav and CTA buttons.  
Alt text for the portrait and background images (or mark background decorative).  
Respect `prefers-reduced-motion`.  
Set `lang` correctly in `src/app.html` if your page content is German (SvelteKit notes you should set `lang` to match your content language). citeturn9view1

### Optional: static-build friendliness for later

Even though you’re not deploying this fictional version, it’s worth keeping the code “static-friendly” so the same template can later prerender for production microsites.

SvelteKit documents static site generation through `adapter-static` plus the `prerender` option. citeturn8view1  
You don’t have to implement it now—but avoid patterns that would block it (e.g., heavy server-only dependencies).

## Appendix: fictional content pack for Elara Mondlicht

Use this as your initial `advisor.ts` content. It’s written to fit the reference structure (manifesto hero → story → approach → specialties → booking → disclaimers). The wording intentionally echoes the “honest clarity” voice found on the inspiration page and the “energy work + card system + experience proof” framing, but is not copied. citeturn1view0turn1view1

**Hero headline**  
“Clarity, calm, and a gentle return to your inner knowing.”

**Hero subcopy**  
“I work with quiet intuition, moon-cycle timing, and a grounded oracle practice to bring your situation into focus. I won’t promise miracles. I will help you see patterns, options, and the next honest step—with warmth, respect, and clear language.”

**Topic chips**  
Love & attachment • Decision-making • Career direction • Spiritual growth • Self-worth • Boundaries • Energetic reset

**Quote block**  
“When everything feels loud, clarity rarely comes from more pressure. It comes from a softer, truer look.”

**My story (3 short paragraphs)**  
- Early sensitivity + learning to trust perception  
- The turning point (burnout / life transition / spiritual practice deepening)  
- Why she works with clients now: “help you see what’s already there”

**Methods (cards)**  
- “Intuitive clarity (no tools)” — patterns, dynamics, emotional undercurrents  
- “Oracle spread (Russian / Lenormand-inspired)” — structured reflection, not fortune promises  
- “Moon-cycle alignment” — timing, integration, journaling prompts  
- “Energy clearing close” — calm nervous system reset (breath + visualization)

**Services (grid)**  
- Relationship clarity session (what’s happening beneath the surface)  
- Decision compass (options mapped, values clarified)  
- Career & calling (direction, boundaries, confidence)  
- Energetic reset (a short integrative closing)

**Trust signals**  
- “12+ years experience”  
- “35,000+ sessions”  
- “Discreet + respectful guidance”

**Booking bullets**  
- Online via platform (secure, convenient)  
- Clear structure: intention → insight → next steps  
- Calm, supportive, and honest tone

**Disclaimers (gentle, explicit)**  
- “Spiritual guidance is not medical, psychological, or legal advice.” citeturn1view2  
- “I don’t answer questions that require professional legal/medical expertise.” citeturn1view2  
- “You always keep your agency—my role is clarity, not control.”

Competitor context note: platforms like entity["company","Questico","spiritual counseling portal, de"] position themselves similarly around categories (tarot, astrology, mediumship) and onboarding offers, which reinforces why these advisor microsites should emphasize differentiation through voice, method framing, and calm premium flair rather than generic “tarot reader” claims. citeturn10view0turn10view2