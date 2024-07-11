<script setup>
import CreatePerson from '../components/CreatePerson.vue';
</script>

<template>
   <div class="min-h-[calc(100vh-5rem)] p-2 flex w-[100%]">
        <div class="basis-[70%] flex flex-col p-1">
            <h1 class="text-3xl font-bold text-blue-800">Les Habitants</h1>
            <div class="my-4">
                <input type="search" placeholder="Rechercher par nom" class="border border-gray-700 w-[30%] px-2 py-2 rounded-lg">
            </div>
            <div class="pt-10 px-2">
                <div class="grid grid-cols-2 gap-10">
                    <div class="cursor-pointer hover:shadow-xl border p-2 rounded-lg flex gap-5">
                        <div id="circle" class="bg-blue-800 h-16 w-16 rounded-full">
                            <h1 class="w-full h-full font-bold text-2xl text-white flex items-center justify-center">AV</h1>
                        </div>
                        <div>
                            <h2>FullName : <b>Avocadro VBA</b></h2>
                            <h2>Email : <b>avocadro@vba.xyz</b></h2>
                            <h2>Quartier : <b>Siafoumou</b></h2>
                            <h2>Arrondissement : <b>Mongo-Mpoukou</b></h2>
                            <h2>Ville :  <b>Pointe - Noire</b></h2>
                        </div>
                    </div>
                    <div class="cursor-pointer hover:shadow-xl border p-2 rounded-lg flex gap-5">
                        <div id="circle" class="bg-blue-800 h-16 w-16 rounded-full">
                            <h1 class="w-full h-full font-bold text-2xl text-white flex items-center justify-center">AV</h1>
                        </div>
                        <div>
                            <h2>FullName : <b>Avocadro VBA</b></h2>
                            <h2>Email : <b>avocadro@vba.xyz</b></h2>
                            <h2>Quartier : <b>Siafoumou</b></h2>
                            <h2>Arrondissement : <b>Mongo-Mpoukou</b></h2>
                            <h2>Ville :  <b>Pointe - Noire</b></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div class="basis-[30%] bg-blue-800 rounded-lg shadow-xl">
            <CreatePerson/>
         </div>
    </div>
</template>