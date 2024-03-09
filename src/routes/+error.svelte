<script lang="ts">
  import Engine from '$lib/core/Engine';
  // eslint-disable-next-line import/no-unresolved
  import { page } from '$app/stores';

  if ($page.error?.message.includes('Not Found')) {
    Engine.navigateTo('/404');
  }
</script>
