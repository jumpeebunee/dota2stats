<script lang="ts">
	export let width: string;
	export let height: string;
</script>

<div style="width: {width}; height: {height};" class="skelet" />

<style>
	@keyframes shine {
		to {
			background-position-x: -200%;
		}
	}

	.skelet {
		background: #eee;
		background: linear-gradient(110deg, #384d64 8%, #475f79 18%, #384d64 33%);
		border-radius: 5px;
		background-size: 200% 100%;
		animation: 1.5s shine linear infinite;
	}
</style>
