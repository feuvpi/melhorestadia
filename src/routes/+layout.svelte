<script lang="ts">
	import AppComponent from '../lib/components/AppComponent.svelte';
	import type { LayoutData } from './$types';
	import '../app.css';

	export let data: LayoutData;
</script>

<div class="wrapper relative font-sans min-h-screen flex flex-col align-middle bg-gray-900">
	<body class="bg-white font-family-karla">
		<!-- Top Bar Nav -->

		<div
			class="flex flex-col items-center"
			style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1920 1080%22%3E%3Cg transform=%22rotate(170 960 540) translate(-281.77499944328065 -158.49843718684542) scale(1.293515624420084)%22%3E%3Crect width=%221920%22 height=%221080%22 fill=%22rgb(142, 217, 121)%22%3E%3C/rect%3E%3Cg transform=%22translate(0, 0)%22%3E%3Cpath fill=%22rgb(107, 194, 127)%22 fill-opacity=%221%22 d=%22M0,264.707L45.714,262.556C91.429,260.405,182.857,256.103,274.286,255.436C365.714,254.769,457.143,257.737,548.571,258.071C640,258.405,731.429,256.104,822.857,227.387C914.286,198.67,1005.714,143.537,1097.143,138.881C1188.571,134.225,1280,180.045,1371.429,166.002C1462.857,151.959,1554.286,78.052,1645.714,73.86C1737.143,69.669,1828.571,135.193,1874.286,167.955L1920,200.718L1920,1080L1874.286,1080C1828.571,1080,1737.143,1080,1645.714,1080C1554.286,1080,1462.857,1080,1371.429,1080C1280,1080,1188.571,1080,1097.143,1080C1005.714,1080,914.286,1080,822.857,1080C731.429,1080,640,1080,548.571,1080C457.143,1080,365.714,1080,274.286,1080C182.857,1080,91.429,1080,45.714,1080L0,1080Z%22%3E%3C/path%3E%3C/g%3E%3Cg transform=%22translate(0, 270)%22%3E%3Cpath fill=%22rgb(71, 171, 132)%22 fill-opacity=%221%22 d=%22M0,102.07L45.714,88.075C91.429,74.081,182.857,46.091,274.286,60.539C365.714,74.987,457.143,131.872,548.571,142.129C640,152.386,731.429,116.015,822.857,97.811C914.286,79.606,1005.714,79.568,1097.143,105.956C1188.571,132.344,1280,185.158,1371.429,213.523C1462.857,241.888,1554.286,245.804,1645.714,213.506C1737.143,181.208,1828.571,112.697,1874.286,78.441L1920,44.186L1920,810L1874.286,810C1828.571,810,1737.143,810,1645.714,810C1554.286,810,1462.857,810,1371.429,810C1280,810,1188.571,810,1097.143,810C1005.714,810,914.286,810,822.857,810C731.429,810,640,810,548.571,810C457.143,810,365.714,810,274.286,810C182.857,810,91.429,810,45.714,810L0,810Z%22%3E%3C/path%3E%3C/g%3E%3Cg transform=%22translate(0, 540)%22%3E%3Cpath fill=%22rgb(36, 147, 138)%22 fill-opacity=%221%22 d=%22M0,80.341L45.714,100.73C91.429,121.12,182.857,161.899,274.286,190.747C365.714,219.596,457.143,236.513,548.571,225.386C640,214.259,731.429,175.089,822.857,135.235C914.286,95.38,1005.714,54.842,1097.143,32.523C1188.571,10.205,1280,6.106,1371.429,30.809C1462.857,55.513,1554.286,109.018,1645.714,125.837C1737.143,142.655,1828.571,122.785,1874.286,112.85L1920,102.916L1920,540L1874.286,540C1828.571,540,1737.143,540,1645.714,540C1554.286,540,1462.857,540,1371.429,540C1280,540,1188.571,540,1097.143,540C1005.714,540,914.286,540,822.857,540C731.429,540,640,540,548.571,540C457.143,540,365.714,540,274.286,540C182.857,540,91.429,540,45.714,540L0,540Z%22%3E%3C/path%3E%3C/g%3E%3Cg transform=%22translate(0, 810)%22%3E%3Cpath fill=%22rgb(0, 124, 143)%22 fill-opacity=%221%22 d=%22M0,38.612L45.714,43.474C91.429,48.336,182.857,58.059,274.286,64.956C365.714,71.853,457.143,75.924,548.571,99.792C640,123.66,731.429,167.326,822.857,197.063C914.286,226.799,1005.714,242.607,1097.143,252.089C1188.571,261.571,1280,264.727,1371.429,246.468C1462.857,228.209,1554.286,188.536,1645.714,156.971C1737.143,125.406,1828.571,101.95,1874.286,90.222L1920,78.494L1920,270L1874.286,270C1828.571,270,1737.143,270,1645.714,270C1554.286,270,1462.857,270,1371.429,270C1280,270,1188.571,270,1097.143,270C1005.714,270,914.286,270,822.857,270C731.429,270,640,270,548.571,270C457.143,270,365.714,270,274.286,270C182.857,270,91.429,270,45.714,270L0,270Z%22%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E'); background-size: cover;"
		>
			<a class="flex items-center justify-center" href="#">
				<img src="/src/lib/shared/logo_1.png" alt="Logo" class="w-88 h-28" />
			</a>
		</div>

		<nav class="w-full border-t border-b bg-gray-100">
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
					<a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Cabines</a>
					<a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Trilhas</a>
					<a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Cachoeiras</a>
					<a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Lugares</a>
					<a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Comida</a>
				</div>
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

			<!-- App Form -->
			<AppComponent />
			<!-- <div
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
							class="text-white font-bold flex w-full text-center justify-center flex-no-wrap border-2 border-white bg-emerald-500 hover:bg-emerald-600 py-2 px-4"
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
			</div> -->
		</div>

		<!-- Topic Nav -->
		<!-- <nav class="w-full py-4 border-t border-b bg-gray-100" x-data="{ open: false }"></nav> -->
		<slot />
	</body>
</div>
