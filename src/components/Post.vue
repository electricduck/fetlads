<template>
  <div class="post" :class="{ 'post--visible' : found }">
    <PostMedia class="post-content" :src="src" :type="type" />
    <div class="post-actions">
      <router-link to="/" class="post-actions-item">
        <font-awesome-icon icon="arrow-left" />
      </router-link>
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
      src: "",
      type: ""
    };
  },
  async mounted() {
    /*let post = await this.loadPost(self.$route.params.id, self.$route.params.slug)
    console.log(post)*/

    getPost(1, 'test').then(response => {
      console.log("Hello")
      console.log(response)
    })

    /*var posts = await getPost(1, 'test')

    console.log(posts)*/

    /*try {
      self.found = true;
      self.src = post.src;
      self.type = post.type;
    } catch(error) {
      self.$router.push({path:"/"})
    }*/
  }
};
</script>

<style lang="scss">
@import "@/scss/_mixins.scss";
@import "@/scss/_variables.scss";

.post {
  backdrop-filter: blur(5px);
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

  .post-content {
    display: none;
    grid-column: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    z-index: 751;

    & > iframe,
    & > img,
    & > video {
      border-radius: $radius;
      box-shadow: var(--heavy-shadow);

      &:focus {
        outline: 0;
      }
    }

    & > iframe {
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
      filter: drop-shadow(var(--light-shadow));

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
      & > video {
        border-radius: unset;
        box-shadow: unset;
        height: 100vh;
        max-height: unset;
        max-width: unset;
        object-fit: contain;
        width: 100vw;
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