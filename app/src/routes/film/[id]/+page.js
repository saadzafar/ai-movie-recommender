/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return { movie_id: params.id };
}
