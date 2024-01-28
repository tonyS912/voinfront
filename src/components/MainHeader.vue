<script setup>
import IconJoinLogo from '../assets/icons/IconJoinLogo.vue'
import IconQuestionCircle from '../assets/icons/IconQuestionCircle.vue'
import JoinAvatar from './JoinAvatar.vue'
</script>

<template>
  <header class="bg-primary w-100 px-3 px-sm-5 py-3 d-flex justify-content-between align-items-center">
    <IconJoinLogo style="background-color: #4589FF !important;" />
    <div class="d-flex align-items-center">
      <span class="text-white fs-5 d-none d-md-block">Kanban Project Management Tool</span>

      <!-- TODO: need dropdown or modal for helpful things (drivers.js tutorial) -->
      <IconQuestionCircle class="text-white mx-3" />

      <!-- TODO: need dropdown or modal for logout and responsive: legal Notice and Privacy Policy -->
      <JoinAvatar />
    </div>
  </header>
</template>

<style lang="scss">

</style>
