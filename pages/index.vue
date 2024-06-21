<template>
    <div>
        <h1 class="hidden">메인화면</h1>
        <div class="main-visual-wrap" ref="mainVisual">
            <section class="main-visual">
                <div class="main-swiper pc">
                    <div class="swiper-wrapper">
                        <div v-for="(mainPCSwiperItem, mainSwiperIndex) of mainPCSwiperItems" :key="mainSwiperIndex"
                            class="swiper-slide">
                            <nuxt-link :to="mainPCSwiperItem.link">
                                <img :src="mainPCSwiperItem.imgSrc" alt="pc-banner" />
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="swiper-control">
                        <div class="pagenation-wrap">
                            <div class="swiper-pagination"></div>
                            <a @click="whiteModal.modalShow = true">전체보기</a>
                        </div>
                        <span class="swiper-pause" @click.prevent="autoplaySlide($event)">Pause</span>
                        <div class="swiper-button-wrap">
                            <div class="swiper-button swiper-button-prev"><i class="icon"></i></div>
                            <div class="swiper-button swiper-button-next"><i class="icon"></i></div>
                        </div>
                    </div>

                    <modal-default :modalInfo="whiteModal.modalInfo" :modalShow="whiteModal.modalShow"
                        @modalClose="whiteModal.modalShow = false" class="visual-banner-modal">
                        <div class="modal-content">
                            <div v-for="(mainPCSwiperItem, mainSwiperIndex) of mainPCSwiperItems">
                                <nuxt-link :to="mainPCSwiperItem.link" class="modal-image">
                                    <img :src="mainPCSwiperItem.imgSrc" alt="pc-banner" />
                                </nuxt-link>
                            </div>
                        </div>
                    </modal-default>

                </div>
                <div class="main-swiper mobile">
                    <div class="swiper-wrapper">
                        <div v-for="(mainMobileSwiperItem, mainSwiperIndex) of mainMobileSwiperItems" :key="mainSwiperIndex"
                            class="swiper-slide">
                            <nuxt-link :to="mainMobileSwiperItem.link">
                                <img :src="mainMobileSwiperItem.imgSrcMobile" alt="mobile-banner" />
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="swiper-control">
                        <div class="pagenation-wrap">
                            <div class="swiper-pagination"></div>
                            <a @click="whiteModalMobile.modalShow = true">전체보기</a>
                        </div>
                        <span class="swiper-pause" @click.prevent="autoplaySlide($event)">Pause</span>
                        <div class="swiper-button-wrap">
                            <div class="swiper-button swiper-button-prev"><i class="icon"></i></div>
                            <div class="swiper-button swiper-button-next"><i class="icon"></i></div>
                        </div>
                    </div>

                    <modal-default :modalInfo="whiteModalMobile.modalInfo" :modalShow="whiteModalMobile.modalShow"
                        @modalClose="whiteModalMobile.modalShow = false" class="visual-banner-modal">
                        <div class="modal-content">
                            <div v-for="(mainMobileSwiperItem, mainSwiperIndex) of mainMobileSwiperItems">
                                <nuxt-link :to="mainMobileSwiperItem.link" class="modal-image">
                                    <img :src="mainMobileSwiperItem.imgSrcMobile" alt="mobile-banner" />
                                </nuxt-link>
                            </div>
                        </div>
                    </modal-default>

                </div>
            </section>
        </div>

        <section class="mobile main-gnb" :class="{ 'fixed-top': scrolledWindow }"
            :style="{ 'padding-bottom': scrolledWindow ? mobileMainGnbHeight + 'px' : '0' }" ref="mobileMainGnb">
            <layouts-gnb />
        </section>

        <section class="main-quick-brand">
            <h2 class="title-h2">즐겨찾는 브랜드</h2>
            <ul class="tabs">
                <li v-for="( quickmenuTabItem, index ) in  quickmenuTabItems "
                    :class="[index === quickmenuTabIndex ? 'active' : '']" @click="tabActiveQuickmenu(index)" :key="index">
                    <span class="text">
                        {{ quickmenuTabItem }}
                    </span>
                </li>
            </ul>
            <ul class="tab-contents">
                <li>
                    <nuxt-link to="/"><span class="ico"><img src="~/assets/images/sample/img_brand_sample_01.png"
                                alt="" /></span>
                        <span class="text">과연미트</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/"><span class="ico"><img src="~/assets/images/sample/img_brand_sample_02.png"
                                alt="" /></span>
                        <span class="text">대신육가공</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/"><span class="ico"><img src="~/assets/images/sample/img_brand_sample_03.png"
                                alt="" /></span>
                        <span class="text">한우지예</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/"><span class="ico"><img src="~/assets/images/sample/img_brand_sample_04.png"
                                alt="" /></span>
                        <span class="text">지리산순한한우</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/"><span class="ico"><img src="~/assets/images/sample/img_brand_sample_05.png"
                                alt="" /></span>
                        <span class="text">한우비상</span>
                    </nuxt-link>
                </li>
            </ul>
        </section>

        <section class="main-AD-section">
            <div class="inner">
                <nuxt-link to="/" class="pc"><img src="~/static/images/banner/img_user_banner_pc.png"
                        alt="pc-banner"></nuxt-link>
                <nuxt-link to="/" class="mobile"><img src="~/static/images/banner/img_user_banner_mc.png"
                        alt="mobile-banner"></nuxt-link>
            </div>
        </section>

        <!-- MD추천 -->
        <section class="main-MD-commend">
            <h2 class="title-h2">MD추천</h2>
            <ul class="tab-menu">
                <li v-for="( item, index ) in  menuItems " :key="'menu_' + index"
                    :class="{ active: activeIndex === index }">
                    <div class="tab-item" @click="setActive(index)">
                        <span :class="item.iconClass">{{ item.iconText }}</span><span>{{ item.text }}</span>
                    </div>
                </li>
            </ul>
            <div class="item-list-container default" :class="{ show: moreBtn }">
                <item-list class="item-list sm-badge" :items="items" :cartFn="cartFn" :thumbnail="items"
                    :expansionStatus="expansionStatus" :processModal="processModal" />
            </div>
            <button class="btn-more" @click="moreBtn = !moreBtn" :class="{ show: moreBtn }">
                <span>상품 더보기</span>
            </button>
        </section>

        <!-- 공지사항 -->
        <section class="customer-notice">
            <layouts-main-customer />
            <!-- 대체 예정 -->
        </section>

        <!-- 이력번호 팝업 -->
        <modal-process :processModal="processModal" @modalClose="processModal.modalShow = false" />

        <!-- 20231031 -->
        <modal-image-modal :imageModal="imageModal" @modalClose="imageModal.modalShow = true" class="renewal-modal">
            <nuxt-link to="/user/join"> <img src="~/assets/images/sample/renewal_20231031.png" alt=""></nuxt-link>
            <div class="modal-footer">
                <span class="close">오늘 하루 안 보기</span>
                <span class="close" @click="imageModal.modalShow = false">닫기</span>
            </div>
        </modal-image-modal>
        <!-- 20231218 -->
        <modal-swiper-modal :modalInfo="swiperModal.modalInfo" :modalShow="swiperModalShow"
            @modal-close="swiperModal.modalShow = false" :swiperSlides="swiperModal.swiperSlides">
        </modal-swiper-modal>

    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    Scrollbar
} from "swiper/core";
import { ReactiveFlags } from "vue";
SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);

let flag = true;

export default {
    name: "Main",
    setup() {
        return {
            modules: [Navigation, Pagination, Autoplay, Scrollbar],
        };
    },
    data() {
        return {
            mainSwiper: null,
            mainSwiperIndex: 0,

            mainPCSwiperItems: [{
                link: "/",
                imgSrc: require("~/static/images/main/img_visual_01.png"),
            },
            {
                link: "/",
                imgSrc: require("~/static/images/main/img_visual_02.png"),
            },
            {
                link: "/",
                imgSrc: require("~/static/images/main/img_visual_01.png"),
            }],
            mainMobileSwiperItems: [{
                link: "/",
                imgSrcMobile: require("~/static/images/main/img_visual_mo_01.png"),
            },
            {
                link: "/",
                imgSrcMobile: require("~/static/images/main/img_visual_mo_02.png"),
            },
            {
                link: "/",
                imgSrcMobile: require("~/static/images/main/img_visual_mo_01.png"),
            },],
            moreBtn: false,
            cartFn: true,
            expansionStatus: false, /* 20231219 - 메인에선 장바구니 아이콘 노출 */
            activeIndex: 0,
            menuItems: [{
                iconClass: "tab-menu-ico ico-saled",
                iconText: "숙성고",
                text: "숙성고"
            },
            {
                iconClass: "tab-menu-ico ico-cow",
                iconText: "한우거세",
                text: "한우거세"
            },
            {
                iconClass: "tab-menu-ico ico-cow",
                iconText: "한우암소",
                text: "한우암소"
            },
            {
                iconClass: "tab-menu-ico ico-pig",
                iconText: "한돈",
                text: "한돈"
            },
            {
                iconClass: "tab-menu-ico ico-milkcow",
                iconText: "육우",
                text: "육우"
            },
            {
                iconClass: "tab-menu-ico ico-meat",
                iconText: "육가공",
                text: "육가공 등"
            }
            ],
            items: [{
                thumbnail: {
                    rank: "1++B",
                    logo: require("~/assets/images/sample/img_logo_sample.png"),
                    imagesType: true,
                    thumbnail: require("~/static/images/img_test_sample_02.png"),
                    soldOut: false,
                },
                info: {
                    badge: {
                        rank: "1++B",
                        fat: "NO.8",
                        storage: "ice",
                        antibiotic: true,
                        fresh: true,
                    },
                    title: {
                        brand: "바를정육류연구소",
                        main: "냉장 한우암소 등심",
                        sub: "윗등심 + 아랫등심 반두분",
                    },
                    price: {
                        unitAccent: "10%",
                        sells: "39,800",
                        kg: "5.4",
                        consumer: "44,000",
                    },
                    processing: {
                        date: "2023-06-28",
                        dateDetail: "(29개월령)",
                        part: "송이한우파트",
                        number: "00215719766",
                    },
                    benefits: {
                        point: "10",
                        coupon: "3",
                        aging: "1",
                    },
                },
            },
            {
                thumbnail: {
                    rank: "A+",
                    logo: require("~/assets/images/sample/img_logo_sample.png"),
                    imagesType: true,
                    thumbnail: require("~/static/images/img_item_sample_02.png"),
                    soldOut: false,
                },
                info: {
                    badge: {
                        rank: "A+",
                        fat: "NO.4",
                        storage: "cold",
                        antibiotic: true,
                        fresh: true,
                    },
                    title: {
                        brand: "바를정육류연구소",
                        main: "냉장 한우암소 등심",
                        sub: "윗등심 + 아랫등심 반두분",
                    },
                    price: {
                        unitAccent: "10%",
                        sells: "39,800",
                        kg: "5.4",
                        consumer: "44,000",
                    },
                    processing: {
                        date: "2023-06-28",
                        dateDetail: "(29개월령)",
                        part: "송이한우파트",
                        number: "00215719766",
                    },
                    benefits: {
                        // point: "10",
                        coupon: "3",
                        aging: "1",
                    },
                },
            },
            {
                thumbnail: {
                    rank: "",
                    logo: require("~/assets/images/sample/img_logo_sample.png"),
                    imagesType: false,
                    thumbnail: require("~/static/images/img_item_sample_01.png"),
                    soldOut: false,
                },
                info: {
                    badge: {
                        rank: "",
                        fat: "",
                        storage: "cold",
                        antibiotic: false,
                        fresh: true,
                    },
                    title: {
                        brand: "바를정육류연구소",
                        main: "냉장 한우암소 등심",
                        sub: "윗등심 + 아랫등심 반두분",
                    },
                    price: {
                        unitAccent: "10%",
                        sells: "39,800",
                        kg: "5.4",
                        consumer: "44,000",
                    },
                    processing: {
                        date: "2023-06-28",
                        dateDetail: "(29개월령)",
                        part: "송이한우파트",
                        number: "00215719766",
                    },
                    benefits: {
                        point: "",
                        coupon: "",
                        aging: "1",
                    },
                },
            },
            {
                thumbnail: {
                    rank: "",
                    logo: require("~/assets/images/sample/img_logo_sample.png"),
                    imagesType: true,
                    thumbnail: require("~/static/images/img_item_sample_02.png"),
                    soldOut: false,
                },
                info: {
                    badge: {
                        rank: "",
                        fat: "",
                        storage: false,
                        antibiotic: false,
                        fresh: false,
                    },
                    title: {
                        brand: "바를정육류연구소",
                        main: "냉장 한우암소 등심",
                        sub: "윗등심 + 아랫등심 반두분",
                    },
                    price: {
                        unitAccent: "10%",
                        sells: "39,800",
                        kg: "5.4",
                        consumer: "44,000",
                    },
                    processing: {
                        date: "2023-06-28",
                        dateDetail: "(29개월령)",
                        part: "송이한우파트",
                        number: "00215719766",
                    },
                    benefits: {
                        point: "10",
                        coupon: "3",
                        aging: "1",
                    },
                },
            },
            {
                thumbnail: {
                    rank: "A+",
                    logo: require("~/assets/images/sample/img_logo_sample.png"),
                    imagesType: true,
                    thumbnail: require("~/static/images/img_item_sample_01.png"),
                    soldOut: false,
                },
                info: {
                    badge: {
                        rank: "A+",
                        fat: "NO.9",
                        storage: "ice",
                        antibiotic: true,
                        fresh: true,
                    },
                    title: {
                        brand: "바를정육류연구소",
                        main: "냉장 한우암소 등심",
                        sub: "윗등심 + 아랫등심 반두분",
                    },
                    price: {
                        unitAccent: "10%",
                        sells: "39,800",
                        kg: "5.4",
                        consumer: "44,000",
                    },
                    processing: {
                        date: "2023-06-28",
                        dateDetail: "(29개월령)",
                        part: "송이한우파트",
                        number: "00215719766",
                    },
                    benefits: {
                        point: "10",
                        coupon: "3",
                        aging: "1",
                    },
                },
            },
            {
                thumbnail: {
                    rank: "1+B",
                    logo: require("~/assets/images/sample/img_logo_sample.png"),
                    imagesType: false,
                    thumbnail: require("~/static/images/img_item_sample_02.png"),
                    soldOut: false,
                },
                info: {
                    badge: {
                        rank: "1+B",
                        fat: "NO.3",
                        storage: "ice",
                        antibiotic: true,
                        fresh: true,
                    },
                    title: {
                        brand: "바를정육류연구소",
                        main: "냉장 한우암소 등심",
                        sub: "윗등심 + 아랫등심 반두분",
                    },
                    price: {
                        unitAccent: "10%",
                        sells: "39,800",
                        kg: "5.4",
                        consumer: "44,000",
                    },
                    processing: {
                        date: "2023-06-28",
                        dateDetail: "(29개월령)",
                        part: "송이한우파트",
                        number: "00215719766",
                    },
                    benefits: {
                        point: "10",
                        coupon: "3",
                        aging: "1",
                    },
                },
            },
            {
                thumbnail: {
                    rank: "1++A",
                    logo: require("~/assets/images/sample/img_logo_sample.png"),
                    imagesType: true,
                    thumbnail: require("~/static/images/img_item_sample_01.png"),
                    soldOut: false,
                },
                info: {
                    badge: {
                        rank: "1++A",
                        fat: "NO.1",
                        storage: "ice",
                        antibiotic: true,
                        fresh: true,
                    },
                    title: {
                        brand: "바를정육류연구소",
                        main: "냉장 한우암소 등심",
                        sub: "윗등심 + 아랫등심 반두분",
                    },
                    price: {
                        unitAccent: "10%",
                        sells: "39,800",
                        kg: "5.4",
                        consumer: "44,000",
                    },
                    processing: {
                        date: "2023-06-28",
                        dateDetail: "(29개월령)",
                        part: "송이한우파트",
                        number: "00215719766",
                    },
                    benefits: {
                        point: "10",
                        coupon: "3",
                        aging: "1",
                    },
                },
            },
            {
                thumbnail: {
                    rank: "1+",
                    logo: require("~/assets/images/sample/img_logo_sample.png"),
                    imagesType: true,
                    thumbnail: require("~/static/images/img_item_sample_02.png"),
                    soldOut: false,
                },
                info: {
                    badge: {
                        rank: "A+",
                        fat: "NO.2",
                        storage: "ice",
                        antibiotic: true,
                        fresh: true,
                    },
                    title: {
                        brand: "바를정육류연구소",
                        main: "냉장 한우암소 등심",
                        sub: "윗등심 + 아랫등심 반두분",
                    },
                    price: {
                        unitAccent: "10%",
                        sells: "39,800",
                        kg: "5.4",
                        consumer: "44,000",
                    },
                    processing: {
                        date: "2023-06-28",
                        dateDetail: "(29개월령)",
                        part: "송이한우파트",
                        number: "00215719766",
                    },
                    benefits: {
                        point: "10",
                        coupon: "3",
                        aging: "1",
                    },
                },
            },
            ],
            quickmenuTabIndex: 0,
            quickmenuTabItems: ["한우거세", "한우암소", "한돈", "육우"],
            processModal: {
                modalShow: false
            },

            whiteModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "전체보기",
                    modalFull: false,
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            whiteModalMobile: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "전체보기",
                    modalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: false,
                },
            },

            // 231031
            imageModal: {
                modalShow: true,
                dimmed: true,
            },
            scrolledWindow: false,
            mobileMainGnbHeight: 0,
            //231218
            swiperModal: {
                modalInfo: {
                    footerShow: true,
                    dimmed: true,
                },
                swiperSlides: [
                    { imgPath: require("@/static/images/sample/ly_sample_00.jpg"), altText: '00' },
                    { imgPath: require("@/static/images/sample/ly_sample_01.jpg"), altText: '01' },
                    { imgPath: require("@/static/images/sample/ly_sample_02.jpg"), altText: '02' },
                ]
            },
            swiperModalShow: false,

        };
    },
    beforeDestroy() { },
    mounted() {
        // mainSwiper
        const swiperOption = {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 10,
            loop: true,
            loopAdditionalSlides: 1,
            autoplay: {
                delay: 3000,
            },
            autoplayDisableOnInteraction: false,
            pagination: {
                el: ".main-swiper .swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".main-swiper .swiper-button-next",
                prevEl: ".main-swiper .swiper-button-prev",
            },
            autoHeight: false,
            breakpoints: {
                1194: {
                    slidesPerView: 1,
                },
                768: {
                    centeredSlides: false,
                },
            },
        }

        this.mainPCSwiper = new Swiper(".main-swiper.pc", swiperOption);
        this.mainMobileSwiper = new Swiper(".main-swiper.mobile", swiperOption);

        this.setSwiper();

        this.fixedGNB();


    },
    methods: {
        setSwiper() { },
        autoplaySlide(e) {
            if (flag) {
                flag = !flag;
                e.target.classList.add("on");
                this.mainPCSwiper.autoplay.stop()
                this.mainMobileSwiper.autoplay.stop()
            } else {
                flag = !flag;
                e.target.classList.remove("on");
                this.mainPCSwiper.autoplay.start()
                this.mainMobileSwiper.autoplay.start()
            }
        },

        // 즐겨찾는 브랜드 탭 ui
        tabActiveQuickmenu(index) {
            this.quickmenuTabIndex = index;
        },
        // md 추천
        setActive(index) {
            this.activeIndex = index;
        },

        // gnb menu
        fixedGNB() {
            let windowWidth = window.outerWidth;
            let mainVisualHeight = this.$refs.mainVisual.clientHeight;
            let mainGnbHeight = this.$refs.mobileMainGnb.clientHeight;
            let vm = this;
            let scrolledHeight;

            if (windowWidth < 768) {
                window.addEventListener('scroll', function () {

                    console.log(`${mainVisualHeight} // ${mainGnbHeight}`);

                    scrolledHeight = document.documentElement.scrollTop;
                    let height = mainVisualHeight + mainGnbHeight;
                    if (height < scrolledHeight) {
                        vm.scrolledWindow = true;
                        if (vm.scrolledWindow = true) {
                            vm.mobileMainGnbHeight = mainGnbHeight + 80;
                        }
                    } else {
                        vm.scrolledWindow = false;
                    }
                })
            }
        },
    },
    computed: {},
};
</script>

<style>
@import url("~/assets/scss/page/main.scss");
</style>