<script lang="ts">
  export let value: string;
  export let label: string;
  export let colSize: number = 3;
  export let style: 'primary' | 'info' | 'warning' = 'primary';
</script>

<div class="col-xl-{colSize} col-sm-6 col-12 mb-2 mb-xl-0">
  <div class="d-flex flex-row">
    <div class="avatar bg-light-{style} me-2">
      <div class="avatar-content m-0 p-0">
         <slot />
      </div>
    </div>
    <div class="my-auto">
      <h4 id="sells-total-price" class="fw-bolder mb-0">{value}</h4>
      <p class="card-text font-small-3 mb-0">{label}</p>
    </div>
  </div>
</div>