<script lang="ts">
	import { page } from '$app/stores';

	import { HERO_ABOUT, HERO_STATS, SKILL_PAGE } from '../../constants/routes';
	import IcMBurger from '$lib/icons/IcMBurger.svg';
	import BackButton from './elements/backButton.svelte';

	let isBurgerOpen = false;

	const openBurger = (status: boolean) => {
		const ion = document.querySelector('.ion-page');

		if (status) {
			ion?.classList.add('ion-page_unactive');
		} else {
			ion?.classList.remove('ion-page_unactive');
		}
		isBurgerOpen = status;
	};

	$: isAboutPage = $page.route.id?.includes(HERO_ABOUT);
	$: isSkillsPage = $page.route.id?.includes(SKILL_PAGE);
</script>

<header class="header">
	{#if isAboutPage}
		<BackButton path={HERO_STATS} />
	{:else if isSkillsPage}
		<BackButton path={`${HERO_ABOUT}${$page.params.slug}`} />
	{:else}
		<div class="hidden" />
	{/if}

	<div class="title">{isAboutPage ? 'About Hero' : 'Hero Stats'}</div>

	<button
		style="background-image: url({IcMBurger});"
		on:click={() => openBurger(true)}
		class="button burger"><span /></button
	>
</header>

<div
	on:keydown
	on:click={() => openBurger(false)}
	tabindex={null}
	role="button"
	class:wrapper_open={isBurgerOpen}
	class="wrapper"
>
	<div
		on:keydown
		on:click|preventDefault|stopPropagation
		tabindex={null}
		role="button"
		class="menu"
	>
		<div>Coming soon...</div>
	</div>
</div>

<style>
	.hidden {
		width: 26px;
		height: 26px;
	}

	.wrapper {
		position: fixed;
		background: rgba(0, 0, 0, 0.5);
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		visibility: hidden;
		opacity: 0;
		transition: all ease 0.4s;
		z-index: 10;
	}

	.wrapper_open {
		visibility: visible;
		opacity: 1;
	}

	.menu {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		right: 0;
		width: 323px;
		height: 100%;
		background-color: #323e4f;
		color: #fff;
		font-size: 20px;
		font-weight: 500;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 25px;
		background: #323e4f;
	}

	.title {
		color: #fff;
		font-size: 20px;
		font-weight: 500;
		margin-left: auto;
		margin-right: auto;
	}

	.button {
		width: 26px;
		height: 26px;
		background-color: transparent;
	}
</style>
