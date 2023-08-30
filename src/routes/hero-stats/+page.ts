import axios from 'axios';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const res = await axios.get('https://api.opendota.com/api/heroStats');

	return {
		heroes: res.data as Hero[]
	};
};
