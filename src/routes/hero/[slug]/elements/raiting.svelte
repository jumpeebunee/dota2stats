<script lang="ts">
	import type { Rankings } from '../../../../types/api/openDota';

	export let players: Rankings;

	let maxScore = Math.floor(players.rankings[0].score);

	const validateName = (name: string): string => {
		if (name.length <= 12) return name;
		return `${name.slice(0, 12)}...`;
	};

	const getPercents = (score: number) => {
		return ((maxScore - score) / maxScore) * 100;
	};
</script>

<div class="tabs">
	<div class="tab">Rank</div>
	<div class="tab">Name</div>
	<div class="tab">Score</div>
</div>

<ul class="tabs-list">
	{#each players.rankings as player, i}
		<li class:tab-item_active={i % 2 === 0} class="tab-item">
			<div class="position">{i + 1}st</div>
			<div>{validateName(player.personaname)}</div>

			<div>
				<div class="score">{Math.floor(player.score)}</div>
				<div class="progress">
					<div style="width: {100 - getPercents(player.score)}%;" class="status" />
				</div>
			</div>
		</li>
	{/each}
</ul>

<style>
	.tabs {
		display: grid;
		grid-template-columns: 1fr 3fr 2fr;
		padding: 0px 10px;
	}

	.tab {
		color: #fff;
		font-size: 18px;
	}

	.tabs-list {
		margin-top: 10px;
	}

	.tab-item {
		padding: 14px 10px;
		display: grid;
		grid-template-columns: 1fr 3fr 2fr;
		align-items: center;
		color: #fff;
		font-size: 16px;
		font-weight: 300;
	}

	.tab-item_active {
		background-color: #384d64;
	}

	.score {
		font-size: 14px;
	}

	.progress {
		width: 100%;
		height: 3px;
		margin-top: 5px;
		background-color: #d9d9d9;
	}

	.status {
		background-color: #a89cee;
		height: 3px;
	}
</style>
