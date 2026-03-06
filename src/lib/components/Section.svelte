<script lang="ts">
	import type { Snippet } from 'svelte';
	import { reveal } from '$lib/actions/reveal';

	let {
		id,
		title,
		children,
		tone = 'none',
		divider = 'none',
		tight = false,
		eyebrow = null,
		align = 'center'
	}: {
		id: string;
		title: string;
		children: Snippet;
		tone?: 'a' | 'b' | 'none';
		divider?: 'none' | 'top' | 'bottom' | 'both';
		tight?: boolean;
		eyebrow?: string | null;
		align?: 'left' | 'center';
	} = $props();
</script>

<section
	{id}
	use:reveal
	data-tone={tone === 'none' ? null : tone}
	data-divider={divider === 'none' ? null : divider}
	data-tight={tight ? 'true' : null}
>
	<div class="container">
		{#if eyebrow}
			<p class="eyebrow">{eyebrow}</p>
		{/if}
		{#if title}
			<h2 class:align-left={align === 'left'}>{title}</h2>
		{/if}
		{@render children()}
	</div>
</section>

<style>
	h2 {
		margin-bottom: 2.5rem;
		text-align: center;
	}

	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.8rem;
		color: var(--muted);
		margin: 0 0 0.75rem 0;
	}

	.align-left {
		text-align: left;
	}

	.container {
		position: relative;
		z-index: 1;
	}
</style>
