<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
 <div class="min-h-[100vh] w-full bg-slate-200">
    <NavBar/>
    <div class="w-[90%] bg-white p-2 mx-auto">
      <router-view></router-view>
    </div>
 </div>
</template>
