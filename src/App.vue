<script setup>
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
import MainSidebar from './components/MainSidebar.vue'

</script>

<template>
    <MainHeader />
    <div class="d-flex col-12">
        <MainSidebar />

        <RouterView />
    </div>
</template>

<style scoped>


</style>
