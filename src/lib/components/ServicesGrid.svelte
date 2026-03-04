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
		gap: 1.5rem;
	}

	@media (min-width: 640px) {
		.services {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1024px) {
		.services {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	.service {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1.75rem 1.6rem;
		border-radius: 18px;
		background: linear-gradient(
			to bottom right,
			rgba(16, 40, 56, 0.96),
			rgba(9, 30, 42, 0.96)
		);
		border: 1px solid var(--card-border);
		box-shadow: var(--shadow-sm);
	}

	h3 {
		font-family: var(--font-heading);
		font-size: 1.2rem;
		color: var(--text);
	}

	.outcome {
		font-size: 0.98rem;
		color: var(--accent2);
		font-weight: 500;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0.65rem 0 0;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	li {
		font-size: 0.9rem;
		color: var(--muted);
	}
</style>
