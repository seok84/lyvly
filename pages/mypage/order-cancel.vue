<template>
    <section class="mypage-view order-cancel">
        <div class="content-title">취소/반품 조회</div>
        <div class="tab-index">
            <div :class="{ 'active': active }" @click="active = !active"><span>취소조회</span></div>
            <div :class="{ 'active': !active }" @click="active = !active"><span>반품조회</span></div>
        </div>
        <div class="tab-content">
            <div class="cancel-content" v-show="active">
                <div class="period-check">
                    <label class="date">
                        <input type="date" name="startDate" class="form-basic" placeholder="시작날짜">
                    </label>
                    <span>~</span>
                    <label class="date">
                        <input type="date" name="endDate" class="form-basic" placeholder="종료날짜">
                    </label>
                    <select name="" id="" class="select-small-arrow">
                        <option value="조회기간">조회기간</option>
                        <option value="week">1주</option>
                        <option value="month">1개월</option>
                        <option value="year">1년</option>
                    </select>
                    <label class="search"><input type="text" name="" id="" class="form-basic"
                            placeholder="검색어를 입력하세요"></label>
                    <button type="button" class="btn btn-black">조회</button>
                </div>
                <ul class="order-list-wrap">
                    <li class="order-list" v-for="(item, index) in items" :key="'cancel-' + index">
                        <div class="row1">
                            <p><b>주문 상세보기</b><nuxt-link to="/">(20230620-0001913)</nuxt-link></p>
                            <p>2023-01-17 12:00:00</p>
                        </div>
                        <div class="row2">
                            <div class="item-thumbnail">
                                <nuxt-link to="/">
                                    <img class="thumbnail" :src="item.thumbnail.thumbnail" alt="썸네일">
                                </nuxt-link>
                            </div>
                            <div class="item-info">
                                <!-- 태그 -->
                                <ul class="item-badge">
                                    <li class="badge badge-rank"><span>1++B</span></li>
                                    <li class="badge badge-fat no8"><span>N0.8</span></li>
                                    <li class="badge badge-frozen">
                                        <span>
                                            <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                        </span>
                                        <span>냉동</span>
                                    </li>
                                    <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                </ul>
                                <!-- 정보 -->
                                <div class="item-detail">
                                    <div class="item-desc">
                                        <div class="item-title">
                                            <p class="brand">{{ item.info.title.brand }}</p>
                                            <nuxt-link to="/">
                                                <p class="main">{{ item.info.title.main }}</p>
                                                <p class="sub">{{ item.info.title.sub }}</p>
                                            </nuxt-link>
                                        </div>
                                        <div class="item-process">
                                            <p class="process process-number">
                                                <span>이력/가공/도축</span>
                                                <span><nuxt-link to="/">00215719766</nuxt-link></span>
                                            </p>
                                        </div>
                                        <div class="certificate">등급판정확인서/도축검사증명서</div>
                                    </div>
                                    <div class="item-desc2 weight">99.9kg / 1개</div>
                                    <div class="item-desc2 sell">
                                        <span class="sell-price">판매가 1,057,213원</span>
                                        <span class="reserves">적립금 : 30,000원</span>
                                    </div>
                                    <div class="item-desc2 status">취소처리중<span><a href="/"></a></span></div>
                                    <!-- <div class="item-desc2 status">취소중<span><a href="/"></a></span></div> -->
                                </div>
                            </div>
                        </div>
                        <div class="row3 shipping-info">
                            <p>
                                배송정보 : 무료배송 (CJ대한통운 냉장 직배송)
                            </p>
                            <!-- <div class="btn-wrap">
                                <span class="btn btn-small btn-default">배송조회</span>   
                                <span class="btn btn-small btn-default">반품신청</span>   
                                <span class="btn btn-small btn-secondary">후기작성</span>
                            </div> -->
                        </div>
                    </li>
                </ul>
                <etc-pagination class="pc" />
            </div>
            <div class="return-wrap" v-show="!active">
                <div class="period-check">
                    <label class="date">
                        <input type="date" name="startDate" class="form-basic" placeholder="시작날짜">
                    </label>
                    <span>~</span>
                    <label class="date">
                        <input type="date" name="endDate" class="form-basic" placeholder="종료날짜">
                    </label>
                    <select name="" id="" class="select-small-arrow">
                        <option value="조회기간">조회기간</option>
                        <option value="week">1주</option>
                        <option value="month">1개월</option>
                        <option value="year">1년</option>
                    </select>
                    <label class="search"><input type="text" name="" id="" class="form-basic"
                            placeholder="검색어를 입력하세요"></label>
                    <button type="button" class="btn btn-black">조회</button>
                </div>
                <ul class="order-list-wrap">
                    <li class="order-list" v-for="(item, index) in items" :key="'cancel-' + index">
                        <div class="row1">
                            <p><b>주문 상세보기</b>(20230620-0001913)</p>
                            <p>2023-01-17 12:00:00</p>
                        </div>
                        <div class="row2">
                            <div class="item-info">
                                <!-- 태그 -->
                                <ul class="item-badge">
                                    <li class="badge badge-rank"><span>1++B</span></li>
                                    <li class="badge badge-fat no8"><span>N0.8</span></li>
                                    <li class="badge badge-frozen">
                                        <span>
                                            <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                        </span>
                                        <span>냉동</span>
                                    </li>
                                    <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                </ul>
                                <!-- 정보 -->
                                <div class="item-detail">
                                    <div class="item-desc">
                                        <div class="item-title">
                                            <p class="brand">{{ item.info.title.brand }}</p>
                                            <nuxt-link to="/">
                                                <p class="main">{{ item.info.title.main }}</p>
                                                <p class="sub">{{ item.info.title.sub }}</p>
                                            </nuxt-link>
                                        </div>
                                        <div class="item-process">
                                            <p class="process process-number">
                                                <span>이력/가공/도축</span>
                                                <span><nuxt-link to="/">00215719766</nuxt-link></span>
                                            </p>
                                        </div>
                                        <div class="certificate">등급판정확인서/도축검사증명서</div>
                                    </div>
                                    <div class="item-desc2 weight">99.9kg / 1개</div>
                                    <div class="item-desc2 sell">
                                        <div class="sell-dc">
                                            <span>판매가 175,937</span>
                                            <span>상품할인 112,497원</span>
                                            <span>(우수고객쿠폰)쿠폰할인 -29,000원</span>
                                        </div>
                                        판매가 1,057,213원 <span></span>
                                    </div>
                                    <div class="item-desc2 status">반품처리중<span><a href="/">CJ대한통운</a></span></div>
                                    <!-- <div class="item-desc2 status">반품중<span><a href="/">CJ대한통운</a></span></div> -->
                                </div>
                            </div>
                        </div>
                        <div class="row3 shipping-info">
                            <p>
                                배송정보 : 무료배송 (CJ대한통운 냉장 직배송)
                            </p>
                            <!-- <div class="btn-wrap">
                                <span class="btn btn-small btn-default">배송조회</span>   
                                <span class="btn btn-small btn-default">반품신청</span>   
                                <span class="btn btn-small btn-secondary">후기작성</span>
                            </div> -->
                        </div>
                    </li>
                </ul>
                <etc-pagination class="pc" />
            </div>

        </div>
    </section>
</template>
  
<script>
export default {
    layout: "divide",
    data() {
        return {
            active: true,
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
            ],
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<style >
@import url("~/assets/css/page/mypage.css");

.order-cancel .tab-index,
.order-cancel .period-check {
    margin-bottom: 3rem;
}
</style>
  
  