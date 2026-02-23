<script lang="ts">
	import type { Service } from '$lib/data/advisor';

	let { items }: { items: Service[] } = $props();
</script>

<div class="services">
	{#each items as service}
		<article class="card service">
			<h3>{service.title}</h3>
			<p class="outcome">{service.outcome}</p>
			<ul>
				{#each service.includes as item}
					<li>{item}</li>
				{/each}
			</ul>
		</article>
	{/each}
</div>

<style>
	.services {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.25rem;
	}

	@media (min-width: 600px) {
		.services {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.service {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	h3 {
		font-family: var(--font-heading);
		font-size: 1.25rem;
		color: var(--text);
	}

	.outcome {
		font-size: 1rem;
		color: var(--accent2);
		font-weight: 500;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0.5rem 0 0;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	li {
		font-size: 0.9rem;
		color: var(--muted);
		padding-left: 1.1rem;
		position: relative;
	}

	li::before {
		content: '—';
		position: absolute;
		left: 0;
		color: var(--accent);
		opacity: 0.5;
	}
</style>
