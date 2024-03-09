<script lang="ts">
  import type { MultiSelectOption } from '$lib/core/types/MultiSelectOption';
  // @ts-ignore
  // eslint-disable-next-line import/no-unresolved
  import MultiSelect from 'svelte-multiselect';

  export let options: MultiSelectOption<string>[];
  export let name: string;
  export let value: MultiSelectOption<string>[] = [];
  export let label: string;
  export let placeholder: string = 'Selecione uma opção';
</script>

<label class="form-label" for={name}>{label}</label>
<MultiSelect
  id={name}
  {options}
  bind:value={value}
  {placeholder}
/>

