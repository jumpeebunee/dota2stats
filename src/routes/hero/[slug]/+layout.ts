import axios from 'axios';
import type { LayoutLoad } from './$types';
import type { Hero } from '../../../types/api/openDota';
import { API_URL } from '../../../constants/api';

export const load: LayoutLoad = async ({ params }) => {
	const heroes = await axios.get(`${API_URL}heroStats`);

	return {
		id: params.slug,
		heroes: heroes.data as Hero[]
	};
};
