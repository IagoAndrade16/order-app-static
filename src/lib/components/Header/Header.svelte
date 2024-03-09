<script lang="ts">
  import Engine from '$lib/core/Engine';


  async function handleLogout() {
    Engine.logout();
  }
</script>

<nav
  class="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl"
>
  <div class="navbar-container d-flex content">
    <div class="bookmark-wrapper d-flex align-items-center">
      <ul class="nav navbar-nav d-xl-none">
        <li class="nav-item">
          <a class="nav-link menu-toggle" href={'#'}
            ><i class="ficon" data-feather="menu" /></a
          >
        </li>
      </ul>
    </div>
    <ul class="nav navbar-nav align-items-center ms-auto">
      <li class="nav-item dropdown dropdown-user">
        <a
          class="nav-link dropdown-toggle d-flex items-center"
          id="dropdown-user"
          href={'#'}
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          on:click={handleLogout}
        >
          <img class="" src="/icons/logout.svg" alt="avatar" />
          <div class="ml-2" />
          <div class="text-base" style="color: #21292E;">Sair</div>
        </a>
      </li>
    </ul>
  </div>
</nav>
