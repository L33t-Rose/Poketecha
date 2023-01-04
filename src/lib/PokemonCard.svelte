<script lang="ts">
	import type { Pokemon } from './util';
	import RadioButtonGroup from './RadioButtonGroup.svelte';
	import Crossfade from './Crossfade.svelte';
	import Stat from './Stat.svelte';
	export let data: Pokemon;
	let name = data.name;
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

<section class="w-full sm:w-[400px] outline-none rounded bg-red-200 mx-auto px-2 py-1">
	<input
		bind:value={name}
		class="w-full text-center p-0 border-b-red-500 bg-transparent capitalize text-xl font-bold text-red-500 border-reset !border-b-2 !border-solid"
	/>
	<div class="flex items-center pt-2">
		<div class="my-3 space-y-1 flex flex-col items-center">
			<Crossfade
				first={data.sprites.front_default}
				second={data.sprites.front_shiny}
				condition={showShiny}
				class="w-[150px] h-[150px] pixelated bg-red-400/[0.2] rounded-full"
			/>
			<RadioButtonGroup buttons={['default', 'shiny']} onChange={handleChange} />
		</div>
		<div class="w-full space-y-3">
			<Stat label="hp" value={hp.base_stat} />
			<Stat label="atk" value={atk.base_stat} />
			<Stat label="def" value={def.base_stat} />
			<Stat label="sp. atk" value={spatk.base_stat} />
			<Stat label="sp. def" value={spdef.base_stat} />
			<Stat label="spd" value={spd.base_stat} />
		</div>
	</div>
</section>
