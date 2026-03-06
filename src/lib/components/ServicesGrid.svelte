<script lang="ts">
	import type { Service } from '$lib/data/advisor';

	let { items }: { items: Service[] } = $props();

	// Subtle, monochrome symbol icons (no color emoji)
	const icons = ['◍', '✧', '✶', '⤿', '✶'];
</script>

<div class="services">
	{#each items as service, index}
		<article class="card service">
			<div class="service-header">
				<div class="service-icon">{icons[index] ?? '✦'}</div>
				<h3>{service.title}</h3>
			</div>
			<p class="bullets">{service.bullets.join(' ')}</p>
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
			/* six columns to allow centered second row (inverted pyramid) for 5 items */
			grid-template-columns: repeat(6, minmax(0, 1fr));
		}
	}

	.service {
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
		padding: 1.75rem 1.6rem;
		border-radius: 18px;
		background: linear-gradient(
			to bottom right,
			rgba(16, 40, 56, 0.96),
			rgba(9, 30, 42, 0.96)
		);
		border: 1px solid var(--card-border);
		border-top: 2px solid rgba(98, 192, 208, 0.3);
		transition:
			transform var(--duration) var(--ease),
			box-shadow var(--duration) var(--ease),
			border-color var(--duration) var(--ease),
			background var(--duration) var(--ease);
	}

	.service:hover {
		transform: translateY(-4px);
		box-shadow: 0 18px 40px rgba(0, 0, 0, 0.55);
		border-color: rgba(127, 212, 224, 0.4);
		background: linear-gradient(
			to bottom right,
			rgba(18, 46, 62, 0.98),
			rgba(10, 32, 46, 0.98)
		);
	}

	h3 {
		font-family: var(--font-heading);
		font-size: 1.45rem;
		color: var(--text);
	}

	.bullets {
		font-size: 0.95rem;
		color: var(--accent);
		font-weight: 500;
		line-height: 1.6;
	}

	.service-header {
		display: flex;
		align-items: center;
		gap: 0.7rem;
	}

	.service-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.3rem;
		height: 2.3rem;
		border-radius: 999px;
		background: rgba(243, 241, 234, 0.03);
		border: 1px solid rgba(243, 241, 234, 0.18);
		color: var(--muted);
		font-size: 1.05rem;
	}

	@media (min-width: 1024px) {
		/* Inverted pyramid layout for exactly 5 services:
		   row 1: cols 1-2, 3-4, 5-6
		   row 2: cols 2-3, 4-5 (centered under gaps) */
		.service:nth-child(1) {
			grid-column: 1 / span 2;
		}

		.service:nth-child(2) {
			grid-column: 3 / span 2;
		}

		.service:nth-child(3) {
			grid-column: 5 / span 2;
		}

		.service:nth-child(4) {
			grid-column: 2 / span 2;
		}

		.service:nth-child(5) {
			grid-column: 4 / span 2;
		}
	}

</style>
