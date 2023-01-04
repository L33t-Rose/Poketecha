<script lang="ts">
	export let buttons: string[] = [];
	export let selectedButton = buttons[0];
	export let onChange = (value: string) => {};
	//@ts-ignore
	function handleChange(e) {
		onChange(e.target.dataset.name);
	}
</script>

<div class="flex">
	{#each buttons as button}
		<input
			on:change={handleChange}
			type="radio"
			name="options"
			data-name={button}
			class="border-red-500 border rounded-none before:content-[attr(data-name)] appearance-none block text-red-500 px-2 py-1 checked:bg-red-500 checked:text-red-100 checked:font-bold first:rounded-l-md last:rounded-r-md"
			checked={button === selectedButton}
		/>
	{/each}
</div>
