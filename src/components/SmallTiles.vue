<template>
    <!-- TODO: Later change to <RouterLink to="/board", maybee role="button" can be removed -->
    <div role="button"
        class="card col-12 d-flex flex-center align-items-center justify-content-center rounded-5 p-4"
        :class="tille.classes"
    >
        <div class="col-12 d-flex flex-column align-items-center justify-content-center">
            <div class="d-flex justify-content-center align-items-center">
                <div>
                    <img class="icon-size-lg me-3 icon-hov" :src='tille.img' />
                </div>
                <span class="fs-1 text-hov"
                    ><b>{{ tille.count }}</b></span
                >
            </div>
            <div class="fs-4 text-center mx-4 text-hov" :class="tille.text">
                {{ tille.title }}
            </div>
        </div>
    </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
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
