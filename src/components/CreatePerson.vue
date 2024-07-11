<script setup>
</script>

<template>
    <div class="flex flex-col p-3 gap-10">
        <h1 class="text-white font-bold text-xl">Enregistrer un Habitant</h1>
        <form @submit.prevent="" class="flex flex-col gap-8">

           <div class="flex flex-col gap-2">
            <label class="text-white font-semibold text-lg" for="name">Nom complet</label>
            <input class="px-2 py-3 rounded-md" id="name" type="text" placeholder="Entrer le nom">
           </div>
           
           <div class="flex flex-col gap-2">
            <label class="text-white font-semibold text-lg" for="mail">Email</label>
            <input class="px-2 py-3 rounded-md" id="mail" type="email" placeholder="Entrer l'email">
           </div>

           <div class="flex flex-col gap-2">
            <label class="text-white font-semibold text-lg" for="zone">Sélectionner un quartier</label>
            <select id="zone" class="px-2 py-3 rounded-md">
                <option value="timbs">Tchimbamba</option>
                <option value="ng">Ngoyo</option>
                <option value="kp">Kapable</option>
            </select>
           </div>

            <input type="button" value="Valider" class="my-5 py-3 bg-white rounded-md font-bold cursor-pointer hover:bg-blue-300 hover:text-white hover:border-2 hover:border-white">
        </form>
    </div>
</template>