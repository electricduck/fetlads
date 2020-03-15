<template>
  <div class="adult-warning" v-if="visible">
    <div class="adult-warning-inner">
      <p class="adult-warning-inner-icon">
        <font-awesome-icon icon="biohazard" />
      </p>
      <p class="adult-warning-inner-title">Woah, there!</p>
      <p>
        <strong>
          This site contains sexual and adult content.
        </strong>
      </p>
      <p>
        If you are under the legal age, please leave now.<br />
        Or don't: I'm just a few lines of text, I won't call the cops.
      </p>
      <p>
        <a class="button" v-on:click="handleDismiss">
          Let Me In
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheAdultWarning",
  data: function() {
    return {
      visible: false
    };
  },
  methods: {
    handleDismiss() {
      this.visible = false
      this.toggleVideos()
      localStorage.setItem("fetlads:consent:over18", true)
    },
    toggleVideos() {
      let videoEl = document.getElementsByTagName("video");
      if (videoEl.length === 1) {
        if(this.visible) {
          videoEl[0].pause();
        } else {
          videoEl[0].play();
        }
      }
    }
  },
  beforeMount() {
    var hasConsented = localStorage.getItem("fetlads:consent:over18") || false
    
    if(hasConsented.toString() === 'false') {
      this.visible = true;
    }
  },
  mounted() {
    this.toggleVideos()
  }
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.adult-warning {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr auto 1fr;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  background-color: var(--body-bg-color);
  color: var(--body-fg-color);

  .adult-warning-inner {
    grid-column: 2;
    grid-row: 2;
    max-width: 800px;
    padding: $padding;
    text-align: center;

    p {
      font-size: 0.9rem;
      line-height: 1.4;
      margin: 0 0 $padding 0;

      &:last-child {
        margin-bottom: 0;
      }

      &.adult-warning-inner-icon {
        font-size: 8rem;
        line-height: 1;
        margin-bottom: #{$padding * 1.5};

        color: var(--accent-color);
      }

      &.adult-warning-inner-title {
        font-size: 2rem;
        font-weight: 700;
      }
    }

    .button { // TODO: Move this when we want to re-use it
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
  }
}
</style>