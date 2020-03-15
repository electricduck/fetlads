<template>
  <div class="navbar">
    <div class="navbar-hero">
      <div class="navbar-hero-inner">
        <div class="navbar-hero-inner-text">
          <h1>{{ $t('phrases.navbar.hello') }}</h1>
          <h2>{{ $t('phrases.navbar.weAre') }}</h2>
        </div>
        <div class="navbar-hero-inner-links">
          <a
            class="navbar-hero-inner-links-item"
            href="https://t.me/fetlads"
            title="Telegram"
          >
            <font-awesome-icon :icon="['fab', 'telegram-plane']" />
          </a>
          <a
            class="navbar-hero-inner-links-item"
            href="https://twitter.com/thefetlads_"
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
      <div class="navbar-item">
      </div>
      <div class="navbar-item">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar"
};
</script>

<style lang="scss">
@import "@/scss/_mixins.scss";
@import "@/scss/_variables.scss";

.navbar {
  $navbar-container-height: 75px;
  $navbar-spacing: #{$padding * 1.5};
  $navbar-hero-height: calc(100vh - #{$navbar-container-height + (($padding * 1.5) * 2)});

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

  .navbar-hero {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 0 0 $radius $radius;
    height: $navbar-hero-height;
    margin-bottom: $navbar-spacing;

    background-color: var(--navbar-fg-color);
    box-shadow: var(--light-shadow);

    @include respond-to(desktop) {
      background-image: url('/data/hero_desktop.jpg');
    }

    @include respond-to(desktop-sm) {
      background-image: url('/data/hero_desktop-sm.jpg');
    }

    @include respond-to(mobile) {
      background-image: url('/data/hero_mobile.jpg');
    }

    .navbar-hero-inner {
      box-sizing: border-box;
      display: grid;
      grid-column: 1;
      grid-row: 2;
      grid-template-columns: 800px auto;
      grid-template-rows: 1fr auto auto;
      height: 100%;
      opacity: 0.8;
      padding: #{$padding * 2};

      color: white;
      text-shadow: 0 0 7px black;

      .navbar-hero-inner-text {
        grid-column: 1;
        grid-row-start: 2;
        grid-row-end: 4;
        padding: $padding;
        text-align: left;

        h1, h2, h3, h4, h5, h6 {
          font-weight: 500;
          line-height: 1.1;
          margin: 0;
        }

        h1 {
          font-size: 7rem;
          font-weight: 700;
        }

        h2 {
          font-size: 2rem;
        }

        p {
          font-size: 0.9rem;
          line-height: 1.3;
          margin: $padding 0 0 0;
        }
      }

      .navbar-hero-inner-links {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row: 3;
        font-size: 0;
        line-height: 1;
        text-align: right;

        .navbar-hero-inner-links-item {
          font-size: 1.4rem;
          margin-right: #{$padding * 1.5};
          
          color: white !important;
          filter: drop-shadow(0 0 7px black) !important;

          &:last-of-type {
            margin-right: 0;
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

          .navbar-hero-inner-links-item {
            font-size: 1.9rem;
          }
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
      &:nth-of-type(1) {
        grid-column: 2;
        grid-row-start: 2;
        grid-row-end: 5;
      }

      &:nth-of-type(2),
      &:nth-of-type(3) {
        font-size: 1.3rem;
        grid-row: 3;
        line-height: 1;

        .svg-inline--fa {
          filter: drop-shadow(var(--navbar-fg-shadow));
        }
      }

      &:nth-of-type(2) {
        grid-column: 1;
        padding-left: $padding;
        text-align: left;
      }

      &:nth-of-type(3) {
        grid-column: 3;
        padding-right: $padding;
        text-align: right;
      }

      @include respond-to(mobile) {
        &:nth-of-type(2),
        &:nth-of-type(3) {
          font-size: 1.4rem;
        }

        &:nth-of-type(2) {
          padding-left: #{$padding * 2};
        }

        &:nth-of-type(3) {
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