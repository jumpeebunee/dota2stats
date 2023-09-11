<script lang="ts">
	import { onMount } from 'svelte';
	import { scrollToTop } from '../../../helpers/scrollToTop';
	import Content from '$lib/Content.svelte';
	import type { PageData } from './$types';
	import { heroStore } from '../../../store';
	import axios from 'axios';
	import { API_URL } from '../../../constants/api';
	import type { Hero } from '../../../types/api/openDota';
	import AboutHero from '$lib/components/AboutHero.svelte';
	import Stat from './elements/stat.svelte';
	import Skeleton from '$lib/components/Skeleton.svelte';
	import { stats } from './helpers/stats';

	export let data: PageData;

	let isLoading = false;

	$: hero = $heroStore.find((hero) => hero.id === +data.id);

	onMount(async () => {
		scrollToTop();

		if (!$heroStore.length) {
			try {
				const res = await axios.get(`${API_URL}heroStats`);
				$heroStore = res.data as Hero[];
			} catch (e) {
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
			<AboutHero {hero} id={data.id} />

			<div class="stats">
				<Stat
					type="str"
					isBase={hero.primary_attr === 'str'}
					base={hero.base_str}
					gain={hero.str_gain}
				/>
				<Stat
					isBase={hero.primary_attr === 'agi'}
					type="agi"
					base={hero.base_agi}
					gain={hero.agi_gain}
				/>
				<Stat
					isBase={hero.primary_attr === 'int'}
					type="int"
					base={hero.base_int}
					gain={hero.int_gain}
				/>
			</div>

			<div class="br" />

			<ul class="list">
				<li>
					<div class="item-title">Base attack:</div>
					<div class="item-stat">
						{hero.base_attack_min + hero[`base_${hero.primary_attr}`]}
						/ {hero.base_attack_max + hero[`base_${hero.primary_attr}`]}
					</div>
				</li>

				<li>
					<div class="item-title">Health:</div>
					<div class="item-stat">{hero.base_health + hero.base_str * 22}</div>
				</li>

				<li>
					<div class="item-title">Mana:</div>
					<div class="item-stat">{hero.base_mana + hero.base_int * 12}</div>
				</li>

				{#each stats as stat}
					<li>
						<div class="item-title">{stat.title}:</div>
						<div class="item-stat">{hero[stat.type]}</div>
					</li>
				{/each}

				<li>
					<div class="item-title">CM enabled:</div>
					<div class="item-stat">{hero.cm_enabled ? 'Yes' : 'No'}</div>
				</li>
			</ul>
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

	.stats {
		margin-top: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 9px 25px;
		background: #384d64;
		border-radius: 4px;
	}

	.br {
		margin-top: 25px;
		margin-bottom: 15px;
		height: 1px;
		background: rgba(255, 255, 255, 0.2);
	}

	.list li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 20px;
	}

	.item-title {
		color: rgba(255, 255, 255, 0.8);
		font-size: 16px;
	}

	.item-stat {
		color: #fff;
	}

	.list li:nth-child(2n) {
		background: #384d64;
	}
</style>
