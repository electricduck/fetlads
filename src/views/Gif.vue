<template>
  <Page class="gif-page">
    <div class="gif">
      <video
        @click="loadRandomGif"
        class="gif-view"
        :src="src.video"
        id="gif"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        :title="$t('phrases.gif.random')"
      ></video>
      <div class="gif-actions">
        <div class="gif-actions-random">
          <a class="button" @click="loadRandomGif">
            <font-awesome-icon icon="random" />
            <span>{{ $t('phrases.gif.random') }}</span>
          </a>
        </div>
        <div class="gif-actions-download">
          <a
            :href="src.video"
            class="button"
            target="_blank"
            :class="{ 'button--disabled' : src.video === null }"
          >
            <font-awesome-icon icon="download" />
            <span>MP4</span>
          </a>
          <a
            :href="src.gif"
            class="button"
            target="_blank"
            :class="{ 'button--disabled' : src.gif === null }"
          >
            <font-awesome-icon icon="download" />
            <span>GIF</span>
          </a>
        </div>
      </div>
    </div>
  </Page>
</template>

<script>
import Page from "@/components/Page.vue";

import { getRandomGif } from "@/common/gifService";

export default {
  name: "Gif",
  components: {
    Page
  },
  data: function() {
    return {
      src: {
        gif: null,
        video: null
      }
    };
  },
  methods: {
    loadRandomGif() {
      getRandomGif(window.isGifCacheUpdated).then(gif => {
        this.src.video = this.$var.file.media.gif + gif.src.video;

        if (window.isGifCacheUpdated) {
          let videoEl = document.getElementById("gif");

          var isVideoElPlaying =
            videoEl.currentTime > 0 &&
            !videoEl.paused &&
            !videoEl.ended &&
            videoEl.readyState > 2;

          if (!isVideoElPlaying) {
            videoEl.play();
          }
        }

        window.isGifCacheUpdated = true;
      });
    }
  },
  mounted() {
    this.loadRandomGif();
  }
};
</script>

<style lang="scss">
@import "@/scss/_mixins.scss";
@import "@/scss/_variables.scss";

.gif-page {
  @include respond-to(desktop-sm) {
    .gif {
      .gif-view {
        max-height: calc(
          100vh -
            (
              #{$navbar-container-height} + (#{$navbar-spacing} * 2) + #{$padding *
                6}
            )
        ) !important;
      }
    }
  }

  @include respond-to(mobile) {
    padding: 0;

    .gif {
      .gif-view {
        border-radius: 0 !important;
        height: calc(
          100vh - (#{$navbar-container-height} + (#{$navbar-spacing} * 2))
        );
        max-height: unset !important;
        max-width: unset !important;
        object-fit: contain;
        width: 100%;
      }
    }
  }

  .gif {
    position: relative;
    width: 100%;

    .gif-view {
      background-color: black;
      border-radius: $radius;
      box-sizing: border-box;
      cursor: pointer;
      display: block;
      margin-left: auto;
      margin-right: auto;
      max-height: calc(
        100vh -
          (
            #{$navbar-container-height} + (#{$navbar-spacing} * 2) + #{$padding *
              12}
          )
      );
      max-width: 100%;

      box-shadow: var(--heavy-shadow);
    }

    .gif-actions {
      bottom: 0;
      opacity: 0.25;
      padding: #{$padding * 4} 0;
      position: absolute;
      transition: $transition;
      width: 100%;

      &:hover {
        opacity: 1;

        .button {
          background-color: var(--accent-color) !important;
          color: var(--accent-fg-color) !important;
        }
      }

      .gif-actions-random {
        text-align: center;

        .button {
          font-size: 1.5rem;
          padding: #{$padding * 1.7} #{$padding * 3} !important;
        }
      }

      .gif-actions-download {
        padding-top: $padding;
        text-align: center;

        .button {
          font-size: 0.9rem;
          margin-right: $padding;

          &:last-of-type {
            margin-right: 0;
          }
        }
      }

      .button {
        background-color: var(--overlay-fg-color) !important;
        color: var(--overlay-bg-color) !important;
      }
    }
  }
}
</style>