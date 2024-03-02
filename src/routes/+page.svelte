<script>
	// @ts-nocheck

	import ArticleCard from '../lib/components/Card.svelte';
	import CardList from '../lib/components/CardList.svelte';
	import AppComponent from '../lib/components/AppComponent.svelte';
	export let data;

	// -- variável de estado para a página atual
	$: paginaAtual = 1;
	const postsPorPagina = 2;
	$: postsPaginaAtual = [];

	$: {
		const { start, end } = calcularIndices(paginaAtual);
		console.log('aqui');
		postsPaginaAtual = data.posts.slice(start, end);
		console.log(postsPaginaAtual);
	}

	// -- Função para calcular o índice inicial e final dos posts a serem exibidos
	function calcularIndices(paginaAtual) {
		const start = (paginaAtual - 1) * postsPorPagina;
		const end = start + postsPorPagina;
		return { start, end };
	}

	// -- Method to return total pages
	function getTotalPages() {
		return Math.ceil(data.posts.length / postsPorPagina);
	}

	// -- advance pagina
	function nextPage() {
		const totalPages = Math.ceil(data.posts.length / postsPorPagina);
		paginaAtual = paginaAtual < totalPages ? paginaAtual + 1 : paginaAtual;
	}

	// -- return page
	function paginaAnterior() {
		paginaAtual = paginaAtual > 1 ? paginaAtual - 1 : 1;
	}

	function selectPage(numeroPagina) {
		console.log('entrei' + numeroPagina);
		paginaAtual = numeroPagina;
	}
</script>

<!-- <pre>

	{JSON.stringify(data, null, 2)}
</pre> -->

<!-- Topic Nav -->
<!-- <nav class="w-full py-4 border-t border-b bg-gray-100" x-data="{ open: false }"></nav> -->

<div class="container shadow-xl mx-auto flex flex-wrap py-6 bg-opacity-50">
	<!-- Posts Section -->

	<section class="w-full md:w-2/3 flex flex-col items-center px-3">
		{#if postsPaginaAtual !== undefined}
			{#each postsPaginaAtual as post (post.title)}
				<ArticleCard {post} />
			{/each}
		{/if}
		<!-- Pagination -->
		<div class="flex items-center py-8">
			{#each Array.from({ length: getTotalPages() }) as _, i}
				<button
					on:click={() => selectPage(i + 1)}
					class="h-10 w-10 bg-emerald-500 hover:bg-emerald-600 font-semibold text-white text-sm flex items-center justify-center"
					>{i + 1}</button
				>
			{/each}
		</div>
	</section>

	<!-- Sidebar Section -->

	<aside class="w-full md:w-1/3 flex flex-col items-center px-3 bg-emerald-400/50">
		<div class="w-full flex flex-col my-4 p-6">
			<CardList />
		</div>

		<AppComponent mdWidth="md:w-5/6" />
	</aside>
</div>

<footer class="w-full border-t bg-white pb-12">
	<div class="relative w-full flex items-center invisible md:visible md:pb-12">
		<button
			on:click={paginaAnterior}
			class="absolute bg-emerald-500 hover:bg-emerald-600 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 ml-12"
		>
			&#8592;
		</button>
		<template>
			<img class="w-1/6 hover:opacity-75" />
		</template>
		<button
			on:click={nextPage}
			class="absolute right-0 bg-emerald-500 hover:bg-emerald-600 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 mr-12"
		>
			&#8594;
		</button>
	</div>
	<div class="w-full container mx-auto flex flex-col items-center">
		<!-- <div class="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
				<a href="#" class="uppercase px-3">About Us</a>
				<a href="#" class="uppercase px-3">Privacy Policy</a>
				<a href="#" class="uppercase px-3">Terms & Conditions</a>
				<a href="#" class="uppercase px-3">Contact Us</a>
			</div> -->
		<div class="uppercase pb-6">&copy; melhorestadia.com</div>
	</div>
</footer>
<!-- </body> -->
