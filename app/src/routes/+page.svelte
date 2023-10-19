<script>
  import { onMount } from 'svelte';
  export let data;

  onMount(() => {
    localStorage.setItem("films", JSON.stringify(data.films))
  })
</script>

<div class="bg-gray-50 p-5">
	<div class="flex justify-center items-center">
		<section class="py-4">
			<div class="container mx-auto">
				<div class="mx-4 flex flex-wrap">
					{#each data.films as film}
							<div class="w-full px-4 md:w-1/2 xl:w-1/2">
								<div class="relative mb-12">
									<div class=" overflow-hidden rounded-lg bg-white">
										<img
											src="https://image.tmdb.org/t/p/w500{film.backdrop_path}"
											alt="film"
											class="w-full h-full object-cover"
										/>
									</div>
									<div
										class="relative z-10 mx-7 -mt-20 rounded-lg bg-white py-9 px-3 text-center shadow-lg"
									>
										<h3 class="text-dark mb-4 text-2xl md:text-xl xl:text-lg font-bold">
											{film.title}
										</h3>
										<a href="film/{film.id}">Details</a>
									</div>
								</div>
							</div>
					{/each}
				</div>
			</div>
		</section>
	</div>
</div>