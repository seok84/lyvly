<template>
    <div class="gnb-wrap" :class="{ on: categoryMenu }"><!-- 탑배너 닫기 클릭시 position-up 클래스 추가 -->
        <nav class="gnb" @mouseleave="categoryMenu = false" :class="{ off: !categoryMenu }">
            <button class="gnb-button pc" @click="categoryMenu = !categoryMenu">상품탐색</button>
            <div class="inner">
                <h2 class="hidden">상품 카테고리</h2>
                <ul>
                    <li v-for="(item, index) in items" :key="index"
                        :class="{ active: index === itemIndex && categoryMenu == true }" :data-menu="[`menu${index + 1}`]"
                        @mouseenter="itemActive(index)" @mouseover="categoryMenu = true"  @click="mobileUi(index)">
                        <nuxt-link to="/">
                            <span class="thum"><img :src="item.icon" :alt="item.name"></span>
                            <span class="name">{{ item.name }}</span>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/"><span class="name">입점브랜드</span></nuxt-link>
                    </li>
                </ul>
            </div>

            <div class="sub-menu" v-show="categoryMenu">
                <ul>
                    <li class="lnb-depth-01" v-for="(item, index) in items" :key="index"
                        :class="{ active: index === itemIndex }" :data-menu="[`menu${index + 1}`]">
                        <div class="lnb-depth-02-title">
                            <img :src="item.icon" :alt="item.name" :required="true">
                            {{ item.name }}
                            <nuxt-link to="/">전체보기
                                <img src="~/assets/images/common/arrow/ico_arr_next_gray.png" alt="전체보기 링크">
                            </nuxt-link>
                        </div>
                        <ul class="lnb-depth-02">
                            <li v-for="(category, categoryIndex) in categories[index]" :key="categoryIndex">
                                <nuxt-link to="/">{{ category }}</nuxt-link>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>

        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loggedIn: false,
            categoryMenu: false,
            itemIndex: 0,
            items: [
                { name: "한우거세", icon: require("@/assets/images/common/mobile/castrated-hanwoo.png") },
                { name: "한우암소", icon: require("@/assets/images/common/mobile/hanwoo.png") },
                { name: "한돈", icon: require("@/assets/images/common/mobile/pork.png") },
                { name: "육우", icon: require("@/assets/images/common/mobile/beef-cattle.png") },
                { name: "육가공/식(부)자재", icon: require("@/assets/images/common/mobile/meat-processing.png") },
            ],

            categories: [
                ["브랜드명이 길 경우 브랜드명이 길 경우 브랜드명이 길 경우", "카테고리2", "카테고리3", "카테고리4", "카테고리5", "카테고리6", "카테고리7", "카테고리8", "카테고리9", "카테고리10", "카테고리11", "카테고리12", "카테고리13", "카테고리14", "카테고리15", "카테고리16", "카테고리17"],
                ["카테고리A", "카테고리B"],
                ["카테고리X", "카테고리Y", "카테고리Z"],
                ["카테고리1-1", "카테고리1-2", "카테고리1-3"],
                ["카테고리A-1", "카테고리B-2"],
            ]
        }
    },
    watch: {

    },
    methods: {
        //gnb
        toggleGnb() {
            document.querySelector("header .gnb").classList.toggle("off");
            document.querySelector(".gnb-wrap").classList.toggle("on");
        },

        toggleCategoryMenu() {
            this.categoryMenu = !this.categoryMenu;
        },

        itemActive(index) {
            this.itemIndex = index;
        },

        mobileUi(index) {
            //console.log('mobile :: ', this.$el.parentNode)
            const mainGgnb = document.querySelector(".main-gnb")
            const activeItem = document.querySelectorAll(".main-gnb .gnb-wrap .inner .active")

            if (this.$el.parentNode.classList.contains("main-gnb")) {

                activeItem.forEach((el, idx) => {
                    let menuIdx = el.dataset.menu.replace(/[^0-9]/g, "") - 1;
                    if (el.classList.contains('on')) {
                        console.log('click 1')
                        el.classList.remove('on')
                        this.categoryMenu = !this.categoryMenu;
                    } else {
                        console.log('click 2')
                        el.classList.add('on')
                    }
                })

            }
        },

    },
    mounted() {
    }
}
</script>
