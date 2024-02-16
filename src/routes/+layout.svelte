<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.css';

	export let data: LayoutData;
</script>

<div class="wrapper relative font-sans min-h-screen flex flex-col align-middle bg-gray-900">
	<slot />
</div>
