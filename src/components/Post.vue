<template>
    <div class="post">
        <img class="post-content" src="https://placekitten.com/5000/2000" />
        <div class="post-actions-container">
            <div class="post-actions">
                <router-link to="/" class="post-actions-item post-actions-item--close">
                    <font-awesome-icon icon="times" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Post'
}
</script>

<style lang="scss">
    @import "@/scss/_variables.scss";

    .post {
        background-color: rgba(0,0,0,0.9);
        display: grid;
        grid-template-columns: 1fr auto 100px 1fr;
        grid-template-rows: 1fr auto 1fr;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;

        .post-content {
            border-radius: $radius;
            box-shadow: $heavy-shadow;
            grid-column-start: 2;
            grid-column-end: 4;
            grid-row: 2;
            max-height: 90vh;
            max-width: 90vw;
        }

        .post-actions-container {
            grid-column: 3;
            grid-row: 2;
            padding: $padding;
            text-align: right;

            .post-actions {
                background-color: lighten(black, 15%);
                border-radius: $radius;
                box-shadow: $light-shadow;
                display: inline-block;
                font-size: 30px;
                line-height: 1;
                opacity: 0.8;
                padding: $padding;
                text-align: center;
                transition: $transition;
                width: 30px;

                &:hover {
                    opacity: 1;

                    .post-actions-item {
                        &.post-actions-item--close {
                            color: red;
                        }
                    }
                }

                .post-actions-item {
                    display: block;
                    color: darken(white, 15%);
                }
            }
        }
    }
</style>