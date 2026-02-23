<script lang="ts">
	import type { Legal } from '$lib/data/advisor';
	import { reveal } from '$lib/actions/reveal';

	let { legal }: { legal: Legal } = $props();

	let activeTab: 'impressum' | 'datenschutz' = $state('impressum');
</script>

<section class="legal-section" use:reveal>
	<div class="container legal-inner">
		<h1>Rechtliche Informationen</h1>

		<div class="tabs" role="tablist">
			<button
				role="tab"
				aria-selected={activeTab === 'impressum'}
				class:active={activeTab === 'impressum'}
				onclick={() => (activeTab = 'impressum')}
			>
				Impressum
			</button>
			<button
				role="tab"
				aria-selected={activeTab === 'datenschutz'}
				class:active={activeTab === 'datenschutz'}
				onclick={() => (activeTab = 'datenschutz')}
			>
				Datenschutzerklärung
			</button>
		</div>

		<div class="tab-content card" role="tabpanel">
			{#if activeTab === 'impressum'}
				<div class="impressum">
					<h2>Angaben gemäß § 5 TMG</h2>

					<p>{legal.impressum.name}</p>
					<p>{@html legal.impressum.address.replace(/\n/g, '<br />')}</p>
					<p>{legal.impressum.country}</p>

					<h3>Kontakt</h3>
					<p>{legal.impressum.contact}</p>

					<h3>Steuernummer</h3>
					<p>{legal.impressum.steuernummer}</p>

					<h3>Hinweis</h3>
					<p>{legal.impressum.hinweis}</p>

					<h3>Haftungsausschluss</h3>
					<p>{legal.impressum.haftung}</p>

					<h3>Urheberrecht</h3>
					<p>{legal.impressum.urheberrecht}</p>

					<p class="stand">{legal.impressum.stand}</p>
				</div>
			{:else}
				<div class="datenschutz">
					<h2>Datenschutzerklärung</h2>
					<p class="ds-subtitle">{legal.datenschutz.subtitle}</p>

					{#each legal.datenschutz.sections as section}
						<h3>{section.title}</h3>
						<p>{@html section.content.replace(/\n/g, '<br />')}</p>
					{/each}

					<p class="stand">{legal.datenschutz.stand}</p>
				</div>
			{/if}
		</div>

	</div>
</section>

<style>
	.legal-section {
		padding-block: 8rem var(--section-gap);
		padding-inline: var(--content-pad);
	}

	.legal-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	h1 {
		font-size: clamp(2rem, 4.5vw, 3rem);
		color: var(--accent);
		text-align: center;
	}

	.tabs {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.tabs button {
		padding: 0.6rem 1.5rem;
		font-family: var(--font-body);
		font-size: 0.9rem;
		font-weight: 500;
		color: var(--muted);
		background: transparent;
		border: 1px solid var(--card-border);
		border-radius: 100px;
		cursor: pointer;
		transition:
			background var(--duration) var(--ease),
			color var(--duration) var(--ease),
			border-color var(--duration) var(--ease);
	}

	.tabs button:hover {
		color: var(--text);
		border-color: rgba(255, 255, 255, 0.2);
	}

	.tabs button.active {
		color: var(--text);
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.2);
	}

	.tab-content {
		width: 100%;
		max-width: 48rem;
	}

	.impressum h2 {
		font-size: clamp(1.3rem, 2.5vw, 1.7rem);
		color: var(--accent);
		margin-bottom: 1.5rem;
	}

	.impressum h3,
	.datenschutz h3 {
		font-family: var(--font-body);
		font-size: 1rem;
		font-weight: 700;
		color: var(--text);
		margin-top: 1.75rem;
		margin-bottom: 0.5rem;
	}

	.impressum p,
	.datenschutz p {
		font-size: 0.95rem;
		line-height: 1.7;
		max-width: none;
	}

	.datenschutz h2 {
		font-size: clamp(1.3rem, 2.5vw, 1.7rem);
		color: var(--accent);
		margin-bottom: 0.25rem;
	}

	.ds-subtitle {
		font-size: 0.85rem;
		color: var(--muted);
		opacity: 0.7;
		margin-bottom: 1rem;
	}

	.stand {
		margin-top: 2rem;
		font-size: 0.85rem;
		color: var(--muted);
		opacity: 0.7;
	}

</style>
