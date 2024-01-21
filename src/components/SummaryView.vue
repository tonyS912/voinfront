<template>
    <div class="d-flex flex-column container justify-content-center align-items-center col-10">
        <h1>Grüßbert, <b>Guest</b></h1>

        <div class="d-flex flex-wrap col-9 px-4 justify-content-between row">
            <div class="card d-flex flex-center align-items-center col-6 bg-primary text-white">
                <div class="d-flex align-items-center justify-content-center col-12 mx-sm-3">
                    <div class="justify-content-center align-items-center d-flex">
                        <div>
                            <img
                                class="icon-sum tilies-hov icon-size-lg"
                                src="./icons/Urgent.webp"
                            />
                        </div>
                        <span class="fs-5 text-hov"><b>5</b></span>
                    </div>
                    <div class="fs-5 text-center mx-4 text-hov text-white">Task Urgent</div>
                </div>
            </div>

            <SmallTiles v-for="item in tilleList1" :tille="item" :key="item.id"></SmallTiles>
        </div>
        <div class="d-flex flex-wrap col-9 px-4 justify-content-between row">
            <SmallTiles v-for="item in tilleList2" :tille="item" :key="item.id"></SmallTiles>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import SmallTiles from './SmallTiles.vue'

const tilleList1 = ref([
    {
        id: 0,
        title: 'Task To-do',
        count: 18,
        classes: 'col-3',
        text: 'text-primary',
        img: '/src/components/icons/svg/todo_list.svg'
    }
])

const tilleList2 = ref([
    {
        id: 0,
        title: 'Task in Board',
        count: 4,
        classes: 'col-3',
        text: 'text-primary',
        img: '/src/components/icons/svg/board.svg'
    },
    {
        id: 1,
        title: 'Task in Progress',
        count: 1,
        classes: 'col-3',
        text: 'text-primary',
        img: '/src/components/icons/svg/in_progress.svg'
    },
    {
        id: 2,
        title: 'Awaiting Feedback',
        count: 2,
        classes: 'col-3',
        text: 'text-primary',
        img: '/src/components/icons/svg/awaiting_feedback.svg'
    },
    {
        id: 3,
        title: 'Task Done',
        count: 9,
        classes: 'col-3',
        text: 'text-primary',
        img: '/src/components/icons/svg/done.svg'
    }
])
</script>

<style lang="scss"></style>
