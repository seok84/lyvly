<template>
    <!-- 육가공 3차 카테고리 작업 -->
    <section class="item-list-page has-category inner">

        <!-- 상품탐색 mobile -->
        <div class="filter-tab-mobile mobile">
            <!-- 카테고리 메뉴 -->
            <div class="categorie-wrapper" ref="categorieWrapper" v-scroll="handleScroll">
                <div class="categorie-tab type">
                    <div class="categorie-title" @click="toggleFilterCategory">육가공/식(부)자재</div>
                </div>
                <i class="ico-arrow"><img src="~assets/images/common/arrow/ico_drop.png" alt="arrow"></i>
                <div class="categorie-tab brand">
                    <div class="categorie-title" @click="toggleFilterBrand" v-show="displayBrand === ''">2차</div>
                    <div class="categorie-title" @click="toggleFilterBrand">{{ displayBrand }}</div>
                </div>
                <i class="ico-more" @click="toggleFilterBrand"><img src="~assets/images/common/arrow/ico_more.png"
                        alt="moreBtn"></i>
                <i class="ico-arrow"><img src="~assets/images/common/arrow/ico_drop.png" alt="arrow"></i>
                <div class="categorie-tab brand">
                    <div class="categorie-title" @click="toggleFilterThird" v-show="displayThird === ''">3차</div>
                    <div class="categorie-title" @click="toggleFilterThird">{{ displayThird }}</div>
                </div>
                <i class="ico-more" @click="toggleFilterThird"><img src="~assets/images/common/arrow/ico_more.png"
                        alt="moreBtn"></i>
            </div>

            <div class="categorie-content">
                <!-- 필터 내부 요소 -->
                <div class="filter-tab-inner" v-show="showFilterCategory || showFilterBrand || showFilterThird">

                    <!-- 디스플레이 영역 -->
                    <div class="display-area">
                        <p class="choice type">육가공/식(부자재)</p>
                        <i class="ico-arrow" v-show="displayBrand"><img src="~assets/images/common/arrow/ico_drop.png"
                                alt="arrow"></i>
                        <p class="choice brand">{{ displayBrand }}</p>
                        <i class="ico-arrow" v-show="displayThird"><img src="~assets/images/common/arrow/ico_drop.png"
                                alt="arrow"></i>
                        <p class="choice third">{{ displayThird }}</p>
                    </div>

                    <!-- 1차 -->
                    <div class="filter-tab-category" v-show="showFilterCategory">
                        <ul class="square-tab category">
                            <!-- li에 클래스 new 붙이면 N아이콘 생김 -->
                            <li class="categorie-menu" v-for="(item, index) in type" :key="index"
                                :class="{ 'on': selectedType === index }" @click="selectType(index)">
                                <nuxt-link to="/items">{{ item }}</nuxt-link>
                            </li>
                            <li class="categorie-menu" :class="{ 'on': selectedType === 4 }" @click="selectedType = 4">
                                <nuxt-link to="/category/_id">육가공/식(부)자재</nuxt-link>
                            </li>
                        </ul>
                    </div>

                    <!-- 2차 -->
                    <div class="filter-tab-brand" v-show="showFilterBrand">
                        <ul class="square-tab brand">
                            <li class="categorie-menu" v-for="(item, index) in subsidiary" :key="index"
                                :class="{ 'on': selectedSubsidiary === index }" @click="selectSubsidiary(index)">
                                {{ item }}
                            </li>
                        </ul>
                    </div>

                    <!-- 3차 -->
                    <div class="filter-tab-third" v-show="showFilterThird">
                        <ul class="square-tab third">
                            <li class="categorie-menu" v-for="(item, index) in subsidiaryDetail" :key="index"
                                :class="{ 'on': selectedSubsidiaryDetail === index }"
                                @click="selectSubsidiaryDetail(index)">
                                {{ item }}
                            </li>
                        </ul>
                    </div>

                    <!-- 닫기 -->
                    <div class="btn-close" v-show="showFilterCategory || showFilterBrand || showFilterThird"
                        @click="openFilterDefault">
                        닫기
                        <i><img src="~/assets/images/common/arrow/ico_arr_gray_top.png" alt=""></i>
                    </div>
                </div>
            </div>

        </div>

        <!-- 타이틀 -->
        <h2 class="title-h2">{{ contentTitle }}</h2>

        <!--  -->
        <!-- 상품탐색 pc -->
        <div class="filter-tab pc">
            <div class="categorie-wrapper">
                <div class="categorie-tab type">
                    <div class="categorie-title">축종</div>
                    <ul>
                        <li class="categorie-menu" v-for="(item, index) in type" :key="index"
                            :class="{ 'on': selectedType === index }" @click="selectType(index)">
                            <nuxt-link to="/items">{{ item }}</nuxt-link>
                        </li>
                        <li class="categorie-menu" :class="{ 'on': selectedType === 4 }" @click="selectedType = 4">
                            <nuxt-link to="/category/_id">육가공/식(부)자재</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="categorie-tab brand">
                    <div class="categorie-title">카테고리</div>
                    <div>
                        <ul>
                            <li class="categorie-menu" v-for="(item, index) in subsidiary" :key="index"
                                :class="{ 'on': selectedSubsidiary === index }" @click="selectSubsidiary(index)">
                                <p>{{ item }}</p>
                            </li>
                        </ul>
                        <ul>
                            <li class="categorie-menu" v-for="(item, index) in subsidiaryDetail" :key="index"
                                :class="{ 'on': selectedSubsidiaryDetail === index }"
                                @click="selectSubsidiaryDetail(index)">
                                <p>{{ item }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- 필터 -->
        <etc-filter-select />
        <!-- 상품 리스트 -->
        <div class="item-list-container default">
            <item-list class="item-list" :items="items" :cartFn="cartFn" :processModal="processModal" />
        </div>
        <!-- 페이지네비게이션 -->
        <etc-pagination class="pc" />
        <!-- 이력번호 팝업 -->
        <modal-process :processModal="processModal" @modalClose="processModal.modalShow = false" />

    </section>
</template>

<script>
export default {
    data: () => {
        return {
            processModal: {
                modalShow: false
            },
            contentTitle: "육가공/식자재",
            cartFn: true,
            rankFn: false,
            moreBtn: false,

            // 필터
            selectedSubsidiary: 0,
            selectedSubsidiaryDetail: 0,
            selectedType: 4,
            selectedMenu: 0,
            selectedTag: null,
            type: [
                "한우거세",
                "한우암소",
                "육우",
                "한돈",
                // "육가공/식(부)자재",
            ],
            subsidiary: [
                "육가공등",
                "식(부)자재",
            ],
            subsidiaryDetail: [
                "세절육",
                "양념육",
                "가공품",
            ],
            // 모바일
            showFilterDefault: true,
            showFilterCategory: false,
            showFilterBrand: false,
            showFilterThird: false,
            displayType: "",
            displayBrand: "",
            displayThird: "",

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
                            fat: "NO.5",
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
                    },
                },
                {
                    thumbnail:
                    {
                        rank: '3C',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_02.png"),
                        soldOut: false,
                    },
                    info:
                    {
                        badge: {
                            rank: '3C',
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
                            fat: "NO.7",
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
                    },
                },
                {
                    thumbnail:
                    {
                        rank: '1+',
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
                    },
                },
            ],
        }
    },


    mounted() {
    },

    methods: {

        // scroll event
        handleScroll() {
            const categorieWrapper = this.$refs.categorieWrapper
            // let categorieH = this.$refs.categorieTop.offsetHeight;
            if (100 < window.scrollY) {
                categorieWrapper.classList.add("on")
            } else {
                categorieWrapper.classList.remove("on")
            }

        },

        selectType(index) {
            this.selectedType = index;
            this.displayType = this.type[index];
        },
        selectSubsidiary(index) {
            this.selectedSubsidiary = index;
            this.displayBrand = this.subsidiary[index];
            console.log("displayBrand", this.displayBrand)
        },
        selectSubsidiaryDetail(index) {
            this.selectedSubsidiaryDetail = index;
            this.displayThird = this.subsidiaryDetail[index];
            console.log("displayThird", this.displayThird)
        },
        selectMenu(index) {
            this.selectedMenu = index;
        },

        selectRank(index) {
            this.selectedRank = index;
        },
        selectTag(index) {
            if (this.selectedTag === index) {
                this.selectedTag = null;
            } else {
                this.selectedTag = index;
            }
        },
        resetFilter() {
            this.selectedType = 0;
            this.selectedSubsidiary = 0;
            this.selectedSubsidiaryDetail = 0;
            this.selectedMenu = 0;
            this.selectedTag = null;
        },
        // 
        openFilterDefault() {
            this.showFilterBrand = false;
            this.showFilterCategory = false;
            this.showFilterThird = false;
            this.showFilterDefault = true;
        },
        toggleFilterCategory() {
            this.showFilterCategory = !this.showFilterCategory
            this.showFilterBrand = false;
            this.showFilterThird = false;
            this.showFilterDefault = false;
            if (!this.showFilterCategory) {
                this.showFilterDefault = true;
            }
        },
        toggleFilterBrand() {
            this.showFilterBrand = !this.showFilterBrand
            this.showFilterCategory = false;
            this.showFilterThird = false;
            this.showFilterDefault = false;
            if (!this.showFilterBrand) {
                this.showFilterDefault = true;
            }
        },
        toggleFilterThird() {
            this.showFilterThird = !this.showFilterThird
            this.showFilterBrand = false;
            this.showFilterCategory = false;
            this.showFilterDefault = false;
            if (!this.showFilterThird) {
                this.showFilterThird = true;
            }
        },
    }
}
</script>

<style scoped>
@import url(~/assets/css/page/item.css);

/* 카테고리 pc*/
.filter-tab {
    margin-bottom: 6rem;
}

.filter-tab .categorie-wrapper {
    width: 100%;
    max-width: 1194px;
    border-radius: 10px;
    border: solid 1px #eee;
    margin-top: 4rem;
    margin-bottom: 6rem;
}

.filter-tab .categorie-tab {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    cursor: pointer;
}

.filter-tab .categorie-tab.brand {
    flex-wrap: wrap;
}

.filter-tab .categorie-tab ul {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.filter-tab .categorie-tab ul li {
    cursor: pointer;
}

.filter-tab .categorie-title {
    width: 11.6rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: -0.7px;
    color: #000;
    padding: 0 2.5rem;
    background-color: #f6f6f6;
}

.filter-tab .categorie-tab.brand .categorie-title {
    /*width: 11.6rem;*/
    width: 11rem;
}

.filter-tab .categorie-menu {
    min-width: calc(100% / 12);
    height: 6.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.6rem;
    font-weight: normal;
    letter-spacing: -0.8px;
    color: #757575;
    padding: 0 1.5rem;

    text-align: center;
}


.filter-tab .categorie-menu.on {
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: -0.8px;
    color: #f02d40;
}

.filter-tab .categorie-menu:hover {
    font-size: 1.6rem;
    font-weight: normal;
    letter-spacing: -0.8px;
    color: #b2b2b2;
}


/* square-tab */
.filter-tab .square-tab {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2rem;
}

.filter-tab .square-tab li {
    width: calc(100% / 10);
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.6rem;
    font-weight: normal;
    letter-spacing: -0.8px;
    color: #757575;
    /*
    padding: 1.5rem 1.2rem;
    */
    border: solid 1px #eee;
    border-right: solid 1px #eee;
    box-sizing: border-box;
    cursor: pointer;
}

.filter-tab .square-tab li label {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.filter-tab .square-tab li:nth-child(10n),
.filter-tab .square-tab li:last-child {
    border-right: solid 1px #eee;
}

.filter-tab .square-tab li:nth-child(n+11) {
    border-top: 0;
}

.filter-tab .square-tab li:hover {
    font-size: 1.6rem;
    font-weight: normal;
    letter-spacing: -0.8px;
    color: #b2b2b2;
    border: solid 1px #b2b2b2;
}

.filter-tab .square-tab li.on {
    font-size: 1.6rem;
    font-weight: normal;
    letter-spacing: -0.8px;
    color: #f02d40;
    border: solid 1px #f02d40;
}

.filter-tab .square-tab.meat li p:nth-child(2) {
    color: #b2b2b2;
    margin-top: 0.5rem;
}

.filter-tab .square-tab.rank li p:nth-child(2) {
    font-size: 1.4rem;
    font-weight: normal;
    letter-spacing: -0.7px;
    text-align: center;
    color: #b2b2b2;
    margin-top: 0.5rem;
}

.filter-tab .square-tab.meat li.on p:nth-child(2),
.filter-tab .square-tab.rank li.on p:nth-child(2) {
    color: #f02d40;
}

.filter-tab .square-tab.meat li {
    border: none;
}

.filter-tab .square-tab.rank {
    margin-top: 1.4rem;
}



/* tag-tab */
.filter-tab .tag-tab-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.filter-tab .tag-tab {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2.4rem;
}

.filter-tab .tag-tab li {
    width: 10.5rem;
    height: 3.6rem;
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: -0.8px;
    color: #000;
    border-radius: 29px;
    border: solid 1px #eee;
    margin-right: 0.6rem;
    cursor: pointer;
}

.filter-tab .tag-tab li label {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.filter-tab .tag-tab li i {
    width: 1.6rem;
    height: 1.6rem;
    margin-left: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.filter-tab .tag-tab li.fresh i {
    margin-right: 0.3rem;
}

.filter-tab .tag-tab li.coupon {
    color: #602ff0;
}

.tag-tab li.point {
    color: #f02d40;
}

.filter-tab .tag-tab li.fresh {
    color: #2379ca;
}

.filter-tab .tag-tab li.ferment {
    color: #000000;
}

.filter-tab .tag-tab li:hover {
    border: solid 1px #b2b2b2;
}

.filter-tab .tag-tab li.on {
    border: solid 1px #f02d40;
}

.filter-tab .btn-filter-reset {
    width: 10.5rem;
    height: 3.6rem;
    font-size: 1.3rem;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #EEEEEE;
    border-radius: 3rem;
    cursor: pointer;
}

.filter-tab .btn-filter-reset i {
    width: 3rem;
    height: 3rem;
}

/* 카테고리 mobile */
.filter-tab-mobile {
    width: 100%;
    background-color: #fff;
    position: relative;
}

.filter-tab-mobile.on {
    position: fixed;
    top: 11rem;
    max-height: calc(100vh - 10rem);
    overflow: hidden;
}

.filter-tab-mobile .filter-tab-inner {
    position: fixed;
    width: 100%;
    max-height: calc(100vh - 15.5rem);
    padding: 1.6rem;
    background-color: #f6f6f6;
    z-index: 10;
}

.filter-tab-mobile .filter-tab-inner .btn-close {
    width: 12rem;
    height: 2.7rem;
    position: absolute;
    bottom: -2.7rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    letter-spacing: -0.49px;
    text-align: center;
    color: #757575;
    margin: 0 auto;
    border-radius: 0 0 1rem 1rem;
    background-color: #f6f6f6;
    cursor: pointer;
}

.filter-tab-mobile .filter-tab-inner .btn-close i {
    width: 1rem;
    height: .5rem;
    margin-left: 0.8rem;
}

/*디스플레이 영역*/
.filter-tab-mobile .display-area {
    width: 100%;
    height: 4.6rem;
    padding: 13px 10px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.4rem;
    letter-spacing: -0.49px;
}

.filter-tab-mobile .display-area .choice {
    font-weight: bold;
    color: #000;

}

.filter-tab-mobile .display-area .choice.brand {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.filter-tab-mobile .display-area .default {
    font-weight: bold;
    color: #b2b2b2;
}

.filter-tab-mobile .display-area i.ico-arrow {
    width: 2rem;
    height: 2rem;
}

.filter-tab-mobile .filter-tab-default::after {
    position: relative;
    content: "";
    display: block;
    width: 100%;
    height: 8px;
    background-color: #EEEEEE;
    margin-top: 3rem;
}

.filter-tab-mobile .filter-tab-category,
.filter-tab-mobile .filter-tab-brand {
    position: relative;
}

/* 카테고리 메뉴*/
.filter-tab-mobile .categorie-wrapper {
    width: 100%;
    height: 4.6rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top: solid 1px #eee;
    border-bottom: solid 1px transparent;
    padding: 0 1.6rem;
    position: fixed;
    top: 14.4rem;
    background-color: #fff;
    z-index: 10;
}

.filter-tab-mobile .categorie-wrapper.on {
    border-bottom: solid 1px #eee;
}

.filter-tab-mobile .categorie-wrapper i.ico-arrow {
    width: 2rem;
    height: 2rem;
}

.filter-tab-mobile .categorie-wrapper i.ico-more {
    width: 1.4rem;
    height: 1.4rem;
    margin-left: .5rem;
}

.filter-tab-mobile .categorie-wrapper i {
    display: flex;
    align-self: center;
}

.filter-tab-mobile .categorie-content {
    background-color: #ffffff;
    position: relative;
    top: 4.4rem;
}

.filter-tab-mobile .categorie-tab ul {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.filter-tab-mobile .categorie-tab ul li {
    cursor: pointer;
}

.filter-tab-mobile .categorie-menu {
    min-width: calc(100% / 5);
    height: 6.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: normal;
    letter-spacing: -0.8px;
    color: #757575;
    padding: 0 1.5rem;
}

.filter-tab-mobile .categorie-menu.on {
    font-weight: bold;
    letter-spacing: -0.8px;
    color: #f02d40;
}

.filter-tab-mobile .categorie-menu:hover {
    font-weight: normal;
    letter-spacing: -0.8px;
    color: #b2b2b2;
}

/* brand-tab-wrapper */
.filter-tab-mobile .brand-tab-wrapper {
    margin-top: 6rem;
}

.filter-tab-mobile .brand-tab-wrapper .brand-tab-title {
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: -0.63px;
    text-align: center;
    color: #000;
}

.filter-tab-mobile .square-tab.meat {
    margin-top: 0;
    padding: 1rem 1.6rem;
}

.filter-tab-mobile .square-tab.category,
.filter-tab-mobile .square-tab.brand {
    margin-top: 1.4rem;
}

.filter-tab-mobile .choice-brand-modal .square-tab.brand {
    margin-top: 0;
    margin-bottom: 2rem;
}

.filter-tab-mobile .square-tab.rank li {
    width: calc(100% / 3);
    border: solid 1px #eee;
}

.filter-tab-mobile .square-tab li label {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.filter-tab-mobile .square-tab li:hover {
    font-weight: normal;
    letter-spacing: -0.8px;
    color: #b2b2b2;
    border: solid 1px #b2b2b2;
}

.filter-tab-mobile .square-tab li.on {
    font-weight: normal;
    letter-spacing: -0.8px;
    color: #f02d40;
    border: solid 1px #f02d40;
}

.filter-tab-mobile .square-tab.meat li p:nth-child(2) {
    color: #b2b2b2;
    margin-top: 0.5rem;
    flex: 1;
}

.filter-tab-mobile .square-tab.rank li p:nth-child(2) {
    font-size: 1.2rem;
    font-weight: normal;
    letter-spacing: -0.7px;
    text-align: center;
    color: #b2b2b2;
    margin-top: 0.5rem;
}

.filter-tab-mobile .square-tab.meat li.on p:nth-child(2),
.filter-tab-mobile .square-tab.rank li.on p:nth-child(2) {
    color: #f02d40;
}

.filter-tab-mobile .square-tab.meat li {
    border: none;
}

.filter-tab-mobile .square-tab.rank {
    margin-top: 1.4rem;
}

/*btn-more-content*/
.filter-tab-mobile .btn-more-content {
    width: calc(100% - 3.2rem);
    height: 3.6rem;
    background-color: #f02d40;
    border-radius: 2rem;
    font-size: 1.5rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto 0;
    margin-top: 2rem;
    cursor: pointer;
}

.filter-tab-mobile .btn-more-content::after {
    content: '';
    width: 2rem;
    height: 2rem;
    position: relative;
    background: url("~/assets/images/common/arrow/ico_drop_white.png") no-repeat center;
    background-size: cover;
}

@media (max-width: 768px) {
    .item-list-page.has-category .title-h2 {
        margin: 3rem 0;
    }

}

@media (max-width: 480px) {
    .filter-tab-mobile .categorie-wrapper {
        top: 13.4rem;
    }
}
</style>