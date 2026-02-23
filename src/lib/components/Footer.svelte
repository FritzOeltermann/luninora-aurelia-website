<script lang="ts">
	import { advisor } from '$lib/data/advisor';
</script>

<footer class="footer">
	<div class="footer-top">
		<div class="footer-brand">
			<p class="brand-name">{advisor.displayName}</p>
			<p class="brand-slogan">{advisor.tagline}</p>
		</div>

		<div class="footer-nav">
			<p class="footer-heading">Schnellzugriff</p>
			<nav>
				<a href="/about">Über mich</a>
				<a href="/legal">Impressum</a>
			</nav>
		</div>

		<div class="footer-beratung">
			<p class="footer-heading">Beratung</p>
			<p class="beratung-text">Online über <a href="https://luninora.de" target="_blank" rel="noopener">LuniNora</a> oder persönlich nach Vereinbarung.</p>
			<a href="https://luninora.de" target="_blank" rel="noopener" class="beratung-link">Inkl. Freiminuten für Neukunden</a>
		</div>
	</div>

	<div class="footer-bottom">
		<p class="copyright">
			&copy; {new Date().getFullYear()} {advisor.displayName}. Alle Rechte vorbehalten.
		</p>

		<div class="powered">
			<p class="powered-line">
				<span class="powered-label">Powered by</span>
				<a href="https://luninora.de" target="_blank" rel="noopener" class="logo-text">LuniNora</a>
			</p>
			<p class="powered-sub">Professionelle spirituelle Beratung</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		border-top: 1px solid var(--card-border);
		background: linear-gradient(to bottom, rgba(160, 120, 255, 0.25) 0%, var(--bg) 60%);
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

	.footer-heading {
		font-weight: 600;
		font-size: 0.9rem;
		color: var(--text);
		margin-bottom: 0.75rem;
	}

	.footer-brand {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.brand-name {
		font-family: var(--font-heading);
		font-size: 1.2rem;
		color: var(--accent);
		font-weight: 600;
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

	.footer-beratung {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
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

	.beratung-link {
		font-size: 0.85rem;
		color: var(--accent);
		text-decoration: underline;
		text-underline-offset: 2px;
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

	.logo-text {
		font-size: 1.1rem;
		font-weight: 300;
		letter-spacing: 0.04em;
		color: var(--text);
		text-decoration: none;
	}

	.powered-sub {
		font-size: 0.78rem;
		color: var(--muted);
		opacity: 0.7;
	}
</style>
