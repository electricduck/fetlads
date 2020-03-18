<template>
  <div class="post-media">
    <img
      v-if="type === 'image'"
      :src="loadImage(src[0].file)"
      class="post-content"
      id="post-media-image" />
    <video
      v-if="type === 'video'"
      :src="loadVideo(src[0].file)"
      autoplay="autoplay"
      controls="controls"
      id="post-media-video" />
    <iframe
      v-if="type === 'embed'"
      :src="loadEmbed(src[0].file)"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="allowfullscreen"
      scrollable="no"
      id="post-media-embed"
    ></iframe>
    <Album
      v-if="type === 'album'"
      :src="src"
      id="post-media-album"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import Album from "@/components/PostMediaAlbum.vue"

export default {
  name: "PostMedia",
  components: {
    Album
  },
  props: {
    type: String,
    src: Array
  },
  methods: {
    loadEmbed(embedUrl) {
      if(
        embedUrl.includes("https://www.pornhub.com/")
      ) {
        return embedUrl.replace("view_video.php?viewkey=", "embed/")
      } else if (
        embedUrl.includes("https://www.xtube.com/")
      ) {
        return embedUrl.replace("video-watch/", "video-watch/embedded/") + "?embedSize=big"
      } else if (
        embedUrl.includes("https://www.redtube.com/")
      ) {
        return embedUrl.replace("www.redtube.com/", "embed.redtube.com/?id=")
      } else {
        return embedUrl
      }
    },
    loadImage(imageUrl) {
      if(!(imageUrl.includes("https://") || imageUrl.includes("http://"))) {
        var prefix = this.$var.file.media.image
        return prefix + imageUrl
      } else {
        return imageUrl
      }
    },
    loadVideo(videoUrl) {
      if(!(videoUrl.includes("https://") || videoUrl.includes("http://"))) {
        var prefix = this.$var.file.media.video
        return prefix + videoUrl
      } else {
        return videoUrl
      }
    }
  }
}
</script>