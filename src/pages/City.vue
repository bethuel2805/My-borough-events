<script setup>
import CreateCity from '../components/CreateCity.vue';
</script>

<template>
    <div class="min-h-[calc(100vh-5rem)] p-2 flex w-[100%]">
        <div class="basis-[70%] flex flex-col p-1">
            <h1 class="text-3xl font-bold text-blue-800">Les Villes</h1>
            <div>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full text-left text-sm font-light text-surface dark:text-white">
                                    <thead class="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
                                        <tr>
                                            <th scope="col" class="px-6 py-4">#</th>
                                            <th scope="col" class="px-6 py-4">Nom de la ville</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                            <td class="whitespace-nowrap px-6 py-4">Pointe - Noire</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div class="basis-[30%] bg-blue-800 rounded-lg shadow-xl">
            <CreateCity/>
         </div>
    </div>
</template>
