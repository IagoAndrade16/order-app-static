<script lang="ts">
  export let customDateFrom: Date | undefined;
  export let customDateTo: Date | undefined;
  
  export let customDateFromInDate: Date;
  export let customDateToInDate: Date;

  export let handleSearch: () => void

  const onSelectCustomDate = () => {
    if (customDateFrom === null || customDateFrom === undefined || customDateTo === null || customDateTo === undefined) return;
    customDateFromInDate = new Date(customDateFrom);
    customDateToInDate = new Date(customDateTo);
    handleSearch();
  };

</script>

<div class="h-2" />
  <div
    class="flex flex-row items-center"
    style="--date-input-width: 5px; font-family: 'UberMove'; --date-picker-highlight-border: #2B8262; --date-picker-selected-background: #9dd4b5;"
  >
    <input 
      class="min-w-0 box-border m-0 border border-gray-300 rounded-lg outline-none transition duration-80 ease-in" 
      style="padding: 6px;"  
      type="date" bind:value={customDateFrom} on:change={onSelectCustomDate}
    >
    <div class="ml-2 mr-2">-</div>
    <input
      class="min-w-0 box-border m-0 border border-gray-300 rounded-lg outline-none transition duration-80 ease-in" 
      style="padding: 6px;"
      type="date" bind:value={customDateTo} on:change={onSelectCustomDate} pattern="\d{4}-\d{2}-\d{2}"
    >
  </div>