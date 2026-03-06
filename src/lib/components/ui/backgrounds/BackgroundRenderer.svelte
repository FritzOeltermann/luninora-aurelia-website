<script lang="ts">
	import { backgroundRegistry, type BackgroundKey } from '$lib/components/ui/backgrounds/registry';

	let {
		name,
		props = {},
		enabled = true
	}: {
		name: BackgroundKey;
		props?: Record<string, any>;
		enabled?: boolean;
	} = $props();

	const entry = $derived(backgroundRegistry[name]);
	const component = $derived(entry?.component);
	const mergedProps = $derived(entry ? { ...entry.defaults, ...props } : props);
</script>

{#if enabled && component}
	<svelte:component this={component} {...mergedProps} />
{/if}

