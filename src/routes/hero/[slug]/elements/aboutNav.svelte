<script lang="ts">
	import { page } from '$app/stores';
	import { HERO_ABOUT } from '../../../../constants/routes';

	$: splittedUrl = $page.url.pathname.split('/');
	$: currentUrl = splittedUrl.length === 4 ? splittedUrl.pop() : '';

	const items = [
		{ title: 'Rankings', value: '' }
		// { title: 'Benchmarks', value: 'benchmarks' }
	];
</script>

<ul class="list">
	{#each items as item}
		<li class:item_active={item.value === currentUrl} class="item">
			<a class="link" href="{HERO_ABOUT}{splittedUrl[2]}/{item.value}">{item.title}</a>
		</li>
	{/each}
</ul>

<style>
	.list {
		display: flex;
		gap: 20px;
		margin-top: 30px;
		margin-bottom: 30px;
		padding-bottom: 12px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	.link {
		color: #fff;
		font-size: 18px;
	}

	.item {
		position: relative;
	}

	.item_active::after {
		content: '';
		width: 100%;
		height: 1px;
		position: absolute;
		background-color: #a89cee;
		left: 0;
		bottom: -13px;
	}
</style>
