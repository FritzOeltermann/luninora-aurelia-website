<script lang="ts">
	import type { Snippet } from 'svelte';
	import { reveal } from '$lib/actions/reveal';

	let { id, title, children }: { id: string; title: string; children: Snippet } = $props();
</script>

<section {id} use:reveal>
	<div class="container">
		<h2>{title}</h2>
		{@render children()}
	</div>
</section>

<style>
	section {
		padding-block: var(--section-gap);
		padding-inline: var(--content-pad);
	}

	h2 {
		margin-bottom: 2.5rem;
		text-align: center;
	}
</style>
