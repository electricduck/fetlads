<template>
  <div class="post" :class="{ 'post--visible' : found }">
    <a class="post-navigation" v-shortkey="['arrowleft']" @shortkey="navigatePost('back')"></a>
    <a class="post-navigation" v-shortkey="['arrowright']" @shortkey="navigatePost('forward')"></a>
    <div class="post-background" @click="handleExitClick"></div>
    <PostMedia class="post-content" :src="media.src" :type="media.type" @navigatePost="navigatePostForce" />
    <div class="post-actions">
      <a
        class="post-actions-item"
        v-shortkey="['backspace']"
        @shortkey="handleExitClick"
        @click="handleExitClick"
        :title="$t('phrases.post.exit') + ' (Backspace)'"
      >
        <font-awesome-icon icon="arrow-left" />
      </a>
      <a
        class="post-actions-item post-actions-item--right"
        :class="{ 'post-actions-item--hidden' : this.media.type !== 'video' }"
        :title="$t('phrases.post.pictureInPicture') + ' (p)'"
        v-shortkey="['p']"
        @shortkey="handlePipClick()"
        @click="handlePipClick()"
      >
        <font-awesome-icon icon="compress-alt" />
      </a>
      <a
        class="post-actions-item post-actions-item--right"
        :class="{ 'post-actions-item--hidden' : this.media.type !== 'video' }"
        :title="$t('phrases.post.fullscreen') + ' (f)'"
        v-shortkey="['f']"
        @shortkey="handleFullscreenClick()"
        @click="handleFullscreenClick()"
      >
        <font-awesome-icon icon="expand" />
      </a>
      <a
        class="post-actions-item post-actions-item--right"
        target="_blank"
        :class="{ 'post-actions-item--hidden' : this.media.type !== 'embed' }"
        :href="this.externalLink"
        :title="$t('phrases.post.openExternal')"
      >
        <font-awesome-icon icon="external-link-alt" />
      </a>
    </div>
  </div>
</template>

<script>
import { getPost } from "@/common/postService";

import PostMedia from "@/components/PostMedia";

export default {
  name: "Post",
  components: {
    PostMedia
  },
  data: function() {
    return {
      externalLink: "",
      found: false,
      media: {
        src: [],
        type: ""
      }
    };
  },
  methods: {
    getMediaElement(type) {
      switch (type) {
        case "video":
          return document.getElementById("post-media-video");
      }
    },
    handleExitClick() {
      this.$router.push("/");
    },
    async handleFullscreenClick() {
      var element = this.getMediaElement(this.media.type);
      try {
        element.requestFullscreen();
      } catch (err) {
        // TODO: Handle error
      }
    },
    async handlePipClick() {
      var element = this.getMediaElement(this.media.type);
      try {
        if (element !== document.pictureInPictureElement) {
          await element.requestPictureInPicture();
        } else {
          await document.exitPictureInPicture();
        }
      } catch (err) {
        // TODO: Handle error
      }
    },
    loadPost() {
      var useCache = false;

      if (window.isPostCacheUpdated) {
        useCache = true;
      }

      getPost(this.$route.params.id, this.$route.params.slug, useCache, true)
        .then(post => {
          window.isPostCacheUpdated = true;

          this.found = true;
          this.media.src = post.src;
          this.media.type = post.type;
          this.externalLink = this.media.src[0].file;

          /*var parsedDate = new Date(Date.parse(post.date));*/
          /*var formattedDate = `${parsedDate.getFullYear()}-${(
            parsedDate.getMonth() + 1
          )
            .toString()
            .padStart(2, "0")}-${parsedDate
            .getDate()
            .toString()
            .padStart(2, "0")}`;*/

          /*document.title = `Fetlads • #${post.id
            .toString()
            .padStart(3, "0")} (${formattedDate})`;*/
        })
        .catch(err => {
          this.$router.push("/");
          throw err;
        });
    },
    navigatePost(direction, ignoreMediaType = false) {
      var allowNavigation = true

      if(ignoreMediaType) {
        allowNavigation = true
      } else {
        if(this.media.type === "album") {
          allowNavigation = false
        }
      }

      if(allowNavigation) {
        this.media.src = [],
        this.media.type = ''

        switch (direction) {
          case "back":
            if(window.previousPost !== null) {
              this.$router.push(`/${window.previousPost.id}/${window.previousPost.slug}`)
            }
            break;
          case "forward":
            if(window.nextPost !== null) {
              this.$router.push(`/${window.nextPost.id}/${window.nextPost.slug}`)
            }
            break;
        }

        this.loadPost();
      }
    },
    navigatePostForce(direction) {
      this.navigatePost(direction, true)
    }
  },
  mounted() {
    this.loadPost();
  }
};
</script>

<style lang="scss">
@import "@/scss/_mixins.scss";
@import "@/scss/_variables.scss";

.post {
  //backdrop-filter: blur(5px);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr auto auto 1fr;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 750;

  background-color: var(--overlay-bg-color);

  &.post--visible {
    .post-actions,
    .post-content {
      display: block;
    }
  }

  .post-navigation {
    display: none;
    grid-column: 1;
    grid-row: 1;
  }

  .post-background {
    background-color: transparent;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 5;
    z-index: 755;
  }

  .post-content {
    display: none;
    grid-column: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    z-index: 780;

    & > iframe,
    & > img,
    & > video,
    & > .post-media-album {
      border-radius: $radius;
      box-shadow: var(--heavy-shadow);

      &:focus {
        outline: 0;
      }
    }

    & > iframe,
    & > .post-media-album {
      height: 96vh;
      width: 96vw;
    }

    & > img,
    & > video {
      max-height: 96vh;
      max-width: 96vw;
    }
  }

  .post-actions {
    font-size: 1.5rem;
    grid-column: 2;
    grid-row: 2;
    height: 1.5rem;
    line-height: 1;
    padding: #{$padding * 2};
    z-index: 800;

    .post-actions-item {
      margin-right: #{$padding * 2};
      opacity: 0.75;
      transition: $transition;

      color: var(--overlay-fg-color) !important;
      filter: drop-shadow(var(--light-shadow)) !important;

      &.post-actions-item--right {
        float: right;
        margin-left: #{$padding * 2};
        margin-right: 0;
        opacity: 0.5;
      }

      &.post-actions-item--hidden {
        display: none;
      }

      &:focus,
      &:hover {
        opacity: 1;
      }
    }
  }

  @include respond-to(mobile) {
    background-color: black;
    display: block;

    .post-content {
      & > iframe,
      & > img,
      & > video,
      & > .post-media-album {
        border-radius: unset;
        box-shadow: unset;
        height: 100vh;
        max-height: unset;
        max-width: unset;
        object-fit: contain;
        overflow: hidden;
        width: 100%;
      }
    }

    .post-actions {
      left: 0;
      position: absolute;
      width: 100%;
      top: 0;
    }
  }
}
</style>