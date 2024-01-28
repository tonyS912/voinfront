<template>
    <div
        class="container container-xl col-12 col-sm-9 d-flex flex-column justify-content-center align-items-center align-items-xl-between mb-6 mt-3 mt-lg-0 mx-xl-auto px-xl-0"
    >
        <h1 class="mb-md-2 mb-lg-3 mb-xl-4">Grüßbert, <b>Guest</b></h1>

        <!-- First line Tillies on Summary -->
        <div
            class="column box-xl-size col-12 d-flex flex-column flex-xl-row justify-content-center justify-content-xl-between align-items-center mb-3"
        >
            <!-- TODO: Later change to <RouterLink to="/board", maybee role="button" can be removed -->
            <div
                role="button"
                class="card col-12 col-lg-7 big-size d-flex flex-center flex-lg-row align-items-center justify-content-center bg-primary text-white rounded-5 p-3 my-3 my-xl-0 hover-urgent"
            >
                <div
                    class="col-12 col-md-5 d-flex flex-nowrap flex-column align-items-center justify-content-center border-lg-end border-2 border-white border-hov"
                >
                    <div class="justify-content-center align-items-center d-flex">
                        <div>
                            <img
                                class="icon-sum tilies-hov icon-size-lg rounded-circle border-2 border border-white"
                                src="@/assets/icons/Urgent.webp"
                            />
                        </div>
                        <span class="fs-1 ms-3"><b>5</b></span>
                    </div>
                    <div class="fs-4 mt-3 text-hov text-center text-white">Task Urgent</div>
                </div>
                <div
                    class="d-flex d-lg-none align-self-center border-1 border border-whit border-hov my-2 w-75"
                ></div>
                <div class="row col-12 col-md-6 m-0 text-center fs-2 border-lg-start">
                    <b>{{ currentDay }}</b>
                    <br />
                    <span class="d-flex justify-content-center fs-4 fw-light"
                        >Upcomming Deadline</span
                    >
                </div>
            </div>

            <!-- TODO: Later change to <RouterLink to="/board", maybee role="button" can be removed -->
            <SmallTiles v-for="item in tilleList1" :tille="item" :key="item.id"></SmallTiles>
        </div>

        <!-- Second line Tillies on Summary -->

        <div class="box-size box-xl-size overrides-row col-12 col-lg-10 justify-content-between">
            <!-- TODO: Later change to <RouterLink to="/board", maybee role="button" can be removed -->
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
        classes: 'mt-4 my-lg-0 bg-lavendel small-size hover-to-do',
        text: 'text-primary',
        img: '@/src/assets/icons/todo_list.webp'
    }
])

const tilleList2 = ref([
    {
        id: 0,
        title: 'Task in Board',
        count: 4,
        classes: 'my-3 w-md-48 small-size small-lg-size hover-tille',
        text: 'text-primary hover-text',
        img: '/src/assets/icons/board.webp'
    },
    {
        id: 1,
        title: 'Task on Progress',
        count: 1,
        classes: 'my-3 w-md-48 small-size small-lg-size hover-tille',
        text: 'text-primary hover-text',
        img: '/src/assets/icons/in_progress.svg'
    },
    {
        id: 2,
        title: 'Awaiting Feedback',
        count: 2,
        classes: 'my-3 w-md-48 small-size small-lg-size hover-tille',
        text: 'text-primary hover-text',
        img: '/src/assets/icons/awaiting_feedback.webp'
    },
    {
        id: 3,
        title: 'Task Done',
        count: 9,
        classes: 'my-3 w-md-48 small-size small-lg-size hover-tille',
        text: 'text-primary hover-text',
        img: '/src/assets/icons/done.webp'
    }
])
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

    .box-size {
        width: 682px;
    }

    .small-size {
        max-width: 682px;
    }

    .small-lg-size {
        width: 416px;
    }

    .container-xl {
        max-width: 925px;
    }
}

@media screen and (max-width: 991.98px) {
    .mb-6 {
        margin-bottom: 5.5rem !important;
    }
}

@media screen and (min-width: 1199.98px) {
    .small-size {
        width: 210px !important;
        height: 192px;
    }

    .box-xl-size {
        width: 925px !important;
    }
}

.hover-urgent {
    &:hover {
        background-color: #fff !important;
        color: #4589ff !important;
        transition: all 0.3s ease-in-out;
        transform: scale(1.09);
        
        border-top-left-radius: 0 !important;

        .text-hov {
            color: #4589ff !important;
            transition: all 0.3s ease-in-out;
        }

        .border-hov {
            border-color: #4589ff !important;
        }
    }

    @media screen and (max-width: 575.98px) {
        &:hover {
            transform: scale(1.05) !important;
        }
    }
}

.hover-to-do {
    &:hover {
        background-color: #fff;
        color: #4589ff;
        transition: all 0.3s ease-in-out;
        transform: scale(1.15);
        border-top-left-radius: 0 !important;
    }

    @media screen and (max-width: 575.98px) {
        &:hover {
            transform: scale(1.05) !important;
        }
    }
}

.hover-tille {
    &:hover {
        background-color: #4589ff;
        color: #fff;
        transition: all 0.3s ease-in-out;
        transform: scale(1.15);
        border-top-left-radius: 0 !important;

        .hover-text {
            color: #fff !important;
            transition: all 0.3s ease-in-out;
        }

        .icon-hov {
            border: 2px solid #fff !important;
            border-radius: 50%;
        }
    }

    @media screen and (max-width: 575.98px) {
        &:hover {
            transform: scale(1.05) !important;
        }
    }
}
</style>
