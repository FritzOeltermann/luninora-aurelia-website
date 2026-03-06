<script lang="ts">
	import { advisor } from '$lib/data/advisor';
	import Hero from '$lib/components/Hero.svelte';
	import QuoteBlock from '$lib/components/QuoteBlock.svelte';
	import ServicesGrid from '$lib/components/ServicesGrid.svelte';
	import TrustBar from '$lib/components/TrustBar.svelte';
	import ClosingCTA from '$lib/components/ClosingCTA.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
	<title>Maris – Spirituelle Beratung</title>
	<meta name="description" content={advisor.tagline} />
</svelte:head>

<Hero {advisor} />

<Section
	id="services"
	title=""
	tone="b"
	divider="top"
	align="left"
>
	<div class="services-inner">
		<div class="services-header">
			<div class="services-heading">
				<p class="services-eyebrow">Deine Themen mit Maris</p>
				<h2>
					Die Antworten liegen
					<br />
					<span class="services-heading-highlight">in Dir.</span>
				</h2>
			</div>
			<div class="services-copy">
				<p>
					Manchmal fühlt sich alles nur noch schwer, blockiert oder dunkel an. In unseren Sitzungen
					sehen wir gemeinsam hin, was deine Seele wirklich bewegt – damit wieder mehr Ruhe, Klarheit
					und Licht in deinen Alltag kommen können.
				</p>
			</div>
		</div>

		<ServicesGrid items={advisor.services} />
	</div>
</Section>

<QuoteBlock text={advisor.quotes[0]} backgroundSrc="/images/hero-ocean-pebbles.png" />

<TrustBar stats={advisor.stats} />
<ClosingCTA />

<style>
	.services-inner {
		display: flex;
		flex-direction: column;
		gap: 2.75rem;
	}

	.services-header {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		align-items: flex-start;
	}

	@media (min-width: 900px) {
		.services-header {
			grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
			gap: 3rem;
		}
	}

	.services-eyebrow {
		font-size: 0.8rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 0.75rem;
	}

	.services-heading h2 {
		font-size: clamp(2.6rem, 5.2vw, 3.6rem);
	}

	.services-heading-highlight {
		font-style: italic;
		color: var(--accent);
	}

	.services-copy p {
		max-width: 40ch;
		line-height: 1.8;
		text-align: right;
		margin-left: auto;
	}

	.methods-section {
		padding-block: var(--section-gap);
		padding-inline: var(--content-pad);
		text-align: center;
	}

	.methods-section h2 {
		margin-bottom: 2rem;
	}
</style>
