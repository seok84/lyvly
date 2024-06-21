<template>
    <div class="float-container" ref="floatContainer">
        <div class="float-aside flex-column">
            <div class="pc-type flex-column">
                <nuxt-link to="/mypage">마이페이지</nuxt-link>
                <nuxt-link to="/">장바구니</nuxt-link>
                <nuxt-link to="/mypage/suggest">문의하기</nuxt-link>
                <nuxt-link to="/">지정거래</nuxt-link>
                <div class="recent-item">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <div v-for="(image, index) in recentSwiperItemView" :key="index" class="swiper-slide">
                                <img :src="require(`@/static/images/${image}.png`)" :alt="altText" />
                            </div>
                        </div>
                    </div>
                    <div class="swiper-controller">
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
                <div class="code">
                    <img src="~/assets/images/common/layout/img_code.png" alt="도매몰 앱 다운 받기">
                    <span>도매몰 앱<br />다운받기</span>
                </div>
            </div>
            <nuxt-link to="/" class="btn-kakao btn-float">
                <img src="~/assets/images/common/mobile/ico_float_kakao.png" alt="카카오톡 상담하기">
                <span>상담하기</span>
            </nuxt-link>
            <div class="btn-top  btn-float" @click="scrollToTop()">
                <div class="pc-type">
                    <img src="~/assets/images/common/ico_arr_top.svg" alt="맨위로 이동">
                </div>
                <div class="mobile-type">
                    <img src="~/assets/images/common/mobile/ico_float_arrow.png" alt="맨위로 이동">
                    <span>TOP</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
SwiperCore.use([Navigation, Pagination]);


export default {
    name: 'FloatingMenu',
    setup() {
        return {
            modules: [Navigation, Pagination],
        };
    },
    data() {
        return {
            recentItemSwiper: null,
            recentSwiperItemView: [],
            altText: "최근 본 상품"
        }
    },
    beforeMount() {
        this.addImagesToImageArray();

        /*
        const headerH = document.querySelector("header").getBoundingClientRect().bottom
        const floatContainer = document.querySelector(".float-container")
        const floatContainerTop = document.querySelector(".float-container").getBoundingClientRect().top / 2 - 30

        if ( headerH > floatContainerTop ) {
            floatContainer.classList.add('offset-top')
            floatContainer.style.top = ((headerH*2 + 60)/10) + 'rem'
        } */

    },
    mounted() {
        this.setFloatSwiper();
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);

    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        setFloatSwiper() {
            this.recentItemSwiper = new Swiper(".recent-item .swiper", {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: ".recent-item .swiper-pagination",
                    clickable: true,
                    type: 'fraction',
                    formatFractionCurrent(number) {
                        return number;
                    },
                    formatFractionTotal(number) {
                        return number;
                    },
                    renderFraction(currentClass, totalClass) {
                        return '<span style="color:#757575;" class="' + currentClass + '"></span>' +
                            ' / ' +
                            '<span class="' + totalClass + '"></span>';
                    }
                },
                navigation: {
                    prevEl: ".recent-item .swiper-button-prev",
                    nextEl: ".recent-item .swiper-button-next",
                },
            });
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        addImagesToImageArray() {
            const newImages = [
                "img_item_sample_01",
                "img_item_sample_02",
                "img_test_sample_00"
            ];

            this.recentSwiperItemView = this.recentSwiperItemView.concat(newImages);
        },
        handleScroll() {
            const floatContainer = this.$refs.floatContainer
            const headerH = document.querySelector("header").offsetHeight
            const footerTop = document.querySelector("footer").getBoundingClientRect().top
            const footerH = document.querySelector("footer").offsetHeight
            const contentH = document.querySelector("#saleson").offsetHeight - headerH - footerH - 888

            let windowWidth = window.outerWidth;
            let windowHeight = window.outerHeight;

            if (document.querySelector("header").dataset.root) {
                if (window.scrollY > headerH) { floatContainer.classList.add("main") }
                else { floatContainer.classList.remove("main") }

            } else {
                floatContainer.classList.remove("main")
                if (windowWidth > 1600 && windowHeight > 900) {

                    if (window.scrollY > contentH) {
                        floatContainer.classList.add('offset')
                        floatContainer.style.top = (contentH + headerH + footerH) / 10 + 'rem'
                    }
                    else {
                        floatContainer.classList.remove('offset')
                        floatContainer.style.top = null
                    }
                }
            }

        },
        handleResize() {
            const floatContainer = this.$refs.floatContainer
            if (window.innerWidth > 1440) {
                floatContainer.classList.remove('offset')
                floatContainer.style.top = null
            }
        },


    },
}
</script>
<style >
.float-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(59.7rem, -50%);
    z-index: 12;
    transition: all 0.5s ease-in;
}

.float-container.offset-top {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.float-container.offset {
    position: absolute;
}

.float-container .float-aside {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(calc(100% + 20px), -50%);
}

.float-container .flex-column,
.float-container .btn-float {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.float-container .float-aside .pc-type a {
    width: 8.3rem;
    line-height: 4.3rem;
    margin-bottom: 1rem;
    border: 1px solid #e1e1e1;
    border-radius: 1rem 1rem 0 1rem;
    background-color: #fff;
    font-size: 1.4rem;
    text-align: center;
    color: #757575;
}

.float-container .float-aside .pc-type a:nth-child(3) {
    background-color: #ffde00;
}

.float-container .float-aside .pc-type a:hover {
    color: #fff;
    background-color: #000;
}

.float-container .recent-item {
    position: relative;
    width: 8.3rem;
    overflow: hidden;
}

.float-container .recent-item .swiper {
    width: 8.3rem;
    height: 8.3rem;
    border: 1px solid #e1e1e1;
    background: url("~/static/images/img_none_thumbnail_small.png") no-repeat center / cover;
    box-sizing: border-box;
    border-radius: 1rem;
    overflow: hidden;
}

.float-container .recent-item .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: #fff;
}

.float-container .recent-item .swiper-controller {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.9rem 0 2rem;
    font-size: 1.3rem;
}

.float-container .recent-item .swiper-controller div[class^="swiper-"] {
    position: relative;
    top: unset;
    right: unset;
    bottom: unset;
    left: unset;
    margin: 0;
    padding: 0;
}

.float-container .recent-item .swiper-controller div[class^="swiper-button"] {
    width: 2.7rem;
    height: 2.7rem;
    border: 1px solid #eee;
    border-radius: 100%;
    overflow: hidden;
}

.float-container .recent-item .swiper-controller div[class^="swiper-button"]::after {
    display: none;
}

.float-container .recent-item .swiper-controller div.swiper-pagination {
    flex: none;
    width: auto;
    margin: 0 .6rem;
    color: #e1e1e1;
}

.float-container .recent-item .swiper-button-prev {
    background: #fff url('~//assets/images/common/arrow/ico_arr_prev_gray.png') no-repeat 45% center / auto 9px;
}

.float-container .recent-item .swiper-button-next {
    background: #fff url('~//assets/images/common/arrow/ico_arr_next_gray.png') no-repeat 55% center /auto 9px;
}

.float-container .float-aside .code {
    width: 8.3rem;
    margin-bottom: 2rem;
    padding: 1rem 0.5rem 2rem;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 1rem;
    overflow: hidden;
    text-align: center;
}

.float-container .float-aside .code span {
    font-size: 1.3rem;
    font-weight: 600;
    padding-top: .5rem;
    display: block;
}

.float-container .btn-float {
    width: 5.3rem;
    height: 5.3rem;
    border-radius: 100%;
    overflow: hidden;
    cursor: pointer;
    transition: all .3s ease-in-out;
}

.float-container .btn-kakao.btn-float {
    display: none;
}

.float-container .btn-top.btn-float {
    display: inline-flex;
    border: 1px solid #eee;
    background-color: #fff;
}

.float-container .btn-top .pc-type img {
    width: 2rem;
    margin: 0 auto;
}

.float-container .mobile-type {
    display: none;
}

@media (min-width: 1601px) and (min-height:901px) {
    header[data-page="main"]~.float-container,
    header[data-page="index"]~.float-container {
        top: 70rem;
        transform: translate(59.7rem, 0);
    }

    header[data-page="main"]~.float-container.main,
    header[data-page="index"]~.float-container.main {
        top: 50%;
        transform: translate(59.7rem, -50%);
    }

    header[data-page="main"]~.float-container.offset,
    header[data-page="index"]~.float-container.offset {
        bottom: unset;
        transform: translate(59.7rem, -50%);
    }

    header[data-page="main"]~.float-container:not(.offset) .float-aside,
    header[data-page="index"]~.float-container:not(.offset) .float-aside {
        top: 0;
        transform: translate(calc(100% + 20px), -10%);
    }

    header[data-page="main"]~.float-container.main .float-aside,
    header[data-page="index"]~.float-container.main .float-aside{
        transform: translate(calc(100% + 20px), -55%);
    }
}

@media all and (max-height:900px),
(max-width:1600px) {
    .float-container .pc-type {
        display: none;
    }

    .float-container .mobile-type {
        display: block;
    }

    .float-container {
        top: unset;
        left: unset;
        bottom: 0;
        right: 0;
        transform: none;
    }

    .float-container .float-aside {
        top: unset;
        bottom: 2rem;
        right: 1.6rem;
        transform: none;
    }

    .float-container .btn-float {
        width: 6rem;
        height: 6rem;
    }

    .float-container .btn-float span {
        font-size: inherit;
    }

    .float-container .btn-kakao.btn-float {
        display: inline-flex;
        font-size: 1.1rem;
        background-color: #ffde00;
        box-shadow: 0 0 10px 0 rgba(123, 123, 123, 0.1);
        margin: 0 0 1.6rem;
    }

    .float-container .btn-top.btn-float {
        font-size: 1.2rem;
        text-align: center;
    }

    .float-container .btn-kakao img {
        width: 2.7rem;
        height: auto;
        margin: 0 auto 3px;
    }

    .float-container .btn-top img {
        width: 1.9rem;
        height: auto;
        margin: 0 auto 6px;
    }
}

@media (max-width: 767px) {

    .float-container .float-aside {
        top: unset;
        bottom: 90px;
        right: 1.2rem;
        transform: none;
    }

    .float-container .item-list-page.has-category~.float-container {
        bottom: 0;
    }

    .item-list-page.has-category~.float-container,
    #item-detail-view~.float-container,
    #dry-aging~.float-container,
    .cart~.float-container,
    .order-step1~.float-container {
        display: none;
    }


}
</style>
