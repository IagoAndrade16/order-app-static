<script lang="ts">
  import { onDestroy } from 'svelte';
  import type { VerticalAlignment } from '$lib/core/types/VerticalAlignment';

  export let toggle: () => void;
  export let verticalAlign: VerticalAlignment = 'top';
  export let onToggle: ((_open: boolean) => void) | null = null;

  let open = false;
  let button: HTMLElement;

  let modalEl: HTMLElement;
  let modalInnerEl: HTMLElement;

  const cancelScrollLock = () => {
    document.body.classList.remove('overflow-hidden');
    console.log('cancelScrollLock');
  };

  toggle = () => {
    button?.click();
    open = !open;

    if (open) {
      // document.body.classList.add('overflow-hidden');

      modalEl.classList.remove('hidden');
      // modalEl.classList.add('flex');

      setTimeout(() => {
        modalEl.classList.remove('opacity-0');
        modalEl.classList.add('opacity-100');

        modalInnerEl.classList.remove('scale-0');
        modalInnerEl.classList.add('scale-100');
      }, 0);
    } else {
      modalEl.classList.remove('opacity-100');
      modalEl.classList.add('opacity-0');

      modalInnerEl.classList.remove('scale-100');
      modalInnerEl.classList.add('scale-0');

      setTimeout(() => {
        cancelScrollLock();
        modalEl.classList.add('hidden');
      }, 150); // tailwind transition duration
    }

    if (onToggle) {
      onToggle(open);
    }
  };

  onDestroy(() => {
    cancelScrollLock();
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  bind:this={modalEl}
  class="hidden modal opacity-0 transition ease-in-out p-6 lg:p-16 my-auto"
  on:click={toggle}
>
  <div
    bind:this={modalInnerEl}
    class="inner-modal lg:min-w-[540px] lg:float-left scale-0 transition ease-in-out delay-75 relative left-[50%] translate-x-[-50%] {verticalAlign ===
    'center'
      ? 'relative top-[50%] translate-y-[-50%]'
      : verticalAlign === 'bottom'
      ? 'relative top-[50%] translate-y-[45%]'
      : ''}"
    on:click={(e) => {
      e.stopPropagation();
    }}
  >
    <slot />
  </div>
</div>

<style>
  .modal {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
  }
</style>
