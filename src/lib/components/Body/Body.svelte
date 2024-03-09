<script lang="ts">
  export let blankPage = false;

</script>

<body
  class="vertical-layout vertical-menu-modern navbar-floating footer-static {blankPage ? 'blank-page' : ''}"
  data-open="click"
  data-menu="vertical-menu-modern"
  data-col=""
>
  <slot />
</body>
    

