<script lang="ts">
	import { goto } from '$app/navigation';
	import IcMBack from '$lib/icons/IcMBack.svg';

	export let path: string;
</script>

<button style="background-image: url({IcMBack});" on:click={() => goto(path)} class="button back"
	><span /></button
>

<style>
	.button {
		width: 26px;
		height: 26px;
		background-color: transparent;
	}
</style>
