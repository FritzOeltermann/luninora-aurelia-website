<script lang="ts">
	import type { Method } from '$lib/data/advisor';

	let { items }: { items: Method[] } = $props();
</script>

<div class="methods">
	{#each items as method, i}
		<article class="card method">
			<span class="method-index">{String(i + 1).padStart(2, '0')}</span>
			<h3>{method.title}</h3>
			<p>{method.description}</p>
		</article>
	{/each}
</div>

<style>
	.methods {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.25rem;
	}

	@media (min-width: 600px) {
		.methods {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.method {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.method-index {
		font-family: var(--font-heading);
		font-size: 2rem;
		font-weight: 300;
		color: var(--accent);
		opacity: 0.4;
		line-height: 1;
		margin-bottom: 0.25rem;
	}

	h3 {
		font-family: var(--font-heading);
		font-size: 1.25rem;
		color: var(--text);
	}

	p {
		font-size: 0.95rem;
		line-height: 1.7;
	}
</style>
