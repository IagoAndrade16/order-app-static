<script lang="ts">
  import type { OptionInfo } from '$lib/core/types/OptionInfo';

  export let options: OptionInfo<string | number>[];
  export let name: string;
  export let value: string = '';
  export let label: string;
  export let disabled: boolean = false;
  export let isRequired: boolean = false;
  export let onChange: (_value: string) => void = () => {};
</script>

<label class="form-label" for={name}>{label}</label>
<span class="text-error">{isRequired ? '*' : ''}</span>

<select
  id={name}
  {disabled}
  class="select2 hide-search form-select"
  {name}
  bind:value
  on:change={() => onChange(value)}
>
  {#each options as option}
    <option class="text-white text-xl bg-black" value={option.value}>
      {option.label}
    </option>
  {/each}
</select>
