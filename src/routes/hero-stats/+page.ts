import axios from 'axios';
import type { PageLoad } from './$types';
import type { Hero } from '../../types/api/openDota';
import { API_URL } from '../../constants/api';

export const load: PageLoad = async () => {
	const res = await axios.get(`${API_URL}heroStats`);

	return {
		heroes: res.data as Hero[]
	};
};
