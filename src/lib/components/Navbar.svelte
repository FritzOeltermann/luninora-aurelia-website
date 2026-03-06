<script lang="ts">
	import { advisor } from '$lib/data/advisor';

	const links = [
		{ href: '/', label: 'Startseite' },
		{ href: '/about', label: 'Über mich' },
		{ href: '/legal', label: 'Rechtliches' }
	];

	let scrolled = $state(false);
	let menuOpen = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 40;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<svelte:window onscroll={handleScroll} />

<nav class="navbar" class:scrolled aria-label="Hauptnavigation">
	<div class="nav-inner container">
		<a href="/" class="nav-brand" onclick={closeMenu}>{advisor.displayName}</a>

		<button
			class="nav-toggle"
			aria-expanded={menuOpen}
			aria-controls="nav-links"
			aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="bar" class:open={menuOpen}></span>
			<span class="bar" class:open={menuOpen}></span>
			<span class="bar" class:open={menuOpen}></span>
		</button>

		<ul id="nav-links" class="nav-links" class:open={menuOpen} role="list">
			{#each links as link}
				<li>
					<a href={link.href} onclick={closeMenu}>{link.label}</a>
				</li>
			{/each}
			<li class="nav-cta-mobile">
				<a
					href={advisor.booking.ctaHref}
					class="nav-cta-btn"
					target="_blank"
					rel="noopener"
					onclick={closeMenu}
				>
					<span class="nav-cta-icon" aria-hidden="true"></span>
					Beratung buchen
				</a>
			</li>
		</ul>

		<a
			href={advisor.booking.ctaHref}
			class="nav-cta-btn nav-cta-desktop"
			target="_blank"
			rel="noopener"
		>
			<span class="nav-cta-icon" aria-hidden="true"></span>
			Beratung buchen
		</a>
	</div>
</nav>

<style>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: 1rem 0;
		transition:
			background var(--duration) var(--ease),
			padding var(--duration) var(--ease),
			backdrop-filter var(--duration) var(--ease);
	}

	.navbar.scrolled {
		background: rgba(12, 32, 44, 0.6);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		padding: 0.65rem 0;
		border-bottom: 1px solid rgba(127, 212, 224, 0.18);
	}

	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-inline: var(--content-pad);
	}

	.nav-brand {
		font-family: var(--font-heading);
		font-size: 1.25rem;
		color: var(--text);
		text-decoration: none;
		letter-spacing: 0.02em;
	}

	.nav-brand:hover {
		color: var(--accent);
	}

	/* Desktop links */
	.nav-links {
		display: flex;
		gap: 2rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav-links a {
		font-size: 0.85rem;
		font-weight: 500;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--muted);
		text-decoration: none;
		transition: color var(--duration) var(--ease);
	}

	.nav-links a:hover {
		color: var(--text);
	}

	/* Hamburger toggle */
	.nav-toggle {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.25rem;
	}

	.bar {
		display: block;
		width: 22px;
		height: 2px;
		background: var(--text);
		border-radius: 2px;
		transition:
			transform var(--duration) var(--ease),
			opacity var(--duration) var(--ease);
	}

	.bar.open:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}

	.bar.open:nth-child(2) {
		opacity: 0;
	}

	.bar.open:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	/* CTA button */
	.nav-cta-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.55rem 1.25rem;
		font-family: var(--font-body);
		font-size: 0.82rem;
		font-weight: 600;
		color: var(--bg);
		background: var(--accent);
		border-radius: var(--radius-sm);
		text-decoration: none;
		white-space: nowrap;
		transition:
			background var(--duration) var(--ease),
			box-shadow var(--duration) var(--ease);
	}

	.nav-cta-btn:hover {
		background: var(--accent);
		box-shadow: 0 0 24px rgba(98, 192, 208, 0.32);
		transform: translateY(-1px);
	}

	.nav-cta-icon {
		display: inline-block;
		width: 0.85rem;
		height: 0.85rem;
		border-radius: 0.2rem;
		border: 1.5px solid currentColor;
		position: relative;
	}

	.nav-cta-icon::before {
		content: '';
		position: absolute;
		left: 0.14rem;
		right: 0.14rem;
		top: 0.18rem;
		height: 0.16rem;
		border-bottom: 1px solid currentColor;
	}

	/* Hide mobile CTA item on desktop */
	.nav-cta-mobile {
		display: none;
	}

	/* Mobile */
	@media (max-width: 767px) {
		.nav-cta-desktop {
			display: none;
		}

		.nav-cta-mobile {
			display: flex;
			justify-content: center;
		}

		.nav-cta-mobile .nav-cta-btn {
			font-size: 1rem;
			padding: 0.75rem 2rem;
		}

		.nav-toggle {
			display: flex;
		}

		.nav-links {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 2.5rem;
			background: rgba(10, 22, 32, 0.97);
			backdrop-filter: blur(16px);
			-webkit-backdrop-filter: blur(16px);
			opacity: 0;
			pointer-events: none;
			transition: opacity var(--duration) var(--ease);
		}

		.nav-links.open {
			opacity: 1;
			pointer-events: auto;
		}

		.nav-links a {
			font-size: 1.2rem;
		}
	}
</style>
