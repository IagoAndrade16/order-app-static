<script lang="ts">
	export let error: string | null;
</script>

{#if error}
	<div class="text-error text-sm font-normal">
		{error}
	</div>
{/if}
