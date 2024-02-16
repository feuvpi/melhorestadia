<script>
	import ArticleCard from '../lib/components/Card.svelte';

	// Dados do artigo
	const articles = [
		{
			category: 'Tecnologia',
			title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
			author: 'David Grzyb',
			date: '25 de abril de 2020',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna.'
		},
		{
			category: 'Tecnologia',
			title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
			author: 'David Grzyb',
			date: '25 de abril de 2020',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna.'
		}
	];
</script>

<body class="bg-white font-family-karla">
	<!-- Top Bar Nav -->
	<nav class="w-full py-4 bg-emerald-800 shadow">
		<div class="w-full container mx-auto flex flex-wrap items-center justify-between">
			<nav>
				<ul
					class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline"
				>
					<li><a class="hover:text-gray-200 hover:underline px-4" href="#">Shop</a></li>
					<li><a class="hover:text-gray-200 hover:underline px-4" href="#">About</a></li>
				</ul>
			</nav>
		</div>
	</nav>

	<div class="relative bg-gray-100 flex items-center justify-center mb-2 p-6">
		<!-- Background Image -->
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt=""
				class="w-full h-full object-cover"
				style="object-fit: cover;"
			/>
		</div>

		<!-- Login Form -->
		<div
			class="relative z-10 backdrop-blur-md bg-white/30 p-8 rounded-md shadow-lg md:w-2/6 mb-8 mt-8"
		>
			<form action="#" method="POST">
				<div class="mb-4">
					<label class="block text-gray-700 font-bold mb-2" for="email"
						>Aonde deseja recarregar as energias?</label
					>
					<input
						class="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
						id="lugar"
						type="text"
						placeholder="Aonde deseja recarregar as energias?"
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 font-bold mb-2" for="password">Data de chegada</label>
					<input
						class="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
						id="chegada"
						type="date"
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 font-bold mb-2" for="password">Data de saída</label>
					<input
						class="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
						id="saida"
						type="date"
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 font-bold mb-2" for="quantidade"
						>Número de pessoas</label
					>
					<select
						class="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
						id="quantidade"
					>
						<option value="">Selecione o número de pessoas</option>
						<option value="1">1 pessoa</option>
						<option value="2">2 pessoas</option>
						<option value="3">3 pessoas</option>
						<option value="4">4 pessoas</option>
						<option value="5">5 pessoas</option>
						<option value="6">6 pessoas</option>
						<option value="7">7 pessoas</option>
						<option value="8+">8 ou mais pessoas</option>
					</select>
				</div>
				<div class="mt-6 flex items-center justify-between gap-8">
					<button
						class="text-white font-bold flex w-full text-center justify-center flex-no-wrap border-2 border-white bg-emerald-600 py-2 px-4"
					>
						<span>ESTOU COM SORTE</span>
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="ml-2 w-6 h-6"
								><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"
								></polyline></svg
							>
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>

	<!-- Text Header -->
	<header class="w-full container mx-auto">
		<div class="flex flex-col items-center py-12">
			<a class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
				LUGARES NA NATUREZA
			</a>
			<p class="text-lg text-gray-600">
				Encontre as melhores e mais baratas cabines e chales do Brasil. Alugue a melhor acomodação
				em qualquer lugar do Brasil!
			</p>
		</div>
	</header>

	<!-- Topic Nav -->
	<!-- <nav class="w-full py-4 border-t border-b bg-gray-100" x-data="{ open: false }"></nav> -->
	<nav class="w-full py-4 border-t border-b bg-gray-100">
		<div class="block sm:hidden">
			<!-- <a
                href="#"
                class="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
                @click="open = !open"
            >
                Topics <i :class="open ? 'fa-chevron-down': 'fa-chevron-up'" class="fas ml-2"></i>
            </a> -->
		</div>
		<div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
			<div
				class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2"
			>
				<a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Technology</a>
				<a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Automotive</a>
				<a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Finance</a>
				<a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Politics</a>
				<a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Culture</a>
				<a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Sports</a>
			</div>
		</div>
	</nav>

	<div class="container mx-auto flex flex-wrap py-6">
		<!-- Posts Section -->

		<section class="w-full md:w-2/3 flex flex-col items-center px-3">
			{#each articles as article}
				<ArticleCard articleData={article} />
			{/each}
			<!-- Pagination -->
			<div class="flex items-center py-8">
				<a
					href="#"
					class="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"
					>1</a
				>
				<a
					href="#"
					class="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
					>2</a
				>
				<a
					href="#"
					class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
					>Next <i class="fas fa-arrow-right ml-2"></i></a
				>
			</div>
		</section>

		<!-- Sidebar Section -->
		<aside class="w-full md:w-1/3 flex flex-col items-center px-3">
			<div class="w-full bg-white shadow flex flex-col my-4 p-6">
				<p class="text-xl font-semibold pb-5">About Us</p>
				<p class="pb-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio
					sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.
				</p>
				<a
					href="#"
					class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
				>
					Get to know us
				</a>
			</div>

			<div class="w-full bg-white shadow flex flex-col my-4 p-6">
				<p class="text-xl font-semibold pb-5">Instagram</p>
				<div class="grid grid-cols-3 gap-3">
					<img
						class="hover:opacity-75"
						src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
					/>
					<img
						class="hover:opacity-75"
						src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
					/>
					<img
						class="hover:opacity-75"
						src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
					/>
					<img
						class="hover:opacity-75"
						src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
					/>
					<img
						class="hover:opacity-75"
						src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
					/>
					<img
						class="hover:opacity-75"
						src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
					/>
					<img
						class="hover:opacity-75"
						src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
					/>
					<img
						class="hover:opacity-75"
						src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
					/>
					<img
						class="hover:opacity-75"
						src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
					/>
				</div>
				<a
					href="#"
					class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6"
				>
					<i class="fab fa-instagram mr-2"></i> Follow @dgrzyb
				</a>
			</div>
		</aside>
	</div>

	<footer class="w-full border-t bg-white pb-12">
		<div class="relative w-full flex items-center invisible md:visible md:pb-12">
			<button
				class="absolute bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 ml-12"
			>
				&#8592;
			</button>
			<template>
				<img class="w-1/6 hover:opacity-75" />
			</template>
			<button
				class="absolute right-0 bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 mr-12"
			>
				&#8594;
			</button>
		</div>
		<div class="w-full container mx-auto flex flex-col items-center">
			<div class="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
				<a href="#" class="uppercase px-3">About Us</a>
				<a href="#" class="uppercase px-3">Privacy Policy</a>
				<a href="#" class="uppercase px-3">Terms & Conditions</a>
				<a href="#" class="uppercase px-3">Contact Us</a>
			</div>
			<div class="uppercase pb-6">&copy; myblog.com</div>
		</div>
	</footer>
</body>

<!-- <script>
		function getCarouselData() {
			return {
				currentIndex: 0,
				images: [
					'https://source.unsplash.com/collection/1346951/800x800?sig=1',
					'https://source.unsplash.com/collection/1346951/800x800?sig=2',
					'https://source.unsplash.com/collection/1346951/800x800?sig=3',
					'https://source.unsplash.com/collection/1346951/800x800?sig=4',
					'https://source.unsplash.com/collection/1346951/800x800?sig=5',
					'https://source.unsplash.com/collection/1346951/800x800?sig=6',
					'https://source.unsplash.com/collection/1346951/800x800?sig=7',
					'https://source.unsplash.com/collection/1346951/800x800?sig=8',
					'https://source.unsplash.com/collection/1346951/800x800?sig=9'
				],
				increment() {
					this.currentIndex =
						this.currentIndex === this.images.length - 6 ? 0 : this.currentIndex + 1;
				},
				decrement() {
					this.currentIndex =
						this.currentIndex === this.images.length - 6 ? 0 : this.currentIndex - 1;
				}
			};
		}
	</script> -->
