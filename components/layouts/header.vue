<template>
    <header :class="{ 'position-up': showTopBanner == false }" :data-page=[currentPage] :data-root="[root]">
        <section class="top-banner" id="top-banner" v-show="showTopBanner">
            <div class="inner">
                <nuxt-link to="/">지금 바로 라이블리 도매몰 가입하고 2만원 쿠폰 받아가세요!</nuxt-link>
                <button class="btn-close" @click="showTopBanner = false">닫기</button>
            </div>
        </section>

        <section class="inner">
            <ul class="util-menu">
                <li><nuxt-link to="/user/join">회원가입</nuxt-link></li>
                <li><nuxt-link to="/user/login">로그인</nuxt-link></li>
                <li><nuxt-link to="/customer/notice">고객센터</nuxt-link></li>
            </ul>

            <div class="flex">
                <nuxt-link to="./" type="button" class="btn-back">뒤로가기</nuxt-link>
                <h2 class="brand"><nuxt-link to="/"><img src="~/assets/images/common/layout/img_logo.png"
                            alt="농협 Lyvly 라이블리.도매몰"></nuxt-link></h2>

                <section class="searching-area">
                    <div class="searching">
                        <!-- pc -->
                        <div class="pc" @click="toggleSearchList"><input type="search" placeholder="한우비상"></div>
                        <div class="searching-history-pc hidden">
                            <etc-searching-recent />
                        </div>

                        <!-- mobile -->
                        <div class="mobile">
                            <!-- 풀 사이즈 모달 -->
                            <button class="btn-mobile-modal" @click="fullModal.modalShow = true">
                                <span>한우비상한우비상한우비상한우비상</span>
                                <img src="~/assets/images/common/ico_search.svg" alt=""></button>
                            <modal-default :modalInfo="fullModal.modalInfo" :modalShow="fullModal.modalShow"
                                @modalClose="fullModal.modalShow = false">
                                <div class="offset flex"><input type="search" placeholder="한우비상"> <span>검색</span></div>
                                <etc-searching-recent />
                            </modal-default>

                        </div>
                        <button type="button" class="btn-searching"><img
                                src="~/assets/images/common/layout/ico_h_search.svg" alt=""></button>
                    </div>
                </section>

                <ul class="personal-menu">
                    <li class="delivery-link"><nuxt-link to="/" class="ico-delivery"><span>배송방법</span></nuxt-link></li>
                    <li class="mypage-link"><nuxt-link to="/mypage/" class="ico-mypage"><span>마이페이지</span></nuxt-link>
                    </li>
                    <li class="basket-link"><nuxt-link to="/cart/" class="ico-basket"><span>장바구니</span> <em
                                class="count">0</em></nuxt-link></li>
                </ul>
            </div>

            <div class="quick-link-area">
                <div class="header-quick-menu">
                    <nuxt-link to="/" class="mobile">홈</nuxt-link>
                    <nuxt-link to="/featured/pb">농협PB</nuxt-link> <!-- class="new" 지금 사용 안함 -->
                    <nuxt-link to="/featured/fresh">신선물류관</nuxt-link>
                    <!-- <nuxt-link to="/featured/dry-aging">숙성고</nuxt-link> -->
                    <nuxt-link to="/featured/ansim">안심축산물</nuxt-link>
                    <nuxt-link to="/featured">이벤트</nuxt-link>
                    <nuxt-link to="/order/private-order">지정거래</nuxt-link>
                </div>
                <div class="right">
                    <nuxt-link to="/"><span class="text-red">라이블리 도매몰</span> 이용안내</nuxt-link>
                </div>
            </div>

        </section>

        <section class="pc">
            <layouts-gnb />
        </section>

    </header>
</template>

<script>

export default {
    data() {
        return {
            modalShow: false,
            fullModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "풀 사이즈 모달",
                    modalFull: true,
                    headerShow: true,
                    dimmed: false,
                },
            },
            showTopBanner: true,
            currentPage: '',
            root: '',
        }
    },

    watch: {
        $route(to, from) {
            // location.reload();
            this.currentPage = to.name;
            this.root = to.name.split('-')[0];
        }
    },

    mounted() {
        if (this.$route.name == 'order-step1') {
            document.querySelector("header").id = "header-fixed"
        } else {
            document.querySelector("header").removeAttribute('id')
        }

        // 페이지
        this.currentPage = this.$route.name;
        this.root = this.$route.name.split('-')[0];
    },

    methods: {
        // 검색 리스트 열기
        toggleSearchList() {
            document.querySelector(".searching-history-pc").classList.remove("hidden")
        },

    },

}
</script>
