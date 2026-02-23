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
		</ul>
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
		background: rgba(7, 7, 18, 0.85);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		padding: 0.65rem 0;
		box-shadow: 0 1px 0 var(--card-border);
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

	/* Mobile */
	@media (max-width: 767px) {
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
			background: rgba(7, 7, 18, 0.97);
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
