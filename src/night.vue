<template>
    <div class="vnight-label" v-night
     :class="[isNight ? 'night' : 'daytime']"
     @click="switchNight">
        <i class="icon off"></i>
    </div>
</template>

<style lang="css">
    @font-face {
        font-family: 'icomoon';
        src:  url('./fonts/icomoon.eot?axij8m');
        src:  url('./fonts/icomoon.eot?axij8m#iefix') format('embedded-opentype'),
        url('./fonts/icomoon.ttf?axij8m') format('truetype'),
        url('./fonts/icomoon.woff?axij8m') format('woff'),
        url('./fonts/icomoon.svg?axij8m#icomoon') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    i.icon {
        /* use !important to prevent issues with browser extensions that change fonts */
        font-family: 'icomoon' !important;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;

        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .icon.off:before {
        content: "\f011";
    }

    .vnight-label {
        position: absolute;
        right: 0;
        top: 0;

        width: 4em;
        height: 4em;

        background: linear-gradient(45deg, transparent 50%, #e8e8e8 0);
    }

    .vnight-label .icon {
        cursor: default;

        position: relative;
        top: .667em;
        left: 2em;

        margin: 0;

        font-size: 1.2em;
    }

    .vnight-label.night {
        color: #f8f8ff;
        background: linear-gradient(45deg, transparent 50%, #2f3f3f 0);
        text-shadow: 1px 0 2px;
    }

    .vnight-label.daytime {
        color: rgba(0, 0, 0, .6);
    }
</style>

<script>
    module.exports = {
        name: 'night-switch',

        created() {
             console.log('component night-switch created !');
        },

        data: function() {
            return {
                isNight: false
            };
        },
        methods: {
            switchNight: function() {
                this.isNight = !this.isNight;
            }
        }
    }
</script>