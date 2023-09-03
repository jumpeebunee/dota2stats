<script lang="ts">
	import Content from '$lib/Content.svelte';
	import { IMAGE_URL } from '../../../constants/images';
	import type { PageData } from './$types';
	import Raiting from './elements/raiting.svelte';

	export let data: PageData;

	let y = 0;

	const hero = data.heroes.find((hero) => hero.id === +data.id);

	const isUpdated = false;
</script>

<svelte:window bind:scrollY={y} />
{#if hero}
	<Content>
		<div class="wrapper">
			<img class="image" src="{IMAGE_URL}{hero?.img}" alt={hero?.localized_name} />

			<div>
				<div class="title">{hero?.localized_name}</div>

				<ul class="roles">
					<li class="role role_active">{hero.attack_type} -</li>

					{#each hero.roles.slice(0, 3) as role}
						<li class="role">{role}</li>
					{/each}
				</ul>
			</div>

			{#if isUpdated}
				<div class="stats">
					<button>stats</button>
				</div>
			{/if}

			<div class="raitings">
				<Raiting players={data.raiting} />
			</div>
		</div>
	</Content>
{:else}
	<Content />
{/if}

<style>
	.wrapper {
		padding: 10px;
	}

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

	.stats {
		display: flex;
		align-items: center;
		margin-top: 20px;
		gap: 10px;
	}

	.stats button {
		padding: 8px 40px;
		color: #fff;
		font-size: 16px;
		background-color: transparent;
		border: solid 1px #fff;
	}

	.raitings {
		margin-top: 30px;
	}
</style>
