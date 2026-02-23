<script lang="ts">
	import type { AdvisorProfile } from '$lib/data/advisor';
	import { reveal } from '$lib/actions/reveal';
	import ChipRow from './ChipRow.svelte';

	let { advisor }: { advisor: AdvisorProfile } = $props();
</script>

<section class="hero">
	<div class="hero-inner container" use:reveal={{ threshold: 0.05 }}>
		<div class="hero-portrait">
			<img
				src={advisor.portraitSrc}
				alt="{advisor.displayName} \u2013 Portr\u00e4t"
				onerror={(e: Event) => {
					const img = e.currentTarget as HTMLImageElement;
					img.style.display = 'none';
					img.parentElement?.classList.add('placeholder');
				}}
			/>
		</div>

		<h1>{advisor.displayName}</h1>
		<p class="hero-tagline">{advisor.heroHeadline}</p>
		<p class="hero-sub">{advisor.heroSubcopy}</p>

		<ChipRow items={advisor.topics} />

		<div class="hero-stats">
			{#each advisor.stats as stat}
				<div class="stat">
					<span class="stat-value">{stat.value}</span>
					<span class="stat-label">{stat.label}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 100dvh;
		display: flex;
		align-items: center;
		padding-block: 6rem 4rem;
	}

	.hero-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1.25rem;
	}

	.hero-portrait {
		width: 180px;
		height: 180px;
		border-radius: 50%;
		overflow: hidden;
		margin-bottom: 1rem;
		flex-shrink: 0;
	}

	.hero-portrait img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero-portrait.placeholder,
	.hero-portrait:not(:has(img[style*='display'])) {
		border: 2px solid var(--card-border);
		background: var(--card);
	}

	/* Fallback for when img triggers onerror */
	:global(.hero-portrait.placeholder) {
		border: 2px solid var(--card-border);
		background: var(--card);
	}

	h1 {
		font-size: clamp(2.6rem, 6vw, 4.2rem);
		margin-bottom: 0;
		line-height: 1.1;
	}

	.hero-tagline {
		font-family: var(--font-heading);
		font-style: italic;
		font-size: clamp(1.1rem, 2.5vw, 1.4rem);
		color: var(--accent);
		max-width: 40ch;
		line-height: 1.5;
	}

	.hero-sub {
		font-size: 1.05rem;
		line-height: 1.8;
		max-width: 58ch;
	}

	.hero-stats {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2.5rem 3.5rem;
		margin-top: 1.5rem;
	}

	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 0.3rem;
	}

	.stat-value {
		font-family: var(--font-heading);
		font-size: clamp(1.6rem, 3.5vw, 2.2rem);
		font-weight: 300;
		color: var(--accent);
		line-height: 1.1;
	}

	.stat-label {
		font-size: 0.75rem;
		font-weight: 500;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--muted);
	}
</style>
