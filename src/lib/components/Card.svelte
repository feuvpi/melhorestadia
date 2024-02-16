<script>
	export let articleData;

	// Extrair os dados do artigo
	const { category, title, author, date, content } = articleData;
</script>

<article class="flex flex-col shadow my-4">
	<!-- Imagem do Artigo -->
	<a href="#" class="hover:opacity-75">
		<img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />
	</a>
	<div class="bg-white flex flex-col justify-start p-6">
		<a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">{category}</a>
		<a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{title}</a>
		<p href="#" class="text-sm pb-3">
			Por <a href="#" class="font-semibold hover:text-gray-800">{author}</a>, Publicado em {date}
		</p>
		<p href="#" class="pb-6">{content}</p>
		<a href="#" class="uppercase text-gray-800 hover:text-black"
			>Continuar Lendo <i class="fas fa-arrow-right"></i></a
		>
	</div>
</article>
