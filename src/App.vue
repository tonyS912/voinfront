<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import MainHeader from './components/MainHeader.vue'
import MainSidebar from './components/MainSidebar.vue'

/*
get tasks from firebase
*/
onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, 'tasks'))
    querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data())
    })
})
</script>

<template>
    <MainHeader />
    <div class="d-flex col-12">
        <MainSidebar />

        <RouterView />
    </div>
</template>

<style scoped></style>
