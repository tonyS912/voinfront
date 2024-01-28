<template>
    <div
        class="container container-xl col-12 col-sm-10 d-flex flex-column justify-content-center align-items-center align-items-xl-between mt-3 mb-6 mx-xl-auto px-xl-0"
    >
        <h1>Grüßbert, <b>Guest</b></h1>

        <!-- First line Tillies on Summary -->
        <div class="column col-12 d-flex flex-column flex-xl-row justify-content-center justify-content-xl-between align-items-center mb-3 mb-lg-0">
            <div
                class="card col-12 col-lg-7 big-size d-flex flex-center flex-lg-row align-items-center justify-content-center bg-primary text-white rounded-5 p-3 my-3 my-xl-0"
            >
                <div
                    class="col-12 col-md-5 d-flex flex-nowrap flex-column align-items-center justify-content-center border-lg-end border-2 border-white"
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
                <div
                    class="d-flex d-lg-none align-self-center border-1 border border-white my-2 w-75"
                ></div>
                <div class="row col-12 col-md-6 m-0 text-center fs-2 border-lg-start">
                    <b>{{ currentDay }}</b>
                    <br />
                    <span class="d-flex justify-content-center fs-4 fw-light"
                        >Upcomming Deadline</span
                    >
                </div>
            </div>
            
            <SmallTiles v-for="item in tilleList1" :tille="item" :key="item.id"></SmallTiles>
        </div>

        <!-- Second line Tillies on Summary -->
        <!-- <div class="overrides-row col-12 col-lg-10 justify-content-between">
            <SmallTiles v-for="item in tilleList2" :tille="item" :key="item.id"></SmallTiles>
        </div> -->
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
        classes: 'mt-4 my-lg-0 bg-lavendel small-size',
        text: 'text-primary',
        img: '/src/components/icons/svg/todo_list.svg'
    }
])

/* const tilleList2 = ref([
    {
        id: 0,
        title: 'Task in Board',
        count: 4,
        classes: 'my-3 w-md-48 small-size',
        text: 'text-primary',
        img: '/src/components/icons/svg/board.svg'
    },
    {
        id: 1,
        title: 'Task on Progress',
        count: 1,
        classes: 'my-3 w-md-48 small-size',
        text: 'text-primary',
        img: '/src/components/icons/svg/in_progress.svg'
    },
    {
        id: 2,
        title: 'Awaiting Feedback',
        count: 2,
        classes: 'my-3 w-md-48 small-size',
        text: 'text-primary',
        img: '/src/components/icons/svg/awaiting_feedback.svg'
    },
    {
        id: 3,
        title: 'Task Done',
        count: 9,
        classes: 'my-3 w-md-48 small-size',
        text: 'text-primary',
        img: '/src/components/icons/svg/done.svg'
    }
]) */
</script>

<style lang="scss">
.w-md-48 {
    @media screen and (min-width: 399.98px) {
        width: 48% !important;
    }
}

.bg-lavendel {
    background-color: #e6e6ff;
}

.overrides-row {
    display: flex;
    flex-wrap: wrap;
}

@media screen and (min-width: 992px) {
    .border-lg-end {
        border-right: 2px solid white !important;
    }

    .big-size {
        width: 682px;
        height: 192px;
    }

    .small-size {
        max-width: 682px;
    }

    .container-xl {
        max-width: 925px;
    }
}

@media screen and (max-width: 992px) {
    .mb-6 {
        margin-bottom: 5.5rem !important;
    }
}

@media screen and (min-width: 1199.98px) {
    .small-size {
        width: 210px;
        height: 192px;
    }
}
</style>
