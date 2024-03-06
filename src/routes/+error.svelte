<script>
	import { page } from '$app/stores';
</script>

<div class="container grid place-content-center">
	<h1>{$page.state}: {$page.error?.message}</h1>
</div>
