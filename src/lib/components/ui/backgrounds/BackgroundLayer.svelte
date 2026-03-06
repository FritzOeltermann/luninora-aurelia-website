<script lang="ts">
	let {
		opacity = 1,
		zIndex = 0,
		blend = 'normal',
		mask = 'none',
		blur = 0,
		className = ''
	}: {
		opacity?: number;
		zIndex?: number;
		blend?: 'normal' | 'screen' | 'overlay' | 'soft-light';
		mask?: 'none' | 'center' | 'top' | 'bottom';
		blur?: number;
		className?: string;
	} = $props();

	const style = $derived({
		opacity,
		zIndex,
		...(blend !== 'normal' ? { mixBlendMode: blend } : {}),
		...(blur > 0 ? { filter: `blur(${blur}px)` } : {})
	});
</script>

<div
	class={`bg-layer ${className}`.trim()}
	style={style}
	data-mask={mask === 'none' ? undefined : mask}
	aria-hidden="true"
>
	<slot />
</div>

<style>
	.bg-layer {
		position: absolute;
		inset: 0;
		pointer-events: none;
		overflow: hidden;
	}

	/* Center mask: soft vignette towards edges */
	.bg-layer[data-mask='center'] {
		mask-image: radial-gradient(circle at 50% 45%, #000 0%, #000 55%, transparent 85%);
		-webkit-mask-image: radial-gradient(circle at 50% 45%, #000 0%, #000 55%, transparent 85%);
	}

	/* Top mask: fade towards bottom */
	.bg-layer[data-mask='top'] {
		mask-image: linear-gradient(to bottom, #000 0%, #000 55%, transparent 100%);
		-webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 55%, transparent 100%);
	}

	/* Bottom mask: fade towards top */
	.bg-layer[data-mask='bottom'] {
		mask-image: linear-gradient(to top, #000 0%, #000 55%, transparent 100%);
		-webkit-mask-image: linear-gradient(to top, #000 0%, #000 55%, transparent 100%);
	}
</style>

