import axios from 'axios';
import type { PageLoad } from './$types';
import type { Rankings } from '../../../types/api/openDota';
import { API_URL } from '../../../constants/api';

export const load: PageLoad = async ({ params }) => {
	const raiting = await axios.get(`${API_URL}rankings?hero_id=${params.slug}`);

	return {
		raiting: raiting.data as Rankings
	};
};
