<script lang="ts">
	export let base: number;
	export let gain: number;
	export let type: 'agi' | 'str' | 'int';
	export let isBase = false;
</script>

<div class:isBased={isBase} class="item">
	<div class="circle {type}" />
	<div class="stat stat-{type}">{base} + {gain}</div>
</div>

<style>
	.item {
		display: flex;
		align-items: center;
		gap: 7px;
	}

	.circle {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}

	.agi {
		background-color: #39d402;
	}

	.str {
		background-color: #f44336;
	}

	.int {
		background-color: #01a9f4;
	}

	.stat {
		color: #fff;
		font-size: 14px;
		font-weight: 500;
	}

	.isBased .stat-agi {
		color: #39d402;
	}

	.isBased .stat-str {
		color: #f44336;
	}

	.isBased .stat-int {
		color: #01a9f4;
	}
</style>
