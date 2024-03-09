<script lang="ts">
  import type { PercentageDrilldownItem } from '$lib/core/types/PercentageDrilldownItem';
  import SmallPercentageDonutChart from './SmallPercentageDonutChart.svelte';

  export let title: string;
  export let subtitle: string = '';
  export let items: PercentageDrilldownItem[];
</script>

<div class="card card-browser-states">
  <div class="card-header">
    <div>
      <h4 class="card-title">{title}</h4>
      <p class="card-text font-small-2">{subtitle}</p>
    </div>
  </div>
  <div class="card-body">
    {#each items as item}
      <div class="browser-states">
        <div class="d-flex">
          {#if item.iconPath}
            <img src={item.iconPath} class="rounded me-1" height="30" alt="" />
          {/if}
          <h6 class="align-self-center mb-0">{item.label}</h6>
        </div>
        <div class="d-flex align-items-center">
          <div class="me-1">
            <div class="fw-bold text-body-heading">
              {item.percentageValue.toFixed(2)}%
            </div>
          </div>

          <div class="me-1">
            <SmallPercentageDonutChart
              value={item.percentageValue}
              color={item.color}
            />
          </div>

          <div class="fw-bold text-body-heading">{item.count}</div>
        </div>
      </div>
    {/each}
  </div>
</div>
