<template>
  <div id="app">
    <TheNavbar />
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  components: {
    TheNavbar
  }
}
</script>

<style lang="scss">
@import "@/scss/common/_theme.scss";
@import "@/scss/common/_layout.scss";

#app {
  opacity: 0;
  transition: 0.5s;

  &.app--loaded {
    opacity: 1;
  }
}
</style>
