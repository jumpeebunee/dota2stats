<script lang="ts">
	export let hero: Hero;

	const formatTitle = (title: string) => {
		if (title.length > 13) {
			return `${title.slice(0, 13)}...`;
		}

		return title;
	};
</script>

<li class="item">
	<img class="image" src="https://cdn.cloudflare.steamstatic.com{hero.img}" alt="" />

	<div class="title">
		{formatTitle(hero.localized_name)}
	</div>

	<div class="matches description">
		{(hero.pro_pick || 0) + (hero.pro_ban || 0)}
	</div>

	<div class="matches description">
		{hero.pro_pick}
	</div>

	<div class="matches description">
		{hero.pro_ban}
	</div>

	<div class="matches description">
		{hero.pro_win}
	</div>
</li>

<style>
	.item {
		display: grid;
		grid-template-columns: 0.5fr 1.5fr 1fr 1fr 1fr 1fr;
		align-items: center;
		padding-bottom: 1rem;
	}

	.image {
		height: 50px;
		border-radius: 4px;
		object-fit: cover;
		flex-shrink: 0;
	}

	.title {
		margin-left: 15px;
		border-right: 1px solid #647081;
		font-size: 18px;
		font-weight: 600;
		color: #d2d5d8;
		flex-shrink: 0;
	}

	.matches {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.description {
		font-size: 18px;
		color: #d2d5d8;
	}

	@media (max-width: 780px) {
		.item {
			grid-template-columns: 50px 200px 150px 100px 100px 100px;
		}
	}
</style>
