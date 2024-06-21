<template>
    <div id="saleson">
        <nuxt />
        <layouts-alert></layouts-alert>
        <layouts-toast></layouts-toast>
    </div>
</template>
<script>
export default {
    head() {
        return {
            script: [
                { src: '~/assets/js/swiper.min.js' },

            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ]
        }
    },
    beforeMount() {
        
    }
}
</script>

