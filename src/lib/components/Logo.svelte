<script lang="ts">
  import { clientStore } from '$lib/stores/clientStore';

  const href = $clientStore ? '/dashboard' : '/';
</script>

<a class="navbar-brand" {href}>
  <h2 class="brand-text">Portal Cadeado</h2>
</a>
