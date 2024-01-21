<template>
    <div
        class="card d-flex flex-center align-items-center justify-content-center rounded-4"
        :class=tille.classes
    >
        <div
            class="d-flex align-items-center justify-content-center col-12 mx-sm-3">
            <div class="justify-content-center align-items-center d-flex">
                <div>
                    <img class="icon-sum tilies-hov icon-size-lg" :src=tille.img />
                </div>
                <span class="fs-5 text-hov"
                    ><b>{{ tille.count }}</b></span
                >
            </div>
            <div class="fs-5 text-center mx-4 text-hov"
                :class=tille.text >
                {{ tille.title }}
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    tille: Object
})

</script>

<style lang="scss">
.icon-size-lg {
    width: 64px;
    height: auto;
    max-width: 64px;
    max-height: 64px;
}

.my-card:hover .tilies-hov {
    border-radius: 50%;
    border: 2px solid white;
}

.top-left-corner:hover {
    border-top-left-radius: 0;
}

.tilie-size {
    width: 180px;
    height: 180px;
}

@media screen and (max-width: 767.99px) {
    .xs-space {
        margin-top: 16px;
        margin-bottom: 16px;
    }
}
</style>
