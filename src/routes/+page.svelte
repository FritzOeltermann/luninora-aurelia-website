<script lang="ts">
	import { advisor } from '$lib/data/advisor';
	import Hero from '$lib/components/Hero.svelte';
	import QuoteBlock from '$lib/components/QuoteBlock.svelte';
	import ServicesGrid from '$lib/components/ServicesGrid.svelte';
	import TrustBar from '$lib/components/TrustBar.svelte';
	import BookingSection from '$lib/components/BookingSection.svelte';
</script>

<svelte:head>
	<title>Maris – Spirituelle Beratung</title>
	<meta name="description" content={advisor.tagline} />
</svelte:head>

<Hero {advisor} />

<QuoteBlock text={advisor.quotes[0]} backgroundSrc="/images/maris-hero-bg.png" />

<section class="services-section">
	<div class="container services-inner">
		<div class="services-header">
			<div class="services-heading">
				<p class="services-eyebrow">Deine Themen mit Maris</p>
				<h2>Die Antworten liegen<br />in deinem Herzen.</h2>
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
</section>

<TrustBar stats={advisor.stats} />

<QuoteBlock text={advisor.quotes[1]} backgroundSrc="/images/maris-bg-quote-2.jpg" />

<BookingSection booking={advisor.booking} />

<style>
	.services-section {
		padding-block: var(--section-gap);
		padding-inline: var(--content-pad);
	}

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
		color: var(--accent2);
		margin-bottom: 0.75rem;
	}

	.services-heading h2 {
		font-size: clamp(2rem, 4vw, 2.8rem);
		max-width: 14ch;
	}

	.services-heading h2 br {
		display: none;
	}

	@media (min-width: 768px) {
		.services-heading h2 br {
			display: inline;
		}
	}

	.services-copy p {
		max-width: 40ch;
		line-height: 1.8;
	}
</style>
