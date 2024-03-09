<script lang="ts">
  export let text: string;
  export let loading: boolean = false;
  export let loadingText: string | null = null;
  export let onClick: (() => void) | null = null;
  export let enabled: boolean = true;
</script>

<button class="btn btn-{enabled ? 'primary' : 'secondary'} w-100" disabled={loading || !enabled} on:click={onClick}>
  <span>
    {loading ? loadingText ?? text : text}
  </span>
</button>
