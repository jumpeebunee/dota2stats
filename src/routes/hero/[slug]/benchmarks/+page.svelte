<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { scrollToTop } from '../../../../helpers/scrollToTop';
	import Item from './components/item.svelte';
	import type { IBenchs } from '../../../../types/api/openDota';

	export let data: PageData;

	onMount(() => scrollToTop());

	const getValue = (data: IBenchs, item: string) => {
		return data[item as keyof typeof data];
	};
</script>

<div class="list">
	{#each Object.keys(data.raiting.result) as item}
		<Item title={item} data={getValue(data.raiting.result, item)} />
	{/each}
</div>

<style>
	.list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
