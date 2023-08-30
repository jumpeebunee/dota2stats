import { writable } from 'svelte/store';

export const heroStats = writable<Hero[]>([]);
