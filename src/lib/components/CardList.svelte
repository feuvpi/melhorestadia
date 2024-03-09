<script>
	import { formatDate } from '$lib/utils';

	/**
	 * @type {{ posts: any; }}
	 */
	export let data;
	/** @type {import("$lib/types").Post[]} */
	let postsTotais = data.posts;

	/**
//  * @param {string | number | Date} dateString
//  */
	//  function formatDate(dateString) {
	//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
	//     const date = new Date(dateString);
	//     return date.toLocaleDateString(undefined, options);
	// }
</script>

<div class="relative flex flex-col justify-center overflow-auto">
	<div class="mx-auto">
		{#each postsTotais as post}
			<div class="grid w-full grid-cols-1 gap-6 my-4">
				<div
					class=" relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm"
				>
					<a href={post.slug} class="z-20 absolute h-full w-full top-0 left-0">&nbsp;</a>
					<div class="h-auto overflow-hidden">
						<div class="h-44 overflow-hidden relative">
							<img src={post.imageUrl} alt="" />
						</div>
					</div>
					<div class="bg-white py-4 px-3">
						<h3 class="text-xs mb-2 font-medium">{post.title}</h3>
						<div class="flex justify-between items-center">
							<p class="text-xs text-gray-400">Publicado em {post.publishedAtIso}</p>
							<div class="relative z-40 flex items-center gap-2">
								<!-- <a class="text-orange-600 hover:text-blue-500" href="">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
										/>
									</svg>
								</a> -->
								<!-- <a class="text-orange-600 hover:text-blue-500" href="">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
										/>
									</svg>
								</a> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
