<script setup>
</script>

<template>
    <div class="flex flex-col p-3 gap-10">
        <h1 class="text-white font-bold text-xl">Enregistrer un Arrondissement</h1>
        <form @submit.prevent="" class="flex flex-col gap-8">

           <div class="flex flex-col gap-2">
            <label class="text-white font-semibold text-lg" for="name">Nom de l'arrondissement</label>
            <input class="px-2 py-3 rounded-md" id="name" type="text" placeholder="Entrer le nom">
           </div>

           <div class="flex flex-col gap-2">
            <label class="text-white font-semibold text-lg" for="city">Sélectionner la ville</label>
            <select id="city" class="px-2 py-3 rounded-md">
                <option value="pn">Pointe - Noire</option>
                <option value="bz">Brazzaville</option>
                <option value="dol">Dolisie</option>
            </select>
           </div>

            <input type="button" value="Valider" class="my-5 py-3 bg-white rounded-md font-bold cursor-pointer hover:bg-blue-300 hover:text-white hover:border-2 hover:border-white">
        </form>
    </div>
</template>