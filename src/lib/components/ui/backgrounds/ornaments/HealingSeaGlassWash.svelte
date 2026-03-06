<script lang="ts">
	export let opacity = 0.14;
	// Für “aufhellen”: nimm accent-hover als Basis
	export let tint = 'var(--accent-hover)';
</script>

<div class="ornament" aria-hidden="true" style={`opacity:${opacity};`}>
	<svg viewBox="0 0 1200 700" preserveAspectRatio="none">
		<defs>
			<!-- Weicher Aquarell-Blur -->
			<filter id="blur10">
				<feGaussianBlur stdDeviation="10" />
			</filter>
			<filter id="blur6">
				<feGaussianBlur stdDeviation="4" />
			</filter>

			<!-- Paper grain -->
			<filter id="grain">
				<feTurbulence
					type="fractalNoise"
					baseFrequency="0.85"
					numOctaves="2"
					stitchTiles="stitch"
				/>
				<feColorMatrix
					type="matrix"
					values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 .10 0"
				/>
			</filter>

			<!-- Wash gradients -->
			<radialGradient id="washA" cx="28%" cy="28%" r="70%">
				<stop offset="0%" stop-color={tint} stop-opacity="0.22" />
				<stop offset="60%" stop-color={tint} stop-opacity="0.08" />
				<stop offset="100%" stop-color={tint} stop-opacity="0" />
			</radialGradient>
			<radialGradient id="washB" cx="78%" cy="55%" r="75%">
				<stop offset="0%" stop-color={tint} stop-opacity="0.16" />
				<stop offset="70%" stop-color={tint} stop-opacity="0.06" />
				<stop offset="100%" stop-color={tint} stop-opacity="0" />
			</radialGradient>

			<!-- Sea-glass "inner highlight" -->
			<radialGradient id="glassHighlight" cx="35%" cy="30%" r="65%">
				<stop offset="0%" stop-color="white" stop-opacity="0.22" />
				<stop offset="45%" stop-color="white" stop-opacity="0.10" />
				<stop offset="100%" stop-color="white" stop-opacity="0" />
			</radialGradient>

			<!-- Subtle edge tint -->
			<radialGradient id="glassTint" cx="50%" cy="60%" r="80%">
				<stop offset="0%" stop-color={tint} stop-opacity="0.10" />
				<stop offset="100%" stop-color={tint} stop-opacity="0" />
			</radialGradient>
		</defs>

		<!-- Large watercolor washes (Knorr-like ambience) -->
		<g filter="url(#blur10)">
			<path
				d="M-40,210 C150,40 380,90 520,240 C650,380 820,390 940,310 C1080,200 1220,240 1250,360
               C1280,500 1160,640 980,660 C760,680 630,600 510,520 C390,440 250,380 120,430 C0,475 -70,350 -40,210 Z"
				fill="url(#washA)"
			/>
			<path
				d="M260,80 C360,10 520,40 600,130 C690,230 800,250 900,210 C1030,155 1140,190 1160,270
               C1180,360 1100,470 980,500 C820,535 720,490 640,430 C560,370 450,330 350,360 C250,390 200,210 260,80 Z"
				fill="url(#washB)"
			/>
		</g>

		<!-- Sea-glass pebbles (soft silhouettes + inner highlights) -->
		<g filter="url(#blur6)">
			<!-- Left pebbles -->
			<g>
				<path
					d="M120 150 C205 95 335 125 360 220 C385 315 285 365 195 345 C105 325 55 210 120 150 Z"
					fill={tint}
					fill-opacity="0.18"
					stroke={tint}
					stroke-opacity="0.45"
					stroke-width="1.4"
					stroke-linejoin="round"
				/>
				<path
					d="M120 150 C205 95 335 125 360 220 C385 315 285 365 195 345 C105 325 55 210 120 150 Z"
					fill="url(#glassHighlight)"
				/>
				<path
					d="M120 150 C205 95 335 125 360 220 C385 315 285 365 195 345 C105 325 55 210 120 150 Z"
					fill="url(#glassTint)"
				/>
			</g>

			<g>
				<path
					d="M245 325 C330 280 445 325 455 420 C465 515 360 565 275 525 C190 485 175 370 245 325 Z"
					fill={tint}
					fill-opacity="0.16"
					stroke={tint}
					stroke-opacity="0.4"
					stroke-width="1.4"
					stroke-linejoin="round"
				/>
				<path
					d="M245 325 C330 280 445 325 455 420 C465 515 360 565 275 525 C190 485 175 370 245 325 Z"
					fill="url(#glassHighlight)"
				/>
			</g>

			<!-- Right pebbles -->
			<g>
				<path
					d="M930 145 C1015 105 1105 160 1105 240 C1105 320 1015 365 940 335 C865 305 860 185 930 145 Z"
					fill={tint}
					fill-opacity="0.14"
					stroke={tint}
					stroke-opacity="0.38"
					stroke-width="1.3"
					stroke-linejoin="round"
				/>
				<path
					d="M930 145 C1015 105 1105 160 1105 240 C1105 320 1015 365 940 335 C865 305 860 185 930 145 Z"
					fill="url(#glassHighlight)"
				/>
			</g>

			<g>
				<path
					d="M980 360 C1065 330 1140 395 1125 480 C1110 565 1010 590 945 545 C880 500 895 390 980 360 Z"
					fill={tint}
					fill-opacity="0.12"
					stroke={tint}
					stroke-opacity="0.35"
					stroke-width="1.3"
					stroke-linejoin="round"
				/>
				<path
					d="M980 360 C1065 330 1140 395 1125 480 C1110 565 1010 590 945 545 C880 500 895 390 980 360 Z"
					fill="url(#glassHighlight)"
				/>
			</g>

			<!-- Small “sea-glass chips” top -->
			<g>
				<path
					d="M560 70 C615 40 685 78 675 140 C665 205 595 215 555 175 C515 135 515 90 560 70 Z"
					fill={tint}
					fill-opacity="0.11"
					stroke={tint}
					stroke-opacity="0.32"
					stroke-width="1.2"
					stroke-linejoin="round"
				/>
				<path
					d="M560 70 C615 40 685 78 675 140 C665 205 595 215 555 175 C515 135 515 90 560 70 Z"
					fill="url(#glassHighlight)"
				/>
			</g>

			<g>
				<path
					d="M705 110 C750 88 805 122 795 168 C785 214 735 220 705 195 C675 170 670 135 705 110 Z"
					fill={tint}
					fill-opacity="0.1"
					stroke={tint}
					stroke-opacity="0.3"
					stroke-width="1.1"
					stroke-linejoin="round"
				/>
				<path
					d="M705 110 C750 88 805 122 795 168 C785 214 735 220 705 195 C675 170 670 135 705 110 Z"
					fill="url(#glassHighlight)"
				/>
			</g>
		</g>

		<!-- Grain overlay -->
		<rect width="1200" height="700" filter="url(#grain)" opacity="0.25" />
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

