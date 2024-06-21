<template>
    <div class="item-thumbnail" :class="{ 'sold-out': item.soldOut }">

        <div class="item-thumbnail-area">
            <p class="top-left" v-if="item.rank != '' || null || undefined">{{ item.rank }}</p>
            <p class="top-right"><span><img :src="item.logo" alt="로고"></span></p>
            <p class="bottom-left real" v-if="item.imagesType">실제 이미지입니다</p>
            <p class="bottom-left default" v-else>대표 이미지입니다</p>
            <p class="bottom-right">
                <span v-if="cartFn">
                    <img src="~/assets/images/common/items/ico_cart.png" alt="장바구니">
                </span>
                <span v-if="expansionStatus" class="ico-expansion" @click="openSwiperModal">
                    <img src="~/assets/images/common/items/img_expansion.svg" alt="이미지 크게 보기">
                </span>
            </p>
        </div>
        <div class="sold-out-wrap">
            <span class="bottom-right">
                <img src="~/assets/images/common/items/sold_out.png" alt="품절">
            </span>
        </div>
        <nuxt-link to="/item/_id">
            <img class="thumbnail" :src="item.thumbnail" alt="썸네일">
        </nuxt-link>
    </div>
</template>
<script>
export default {
    props: {
        cartFn: {
            type: Boolean,
            default: false
        },
        expansionStatus:{
            type:Boolean,
            default: false
        },
        item: {
            type: Object,
            default: {
                rank: "",
                logo: require("~/assets/images/sample/img_logo_sample.png"),
                imagesType: Boolean,
                thumbnail: require("~/static/images/img_none_thumbnail.png"),
                soldOut: Boolean,
            }
        }
    },
    data: () => {
        return {}
    },
    mounted() { },
    methods: {
        openSwiperModal(){
            this.$emit('expansionModalShow');
            console.log(`this.$emit('expansionModalShow');`);
        }
    },

}
</script>
