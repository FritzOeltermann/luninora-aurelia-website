<script lang="ts">
	import { advisor } from '$lib/data/advisor';
	import Hero from '$lib/components/Hero.svelte';
	import QuoteBlock from '$lib/components/QuoteBlock.svelte';
	import BookingSection from '$lib/components/BookingSection.svelte';
</script>

<svelte:head>
	<title>{advisor.displayName} – Spirituelle Beratung</title>
	<meta name="description" content={advisor.tagline} />
</svelte:head>

<Hero {advisor} />

<QuoteBlock text={advisor.quotes[0]} backgroundSrc="/images/bg-moonlake.png" />

<QuoteBlock text={advisor.quotes[1]} backgroundSrc="/images/bg-sunpath.png" />

<BookingSection booking={advisor.booking} />
