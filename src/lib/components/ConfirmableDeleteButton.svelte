<script lang="ts">
  import { clickOutside } from '$lib/functions/clickOutside';

  export let text = 'Deletar';
  export let confirmText = 'Confirmar?';
  export let onConfirm: () => void;

  type State = 'default' | 'confirm';
  let state: State = 'default';
  let confirmButton: HTMLButtonElement;

  const onDelete = () => {
    state = 'confirm';
  };

  const onConfirmDelete = () => {
    onConfirm();
    state = 'default';
  };

	const handleClickOutsideConfirm = () => {
		state = 'default';
	};
</script>

{#if state === 'default'}
  <button
    type="button"
    bind:this={confirmButton}
    class="text-red-500 border-1 border-red-500 rounded-sm4 w-40 h-10"
    on:click={onDelete}
  >
    <span class="ml-2">{text}</span>
  </button>
{:else}
  <button
    type="button"
    bind:this={confirmButton}
    class="bg-red-500 text-white rounded-sm4 w-40 h-10"
    on:click={onConfirmDelete}
    use:clickOutside={handleClickOutsideConfirm}
  >
    <span class="ml-2">{confirmText}</span>
  </button>
{/if}
