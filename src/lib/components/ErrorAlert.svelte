<script lang="ts">
  export let text: string | null;
</script>

{#if text}
  <div class="alert alert-danger mt-1 alert-validation-msg" role="alert">
    <div class="alert-body d-flex align-items-center">
      <i data-feather="info" class="me-50" />
      <span>{text}</span>
    </div>
  </div>
{/if}
