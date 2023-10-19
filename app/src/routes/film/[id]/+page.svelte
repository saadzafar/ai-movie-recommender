<script>
	import { onMount } from 'svelte';

  /** @type {import('./$types').PageData} */
  export let data

  let filmData
  let loading = true
  let related_films = []

  onMount(() => {
    const films = JSON.parse(localStorage.getItem('films'));
	  filmData = films.find((film) => film.id === parseInt(data.movie_id));
    loading = false
  })

  async function get_related_films() {
    const response = await fetch('/api/get-related', {
      method: 'POST',
      body: JSON.stringify({"id": filmData.id, "embedding": filmData.embedding}),
      headers: {'content-type': 'application/json'}
    });

    const res = await response.json();
    related_films = res.data;
  }
</script>
{#if loading === false}
  <div>{filmData?.title} ({filmData.id})</div>
  <div>{filmData?.release_date}</div>
  <div>{filmData?.overview}</div>

  <button on:click={get_related_films}>See Related Films</button>

  {#if related_films.length > 0}
    {#each related_films as related_film}
      <div>{related_film.title}</div>
    {/each}
  {/if}
{:else}
  <div>loading...</div>
{/if}