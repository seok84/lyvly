<template>
    <div class="filter-tab-mobile">
        <!-- 카테고리 메뉴 -->
        <div class="categorie-wrapper" ref="categorieWrapper" v-scroll="handleScroll">
            <div class="categorie-tab type">
                <div class="categorie-title" @click="toggleFilterCategory" v-show="!displayType">축종</div>
                <div class="categorie-title" @click="toggleFilterCategory">{{ displayType }}</div>
            </div>
            <i class="ico-arrow"><img src="~assets/images/common/arrow/ico_drop.png" alt="arrow"></i>
            <div class="categorie-tab brand">
                <div class="categorie-title" @click="toggleFilterBrand" v-show="displayBrand.length === 0">전체 브랜드</div>
                <div class="categorie-title" @click="toggleFilterBrand">{{ displayBrand }}</div>
            </div>
            <i class="ico-more" @click="toggleFilterBrand"><img src="~assets/images/common/arrow/ico_more.png"
                    alt="moreBtn"></i>
        </div>

        <div class="categorie-content">
            <!-- 판매자 공지 -->
            <div class="seller-notice-featured" v-show="notice">
                <div class="seller-phrase">
                    <p>판매자 공지</p>
                    <p>판매자가 올린 공지가 출력되는 영역 (~7월 2일까지)</p>
                </div>
            </div>
            <!-- 기본 노출 필터 -->
            <div class="filter-tab-default">
                <!-- 도축 탭 -->
                <div class="meat-part-tab-wrapper">
                    <ul class="meat-part-storage">
                        <li :class="{ 'on': selectedStorage === 0 }" @click="selectStorage(0)"><span>냉장</span></li>
                        <li :class="{ 'on': selectedStorage === 1 }" @click="selectStorage(1)"><span>냉동</span></li>
                    </ul>
                    <ul class="meat-part-slaughter">
                        <li :class="{ 'on': selectedSlaughter === 0 }" @click="selectSlaughter(0)"><span>구이</span></li>
                        <li :class="{ 'on': selectedSlaughter === 1 }" @click="selectSlaughter(1)"><span>정육</span></li>
                        <li :class="{ 'on': selectedSlaughter === 2 }" @click="selectSlaughter(2)"><span>부산물 등</span>
                        </li>
                    </ul>
                    <ul class="square-tab meat meat-part-menu">
                        <li v-for="(item, index) in filterMenu" :key="index"
                            :class="{ 'on': selectedMenu === index, 'disabled': item.amount === 0 }"
                            @click="selectMenu(index)">
                            <p>{{ item.name }}</p>
                            <p>({{ item.amount > 999 ? '999+' : item.amount }})</p>
                        </li>
                    </ul>
                </div>
                <!-- 버튼: 브랜드 탭 -->
                <div class="btn-more-content" @click="brandModal.modalShow = true">
                    <span>선택 부위 판매중 브랜드</span>
                </div>
                <!-- 등급 탭 -->
                <ul class="square-tab rank">
                    <li @click="selectRank(-1)" :class="{ 'on': selectedRank === -1 }"><p>전체</p></li>
                    <li v-for="(item, index) in rank" :key="index" :class="{ 'on': index === selectedRank }"
                        @click="selectRank(index)">
                        <p>{{ item }}</p>
                        <p>(99,999원/kg~)</p>
                    </li>
                </ul>

                <!-- 태그형 필터 -->
                <!-- <div class="tag-tab-wrapper"> -->
                <ul class="tag-tab">
                    <li v-for="(item, index) in tag" :key="index"
                        :class="{ 'on': isCheckedTag(index), [item.class]: true }">
                        <label :for="'tagName' + index">
                            <p> {{ item.name }}</p>
                            <i><img :src="item.img" alt="ico"></i>
                            <input type="checkbox" :id="'tagName' + index" :checked="isCheckedTag(index)"
                                @change="toggleCheckedTag(index)" />
                        </label>
                    </li>
                </ul>
                <ul class="tag-tab btn-area">
                    <!-- 버튼: 공유하기 -->
                    <li class="btn-filter-action" @click="">
                        공유하기<i><img src="~/assets/images/common/ico_sns.png" alt="공유하기"></i>
                    </li>
                    <li class="btn-filter-reset" @click="resetFilter">
                        초기화<i><img src="~/assets/images/common/ico-reset.png" alt="reset"></i>
                    </li>
                </ul>
                <!-- 버튼: 초기화 -->
                <!-- <div class="btn-filter-reset" @click="resetFilter">초기화<i><img src="~/assets/images/common/ico-reset.png"
                                alt="reset"></i>
                    </div> -->
                <!-- </div> -->
            </div>
            <!-- 필터 내부 요소 -->
            <div class="filter-tab-inner" v-show="showFilterCategory || showFilterBrand">

                <!-- 디스플레이 영역 -->
                <div class="display-area">
                    <p class="default" v-show="!displayType">축종</p>
                    <p class="choice type">{{ displayType }}</p>
                    <i class="ico-arrow"><img src="~assets/images/common/arrow/ico_drop.png" alt="arrow"></i>
                    <p class="default" v-show="displayBrand.length === 0">대표 브랜드 선택</p>
                    <p class="choice brand">{{ displayBrand }}</p>
                </div>

                <!-- 카테고리 필터 -->
                <div class="filter-tab-category" v-show="showFilterCategory">
                    <ul class="square-tab category">
                        <li class="categorie-menu" v-for="(item, index) in type" :key="index"
                            :class="{ 'on': selectedType === index }" @click="selectType(index)">
                            <nuxt-link to="/items">{{ item }}</nuxt-link>
                        </li>
                        <li class="categorie-menu" :class="{ 'on': selectedType === 4 }" @click="selectedType = 4">
                            <nuxt-link to="/category/_id">육가공/식(부)자재</nuxt-link>
                        </li>
                    </ul>
                </div>

                <!-- 브랜드 필터 -->
                <div class="filter-tab-brand" v-show="showFilterBrand">
                    <ul class="square-tab brand">
                        <!-- li에 클래스 new 붙이면 N아이콘 생김 -->
                        <li class="categorie-menu" v-for="(item, index) in brandPremium" :key="index"
                            :class="{ 'on': selectedBrandPremium === index }" @click="selectBrandPremium(index)">
                            <p>{{ item }}</p>
                        </li>
                    </ul>
                </div>
                <div class="btn-close" v-show="showFilterCategory || showFilterBrand" @click="openFilterDefault">
                    <span>
                        닫기
                        <i><img src="~/assets/images/common/arrow/ico_arr_gray_top.png" alt=""></i>
                    </span>
                </div>
            </div>
        </div>
        <div class="dimmed-bg" v-show="showFilterCategory || showFilterBrand"></div>

        <!-- 브랜드 탭 모달 -->
        <modal-default class="choice-brand-modal" :modalInfo="brandModal.modalInfo" :modalShow="brandModal.modalShow"
            @modalClose="brandModal.modalShow = false">

            <div class="modal-content">
                <ul class="square-tab brand">
                    <li v-for="(item, index) in brand" :key="index" :class="{ 'on': isCheckedBrand(index) }">
                        <label :for="'brandName' + index">
                            <p>{{ item }}</p>
                            <input type="checkbox" :id="'brandName' + index" :checked="isCheckedBrand(index)"
                                @change="toggleCheckedBrand(index)" />
                        </label>
                    </li>
                </ul>
            </div>
            <button type="button" class="btn width-half btn-primary" @click="brandModal.modalShow = false">적용</button>
        </modal-default>

    </div>
</template>

<script>
export default {
    name: 'filterTab',
    data() {
        return {
            showFilterDefault: true,
            showFilterCategory: false,
            showFilterBrand: false,
            selectedBrandPremium: 0,
            selectedType: 0,
            selectedStorage: 0,
            selectedSlaughter: 0,
            selectedMenu: 0,
            checkedItemsBrand: [],
            checkedItemsTag: [],
            selectedRank: -1,
            selectedTag: null,
            notice: true,
            type: [
                "한우거세",
                "한우암소",
                "육우",
                "한돈",
                "육가공/식(부)자재",
            ],
            brandPremium: [
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
            brand: [
                // "전체",
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
            rank: [
                "1++(9)",
                "1++(9)",
                "1++(9)",
                "1++(9)",
                "1++(9)",
                "1++(9)",
                "1++(9)",
                "1++(9)",

            ],
            filterMenu: [
                // "전체",
                {name:'차돌박이', amount: 12},
                {name:'우족', amount: 0},
                {name:'사골', amount: 19},
                {name:'꼬리', amount: 2},
                {name:'잡뼈', amount: 1},
                {name:'갈비덮게살', amount: 0},
                {name:'냉동소머리살', amount: 1001},
                {name:'냉동소머리 뼈(x)', amount: 10},
                {name:'냉동잡육', amount: 9},
                {name:'마구리', amount: 4},
                {name:'냉동갈비 딱지잡육', amount: 2000},
                {name:'냉동목심냉동목심 냉동목심냉동목심', amount: 48},
                {name:'냉동앞다리', amount: 87},
                {name:'냉동우둔', amount: 40},
            ],
            tag: [
                {
                    name: "행사할인",
                    img: require("~/assets/images/common/items/ico_coupon.png"),
                    class: "coupon",
                },
                {
                    name: "행사적립",
                    img: require("~/assets/images/common/items/ico_point.png"),
                    class: "point",
                },
                // {
                //     name: "숙성할인",
                //     img: require("~/assets/images/common/items/ico_aging.png"),
                //     class: "ferment",
                // },
                {
                    name: "신선물류",
                    img: require("~/assets/images/common/items/ico_fresh.png"),
                    class: "fresh",
                },
                {
                    name: "안심한우",
                    img: require("~/assets/images/common/items/ico_safety.png"),
                    class: "",
                },
            ],
            brandModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "브랜드",
                    modalFull: false,
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: false,
                },
            },
            displayType: "",
            displayBrand: "",

        }
    },
    methods: {
        openFilterDefault() {
            this.showFilterBrand = false;
            this.showFilterCategory = false;
            this.showFilterDefault = true;
            console.log("this.showFilterDefault", this.showFilterDefault)
            console.log("this.showFilterCategory", this.showFilterCategory)
            console.log("this.showFilterBrand", this.showFilterBrand)
        },
        toggleFilterCategory() {
            this.showFilterCategory = !this.showFilterCategory
            this.showFilterBrand = false;
            this.showFilterDefault = false;
            if (!this.showFilterCategory) {
                this.showFilterDefault = true;
            }
        },
        toggleFilterBrand() {
            this.showFilterBrand = !this.showFilterBrand
            this.showFilterCategory = false;
            this.showFilterDefault = false;
            if (!this.showFilterBrand) {
                this.showFilterDefault = true;
            }
        },
        selectType(index) {
            this.selectedType = index;
            this.displayType = this.type[index];
        },
        selectBrandPremium(index) {
            this.selectedBrandPremium = index;
            this.displayBrand = this.brandPremium[index];
        },
        selectStorage(index) {
            this.selectedStorage = index;
            this.selectedSlaughter = 0;
            this.selectedMenu = 0;
        },
        selectSlaughter(index) {
            this.selectedSlaughter = index;
            this.selectedMenu = 0;
        },
        selectMenu(index) {
            this.selectedMenu = index;
        },

        selectRank(index) {
            this.selectedRank = index;
        },
        isCheckedTag(index) {

            return this.checkedItemsTag.includes(index);
        },
        toggleCheckedTag(index) {
            if (this.isCheckedTag(index)) {
                this.checkedItemsTag = this.checkedItemsTag.filter(item => item !== index);
            } else {
                this.checkedItemsTag.push(index);
            }
        },
        isCheckedBrand(index) {
            return this.checkedItemsBrand.includes(index);
        },
        toggleCheckedBrand(index) {
            if (this.isCheckedBrand(index)) {
                this.checkedItemsBrand = this.checkedItemsBrand.filter(item => item !== index);
            } else {
                this.checkedItemsBrand.push(index);
            }
        },
        resetFilter() {
            this.selectedBrandPremium = 0;
            this.selectedType = 0;
            this.selectedStorage = 0;
            this.selectedSlaughter = 0;
            this.selectedMenu = 0;
            this.checkedItemsBrand = [];
            this.checkedItemsTag = [];
            this.selectedRank = -1;
            this.selectedTag = null;
        },
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



    }
}
</script>

<style scoped>
@import url('~/assets/css/page/item.css');
</style>