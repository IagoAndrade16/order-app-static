<script lang="ts">
	import '../lib/css/custom/globals.css';
	import '../lib/css/custom/tailwind.css';
	
	// import '../lib/css/template/vendors/forms/select/select2.min.css';
	// import '../lib/js/jquery.min.js';
	// import '../lib/js/select2.full.min.js';
	// import '../lib/js/form-select2';


	import '../lib/css/template/bootstrap.css';
	import '../lib/css/template/bootstrap-extended.css';
	import '../lib/css/template/colors.css';
	import '../lib/css/template/components.css';
	import '../lib/css/template/themes/dark-layout.css';
	import '../lib/css/template/themes/bordered-layout.css';
	import '../lib/css/template/themes/semi-dark-layout.css';
	import '../lib/css/template/core/menu/menu-types/vertical-menu.css';
	import '../lib/css/template/core/colors/palette-gradient.css';
	import '../lib/css/template/pages/authentication.css';
	import '../lib/css/template/plugins/forms/form-validation.css';
	import '../lib/css/template/pages/dashboard-ecommerce.css';
	import '../lib/css/template/plugins/charts/chart-apex.css';
	import '../lib/css/template/plugins/extensions/ext-component-toastr.css';
	import '../lib/css/template/vendors/vendors.min.css';
	import '../lib/css/template/vendors/charts/apexcharts.css';
	import '../lib/css/template/vendors/extensions/toastr.min.css';


  import { onMount } from 'svelte';
  import { clientStore } from '$lib/stores/clientStore';
  import { verifyAuthentication } from '$lib/functions/verifyAuthentication';
  import Engine from '$lib/core/Engine';


	onMount(() => {
		verifyAuthentication($clientStore);
		Engine.assertCustomizedPassword($clientStore);
	});
</script>

<slot />


  
