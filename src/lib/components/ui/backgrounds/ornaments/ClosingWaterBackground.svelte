<script lang="ts">
	export let opacity = 1;
</script>

<div class="ornament" aria-hidden="true" style={`opacity:${opacity};`}>
	<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
		<defs>
			<!-- Water base (darker top, lighter mid) -->
			<linearGradient id="waterBase" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stop-color="#04131a" />
				<stop offset="40%" stop-color="#05212c" />
				<stop offset="72%" stop-color="#053242" />
				<stop offset="100%" stop-color="#04161d" />
			</linearGradient>

			<!-- Aqua lift -->
			<radialGradient id="aquaLift" cx="48%" cy="28%" r="75%">
				<stop offset="0%" stop-color="#81d4e0" stop-opacity="0.26" />
				<stop offset="55%" stop-color="#62c0d0" stop-opacity="0.1" />
				<stop offset="100%" stop-color="#62c0d0" stop-opacity="0" />
			</radialGradient>

			<!-- Water surface shimmer band -->
			<linearGradient id="surfaceBand" x1="0" y1="0" x2="1" y2="0">
				<stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
				<stop offset="35%" stop-color="#81d4e0" stop-opacity="0.18" />
				<stop offset="55%" stop-color="#ffffff" stop-opacity="0.1" />
				<stop offset="75%" stop-color="#62c0d0" stop-opacity="0.14" />
				<stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
			</linearGradient>

			<!-- Soft blur -->
			<filter id="blur2" x="-20%" y="-20%" width="140%" height="140%">
				<feGaussianBlur stdDeviation="2" />
			</filter>
			<filter id="blur5" x="-20%" y="-20%" width="140%" height="140%">
				<feGaussianBlur stdDeviation="5" />
			</filter>

			<!-- Caustics (water light pattern) -->
			<filter id="caustics" x="-15%" y="-15%" width="130%" height="130%">
				<feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" seed="8" />
				<feColorMatrix
					type="matrix"
					values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.55 0"
				/>
				<feGaussianBlur stdDeviation="1.1" />
			</filter>

			<!-- Large-scale water distortion -->
			<filter id="flow" x="-10%" y="-10%" width="120%" height="120%">
				<feTurbulence type="fractalNoise" baseFrequency="0.0035" numOctaves="1" seed="3" />
				<feDisplacementMap in="SourceGraphic" scale="28" />
				<feGaussianBlur stdDeviation="0.6" />
			</filter>

			<!-- Center focus mask -->
			<radialGradient id="maskCenterGrad" cx="50%" cy="45%" r="78%">
				<stop offset="0%" stop-color="white" stop-opacity="1" />
				<stop offset="75%" stop-color="white" stop-opacity="0.3" />
				<stop offset="100%" stop-color="white" stop-opacity="0" />
			</radialGradient>
			<mask id="maskCenter">
				<rect width="1600" height="900" fill="url(#maskCenterGrad)" />
			</mask>

			<!-- Subtle film grain -->
			<filter id="filmGrain" x="-10%" y="-10%" width="120%" height="120%">
				<feTurbulence
					type="fractalNoise"
					baseFrequency="0.8"
					numOctaves="2"
					stitchTiles="stitch"
				/>
				<feColorMatrix
					type="matrix"
					values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.06 0"
				/>
			</filter>
		</defs>

		<!-- Water background -->
		<rect width="1600" height="900" fill="url(#waterBase)" />
		<rect width="1600" height="900" fill="url(#aquaLift)" opacity="0.95" />

		<!-- Surface shimmer (more wave-like than simple lines) -->
		<g mask="url(#maskCenter)" opacity="0.4" filter="url(#flow)">
			<path
				d="M-100 210 C 220 170, 520 250, 820 220 C 1120 190, 1320 140, 1700 200 L1700 320 L-100 320 Z"
				fill="url(#surfaceBand)"
			/>
			<path
				d="M-100 300 C 240 260, 560 340, 860 310 C 1160 280, 1360 230, 1700 290 L1700 420 L-100 420 Z"
				fill="url(#surfaceBand)"
				opacity="0.65"
			/>
		</g>

		<!-- Caustics -->
		<g mask="url(#maskCenter)" opacity="0.34" filter="url(#caustics)">
			<rect x="-60" y="-60" width="1720" height="1020" fill="#81d4e0" />
		</g>

		<!-- Film grain -->
		<g opacity="0.14" filter="url(#filmGrain)">
			<rect width="1600" height="900" fill="#ffffff" />
		</g>
	</svg>
</div>

<style>
	.ornament {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 0;
	}

	svg {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>

