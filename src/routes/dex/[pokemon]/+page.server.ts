import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";
import { PokemonStore, type Pokemon } from "$lib/util";

export const load = (async ({ params }) => {
   if (!params.pokemon) {
      throw redirect(301,"/dex");
   }
   let res: Pokemon;
   const name = params.pokemon.toLowerCase();
   const unsub = PokemonStore.subscribe((data) => {
      if (data.has(name)) {
         res = data.get(name)!;
      }
   });
   res ??= await (await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)).json() as Pokemon;
   PokemonStore.update((store)=> {
      store.set(name,res);
      return store;
   })
   unsub();
   return res;
}) satisfies PageServerLoad;