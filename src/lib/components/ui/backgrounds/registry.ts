import MarisHeroWater from '$lib/components/ui/backgrounds/ornaments/MarisHeroWater.svelte';

const backgroundRegistry = {
	marisHeroWater: {
		component: MarisHeroWater,
		defaults: {
			glow: 1,
			ripples: 0.95,
			caustics: 1.05
		}
	}
} as const;

export type BackgroundKey = keyof typeof backgroundRegistry;

export { backgroundRegistry };

