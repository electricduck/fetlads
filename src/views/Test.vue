<template>
  <Page>
    <h1>Here is a cat</h1>
    <p>
      <img src="https://placekitten.com/800/600" style="width: 100%;" />
    </p>
    <p>
      Enjoy your day.
    </p>
  </Page>
</template>

<script>
import Page from "@/components/Page.vue"

export default {
  name: "About",
  components: {
    Page
  }
}
</script>

<style lang="scss">

</style>