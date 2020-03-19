<template>
  <div
    class="navbar"
    :class="{ 'navbar--no-hero' : !(this.$route.name === 'Home' || this.$route.name === 'Home_Post') }"
  >
    <div class="navbar-hero">
      <div class="navbar-hero-inner">
        <div class="navbar-hero-inner-text">
          <h1>{{ $t('phrases.navbar.hero.hello') }}</h1>
          <h2>{{ $t('phrases.navbar.hero.weAre') }}</h2>
          <!--div class="navbar-hero-inner-text-block">
            <p>
              
            </p>
          </div-->
        </div>
        <div class="navbar-hero-inner-links">
          <a
            class="navbar-hero-inner-links-item navbar-hero-inner-links-item--telegram"
            :href="$var.social.telegram"
            target="_blank"
            title="Telegram"
          >
            <font-awesome-icon :icon="['fab', 'telegram-plane']" />
          </a>
          <a
            class="navbar-hero-inner-links-item navbar-hero-inner-links-item--twitter"
            :href="$var.social.twitter"
            target="_blank"
            title="Twitter"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </div>
      </div>
    </div>
    <div class="navbar-container">
      <div class="navbar-item">
        <router-link to="/" class="navbar-logo">
          <span>Fet</span>
          <span>lads</span>
        </router-link>
      </div>
      <a
        class="navbar-item"
        v-shortkey="['space']"
        @shortkey="handleRandomPostClick"
        @click="handleRandomPostClick"
        :title="$t('phrases.navbar.links.random') + ' (Space)'"
        v-if="(this.$route.name === 'Home' || this.$route.name === 'Home_Post')"
      >
        <font-awesome-icon icon="random" />
      </a>
      <router-link
        class="navbar-item"
        :title="$t('phrases.navbar.links.back')"
        v-if="!(this.$route.name === 'Home' || this.$route.name === 'Home_Post')"
        to="/"
      >
        <font-awesome-icon icon="arrow-left" />
      </router-link>
      <a
        class="navbar-item"
        @click="handleMenuClick"
        :title="$t('phrases.navbar.links.menu')"
      >
        <font-awesome-icon icon="bars" />
      </a>
    </div>
  </div>
</template>

<script>
import { getRandomPost } from "@/common/postService";

export default {
  name: "TheNavbar",
  data: function() {
    return {
      yearsTogether: 0
    };
  },
  methods: {
    handleMenuClick() {
      this.$emit('toggleMenu')
    },
    handleRandomPostClick() {
      if (this.$route.name === "Home") {
        getRandomPost().then(post => {
          this.$router.push("/" + post.id + "/" + post.slug);
        });
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/_mixins.scss";
@import "@/scss/_variables.scss";

.navbar {
  backdrop-filter: blur(10px);
  display: block;
  left: 0;
  padding: 0 #{$padding * 2.5} $navbar-spacing #{$padding * 2.5};
  position: sticky;
  text-align: center;
  top: calc(-100vh + #{$navbar-container-height + (($padding * 1.5) * 2)});
  z-index: 500;

  background-color: var(--navbar-bg-color);
  box-shadow: var(--navbar-bg-shadow, var(--heavy-shadow));

  @include respond-to(mobile) {
    padding-left: 0;
    padding-right: 0;

    .navbar-hero {
      border-radius: 0 !important;
    }
  }

  &.navbar--no-hero {
    padding-top: $navbar-spacing;
    top: 0;

    .navbar-hero {
      display: none;
    }
  }

  .navbar-hero {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 0 0 $radius $radius;
    height: $navbar-hero-height;
    margin-bottom: $navbar-spacing;

    background-color: var(--navbar-fg-color);
    box-shadow: var(--light-shadow);

    @media (prefers-color-scheme: dark) {
      @include respond-to(desktop) {
        background-image: url("/data/img/hero/hero-large-dark.jpg");
      }
      @include respond-to(desktop-sm) {
        background-image: url("/data/img/hero/hero-small-dark.jpg");
      }
      @include respond-to(mobile) {
        background-image: url("/data/img/hero/hero-mobile-dark.jpg");
      }
    }

    @media (prefers-color-scheme: light) {
      @include respond-to(desktop) {
        background-image: url("/data/img/hero/hero-large-light.jpg");
      }
      @include respond-to(desktop-sm) {
        background-image: url("/data/img/hero/hero-small-light.jpg");
      }
      @include respond-to(mobile) {
        background-image: url("/data/img/hero/hero-mobile-light.jpg");
      }
    }

    .navbar-hero-inner {
      box-sizing: border-box;
      color: white;
      display: grid;
      grid-column: 1;
      grid-row: 2;
      grid-template-columns: 800px auto;
      grid-template-rows: 1fr auto auto;
      height: 100%;
      opacity: 0.8;
      padding: #{$padding * 2};
      text-shadow: 0 0 6px black;

      .navbar-hero-inner-text {
        display: grid;
        grid-column: 1;
        grid-row-start: 2;
        grid-row-end: 4;
        grid-template-columns: auto;
        grid-template-rows: auto auto auto 1fr;
        overflow-x: hidden;
        overflow-y: hidden;
        padding: $padding;
        text-align: left;

        h1,
        h2 {
          line-height: 1.1;
          margin: 0;
        }

        h1 {
          font-size: 7rem;
          font-weight: 700;
        }

        h2 {
          font-size: 2rem;
          font-weight: 500;
        }

        .navbar-hero-inner-text-block {
          margin-bottom: -6px;
          margin-left: -6px;
          margin-top: #{$padding * 2};
          overflow-x: hidden;
          overflow-y: auto;
          padding-bottom: 6px;
          padding-left: 6px;
          padding-right: 10px;

          p {
            font-size: 0.9rem;
            line-height: 1.5;
            margin: 0 0 $padding 0;

            &:last-of-type {
              margin-bottom: 0;
            }
          }
        }
      }

      .navbar-hero-inner-links {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row: 3;
        font-size: 0;
        line-height: 1;
        padding-top: $padding;
        text-align: right;

        .navbar-hero-inner-links-item {
          font-size: 1.4rem;
          margin-right: #{$padding * 2};

          color: white !important;
          filter: drop-shadow(0 0 7px black) !important;

          &:last-of-type {
            margin-right: 0;
          }

          &.navbar-hero-inner-links-item--telegram {
            &:focus,
            &:hover {
              color: #009cdb !important;
              filter: drop-shadow(0 0 7px #{$telegram-brand-color}) !important;
            }
          }

          &.navbar-hero-inner-links-item--twitter {
            &:focus,
            &:hover {
              color: #00a1ee !important;
              filter: drop-shadow(0 0 7px #{$twitter-brand-color}) !important;
            }
          }
        }
      }

      @include respond-to(desktop-sm) {
        grid-template-columns: 1fr;

        .navbar-hero-inner-text {
          grid-row-start: 1;
          grid-row-end: 2;
          padding-top: #{$padding * 4};
          text-align: center;

          h1 {
            font-size: 4rem;
          }

          h2 {
            font-size: 1.8rem;
          }
        }

        .navbar-hero-inner-text,
        .navbar-hero-inner-links {
          grid-column-start: 1;
          grid-column-end: 2;
        }
      }

      @include respond-to(mobile) {
        .navbar-hero-inner-links {
          text-align: center;
        }
      }
    }
  }

  .navbar-container {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr auto auto auto 1fr;
    height: $navbar-container-height;
    width: 100%;

    .navbar-item {
      &:nth-child(1) {
        grid-column: 2;
        grid-row-start: 2;
        grid-row-end: 5;
      }

      &:nth-child(2),
      &:nth-child(3) {
        font-size: $navbar-item-font-size;
        grid-row: 3;
        line-height: 1;

        .svg-inline--fa {
          filter: drop-shadow(var(--navbar-fg-shadow)) !important;
        }
      }

      &:nth-child(2) {
        grid-column: 1;
        padding-left: #{$padding * 2};
        text-align: left;
      }

      &:nth-child(3) {
        grid-column: 3;
        padding-right: #{$padding * 2};
        text-align: right;
      }

      &.navbar-item--hidden {
        display: none;
      }

      @include respond-to(mobile) {
        &:nth-child(2),
        &:nth-child(3) {
          font-size: $navbar-item-font-size-mobile;
        }

        &:nth-child(2) {
          padding-left: #{$padding * 2};
        }

        &:nth-child(3) {
          padding-right: #{$padding * 2};
        }
      }
    }

    .navbar-logo {
      display: inline-grid;
      font-size: 2rem;
      font-weight: 900;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      line-height: 1;
      text-align: left;
      text-decoration: none;
      text-transform: uppercase;
      user-select: none;

      color: var(--navbar-fg-color, var(--accent-color));
      filter: drop-shadow(var(--navbar-fg-shadow)) !important;

      & > span {
        border-style: solid;
        border-width: 5px 0;
        padding: 5px 0;

        border-color: var(--navbar-fg-color);

        &:nth-of-type(1) {
          border-bottom-color: transparent;
          border-top-width: 5px;
          grid-column: 1;
          grid-row: 1;
          margin-right: 3px;
        }

        &:nth-of-type(2) {
          border-bottom-width: 5px;
          border-top-color: transparent;
          grid-column: 2;
          grid-row: 1;
        }
      }
    }
  }
}
</style>