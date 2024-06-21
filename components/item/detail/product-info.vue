<template>
    <div id="product-info">
        <div class="another-item-content">
            <h4 class="product-info-title">
                <!-- pc 전체선택 -->
                <label for="sample05" class="check-wrap">
                    <input type="checkbox" name="checkboxSample" id="sample05" checked="checked">
                    <span>전체선택</span>
                </label>
                <div>
                    <p>같은 소, 다른 부위</p>
                    <p>이 소의 다른 부위를 <b>체크버튼을 클릭하시면 함께 구입</b> 하실 수 있습니다.</p>
                </div>
            </h4>
            <!-- mobile 전체선택 -->
            <label for="sample05" class="check-wrap">
                <input type="checkbox" name="checkboxSample" id="sample05" checked="checked">
                <span>전체선택</span>
            </label>
            <!-- 노컨텐츠 문구 -->
            <!-- <p class="no-content">상품이 없습니다.</p> -->
            <!-- 또 다른 부위 리스트 -->
            <ul class="basic-item-list another-item-list">
                <li class="soldout">
                    <!-- 체크박스 영역 -->
                    <label class="check-wrap">
                        <input type="checkbox" name="checkboxSample">
                    </label>
                    <!-- 상품 설명 -->
                    <div class="inline-flex">
                        <!-- 상품 상세 설명 -->
                        <div class="item-title">
                            <p class="brand">한우비상</p>
                            <p class="main">한우암소</p>
                            <p class="sub">반두분</p>
                        </div>
                        <!-- 상품 무게 -->
                        <div class="item-weight">
                            <p>5.4kg</p>
                        </div>
                        <!-- 상품 가격 -->
                        <div class="item-price-group">
                            <div class="item-price red">
                                <p class="unit-accent">
                                    kg당 최대 혜택가 15%↓
                                </p>
                                <span class="sells-info tooltip-wrap" :class="{ 'open': toolTip = true }">
                                    <i @click="toolTip = true">?</i>
                                    <item-tooltip :toolTip="toolTip" />
                                </span>
                                <p class="unit">단가</p>
                                <p rel="판매가" class="sells"><span>39,800<strong>원</strong></span></p>
                                <p rel="소비자가" class="consumer">44,000 원(kg당)</p>
                            </div>
                            <div class="item-price blue">
                                <p class="unit-accent">
                                    최대 혜택가 10%↓
                                </p>
                                <p class="unit">단가(kg당)</p>
                                <p rel="판매가" class="sells"><span>39,800<strong>원</strong></span></p>
                                <p rel="소비자가" class="consumer">44,000 원(kg당)</p>
                            </div>
                        </div>
                        <!-- 판매 완료 문구 -->
                        <div class="soldout-txt">
                            <span>판매 완료</span>
                        </div>
                    </div>
                </li>
                <li v-for="(item, index) in items" :key="index">
                    <!-- 체크박스 영역 -->
                    <label class="check-wrap">
                        <input type="checkbox" name="checkboxSample">
                    </label>
                    <!-- 상품 설명 -->
                    <div class="inline-flex">
                        <!-- 상품 상세 설명 -->
                        <div class="item-title">
                            <p class="brand">한우비상</p>
                            <p class="main">한우암소 등심 제목줄 한줄</p>
                            <p class="sub">반두분(윗등심 9.4kg + 아랫등심 7.9kg)</p>
                        </div>
                        <!-- 상품 무게 -->
                        <div class="item-weight">
                            <p>5.4kg</p>
                        </div>
                        <!-- 상품 가격 -->
                        <div class="item-price-group">
                            <div class="item-price red">
                                <p class="unit-accent">
                                    kg당 최대 혜택가 15%↓
                                </p>
                                <span class="sells-info tooltip-wrap">
                                    <i @click="item.info.showTooltip = true">?</i>
                                    <item-tooltip :toolTip="item.info.showTooltip"
                                        @close="toolTip = item.info.showTooltip = false" />
                                </span>
                                <p class="unit">단가</p>
                                <p rel="판매가" class="sells"><span>39,800<strong>원</strong></span></p>
                                <p rel="소비자가" class="consumer">44,000 원(kg당)</p>
                            </div>
                            <div class="item-price blue">
                                <p class="unit-accent">
                                    최대 혜택가 10%↓
                                </p>
                                <p class="unit">단가(kg당)</p>
                                <p rel="판매가" class="sells"><span>39,800<strong>원</strong></span></p>
                                <p rel="소비자가" class="consumer">44,000 원(kg당)</p>
                            </div>
                        </div>
                        <!-- 판매 완료 문구 -->
                        <div class="soldout-txt">
                            <span>판매 완료</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="line-bg"></div>
        <div :class="'product-info-edit ' + (viewMore ? 'open' : '')">
            <div class="photo-area">
                <img src="https://www.cntmart.com/upload/product/20191004/GHIRADELLI_CHOCO.jpg" alt="상품상세 이미지">
            </div>
            <button class="view-more" @click="viewMore = true" v-if="!viewMore">
                <span>더보기</span>
            </button>
        </div>
        <table class="product-info-table">
            <caption>상품정보</caption>
            <colgroup>
                <col style="width: 35%;">
                <col style="width: 65%;">
            </colgroup>
            <tbody>
                <tr>
                    <th scope="row"><span>품목 또는 명칭</span></th>
                    <td><span>상품 정보 참조</span></td>
                </tr>
                <tr>
                    <th scope="row"><span>포장 단위별 내용물의 용량
                            (중량), 수량, 크기</span></th>
                    <td><span>상품 정보 참조</span></td>
                </tr>
                <tr>
                    <th scope="row"><span>생산자</span></th>
                    <td><span>상품 정보 참조</span></td>
                </tr>
                <tr>
                    <th scope="row"><span>원산지</span></th>
                    <td><span>국내산</span></td>
                </tr>
                <tr>
                    <th scope="row"><span>제조연월일/소비기한</span></th>
                    <td><span>제품라벨별도표기</span></td>
                </tr>
                <tr>
                    <th scope="row"><span>관련법상 표시사항</span></th>
                    <td><span>상세페이지 참조, 축산물이력정보 참조</span></td>
                </tr>
                <tr>
                    <th scope="row"><span>이력관리에 따른 표시유무</span></th>
                    <td><span>제품라벨표기, 상품 정보 참조</span></td>
                </tr>
                <tr>
                    <th scope="row"><span>상품구성</span></th>
                    <td><span>상세페이지 참조, 상품 정보 참조</span></td>
                </tr>
                <tr>
                    <th scope="row"><span>보관 또는 취급 방법</span></th>
                    <td><span>상세페이지 참조, 냉장보관(-2~-10도 이하)/냉동보관(-18도 이하)</span></td>
                </tr>
                <tr>
                    <th scope="row"><span>소비자 상담 관련 전화번호</span></th>
                    <td><span>상세페이지 참조</span></td>
                </tr>
                <tr>
                    <th scope="row"><span>
                            식품등의표시 <br>
                            광고에관한법률에 따른 소비자<br>
                            안전을 위한 주의사항</span>
                    </th>
                    <td><span>
                            1) 부정,불량식품 신고는 국번없이 1399<br>
                            2) 비가열제품이니 충분히 익혀드시기 바랍니다.
                        </span></td>
                </tr>


            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            viewMore: false,
            items: [
                {
                    thumbnail:
                    {
                        rank: '1++B',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_01.png"),
                        soldOut: false,
                    },
                    info:
                    {
                        badge: {
                            rank: '1++B',
                            fat: "NO.8",
                            storage: "ice",
                            antibiotic: true,
                            fresh: true
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
                            consumer:
                                "44,000"
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766"
                        },
                        benefits: {
                            point: "10",
                            coupon: "3",
                            aging: "1",

                        },
                        showTooltip: false
                    },
                },
                {
                    thumbnail:
                    {
                        rank: 'A+',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_02.png"),
                        soldOut: false,
                    },
                    info:
                    {
                        badge: {
                            rank: 'A+',
                            fat: "NO.4",
                            storage: "cold",
                            antibiotic: true,
                            fresh: true
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
                            consumer: "44,000"
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766"
                        },
                        benefits: {
                            // point: "10",
                            coupon: "3",
                            aging: "1",

                        },
                    },
                },
                {
                    thumbnail:
                    {
                        rank: '',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: false,
                        thumbnail: require("~/static/images/img_item_sample_01.png"),
                        soldOut: false,
                    },
                    info:
                    {
                        badge: {
                            rank: '',
                            fat: "",
                            storage: "cold",
                            antibiotic: false,
                            fresh: true
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
                            consumer: "44,000"
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766"
                        },
                        benefits: {
                            point: "",
                            coupon: "",
                            aging: "1",

                        },
                        showTooltip: false
                    },
                },
                {
                    thumbnail:
                    {
                        rank: '',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_02.png"),
                        soldOut: false,
                    },
                    info:
                    {
                        badge: {
                            rank: '',
                            fat: "",
                            storage: false,
                            antibiotic: false,
                            fresh: false
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
                            consumer: "44,000"
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766"
                        },
                        benefits: {
                            point: "10",
                            coupon: "3",
                            aging: "1",

                        },
                        showTooltip: false
                    },
                },
                {
                    thumbnail:
                    {
                        rank: 'A+',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_01.png"),
                        soldOut: false,
                    },
                    info:
                    {
                        badge: {
                            rank: 'A+',
                            fat: "NO.9",
                            storage: "ice",
                            antibiotic: true,
                            fresh: true
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
                            consumer: "44,000"
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766"
                        },
                        benefits: {
                            point: "10",
                            coupon: "3",
                            aging: "1",

                        },
                        showTooltip: false
                    },
                },
                {
                    thumbnail:
                    {
                        rank: '1+B',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: false,
                        thumbnail: require("~/static/images/img_item_sample_02.png"),
                        soldOut: false,
                    },
                    info:
                    {
                        badge: {
                            rank: '1+B',
                            fat: "NO.3",
                            storage: "ice",
                            antibiotic: true,
                            fresh: true
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
                            consumer:
                                "44,000"
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766"
                        },
                        benefits: {
                            point: "10",
                            coupon: "3",
                            aging: "1",

                        },
                        showTooltip: false
                    },
                },
                {
                    thumbnail:
                    {
                        rank: '1++A',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_01.png"),
                        soldOut: false,
                    },
                    info:
                    {
                        badge: {
                            rank: '1++A',
                            fat: "NO.1",
                            storage: "ice",
                            antibiotic: true,
                            fresh: true
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
                            consumer: "44,000"
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766"
                        },
                        benefits: {
                            point: "10",
                            coupon: "3",
                            aging: "1",

                        },
                        showTooltip: false
                    },
                },
                {
                    thumbnail:
                    {
                        rank: 'A+',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_02.png"),
                        soldOut: false,
                    },
                    info:
                    {
                        badge: {
                            rank: 'A+',
                            fat: "NO.2",
                            storage: "ice",
                            antibiotic: true,
                            fresh: true
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
                            consumer:
                                "44,000"
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766"
                        },
                        benefits: {
                            point: "10",
                            coupon: "3",
                            aging: "1",

                        },
                        showTooltip: false
                    },
                },
            ],
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<style scoped>
.product-info-title {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    color: #000;
    background-color: #fbfbfb;
    margin-bottom: 2rem;
    padding: 1.4rem 4rem;
}

.product-info-title>div {
    flex: 1;
}

.product-info-title p {
    font-size: 20px;
    font-weight: bold;
    line-height: 1.2;
    letter-spacing: -1px;
    text-align: center;
}

.product-info-title label span {
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: -0.7px;
    color: #000;
}

.product-info-title p:nth-child(2) {
    font-size: 14px;
    color: #979797;
    letter-spacing: -0.7px;
    font-weight: 500;
    margin-top: 1rem;
}

.product-info-title p:nth-child(2) b {
    color: #f02d40;
}

.product-info-title label {
    display: inline-flex;
}

.product-info-title+label {
    display: none;
}




/* product-info-edit */
.product-info-edit {
    position: relative;
}

.product-info-edit .photo-area {
    height: 100rem;
    overflow: hidden;
    margin-bottom: 3.1rem;
    transition: height 1s ease-in;
}

.product-info-edit.open .photo-area {
    height: auto;
}

.product-info-edit .photo-area img {
    border: 0;
    display: block;
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    height: auto;
    transform: none;
    max-width: 100rem;
    margin: 0 auto;
}

.product-info-edit .view-more {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform-origin: center;
    transform: translate(-50%, 50%);
}

.product-info-edit .view-more {
    width: 19rem;
    height: 6.2rem;
    line-height: 6.2rem;
    border-radius: 4rem;
    border: 1px solid #da0015;
    background-color: #fff;
    z-index: 1;
}

.product-info-edit .view-more span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 500;
    color: #da0015;
}

.product-info-edit .view-more span::after {
    content: "";
    position: relative;
    display: inline-block;
    width: 1.3rem;
    height: 0.8rem;
    background-image: url("~/assets/images/common/arrow/ico_arr_red_down.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transform-origin: center;
    transition: rotate 1s ease-out;
    margin-left: 0.5rem;
}

.product-info-edit .view-more.open span::after {
    transform: rotate(180deg);
}

/* product-info-table */
.product-info-table {
    width: 100%;
    margin: 13rem 0 10rem;
}

.product-info-table caption {
    display: none;
}

.product-info-table,
.product-info-table th,
.product-info-table td {
    border-collapse: collapse;
    border: 1px solid #eee;
    border-right: 0;
    border-left: 0;
}

.product-info-table tr {
    min-height: 5rem;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.47;
}

.product-info-table th,
.product-info-table td {
    text-align: left;
    padding: 1.6rem 0 1.6rem 3rem;
    vertical-align: top;
}

.product-info-table th {
    font-weight: 700;
    color: #000;
    background-color: #fafafa;
}

.product-info-table th.freeDe {
    text-align: center;
    padding: 0;
}

.product-info-table.freeDe td {
    border-left: 1px solid #eee;
}

.product-info-table td {
    color: #787878;
}

.product-info-table td span {
    display: inline-block;
    white-space: unset;
    word-break: break-all;
}


/* 태블릿 */
@media (max-width: 768px) {
    .product-info-title {
        padding-right: 2rem;
        padding-left: 2rem;
        margin-bottom: 2rem;
        word-break: keep-all;
    }

    .product-info-title label {
        display: none;
    }

    .product-info-title+label {
        display: inline-flex;
        padding: 0 1.6rem;
        margin-bottom: 2rem;
    }

    #item-detail-view .product-info-title+label {
        margin-bottom: 1rem;
    }


    /* product-info-table */
    .product-info-table {
        width: 100%;
        margin: 13rem 0 10rem;
    }

    .product-info-table caption {
        display: none;
    }

    .product-info-table {
        display: block;
        border-collapse: collapse;
        border: none;
        padding: 0 1.6rem;
    }

    .product-info-table tr {
        font-size: 1.4rem;
        line-height: auto;
    }

    .product-info-table th,
    .product-info-table td {
        padding: 1.6rem;
    }

    .product-info-title p {
        font-size: 16px;
    }

    .product-info-title p:nth-child(2) {
        font-size: 12px;
    }

    #item-detail-view .product-info-title+label {
        margin-bottom: 1rem;
        font-size: 14px;
    }
}
</style>
