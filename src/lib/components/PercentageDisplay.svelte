<script lang="ts">
  export let title: string;
  export let percentageLabel: string;
  export let fromLabel: string;
  export let percentageValue: number | null;
  export let colSize = 3;
  export let type: 'success' | 'info' | 'warning' | 'danger' = 'success';
</script>

<div class="col-lg-{colSize}">
  <div class="card mb-1 shadow-none border cursor-pointer ">
    <div class="card-body">
      <div class="d-flex justify-content-between avatar-content">
        <div class="avatar bg-light-{type} me-2">
          <slot />
        </div>
      </div>
      
      <div class="my-1">
        <h5>{title}</h5>
      </div>
      <div class="d-flex justify-content-between mb-50">
        <span class="text-truncate percent">
          {percentageLabel}
        </span>
        <small class="text-muted">{fromLabel}</small>
      </div>
      {#if percentageValue !== null}
      <div
        class="progress progress-bar-{type} progress-md mb-0"
        style="height: 10px"
      >
          <div
            style="width: {percentageValue}%;"
            class="progress-bar"
            role="progressbar"
            aria-valuenow={100}
            aria-valuemax={100}
          />
        </div>
      {/if}
      <div class="container" style="height: 22px" />
    </div>
  </div>
</div>
