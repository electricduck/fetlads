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
    <!--div class="nav-menu-settings">
      <div class="nav-menu-settings-item">
        <div class="nav-menu-settings-item-icon">
          <font-awesome-icon icon="globe" class="fa-fw" />
        </div>
        <div class="nav-menu-settings-item-input">
          <select class="form-input form-input--select">
            <option>Automatic</option>
            <option>🇳🇱 Dutch</option>
            <option>🇬🇧 English</option>
            <option>🇫🇷 French</option>
            <option>🇩🇪 German</option>
            <option>🇯🇵 Japanese</option>
            <option>🇷🇺 Russian</option>
            <option>🇪🇸 Spanish</option>
          </select>
        </div>
        <div class="nav-menu-settings-item-label">
          Language
        </div>
      </div>
      <div class="nav-menu-settings-item">
        <div class="nav-menu-settings-item-icon">
          <font-awesome-icon icon="paint-brush" class="fa-fw" />
        </div>
        <div class="nav-menu-settings-item-input">
          <select class="form-input form-input--select">
            <option>Automatic</option>
            <option>Dark</option>
            <option>Light</option>
          </select>
        </div>
        <div class="nav-menu-settings-item-label">
          Theme
        </div>
      </div>
    </div-->
    <Footer class="nav-menu-footer" :class="{ 'footer--hidden' : !(this.$route.name === 'Home' || this.$route.name === 'Home_Post') }" />
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
import Footer from "@/components/Footer.vue";
import NavItem from "@/components/NavMenuLinksItem.vue";

export default {
  name: "TheNavMenu",
  components: {
    Footer,
    NavItem
  }
};
</script>

<style lang="scss">
@import "@/scss/_mixins.scss";
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
      margin-bottom: #{$padding * 2.5};

      .nav-menu-links-item {
        display: block;
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: #{$padding * 1.5};
        user-select: none;

        color: var(--body-fg-color) !important;
        filter: var(--lowlight-filter);

        @include respond-to(mobile) {
          font-size: 1.75rem;
        }

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

    .nav-menu-settings {
      &.nav-menu-settings--hiden {
        display: none;
      }

      border-radius: $radius;
      border-style: solid;
      border-width: 1px;
      font-size: 0;
      margin-top: #{$padding * 2.5};
      padding: #{$padding * 2};

      border-color: var(--separator-color);
      color: var(--body-fg-color);

      .nav-menu-settings-item {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto auto;
        margin-bottom: #{$padding * 1.5};

        &:last-of-type {
          margin-bottom: 0;
        }

        .nav-menu-settings-item-icon,
        .nav-menu-settings-item-input {
          display: grid;
          grid-row: 1;
          grid-template-columns: auto;
          grid-template-rows: 1fr auto 1fr;
          line-height: 1;

          & > * {
            grid-column: 1;
            grid-row: 2;
          }
        }

        .nav-menu-settings-item-icon {
          font-size: 1.4rem;
          grid-column: 1;

          .svg-inline--fa {
            color: var(--accent-color);
          }
        }

        .nav-menu-settings-item-input {
          grid-column: 2;
          line-height: 1;
          padding-left: $padding;

          .form-input {
            border-radius: #{$radius / 2};
            box-sizing: border-box;
            font-size: 1rem;
            padding: 0.4rem;

            background-color: var(--body-bg-color);
            border: 1px solid var(--separator-color);
            color: var(--body-fg-color);

            &:active,
            &:focus,
            &:hover {
              border-color: var(--accent-color);
              outline: 0;
            }
          }
        }

        .nav-menu-settings-item-label {
          font-size: 0.8rem;
          grid-column: 2;
          grid-row: 2;
          padding: #{$padding / 2} 0 0 $padding;

          filter: var(--lowlight-filter);
        }
      }
    }

    .nav-menu-footer {
      background-color: transparent;
      box-shadow: unset;
      margin-bottom: $padding;
      padding: 0;
      text-align: left;

      color: var(--body-fg-color);
      filter: var(--lowlight-filter);

      a {
        border-bottom-style: solid;
        border-bottom-width: 1px;

        border-bottom-color: var(--body-fg-color);
      }
    }

    .nav-menu-social {
      font-size: 1.5rem;
      line-height: 1.5;

      @include respond-to(mobile) {
        text-align: center;
      }

      .nav-menu-social-item {
        margin-right: #{$padding * 1.5};
        opacity: 0.3;

        color: var(--body-fg-color) !important;

        &:last-of-type {
          margin-right: 0;
        }

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