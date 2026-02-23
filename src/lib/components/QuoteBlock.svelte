<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let { text, backgroundSrc }: { text: string; backgroundSrc?: string } = $props();
</script>

<section class="quote-section" class:has-bg={!!backgroundSrc} use:reveal>
	{#if backgroundSrc}
		<img class="bg-image" src={backgroundSrc} alt="" aria-hidden="true" />
		<div class="bg-overlay"></div>
	{/if}
	<blockquote class="container">
		<p>„{text}"</p>
	</blockquote>
</section>

<style>
	.quote-section {
		position: relative;
		padding-block: var(--section-gap);
		padding-inline: var(--content-pad);
		overflow: hidden;
	}

	.has-bg {
		padding-top: 10rem;
		padding-bottom: 14rem;
	}

	.bg-image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 0;
	}

	.bg-overlay {
		position: absolute;
		inset: 0;
		z-index: 1;
		background:
			linear-gradient(to bottom, var(--bg) 0%, transparent 20%),
			linear-gradient(to top, var(--bg) 0%, transparent 35%),
			rgba(7, 7, 18, 0.5);
	}

	blockquote {
		position: relative;
		z-index: 2;
		text-align: center;
		max-width: 48rem;
	}

	p {
		font-family: var(--font-heading);
		font-style: italic;
		font-weight: 700;
		font-size: clamp(1.3rem, 3vw, 1.8rem);
		line-height: 1.6;
		color: var(--text);
		max-width: none;
	}
</style>
