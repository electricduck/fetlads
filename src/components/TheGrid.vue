<template>
  <div class="grid-container">
    <div class="grid" v-masonry transition-duration="0.5s" item-selector=".grid-item">
      <router-link
        class="grid-item"
        v-masonry-tile
        v-for="post in posts"
        :key="post.id"
        :to="'/' + post.id + '/' + post.slug"
      >
        <img class="grid-item-image" :src="getThumbnail(post.id)" />
        <div class="grid-item-type">
          <font-awesome-icon icon="image" class="grid-item-type-icon" v-if="post.type === 'image'" />
          <font-awesome-icon
            icon="images"
            class="grid-item-type-icon"
            v-if="post.type === 'album'"
          />
          <font-awesome-icon
            icon="video"
            class="grid-item-type-icon"
            v-if="post.type === 'video' || post.type === 'embed'"
          />
        </div>
      </router-link>
    </div>
    <div class="grid-load-more"
      :class="{ 'grid-load-more--no-more' : noMorePosts }">
      <a class="button grid-load-more-lm" v-on:click="handleLoadMoreClick">
        {{ $t('phrases.grid.loadMore') }}
      </a>
      <span class="grid-load-more-nm">
        {{ $t('phrases.grid.nothingMore') }}
      </span>
    </div>
  </div>
</template>

<script>
let postsAmount = 15

import { getPosts } from "@/common/postService";

export default {
  name: "TheGrid",
  data: function() {
    return {
      noMorePosts: false,
      page: 0,
      posts: []
    };
  },
  methods: {
    getThumbnail(id) {
      let thumbnailPrefix = "/data/thumb/";
      return thumbnailPrefix + id + ".jpg";
    },
    handleLoadMoreClick() {
      this.page = this.page + 1;
      this.loadPosts(this.page);
    },
    loadPosts(page) {
      getPosts(page, postsAmount, true).then(posts => {
        page = page || 0;

        if(posts.length === 0) {
          this.noMorePosts = true
        } else {
          var postsArray = this.posts.concat(posts)
          this.posts = postsArray
        }

        if (page === 0) {
          var appEl = document.getElementById("app"); // HACK: Breaking Vue conventions here. VueX would be appropriate, but is overkill for this.
          appEl.classList.add("app--loaded");
        }
      });
    }
  },
  mounted() {
    this.loadPosts();
  }
};
</script>

<style lang="scss">
@import "@/scss/_mixins.scss";
@import "@/scss/_variables.scss";

.grid-container {
  .grid {
    display: block;
    font-size: 0;
    line-height: 0;
    margin: $padding;

    .grid-item {
      border-radius: $radius;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: 1fr auto;
      margin: #{$padding / 2};
      overflow: hidden;
      text-decoration: none;
      user-select: none;
      width: calc((100% / #{$grid-amount-desktop}) - #{($padding / 2) * 2});

      box-shadow: var(--light-shadow);

      .grid-item-image,
      .grid-item-type {
        grid-column: 1;
      }

      .grid-item-image {
        grid-row-start: 1;
        grid-row-end: 3;
        user-select: none;
        width: 100%;
      }

      .grid-item-type {
        font-size: 1.5rem;
        grid-row: 2;
        padding: #{$padding * 2};
        text-align: right;
        user-select: none;

        .grid-item-type-icon {
          color: var(--overlay-fg-color);
          filter: drop-shadow(var(--light-shadow));
        }
      }

      @include respond-to(desktop-sm) {
        width: calc(
          (100% / #{$grid-amount-desktop-sm}) - #{($padding / 2) * 2}
        );
      }

      @include respond-to(mobile) {
        margin: #{$padding / 2};
        width: calc((100% / #{$grid-amount-mobile}) - #{($padding / 2) * 2});
      }
    }
  }

  .grid-load-more {
    font-size: 1.7rem;
    margin: #{$padding * 3};
    text-align: center;

    &.grid-load-more--no-more {
      .grid-load-more-lm {
        display: none !important;
      }

      .grid-load-more-nm {
        display: block;
      }
    }

    .grid-load-more-lm  {
      padding: #{$padding * 1.5} #{$padding * 2.5} !important;
    }

    .grid-load-more-nm {
      display: none;
      font-size: 1rem;
      opacity: 0.2;
    }
  }
}
</style>