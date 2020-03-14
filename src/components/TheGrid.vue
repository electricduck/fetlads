<template>
  <div class="grid" v-masonry transition-duration="0.5s" item-selector=".grid-item">
    <router-link
      class="grid-item"
      v-masonry-tile
      v-for="post in posts"
      :key="post.id"
      :to="'/' + post.id + '/' + post.slug"
    >
      <img class="grid-item-image" src="https://placekitten.com/520/500" />
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
    async populateGrid() {
      getPosts().then(response => {
        let posts = response.data;
        let sortedPosts = posts.sort(function(a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        this.posts = sortedPosts;

        var appEl = document.getElementById("app"); // HACK: Breaking Vue conventions here. VueX would be appropriate, but is overkill.
        appEl.classList.add("app--loaded");
      });
    }
  },
  async mounted() {
    await this.populateGrid();
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
    margin: #{$padding / 2};
    overflow: hidden;
    width: calc((100% / #{$grid-amount-desktop}) - #{($padding / 2) * 2});

    box-shadow: var(--light-shadow);

    .grid-item-image {
      width: 100%;
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