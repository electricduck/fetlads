<template>
  <div id="app">
    <TheNavbar @toggleMenu="toggleMenu" />
    <router-view />
    <TheAdultWarning />
    <TheFooter />
    <Slidebar :visible="isMenuVisible" :right="true" @closeMenu="toggleMenu">
      <TheNavMenu @closeMenu="toggleMenu" />
    </Slidebar>
  </div>
</template>

<script>
import Slidebar from "@/components/Slidebar.vue";
import TheAdultWarning from "@/components/TheAdultWarning.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheNavMenu from "@/components/TheNavMenu.vue";

export default {
  components: {
    Slidebar,
    TheAdultWarning,
    TheFooter,
    TheNavbar,
    TheNavMenu
  },
  data: function() {
    return {
      isMenuVisible: false
    }
  },
  methods: {
    toggleMenu(state) {
      if(state !== null) {
        this.isMenuVisible = !this.isMenuVisible;
      } else {
        this.isMenuVisible = state;
      }
    },
    setTitle(title) {
      document.title = title || this.$route.meta.title || "Fetlads";
    }
  },
  watch: {
    $route(to, from) {
      if (
        !(
          (from.name === "Home" && to.name === "Home_Post") ||
          (from.name === "Home_Post" && to.name === "Home")
        )
      ) {
        window.scrollTo(0, 0);
      }

      this.setTitle();
    }
  },
  mounted() {
    this.setTitle();
  }
};
</script>

<style lang="scss">
@import "@/scss/common/_theme.scss";
@import "@/scss/common/_layout.scss";
@import "@/scss/common/_form.scss";

#app {
}
</style>
