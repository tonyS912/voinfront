<template>
    <div class="d-flex flex-column container justify-content-center align-items-center col-10">
        <h1>Grüßbert, <b>Guest</b></h1>

        <div class="overrides-row col-9 justify-content-between mb-5">
            <div class="card overrides-row d-flex flex-center align-items-start justify-content-center col-8 bg-primary text-white rounded-4 big-size">
                <div class="d-flex flex-nowrap flex-column align-items-center justify-content-center col-12 col-md-5">
                    <div class="justify-content-center align-items-center d-flex">
                        <div>
                            <img
                                class="icon-sum tilies-hov icon-size-lg rounded-circle border-2 border border-white"
                                src="./icons/Urgent.webp"/>
                        </div>
                        <span class="fs-1 text-hov ms-3"><b>5</b></span>
                    </div>
                    <div class="fs-4 mt-3 text-center text-hov text-white">Task Urgent</div>
                </div>
                <div class="border-2 border border-white h-75 p-0 m-0" style="width: 1px;"></div>
                <div class="col-md-6 fs-2">{{ currentDay }} <br> <span class="fs-4 fw-light">Upcomming Deadline</span></div>
            </div>

            <SmallTiles v-for="item in tilleList1" :tille="item" :key="item.id"></SmallTiles>
        </div>
        <div class="overrides-row col-9 justify-content-between">
            <SmallTiles v-for="item in tilleList2" :tille="item" :key="item.id"></SmallTiles>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import SmallTiles from './SmallTiles.vue'

const currentDay = ref(new Date().toLocaleDateString('iso',  { month: 'long', day: 'numeric', year: 'numeric' }))

const tilleList1 = ref([
    {
        id: 0,
        title: 'Task To-do',
        count: 18,
        classes: 'col-3 small-size',
        text: 'text-primary',
        img: '/src/components/icons/svg/todo_list.svg'
    }
])

const tilleList2 = ref([
    {
        id: 0,
        title: 'Task in Board',
        count: 4,
        classes: 'col-3 small-size',
        text: 'text-primary',
        img: '/src/components/icons/svg/board.svg'
    },
    {
        id: 1,
        title: 'Task in Progress',
        count: 1,
        classes: 'col-3 small-size',
        text: 'text-primary',
        img: '/src/components/icons/svg/in_progress.svg'
    },
    {
        id: 2,
        title: 'Awaiting Feedback',
        count: 2,
        classes: 'col-3 small-size',
        text: 'text-primary',
        img: '/src/components/icons/svg/awaiting_feedback.svg'
    },
    {
        id: 3,
        title: 'Task Done',
        count: 9,
        classes: 'col-3 small-size',
        text: 'text-primary',
        img: '/src/components/icons/svg/done.svg'
    }
])
</script>

<style lang="scss">
.big-size {
    width: 717px;
    height: 190px;
}

.small-size {
    width: 210px;
    height: 190px;
}
.overrides-row {
    display: flex;
    flex-wrap: wrap;
}
</style>
