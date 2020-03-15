<template>
  <div class="post-media-album">
    <img
      class="post-media-album-item"
      v-for="image in src"
      :key="image.id"
      :src="image.file"
      :data-index="image.id"
      :class="{ 'post-media-album-item--visible' : image.id === currentIndex }"
    />
    <a
      class="post-media-album-navigation post-media-album-navigation--back"
      v-on:click="navigateAlbum('back')"
      v-if="currentIndex > 1"
      :title="$t('phrases.postMediaAlbum.back')"
    >
      <font-awesome-icon icon="chevron-left" />
    </a>
    <a
      class="post-media-album-navigation post-media-album-navigation--forward"
      v-on:click="navigateAlbum('forward')"
      v-if="currentIndex < amount"
      :title="$t('phrases.postMediaAlbum.forward')"
    >
      <font-awesome-icon icon="chevron-right" />
    </a>
  </div>
</template>

<script>
export default {
  name: "Album",
  props: {
    src: Array
  },
  data: function() {
    return {
      amount: 0,
      currentIndex: 1
    };
  },
  methods: {
    navigateAlbum(direction) {
      switch (direction) {
        case "back":
          this.currentIndex = this.currentIndex - 1;
          break;
        case "forward":
          this.currentIndex = this.currentIndex + 1;
          break;
      }
    }
  },
  mounted() {
    this.amount = this.$props.src.length;
  }
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.post-media-album {
  background-color: black;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto 1fr;
  overflow: hidden;
  user-select: none;

  .post-media-album-item {
    display: none;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;
    height: 100%;
    object-fit: contain;
    user-select: none;
    width: 100%;

    &.post-media-album-item--visible {
      display: block;
    }
  }

  .post-media-album-navigation {
    font-size: 4rem;
    grid-row: 2;
    line-height: 1;
    padding: 0 #{$padding * 3.5};

    color: var(--overlay-fg-color) !important;
    filter: drop-shadow(var(--light-shadow));

    &.post-media-album-navigation--back {
      grid-column: 1;
    }

    &.post-media-album-navigation--forward {
      grid-column: 3;
    }
  }
}
</style>