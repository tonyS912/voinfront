<template>
  <div class="d-flex flex-column container justify-content-center align-items-center col-10">
    <h1>Grüßbert, <b>Guest</b></h1>

    <div class="d-flex flex-wrap col-9 px-4 justify-content-between">
      <SmallTiles 
        v-for="item in tilleList"
        :tille="item"
        :key="item.id"
      ></SmallTiles>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SmallTiles from './SmallTiles.vue';

const tilleList = ref([
  { id: 0, title: 'Task Urgent', count: 2, classes: 'col-6 bg-primary text-white me-3', text: 'text-white', img: 'src/components/icons/Urgent.webp' },
  { id: 1, title: 'Task To-do', count: 18, classes: 'col-3', text: 'text-primary', img: '/src/components/icons/svg/todo_list.svg'},
  { id: 2, title: 'Task in Board', count: 4, classes: 'col-3', text: 'text-primary', img: '/src/components/icons/svg/board.svg'},
  { id: 3, title: 'Task in Progress', count: 1, classes: 'col-3', text: 'text-primary', img: '/src/components/icons/svg/in_progress.svg'},
  { id: 4, title: 'Awaiting Feedback', count: 2, classes: 'col-3', text: 'text-primary', img: '/src/components/icons/svg/awaiting_feedback.svg'},
  { id: 5, title: 'Task Done', count: 9, classes: 'col-3', text: 'text-primary', img: '/src/components/icons/svg/done.svg'},
])


</script>

<style lang="scss">

</style>
