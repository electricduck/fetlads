<template>
  <div class="post" :class="{ 'post--visible' : found }">
    <div class="post-background" @click="handleExitClick"></div>
    <PostMedia class="post-content" :src="src" :type="type" />
    <div class="post-actions">
      <a
        class="post-actions-item"
        v-shortkey="['esc']"
        @shortkey="handleExitClick"
        @click="handleExitClick"
        :title="$t('phrases.post.exit')"
      >
        <font-awesome-icon icon="arrow-left" />
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
      found: false,
      src: [],
      type: ""
    };
  },
  methods: {
    handleExitClick() {
      this.$router.push("/");
    }
  },
  mounted() {
    var useCache = false

    if(window.isPostCacheUpdated) {
      useCache = true
    }

    getPost(this.$route.params.id, this.$route.params.slug, useCache)
      .then(post => {
        window.isPostCacheUpdated = true

        this.found = true;
        this.src = post.src;
        this.type = post.type;

        var parsedDate = new Date(Date.parse(post.date));
        var formattedDate = `${parsedDate.getFullYear()}-${(
          parsedDate.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}-${parsedDate
          .getDate()
          .toString()
          .padStart(2, "0")}`;

        document.title = `Fetlads • #${post.id
          .toString()
          .padStart(3, "0")} (${formattedDate})`;
      })
      .catch(err => {
        this.$router.push("/");
        throw err;
      });
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
      height: 90vh;
      width: 90vw;
    }

    & > img,
    & > video {
      max-height: 90vh;
      max-width: 90vw;
    }
  }

  .post-actions {
    display: none;
    font-size: 1.5rem;
    grid-column: 2;
    grid-row: 2;
    height: 1.5rem;
    line-height: 1;
    padding: #{$padding * 2};
    z-index: 800;

    .post-actions-item {
      opacity: 0.75;
      transition: $transition;

      color: var(--overlay-fg-color) !important;
      filter: drop-shadow(var(--light-shadow)) !important;

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