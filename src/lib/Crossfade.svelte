<script lang="ts">
	export let first = '';
	export let second = '';
	export let condition: boolean;
	let clazz: string="";
	export { clazz as class };
</script>

<div class={`relative  ${clazz}`}>
	<img
		class={`transition-opacity w-full ease-linear duration-300 absolute top-0 left-0 opacity-0 ${
			condition && 'opacity-100 z-[1]'
		} pixelated object-cover`}
		src={second}
		alt="second"
	/>
	<img
		class={`transition-opacity w-full ease-linear duration-300 ${
			condition && 'opacity-0 z-0'
		} absolute top-0 left-0 aas pixelated object-cover`}
		src={first}
		alt="first"
	/>
</div>

<style>
	.animateY{
		animation:spinY 2s linear infinite;
	}
	@keyframes spinY{
		from{
			transform:rotateY(0turn);
		}
		to{
			transform:rotateY(1turn);
		}
	}
</style>
