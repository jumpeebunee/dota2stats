import type { PageLoad } from './$types';

export const load = (async () => {
	const data = await fetch('https://api.opendota.com/api/heroStats');
	const response = await data.json();

	return {
		heroes: response as Hero[]
	};
}) satisfies PageLoad;
