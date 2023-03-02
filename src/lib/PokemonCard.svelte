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
	const [hp, atk, def, spatk, spdef, spd] = data.stats;
</script>

<svelte:head>
	<title>{data.name}</title>
</svelte:head>

<section class="w-full sm:w-[400px] outline-none bg-red-200 mx-auto px-2 py-1">
	<h1 class="hidden sm:block border-b-red-500 border-b-2 capitalize font-bold text-red-500 text-xl text-center">{data.name}</h1>
	<div class="flex items-center pt-2 flex-wrap">
		<div class="my-3 space-y-1 flex flex-col items-center">
			<Crossfade
				first={data.sprites.front_default}
				second={data.sprites.front_shiny}
				condition={showShiny}
				class="w-[150px] h-[150px] pixelated bg-red-400/[0.2] rounded-full"
			/>
			<RadioButtonGroup buttons={['default', 'shiny']} onChange={handleChange} />
		</div>
		<div class="w-full space-y-3 flex-1">
			<Stat label="hp" value={hp.base_stat} />
			<Stat label="atk" value={atk.base_stat} />
			<Stat label="def" value={def.base_stat} />
			<Stat label="sp. atk" value={spatk.base_stat} />
			<Stat label="sp. def" value={spdef.base_stat} />
			<Stat label="spd" value={spd.base_stat} />
		</div>
		<div>
			{#each data.abilities as {ability}}
				<div>
					<h3>{ability.name}</h3>
					<div>{ability.url}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

