<script lang="ts">
	import type { Booking } from '$lib/data/advisor';
	import { reveal } from '$lib/actions/reveal';

	let { booking }: { booking: Booking } = $props();
</script>

<section class="booking-section" use:reveal>
	<div class="container booking-inner">
		<span class="badge">{booking.badge}</span>

		<h2>{booking.heading}</h2>

		<p class="description">{booking.description}</p>

		<div class="features">
			{#each booking.features as feature}
				<div class="feature">
					<span class="feature-icon">{feature.icon}</span>
					<h3>{feature.title}</h3>
					<p>{feature.description}</p>
				</div>
			{/each}
		</div>

		<a href={booking.ctaHref} class="cta-btn">{booking.ctaLabel}</a>

		<p class="subtext">{booking.subtext}</p>
	</div>
</section>

<style>
	.booking-section {
		padding-block: var(--section-gap);
		padding-inline: var(--content-pad);
	}

	.booking-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1.5rem;
		background: var(--card);
		border: 1px solid var(--card-border);
		border-radius: 24px;
		padding: 3.5rem 2.5rem;
	}

	@media (min-width: 768px) {
		.booking-inner {
			padding: 4rem 3.5rem;
		}
	}

	.badge {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.45rem 1.25rem;
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--accent);
		background: rgba(180, 156, 255, 0.1);
		border: 1px solid rgba(180, 156, 255, 0.2);
		border-radius: 100px;
	}

	h2 {
		font-size: clamp(1.8rem, 4vw, 2.8rem);
		max-width: 20ch;
		margin-bottom: 0;
	}

	.description {
		font-size: 1.05rem;
		line-height: 1.8;
		max-width: 60ch;
	}

	.features {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		margin-block: 2rem;
		width: 100%;
		max-width: 52rem;
	}

	@media (min-width: 640px) {
		.features {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.feature {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.feature-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 56px;
		height: 56px;
		border-radius: 50%;
		background: rgba(180, 156, 255, 0.12);
		font-size: 1.5rem;
		margin-bottom: 0.25rem;
	}

	.feature h3 {
		font-family: var(--font-body);
		font-size: 1rem;
		font-weight: 600;
		color: var(--text);
		margin-bottom: 0;
	}

	.feature p {
		font-size: 0.9rem;
		line-height: 1.5;
		max-width: 24ch;
	}

	.cta-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 1.1rem 3rem;
		font-family: var(--font-body);
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--bg);
		background: var(--accent);
		border: none;
		border-radius: 100px;
		text-decoration: none;
		cursor: pointer;
		transition:
			background var(--duration) var(--ease),
			box-shadow var(--duration) var(--ease),
			transform var(--duration) var(--ease);
	}

	.cta-btn:hover {
		background: var(--accent-hover);
		box-shadow: 0 0 32px rgba(180, 156, 255, 0.4);
		transform: translateY(-2px);
	}

	.cta-btn:active {
		transform: translateY(0);
	}

	.subtext {
		font-size: 0.85rem;
		color: var(--muted);
		opacity: 0.7;
	}
</style>
