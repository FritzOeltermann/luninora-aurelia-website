<script lang="ts">
	import { advisor } from '$lib/data/advisor';
	import { reveal } from '$lib/actions/reveal';
	import MethodCards from '$lib/components/MethodCards.svelte';
	import QuoteBlock from '$lib/components/QuoteBlock.svelte';
	import BookingSection from '$lib/components/BookingSection.svelte';
</script>

<svelte:head>
	<title>Über mich – {advisor.displayName}</title>
	<meta name="description" content="Erfahre mehr über {advisor.displayName} – Meine Geschichte, mein Ansatz und meine Angebote." />
</svelte:head>

<!-- Meine Philosophie: heading + quote + card, with background image -->
<section class="philosophy" class:has-bg={!!advisor.aboutHeader.backgroundSrc} use:reveal>
	{#if advisor.aboutHeader.backgroundSrc}
		<img class="bg-image" src={advisor.aboutHeader.backgroundSrc} alt="" aria-hidden="true" />
		<div class="bg-overlay"></div>
	{/if}
	<div class="philosophy-inner container">
		<h2>{advisor.aboutHeader.title}</h2>

		<div class="philosophy-card">
			<h3>{advisor.aboutHeader.cardHeading}</h3>
			<p>{advisor.aboutHeader.cardDescription}</p>
		</div>

		<blockquote class="philosophy-quote">
			<p>„{advisor.aboutHeader.quote}"</p>
		</blockquote>
	</div>
</section>

<!-- Meine Geschichte: two-column with portrait -->
<section id="story" class="story-section" use:reveal>
	<div class="container">
		<h2>{advisor.story.title}</h2>

		<div class="story-grid">
			<div class="story-portrait">
				<img
					src={advisor.aboutPortraitSrc}
					alt="{advisor.displayName} – Porträt"
					onerror={(e: Event) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
				/>
			</div>

			<div class="story-text">
				{#each advisor.story.sections as section}
					{#if section.heading}
						<h3>{section.heading}</h3>
					{/if}
					{#each section.paragraphs as paragraph}
						<p>{paragraph}</p>
					{/each}
				{/each}
			</div>
		</div>
	</div>
</section>

<QuoteBlock text="In meinen Beratungen geht es mir darum, den Menschen auf dem Weg zu sich selbst zu begleiten und ihm dabei zu helfen, den Frieden und die Sicherheit in sich selbst zu entdecken." backgroundSrc="/images/bg-about-quote.png" />

<section id="training" class="training-approach" use:reveal>
	<div class="container">
		<h2>Meine Arbeit und Ausbildungen</h2>
		<p class="training-text">Es folgten zahlreiche Ausbildungen und Weiterbildungen – Reiki, Prana Healing, Geistheilung, Quanten-Transformation, Telepathie und Telekinese sowie die Ausbildung zur Auraberaterin. Jede Station hat meine Wahrnehmung vertieft und meinen eigenen Stil geformt. Seit 2003 arbeite ich hauptberuflich als spirituelle Lebensberaterin. Menschen energetisch zu unterstützen, ihnen Klarheit und Kraft zurückzugeben, ist für mich nicht nur ein Beruf, sondern meine Berufung.</p>
		<MethodCards items={advisor.methods} />
	</div>
</section>

<BookingSection booking={advisor.booking} />

<style>
	/* ── Meine Philosophie section ── */
	.philosophy {
		position: relative;
		padding-top: 6rem;
		padding-bottom: 6rem;
		padding-inline: var(--content-pad);
		overflow: hidden;
		text-align: center;
	}

	.philosophy.has-bg {
		padding-top: 10rem;
		padding-bottom: 14rem;
	}

	.philosophy .bg-image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 0;
	}

	.philosophy .bg-overlay {
		position: absolute;
		inset: 0;
		z-index: 1;
		background:
			linear-gradient(to bottom, var(--bg) 0%, transparent 20%),
			linear-gradient(to top, var(--bg) 0%, transparent 35%),
			rgba(7, 7, 18, 0.5);
	}

	.philosophy-inner {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		max-width: 48rem;
	}

	.philosophy-inner h2 {
		margin-bottom: 0;
	}

	.philosophy-quote {
		margin-top: 1.5rem;
	}

	.philosophy-quote p {
		font-family: var(--font-heading);
		font-style: italic;
		font-weight: 700;
		font-size: clamp(1.3rem, 3vw, 1.8rem);
		line-height: 1.6;
		color: var(--accent);
	}

	/* Card (same design as booking card) */
	.philosophy-card {
		background: var(--card);
		border: 1px solid var(--card-border);
		border-radius: 24px;
		padding: 3rem 2.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		max-width: 42rem;
		width: 100%;
	}

	@media (min-width: 768px) {
		.philosophy-card {
			padding: 3.5rem 3.5rem;
		}
	}

	.philosophy-card h3 {
		font-family: var(--font-heading);
		font-size: clamp(1.8rem, 4vw, 2.8rem);
		color: var(--accent);
		margin-bottom: 0;
	}

	.philosophy-card p {
		font-size: 1.05rem;
		line-height: 1.8;
		color: var(--text-muted);
		max-width: 60ch;
	}

	/* ── Story section ── */
	.story-section {
		padding-block: var(--section-gap);
		padding-inline: var(--content-pad);
	}

	.story-section h2 {
		margin-bottom: 2.5rem;
		text-align: center;
	}

	.story-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2.5rem;
		align-items: start;
	}

	@media (min-width: 768px) {
		.story-grid {
			grid-template-columns: 1fr 1fr;
			gap: 3.5rem;
		}
	}

	.story-portrait {
		display: flex;
		justify-content: center;
	}

	.story-portrait img {
		width: 100%;
		max-width: 420px;
		border-radius: 18px;
		object-fit: cover;
		aspect-ratio: 3 / 4;
	}

	.story-text h3 {
		font-family: var(--font-heading);
		font-size: clamp(1.1rem, 2vw, 1.35rem);
		color: var(--accent);
		margin-top: 1.8rem;
		margin-bottom: 0.5rem;
	}

	.story-text h3:first-child {
		margin-top: 0;
	}

	.story-text p {
		line-height: 1.8;
		color: var(--text-muted);
		margin-bottom: 0.75rem;
	}

	/* ── Merged training + approach section ── */
	.training-approach {
		padding-block: var(--section-gap);
		padding-inline: var(--content-pad);
		text-align: center;
	}

	.training-approach h2 {
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.training-text {
		line-height: 1.8;
		color: var(--accent);
		max-width: 52rem;
		margin-inline: auto;
		margin-bottom: 2.5rem;
	}
</style>
