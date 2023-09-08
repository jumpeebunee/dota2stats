<script lang="ts">
	import { onMount } from 'svelte';
	import { scrollToTop } from '../../../helpers/scrollToTop';
	import Content from '$lib/Content.svelte';

	onMount(() => scrollToTop());
</script>

<Content>
	<div class="content">Coming soon...</div>
</Content>

<style>
	.content {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		font-size: 18px;
		color: #fff;
	}
</style>
