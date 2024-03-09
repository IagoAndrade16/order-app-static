<script lang="ts">
	export let error: string | null | undefined;
</script>

{#if error}
	<div class="text-error font-medium text-sm">
		{error}
	</div>
{/if}
