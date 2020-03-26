<template>
  <div class="error">
    <div class="error-icon">
      <font-awesome-icon icon="exclamation-triangle" />
    </div>
    <div class="error-title">{{ $t('phrases.error.title') }}</div>
    <div class="error-check">{{ $t('phrases.error.checkConsole') }}</div>
    <div class="error-action">
      <a @click="reloadPage" class="button">
        <span>{{ $t('phrases.error.reload') }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheError",
  methods: {
    reloadPage() {
      window.location.reload(true);
    }
  },
  props: {
    message: String
  },
  mounted() {
    console.log(this.message)
  }
};
</script>

<style lang="scss">
@import "@/scss/_mixins.scss";
@import "@/scss/_variables.scss";

.error-container {
  left: 0;
  padding: $padding;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1500;
}

.error {
  border-radius: 0 0 $radius $radius;
  box-sizing: border-box;
  display: grid;
  font-size: 0;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto auto;
  left: 0;
  line-height: 1;
  margin: 0 $padding $padding $padding;
  padding: #{$padding * 1.5} #{$padding * 2};
  position: fixed;
  top: 0;
  width: calc(100% - #{$padding * 2});
  z-index: 1500;

  background-color: var(--accent-color);
  box-shadow: var(--heavy-shadow);
  color: var(--accent-fg-color);

  .error-icon {
    font-size: 2.2rem;
    grid-column: 1;
    grid-row-start: 1;
    grid-row-end: 3;
    text-align: left;
  }

  .error-title {
    font-size: 1.2rem;
    font-weight: 700;
    grid-column: 2;
    grid-row: 1;
    text-align: center;
  }

  .error-check {
    font-size: 0.8rem;
    font-weight: 500;
    grid-column: 2;
    grid-row: 2;
    margin-top: #{$padding / 2};
    text-align: center;
  }

  .error-action {
    grid-column: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    text-align: right;

    .button {
      display: inline-grid;
      font-size: 0.9rem;
      grid-template-rows: 1fr auto 1fr;
      height: 100%;
      padding: 0 #{$padding * 2};

      background-color: var(--accent-fg-color);
      color: var(--accent-color);

      span {
        grid-row: 2;
        margin-left: unset;
      }
    }
  }

  @include respond-to(mobile) {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto;

    & > * {
      grid-column: 1 !important;
      text-align: center !important;
    }

    .error-icon {
      font-size: 5rem;
      grid-row: 1;
      grid-row-start: unset;
      grid-row-end: unset;
      margin-top: $padding;
    }

    .error-title {
      grid-row: 2;
      margin-top: #{$padding * 2};
    }

    .error-check {
      grid-row: 3;
      line-height: 1.3;
    }

    .error-action {
      grid-row: 4;
      margin-top: #{$padding * 2};

      .button {
        font-size: 1.4rem;
        padding: #{$padding * 1.2} 0;
        width: 100%;
      }
    }
  }
}
</style>