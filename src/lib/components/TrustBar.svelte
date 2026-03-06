<script lang="ts">
	import type { Stat } from '$lib/data/advisor';
	import { reveal } from '$lib/actions/reveal';
	import { advisor } from '$lib/data/advisor';

	let { stats }: { stats: Stat[] } = $props();
</script>

<section class="trust" data-tone="b" data-divider="top" use:reveal>
	<div class="container trust-layout">
		<div class="trust-media">
			<figure class="trust-card">
				<img
					src="/images/maris-trust-portrait.png"
					alt="Maris – Seelische Begleitung"
					loading="lazy"
				/>
				<figcaption class="trust-card-caption">
					<span class="trust-card-eyebrow">Ruhig. Klar. Auf Augenhöhe.</span>
				</figcaption>
			</figure>
		</div>

		<div class="trust-content">
			<h2>Seelische Begleitung durch Vertrauen und Erfahrung.</h2>
			<p class="trust-copy">
				Seit {stats[0].value} Jahren begleite ich Menschen durch schwere Zeiten. In über
				{stats[1].value} {stats[1].label} habe ich meinen Stil geschärft–{' '}
				{stats[2].value}.
			</p>

			<ul class="trust-list">
				<li>Geschützter Raum für alles, was gerade da ist.</li>
				<li>Hellfühlige Wahrnehmung von Blockaden und Mustern.</li>
				<li>Sanfte, klare Impulse für deinen nächsten Schritt.</li>
			</ul>

			<a
				href={advisor.booking.ctaHref}
				class="btn trust-cta"
				target="_blank"
				rel="noopener"
			>
				Jetzt Beratung buchen
			</a>
		</div>
	</div>
</section>

<style>
	.trust {
		position: relative;
		padding-block: var(--section-gap);
		padding-inline: var(--content-pad);
		overflow: hidden;
	}

	.trust-layout {
		display: grid;
		gap: 2.5rem;
		align-items: center;
		position: relative;
		z-index: 1;
	}

	@media (min-width: 900px) {
		.trust-layout {
			grid-template-columns: 1fr 1fr;
			gap: 3rem;
		}
	}

	.trust-media {
		position: relative;
		max-width: 320px;
	}

	@media (min-width: 900px) {
		.trust-media {
			justify-self: end;
			margin-right: 2rem;
		}

		.trust-content {
			justify-self: start;
			margin-left: 2rem;
		}
	}

	.trust-card {
		position: relative;
		border-radius: 28px;
		overflow: hidden;
		background: var(--card);
		border: 1px solid var(--card-border);
		box-shadow: 0 30px 80px rgba(0, 0, 0, 0.55);
		isolation: isolate;
		transition:
			transform var(--duration) var(--ease),
			box-shadow var(--duration) var(--ease),
			border-color var(--duration) var(--ease);
	}

	.trust-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 18px 40px rgba(0, 0, 0, 0.55);
		border-color: rgba(127, 212, 224, 0.4);
	}

	.trust-card img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.trust-card::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to top,
			rgba(10, 22, 32, 0.75),
			rgba(10, 22, 32, 0.15) 50%,
			transparent 100%
		);
		z-index: 1;
	}

	.trust-card-caption {
		position: absolute;
		left: 1.6rem;
		right: 1.6rem;
		bottom: 1.6rem;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		z-index: 2;
	}

	.trust-card-eyebrow {
		font-size: 0.78rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--muted);
	}

	.trust-content {
		max-width: 32rem;
	}

	.trust-copy {
		margin: 0 0 1.75rem 0;
		max-width: 40ch;
		line-height: 1.8;
	}

	.trust-list {
		list-style: none;
		padding: 0;
		margin: 0 0 2rem 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.trust-list li {
		position: relative;
		padding-left: 1.6rem;
		font-size: 0.98rem;
		color: var(--muted);
	}

	.trust-list li::before {
		content: '';
		position: absolute;
		left: 0.1rem;
		top: 0.5rem;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 999px;
		border: 1px solid rgba(127, 212, 224, 0.6);
	}

	.trust-cta {
		margin-top: 0.5rem;
	}
</style>
