<template>
  <a
    class="nav-menu-links-item"
    @click="handleNavigate(route)"
    :class="{ 'nav-menu-links-item--active' : active }"
  >
    <font-awesome-icon icon="chevron-left" />
    <slot></slot>
    <font-awesome-icon icon="chevron-right" />
  </a>
</template>

<script>
export default {
  name: "NavMenuLinksItem",
  props: {
    active: Object,
    route: String
  },
  methods: {
    handleNavigate(route) {
      this.$router.push(route);
      this.$emit("closeMenu", false);
    }
  }
};
</script>