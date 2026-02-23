<script lang="ts">
	import type { Method } from '$lib/data/advisor';

	let { items }: { items: Method[] } = $props();
</script>

<div class="methods">
	{#each items as method}
		<article class="card method">
			<span class="method-icon">{method.icon}</span>
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

	@media (min-width: 480px) {
		.methods {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 900px) {
		.methods {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.method {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 0.5rem;
		padding: 1.5rem 1rem;
	}

	.method-icon {
		font-size: 1.6rem;
		color: var(--accent);
		margin-bottom: 0.25rem;
	}

	h3 {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		color: var(--text);
	}

	p {
		font-size: 0.9rem;
		line-height: 1.6;
		color: var(--text-muted);
	}
</style>
