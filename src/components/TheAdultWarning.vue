<template>
  <div class="adult-warning" v-if="visible">
    <div class="adult-warning-inner">
      <p class="adult-warning-inner-icon">
        <font-awesome-icon icon="biohazard" />
      </p>
      <p class="adult-warning-inner-title">
        {{ $t('phrases.adultWarning.title') }}
      </p>
      <p>
        <strong>
          {{ $t('phrases.adultWarning.containsAdultContent') }}
        </strong>
      </p>
      <p v-html="$t('phrases.adultWarning.pleaseLeaveNow')"></p>
      <p>
        <a class="button" v-on:click="handleDismiss">
          {{ $t('phrases.adultWarning.letMeIn') }}
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
      line-height: 1.5;
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
  }
}
</style>
