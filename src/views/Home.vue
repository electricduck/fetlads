<template>
  <div>
    <TheGrid />
    <router-view></router-view>
  </div>
</template>

<script>
import TheGrid from '@/components/TheGrid.vue'

export default {
  name: 'home',
  components: {
    TheGrid
  }
}
</script>
