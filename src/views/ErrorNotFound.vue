<template>
    <div class="fullscreen bg-blue text-center pa-md flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="h2" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <RouterLink to="/">
      <button
        class="btn mt-5 text-blue bg-warning"
      >Go Home </button></RouterLink>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
<style>
    
</style>