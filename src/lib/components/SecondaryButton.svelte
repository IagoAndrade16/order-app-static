<script lang="ts">
  export let text: string;
  export let onClick: () => void;
  export let enabled: boolean = true;
</script>

<button type="button" class="btn btn-outline-primary w-100" on:click={onClick} disabled={!enabled}>
  <span class="ml-2">{text}</span>
</button>