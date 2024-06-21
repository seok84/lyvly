<template>
    <section class="mypage-view mypage-coupon">
        <div class="content-title">상품/장바구니 쿠폰</div>
        <div class="tab-index">
            <div :class="{ 'active': useable }" @click="useable = !useable"><span>사용가능</span></div>
            <div :class="{ 'active': !useable }" @click="useable = !useable"><span>사용완료</span></div>
        </div>
        <div class="tab-content">
            <!-- 사용가능 -->
            <div class="useable-point" v-show="useable">
                <div class="filter-wrap">
                    <p>전체(15)</p>
                    <div class="filter">
                        <label for="allCoupon">
                            <input type="radio" class="sorting-input" name="useable-radio" id="allCoupon"
                                checked><span>전체</span>
                        </label>
                        <label for="itemCoupon">
                            <input type="radio" class="sorting-input" name="useable-radio" id="itemCoupon"><span>상품
                                쿠폰</span>
                        </label>
                        <label for="orderCoupon">
                            <input type="radio" class="sorting-input" name="useable-radio" id="orderCoupon"><span>주문서
                                쿠폰</span>
                        </label>
                    </div>
                    <!-- 쿠폰받기 -->
                    <button type="button" class="btn btn-black btn-coupon-down" @click="couponModal.modalShow = true">
                        쿠폰받기<img src="~/assets/images/common/ico_download.png">
                    </button>
                    <button type="button" class="btn btn-default btn-serial"
                        @click="toggleCouponArea = !toggleCouponArea">
                        쿠폰 번호 등록
                    </button>
                </div>
                <div class="coupon-input-area" v-show="toggleCouponArea">
                    <h3 class="form-title">등록할 쿠폰이 있으신가요?</h3>
                    <div class="form-line">
                        <form id="offlineCouponForm">
                            <div class="flex">
                                <input type="text" id="offlineCode" class="form-basic required"
                                    placeholder="'-'없이 쿠폰 번호 입력" title="쿠폰번호">
                                <button type="submit" class="btn btn-black">적용</button>
                            </div>
                            <span class="feedback invalid" style="display: none">유효성 메시지</span>
                        </form>
                    </div>
                </div>

                <!-- 리스트 -->
                <div class="coupon-container">
                    <div class="box" v-for="(item, index) in couponList" :key="'coupon-' + index">
                        <div class="content-top">
                            <div class="coupon-item">
                                <div class="coupon-body">
                                    <span class="ico"></span>
                                    <p class="coupon-name text-ellipsis">{{ item.name }}</p>
                                    <p class="sale"><span>{{ item.sale }}</span>%</p>
                                </div>
                                <div class="coupon-head" :class="{ 'accent': item.accent == true }"><span>COUPON</span>
                                </div>
                            </div>
                            <span class="showing-item">
                                <span class="correspond-item" @click="productModal.modalShow = true"
                                    v-if="item.character">적용상품보기</span>
                                <span v-else>전체상품</span>
                            </span>
                        </div>
                        <div class="content-bottom">
                            <p class="coupon-title text-ellipsis">{{ item.title }}</p>
                            <p class="coupon-desc">{{ item.desc }}</p>
                            <span>
                                <span>{{ item.condition }}</span>
                                <span>{{ item.period }}</span>
                            </span>
                        </div>
                    </div>

                </div>
                <p class="info-title">쿠폰 이용안내</p>
                <ul class="info-desc">
                    <li>사용 기간 내에 사용하지 않은 쿠폰은 삭제됩니다.</li>
                    <li>한번에 조회 가능한 최대 기간은 6개월입니다.</li>
                </ul>
                <etc-pagination />
            </div>
            <!-- 사용완료 -->
            <div class="unusable-point" v-show="!useable">
                <div class="filter-wrap">
                    <p>전체(15)</p>
                    <div class="filter">
                        <label for="allCoupon02">
                            <input type="radio" class="sorting-input" name="unusable-radio" id="allCoupon02"
                                checked><span>전체</span>
                        </label>
                        <label for="itemCoupon02">
                            <input type="radio" class="sorting-input" name="unusable-radio" id="itemCoupon02"><span>상품
                                쿠폰</span>
                        </label>
                        <label for="orderCoupon02">
                            <input type="radio" class="sorting-input" name="unusable-radio" id="orderCoupon02"><span>주문서
                                쿠폰</span>
                        </label>
                    </div>
                </div>
                <!-- 리스트 -->
                <div class="coupon-container">
                    <div class="box" :class="{ 'deActive': !useable }" v-for="(item, index) in couponListEnd"
                        :key="'coupon-' + index">
                        <div class="content-top">
                            <div class="coupon-item">
                                <div class="coupon-body">
                                    <span class="ico"></span>
                                    <p class="coupon-name text-ellipsis">{{ item.name }}</p>
                                    <p class="sale"><span>{{ item.sale }}</span>%</p>
                                </div>
                                <div class="coupon-head" :class="{ 'accent': item.accent == true }"><span>COUPON</span>
                                </div>
                            </div>
                            <span class="showing-item" v-if="item.character">적용상품보기</span>
                            <span v-else>전체상품</span>
                        </div>
                        <div class="content-bottom">
                            <p class="coupon-title text-ellipsis">{{ item.title }}</p>
                            <p class="coupon-desc">{{ item.desc }}</p>
                            <span>{{ item.condition }}</span>
                            <span>{{ item.period }}</span>
                            <span>{{ item.endType }}&nbsp;&nbsp;&nbsp;{{ item.periodEnded }}</span>
                        </div>
                    </div>

                </div>
                <etc-pagination />
            </div>
        </div>

        <!-- 적용상품보기 모달 -->
        <modal-default :modalInfo="productModal.modalInfo" :modalShow="productModal.modalShow"
            @modalClose="productModal.modalShow = false" class="product-modal">
            <div class="modal-content">
                <div class="item-list-container default2">
                    <item-list class="item-list" :items="items" :thumbnail="items" />
                </div>
            </div>
            <etc-pagination />
        </modal-default>
        <!-- 쿠폰받기 모달 -->
        <modal-default :modalInfo="couponModal.modalInfo" :modalShow="couponModal.modalShow"
            @modalClose="couponModal.modalShow = false" class="coupon-modal">
            <div class="modal-content">
                <button class="btn btn-secondary">
                    <img src="~/assets/images/common/ico_download.png">
                    다운로드 가능쿠폰 모두받기({{ modalCouponList.length }}개)
                </button>
                <ul class="down-coupon-wrap">
                    <li v-for="(item, index) in modalCouponList" :key="'coupon_' + index">
                        <div class="coupon-modal-info">
                            <strong class="text-ellipsis">{{ item.title }}</strong>
                            <p class="saled">{{ item.salePrice }}원 할인</p>
                            <p>{{ item.condition }}</p>
                            <p>{{ item.period }}</p>
                        </div>
                        <div>
                            <button type="button" class="btn btn-black btn-coupon-down">
                                쿠폰받기<img src="~/assets/images/common/ico_download.png">
                            </button>
                        </div>
                    </li>
                </ul>
                <etc-pagination />
            </div>
        </modal-default>
    </section>
</template>

<script>
export default {
    layout: "divide",
    data() {
        return {
            productModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "적용상품보기",
                    modalFull: false,
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            couponModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "다운로드 가능쿠폰",
                    modalFull: false,
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            useable: true,
            couponList: [
                {
                    name: '상품 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: true,
                },
                {
                    name: '주문서 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: false,
                    accent: true
                },
                {
                    name: '상품 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: true,
                },
                {
                    name: '상품 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: false,
                },
                {
                    name: '주문서 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: true,
                    accent: true
                },
                {
                    name: '주문서 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: false,
                    accent: true
                },

            ],
            couponListEnd: [
                {
                    name: '상품 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: false,
                    endType: '사용일',
                    periodEnded: '2023-06-28',
                },
                {
                    name: '주문서 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: true,
                    endType: '사용일',
                    periodEnded: '2023-06-28',
                    accent: true
                },
                {
                    name: '상품 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: true,
                    endType: '만료일',
                    periodEnded: '2023-06-28',
                },
                {
                    name: '상품 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: false,
                    endType: '만료일',
                    periodEnded: '2023-06-28',
                },
                {
                    name: '주문서 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: true,
                    endType: '만료일',
                    periodEnded: '2023-06-28',
                    accent: true
                },
                {
                    name: '주문서 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: false,
                    endType: '만료일',
                    periodEnded: '2023-06-28',
                    accent: true
                },

            ],
            modalCouponList: [
                {
                    name: '상품 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    salePrice: 5000,
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: true,
                },
                {
                    name: '주문서 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    salePrice: 5000,
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: false,
                    accent: true
                },
                {
                    name: '상품 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    salePrice: 5000,
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: true,
                },
                {
                    name: '상품 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    salePrice: 5000,
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: false,
                },
                {
                    name: '주문서 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    salePrice: 5000,
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: true,
                    accent: true
                },
                {
                    name: '주문서 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    salePrice: 5000,
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    character: false,
                    accent: true
                },

            ],
            items: [
                {
                    thumbnail: {
                        rank: "1++B",
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_01.png"),
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
            toggleCouponArea: true,
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>
<style>
@import url("~/assets/css/page/mypage.css");



.mypage-coupon .filter label {
    color: #000000;
    font-size: 1.5rem;
}

.sorting-input {
    width: 1.2rem;
    height: 1.2rem;
    background-image: url("~/assets/images/common/input/ico_sort_empty_black.png");
}

.mypage-coupon .info-title {
    margin-top: 4rem;
}

.product-modal {
    padding: 0 1.6rem;
}

.product-modal .modal-wrap {
    max-width: 120rem;
}

.mypage-coupon .filter-wrap p {
    font-weight: 600;
}


.mypage-coupon .filter-wrap span {
    font-weight: 500;
}

.mypage-coupon .coupon-input-area {
    flex: none;
    width: 100%;
    background-color: #fafafa;
    padding: 2rem;
    margin: 1rem 0 2rem;
}

.coupon-input-area .form-title {
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: -0.05rem;
    color: #000;
    margin: 0 0 1rem;
    text-align: left;
}

.coupon-input-area .form-line form,
.coupon-input-area .form-line .flex {
    width: 100%;
}

.coupon-input-area .form-line .flex input {
    flex: 1;
}

.coupon-input-area .form-line .flex .btn {
    flex: none;
    border-radius: 0.5rem;
    width: 9rem;
    height: 5rem;
    padding: 0 1rem;
    border: 0.1rem solid #575a5c;
    background: #575a5c;
    font-size: 1.6rem;
    font-weight: 500;
    color: #fff;
    letter-spacing: -0.056rem;
    margin-left: .8rem;
}


@media (max-width:1200px) {
    .coupon-container .box {
        max-width: 50%;
    }
}


@media (max-width:767px) {
    .product-modal {
        padding: 0;
    }

    .mypage-coupon .coupon-container {
        margin: 0 -1.5rem;
    }

    .mypage-coupon .coupon-container .box {
        padding: 0 1.5rem;
    }

    .mypage-coupon .modal .modal-wrap {
        max-height: 100vh;
    }

    .mypage-coupon .item-list-container.default2 .item-list .item {
        max-width: 50%;
    }

    .mypage-coupon .coupon-input-area {
        margin: 0 0 2rem;
        padding: 1.4rem 1.6rem;
    }
}

@media (max-width:480px) {
    .mypage-coupon .coupon-container {
        margin: 0;
    }

    .mypage-coupon .coupon-container .box {
        padding: 0;
    }

    .coupon-container .box {
        max-width: unset;
    }
}
</style>