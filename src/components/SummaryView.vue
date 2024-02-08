<template>
    <div
        class="container container-xl col-12 col-sm-9 d-flex flex-column justify-content-center align-items-center align-items-xl-between mb-6 mt-3 mt-lg-0 mx-xl-auto px-xl-0"
    >
        <h1 class="mb-md-2 mb-lg-3 mb-xl-4">Grüßbert, <b>Guest</b></h1>

        <!-- * First line Tillies on Summary -->
        <div
            class="column box-xl-size col-12 d-flex flex-column flex-xl-row justify-content-center justify-content-xl-between align-items-center mb-3"
        >
            <!-- TODO: Later change to <RouterLink to="/board" -->
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
                        <span class="fs-1 ms-3"><b>0</b></span>
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

            <!-- ! Router Link update will be changed in Tillie it self -->
            <SmallTiles v-for="item in tilleList1" :tille="item" :key="item.id"></SmallTiles>
        </div>


        <!-- * Second line Tillies on Summary -->
        <!-- ! Router Link update will be changed in Tillie it self -->
        <div class="box-size box-xl-size overrides-row col-12 col-lg-10 justify-content-between">
            <SmallTiles v-for="item in tilleList2" :tille="item" :key="item.id"></SmallTiles>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import SmallTiles from './SmallTiles.vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import { onMounted } from 'vue'

const currentDay = ref(
    new Date().toLocaleDateString('iso', { month: 'long', day: 'numeric', year: 'numeric' })
)

// Work on the Firebase Communication
const todo_list = ref([])
const in_board = ref([])
const in_progress = ref([])
const awaiting_feedback = ref([])
const done_list = ref([])

/* 
Generating the Tillies for the Summary
*/
const imgTodo = ref(new URL('@/assets/icons/todo_list.webp', import.meta.url).href)
const imgBoard = ref(new URL('@/assets/icons/board.webp', import.meta.url).href)
const imgProgress = ref(new URL('@/assets/icons/in_progress.svg', import.meta.url).href)
const imgFeedback = ref(new URL('@/assets/icons/awaiting_feedback.webp', import.meta.url).href)
const imgDone = ref(new URL('@/assets/icons/done.webp', import.meta.url).href)

const tilleList1 = reactive([
    {
        id: 0,
        title: 'Task To-do',
        count: 0,
        classes: 'mt-4 my-lg-0 bg-lavendel small-size hover-to-do',
        text: 'text-primary',
        img: imgTodo
    }
])

const tilleList2 = reactive([
    {
        id: 0,
        title: 'Task in Board',
        count: 0,
        classes: 'my-3 w-md-48 small-size small-lg-size hover-tille',
        text: 'text-primary hover-text',
        img: imgBoard
    },
    {
        id: 1,
        title: 'Task on Progress',
        count: 0,
        classes: 'my-3 w-md-48 small-size small-lg-size hover-tille',
        text: 'text-primary hover-text',
        img: imgProgress
    },
    {
        id: 2,
        title: 'Awaiting Feedback',
        count: 0,
        classes: 'my-3 w-md-48 small-size small-lg-size hover-tille',
        text: 'text-primary hover-text',
        img: imgFeedback
    },
    {
        id: 3,
        title: 'Task Done',
        count: 0,
        classes: 'my-3 w-md-48 small-size small-lg-size hover-tille',
        text: 'text-primary hover-text',
        img: imgDone
    }
])

// Watcher for the Tillies
watch(() => todo_list.value.length, (newLength) => {
    tilleList1[0].count = newLength;
});
// Watcher for the Tillies
watch(() => in_board.value.length, (newLength) => {
    tilleList2[0].count = newLength;
});
// Watcher for the Tillies
watch(() => in_progress.value.length, (newLength) => {
    tilleList2[1].count = newLength;
});
// Watcher for the Tillies
watch(() => awaiting_feedback.value.length, (newLength) => {
    tilleList2[2].count = newLength;
});
// Watcher for the Tillies
watch(() => done_list.value.length, (newLength) => {
    tilleList2[3].count = newLength;
});

// ! Firebase Communication

/*
get tasks from firebase
*/
onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, 'tasks'))
    querySnapshot.forEach((doc) => {
        const listItem = {
            id : doc.id,
            title: doc.data().title,
            column: doc.data().column
        }
        if (listItem.column === 0) {
            todo_list.value.push(listItem)
        } else if (listItem.column === 2) {
            in_board.value.push(listItem)
        } else if (listItem.column === 3) {
            in_progress.value.push(listItem)
        } else if (listItem.column === 4) {
            awaiting_feedback.value.push(listItem)
        } else if (listItem.column === 5) {
            done_list.value.push(listItem)
        }
    })
    console.log(todo_list.value.length);
    console.log(in_board.value.length);
    console.log(in_progress.value.length);
    console.log(awaiting_feedback.value.length);
    console.log(done_list.value.length)
})

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
