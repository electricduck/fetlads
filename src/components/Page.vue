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
    line-height: 1.3;
    margin: 0 auto;
    max-width: 900px;
    min-height: 100vh;

    h1, h2, h3, p {
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
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    a {
      border-bottom-style: solid;
      border-bottom-width: 1px;

      border-bottom-color: var(--accent-color);
    }
  }
}
</style>