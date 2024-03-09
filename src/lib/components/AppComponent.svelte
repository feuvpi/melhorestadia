<script>
	export let mdWidth = 'md:w-2/6';

	let location = '';
	let startDate = new Date();
	let endDate = new Date(startDate.getDate() + 1);
	let numberOfPeople = 1;

	function redirectToAirbnb() {
		// Construct the URL with query parameters

		const airBnbURL = `https://www.airbnb.com.br/s/${encodeURIComponent(location)}/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=${encodeURIComponent(startDate.toString())}&monthly_length=3&monthly_end_date=2024-06-01&adults=${encodeURIComponent(numberOfPeople)}&price_filter_input_type=0&channel=EXPLORE&price_filter_num_nights=5&source=structured_search_input_header&search_type=filter_change&query=${encodeURIComponent(location)}&date_picker_type=calendar&checkin=${encodeURIComponent(startDate.toString())}&checkout=${encodeURIComponent(endDate.toString())}`;
		window.location.href = airBnbURL;
	}
</script>

<div
	class={`relative z-10 md:backdrop-blur-md bg-white/70 p-8 rounded-md shadow-lg ${mdWidth} mb-8 mt-8`}
>
	<form>
		<div class="mb-4">
			<label class="block text-blackfont-bold mb-2" for="location">Destino:</label>
			<input
				bind:value={location}
				class="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
				id="lugar"
				type="text"
				placeholder="Selecionar um destino"
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="startDate">Data de chegada:</label>
			<input
				bind:value={startDate}
				class="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
				id="chegada"
				type="date"
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="endDate">Data de saída:</label>
			<input
				bind:value={endDate}
				class="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
				id="saida"
				type="date"
			/>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="numberOfPeople"
				>Número de pessoas:</label
			>
			<select
				bind:value={numberOfPeople}
				class="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
				id="quantidade"
				placeholder="Aonde deseja recarregar as energias?"
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
				on:click={redirectToAirbnb}
				type="submit"
				class="text-white font-bold flex w-full text-center justify-center flex-no-wrap border-2 border-white bg-emerald-400 hover:bg-emerald-300 py-2 px-4"
			>
				<span>ENCONTRAR A MELHOR ESTADIA</span>
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
