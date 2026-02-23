<script lang="ts">
	import { advisor } from '$lib/data/advisor';
</script>

<footer class="footer">
	<div class="container footer-inner">
		<p class="copyright">
			&copy; {new Date().getFullYear()} {advisor.displayName}
		</p>

		<div class="powered">
			<p class="powered-label">
				Powered by
				<a href="https://luninora.com" target="_blank" rel="noopener">
					<span class="logo-text">LuniNora</span>
				</a>
			</p>
			<p class="powered-sub">Professionelle spirituelle Beratung</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		padding: 3rem var(--content-pad) 2rem;
		border-top: 1px solid var(--card-border);
	}

	.footer-inner {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.powered {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.4rem;
	}

	.powered-label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: var(--muted);
	}

	.powered-label a {
		text-decoration: none;
	}

	.logo-text {
		font-size: 1.4rem;
		font-weight: 300;
		letter-spacing: 0.04em;
		color: var(--text);
	}

	.powered-sub {
		font-size: 0.85rem;
		color: var(--muted);
		opacity: 0.7;
	}

	.copyright {
		font-size: 0.8rem;
		color: var(--muted);
	}
</style>
