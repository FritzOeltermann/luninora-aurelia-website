<script lang="ts">
	import type { Stat } from '$lib/data/advisor';
	import { reveal } from '$lib/actions/reveal';

	let { stats }: { stats: Stat[] } = $props();
</script>

<section class="trust" use:reveal>
	<div class="container trust-inner">
		{#each stats as stat}
			<div class="stat">
				<span class="stat-value">{stat.value}</span>
				<span class="stat-label">{stat.label}</span>
			</div>
		{/each}
	</div>
</section>

<style>
	.trust {
		padding-block: 4rem;
		padding-inline: var(--content-pad);
	}

	.trust-inner {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 3rem 4rem;
	}

	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 0.35rem;
	}

	.stat-value {
		font-family: var(--font-heading);
		font-size: clamp(1.8rem, 4vw, 2.6rem);
		font-weight: 300;
		color: var(--accent);
		line-height: 1.1;
	}

	.stat-label {
		font-size: 0.8rem;
		font-weight: 500;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--muted);
	}
</style>
