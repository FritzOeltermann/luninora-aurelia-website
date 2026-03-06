<script lang="ts">
	import { advisor } from '$lib/data/advisor';
	import { reveal } from '$lib/actions/reveal';
	import ClosingWaterBackground from '$lib/components/ui/backgrounds/ornaments/ClosingWaterBackground.svelte';
</script>

<section class="closing-section" data-tone="b" data-divider="top" use:reveal>
	<ClosingWaterBackground opacity={1} />
	<div class="container closing-inner">
		<div class="closing-copy">
			<h2>Ich freue mich auf unser Gespräch.</h2>
			<p class="closing-text">
				In meinen Beratungen darf alles Raum haben – ehrlich, feinfühlig und ohne Urteil. Wir
				begegnen uns dabei auf Augenhöhe.
			</p>
		</div>

		<article class="profile-card" aria-labelledby="closing-profile-heading">
			<p class="profile-eyebrow">Mein Profil auf LuniNora</p>
			<div class="profile-avatar">
				<img
					src={advisor.portraitSrc}
					alt="Profilbild von {advisor.displayName}"
					loading="lazy"
				/>
			</div>
			<header class="profile-heading">
				<h3 id="closing-profile-heading">{advisor.displayName}</h3>
				<p class="profile-subtitle">Antworten &amp; Klarheit ergeben Ruhe &amp; Frieden</p>
			</header>

			<div class="profile-meta">
				<span class="star">★</span>
				<span class="rating-value">0,0</span>
				<span class="rating-count">(0)</span>
				<span class="price">1,99&nbsp;€/Min</span>
			</div>

			<div class="profile-perks">
				<span class="perk-pill">5 Freiminuten für Neukunden</span>
			</div>

			<div class="profile-actions">
				<a
					href={advisor.booking.ctaHref}
					class="profile-btn"
					target="_blank"
					rel="noopener"
				>
					Profil ansehen
				</a>
			</div>
		</article>
	</div>
</section>

<style>
	.closing-section {
		position: relative;
		padding-block: var(--section-gap);
		padding-inline: var(--content-pad);
		overflow: hidden;
	}

	.closing-inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 8.25rem;
		align-items: center;
		justify-items: stretch;
		max-width: 1120px;
		margin-inline: auto;
		position: relative;
		z-index: 1;
	}

	.closing-copy {
		max-width: 34rem;
		justify-self: end;
		text-align: left;
		margin-left: 6rem;
	}

	@media (min-width: 768px) {
		.closing-inner {
			gap: 10.5rem;
		}
	}

	@media (max-width: 767px) {
		.closing-inner {
			grid-template-columns: minmax(0, 1fr);
		}
	}

	h2 {
		font-size: clamp(1.9rem, 4vw, 2.6rem);
		margin-bottom: 0.75rem;
	}

	.closing-text {
		max-width: 38ch;
		line-height: 1.8;
	}

	.profile-card {
		background: #f4fafb;
		border-radius: 28px;
		border: 1px solid rgba(255, 255, 255, 0.4);
		box-shadow: 0 26px 70px rgba(0, 0, 0, 0.35);
		padding: 2.1rem 2rem 2.2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1.25rem;
		color: var(--text);
		max-width: 300px;
		width: 100%;
		justify-self: start;
		margin-left: 2rem;
		transition:
			transform var(--duration) var(--ease),
			box-shadow var(--duration) var(--ease),
			border-color var(--duration) var(--ease);
	}

	.profile-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 18px 40px rgba(0, 0, 0, 0.55);
		border-color: rgba(127, 212, 224, 0.4);
	}

	.profile-eyebrow {
		font-size: 0.78rem;
		text-transform: uppercase;
		letter-spacing: 0.16em;
		color: #000;
		margin: 0;
	}

	.profile-avatar {
		position: relative;
		width: 88px;
		height: 88px;
		border-radius: 50%;
		overflow: hidden;
		box-shadow: 0 0 26px rgba(0, 0, 0, 0.35);
		border: 2px solid rgba(98, 192, 208, 0.6);
	}

	.profile-avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.profile-heading {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}

	.profile-heading h3 {
		font-size: 1.3rem;
		margin: 0;
		color: #000;
	}

	.profile-subtitle {
		font-size: 0.9rem;
		color: rgba(0, 0, 0, 0.7);
		margin: 0;
		max-width: 24ch;
	}

	.profile-meta {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-size: 0.92rem;
		color: rgba(0, 0, 0, 0.8);
	}

	.profile-meta .star {
		color: #e3a23b;
		font-size: 1rem;
	}

	.profile-meta .price {
		font-weight: 600;
	}

	.profile-perks {
		display: flex;
		justify-content: center;
	}

	.perk-pill {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 0.9rem;
		border-radius: var(--radius-sm);
		background: rgba(248, 240, 225, 0.96);
		color: #6a5331;
		font-size: 0.82rem;
		font-weight: 500;
	}

	.profile-actions {
		display: flex;
		justify-content: center;
	}

	.profile-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.85rem 2.4rem;
		border-radius: var(--radius-sm);
		background: #2d2219;
		color: #f9f5ee;
		font-size: 0.96rem;
		font-weight: 600;
		text-decoration: none;
		transition:
			background var(--duration) var(--ease),
			box-shadow var(--duration) var(--ease),
			transform var(--duration) var(--ease);
	}

	.profile-btn:hover {
		background: #18100b;
		box-shadow: 0 14px 30px rgba(0, 0, 0, 0.45);
		transform: translateY(-1px);
	}

	.profile-btn:active {
		transform: translateY(0);
		box-shadow: none;
	}

	@media (max-width: 767px) {
		.profile-card {
			margin-top: 2rem;
		}
	}
</style>

