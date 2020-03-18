<template>
  <div class="page">
    <div class="page-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page"
}
</script>

<style lang="scss">
@import "@/scss/_mixins.scss";
@import "@/scss/_variables.scss";

.page {
  padding: #{$padding * 6} #{$padding * 2};

  @include respond-to(desktop-sm) {
    padding: #{$padding * 3} #{$padding * 2};
  }

  .page-inner {
    font-size: 0;
    line-height: 1.5;
    margin: 0 auto;
    max-width: 900px;
    min-height: 100vh;

    h1, h2, h3, p, ul {
      margin: 0 0 #{$padding * 2} 0;

      color: var(--body-fg-color);

      &:last-child {
        margin-bottom: 0;
      }

      &.no-margin {
        margin-top: #{-($padding * 2)};
      }

      img {
        border-radius: $radius;

        box-shadow: var(--light-shadow);
      }
    }

    h1, h2, h3 {
      font-weight: 700;

      color: var(--accent-color);
    }

    h1 {
      font-size: 2.5rem;

      &.title {
        display: grid;
        font-size: 0;
        line-height: 1;
        margin-bottom: #{$padding * 3};
        grid-template-columns: auto 1fr;
        grid-template-rows: 1fr auto 1fr;

        .title-back {
          border-bottom: unset !important;
          color: var(--body-fg-color) !important;
          font-size: 2.3rem;
          grid-column: 1;
          grid-row: 2;
          margin-right: $padding;
          opacity: 0.3;
          text-decoration: none;
          text-shadow: var(--light-shadow);
          transform: scale(0.7);

          &:focus,
          &:hover {
            opacity: 1;

            color: var(--accent-color) !important;
          }
        }

        .title-text {
          grid-column: 2;
          grid-row-start: 1;
          grid-row-end: 4;
          font-size: 2.5rem;
        }
      }
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;

      &.sml {
        font-size: 0.8rem;
      }

      img {
        max-width: 100%;
      }
    }

    ul {
      padding-left: 30px;

      li {
        font-size: 1rem;
        margin-bottom: #{$padding / 1.5};
        line-height: inherit;

        .sml {
          font-size: 0.9rem;
        }
      }
    }

    a {
      border-bottom-style: dotted;
      border-bottom-width: 1px;

      border-bottom-color: var(--accent-color);
      
      &:focus,
      &:hover {
        border-bottom-style: solid;
      }
    }

    * {
      &.lowlight {
        filter: var(--lowlight-filter);
      }
    }
  }
}
</style>