<template>
  <div>
    <img
      v-if="type === 'image'"
      :src="loadImage(src)"
      class="post-content" />
    <video
      v-if="type === 'video'"
      :src="loadVideo(src)"
      autoplay="autoplay"
      controls="controls" />
    <iframe
      v-if="type === 'embed'"
      :src="loadEmbed(src)"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="allowfullscreen"
      scrollable="no"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "PostMedia",
  props: {
    type: String,
    src: String
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
        var prefix = "https://zyrio-scw-nl02.s3.nl-ams.scw.cloud/pub/fetlads/"
        return prefix + imageUrl
      } else {
        return imageUrl
      }
    },
    loadVideo(videoUrl) {
      if(!videoUrl.includes("https://")) {
        var prefix = "https://zyrio-scw-nl02.s3.nl-ams.scw.cloud/pub/fetlads/"
        return prefix + videoUrl
      } else {
        return videoUrl
      }
    }
  }
}
</script>