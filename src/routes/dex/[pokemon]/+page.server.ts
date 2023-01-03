import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";
import { PokemonStore, type Pokemon } from "$lib/util";

async function addPokemonToCache(name:string){
   console.log("fetching to the api");
   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
   if(!res.ok){
      throw error(404);
   }
   const data = await res.json() as Pokemon;
   PokemonStore.update((store)=> {
      store.set(name,data);
      return store;
   });
   return data;
}


export const load = (async ({ params }) => {
   if (!params.pokemon) {
      throw redirect(301,"/dex");
   }
   let res: Pokemon;
   const name = params.pokemon.toLowerCase();
   const unsub = PokemonStore.subscribe((data) => {
      if (data.has(name)) {
         console.log("Getting data from our cache")
         res = data.get(name)!;
      }
   });
   unsub();
   res ??= await addPokemonToCache(name);
   return res;
}) satisfies PageServerLoad;