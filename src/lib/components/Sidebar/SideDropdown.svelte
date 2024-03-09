<script lang="ts">
  import SideItem from './SideItem.svelte';

  export let icon: any;
  export let title: string;
  export let href: string;
</script>

<SideItem {icon} {title} {href}>
  <ul class="menu-content">
    <slot/>
  </ul>
</SideItem>
  

