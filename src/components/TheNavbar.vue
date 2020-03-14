<template>
  <div class="navbar">
    <div class="navbar-hero">
      <div class="navbar-hero-inner">
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
          <span>Lads</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
    background-image: url('http://placekitten.com/1000/500');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 0 0 $radius $radius;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr auto;
    height: $navbar-hero-height;
    margin-bottom: $navbar-spacing;

    background-color: var(--navbar-fg-color);
    box-shadow: var(--light-shadow);

    .navbar-hero-inner {
      bottom: #{-$padding};
      grid-column: 1;
      grid-row: 2;
      line-height: 1.3;
      padding: #{$padding * 2};

      color: var(--overlay-fg-color);
      text-shadow: var(--light-shadow);

      h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
        margin: 0;
      }

      h1 {
        font-size: 1.8rem;
        font-weight: 700;
      }

      h2 {
        font-size: 1.25rem;
      }

      .navbar-hero-inner-links {
        font-size: 0;
        line-height: 1;
        text-align: right;

        .navbar-hero-inner-links-item {
          font-size: 1.35rem;
          margin-right: #{$padding * 1.5};
          
          color: var(--overlay-fg-color) !important;
          filter: drop-shadow(var(--light-shadow));

          &:last-of-type {
            margin-right: 0;
          }
        }

        @include respond-to(mobile) {
          text-align: center;

          .navbar-hero-inner-links-item {
            font-size: 1.6rem;
          }
        }
      }
    }
  }

  .navbar-container {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 1fr auto auto auto 1fr;
    height: $navbar-container-height;
    width: 100%;

    .navbar-item {
      &:nth-of-type(1) {
        grid-column: 2;
        grid-row-start: 2;
        grid-row-end: 5;
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
      filter: drop-shadow(var(--navbar-fg-shadow));

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