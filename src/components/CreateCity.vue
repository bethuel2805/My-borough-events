<script setup>
</script>

<template>
    <div class="flex flex-col p-3 gap-10">
        <h1 class="text-white font-bold text-xl">Enregistrer une Ville</h1>
        <form @submit.prevent="" class="flex flex-col gap-1">
            <label class="text-white font-semibold text-lg" for="city">Nom de la ville</label>
            <input class="px-2 py-3 rounded-md" type="text" placeholder="Entrer le nom">
            <input type="button" value="Valider" class="my-5 py-3 bg-white rounded-md font-bold cursor-pointer hover:bg-blue-300 hover:text-white hover:border-2 hover:border-white">
        </form>
    </div>
</template>