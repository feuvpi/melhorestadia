<script lang="ts">
	import { formatDate } from '$lib/utils';
	import CardList from '$lib/components/CardList.svelte';
	import AppComponent from '$lib/components/AppComponent.svelte';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="flex justify-center py-4 bg-opacity-50 border-2 border-orange-600">
	<!-- Article Section -->

	<article class="w-full md:w-4/5 mx-4 my-4 prose">
		<!-- Title -->
		<hgroup>
			<h1>{data.meta.title}</h1>
			<p>Publicado em {formatDate(data.meta.publishedAtIso)}</p>
		</hgroup>

		<!-- Tags -->
		<div class="tags mb-4">
			{#each data.meta.category as category}
				<span class="surface-4">&num;{category}</span>
			{/each}
		</div>

		<!-- Post -->
		<div class="prose">
			<svelte:component this={data.content} />
		</div>
	</article>
	<!-- Sidebar Section -->

	<aside class="w-full md:w-1/5 mx-2 my-4 prose bg-emerald-400/50 p-6">
		<div class="w-full flex flex-col">
			<CardList />
		</div>

		<AppComponent mdWidth="md:w-full" />
	</aside>
</div>

<style>
	/* article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	} */

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}
</style>
