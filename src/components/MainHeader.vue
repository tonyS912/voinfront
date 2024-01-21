<script setup>
import IconJoinLogo from './icons/IconJoinLogo.vue'
import IconQuestionCircle from './icons/IconQuestionCircle.vue'
import JoinAvatar from './JoinAvatar.vue'
</script>

<template>
  <header class="bg-primary w-100 px-3 px-sm-5 py-3 d-flex justify-content-between align-items-center">
    <IconJoinLogo />
    <div class="d-flex align-items-center">
      <span class="text-white fs-5 d-none d-md-block">Kanban Project Management Tool</span>
      <IconQuestionCircle class="text-white mx-3" />
      <JoinAvatar />
    </div>
  </header>
</template>

<style lang="scss">

</style>
