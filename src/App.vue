<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  @import "@/scss/_variables.scss";

  body {
    background-color: $bg-color;
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    a {
      transition: $transition;
      
      &:focus,
      &:hover {
        filter: $brighter-filter;
        outline: 0;
      }

      &:active {
        filter: $darker-filter;
      }

      &.no-transition {
        transition: unset;
      }
    }
  }
</style>
