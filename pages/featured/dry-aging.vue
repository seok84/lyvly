<template>
    <div id="dry-aging" class="item-list-page inner">
        <h3 class="page-title">숙성고</h3>
        <div class="link-wrap">
            <nuxt-link to="/" class="link"><span>농협PB '한우거세'<br />상품 보러가기</span><i></i></nuxt-link>
            <nuxt-link to="/" class="link"><span>농협PB '한우암소'<br />상품 보러가기</span><i></i></nuxt-link>
            <nuxt-link to="/" class="link"><span>농협PB '한우암소'<br />상품 보러가기</span><i></i></nuxt-link>
        </div>
        <img src="~/static/images/notice/20230811.jpg" alt="">
        <item-category-list />
    </div>
</template>

<script>
export default {
    data() {

    },
    mounted() {

    },
    methods: {

    },
}
</script>
<style scoped>
@import url(~/assets/css/page/item.css);

#dry-aging img {
    margin-right: auto;
    margin-left: auto;
}

@media (max-width:1194px) {
    #dry-aging {
        padding-left: 0;
        padding-right: 0;
    }

}

@media (max-width:991px) {}

/* 태블릿 */
@media (max-width:768px) {
    .item-list-page.has-category .title-h2 {
        margin: 6rem 0 3rem;
    }
}

/* 모바일 */
@media (max-width:480px) {}
</style>
