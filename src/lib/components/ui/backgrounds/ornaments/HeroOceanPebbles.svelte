<script lang="ts">
	export let opacity = 1;
</script>

<div class="ornament" aria-hidden="true" style={`opacity:${opacity};`}>
	<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
		<defs>
			<!-- Ocean base -->
			<linearGradient id="oceanBase" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stop-color="#061820" />
				<stop offset="55%" stop-color="#062431" />
				<stop offset="100%" stop-color="#031116" />
			</linearGradient>

			<!-- Light lift (your palette) -->
			<radialGradient id="aquaLift" cx="38%" cy="28%" r="80%">
				<stop offset="0%" stop-color="#81d4e0" stop-opacity="0.22" />
				<stop offset="50%" stop-color="#62c0d0" stop-opacity="0.1" />
				<stop offset="100%" stop-color="#62c0d0" stop-opacity="0" />
			</radialGradient>

			<!-- Sun/sky glow (no star) -->
			<radialGradient id="skyGlow" cx="70%" cy="16%" r="65%">
				<stop offset="0%" stop-color="#ffffff" stop-opacity="0.18" />
				<stop offset="18%" stop-color="#81d4e0" stop-opacity="0.16" />
				<stop offset="55%" stop-color="#62c0d0" stop-opacity="0.07" />
				<stop offset="100%" stop-color="#62c0d0" stop-opacity="0" />
			</radialGradient>

			<!-- Soft blur filters -->
			<filter id="blur6" x="-20%" y="-20%" width="140%" height="140%">
				<feGaussianBlur stdDeviation="6" />
			</filter>
			<filter id="blur2" x="-20%" y="-20%" width="140%" height="140%">
				<feGaussianBlur stdDeviation="2" />
			</filter>

			<!-- Water caustics texture -->
			<filter id="caustics" x="-10%" y="-10%" width="120%" height="120%">
				<feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" seed="11" />
				<feColorMatrix
					type="matrix"
					values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.45 0"
				/>
				<feGaussianBlur stdDeviation="1.1" />
			</filter>

			<!-- Water ripples texture (larger scale) -->
			<filter id="ripplesTex" x="-10%" y="-10%" width="120%" height="120%">
				<feTurbulence type="turbulence" baseFrequency="0.004" numOctaves="1" seed="4" />
				<feDisplacementMap in="SourceGraphic" scale="22" />
				<feGaussianBlur stdDeviation="0.6" />
			</filter>

			<!-- Center mask (focus water light in hero center) -->
			<radialGradient id="maskCenterGrad" cx="50%" cy="40%" r="75%">
				<stop offset="0%" stop-color="white" stop-opacity="1" />
				<stop offset="72%" stop-color="white" stop-opacity="0.3" />
				<stop offset="100%" stop-color="white" stop-opacity="0" />
			</radialGradient>
			<mask id="maskCenter">
				<rect width="1600" height="900" fill="url(#maskCenterGrad)" />
			</mask>

			<!-- Stone material textures -->
			<filter id="stoneGrain" x="-15%" y="-15%" width="130%" height="130%">
				<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
				<feColorMatrix
					type="matrix"
					values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.18 0"
				/>
			</filter>

			<!-- Stone color palettes (more realistic greys/browns) -->
			<radialGradient id="stoneNeutral" cx="35%" cy="30%" r="85%">
				<stop offset="0%" stop-color="#b8b2a8" stop-opacity="0.42" />
				<stop offset="55%" stop-color="#8e877f" stop-opacity="0.24" />
				<stop offset="100%" stop-color="#6a645e" stop-opacity="0.16" />
			</radialGradient>
			<radialGradient id="stoneBrown" cx="35%" cy="30%" r="85%">
				<stop offset="0%" stop-color="#b89a7c" stop-opacity="0.36" />
				<stop offset="55%" stop-color="#8a6f58" stop-opacity="0.2" />
				<stop offset="100%" stop-color="#665343" stop-opacity="0.14" />
			</radialGradient>
			<radialGradient id="stoneGrey" cx="35%" cy="30%" r="85%">
				<stop offset="0%" stop-color="#bac2c6" stop-opacity="0.3" />
				<stop offset="55%" stop-color="#90989d" stop-opacity="0.18" />
				<stop offset="100%" stop-color="#6b7378" stop-opacity="0.12" />
			</radialGradient>

			<!-- Wet highlight (like water sheen on stones) -->
			<radialGradient id="wetHi" cx="28%" cy="22%" r="60%">
				<stop offset="0%" stop-color="#ffffff" stop-opacity="0.24" />
				<stop offset="45%" stop-color="#ffffff" stop-opacity="0.1" />
				<stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
			</radialGradient>

			<!-- Subtle shadow depth -->
			<radialGradient id="stoneShadow" cx="70%" cy="80%" r="80%">
				<stop offset="0%" stop-color="#000000" stop-opacity="0" />
				<stop offset="100%" stop-color="#000000" stop-opacity="0.2" />
			</radialGradient>

			<!-- Overall film grain (very subtle) -->
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
                0 0 0 0.08 0"
				/>
			</filter>
		</defs>

		<!-- Base ocean -->
		<rect width="1600" height="900" fill="url(#oceanBase)" />
		<rect width="1600" height="900" fill="url(#aquaLift)" opacity="0.95" />
		<rect width="1600" height="900" fill="url(#skyGlow)" opacity="0.95" />

		<!-- Water surface bands (more "real wave" feel than simple lines) -->
		<g mask="url(#maskCenter)" opacity="0.32" filter="url(#ripplesTex)">
			<path
				d="M-120 380 C 240 300, 520 440, 820 400 C 1100 365, 1280 280, 1720 350 L1720 520 L-120 520 Z"
				fill="#81d4e0"
				fill-opacity="0.1"
			/>
			<path
				d="M-120 520 C 260 440, 560 600, 860 560 C 1140 530, 1320 440, 1720 510 L1720 680 L-120 680 Z"
				fill="#62c0d0"
				fill-opacity="0.08"
			/>
		</g>

		<!-- Caustics (water light) -->
		<g mask="url(#maskCenter)" opacity="0.3" filter="url(#caustics)">
			<rect x="-60" y="-60" width="1720" height="1020" fill="#81d4e0" />
		</g>

		<!-- Pebbles (more of them, smaller, more realistic) -->
		<g filter="url(#blur2)" opacity="0.95">
			<!-- Right cluster -->
			<g>
				<path
					d="M1280 150 C1320 122 1380 150 1376 206 C1372 262 1316 282 1284 256 C1252 230 1248 176 1280 150 Z"
					fill="url(#stoneGrey)"
				/>
				<path
					d="M1280 150 C1320 122 1380 150 1376 206 C1372 262 1316 282 1284 256 C1252 230 1248 176 1280 150 Z"
					fill="url(#wetHi)"
				/>
				<path
					d="M1280 150 C1320 122 1380 150 1376 206 C1372 262 1316 282 1284 256 C1252 230 1248 176 1280 150 Z"
					fill="url(#stoneShadow)"
				/>

				<path
					d="M1420 210 C1460 190 1510 230 1498 274 C1486 318 1440 332 1412 308 C1384 284 1386 232 1420 210 Z"
					fill="url(#stoneBrown)"
				/>
				<path
					d="M1420 210 C1460 190 1510 230 1498 274 C1486 318 1440 332 1412 308 C1384 284 1386 232 1420 210 Z"
					fill="url(#wetHi)"
				/>

				<path
					d="M1205 268 C1246 248 1294 286 1282 330 C1270 374 1226 382 1200 360 C1174 338 1176 286 1205 268 Z"
					fill="url(#stoneNeutral)"
				/>
				<path
					d="M1205 268 C1246 248 1294 286 1282 330 C1270 374 1226 382 1200 360 C1174 338 1176 286 1205 268 Z"
					fill="url(#wetHi)"
				/>

				<path
					d="M1350 330 C1392 314 1442 360 1428 410 C1414 460 1364 466 1336 440 C1308 414 1310 350 1350 330 Z"
					fill="url(#stoneGrey)"
				/>
				<path
					d="M1350 330 C1392 314 1442 360 1428 410 C1414 460 1364 466 1336 440 C1308 414 1310 350 1350 330 Z"
					fill="url(#wetHi)"
				/>

				<path
					d="M1245 410 C1288 394 1334 440 1320 490 C1306 540 1258 544 1232 520 C1206 496 1208 430 1245 410 Z"
					fill="url(#stoneBrown)"
				/>
				<path
					d="M1245 410 C1288 394 1334 440 1320 490 C1306 540 1258 544 1232 520 C1206 496 1208 430 1245 410 Z"
					fill="url(#wetHi)"
				/>

				<path
					d="M1470 420 C1510 402 1558 450 1542 498 C1526 546 1480 548 1454 526 C1428 504 1430 442 1470 420 Z"
					fill="url(#stoneNeutral)"
				/>
				<path
					d="M1470 420 C1510 402 1558 450 1542 498 C1526 546 1480 548 1454 526 C1428 504 1430 442 1470 420 Z"
					fill="url(#wetHi)"
				/>
			</g>

			<!-- Left cluster -->
			<g opacity="0.95">
				<path
					d="M140 240 C180 214 240 240 238 294 C236 348 182 366 148 342 C114 318 108 264 140 240 Z"
					fill="url(#stoneNeutral)"
				/>
				<path
					d="M140 240 C180 214 240 240 238 294 C236 348 182 366 148 342 C114 318 108 264 140 240 Z"
					fill="url(#wetHi)"
				/>

				<path
					d="M260 250 C300 232 350 274 338 320 C326 366 276 374 248 352 C220 330 224 270 260 250 Z"
					fill="url(#stoneGrey)"
				/>
				<path
					d="M260 250 C300 232 350 274 338 320 C326 366 276 374 248 352 C220 330 224 270 260 250 Z"
					fill="url(#wetHi)"
				/>

				<path
					d="M118 360 C158 342 208 384 196 430 C184 476 140 480 114 458 C88 436 90 380 118 360 Z"
					fill="url(#stoneBrown)"
				/>
				<path
					d="M118 360 C158 342 208 384 196 430 C184 476 140 480 114 458 C88 436 90 380 118 360 Z"
					fill="url(#wetHi)"
				/>

				<path
					d="M320 382 C362 366 412 410 398 460 C384 510 334 514 306 488 C278 462 282 400 320 382 Z"
					fill="url(#stoneNeutral)"
				/>
				<path
					d="M320 382 C362 366 412 410 398 460 C384 510 334 514 306 488 C278 462 282 400 320 382 Z"
					fill="url(#wetHi)"
				/>
			</g>

			<!-- Scattered chips -->
			<g opacity="0.55">
				<path
					d="M720 98 C756 80 806 108 796 150 C786 192 742 194 718 174 C694 154 694 114 720 98 Z"
					fill="url(#stoneGrey)"
				/>
				<path
					d="M720 98 C756 80 806 108 796 150 C786 192 742 194 718 174 C694 154 694 114 720 98 Z"
					fill="url(#wetHi)"
				/>

				<path
					d="M860 122 C894 106 940 140 928 176 C916 212 874 214 850 196 C826 178 832 140 860 122 Z"
					fill="url(#stoneBrown)"
				/>
				<path
					d="M860 122 C894 106 940 140 928 176 C916 212 874 214 850 196 C826 178 832 140 860 122 Z"
					fill="url(#wetHi)"
				/>
			</g>
		</g>

		<!-- Add tiny stone grain to the stones only (subtle realism) -->
		<g opacity="0.16" filter="url(#stoneGrain)" mask="url(#maskCenter)">
			<rect width="1600" height="900" fill="#ffffff" />
		</g>

		<!-- Overall film grain -->
		<g opacity="0.16" filter="url(#filmGrain)">
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

