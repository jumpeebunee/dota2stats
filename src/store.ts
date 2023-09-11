import { writable } from 'svelte/store';
import type { Hero } from './types/api/openDota';

export const heroStore = writable<Hero[]>([]);
