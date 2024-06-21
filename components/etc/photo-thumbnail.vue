<template>
    <div class="expanding-photo">
        <!-- <ul class="thumbnail-area" @click="openThumbSwiper()">
            <li class="thumbnail" v-for="(image, index) in thumbList" :key="'img_' + index">
                <img :src="require(`@/static/images/${image.imgSrc}.png`)" :alt="'img_' + index">
            </li>
        </ul> -->
        <span class="close" @click="openThumbSwiper()"></span>

        <div class="user-thumbnail-swiper" :class="{ 'active': activeThumbSwiper }">
            <!-- :class="{ 'active': activeThumbSwiper }" -->
            <div class="swiper-wrapper">
                <div v-for="(image, index) of thumbList" :key="'thumbnail_' + index" class="swiper-slide">
                    <img :src="require(`@/static/images/${image.imgSrc}.png`)" :alt="'img_' + index">
                </div>
            </div>
            <div class="swiper-button-wrap">
                <div class="swiper-button swiper-button-prev"><i class="icon"></i></div>
                <div class="swiper-button swiper-button-next"><i class="icon"></i></div>
            </div>

        </div>
    </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper/core";
SwiperCore.use([Navigation, Pagination, Scrollbar]);

export default {
    name: 'expanding-photo',
    props: {
        thumbList: Array,
        activeThumbSwiper: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            thumbSwiper: null,
        }
    },
    watch: {
        activeThumbSwiper(newValue) {
            if (newValue) {
                this.$nextTick(() => {
                    this.initSwiper();
                });
            }
        },
    },
    methods: {
        openThumbSwiper() {
            this.$emit('openSwiper');
        },
        initSwiper() {
            this.thumbSwiper = new Swiper(".user-thumbnail-swiper", {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 0,
                navigation: {
                    nextEl: ".user-thumbnail-swiper .swiper-button-next",
                    prevEl: ".user-thumbnail-swiper .swiper-button-prev",
                },
            });
        },
        destroySwiper() {
            if (this.thumbSwiper) {
                console.log(this.thumbSwiper)
                this.thumbSwiper.destroy();
                this.thumbSwiper = null;
            }
        },
    },
}
</script>
<style scoped>
@media (max-width: 767px) {
    .thumbnail-area li {
        width: calc((100vw - 5.8rem) / 4);
        height: calc((100vw - 5.8rem) / 4);
    }

    .thumbnail-area li img {
        width: 100%;
    }
}
</style>