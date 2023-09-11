<script lang="ts">
	import Content from '$lib/Content.svelte';
	import AboutHero from '$lib/components/AboutHero.svelte';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	import AboutNav from './elements/aboutNav.svelte';
	import { heroStore } from '../../../store';
	import axios from 'axios';
	import { API_URL } from '../../../constants/api';
	import type { Hero } from '../../../types/api/openDota';
	import Skeleton from '$lib/components/Skeleton.svelte';

	export let data: LayoutData;

	let isLoading = false;

	$: hero = $heroStore.find((hero) => hero.id === +data.id);

	onMount(async () => {
		if (!$heroStore.length) {
			try {
				const res = await axios.get(`${API_URL}heroStats`);
				$heroStore = res.data as Hero[];
			} catch (e) {
				console.log(e);
			} finally {
				isLoading = true;
			}
		} else {
			isLoading = true;
		}
	});
</script>

<Content>
	<div class="wrapper">
		{#if isLoading && hero}
			<div>
				<AboutHero {hero} id={data.id} withMoreBtn />
				<AboutNav />
				<slot />
			</div>
		{:else}
			<div>
				<Skeleton width="100%" height="108px" />
				<div class="content">
					<Skeleton width="100px" height="24px" />
					<Skeleton width="250px" height="17px" />
				</div>
			</div>
		{/if}
	</div>
</Content>

<style>
	.wrapper {
		padding: 10px;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin-top: 20px;
	}
</style>
