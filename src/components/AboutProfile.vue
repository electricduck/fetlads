<template>
  <div class="about-profile">
    <div class="about-profile-image">
      <img :src="getAvatar(userAvatar)" />
    </div>
    <div class="about-profile-name">{{ userName }}</div>
    <div class="about-profile-stats">
      <span class="about-profile-stats-item">
        <font-awesome-icon icon="map-marker-alt" />
        <span>{{ userLocation }}</span>
      </span>
      <span class="about-profile-stats-item">
        <font-awesome-icon icon="birthday-cake" />
        <span>{{ userYear }}</span>
      </span>
      <span class="about-profile-stats-item">
        <font-awesome-icon icon="venus-mars" />
        <span>{{ userSexuality }}</span>
      </span>
      <span class="about-profile-stats-item">
        <font-awesome-icon icon="arrows-alt-v" />
        <span>{{ userRole }}</span>
      </span>
    </div>
    <div class="about-profile-about">
      <slot></slot>
    </div>
    <div class="about-profile-contact">
      <a
        v-for="contact in userContact"
        :key="contact.service"
        :href="getContactButtonLink(contact.service, contact.username)"
        class="button about-profile-contact-button"
        :class="'about-profile-contact-button--' + contact.service.toLowerCase()"
        target="_blank"
      >
        <font-awesome-icon :icon="getContactButtonIcon(contact.service)" />
        &nbsp;{{ contact.service }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutProfile",
  props: {
    userAvatar: String,
    userContact: Array,
    userLocation: String,
    userName: String,
    userRole: String,
    userSexuality: String,
    userYear: String
  },
  methods: {
    getAvatar(overrideAvatar) {
      if(overrideAvatar) {
        return overrideAvatar
      } else {
        return this.$var.file.avatar + this.userName.toLowerCase() + ".jpg"
      }
      //alert(overrideAvatar)
    },
    getContactButtonIcon(service) {
      switch (service.toLowerCase()) {
        case "email":
          return ['fas', 'at'];
        case "telegram":
          return ['fab', 'telegram-plane'];
        default:
          return ['fab', service.toLowerCase()];
      }
    },
    getContactButtonLink(service, username) {
      var link;
      switch (service.toLowerCase()) {
        case "email":
          link = "mailto:";
          break;
        case "facebook":
          link = "https://www.facebook.com/";
          break;
        case "github":
          link = "https://github.com/";
          break;
        case "flickr":
          link = "https://flickr.com/photos/";
          break;
        case "instagram":
          link = "https://www.instagram.com/";
          break;
        case "reddit":
          link = "https://www.reddit.com/user/";
          break;
        case "snapchat":
          link = "https://www.snapchat.com/add/";
          break;
        case "telegram":
          link = "https://t.me/";
          break;
        case "twitter":
          link = "https://twitter.com/";
          break;
        case "whatsapp":
          link = "https://api.whatsapp.com/send?text=&phone="
          break;
      }
      return link + username;
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/_mixins.scss";
@import "@/scss/_variables.scss";

.about-profile {
  $image-width: 125px;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto auto 1fr;
  margin-bottom: #{$padding * 3};

  color: var(--body-fg-color);

  &:first-of-type {
    margin-top: #{$padding * 3};
  }

  &:last-of-type {
    margin-bottom: #{$padding * 3};
  }

  @include respond-to(mobile) {
    grid-template-rows: auto auto 1fr auto;
  }

  .about-profile-image {
    grid-column: 1;
    grid-row-start: 1;
    grid-row-end: 5;
    padding-right: #{$padding * 1.5};

    @include respond-to(mobile) {
      grid-row-end: 4;
    }

    img {
      border-radius: $radius;
      height: $image-width;
      object-fit: cover;
      width: $image-width;

      box-shadow: var(--light-shadow);
    }
  }

  .about-profile-name {
    font-size: 2rem;
    font-weight: 700;
    grid-column: 2;
    grid-row: 1;
    line-height: 1;

    color: var(--accent-color);

    @include respond-to(mobile) {
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }

  .about-profile-stats {
    font-size: 0.85rem;
    font-weight: 500;
    grid-column: 2;
    grid-row: 2;
    line-height: 1;
    padding-top: $padding;

    @include respond-to(mobile) {
      grid-column: 1;
      grid-row-start: 1;
      grid-row-end: 4;
      padding-top: #{($padding * 2) + $image-width};

      .about-profile-stats-item {
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

    .about-profile-stats-item {
      border-right-style: solid;
      border-right-width: 1px;
      margin-right: $padding;
      opacity: 0.7;
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

  .about-profile-about {
    font-size: 0;
    grid-column: 2;
    grid-row: 3;
    padding: #{$padding * 1.5} 0;

    @include respond-to(mobile) {
      grid-row: 3;
      padding: $padding 0;
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

  .about-profile-contact {
    font-size: 0.9rem;
    grid-column: 2;
    grid-row: 4;

    @include respond-to(mobile) {
      display: grid;
      grid-column-start: 1;
      grid-column-end: 3;
      grid-column-gap: $padding;
      grid-row-gap: $padding;
      grid-template-columns: 1fr 1fr;
      padding-top: $padding;

      .about-profile-contact-button {
        box-sizing: border-box;
        margin-bottom: 0 !important;
        margin-right: 0 !important;
        text-align: center;
        width: 100%;
      }
    }

    .about-profile-contact-button {
      margin-bottom: $padding;
      margin-right: $padding;

      &.about-profile-contact-button--facebook {
        background-color: $facebook-brand-color !important;
        color: $facebook-brand-fg-color !important;
      }

      &.about-profile-contact-button--flickr {
        background-color: $flickr-brand-color !important;
        color: $flickr-brand-fg-color !important;
      }

      &.about-profile-contact-button--github {
        background-color: $github-brand-color !important;
        color: $github-brand-fg-color !important;
      }

      &.about-profile-contact-button--instagram {
        background-color: $instagram-brand-color !important;
        color: $instagram-brand-fg-color !important;
      }

      &.about-profile-contact-button--reddit {
        background-color: $reddit-brand-color !important;
        color: $reddit-brand-fg-color !important;
      }

      &.about-profile-contact-button--snapchat {
        background-color: $snapchat-brand-color !important;
        color: $snapchat-brand-fg-color !important;
      }

      &.about-profile-contact-button--telegram {
        background-color: $telegram-brand-color !important;
        color: $telegram-brand-fg-color !important;
      }

      &.about-profile-contact-button--twitter {
        background-color: $twitter-brand-color !important;
        color: $twitter-brand-fg-color !important;
      }

      &.about-profile-contact-button--whatsapp {
        background-color: $whatsapp-brand-color !important;
        color: $whatsapp-brand-fg-color !important;
      }
    }
  }
}
</style>