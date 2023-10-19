import { supabase } from '$lib/services/supabaseClient';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const { data } = await supabase.from('films').select();
	return {
		films: data ?? []
	};
}
