<script lang="ts">
	import { advisor } from '$lib/data/advisor';
	import LuniNoraLogo from '$lib/components/LuniNoraLogo.svelte';
</script>

<footer class="footer">
	<div class="footer-top">
		<div class="footer-brand">
			<div class="footer-col-header">
				<a href="/" class="brand-name">{advisor.displayName}</a>
			</div>
			<p class="brand-slogan">{advisor.tagline}</p>
		</div>

		<div class="footer-nav">
			<div class="footer-col-header">
				<p class="footer-heading">Schnellzugriff</p>
			</div>
			<nav>
				<a href="/about">Über mich</a>
				<a href="/legal">Impressum</a>
			</nav>
		</div>

		<div class="footer-beratung">
			<div class="footer-col-header">
				<p class="footer-heading">Beratung</p>
			</div>
			<p class="beratung-text">Online über <a href="https://luninora.de" target="_blank" rel="noopener">LuniNora</a> oder persönlich nach Vereinbarung.</p>
			<span class="beratung-note">Inkl. Freiminuten für Neukunden</span>
		</div>
	</div>

	<div class="footer-bottom">
		<p class="copyright">
			&copy; {new Date().getFullYear()} {advisor.displayName}. Alle Rechte vorbehalten.
		</p>

		<div class="powered">
			<p class="powered-line">
				<span class="powered-label">Powered by</span>
				<a href="https://luninora.de" target="_blank" rel="noopener" class="logo-link">
					<LuniNoraLogo height={44} />
				</a>
			</p>
			<p class="powered-sub">Professionelle spirituelle Beratung</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		border-top: 1px solid var(--card-border);
		background: linear-gradient(
			to bottom,
			rgba(93, 184, 200, 0.16) 0%,
			rgba(8, 14, 20, 0.96) 55%,
			var(--bg) 100%
		);
	}

	.footer-top {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		padding-block: 4rem 3rem;
		padding-inline: var(--content-pad);
		max-width: 1280px;
		margin-inline: auto;
	}

	@media (min-width: 768px) {
		.footer-top {
			grid-template-columns: 1.4fr 1fr 1.4fr;
			gap: 4rem;
		}
	}

	.footer-col-header {
		min-height: 1.75rem;
	}

	.footer-col-header .footer-heading {
		margin-bottom: 0;
	}

	.footer-brand,
	.footer-nav,
	.footer-beratung {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.footer-heading {
		font-weight: 600;
		font-size: 0.9rem;
		color: var(--text);
		margin-bottom: 0.75rem;
	}

	.brand-name {
		font-family: var(--font-heading);
		font-size: 1.2rem;
		color: var(--text);
		font-weight: 600;
		text-decoration: none;
		transition: color var(--duration) var(--ease);
	}

	.brand-name:hover,
	.brand-name:active {
		color: var(--accent);
	}

	.brand-slogan {
		font-size: 0.85rem;
		color: var(--muted);
		line-height: 1.5;
		max-width: 36ch;
	}

	.footer-nav nav {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.footer-nav a {
		font-size: 0.85rem;
		color: var(--muted);
		text-decoration: none;
		transition: color var(--duration) var(--ease);
	}

	.footer-nav a:hover {
		color: var(--text);
	}

	.beratung-text {
		font-size: 0.85rem;
		color: var(--muted);
		line-height: 1.5;
	}

	.beratung-text a {
		color: var(--accent);
		text-decoration: none;
	}

	.beratung-text a:hover {
		text-decoration: underline;
	}

	.beratung-note {
		font-size: 0.85rem;
		color: var(--accent);
	}

	.footer-bottom {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		padding-block: 2rem;
		padding-inline: var(--content-pad);
		max-width: 1280px;
		margin-inline: auto;
		border-top: 1px solid var(--card-border);
	}

	.copyright {
		font-size: 0.78rem;
		color: var(--muted);
	}

	.powered {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.25rem;
	}

	.powered-line {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.powered-label {
		font-size: 0.85rem;
		color: var(--muted);
	}

	.logo-link {
		display: inline-flex;
		align-items: center;
		color: var(--text);
		text-decoration: none;
		transition: color var(--duration) var(--ease);
	}

	.logo-link:hover {
		color: var(--accent);
	}

	.powered-sub {
		font-size: 0.78rem;
		color: var(--muted);
		opacity: 0.7;
	}
</style>
