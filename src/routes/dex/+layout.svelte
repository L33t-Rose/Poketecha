<script>
	import { goto } from "$app/navigation";

    let name = "";
    function handleBlur(){
        if(!name){return;}
        goto(`/dex/${name}`);
    }
</script>
<main class="flex min-h-screen flex-col sm:flex-row">
    <aside class="bg-red-500 p-2 w-full sm:w-40 text-red-50">
        <p class="">Junior Jean Here</p>
        <div class="p-2 bg-red-200 rounded-sm">
            <input
            bind:value={name}
            on:blur={handleBlur}
            class="w-full text-center p-0 border-b-red-500 bg-red-200 capitalize font-bold text-red-500 border-reset !border-b-2 !border-solid">
        </div>
    </aside>
    <section class="flex-1 bg-red-50">
        <slot></slot>
    </section>
</main>