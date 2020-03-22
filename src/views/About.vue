<template>
  <Page class="about-page">
    <h1 class="title">
      <span class="title-text">{{ $t('phrases.about.title') }}</span>
    </h1>
    <p>
      <img :src="$var.asset.hero.about" />
    </p>

    <h3>
      {{ $t('phrases.about.quote') }}
    </h3>
    <i18n path="phrases.about.text.par1" tag="p">
      <span>{{ this.yearsTogether }}</span>
    </i18n>
    <i18n path="phrases.about.text.par2" tag="p" />
    <i18n path="phrases.about.contactUs" tag="p">
      <a href="mailto:fetlads@pm.me">fetlads@pm.me</a>.
    </i18n>
    <p class="lowlight sml no-margin">{{ $t('phrases.about.englishOnly') }}</p>
    <p class="lowlight">{{ $t('phrases.about.moreAboutUsBelow') }}</p>

    <AboutProfile
      class="about-page-profile"
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
      :user-contact="[
        { service: 'Telegram', username: 'theducky' },
        { service: 'Telescope', username: 'justduckythings' },
        { service: 'Twitter', username: 'justduckythings' }
      ]"
      user-location="York, GB"
      user-name="Ducky"
      :user-role="$t('phrases.about.profile.role.sub')"
      :user-sexuality="$t('phrases.about.profile.sexuality.pan')"
      user-year="1996"
    >
      <div v-html="$t('phrases.about.profile.about.ducky')"></div>
    </AboutProfile>

    <p v-if="$t('phrases.about.languageProblem') !== ''" v-html="$t('phrases.about.languageProblem')" class="lowlight sml"></p>
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
  },
  data: function() {
    return {
      yearsTogether: 0
    }
  },
  mounted() {
    var yearSince = 2015;
    var yearUntil = new Date().getFullYear();
    this.yearsTogether = yearUntil - yearSince;
  }
};
</script>