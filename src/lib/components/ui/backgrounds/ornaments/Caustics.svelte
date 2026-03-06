<script lang="ts">
	let {
		color = 'var(--accent-hover)',
		intensity = 1
	}: {
		color?: string;
		intensity?: number;
	} = $props();

	const baseOpacity = 0.16;
</script>

<svg
	class="caustics"
	viewBox="0 0 400 400"
	preserveAspectRatio="xMidYMid slice"
	aria-hidden="true"
>
	<defs>
		<filter id="caustics-filter" x="-20%" y="-20%" width="140%" height="140%">
			<feTurbulence
				type="fractalNoise"
				baseFrequency="0.015 0.03"
				numOctaves="3"
				seed="7"
				result="noise"
			/>
			<feGaussianBlur in="noise" stdDeviation="8" result="blurred" />
			<feColorMatrix
				in="blurred"
				type="matrix"
				values="
          0 0 0 0 1
          0 0 0 0 1
          0 0 0 0 1
          0 0 0 0.9 0"
				result="light"
			/>
		</filter>

		<radialGradient id="caustics-mask" cx="50%" cy="42%" r="55%">
			<stop offset="0%" stop-color="#000" />
			<stop offset="70%" stop-color="#000" />
			<stop offset="100%" stop-color="transparent" />
		</radialGradient>
	</defs>

	<g opacity={baseOpacity * intensity}>
		<rect
			x="-20"
			y="-20"
			width="440"
			height="440"
			fill={color}
			filter="url(#caustics-filter)"
			mask="url(#caustics-mask)"
		/>
	</g>
</svg>

<style>
	.caustics {
		width: 100%;
		height: 100%;
		display: block;
	}

	@media (prefers-reduced-motion: reduce) {
		.caustics {
			animation: none;
		}
	}
</style>

