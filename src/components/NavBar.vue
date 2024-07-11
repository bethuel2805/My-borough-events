<script setup>
</script>

<template>
    <header class="h-16 bg-blue-800 px-5">
        <nav class="flex items-center justify-evenly h-full">
            <router-link :to="{name: 'home'}">
                <h1 class="text-2xl text-white font-black">My-borough events</h1>
            </router-link>
            <ul class="flex items-center gap-8">
                <router-link :to="{name: 'city'}">
                    <li class="text-sm py-2 px-5 bg-white rounded-lg text-blue-800 cursor-pointer font-semibold hover:border hover:border-white hover:bg-blue-800 hover:text-white">Ville</li>
                </router-link>
                <router-link :to="{name: 'zone'}">
                    <li class="text-sm py-2 px-5 bg-white rounded-lg text-blue-800 cursor-pointer font-semibold hover:border hover:border-white hover:bg-blue-800 hover:text-white">Arrondissement</li>
                </router-link>
                <router-link :to="{name: 'quartier'}">
                    <li class="text-sm py-2 px-5 bg-white rounded-lg text-blue-800 cursor-pointer font-semibold hover:border hover:border-white hover:bg-blue-800 hover:text-white">Quartier</li>
                </router-link>
                <router-link :to="{name: 'person'}">
                    <li class="text-sm py-2 px-5 bg-white rounded-lg text-blue-800 cursor-pointer font-semibold hover:border hover:border-white hover:bg-blue-800 hover:text-white">Habitant</li>
                </router-link>
            </ul>
        </nav>
    </header>
</template>