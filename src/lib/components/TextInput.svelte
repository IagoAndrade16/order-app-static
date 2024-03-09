<script lang="ts">
  import Utils from '$lib/core/Utils';
  import { onMount } from 'svelte';
  import { Patterns, type PatternType } from '$lib/core/Patterns';
  import InputTextError from './InputTextError.svelte';

  export let margin: boolean = true;
  export let width: number | null = null;
  export let label: string | null = null;
  export let name: string;
  export let placeholder: string | null = null;
  export let value: string = '';
  export let autocomplete: string | null = null;
  export let inputMode: 'numeric' | 'text' = 'text';
  export let readonly = false;
  export let isPassword = false;
  export let error: string | null = null;
  export let resetErrorOnInput: boolean = true;
  export let mask: string | null = null;
  export let pattern: PatternType | null = null;
  export let startWithFocus = false;
  export let isRequiredField: boolean = false;
  export let formatter: ((_value: string) => string) | null = null;
  // eslint-disable-next-line no-unused-vars
  export let onInput: ((el: HTMLInputElement) => void) | null = null;

  const show = !isPassword;
  let borderColor: string;
  let focusBorderColor: string;
  let inputEl: HTMLInputElement;
  $: {
    borderColor = error ? 'error' : 'input-placeholder';
    focusBorderColor = error ? 'error' : 'green-medium';
  }

  const maskInput = () => {
    if (mask) value = Utils.applyMask(mask, value);
  };
  const updateType = () => {
    inputEl.type = show ? 'text' : 'password';
  };

  maskInput();
  function onInputHandle() {
    if (onInput) onInput(inputEl);
    maskInput();
    if (resetErrorOnInput) error = null;

    if (formatter) value = formatter(value);

    value = Patterns.filter(value, pattern);
  }

  onMount(() => {
    updateType();
    if (startWithFocus) inputEl.focus();
  });
</script>

<div class={margin ? 'mb-1' : ''}>
  {#if label}
    <label class="form-label" for={name}>{label}</label>
    {/if}
    <span class="text-error">{isRequiredField ? '*' : ''}</span>
  <input
    {readonly}
    {autocomplete}
    class="form-control"
    style={`width: ${width}px;`}
    bind:value
    inputmode={inputMode}
    bind:this={inputEl}
    on:input={onInputHandle}
    {placeholder}
    {name}
  />

  <InputTextError {error} />
</div>
