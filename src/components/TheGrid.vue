<template>
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
        <font-awesome-icon icon="images" class="grid-item-type-icon" v-if="post.type === 'album'" />
        <font-awesome-icon icon="video" class="grid-item-type-icon" v-if="post.type === 'video' || post.type === 'embed'" />
      </div>
    </router-link>
  </div>
</template>

<script>
import { getPosts } from "@/common/postService";

export default {
  name: "TheGrid",
  data: function() {
    return {
      posts: []
    };
  },
  methods: {
    getThumbnail(id) {
      let thumbnailPrefix = "/data/thumb/";
      return thumbnailPrefix + id + ".jpg";
    }
  },
  async mounted() {
    getPosts().then(posts => {
      let sortedPosts = posts.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      this.posts = sortedPosts;

      var appEl = document.getElementById("app"); // HACK: Breaking Vue conventions here. VueX would be appropriate, but is overkill for this.
      appEl.classList.add("app--loaded");
    });
  }
};
</script>

<style lang="scss">
@import "@/scss/_mixins.scss";
@import "@/scss/_variables.scss";

.grid {
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
      width: calc((100% / #{$grid-amount-desktop-sm}) - #{($padding / 2) * 2});
    }

    @include respond-to(mobile) {
      margin: #{$padding / 2};
      width: calc((100% / #{$grid-amount-mobile}) - #{($padding / 2) * 2});
    }
  }
}
</style>