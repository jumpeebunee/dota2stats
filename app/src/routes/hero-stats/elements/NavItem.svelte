<script lang="ts">
	export let type: string;
	export let currentType: string;
	export let sortType: 'asc' | 'desc';
</script>

<button on:click class="item">
	<div>{type}</div>

	<div class="icons">
		<div class:icon-up_active={currentType === type && sortType === 'asc'} class="icon icon-up" />
		<div
			class:icon-down_active={currentType === type && sortType === 'desc'}
			class="icon icon-down"
		/>
	</div>
</button>

<style>
	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		color: #d2d5d8;
		text-align: left;
		background: transparent;
	}

	.icons {
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin-left: 10px;
	}

	.icon {
		width: 10px;
		height: 7px;
		opacity: 0.4;
	}

	.icon-up {
		background-image: url(IcSArrowUp.svg);
	}

	.icon-down {
		background-image: url(IcSArrowDown.svg);
	}

	.icon-up_active,
	.icon-down_active {
		opacity: 1;
	}
</style>
