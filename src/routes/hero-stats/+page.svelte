<script lang="ts">
	import Content from '$lib/Content.svelte';
	import { onMount } from 'svelte';
	import { IMAGE_URL } from '../../constants/images';
	import { HERO_ABOUT } from '../../constants/routes';
	import { sortTypes } from './helpers/sortTypes';
	import { scrollToTop } from '../../helpers/scrollToTop';
	import { heroStore } from '../../store';
	import axios from 'axios';
	import { API_URL } from '../../constants/api';
	import type { Hero } from '../../types/api/openDota';
	import Skeleton from '$lib/components/Skeleton.svelte';

	let isLoading = false;
	let sortType: 'asc' | 'desc' = 'asc';

	const types = ['BanPick', 'Pick', 'Ban', 'Win'];

	const changeSort = (sort: string) => {
		sorted = sorted.sort(sortTypes[sort as keyof typeof sortTypes](sortType));

		sortType = sortType === 'asc' ? 'desc' : 'asc';
	};

	onMount(async () => {
		scrollToTop();

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

	$: sorted = $heroStore;
</script>

{#if isLoading}
	<Content>
		<div class="tabs">
			<div class="tab">Hero</div>

			{#each types as type}
				<div class="tab"><button on:click={() => changeSort(type)}>{type}</button></div>
			{/each}
		</div>

		{#each sorted as hero, i}
			<a href="{HERO_ABOUT}{hero.id}" class:tabs-filled={i % 2 === 0} class="tabs hero-tabs">
				<div class="tab">
					<img src="{IMAGE_URL}{hero.img}" alt="" />
				</div>

				<div class="tab">{(hero.pro_pick || 0) + (hero.pro_ban || 0)}</div>
				<div class="tab">{hero.pro_pick}</div>
				<div class="tab">{hero.pro_ban}</div>

				<div class="tab tab-win">
					<div>
						{Math.floor((hero.pro_win / hero.pro_pick) * 100)}%
					</div>
					<div class="subtitle">{hero.pro_win} wins</div>
				</div>
			</a>
		{/each}
	</Content>
{:else}
	<Content>
		<div class="skeletons">
			<Skeleton width="100%" height="69px" />
			<Skeleton width="100%" height="69px" />
			<Skeleton width="100%" height="69px" />
			<Skeleton width="100%" height="69px" />
		</div>
	</Content>
{/if}

<style>
	.skeletons {
		padding: 20px 10px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.tabs {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		padding: 25px 20px;
	}

	.tabs-filled {
		background: #384d64;
	}

	.hero-tabs {
		padding: 9px 20px;
	}

	.tab {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 16px;
	}

	.tab button {
		background: transparent;
		color: #fff;
		font-size: 16px;
	}

	.tab-win {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3px;
	}

	.tab img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		object-fit: cover;
	}

	.subtitle {
		font-size: 14px;
		font-weight: 300;
	}
</style>
