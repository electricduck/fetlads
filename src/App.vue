<template>
  <div id="app">
    <TheNavbar />
    <router-view />
    <TheAdultWarning />
    <TheFooter />
  </div>
</template>

<script>
import TheAdultWarning from "@/components/TheAdultWarning.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  components: {
    TheAdultWarning,
    TheFooter,
    TheNavbar
  },
  methods: {
    setTitle(title) {
      document.title = title || this.$route.meta.title || "Fetlads"
    }
  },
  watch: {
    $route() {
      this.setTitle()
    }
  },
  mounted () {
    this.setTitle()
  }
};
</script>

<style lang="scss">
@import "@/scss/common/_theme.scss";
@import "@/scss/common/_layout.scss";

#app {

}
</style>
