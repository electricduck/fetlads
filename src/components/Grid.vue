<template>
    <div class="grid"
        v-masonry
        transition-duration="0.5s"
        item-selector=".grid-item">
        <router-link class="grid-item"
            v-masonry-tile
            to="/id/test">
            <img class="grid-item-image" src="https://placekitten.com/520/500" />
        </router-link>

        <router-link class="grid-item"
            v-masonry-tile
            to="/id/test">
            <img class="grid-item-image" src="https://placekitten.com/500/500" />
        </router-link>
        <router-link class="grid-item"
            v-masonry-tile
            to="/id/test">
            <img class="grid-item-image" src="https://placekitten.com/500/300" />
        </router-link>
        <router-link class="grid-item"
            v-masonry-tile
            to="/id/test">
            <img class="grid-item-image" src="https://placekitten.com/600/500" />
        </router-link>
        <router-link class="grid-item"
            v-masonry-tile
            to="/id/test">
            <img class="grid-item-image" src="https://placekitten.com/500/500" />
        </router-link>
        <router-link class="grid-item"
            v-masonry-tile
            to="/id/test">
            <img class="grid-item-image" src="https://placekitten.com/900/500" />
        </router-link>
        <router-link class="grid-item"
            v-masonry-tile
            to="/id/test">
            <img class="grid-item-image" src="https://placekitten.com/500/900" />
        </router-link>
        <router-link class="grid-item"
            v-masonry-tile
            to="/id/test">
            <img class="grid-item-image" src="https://placekitten.com/500/500" />
        </router-link>
        <router-link class="grid-item"
            v-masonry-tile
            to="/id/test">
            <img class="grid-item-image" src="https://placekitten.com/500/500" />
        </router-link>
        <router-link class="grid-item"
            v-masonry-tile
            to="/id/test">
            <img class="grid-item-image" src="https://placekitten.com/500/500" />
        </router-link>
        <router-link class="grid-item"
            v-masonry-tile
            to="/id/test">
            <img class="grid-item-image" src="https://placekitten.com/500/500" />
        </router-link>
        <router-link class="grid-item"
            v-masonry-tile
            to="/id/test">
            <img class="grid-item-image" src="https://placekitten.com/500/500" />
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Grid'
}
</script>

<style lang="scss">
    @import "@/scss/_variables.scss";

    .grid {
        font-size: 0;
        line-height: 0;
        margin: $padding;

        .grid-item {
            border-radius: $radius;
            box-shadow: $light-shadow;
            box-sizing: border-box;
            margin: $padding;
            overflow: hidden;
            width: calc((100% / #{$grid-amount-desktop}) - #{$padding * 2});

            .grid-item-image {
                width: 100%;
            }
        }
    }
</style>