<script lang="ts">
	export let first = '';
	export let second = '';
	export let condition: boolean;
	let clazz: string="";
	export { clazz as class };
</script>

<div class={`relative w-[100px] h-[100px] ${clazz}`}>
	<img
		class={`transition-opacity w-full ease-linear duration-300 absolute top-0 left-0 opacity-0 ${
			condition && 'opacity-100 z-[1]'
		} pixelated`}
		src={second}
		alt="second"
	/>
	<img
		class={`transition-opacity w-full ease-linear duration-300 ${
			condition && 'opacity-0 z-0'
		} absolute top-0 left-0 aas pixelated`}
		src={first}
		alt="first"
	/>
</div>
