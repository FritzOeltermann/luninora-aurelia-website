<script lang="ts">
	import BackgroundLayer from '$lib/components/ui/backgrounds/BackgroundLayer.svelte';
	import Ripples from '$lib/components/ui/backgrounds/ornaments/Ripples.svelte';
	import Caustics from '$lib/components/ui/backgrounds/ornaments/Caustics.svelte';

	let {
		glow = 1,
		ripples = 0.95,
		caustics = 1.05
	}: {
		glow?: number;
		ripples?: number;
		caustics?: number;
	} = $props();
</script>

<!-- Glow blobs -->
<BackgroundLayer opacity={glow} blur={40} zIndex={0} blend="soft-light">
	<div class="glow glow-a" />
	<div class="glow glow-b" />
	<div class="glow glow-c" />
</BackgroundLayer>

<!-- Ripples -->
<BackgroundLayer opacity={ripples} mask="center" zIndex={1}>
	<Ripples />
</BackgroundLayer>

<!-- Caustics -->
<BackgroundLayer opacity={caustics} mask="center" blend="screen" zIndex={2}>
	<Caustics color="var(--accent-hover)" intensity={caustics} />
</BackgroundLayer>

<style>
	.glow {
		position: absolute;
		border-radius: 999px;
		filter: blur(4px);
	}

	.glow-a {
		width: 480px;
		height: 480px;
		background: radial-gradient(circle, var(--accent-hover) 0%, transparent 65%);
		top: -140px;
		left: -120px;
		opacity: 0.85;
	}

	.glow-b {
		width: 360px;
		height: 360px;
		background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
		top: 40%;
		right: -80px;
		opacity: 0.7;
	}

	.glow-c {
		width: 380px;
		height: 380px;
		background: radial-gradient(circle, var(--accent-hover) 0%, transparent 65%);
		bottom: -160px;
		left: 20%;
		opacity: 0.55;
	}

	@media (prefers-reduced-motion: reduce) {
		.glow {
			transition: none;
		}
	}
</style>

