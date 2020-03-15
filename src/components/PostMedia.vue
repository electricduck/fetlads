<template>
  <div class="post-media">
    <img
      v-if="type === 'image'"
      :src="loadImage(src[0].file)"
      class="post-content" />
    <video
      v-if="type === 'video'"
      :src="loadVideo(src[0].file)"
      autoplay="autoplay"
      controls="controls" />
    <iframe
      v-if="type === 'embed'"
      :src="loadEmbed(src[0].file)"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="allowfullscreen"
      scrollable="no"
    ></iframe>
    <Album
      v-if="type === 'album'"
      :src="src"
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
        embedUrl.includes("https://www.xtube.com/")
      ) {
        return embedUrl.replace("video-watch/", "video-watch/embedded/") + "?embedSize=big"
      }
    },
    loadImage(imageUrl) {
      if(!imageUrl.includes("https://")) {
        var prefix = "https://fs05.fetlads.xyz/image/"
        return prefix + imageUrl
      } else {
        return imageUrl
      }
    },
    loadVideo(videoUrl) {
      if(!videoUrl.includes("https://")) {
        var prefix = "https://fs05.fetlads.xyz/video/"
        return prefix + videoUrl
      } else {
        return videoUrl
      }
    }
  }
}
</script>