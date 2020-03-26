<template>
  <div id="app">
    <TheAdultWarning />
    <TheError v-if="error.isVisible" :message="error.message" />
    <TheNavbar @toggleMenu="toggleMenu" />
    <router-view />
    <Slidebar :visible="isMenuVisible" :right="true" @closeMenu="toggleMenu">
      <TheNavMenu @closeMenu="toggleMenu" />
    </Slidebar>
  </div>
</template>

<script>
import Slidebar from "@/components/Slidebar.vue";
import TheAdultWarning from "@/components/TheAdultWarning.vue";
import TheError from "@/components/TheError.vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheNavMenu from "@/components/TheNavMenu.vue";

import Vue from "vue";
import { getThemeSetting, setThemeSetting } from "@/common/settingsService.js";

export default {
  components: {
    Slidebar,
    TheAdultWarning,
    TheError,
    TheNavbar,
    TheNavMenu
  },
  data: function() {
    return {
      error: {
        isVisible: false,
        message: ""
      },
      isMenuVisible: false
    };
  },
  methods: {
    toggleMenu(state) {
      if (state !== null) {
        this.isMenuVisible = !this.isMenuVisible;
      } else {
        this.isMenuVisible = state;
      }
    },
    setTitle(title) {
      document.title = title || this.$route.meta.title || "Fetlads";
    },
    loadTheme() {
      var themeFromSetting = getThemeSetting();

      if (themeFromSetting === "" || themeFromSetting === null) {
        setThemeSetting("auto");
      } else {
        setThemeSetting(themeFromSetting);
      }
    },
    handleAppFailure(message) {
      this.error.message = message;
      this.error.isVisible = true;
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
    Vue.config.errorHandler = err => {
      this.handleAppFailure(err.toString());
    };

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
