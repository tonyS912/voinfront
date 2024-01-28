<template>
    <!-- Side Menu -->
    <aside class="d-none d-lg-block box-shadow shdaow-end shadow aside-size col-3">
        <div class="container py-5 px-4 h-100 row d-flex justify-content-between ms-1">
            <ul class="list-group">

                <!-- TODO: Router Links to jump to next page -->
                <router-link
                    to="/summary"
                    class="btn btn-light py-3 d-flex justify-items-start list-group-item border-0"
                    ><img class="me-2" src="../assets/icons/menu_summary.svg" />Summary</router-link
                >
                <li class="btn btn-light py-3 d-flex justify-items-start list-group-item border-0">
                    <img class="me-2" src="../assets/icons/menu_board.svg" />Board
                </li>
                <li class="btn btn-light py-3 d-flex justify-items-start list-group-item border-0">
                    <img class="me-2" src="../assets/icons/menu_add_task.svg" />Add Task
                </li>
                <li class="btn btn-light py-3 d-flex justify-items-start list-group-item border-0">
                    <img class="me-2" src="../assets/icons/menu_contacts.svg" />Contacts
                </li>
            </ul>
            <ul class="list-group justify-content-end">

                <!-- ! Router Link changing be possible, maybee also as modal possible -->
                <li class="btn btn-light d-flex justify-items-start list-group-item border-0">
                    Privacy Policy
                </li>
                <li class="btn btn-light d-flex justify-items-start list-group-item border-0">
                    Legal Notice
                </li>
            </ul>
        </div>
    </aside>

    <!-- Bottom Menu  -->
    <nav class="navbar fixed-bottom d-lg-none shadow bg-white">
        <div class="container d-flex justify-content-around">
            <!-- TODO: Router Links to jump to next page -->
            <router-link
                to="/summary"
                active-class="active"
                class="btn btn-light py-3 d-flex justify-items-center"
                ><img src="../assets/icons/menu_summary.svg"
            /></router-link>
            <a class="btn btn-light py-3 d-flex justify-items-center"
                ><img src="../assets/icons/menu_board.svg"
            /></a>
            <a class="btn btn-light py-3 d-flex justify-items-center"
                ><img src="../assets/icons/menu_add_task.svg"
            /></a>
            <a class="btn btn-light py-3 d-flex justify-items-center"
                ><img src="../assets/icons/menu_contacts.svg"
            /></a>
        </div>
    </nav>
</template>
<script></script>
<style lang="scss">
.aside-size {
    max-width: 225px;
    height: calc(100vh - 92px);
}

.router-link-active {
    background-color: #e6e6ff;
}
</style>
