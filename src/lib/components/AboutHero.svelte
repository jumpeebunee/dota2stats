<script lang="ts">
	import { goto } from '$app/navigation';
	import { IMAGE_URL } from '../../constants/images';
	import type { Hero } from '../../types/api/openDota';

	export let hero: Hero;
	export let id: string;
	export let withMoreBtn = false;
</script>

<img class="image" src="{IMAGE_URL}{hero?.img}" alt={hero?.localized_name} />

<div>
	<div class="title">{hero?.localized_name}</div>

	<ul class="roles">
		<li class="role role_active">{hero.attack_type} -</li>

		{#each hero.roles.slice(0, 3) as role}
			<li class="role">{role}</li>
		{/each}
	</ul>

	{#if withMoreBtn}
		<button on:click={() => goto(`/skills/${id}`)} class="btn">More info</button>
	{/if}
</div>

<style>
	.title {
		margin-top: 20px;
		margin-bottom: 9px;
		color: #fff;
		font-size: 20px;
		font-weight: 500;
	}

	.image {
		display: block;
		width: 100%;
		height: 108px;
		object-fit: cover;
	}

	.roles {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.role {
		color: rgba(255, 255, 255, 0.6);
		text-transform: uppercase;
	}

	.role_active {
		color: #fff;
	}

	.btn {
		margin-top: 20px;
		padding: 10px;
		text-align: center;
		width: 100%;
		color: #fff;
		font-size: 16px;
		background-color: transparent;
		border: 1px solid #fff;
	}
</style>
