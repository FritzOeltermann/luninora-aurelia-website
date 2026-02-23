<script lang="ts">
	let { items }: { items: string[] } = $props();
</script>

<ul class="chips" role="list">
	{#each items as chip}
		<li class="chip">{chip}</li>
	{/each}
</ul>

<style>
	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.chip {
		padding: 0.35rem 1rem;
		font-size: 0.8rem;
		font-weight: 500;
		letter-spacing: 0.03em;
		color: var(--accent);
		background: rgba(180, 156, 255, 0.1);
		border: 1px solid rgba(180, 156, 255, 0.2);
		border-radius: 100px;
		white-space: nowrap;
		transition: background var(--duration) var(--ease);
	}

	.chip:hover {
		background: rgba(180, 156, 255, 0.18);
	}
</style>
