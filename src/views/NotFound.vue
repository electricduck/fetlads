<template>
  <Page class="notfound-page">
    <p class="notfound-page-icon">
      <font-awesome-icon icon="exclamation-triangle" />
    </p>
    <h1>Not Found</h1>
    <p class="no-margin">Whatever you were looking for is no longer here or never existed.</p>
  </Page>
</template>

<script>
import Page from "@/components/Page.vue";

export default {
  name: "NotFound",
  components: {
    Page
  }
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.notfound-page {
  .notfound-page-icon {
    font-size: 8rem !important;
    line-height: 1 !important;
    margin-top: #{$padding * 3} !important;

    color: var(--accent-color) !important;
  }

  h1,
  p {
    text-align: center;
  }
}
</style>