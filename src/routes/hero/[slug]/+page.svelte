<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import Raiting from './elements/raiting.svelte';
	import { scrollToTop } from '../../../helpers/scrollToTop';

	export let data: PageData;

	onMount(() => scrollToTop());
</script>

<Raiting players={data.raiting} />
