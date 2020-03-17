<template>
  <p class="about-user">
    <span class="about-user-image">
      <img :src="userAvatar" />
    </span>
    <span class="about-user-name">{{ userName }}</span>
    <span class="about-user-stats">
      <span class="about-user-stats-item">
        <font-awesome-icon icon="map-marker-alt" />
        <span>{{ userLocation }}</span>
      </span>
      <span class="about-user-stats-item">
        <font-awesome-icon icon="birthday-cake" />
        <span>{{ userYear }}</span>
      </span>
      <span class="about-user-stats-item">
        <font-awesome-icon icon="venus-mars" />
        <span>{{ userSexuality }}</span>
      </span>
      <span class="about-user-stats-item">
        <font-awesome-icon icon="arrows-alt-v" />
        <span>{{ userRole }}</span>
      </span>
    </span>
    <span class="about-user-about">
      <slot></slot>
    </span>
  </p>
</template>

<script>
export default {
  name: "AboutUser",
  props: {
    userAvatar: String,
    userLocation: String,
    userName: String,
    userRole: String,
    userSexuality: String,
    userYear: String
  }
};
</script>

<style lang="scss">
@import "@/scss/_mixins.scss";
@import "@/scss/_variables.scss";

.about-user {
  $image-width: 125px;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto 1fr;

  .about-user-image {
    grid-column: 1;
    grid-row-start: 1;
    grid-row-end: 4;
    padding-right: #{$padding * 1.5};

    img {
      height: $image-width;
      object-fit: cover;
      width: $image-width;
    }
  }

  .about-user-name {
    font-size: 2rem;
    font-weight: 700;
    grid-column: 2;
    grid-row: 1;
    line-height: 1;
    padding-bottom: #{$padding};

    @include respond-to(mobile) {
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }

  .about-user-stats {
    font-size: 0.85rem;
    font-weight: 500;
    grid-column: 2;
    grid-row: 2;
    line-height: 1;
    padding-bottom: #{$padding * 1.4};

    @include respond-to(mobile) {
      grid-column: 1;
      grid-row-start: 1;
      grid-row-end: 4;
      margin-top: #{($padding * 1.5) + $image-width};

      .about-user-stats-item {
        border-right-width: 0 !important;
        display: block;
        margin-right: 0 !important;
        padding-bottom: $padding;
        padding-right: 0 !important;

        .svg-inline--fa {
          width: 1.25em;
        }
      }
    }

    .about-user-stats-item {
      border-right-style: solid;
      border-right-width: 1px;
      margin-right: $padding;
      padding-right: $padding;

      border-right-color: var(--separator-color);

      &:last-of-type {
        border-right-width: 0;
        margin-right: 0;
        padding-right: 0;
      }

      .svg-inline--fa {
        margin-right: #{$padding / 1.4};
        opacity: 0.7;
      }
    }
  }

  .about-user-about {
    font-size: 0;
    grid-column: 2;
    grid-row: 3;

    @include respond-to(mobile) {
      grid-row: 3;
    }

    p {
      font-size: 0.9rem !important;
      line-height: inherit !important;
      margin: 0 0 #{$padding / 1.3} 0 !important;

      &:last-of-type {
        margin-bottom: 0 !important;
      }
    }
  }
}
</style>