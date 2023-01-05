<script lang="ts">
	import PokemonCard from '$lib/PokemonCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	// console.log(data);
	let { name } = data;
</script>

<PokemonCard {data}/>
