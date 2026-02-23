<script lang="ts">
	import type { Training } from '$lib/data/advisor';

	let { items }: { items: Training[] } = $props();
</script>

<div class="training">
	{#each items as item}
		<article class="card training-card">
			<h4>{item.title}</h4>
			<p>{item.description}</p>
		</article>
	{/each}
</div>

<style>
	.training {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		margin-top: 2rem;
	}

	@media (min-width: 640px) {
		.training {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	h4 {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		font-weight: 400;
		color: var(--accent);
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 0.9rem;
		line-height: 1.7;
	}
</style>
