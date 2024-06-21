<template>
    <div class="modal image-modal swiper-modal" :class="{ 'show': modalShow }" v-show="modalShow">
        <div class="modal-wrap shadow">
            <div class="modal-body">
                <p class="image-type real" v-if="imagesType">실제 이미지입니다</p>
                <p class="image-type default" v-else>대표 이미지입니다</p>
                <div class="swiper modal-slider">
                    <div class="swiper-button-wrap">
                        <div class="swiper-button swiper-button-prev">
                            <img src="~/assets/images/common/arrow/ico_arr_swiper.svg" alt="이전으로">
                        </div>
                        <div class="swiper-button swiper-button-next">
                            <img src="~/assets/images/common/arrow/ico_arr_swiper.svg" alt="다음으로">
                        </div>
                    </div>
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(slide, index) in swiperSlides" :key="index">
                            <img :src="slide.imgPath" :alt="slide.altText">
                        </div>
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="modal-footer" v-if="swiperModal.footer">
                <!-- <span class="close" @click="unfixedModal()">오늘 하루 안 보기</span> -->
                <span class="close" @click="unfixedModal()">닫기</span>
            </div>
            <span class="modal-close black" @click="unfixedModal()">
                닫기
            </span>
        </div>
        <div class="dimmed-bg" v-if="swiperModal.dimmed" @click="unfixedModal()"></div>
    </div>
</template>
  
<script>
import Swiper from 'swiper';
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
SwiperCore.use([Pagination, Autoplay]);
export default {
    name: "swiperModal",
    props: {
        swiperModal: {
            type: Object,
            default: () => ({
                // modalShow: false,
                footer: false,
                dimmed: true,
            }),
        },
        modalShow: {
            type: Boolean,
            default: false,
        },
        swiperSlides: {
            type: Array,
            default: () => [],
        },
        imgPath: {
            type: String,
            required: true
        },
        altText: String,
        imagesType: {
            type: Boolean,
            default: true,
        },
    },


    methods: {
        unfixedModal() {
            this.$emit('modalClose')
        }
    },
    mounted() {
    },
    watch: {
        modalShow(value) {
            if (value == true) {
                document.body.classList.add('overflow-hidden')
                this.swiperSlider = new Swiper('.modal-slider.swiper', {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 0,
                    loop: true,
                    speed: 300,
                    pagination: {
                        el: ".swiper-modal  .swiper-pagination",
                        type: "fraction",
                        formatFractionCurrent: function (number) {
                            return ("0" + number).slice(-2);
                        },
                        formatFractionTotal: function (number) {
                            return ("0" + number).slice(-2);
                        },
                        renderFraction: function (currentClass, totalClass) {
                            return '<span class="' + currentClass + '"></span>' + "&nbsp;/&nbsp;" + '<span class="' + totalClass + '"></span>';
                        },
                    },
                    navigation: {
                        nextEl: " .swiper-modal .swiper-button-next",
                        prevEl: " .swiper-modal .swiper-button-prev",
                    },
                    grabCursor: true,
                    observer: true,
                    observeParents: true,
                })
            } else {
                document.body.classList.remove('overflow-hidden')
                this.swiperSlider.destroy();
            }
        }
    },

};
</script>
<style>
@import url('~/assets/css/component/modal-style.css');
</style>
