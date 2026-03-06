<script lang="ts">
  export let opacity = 1;
</script>

<div class="ornament" aria-hidden="true" style={`opacity:${opacity};`}>
  <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
    <defs>
      <!-- SKY + SUN (bright, airy like the photo) -->
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#dff4ff" />
        <stop offset="55%" stop-color="#f6fbff" />
        <stop offset="100%" stop-color="#ffffff" />
      </linearGradient>

      <radialGradient id="sunGlow" cx="86%" cy="10%" r="40%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
        <stop offset="18%" stop-color="#fff2c2" stop-opacity="0.55" />
        <stop offset="40%" stop-color="#81d4e0" stop-opacity="0.20" />
        <stop offset="100%" stop-color="#81d4e0" stop-opacity="0" />
      </radialGradient>

      <!-- HORIZON HAZE -->
      <linearGradient id="haze" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
      </linearGradient>

      <!-- WATER ABOVE (surface area) -->
      <linearGradient id="waterTop" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#aeeeff" stop-opacity="0.45" />
        <stop offset="40%" stop-color="#62c0d0" stop-opacity="0.35" />
        <stop offset="100%" stop-color="#0b3a46" stop-opacity="0.35" />
      </linearGradient>

      <!-- UNDERWATER (turquoise body) -->
      <linearGradient id="underWater" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#63d2e7" stop-opacity="0.38" />
        <stop offset="55%" stop-color="#2aa9c7" stop-opacity="0.28" />
        <stop offset="100%" stop-color="#0d3b45" stop-opacity="0.22" />
      </linearGradient>

      <!-- Surface shimmer band (stronger, more like photo) -->
      <linearGradient id="surfaceBand" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
        <stop offset="30%" stop-color="#ffffff" stop-opacity="0.20" />
        <stop offset="50%" stop-color="#81d4e0" stop-opacity="0.18" />
        <stop offset="70%" stop-color="#ffffff" stop-opacity="0.16" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
      </linearGradient>

      <!-- Caustics (water light pattern) -->
      <filter id="caustics" x="-15%" y="-15%" width="130%" height="130%">
        <feTurbulence type="turbulence" baseFrequency="0.010" numOctaves="2" seed="8" />
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 0.65 0"
        />
        <feGaussianBlur stdDeviation="1.0" />
      </filter>

      <!-- Large-scale wave distortion -->
      <filter id="flow" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.0032" numOctaves="1" seed="3" />
        <feDisplacementMap in="SourceGraphic" scale="26" />
        <feGaussianBlur stdDeviation="0.55" />
      </filter>

      <!-- Pebble blur -->
      <filter id="pebbleBlur" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2.2" />
      </filter>

      <!-- Pebble colors (realistic grey/brown mix) -->
      <radialGradient id="pebbleA" cx="35%" cy="30%" r="80%">
        <stop offset="0%" stop-color="#d4cec3" stop-opacity="0.55" />
        <stop offset="70%" stop-color="#a1998f" stop-opacity="0.34" />
        <stop offset="100%" stop-color="#7a746d" stop-opacity="0.22" />
      </radialGradient>
      <radialGradient id="pebbleB" cx="35%" cy="30%" r="80%">
        <stop offset="0%" stop-color="#d1b79c" stop-opacity="0.50" />
        <stop offset="70%" stop-color="#a1836c" stop-opacity="0.30" />
        <stop offset="100%" stop-color="#7b6556" stop-opacity="0.20" />
      </radialGradient>
      <radialGradient id="pebbleC" cx="35%" cy="30%" r="80%">
        <stop offset="0%" stop-color="#d6dde0" stop-opacity="0.42" />
        <stop offset="70%" stop-color="#a5b0b6" stop-opacity="0.26" />
        <stop offset="100%" stop-color="#7c8790" stop-opacity="0.18" />
      </radialGradient>

      <!-- Pebble wet highlight -->
      <radialGradient id="wetHi" cx="28%" cy="22%" r="60%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.20" />
        <stop offset="45%" stop-color="#ffffff" stop-opacity="0.08" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
      </radialGradient>

      <!-- Focus mask: keep strong effects around center -->
      <radialGradient id="maskCenterGrad" cx="50%" cy="52%" r="78%">
        <stop offset="0%" stop-color="white" stop-opacity="1" />
        <stop offset="75%" stop-color="white" stop-opacity="0.35" />
        <stop offset="100%" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <mask id="maskCenter">
        <rect width="1600" height="900" fill="url(#maskCenterGrad)" />
      </mask>

      <!-- Film grain (very subtle) -->
      <filter id="filmGrain" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 0.05 0"
        />
      </filter>
    </defs>

    <!-- SKY -->
    <rect width="1600" height="900" fill="url(#sky)" />

    <!-- Sun glow top-right -->
    <rect width="1600" height="900" fill="url(#sunGlow)" />

    <!-- Horizon haze -->
    <rect x="0" y="220" width="1600" height="220" fill="url(#haze)" opacity="0.55" />

    <!-- WATER TOP (above surface) -->
    <g opacity="0.85" filter="url(#flow)">
      <path
        d="M-120 320 C 220 280, 520 360, 820 330 C 1120 300, 1320 250, 1720 310 L1720 520 L-120 520 Z"
        fill="url(#waterTop)"
      />
      <path
        d="M-120 420 C 240 380, 560 460, 860 435 C 1160 410, 1360 360, 1720 410 L1720 620 L-120 620 Z"
        fill="url(#waterTop)"
        opacity="0.55"
      />
    </g>

    <!-- Surface shimmer lines (more realistic wave glints) -->
    <g mask="url(#maskCenter)" opacity="0.55" filter="url(#flow)">
      <path
        d="M-140 360 C 220 320, 520 395, 820 370 C 1120 345, 1320 305, 1740 350"
        fill="none"
        stroke="url(#surfaceBand)"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M-140 410 C 240 370, 560 445, 860 420 C 1160 395, 1360 355, 1740 400"
        fill="none"
        stroke="url(#surfaceBand)"
        stroke-width="4"
        stroke-linecap="round"
        opacity="0.7"
      />
    </g>

    <!-- UNDERWATER BODY -->
    <rect x="0" y="420" width="1600" height="480" fill="url(#underWater)" opacity="0.85" />

    <!-- PEBBLES (stylized but photo-like composition) -->
    <g filter="url(#pebbleBlur)" opacity="0.95">
      <!-- big foreground pebbles -->
      <g>
        <path d="M250 760 C330 700 460 720 500 810 C540 900 430 940 320 910 C210 880 190 810 250 760 Z" fill="url(#pebbleA)"/>
        <path d="M250 760 C330 700 460 720 500 810 C540 900 430 940 320 910 C210 880 190 810 250 760 Z" fill="url(#wetHi)"/>
        <path d="M560 770 C640 720 770 745 800 830 C830 915 720 950 620 925 C520 900 510 815 560 770 Z" fill="url(#pebbleB)"/>
        <path d="M560 770 C640 720 770 745 800 830 C830 915 720 950 620 925 C520 900 510 815 560 770 Z" fill="url(#wetHi)"/>
        <path d="M980 770 C1060 725 1185 755 1200 840 C1215 925 1100 955 1000 930 C900 905 905 815 980 770 Z" fill="url(#pebbleC)"/>
        <path d="M980 770 C1060 725 1185 755 1200 840 C1215 925 1100 955 1000 930 C900 905 905 815 980 770 Z" fill="url(#wetHi)"/>
      </g>

      <!-- mid pebbles row -->
      <g opacity="0.88">
        <path d="M180 660 C220 635 280 650 285 695 C290 740 230 760 190 738 C150 716 145 685 180 660 Z" fill="url(#pebbleC)"/><path d="M180 660 C220 635 280 650 285 695 C290 740 230 760 190 738 C150 716 145 685 180 660 Z" fill="url(#wetHi)"/>
        <path d="M320 650 C360 625 420 645 420 690 C420 735 360 750 330 730 C300 710 295 675 320 650 Z" fill="url(#pebbleA)"/><path d="M320 650 C360 625 420 645 420 690 C420 735 360 750 330 730 C300 710 295 675 320 650 Z" fill="url(#wetHi)"/>
        <path d="M460 660 C500 635 555 660 550 705 C545 750 490 760 465 740 C440 720 435 685 460 660 Z" fill="url(#pebbleB)"/><path d="M460 660 C500 635 555 660 550 705 C545 750 490 760 465 740 C440 720 435 685 460 660 Z" fill="url(#wetHi)"/>
        <path d="M1080 650 C1120 625 1185 650 1180 700 C1175 750 1115 760 1088 740 C1060 720 1058 675 1080 650 Z" fill="url(#pebbleA)"/><path d="M1080 650 C1120 625 1185 650 1180 700 C1175 750 1115 760 1088 740 C1060 720 1058 675 1080 650 Z" fill="url(#wetHi)"/>
        <path d="M1220 660 C1260 635 1320 655 1318 700 C1316 745 1255 760 1225 740 C1195 720 1190 685 1220 660 Z" fill="url(#pebbleC)"/><path d="M1220 660 C1260 635 1320 655 1318 700 C1316 745 1255 760 1225 740 C1195 720 1190 685 1220 660 Z" fill="url(#wetHi)"/>
      </g>

      <!-- small pebbles fill -->
      <g opacity="0.65">
        <circle cx="520" cy="720" r="18" fill="url(#pebbleA)"/><circle cx="520" cy="720" r="18" fill="url(#wetHi)"/>
        <circle cx="600" cy="710" r="16" fill="url(#pebbleC)"/><circle cx="600" cy="710" r="16" fill="url(#wetHi)"/>
        <circle cx="700" cy="720" r="18" fill="url(#pebbleB)"/><circle cx="700" cy="720" r="18" fill="url(#wetHi)"/>
        <circle cx="820" cy="710" r="16" fill="url(#pebbleA)"/><circle cx="820" cy="710" r="16" fill="url(#wetHi)"/>
        <circle cx="900" cy="725" r="18" fill="url(#pebbleC)"/><circle cx="900" cy="725" r="18" fill="url(#wetHi)"/>
      </g>
    </g>

    <!-- Caustics on underwater + stones -->
    <g mask="url(#maskCenter)" opacity="0.40" filter="url(#caustics)">
      <rect x="-60" y="360" width="1720" height="600" fill="#81d4e0" />
    </g>

    <!-- Film grain -->
    <g opacity="0.12" filter="url(#filmGrain)">
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

