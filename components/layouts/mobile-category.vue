<template>
    <div class="mobile category-wrapper">
        <div class="category-menubar">
            <!-- 
                @click.native= 사용
                nuxt-link와 @click 이벤트가 공존할 수 없어서 컴포넌트의 루트 요소 위에 있는 네이티브 이벤트를 호출하는
                navtive로 작성
                this.$route.path === path 변경 고려 필요 
            -->
            <nuxt-link to="/" class="menu-list" :class="{ off: categoryMenu }" @click.native="categoryMenu = false">
                <span class="ico-m-category ico-home"></span>
                <span>홈</span>
            </nuxt-link>
            <div class="menu-list" :class="{ active: categoryMenu }" @click="toggleCategoryMenu()">
                <span class="ico-m-category ico-menu"></span>
                <span>상품탐색</span>
            </div>
            <nuxt-link to="/cart" :class="{ off: categoryMenu }" class="menu-list" @click.native="categoryMenu = false">
                <span class="ico-m-category ico-cart"></span>
                <span>장바구니</span>
            </nuxt-link>
            <nuxt-link to="/mypage" :class="{ off: categoryMenu }" class="menu-list" @click.native="categoryMenu = false">
                <span class="ico-m-category ico-mypage"></span>
                <span>마이페이지</span>
            </nuxt-link>
            <nuxt-link to="/order/step1" :class="{ off: categoryMenu }" class="menu-list"
                @click.native="categoryMenu = false">
                <span class="ico-m-category ico-trade"></span>
                <span>지정거래</span>
            </nuxt-link>
        </div>
        <div class="category-list" v-show="categoryMenu">
            <div class="category-top">
                <div>
                    <nuxt-link to="/pages/user/login" v-if="!loggedIn">로그인</nuxt-link>
                    <nuxt-link to="/pages/user/join" v-if="!loggedIn">회원가입</nuxt-link>
                    <nuxt-link to="/" v-if="loggedIn">로그아웃</nuxt-link>
                    <nuxt-link to="/pages/mypage" v-if="loggedIn">마이페이지</nuxt-link>
                    <nuxt-link to="/" v-if="loggedIn">알림설정</nuxt-link>
                </div>
                <span @click="categoryMenu = false">닫기 <img src="~/assets/images/common/ico_close_black_sm.png"
                        alt="닫기"></span>
            </div>
            <div class="category-content">
                <layouts-gnb />
                <!--
                <ul class="mobile-gnb">
                    <li v-for="(item, index) in items" :key="index" :class="{ active: index === itemIndex }"
                        @click="itemActive(index)">
                        <span>{{ item.name }}</span>
                    </li>
                </ul>

                <ul class="mobile-lnb">
                    <li class="lnb-depth-01" v-for="(item, index) in items" :key="index"
                        :class="{ active: index === itemIndex }" v-show="index === itemIndex">
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
                -->
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'MobileCategory',
    data() {
        return {
            loggedIn: false,
            categoryMenu: false,
            itemIndex: 0,
            items: [
                { name: "한우거세", icon: require("@/assets/images/common/mobile/ico_pic_cow.png") },
                { name: "한우암소", icon: require("@/assets/images/common/mobile/ico_pic_cow.png") },
                { name: "한돈", icon: require("@/assets/images/common/mobile/ico_pic_pig.png") },
                { name: "육우", icon: require("@/assets/images/common/mobile/ico_pic_milkcow.png") },
                { name: "육가공/식자재", icon: require("@/assets/images/common/mobile/ico_pic_meat.png") }
            ],

            categories: [
                ["카테고리1", "카테고리2", "카테고리3", "카테고리4", "카테고리5", "카테고리6", "카테고리7", "카테고리8", "카테고리9", "카테고리10", "카테고리11", "카테고리12", "카테고리13", "카테고리14", "카테고리15", "카테고리16", "카테고리17"],
                ["카테고리A", "카테고리B"],
                ["카테고리X", "카테고리Y", "카테고리Z"],
                ["카테고리1-1", "카테고리1-2", "카테고리1-3"],
                ["카테고리A-1", "카테고리B-2"],
            ]
        };
    },
    methods: {
        toggleCategoryMenu() {
            let categorygnbWrap = document.querySelector('footer .category-list .gnb-wrap')
            let categoryMenuItem = document.querySelector('footer .category-list .gnb .inner > ul > li')

            if (!categoryMenuItem.classList.contains('active')) {
                categorygnbWrap.classList.add('on')
                categoryMenuItem.classList.add('active')

            }

            this.categoryMenu = !this.categoryMenu;
        },
        itemActive(index) {
            this.itemIndex = index;
        }
    }
};
</script>
  
  
<style scoped>
.item-list-page.has-category~footer .category-wrapper.mobile,
.order-step1~footer .category-wrapper.mobile {
    display: none !important;
}

.category-wrapper.mobile {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 106;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.03);
}

.category-menubar {
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
}



.category-menubar .menu-list {
    display: inline-flex;
    flex-direction: column;
    flex: 1;
    cursor: pointer;
    text-align: center;
}

.category-menubar span {
    font-size: 11px;
    white-space: nowrap;
    margin-top: 4px;
}

.category-menubar span,
.category-menubar .nuxt-link-exact-active.off span {
    color: #757575;
}

.category-menubar .nuxt-link-exact-active span,
.category-menubar .active span {
    color: #E73F3F;
}


.category-menubar .ico-m-category {
    display: block;
    width: 30px;
    height: 30px;
    margin: 0 auto;
}


/* 리스트 */
.category-list {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #ffffff;
    z-index: 0;
}

.category-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 3rem 1rem 1.4rem 1.6rem;
    font-size: 1.4rem;
}

.category-top a {
    margin-right: 1.4rem;
}

.category-top span {
    display: inline-flex;
    align-items: center;
}

.category-top span img {
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 4px;
}

.category-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    border-top: 1px solid #f02d40;
    height: calc(100% - 70px);
}

/* mobile-lnb */

.mobile-lnb {
    flex: 1;
    background-color: #fbfbfb;
    border-left: 1px solid #eeeeee;
}

.lnb-depth-01 {
    display: block;
    height: 100%;
}

.lnb-depth-02-title {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1.6rem 1.4rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: #000000;
    background-color: #ffffff;
}

.lnb-depth-02-title>img {
    width: 3rem;
    margin-right: .6rem;
}

.lnb-depth-02-title a {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1 1 auto;
    font-size: 1.3rem;
    text-align: right;
    color: #979797;
}

.lnb-depth-02-title a img {
    width: auto;
    height: .9rem;
    margin-left: 4px;
}

.lnb-depth-02 {
    max-height: calc(100% - 6.2rem);
    overflow-y: auto;
}

.lnb-depth-02 li a {
    display: flex;
    width: 100%;
    padding: 1.3rem 2rem;
    font-size: 1.4rem;
    color: #757575;
}

.lnb-depth-02 li a:hover,
.lnb-depth-02 li a:focus {
    color: #000000;
    font-weight: 600;
}

@media (max-width: 767px) {
    #item-detail-view~footer .category-wrapper.mobile {
        display: none !important;
    }
}
</style>