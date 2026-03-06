<script lang="ts">
	import type { AdvisorProfile } from '$lib/data/advisor';
	import { reveal } from '$lib/actions/reveal';
	import HealingSeaGlassWash from '$lib/components/ui/backgrounds/ornaments/HealingSeaGlassWash.svelte';

	let { advisor }: { advisor: AdvisorProfile } = $props();
</script>

<section class="hero hero--pebbles">
	<HealingSeaGlassWash opacity={0.9} tint="#81d4e0" />
	<div class="hero-inner container" use:reveal={{ threshold: 0.05 }}>
		<div class="hero-portrait">
			<img
				src={advisor.portraitSrc}
				alt="{advisor.displayName} – Porträt"
				onerror={(e: Event) => {
					const img = e.currentTarget as HTMLImageElement;
					img.style.display = 'none';
					img.parentElement?.classList.add('placeholder');
				}}
			/>
		</div>

		<div class="hero-text">
			<h1>{advisor.displayName}</h1>
			<p class="hero-tagline">{advisor.heroHeadline}</p>
			<p class="hero-sub">{advisor.heroSubcopy}</p>

			<div class="hero-ctas">
				<a
					href={advisor.booking.ctaHref}
					class="btn"
					target="_blank"
					rel="noopener"
				>
					Jetzt Gespräch starten &rarr;
				</a>
				<a href="/about" class="btn-ghost">Mehr über mich</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 100dvh;
		display: flex;
		align-items: center;
		padding-block: 7rem 4rem;
		overflow: hidden;
	}

	.hero-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2.5rem;
		position: relative;
		z-index: 1;
	}

	.hero-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.25rem;
		text-align: center;
		max-width: 46rem;
		margin-inline: auto;
		margin-top: 0.5rem;
	}

	h1 {
		font-size: clamp(2.6rem, 6vw, 4.2rem);
		line-height: 1.1;
	}

	.hero-tagline {
		font-style: italic;
		font-size: clamp(1.1rem, 2.2vw, 1.35rem);
		color: var(--accent);
		max-width: 38ch;
		line-height: 1.5;
	}

	.hero-sub {
		font-size: 1.05rem;
		line-height: 1.8;
		max-width: 50ch;
	}

	/* CTA row */
	.hero-ctas {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: center;
		margin-top: 0.5rem;
	}

	.btn-ghost {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.85rem 2rem;
		font-family: var(--font-body);
		font-size: 1rem;
		font-weight: 600;
		color: var(--text);
		background: transparent;
		border: 1px solid var(--card-border);
		border-radius: var(--radius-sm);
		text-decoration: none;
		transition:
			border-color var(--duration) var(--ease),
			color var(--duration) var(--ease);
	}

	.btn-ghost:hover {
		border-color: var(--accent);
		color: var(--accent);
	}

	/* ── Portrait column ── */
	.hero-portrait {
		width: 180px;
		height: 180px;
		border-radius: 50%;
		overflow: hidden;
		margin-inline: auto;
		box-shadow: 0 0 40px rgba(98, 192, 208, 0.28);
		transition:
			transform var(--duration) var(--ease),
			box-shadow var(--duration) var(--ease);
	}

	.hero-portrait img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top center;
		display: block;
	}

	.hero-portrait:hover {
		transform: scale(1.04);
		box-shadow: 0 0 56px rgba(98, 192, 208, 0.4);
	}

	:global(.hero-portrait.placeholder) {
		border-radius: 50% !important;
		border: 2px solid var(--card-border) !important;
		background: var(--card) !important;
	}
</style>
