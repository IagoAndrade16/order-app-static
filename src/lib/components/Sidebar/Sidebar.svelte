<script lang="ts">
  import {
    AtSignIcon,
    FileTextIcon,
    GiftIcon,
    HomeIcon,
    SettingsIcon,
    SmileIcon,
    TagIcon,
    UserIcon,
  } from 'svelte-feather-icons';
  import {
    clientStore,
  } from '$lib/stores/clientStore';
  import Logo from '../Logo.svelte';
  import SideItem from './SideItem.svelte';
</script>

<div
  class="main-menu menu-fixed menu-light menu-accordion menu-shadow"
  data-scroll-to-active="true"
>
  <div class="navbar-header">
    <ul class="nav navbar-nav flex-row">
      <li class="nav-item me-auto">
        <Logo />
      </li>
    </ul>
  </div>
  <div class="shadow-bottom" />

  <div class="main-menu-content">
    <ul
      class="navigation navigation-main"
      id="main-menu-navigation"
      data-menu="menu-navigation"
    >
      <SideItem icon={UserIcon} title="Minha conta" href="/account" />
    </ul>
  </div>
</div>
