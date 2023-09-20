<script lang="ts">
	import type { IBench } from '../../../../../types/api/openDota';

	export let title: string;
	export let data: IBench[];

	const formattedTitle = title[0].toUpperCase() + title.split('_').join(' ').slice(1);

	const checkValueLength = (value: number): string | number => {
		let formattedValue = value.toString();

		if (formattedValue.length > 5) {
			return Number(formattedValue).toFixed(2);
		}

		return formattedValue;
	};
</script>

<div>
	<div class="title">{formattedTitle}</div>

	<li class="item">
		{#each data as item}
			<div class="content">
				<div class="percents">{item.percentile * 100}%:</div>
				<div class="value">{checkValueLength(item.value)}</div>
			</div>
		{/each}
	</li>
</div>

<style>
	.title {
		color: #fff;
		font-size: 18px;
	}

	.item {
		display: flex;
		align-items: center;
		background: #384d64;
		margin-top: 10px;
		padding: 16px;
		overflow-x: scroll;
		border-radius: 4px;
	}

	.item::-webkit-scrollbar {
		height: 0px;
	}

	.content {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.content:not(:first-child) {
		padding-left: 10px;
	}

	.content:not(:last-child) {
		padding-right: 10px;
		border-right: 1px solid #fff;
	}

	.percents,
	.value {
		color: #fff;
		font-size: 16px;
	}

	.value {
		opacity: 0.8;
		font-weight: 300;
	}
</style>
