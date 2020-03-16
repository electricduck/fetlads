<template>
  <div class="footer">
    <p>&copy; {{ this.copyrightYear }} Fetlads</p>
    <p>
      <strong>{{ this.version.app }}</strong> (Vue {{ this.version.vue }})<br />
      <span v-html="$t('phrases.footer.openSource')"></span>
    </p>
    <p v-if="$t('phrases.footer.translationsProvidedBy') !== ''" v-html="$t('phrases.footer.translationsProvidedBy')"></p>
  </div>
</template>

<script>
import Vue from 'vue'
import { version } from '@/common/version'

export default {
  name: "TheFooter",
  data: function() {
    return {
      copyrightYear: (new Date()).getFullYear(),
      version: {
        app: version,
        vue: Vue.version
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.footer {
  font-size: 0;
  padding: #{$padding * 2.5} #{$padding * 2};
  text-align: center;

  background-color: var(--accent-color);
  box-shadow: var(--light-shadow);
  color: var(--accent-fg-color);

  p {
    &:nth-of-type(1) {
      font-size: 0.9rem;
      font-weight: 700
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    a {
      border-bottom-style: solid;
      border-bottom-width: 1px;
      color: inherit !important;

      border-bottom-color: var(--accent-fg-color);
    }

    font-size: 0.7rem;
    font-weight: 500;
    line-height: 1.3;
    margin: 0 0 #{$padding / 2.5} 0;
  }
}
</style>
