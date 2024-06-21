<template>
    <div>
        <!-- 상품탐색 -->
        <etc-filter-tab-mobile class="mobile" />
        <etc-filter-tab class="pc" />
        <!-- <ul class="item-detail-tab sort-tab pc">
            <li :class="{ 'on': tabIndex === 0 }" @click="tabIndex = 0"><span>상세정보</span></li>
            <li :class="{ 'on': tabIndex === 1 }" @click="tabIndex = 1"><span>상품상세설명</span></li>
            <li :class="{ 'on': tabIndex === 2 }" @click="tabIndex = 2"><span>구매후기(<i>{{ userReview }}</i>)</span></li>
            </ul> -->
        <!-- sorting-area -->
        <div class="sorting-area" ref="target">
            <!-- <p>전체(<i>{{ sortingOptions.length }}</i>)</p> -->
            <div class="filter-wrap" :class="{ 'zindex': processModal.modalShow == true }">
                <div class="check-wrap">
                    <!-- <label for="">
                        <input type="checkbox" name="" id="allCheck" class="">
                        <span>전체선택</span>
                        </label> -->
                    <p class="item-list-whole"><span>{{ sortingOptions.length }}</span>개 상품이 있습니다.</p>
                </div>
                <!-- pc -->
                <div class="filter pc">
                    <label v-for="(option, index) in sortingOptions" :key="index" :for="`filterRadio${index}`">
                        <input type="radio" :name="sortingOptions" :id="`filterRadio${index}`" class="sorting-input"
                            :checked="index === 0" />
                        <span>{{ option }}</span>
                    </label>
                </div>
                <!-- mobile -->
                <div class="filter mobile">
                    <etc-custom-select :options="sortingOptions" :default="sortingOptions[0]" class="select" />
                </div>
            </div>
        </div>
        <!-- <ul class="item-detail-tab mobile">
            <li :class="{ 'on': tabIndex === 0 }" @click="tabIndex = 0"><span>상세정보</span></li>
            <li :class="{ 'on': tabIndex === 1 }" @click="tabIndex = 1"><span>상품상세설명</span></li>
            <li :class="{ 'on': tabIndex === 2 }" @click="tabIndex = 2"><span>구매후기(<i>{{ userReview }}</i>)</span></li>
            </ul> -->
        <!-- 리스트 -->
        <section class="item-detail">
            <!-- 왼쪽 영역 -->
            <article class="item-detail-left">
                <!-- 상세정보 -->
                <div v-show="tabIndex === 0" class="category-list-content">
                    <!-- 썸네일형 리스트 + 텍스트형 리스트 -->
                    <div class="item-list-container">
                        <div class="item-list column" :items="items" :cartFn="cartFn">
                            <!-- 썸네일형 리스트 -->
                            <div class="item horizon modified" v-for="(item, index) in items" :key="index">
                                <!-- 체크박스 -->
                                <div class="check-wrap">
                                    <label>
                                        <input type="checkbox">
                                    </label>
                                </div>
                                <!-- 20231219 -->
                                <div class="pc">
                                    <!-- 썸네일 -->
                                    <item-part-thumbnail :cartFn="cartFn" :item="item.thumbnail" :isThumbnail="isThumbnail"
                                        :expansionStatus="expansionStatus" @expansionModalShow="openCompSwiperModal" />
                                    <!-- 아이템 정보 -->
                                    <item-part-info-desc :processModal="processModal" :toolTip="item.info.showTooltip" />
                                </div>
                                <div class="mobile">
                                    <item-part-thumbnail :cartFn="cartFn" :item="item.thumbnail" :isThumbnail="isThumbnail"
                                        :expansionStatus="expansionStatus" @expansionModalShow="openCompSwiperModal"
                                        class="modified-horizon" />
                                    <item-part-info-desc-title class="modified-horizon" />
                                    <item-part-info-desc-price :processModal="processModal" :toolTip="item.info.showTooltip"
                                        class="modified-horizon" />
                                </div>
                            </div>
                            <!-- 텍스트형 리스트 -->
                            <div class="item text" v-for="(item, index) in items" :key="index">
                                <item-part-info-text class="pc" :processModal="processModal"
                                    :toolTip="item.info.showTooltip">
                                    <th rowspan="6">
                                        <label class="check-wrap">
                                            <input type="checkbox" name="checkboxSample">
                                        </label>
                                    </th>
                                </item-part-info-text>
                                <item-part-info-desc class="mobile" :processModal="processModal"
                                    :toolTip="item.info.showTooltip">
                                    <!-- 체크박스 -->
                                    <li class="check-wrap mobile">
                                        <label>
                                            <input type="checkbox">
                                        </label>
                                    </li>
                                </item-part-info-desc>
                            </div>
                        </div>
                    </div>
                    <!-- 페이지네비게이션/더보기 -->
                    <etc-pagination class="pc" />
                    <button class="btn-more mobile" @click="moreBtn = !moreBtn" :class="{ show: moreBtn }"><span>상품
                            더보기</span></button>
                </div>
                <!-- 상품상세설명 -->
                <div v-show="tabIndex === 1" class="category-list-detail">
                    <div class="photo-area">
                        <img src="~/static/images/notice/20230811.jpg" alt="상품상세설명이미지">
                    </div>
                </div>
                <!-- 구매후기 -->
                <div v-show="tabIndex === 2" class="category-list-review">
                    <div>
                        2차 개발
                    </div>
                </div>
            </article>
            <!-- 오른쪽 영역 -->
            <article class="item-detail-right" :class="{ 'opacity': processModal.modalShow == true }">
                <item-detail-aside-choice-box :class="{ 'fixed': isFixed, 'bottom': isBottom }" />
            </article>
        </section>
        <!-- 이력번호 팝업 -->
        <modal-process :processModal="processModal" @modalClose="processModal.modalShow = false" />
        <!-- 스와이퍼 팝업 -->
        <modal-swiper-modal :swiperModal="swiperModal" @modalClose="swiperModal.modalShow = false"
            :modalShow="swiperModal.modalShow" :swiperSlides="swiperModal.swiperSlides">
        </modal-swiper-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toolTip: false,
            isFixed: false,
            isBottom: false,

            processModal: {
                modalShow: false
            },
            tabIndex: 0,
            viewMore: false,
            brand: [
                "한우거세",
                "한우암소",
                "육우",
                "한돈",
                "육가공/식자재",

            ],
            type: [
                "전체",
                "으뜸축산",
                "태성축산유통",
                "대신육가공",
                "순진한우",
                "중부하누",
                "우의정",
                "진미한우",
                "바를정육연구소",
                "한우지예",
                "숨비한우",
                "한우비상",
            ],
            userReview: '0',
            sortingOptions: [
                "가공일자 빠른 순",
                "중량 낮은 순",
                "중량 높은 순",
                "판매가 낮은 순",
                "판매가 높은 순",
                "단가(kg당) 낮은 순",
                "단가(kg당) 높은 순",
                "개월령 빠른 순",
            ],
            filterActive: false,
            moreBtn: false,
            cartFn: false,
            expansionStatus: true,
            isThumbnail: true,
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
            //스와이퍼 모달
            swiperModal: {
                modalShow: false,
                dimmed: true,
                imagesType: false,
                footer: true,
                swiperSlides: [
                    { imgPath: require("@/static/images/sample/ly_sample_00.jpg"), imgLink: '', altText: 'ly_sample_00' },
                    { imgPath: require("@/static/images/sample/ly_sample_01.jpg"), imgLink: '', altText: 'ly_sample_01' },
                    { imgPath: require("@/static/images/sample/ly_sample_02.jpg"), imgLink: '', altText: 'ly_sample_02' },                
                ]
            },
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);

    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            let windowWidth = window.outerWidth;
            if (windowWidth > 768) {
                const target = this.$refs.target;
                const top = target.getBoundingClientRect();
                this.isFixed = -300 >= top.top
            } else {
                this.isFixed = true;
            }

            const documentHeight = document.documentElement.scrollHeight;
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            if (windowHeight < 1300 && scrollPosition + windowHeight >= documentHeight - 50) {
                this.isBottom = true;
            } else {
                this.isBottom = false;
            }

        },
        openCompSwiperModal(){
            this.$emit('expansionModalShow')
            this.swiperModal.modalShow = !this.swiperModal.modalShow;
            console.log('openCompSwiperModal');
        },
        openListSwiperModal(){
            this.swiperModal.modalShow = !this.swiperModal.modalShow;
            console.log(`category-list-expansionModalShow!`);
        }
    },
}
</script>

<style scoped>
@import url(~/assets/css/page/item.css);

.btn-more {
    margin-top: 6rem;
}

.category-list-detail .photo-area {
    margin-bottom: 4rem;
}

@media (min-width: 768px) {
    .btn-more {
        display: none;
    }

    .item.horizon.modified .pc {
        display: flex;
        width: 100%;
    }
}

@media (max-width:768px) {
    .item.horizon.modified .mobile {
        display: flex !important;
        flex-wrap: wrap;
    }
}
</style>
