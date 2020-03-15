<template>
  <div class="slidebar"
    :class="[
      { 'slidebar--right' : right },
      { 'slidebar--visible' : visible }
    ]">
    <div class="slidebar-close">

    </div>
    <div class="slidebar-inner">

    </div>
  </div>
</template>

<script>
export default {
  name: "Slidebar",
  props: {
    right: Boolean,
    visible: Boolean
  }
}
</script>

<style lang="scss">
  .slidebar {
    visibility: hidden;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 900;

    background-color: var(--overlay-bg-color);

    &.slidebar--right {

    }

    &.slidebar--visible {
      visibility: visible;
    }

    .slidebar-inner {
      float: right;
      height: 100%;
      width: 400px;

      background-color: var(--body-bg-color);
      color: var(--body-fg-color);
    }
  }
</style>