<template>
  <div class="slidebar"
    :class="{ 'slidebar--right' : right }">
    <div class="slidebar-inner">

    </div>
  </div>
</template>

<script>
export default {
  name: "Slidebar",
  props: {
    right: Boolean
  }
}
</script>

<style lang="scss">
  .slidebar {
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 900;

    background-color: var(--overlay-bg-color);

    &.slidebar--right {

    }

    .slidebar-inner {

    }
  }
</style>