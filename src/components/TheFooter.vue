<template>
  <div class="footer">
    <p>&copy; {{ this.copyrightYear }} Fetlads</p>
    <p>Version <strong>{{ this.version }}</strong></p>
  </div>
</template>

<script>
import { version } from '@/common/version'

export default {
  name: "TheFooter",
  data: function() {
    return {
      copyrightYear: (new Date()).getFullYear(),
      version: version
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.footer {
  font-size: 0;
  padding: #{$padding * 2} $padding;
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

    font-size: 0.7rem;
    font-weight: 500;
    line-height: 1.3;
    margin: 0 0 #{$padding / 4} 0;
  }
}
</style>