<script lang="ts">
	import { advisor } from '$lib/data/advisor';
	import LegalPage from '$lib/components/LegalPage.svelte';
</script>

<svelte:head>
	<title>Rechtliches – {advisor.displayName}</title>
	<meta name="description" content="Impressum und Datenschutzerklärung von {advisor.displayName}." />
</svelte:head>

<LegalPage legal={advisor.legal} />
