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
      :user-role="$t('phrases.about.profile.role.switch')"
      :user-sexuality="$t('phrases.about.profile.sexuality.homo')"
      user-year="1993"
    >
      <div v-html="$t('phrases.about.profile.about.astra')"></div>
    </AboutProfile>
    <AboutProfile
      class="about-page-profile"
      user-avatar="https://avatars1.githubusercontent.com/u/1594644"
      :user-contact="[
        { service: 'Telegram', username: 'theducky' },
        { service: 'Twitter', username: 'theducky_' },
        { service: 'Github', username: 'electricduck' }
      ]"
      user-location="York, GB"
      user-name="Ducky"
      :user-role="$t('phrases.about.profile.role.sub')"
      :user-sexuality="$t('phrases.about.profile.sexuality.pan')"
      user-year="1996"
    >
      <div v-html="$t('phrases.about.profile.about.ducky')"></div>
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