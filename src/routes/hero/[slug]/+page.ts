import axios from 'axios';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const res = await axios.get('https://api.opendota.com/api/heroStats');

	return {
		id: params.slug,
		heroes: res.data as Hero[]
	};
};
