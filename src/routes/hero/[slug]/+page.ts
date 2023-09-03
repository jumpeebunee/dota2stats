import axios from 'axios';
import type { PageLoad } from './$types';
import type { Hero } from '../../../types/api/openDota';

export const load: PageLoad = async ({ params }) => {
	const heroes = await axios.get('https://api.opendota.com/api/heroStats');
	const raiting = await axios.get(`https://api.opendota.com/api/rankings?hero_id=${params.slug}`);

	return {
		id: params.slug,
		heroes: heroes.data as Hero[],
		raiting: raiting.data
	};
};
