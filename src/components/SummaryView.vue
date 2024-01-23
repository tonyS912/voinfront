<template>
    <div
        class="container col-12 col-sm-10 d-flex flex-column justify-content-center align-items-center"
    >
        <h1>Grüßbert, <b>Guest</b></h1>

        <div class="column col-12 col-lg-9 justify-content-between mb-5">
            <div
                class="card col-12 col-lg-8 d-flex flex-center align-items-center justify-content-center bg-primary text-white rounded-5 p-3 my-3"
            >
                <div
                    class="d-flex flex-nowrap flex-column align-items-center justify-content-center col-12 col-md-5"
                >
                    <div class="justify-content-center align-items-center d-flex">
                        <div>
                            <img
                                class="icon-sum tilies-hov icon-size-lg rounded-circle border-2 border border-white"
                                src="./icons/Urgent.webp"
                            />
                        </div>
                        <span class="fs-1 text-hov ms-3"><b>5</b></span>
                    </div>
                    <div class="fs-4 mt-3 text-center text-hov text-white">Task Urgent</div>
                </div>
                <div class="d-flex align-self-center border-1 border border-white my-2 w-75"></div>
                <div class="row col-12 col-md-6 m-0 text-center fs-2">
                    <b>{{ currentDay }}</b>
                    <br />
                    <span class="d-flex justify-content-center fs-4 fw-light"
                        >Upcomming Deadline</span
                    >
                </div>
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

const currentDay = ref(
    new Date().toLocaleDateString('iso', { month: 'long', day: 'numeric', year: 'numeric' })
)

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
