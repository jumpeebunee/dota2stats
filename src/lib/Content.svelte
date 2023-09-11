<div class="wrapper">
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.wrapper {
		min-height: 100%;
		padding: 10px;
		background-color: #232e3c;
		min-height: 100vh;
	}

	.content {
		background-color: #323e4f;
		border-radius: 4px;
		min-height: 100vh;
	}
</style>
