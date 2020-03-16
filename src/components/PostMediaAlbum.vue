<template>
  <div class="post-media-album">
    <div class="post-media-album-loader">
      {{ $t('phrases.postMediaAlbum.loading') }}
    </div>
    <img
      class="post-media-album-item"
      v-for="image in src"
      :key="image.id"
      :src="loadImage(image.file)"
      :class="{ 'post-media-album-item--visible' : image.id === currentIndex }"
      v-shortkey="['space']"
      @shortkey="skipAlbum()"
      @click="navigateAlbum('forward')"
    />
    <a
      class="post-media-album-navigation post-media-album-navigation--back"
      :class="{ 'post-media-album-navigation--visible' : currentIndex > 1 }"
      v-shortkey="['arrowleft']"
      @shortkey="navigateAlbum('back')"
      @click="navigateAlbum('back')"
      :title="$t('phrases.postMediaAlbum.back') + ' (←)'"
    >
      <font-awesome-icon icon="chevron-left" />
    </a>
    <a
      class="post-media-album-navigation post-media-album-navigation--forward"
      :class="{ 'post-media-album-navigation--visible' : currentIndex < amount }"
      v-shortkey="['arrowright']"
      @shortkey="navigateAlbum('forward')"
      @click="navigateAlbum('forward')"
      :title="$t('phrases.postMediaAlbum.forward') + ' (→)'"
    >
      <font-awesome-icon icon="chevron-right" />
    </a>
    <div class="post-media-album-item-count">
      <i18n path="phrases.postMediaAlbum.count" tag="span" class="post-media-album-item-count-inner">
        <strong>{{ this.currentIndex }}</strong>
        <strong>{{ this.amount }}</strong>
      </i18n>
    </div>
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
      currentIndex: 1
    };
  },
  methods: {
    loadImage(imageUrl) {
      if(!(imageUrl.includes("https://") || imageUrl.includes("http://"))) {
        var prefix = "https://fs05.fetlads.xyz/image/"
        return prefix + imageUrl
      } else {
        return imageUrl
      }
    },
    navigateAlbum(direction) {
      switch (direction) {
        case "back":
          if(this.currentIndex > 1) {
            this.currentIndex = this.currentIndex - 1
          } else {
            this.$emit('navigatePost', 'back')
          }
          break
        case "forward":
          if(this.currentIndex < this.amount) {
            this.currentIndex = this.currentIndex + 1
          } else {
            this.$emit('navigatePost', 'forward')
          }
          break
      }
    },
    skipAlbum() {
      this.$emit('navigatePost', 'forward')
    }
  },
  computed: {
    amount: function() {
      return this.$props.src.length
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/_mixins.scss";
@import "@/scss/_variables.scss";

.post-media-album {
  background-color: black;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto 1fr;
  overflow: hidden;
  user-select: none;

  .post-media-album-loader {
    color: rgba(255,255,255,0.6);
    font-size: 0.9rem;
    grid-column: 2;
    grid-row: 2;
    line-height: 4rem;
    text-align: center;
  }

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

  .post-media-album-item-count {
    display: grid;
    grid-column: 2;
    grid-row: 3;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr auto #{$padding * 2};

    .post-media-album-item-count-inner {
      border-radius: $radius;
      font-size: 0.8rem;
      font-weight: 500;
      grid-column: 2;
      grid-row: 2;
      line-height: 1;
      padding: $padding;

      background-color: var(--overlay-bg-color);
      box-shadow: var(--light-shadow);
      color: var(--overlay-fg-color);
    }
  }

  .post-media-album-navigation {
    cursor: pointer;
    font-size: 4rem;
    grid-row: 2;
    line-height: 1;
    padding: 0 #{$padding * 3.5};
    transition: none !important;
    visibility: hidden;

    color: var(--overlay-fg-color) !important;
    filter: drop-shadow(var(--light-shadow)) !important;

    &.post-media-album-navigation--back {
      grid-column: 1;
    }

    &.post-media-album-navigation--forward {
      grid-column: 3;
    }

    &.post-media-album-navigation--visible {
      visibility: visible;
    }

    @include respond-to(mobile) {
      opacity: 0.75;
      padding: 0 #{$padding * 2} !important;
    }
  }
}
</style>