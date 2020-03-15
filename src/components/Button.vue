<template>
  <a class="button">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "Button"
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.button {
  border-radius: $radius;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  line-height: 1;
  padding: $padding #{$padding * 2};
  text-transform: uppercase;
  user-select: none;

  background-color: var(--accent-color);
  box-shadow: var(--light-shadow);
  color: var(--accent-fg-color) !important;
}
</style>