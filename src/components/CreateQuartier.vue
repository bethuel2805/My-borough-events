<script setup>
</script>

<template>
    <div class="flex flex-col p-3 gap-10">
        <h1 class="text-white font-bold text-xl">Enregistrer un Quartier</h1>
        <form @submit.prevent="" class="flex flex-col gap-8">

           <div class="flex flex-col gap-2">
            <label class="text-white font-semibold text-lg" for="name">Nom du quartier</label>
            <input class="px-2 py-3 rounded-md" id="name" type="text" placeholder="Entrer le nom">
           </div>

           <div class="flex flex-col gap-2">
            <label class="text-white font-semibold text-lg" for="zone">Sélectionner l'arrondissement</label>
            <select id="zone" class="px-2 py-3 rounded-md">
                <option value="lm">Lumumba</option>
                <option value="mf">Mfilou</option>
                <option value="kp">Kapable</option>
            </select>
           </div>

            <input type="button" value="Valider" class="my-5 py-3 bg-white rounded-md font-bold cursor-pointer hover:bg-blue-300 hover:text-white hover:border-2 hover:border-white">
        </form>
    </div>
</template>