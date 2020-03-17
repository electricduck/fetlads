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

    <p>...</p>

    <AboutProfile
      class="about-page-profile"
      user-avatar="https://avatars3.githubusercontent.com/u/3042219"
      :user-contact="[
        { service: 'Telegram', username: 'asstra' }
      ]"
      user-location="Hull, GB"
      user-name="Astra"
      :user-role="$t('phrases.about.profile.role.dom')"
      :user-sexuality="$t('phrases.about.profile.sexuality.homo')"
      user-year="1993"
    >
      <p>I like ...</p>
    </AboutProfile>
    <AboutProfile
      class="about-page-profile"
      user-avatar="https://avatars1.githubusercontent.com/u/1594644"
      :user-contact="[
        { service: 'Telegram', username: 'theducky' }
      ]"
      user-location="York, GB"
      user-name="Ducky"
      :user-role="$t('phrases.about.profile.role.sub')"
      :user-sexuality="$t('phrases.about.profile.sexuality.pan')"
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
    </AboutProfile>
  </Page>
</template>

<script>
import AboutProfile from "@/components/AboutProfile.vue";
import Page from "@/components/Page.vue";

export default {
  name: "About",
  components: {
    AboutProfile,
    Page
  }
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.about-page {
  .about-page-profile {
    &:last-of-type {
      margin-bottom: 0 !important;
    }
  }
}
</style>