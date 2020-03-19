<template>
  <div
    class="slidebar"
    :class="[
      { 'slidebar--right' : right },
      { 'slidebar--visible' : visible }
    ]"
  >
    <div class="slidebar-close" @click="handleCloseClick"></div>
    <div class="slidebar-inner">
      <div class="slidebar-inner-header">
        <a
          class="slidebar-inner-header-item"
          @click="handleCloseClick"
          :title="$t('phrases.slidebar.exit')"
        >
          <font-awesome-icon icon="times" />
        </a>
      </div>
      <div class="slidebar-inner-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slidebar",
  methods: {
    handleCloseClick() {
      this.$emit("closeMenu", false);
    }
  },
  props: {
    right: Boolean,
    visible: Boolean
  }
};
</script>

<style lang="scss">
@import "@/scss/_mixins.scss";
@import "@/scss/_variables.scss";

.slidebar {
  $width: 400px;

  display: none;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  //visibility: hidden;
  width: 100%;
  z-index: 1000;

  background-color: var(--overlay-bg-color);

  &.slidebar--right {
    .slidebar-inner {
      left: unset;
      right: 0;

      .slidebar-inner-header {
        .slidebar-inner-header-item {
          text-align: right;
        }
      }
    }
  }

  &.slidebar--visible {
    display: block;
    //visibility: visible;
  }

  .slidebar-close {
    background-color: transparent;
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1025;
  }

  .slidebar-inner {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    height: 100%;
    left: 0;
    max-width: $width;
    position: absolute;
    top: 0;
    width: $width;
    z-index: 1050;

    background-color: var(--body-bg-color);
    box-shadow: var(--heavy-shadow);
    color: var(--body-fg-color);

    @include respond-to(mobile) {
      width: calc(100% - #{$padding * 4});
    }

    .slidebar-inner-header {
      box-sizing: border-box;
      display: grid;
      grid-column: 1;
      grid-row: 1;
      grid-template-columns: auto;
      grid-template-rows: 1fr auto 1fr;
      height: calc(#{$navbar-container-height} + (#{$navbar-spacing} * 2));
      line-height: 1;
      padding: #{$padding * 2.5};

      background-color: var(--navbar-bg-color);
      box-shadow: var(--light-shadow);

      @include respond-to(mobile) {
        padding-left: 0;
        padding-right: 0;

        .slidebar-inner-header-item {
          font-size: $navbar-item-font-size-mobile !important;
        }
      }

      .slidebar-inner-header-item {
        font-size: $navbar-item-font-size;
        grid-column: 1;
        grid-row: 2;
        margin: 0 #{$padding * 2};
      }
    }

    .slidebar-inner-content {
      grid-column: 1;
      grid-row: 2;
      overflow: auto;
      padding: #{$padding * 4.5};

      @include respond-to(mobile) {
        padding: #{$padding * 3};
      }
    }
  }
}
</style>