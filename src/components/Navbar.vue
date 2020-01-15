<template>
    <div class="navbar-container">
        <div class="navbar"
            :class="{ 'navbar--invert' : this.$route.name === 'Home_Post' }">
            <div class="navbar-menu">
                <font-awesome-icon icon="bars" />
            </div>
            <router-link to="/" class="navbar-logo no-transition">
                Fetlads
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    @import "@/scss/_variables.scss";

    .navbar {
        border-radius: 0 0 $radius $radius;
        box-shadow: $heavy-shadow;
        box-sizing: border-box;
        color: $accent-color;
        display: grid;
        font-size: 2rem;
        grid-template-columns: auto auto;
        line-height: 1;
        padding: $padding ($padding * 2) 0 ($padding * 2);
        transition: $transition;
        width: 100%;

        /*&.navbar--invert {
            background-color: $bg-color;
            color: $accent-color;
        }*/

        .navbar-menu {
            font-size: 1.7rem;
            grid-column: 1;
            padding-right: $padding;
            padding-top: 2px;
        }
    
        .navbar-logo {
            color: inherit;
            font-weight: 700;
            grid-column: 2;
            letter-spacing: 1px;
            text-decoration: none;
            text-transform: uppercase;
        }
    }
</style>