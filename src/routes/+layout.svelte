<script lang="ts">
	import '.././theme/normolize.css';
	import { setupIonicBase } from 'ionic-svelte';

	setupIonicBase();

	import 'ionic-svelte/components/all';

	import '../theme/variables.css';
	import '../theme/normolize.css';
	import Header from '$lib/header/Header.svelte';
</script>

<ion-app>
	<div>
		<Header />
		<slot />
	</div>
</ion-app>
