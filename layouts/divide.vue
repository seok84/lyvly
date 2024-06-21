<template>
    <div id="saleson">
        <layouts-header></layouts-header>
        <div class="divide-page">
            <layouts-lnb-mypage class="divide-lnb mypage-lnb" />
            <layouts-lnb-customer class="divide-lnb customer-lnb" />
            <nuxt class="divide-content" />
        </div>
        <layouts-footer></layouts-footer>
        <layouts-alert></layouts-alert>
        <layouts-toast></layouts-toast>
        <layouts-float-menu></layouts-float-menu>
    </div>
</template>
<script>

export default {
    async fetch() {
        try {
            let path = this.$route.path;
            let data = await this.$axios.$get('/api/seo?u=' + encodeURIComponent(path));
            let seo = data.seo;

            if (typeof seo != 'undefined' && seo != null) {
                this.$store.commit('seo', seo);
            }
        } catch (e) { }
    },

    head() {
        const seo = this.$store.state.seo;

        let meta = [];

        meta.push({ charset: 'utf-8' });
        meta.push({ hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' });
        meta.push({ hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' });

        if (typeof seo != 'undefined' && seo != null && 'N' != seo.indexFlag) {
            meta.push({ hid: 'description', name: 'description', content: seo.description });
            meta.push({ hid: 'keywords', name: 'keywords', content: seo.keywords });
        } else {
            meta.push({ hid: 'robots', name: 'robots', content: 'noindex,noarchive' });
        }

        return {
            title: seo.title,
            titleTemplate: '%s - 농협 라이블리 도매몰',
            meta: meta,
            // script: [
            //     { src: '~/assets/js/swiper.min.js' },
            // ],
            // link: [
            //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            //     { rel: 'stylesheet', href: '~/assets/css/swiper.min.css' },
            //     { rel: 'stylesheet', href: '~/assets/css/reset.css' },
            //     { rel: 'stylesheet', href: '~/assets/css/common.css' },
            // ]
        }
    },
    beforeMount() {
        this.$saleson.initVueModule(this);
        this.$saleson.init();
    },
    mounted() { }
}
</script>
<style>
@import url('~/assets/css/swiper.min.css');
@import url('~/assets/css/reset.css');
@import url('~/assets/css/common.css');
@import url('~/assets/css/page/mypage.css');
@import url('~/assets/css/page/customer.css');

.divide-page {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 119.4rem;
    width: 100%;
    margin: 0 auto;
}

.divide-page .divide-lnb,
.divide-lnb {
    width: 27.6rem;
    margin-right: 3rem;
    /* display: inline-flex; */
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    display: none;
}

.divide-content {
    flex: 1;
}

header[data-root="mypage"]+.divide-page .divide-lnb.mypage-lnb,
header[data-root="customer"]+.divide-page .divide-lnb.customer-lnb {
    display: inline-flex;
}

/* 노트북 */
@media (max-width: 1194px) {
    .divide-page {
        padding-left: 1.6rem;
        padding-right: 1.6rem;
        max-width: 100%;
    }
}

/* 태블릿 */
@media (max-width: 768px) {
    .divide-page {
        padding-left: 0;
        padding-right: 0;
    }
}

/* 모바일 */
@media (max-width: 480px) {}
</style>



