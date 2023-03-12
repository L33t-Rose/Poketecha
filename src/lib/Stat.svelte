<script lang="ts">
	export let label:string;
	export let value = 0;
</script>

<div class="w-full flex">
	<strong class="px-2 stat__label uppercase w-[8ch] text-2xl">{label}</strong>
	<div class="indicator-wrapper">
		<div class="px-2 bg-red-600 h-full rounded" style={`width:${(value / 255) * 100}%`} />
	</div>
	<strong class="px-2 stat__value text-2xl">{value}</strong>
</div>

<style>
	.stat {
		width: 100%;
		display: flex;
	}
	.stat *:not(.indicator) {
		padding: 0 0.5rem;
	}
	.indicator-wrapper {
		flex-grow: 1;
		/* 		background-color: red; */
	}
	.stat__label {
		text-transform: uppercase;
		width: 8ch;
	}
	.stat__value {
		width: auto;
	}
	.indicator {
		background-color: red;
		height: 100%;
		/* 		border-radius: 999px; */
	}
</style>
