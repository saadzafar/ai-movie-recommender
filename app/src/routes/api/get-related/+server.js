import { json } from '@sveltejs/kit';
import { supabase } from '$lib/services/supabaseClient';

/** @type {import('./$types').PageServerLoad} */
export async function POST({ request }) {
	// const { data } = await supabase.from('films').select();
	const { id, embedding } = await request.json();

	const related_film = await supabase.rpc('get_related_film', {
		embedding: embedding,
		film_id: id
	});

	return json(related_film);
}
