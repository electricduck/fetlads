<template>
  <Page class="about-page">
    <h1 class="title">
      <router-link to="/" class="title-back">
        <font-awesome-icon icon="arrow-left" />
      </router-link>
      <span class="title-text">{{ $t('phrases.about.title') }}</span>
    </h1>
    <p>
      <img src="https://fetlads.xyz/data/hero_desktop.jpg" />
    </p>

    <p v-html="$t('phrases.about.text')"></p>

    <AboutUser
      class="about-page-user"
      user-avatar="https://avatars3.githubusercontent.com/u/3042219"
      user-location="Hull, GB"
      user-name="Astra"
      user-role="Dominant"
      user-sexuality="Homosexual"
      user-year="1993"
    >
      <p>I like ...</p>
      <p>
        You can reach me on
        <strong>
          <font-awesome-icon :icon="['fab', 'telegram-plane']" />&nbsp;Telegram
        </strong> at
        <a href="https://t.me/astravexton" target="_blank">@astravexton</a>.
      </p>
    </AboutUser>
    <AboutUser
      class="about-page-user"
      user-avatar="https://avatars1.githubusercontent.com/u/1594644"
      user-location="York, GB"
      user-name="Ducky"
      user-role="Submissive"
      user-sexuality="Pansexual"
      user-year="1996"
    >
      <p>I like ...</p>
      <p>
        When I'm not face down on a bed, handcuffed to a radiator, or have my head in someone's crotch, you'll usually find me under the bonnet of a car, or tapping away on the nearest keyboard.
      </p>
      <p>
        I build and maintain this site, lovingly crafted in
        <strong>
          <font-awesome-icon :icon="['fab', 'vuejs']" />&nbsp;Vue
        </strong>. The code is freely available on
        <a
          href="https://github.com/electricduck/fetlads"
          target="_blank"
        >my Github</a>.
      </p>
      <p>
        You can reach me on
        <strong>
          <font-awesome-icon :icon="['fab', 'telegram-plane']" />&nbsp;Telegram
        </strong> at
        <a href="https://t.me/theducky" target="_blank">@theducky</a>.
      </p>
    </AboutUser>
  </Page>
</template>

<script>
import AboutUser from "@/components/AboutUser.vue";
import Page from "@/components/Page.vue";

export default {
  name: "About",
  components: {
    AboutUser,
    Page
  }
};
</script>

<style lang="scss">
.about-page {
}
</style>