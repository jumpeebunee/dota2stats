<script lang="ts">
	import type { PageData } from './$types';
	import Item from './elements/Item.svelte';
	import NavItem from './elements/NavItem.svelte';
	import { sortTypes } from './helpers/sortTypes';

	export let data: PageData;

	let currentType = '';
	let sortType: 'asc' | 'desc' = 'asc';

	const types = ['BanPick', 'Pick', 'Ban', 'Win'];

	const changeSort = (sort: string) => {
		sorted = sorted.sort(sortTypes[sort as keyof typeof sortTypes](sortType));

		sortType = sortType === 'asc' ? 'desc' : 'asc';
		currentType = sort;
	};

	$: sorted = data.heroes;
</script>

<ion-content>
	<div class="wrapper">
		<div class="header">
			<div>Hero stats</div>
		</div>

		<div class="content">
			<div class="menu">
				<button class="title">Hero</button>

				{#each types as type}
					<NavItem on:click={() => changeSort(type)} {type} {sortType} {currentType} />
				{/each}
			</div>

			<ul class="list">
				{#each sorted as hero}
					<Item {hero} />
				{/each}
			</ul>
		</div>
	</div>
</ion-content>

<style>
	.wrapper {
		padding: 50px 20px;
		background: #53667b;
	}

	.header {
		padding: 35px;
		background: #232e3c;
		color: #d2d5d8;
		font-size: 24px;
		font-weight: 700;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
	}

	.content {
		padding: 15px;
		background: #323e4f;
		overflow-x: scroll;
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
	}

	.list {
		border-radius: 0px 0px 20px 20px;
		padding: 20px;
	}

	.menu {
		padding: 25px 20px;
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
		border-radius: 10px;
		background: #232e3c;
	}

	.menu button {
		font-size: 18px;
		color: #d2d5d8;
		text-align: left;
		background: transparent;
	}

	@media (max-width: 780px) {
		.menu {
			width: 710px;
			grid-template-columns: 250px 150px 100px 100px 100px;
		}
	}
</style>
