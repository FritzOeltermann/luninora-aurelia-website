<script lang="ts">
	let {
		stroke = 'var(--accent-hover)',
		strokeOpacity = 0.18,
		strokeWidth = 1.15
	}: {
		stroke?: string;
		strokeOpacity?: number;
		strokeWidth?: number;
	} = $props();
</script>

<svg
	class="ripples"
	viewBox="0 0 400 400"
	preserveAspectRatio="xMidYMid slice"
	aria-hidden="true"
>
	<g fill="none" stroke={stroke} stroke-linecap="round" opacity={strokeOpacity}>
		<circle cx="200" cy="200" r="80" stroke-width={strokeWidth} />
		<circle cx="200" cy="200" r="130" stroke-width={strokeWidth} />
		<circle cx="210" cy="195" r="175" stroke-width={strokeWidth} />
		<circle cx="190" cy="210" r="225" stroke-width={strokeWidth} />
	</g>
</svg>

<style>
	.ripples {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>

