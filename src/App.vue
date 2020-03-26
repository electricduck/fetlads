<template>
  <div id="app">
    <TheNavbar @toggleMenu="toggleMenu" />
    <router-view />
    <TheAdultWarning />
    <Slidebar :visible="isMenuVisible" :right="true" @closeMenu="toggleMenu">
      <TheNavMenu @closeMenu="toggleMenu" />
    </Slidebar>
  </div>
</template>

<script>
import Slidebar from "@/components/Slidebar.vue";
import TheAdultWarning from "@/components/TheAdultWarning.vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheNavMenu from "@/components/TheNavMenu.vue";

import { getThemeSetting, setThemeSetting } from "@/common/settingsService.js";

export default {
  components: {
    Slidebar,
    TheAdultWarning,
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
    },
    loadTheme() {
      var themeFromSetting = getThemeSetting()

      if(
        themeFromSetting === "" ||
        themeFromSetting === null
      ) {
        setThemeSetting("auto")
      } else {
        setThemeSetting(themeFromSetting)
      }
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
  beforeMount() {
    this.loadTheme();
    this.setTitle();
  }
};
</script>

<style lang="scss">
@import "@/scss/common/_theme.scss";
@import "@/scss/common/_layout.scss";
@import "@/scss/common/_button.scss";
@import "@/scss/common/_form.scss";

#app {
}
</style>
