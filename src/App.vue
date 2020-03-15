<template>
  <div id="app">
    <TheNavbar />
    <router-view/>
    <TheAdultWarning />
  </div>
</template>

<script>
import TheAdultWarning from '@/components/TheAdultWarning.vue'
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  components: {
    TheAdultWarning,
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
