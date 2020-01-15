<template>
  <div>
    <Grid />
    <router-view></router-view>
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue'

export default {
  name: 'home',
  components: {
    Grid
  }
}
</script>
