<script lang="ts">
	import type { Pokemon } from './util';
	import RadioButtonGroup from './RadioButtonGroup.svelte';
	import Crossfade from './Crossfade.svelte';
	import Stat from './Stat.svelte';
	export let data: Pokemon;
	console.log(data);
	$: pokemonName = data.name;
	$: showShiny = false;
	//@ts-expect-error
	function handleChange(value) {
		console.log(value);
		showShiny = value === 'shiny';
	}
	$: [hp, atk, def, spatk, spdef, spd] = data.stats;
</script>

<svelte:head>
	<title>{data.name}</title>
</svelte:head>

<section class="w-full outline-none bg-red-200 mx-auto px-2 py-1 h-full">
	<h1
		class="hidden sm:block border-b-red-500 border-b-2 capitalize font-bold text-red-500 text-4xl text-center"
	>
		{data.name}
	</h1>
	<div class="flex pt-2 flex-wrap justify-center sm:space-x-5">
		<div class="my-3 space-y-1 flex flex-col items-center justify-center">
			<Crossfade
				first={data.sprites.front_default}
				second={data.sprites.front_shiny}
				condition={showShiny}
				class="w-56 h-56 pixelated bg-red-400/[0.2] rounded-full"
			/>
			<RadioButtonGroup buttons={['default', 'shiny']} onChange={handleChange} class="text-2xl"/>
		</div>
		<div class="w-full space-y-3 flex-1 min-w-[200px]">
			<Stat label="hp" value={hp.base_stat} />
			<Stat label="atk" value={atk.base_stat} />
			<Stat label="def" value={def.base_stat} />
			<Stat label="sp. atk" value={spatk.base_stat} />
			<Stat label="sp. def" value={spdef.base_stat} />
			<Stat label="spd" value={spd.base_stat} />
		</div>
		<div class="flex flex-col space-y-2 flex-1 min-w-[250px] h-full min-h-fit md:min-h-[214px] text-3xl">
			<h2 class="font-bold text-red-600">Abilities</h2>
			{#each data.abilities as { ability }}
				<!-- <div class="flex-1 bg-red-500 p-2 rounded-md text-red-50">
					<h3 class="font-semibold uppercase text-sm">{ability.name.replace("-"," ")}</h3>
					<small class="text-sm text-red-100">{ability.short_effect}</small>
				</div> -->
				<details class="bg-red-500 text-red-50 p-2 rounded-sm text-2xl">
					<summary class="uppercase font-semibold">{ability.name.replace('-', ' ')}</summary>
					<p class="text-red-100 text-xl">{ability.short_effect}</p>
				</details>
			{/each}
		</div>
		<div class="min-w-[250px]">
			<h2 class="font-bold text-xl text-red-600">Moves</h2>
		</div>
	</div>
</section>

<style>
	details{
		/* transition:all 0.5s ease-in-out; */
	}
	details[open]{
		/* background:black; */
		/* transition:all 1s ease-in-out; */
	}
</style>
