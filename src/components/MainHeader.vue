<script setup>
import IconJoinLogo from '../assets/icons/IconJoinLogo.vue'
import IconQuestionCircle from '../assets/icons/IconQuestionCircle.vue'
import JoinAvatar from './JoinAvatar.vue'
</script>

<template>
    <header
        class="bg-primary w-100 px-3 px-sm-5 py-3 d-flex justify-content-between align-items-center"
    >
        <IconJoinLogo style="background-color: #4589ff !important" />
        <div class="d-flex align-items-center">
            <span class="text-white fs-5 d-none d-md-block">Kanban Project Management Tool</span>

            <!-- * Dropdown for helpful things (drivers.js tutorial and Documentation) -->
            <div>
                <button
                    class="btn mx-3 d-flex p-0 rounded-circle border-0 bg-transparent"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <IconQuestionCircle class="text-white" />
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Help</a></li>
                    <li><a class="dropdown-item" href="#">Drivers.js Tutorial</a></li>
                </ul>
            </div>

            <!-- * Dropdown for logout and responsive: legal Notice and Privacy Policy -->
            <div>
                <button
                    class="btn d-flex p-0 rounded-circle border-0 bg-transparent"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <JoinAvatar />
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item d-lg-none" href="#">Legal Notice</a></li>
                    <li><a class="dropdown-item d-lg-none" href="#">Privacy Policy</a></li>
                    <li><a class="dropdown-item" href="#">Log out</a></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style lang="scss">

</style>
