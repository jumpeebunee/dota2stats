<script lang="ts">
	let isBurgerOpen = false;

	const openBurger = (status: boolean) => {
		if (status) {
			document.body.style.position = 'fixed';
		}
		isBurgerOpen = status;
	};
</script>

<header class="header">
	<div class="title">Hero Stats</div>
	<button on:click={() => openBurger(true)} class="button"><span /></button>
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
	}

	.button {
		width: 30px;
		height: 30px;
		background-image: url(IcMBurger.svg);
		background-color: transparent;
	}
</style>
