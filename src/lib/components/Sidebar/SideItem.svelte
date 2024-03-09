<script lang="ts">
  // eslint-disable-next-line import/no-unresolved
  import { page } from '$app/stores';


  export let icon: any;
  export let title: string;
  export let href: string;

  const currentPath = $page.url.pathname;
  const isCurrentPath = currentPath === href || currentPath === `${href}/`;
</script>

<li class="nav-item {isCurrentPath ? 'active' : ''}">
  <a class="d-flex align-items-center" {href}>
    <!-- {icon} -->
    <svelte:component this="{icon}" />

    <span class="menu-title text-truncate">
      {title}
    </span>
  </a>

  <slot />
</li>