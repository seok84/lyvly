<template>
    <section class="brand-page item-list-page inner">
        <!-- 타이틀 -->
        <h2 class="title-h2">{{ contentTitle }}</h2>

        <!-- 브랜드 탭 -->
        <ul class="tabs">
            <li v-for="(quickmenuTabItem, index) in quickmenuTabItems"
                :class="[index === quickmenuTabIndex ? 'active' : '']" @click="tabActiveQuickmenu(index)" :key="index">
                {{ quickmenuTabItem }}
            </li>
        </ul>
        <!-- 브랜드 리스트 -->
        <ul class="brand-list-wrapper">
            <li v-for="(item, index) in brandList" :key="index" class="brand-list">
                <nuxt-link to="/">
                    <span class="brand-logo">
                        <img :src="item.logo" alt="brandLogo" />
                    </span>
                    {{ item.brand }}
                </nuxt-link>
            </li>
        </ul>
        <div class="operate-order">
            <div class="brand-info-wrapper">
                <!-- 판매자공지사항 -->
                <div class="seller-information">
                    <div class="seller-notice">
                        <div class="seller-logo pc"><img src="~/static/static/images/logo.png" alt="판매자 로고"></div>
                        <div class="seller-phrase">
                            <p>판매자 공지사항<span @click="sellerInfo.show = true">한우비상 판매자 정보</span></p>
                            <p>품질 좋은 고기만을 취급합니다. / 일반 배송 / 010-1234-5678</p>
                            <!-- 판매자 정보 클릭 시  -->
                            <article class="tooltip seller-phrase-tooltip" v-show="sellerInfo.show">
                                <div type="button" class="tooltip-close" @click="sellerInfo.show = false"></div>
                                <div class="tooltip-title">판매자 정보</div>
                                <div class="tooltip-body">
                                    <dl class="">
                                        <dt>대표자</dt>
                                        <dd>김준대</dd>
                                        <dt>상호</dt>
                                        <dd>(주)유어초이스</dd>
                                        <dt>전화</dt>
                                        <dd>031-283-2951</dd>
                                        <dt>이메일</dt>
                                        <dd>yourchoice@wehago.com</dd>
                                        <dt>사업자등록번호</dt>
                                        <dd>2158614677</dd>
                                        <dt>사업장소재지</dt>
                                        <dd>경기도 용인시 기흥구 보라동 455-1</dd>
                                    </dl>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <!-- 브랜드상품보러가기버튼 -->
                <div class="btn-more-brand"><span>브랜드 상품 보러가기</span>
                    <i><img src="~/assets/images/common/arrow/ico_arr_red.png" alt="arrow"></i>
                </div>
            </div>


        </div>



        <!-- 에디터 컨텐츠 -->
        <div class="item-edit-container">
            <img src="~/static/images/main/img_visual_02.png" alt="HTML 에디터 컨텐츠">

        </div>

    </section>
</template>

<script>
export default {
    data: () => {
        return {
            contentTitle: "입점브랜드",

            sellerInfo: {
                show: false,
                link: "",
            },

            quickmenuTabIndex: 0,
            quickmenuTabItems: ["한우거세", "한우암소", "한돈", "육우"],

            brandList: [
                {
                    brand: "과연미트",
                    logo: require("~/assets/images/sample/img_brand_sample_01.png"),
                },
                {
                    brand: "대신육가공",
                    logo: require("~/assets/images/sample/img_brand_sample_02.png"),
                },
                {
                    brand: "한우지예",
                    logo: require("~/assets/images/sample/img_brand_sample_03.png"),
                },
                {
                    brand: "진미한우",
                    logo: require("~/assets/images/sample/img_brand_sample_04.png"),
                },
                {
                    brand: "한우비상",
                    logo: require("~/assets/images/sample/img_brand_sample_05.png"),
                },
                {
                    brand: "과연미트",
                    logo: require("~/assets/images/sample/img_brand_sample_01.png"),
                },
                {
                    brand: "대신육가공",
                    logo: require("~/assets/images/sample/img_brand_sample_02.png"),
                },
                {
                    brand: "한우지예",
                    logo: require("~/assets/images/sample/img_brand_sample_03.png"),
                },
                {
                    brand: "진미한우",
                    logo: require("~/assets/images/sample/img_brand_sample_04.png"),
                },
                {
                    brand: "한우비상",
                    logo: require("~/assets/images/sample/img_brand_sample_05.png"),
                },
                {
                    brand: "과연미트",
                    logo: require("~/assets/images/sample/img_brand_sample_01.png"),
                },
                {
                    brand: "대신육가공",
                    logo: require("~/assets/images/sample/img_brand_sample_02.png"),
                },
                {
                    brand: "한우지예",
                    logo: require("~/assets/images/sample/img_brand_sample_03.png"),
                },
                {
                    brand: "진미한우",
                    logo: require("~/assets/images/sample/img_brand_sample_04.png"),
                },
                {
                    brand: "한우비상",
                    logo: require("~/assets/images/sample/img_brand_sample_05.png"),
                },
                {
                    brand: "과연미트",
                    logo: require("~/assets/images/sample/img_brand_sample_01.png"),
                },
                {
                    brand: "대신육가공",
                    logo: require("~/assets/images/sample/img_brand_sample_02.png"),
                },
                {
                    brand: "한우지예",
                    logo: require("~/assets/images/sample/img_brand_sample_03.png"),
                },
                {
                    brand: "진미한우",
                    logo: require("~/assets/images/sample/img_brand_sample_04.png"),
                },
                {
                    brand: "한우비상",
                    logo: require("~/assets/images/sample/img_brand_sample_05.png"),
                },
                {
                    brand: "과연미트",
                    logo: require("~/assets/images/sample/img_brand_sample_01.png"),
                },
                {
                    brand: "대신육가공",
                    logo: require("~/assets/images/sample/img_brand_sample_02.png"),
                },
                {
                    brand: "한우지예",
                    logo: require("~/assets/images/sample/img_brand_sample_03.png"),
                },
                {
                    brand: "진미한우",
                    logo: require("~/assets/images/sample/img_brand_sample_04.png"),
                },
                {
                    brand: "한우비상",
                    logo: require("~/assets/images/sample/img_brand_sample_05.png"),
                },
                {
                    brand: "과연미트",
                    logo: require("~/assets/images/sample/img_brand_sample_01.png"),
                },
                {
                    brand: "대신육가공",
                    logo: require("~/assets/images/sample/img_brand_sample_02.png"),
                },
                {
                    brand: "한우지예",
                    logo: require("~/assets/images/sample/img_brand_sample_03.png"),
                },
                {
                    brand: "진미한우",
                    logo: require("~/assets/images/sample/img_brand_sample_04.png"),
                },
                {
                    brand: "한우비상",
                    logo: require("~/assets/images/sample/img_brand_sample_05.png"),
                },
            ]
        }
    },
    methods: {
        // 즐겨찾는 브랜드 탭 ui
        tabActiveQuickmenu(index) {
            this.quickmenuTabIndex = index;
        },
    },
    mounted() {
    }
}
</script>

<style scoped>
.operate-order {
    display: flex;
    flex-direction: column;

}

/* 브랜드 탭 */

.brand-page .tabs {
    display: flex;
    justify-content: center;
    margin: 0;
}

.brand-page .tabs li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10.4rem;
    height: 4.6rem;
    background: #f3f5f7;
    border-radius: 4.6rem;
    margin: 0 0.4rem;
    font-size: 1.8rem;
    letter-spacing: -0.1rem;
    color: #757575;
    cursor: pointer;
}

.brand-page .tabs .active {
    background: #f02d40;
    color: #fff;
}

/* 브랜드 공지사항 */
.brand-info-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6rem 0 3rem;
}

.seller-information {
    max-width: 55rem;
    width: 100%;
}

.seller-information .seller-notice {
    width: 100%;
    display: flex;
    /* height: 13.6rem; */
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem;
    border: 1px solid #eeeeee;
    border-radius: 2rem;
    background-color: #fff;
}

.seller-information .seller-logo {
    position: relative;
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #eee;
    border-radius: 5rem;
    margin-right: 2rem;
}

.seller-information .seller-logo img {
    width: 100%;
    padding: 1rem;
}

.seller-information .seller-phrase p {
    position: relative;
}

.seller-information .seller-phrase p:nth-child(1) {
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: -0.9px;
    color: #000000;
    margin: 1rem 0 0.8rem;
}

.seller-information .seller-phrase p:nth-child(1) a {
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: -0.8px;
    color: #000000;
    margin-left: 1rem;
}

.seller-information .seller-phrase p:nth-child(1) a::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 3rem;
    height: 3rem;
    background: url(~/assets/images/common/arrow/ico_arr_next_black.png) no-repeat;
    background-size: 100%;
    top: 50%;
    transform: translateY(-50%);
}

.seller-information .seller-phrase p:nth-child(2) {
    font-size: 1.4rem;
    letter-spacing: -0.7px;
    color: #757575;
    margin-left: 2.5rem;
    flex: 1;
}

.seller-information .seller-phrase p:nth-child(2)::before {
    content: "";
    position: absolute;
    display: inline-block;
    width: 2.2rem;
    height: 2.2rem;
    background: url(~/assets/images/common/items/ico_notice.png) no-repeat center/100%;
    top: 50%;
    transform: translateY(-50%);
    left: -2.5rem;
}

.seller-information+.btn-wrap {
    margin-top: 3.2rem;
}

.seller-information+.btn-wrap.pc {
    display: flex !important;
}

.seller-information+.btn-wrap .btn {
    border: solid 1px #e1e1e1;
}

.seller-information+.btn-wrap span {
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.39;
    letter-spacing: -0.9px;
    color: #000;
}

.seller-information+.btn-wrap span:nth-child(1) {
    width: 2rem;
    height: 2rem;
}

.seller-information+.btn-wrap span:nth-child(2) {
    margin-left: 0.5rem;
}

/* 브랜드 상품 보러가기 */
.btn-more-brand {
    width: 30rem;
    height: 6rem;
    border-radius: 1rem;
    border: solid 1px #f02d40;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.btn-more-brand span {
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: -0.9px;
    color: #f02d40;
}

.btn-more-brand i {
    /*
    width: 1.6rem;
    height: 1.6rem;    margin-left: 2rem;
    */
    width: 0.6rem;
    margin-left: 0.8rem;
}

/**/
.brand-list-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 2rem 0 0 0;
}

.brand-list-wrapper li {
    position: relative;
    display: block;
    margin-bottom: 3rem;
    width: calc((100% - 160px) / 11);
    margin-right: 1.6rem;
}

.brand-list-wrapper li:nth-child(11n) {
    margin-right: 0;
}


.brand-list-wrapper li a {
    width: 100%;
    height: 100%;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: -0.32px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.brand-list-wrapper li a .brand-logo {
    position: relative;
    width: 9.4rem;
    height: 9.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid #eee;
    border-radius: 2rem;
    margin-bottom: 1rem;
}

.brand-list-wrapper li a .brand-logo img {
    width: 100%;
    padding: 1rem;
}



/* 노트북 */
@media (max-width: 1194px) {

    /* 판매자공지 */

    .brand-info-wrapper {
        padding: 0 1.6rem;
    }

    .brand-list-wrapper {
        padding: 0 2rem;
    }

    .brand-list-wrapper li {
        width: calc(100% / 9);
        margin-right: 0;
    }

}

@media (max-width: 991x) {}

/* 태블릿 */
@media (max-width: 768px) {
    .operate-order .brand-list-wrapper {
        order: -1;
        margin: 0;
    }

    /**/

    .brand-page .tabs {
        margin-bottom: 3rem;
    }

    /* 브랜드 공지사항 */
    .brand-info-wrapper {
        flex-direction: column;
    }

    .seller-information {
        max-width: 100%;
    }

    .btn-more-brand {
        width: 100%;
        margin-top: 2rem;
    }

    .brand-list-wrapper li {
        width: calc(100% / 7);

    }
}

/* 모바일 */
@media (max-width: 480px) {
    .brand-list-wrapper li {
        width: calc(100% / 5);
    }

    .brand-list-wrapper li a {
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: -0.7px;
    }

    .brand-list-wrapper li a .brand-logo {
        width: 6.1rem;
        height: 6.1rem;
        border-radius: 1.4rem;
    }
}


@media (max-width: 320px) {
    .brand-list-wrapper li {
        width: calc(100% / 4);
    }

    .brand-list-wrapper li a .brand-logo {
        width: 5.4rem;
        height: 5.4rem;
        border-radius: 1.4rem;
    }

}
</style>