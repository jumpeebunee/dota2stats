<script lang="ts">
	import type { PageData } from './$types';
	import Item from './elements/Item.svelte';
	import NavItem from './elements/NavItem.svelte';
	import { sortTypes } from './helpers/sortTypes';

	export let data: PageData;

	let currentType = '';
	let sortType: 'asc' | 'desc' = 'asc';

	let isBurgerOpen = false;

	const types = ['BanPick', 'Pick', 'Ban', 'Win'];

	const changeSort = (sort: string) => {
		sorted = sorted.sort(sortTypes[sort as keyof typeof sortTypes](sortType));

		sortType = sortType === 'asc' ? 'desc' : 'asc';
		currentType = sort;
	};

	const openBurger = (status: boolean) => {
		if (status) {
			document.body.style.position = 'fixed';
		}
		isBurgerOpen = status;
	};

	$: sorted = data.heroes;
</script>

<ion-content>
	<div
		on:click={() => openBurger(false)}
		on:keydown
		role="menu"
		tabindex={null}
		class:burger-menu-wrapper_open={isBurgerOpen}
		class="burger-menu-wrapper"
	>
		<div
			on:keydown
			role="menu"
			tabindex={null}
			on:click|preventDefault|stopPropagation
			class="burger-menu"
		>
			<div>Coming soon...</div>
			<button on:click={() => openBurger(false)} class="close" />
		</div>
	</div>

	<div class="wrapper">
		<div class="header">
			<div class="logo">
				<div class="icon" />
				<div class="caption">Hero stats</div>
			</div>

			<button on:click={() => openBurger(true)} class="burger" />
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
	.burger-menu {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		width: 100%;
		height: 263px;
		background-color: #232e3c;
		color: #d2d5d8;
		font-size: 18px;
		font-weight: 600;
		z-index: 1;
	}

	.burger-menu-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(35, 46, 60, 0.6);
		z-index: 2;
		opacity: 0;
		visibility: hidden;
		transition: all ease 0.4s;
	}

	.burger-menu-wrapper_open {
		opacity: 1;
		visibility: visible;
	}

	.close {
		position: absolute;
		right: 20px;
		top: 20px;
		width: 30px;
		height: 30px;
		background-image: url(IcMClose.svg);
		background-color: transparent;
	}

	.wrapper {
		padding: 50px 20px;
		background: #53667b;
		background-image: url(bg.png);
		background-repeat: no-repeat;
		background-position: top left;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 35px;
		background: #232e3c;
		color: #d2d5d8;
		font-size: 24px;
		font-weight: 700;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
	}

	.burger {
		width: 30px;
		height: 30px;
		background-image: url(IcMBurger.svg);
		background-color: transparent;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.caption {
		margin-top: 7px;
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

	.content::-webkit-scrollbar {
		width: 0px;
		height: 0px;
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

	.icon {
		width: 40px;
		height: 40px;
		background-image: url(IcLStats.svg);
	}

	@media (max-width: 780px) {
		.menu {
			width: 710px;
			grid-template-columns: 250px 150px 100px 100px 100px;
		}
	}
</style>
