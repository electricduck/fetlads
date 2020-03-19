<template>
  <div class="nav-menu">
    <div class="nav-menu-links">
      <NavItem
        route="/"
        :active="(this.$route.name === 'Home' || this.$route.name === 'Home_Post')"
        v-on="$listeners"
      >{{ $t('phrases.navmenu.links.home') }}</NavItem>
      <NavItem
        route="/about"
        :active="this.$route.name === 'About'"
        v-on="$listeners"
      >{{ $t('phrases.navmenu.links.about') }}</NavItem>
    </div>
    <div class="nav-menu-social">
      <a
        class="nav-menu-social-item nav-menu-social-item--telegram"
        :href="$var.social.telegram"
        target="_blank"
        title="Telegram"
      >
        <font-awesome-icon :icon="['fab', 'telegram-plane']" />
      </a>
      <a
        class="nav-menu-social-item nav-menu-social-item--twitter"
        :href="$var.social.twitter"
        target="_blank"
        title="Twitter"
      >
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
    </div>
  </div>
</template>

<script>
import NavItem from "@/components/NavMenuLinksItem.vue";

export default {
  name: "TheNavMenu",
  components: {
    NavItem
  }
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.slidebar {
  &.slidebar--right {
    .nav-menu {
      .nav-menu-links {
        .nav-menu-links-item {
          .svg-inline--fa {
            &.fa-chevron-left {
              display: inline-block;
            }

            &.fa-chevron-right {
              display: none;
            }
          }
        }
      }
    }
  }

  .nav-menu {
    .nav-menu-links {
      .nav-menu-links-item {
        display: block;
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: #{$padding * 1.5};
        user-select: none;

        color: var(--body-fg-color) !important;
        filter: var(--lowlight-filter);

        &:last-of-type {
          margin-bottom: 0;
        }

        &:focus,
        &:hover,
        &.nav-menu-links-item--active {
          color: var(--accent-color) !important;
          filter: unset !important;

          .svg-inline--fa {
            opacity: 1;
          }
        }

        .svg-inline--fa {
          color: var(--accent-color) !important;
          opacity: 0;
          transition: $transition;

          &.fa-chevron-left {
            display: none;
            margin-right: #{$padding * 1.5};
          }

          &.fa-chevron-right {
            float: right;
          }
        }
      }
    }

    .nav-menu-social {
      font-size: 1.5rem;
      line-height: 1.5;
      margin-top: #{$padding * 3};

      .nav-menu-social-item {
        margin-right: #{$padding * 1.5};
        opacity: 0.3;

        color: var(--body-fg-color) !important;

        &:focus,
        &:hover {
          opacity: 1;

          filter: drop-shadow(var(--light-shadow)) !important;

          &.nav-menu-social-item--telegram {
            color: $telegram-brand-color !important;
          }

          &.nav-menu-social-item--twitter {
            color: $twitter-brand-color !important;
          }
        }
      }
    }
  }
}
</style>