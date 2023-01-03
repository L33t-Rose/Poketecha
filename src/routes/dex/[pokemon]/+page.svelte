<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
    console.log(data);
	let { name } = data;

</script>


<section>
    {name}
    <img src={data.sprites.front_default} alt={name.replaceAll("-"," ")} class="pixelated">
</section>
