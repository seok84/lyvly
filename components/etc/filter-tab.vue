<template>
    <div class="filter-tab">
        <!-- 카테고리 메뉴 -->
        <div class="categorie-wrapper">
            <div class="categorie-tab type">
                <div class="categorie-title">축종</div>
                <ul>
                    <li class="categorie-menu" v-for="(item, index) in type" :key="index"
                        :class="{ 'on': selectedType === index }" @click="selectType(index)"><nuxt-link to="/items">{{
                        item
                    }}</nuxt-link></li>
                    <li class="categorie-menu" :class="{ 'on': selectedType === 4 }" @click="selectedType = 4">
                        <nuxt-link to="/category/_id">육가공/식(부)자재</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="categorie-tab brand">
                <div class="categorie-title">대표 브랜드</div>
                <ul>
                    <!-- li에 클래스 new 붙이면 N아이콘 생김 -->
                    <li class="categorie-menu on new">
                        <p>신규브랜드 예시</p>
                    </li>
                    <li class="categorie-menu" v-for="(item, index) in brandPremium" :key="index"
                        :class="{ 'on': selectedBrandPremium === index }" @click="selectBrandPremium(index)">
                        <p>{{ item }}</p>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 판매자 공지 -->
        <div class="seller-notice-featured" v-show="notice">
            <div class="seller-phrase">
                <p><i><img src="~/assets/images/common/items/ico_notice.png" alt="ico"></i>판매자 공지</p>
                <p>품질 좋은 고기만을 취급합니다. / 일반 배송 / 010-1234-5678</p>
            </div>
        </div>

        <!-- 도축 탭 -->
        <div class="meat-part-tab-wrapper">
            <ul class="meat-part-storage">
                <li :class="{ 'on': selectedStorage === 0 }" @click="selectStorage(0)"><span>냉장</span></li>
                <li :class="{ 'on': selectedStorage === 1 }" @click="selectStorage(1)"><span>냉동</span></li>
            </ul>
            <ul class="meat-part-slaughter">
                <li :class="{ 'on': selectedSlaughter === 0 }" @click="selectSlaughter(0)"><span>구이</span></li>
                <li :class="{ 'on': selectedSlaughter === 1 }" @click="selectSlaughter(1)"><span>정육</span></li>
                <li :class="{ 'on': selectedSlaughter === 2 }" @click="selectSlaughter(2)"><span>부산물 등</span></li>
            </ul>
            <ul class="square-tab meat meat-part-menu">
                <li v-for="(item, index) in filterMenu" :key="index"
                    :class="{ 'on': selectedMenu === index, 'disabled': item.count === 0 }" @click="selectMenu(index)">
                    <p>{{ item.name }}</p>
                    <p>({{ item.count }})</p>
                </li>
            </ul>
        </div>

        <!-- 브랜드 탭 -->
        <div class="brand-tab-wrapper" v-show="selectedBrandPremium === 0">
            <div class="brand-tab-title">선택 부위 판매중 브랜드</div>
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

        <!-- 등급 탭 -->
        <ul class="square-tab rank">
            <li @click="selectRank(-1)" :class="{ 'on': selectedRank === -1 }">전체</li>
            <li v-for="(item, index) in rank" :key="index" :class="{ 'on': index === selectedRank }"
                @click="selectRank(index)">
                <p>{{ item }}</p>
                <p>(99,999원/kg~)</p>
            </li>
        </ul>
        <div class="tag-tab-wrapper">
            <!-- 태그형 필터 -->
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
            <div class="another-btn-wrap">
                <button type="button" class="btn-share">공유하기<i class="ico"><img src="~/assets/images/common/ico_sns.png"
                            alt="공유하기"></i></button>
                <!-- 버튼: 초기화 -->
                <div class="btn-filter-reset" @click="resetFilter">초기화<i><img src="~/assets/images/common/ico-reset.png"
                            alt="reset"></i></div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'filterTab',
    data() {
        return {
            selectedBrandPremium: 0,
            selectedType: 0,
            selectedStorage: 0,
            selectedSlaughter: 0,
            selectedMenu: 0,
            checkedItemsBrand: [],
            checkedItemsTag: [],
            selectedRank: -1,
            notice: true,
            type: [
                "한우거세",
                "한우암소",
                "육우",
                "한돈",
                // "육가공/식(부)자재",
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
                { name: "차돌박이", count: 0 },
                { name: "우족", count: 90 },
                { name: "사골", count: 170 },
                { name: "꼬리", count: 480 },
                { name: "잡뼈", count: 0 },
                { name: "갈비덮게살", count: 420 },
                { name: "냉동소머리살", count: 740 },
                { name: "냉동소머리 뼈(x)", count: 600 },
                { name: "냉동잡육", count: 280 },
                { name: "마구리", count: 700 },
                { name: "냉동갈비 딱지잡육", count: 530 },
                { name: "냉동목심 냉동목심 냉동목심 냉동목심", count: 510 },
                { name: "냉동앞다리", count: 1000 },
                { name: "냉동우둔", count: 320 }
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
            ]

        }
    },
    methods: {
        selectType(index) {
            this.selectedType = index;
        },
        selectBrandPremium(index) {
            this.selectedBrandPremium = index;
            console.log(this.selectedBrandPremium)
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
        resetFilter() {
            this.selectedBrandPremium = 0;
            this.selectedType = 0;
            this.selectedStorage = 0;
            this.selectedSlaughter = 0;
            this.selectedMenu = 0;
            this.checkedItemsBrand = [];
            this.checkedItemsTag = [];
            this.selectedRank = -1;
        }
    }
}
</script>

<style scoped>
/* 상품필터 */
.filter-tab {
    margin-bottom: 6rem;
}

/* 카테고리 메뉴*/
.filter-tab .categorie-wrapper {
    width: 100%;
    max-width: 1194px;
    border-radius: 10px;
    border: solid 1px #eee;
    margin-top: 4rem;
    margin-bottom: 3rem;
}

.filter-tab .categorie-tab {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    cursor: pointer;
}

.filter-tab .categorie-tab ul {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 3rem;
    flex-wrap: wrap;
    border-bottom: 1px solid #eee;
}

.filter-tab .categorie-tab:last-child ul {
    border-bottom: none;
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

.filter-tab .categorie-menu {
    flex: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 6.5rem;
    width: auto;
    padding-right: 3rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: normal;
    letter-spacing: -0.8px;
    color: #757575;
}


.filter-tab .categorie-menu.on,
.filter-tab .categorie-menu.on a,
.filter-tab .categorie-menu.on p {
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

/* 이벤트상세 판매자공지 */
.filter-tab .seller-notice-featured {
    width: 100%;
    padding: 2rem;
    border: 1px solid #eeeeee;
    border-radius: 2rem;
    background-color: #fff;
    margin: 2rem 0;
}

.filter-tab .seller-notice-featured .seller-phrase {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.filter-tab .seller-notice-featured .seller-phrase p {
    position: relative;
}

.filter-tab .seller-notice-featured .seller-phrase p:nth-child(1) {
    flex: none;
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: -0.9px;
    color: #000000;
    display: flex;
    align-items: center;
}

.filter-tab .seller-notice-featured .seller-phrase p:nth-child(1) i {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
}

.filter-tab .seller-notice-featured .seller-phrase p:nth-child(2) {
    font-size: 1.4rem;
    letter-spacing: -0.7px;
    color: #757575;
    margin-left: 2.5rem;
    flex: 1;
}

/* brand-tab-wrapper */
.filter-tab .brand-tab-wrapper {
    margin-top: 2rem;
}

.filter-tab .brand-tab-wrapper .brand-tab-title {
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: -0.63px;
    text-align: center;
    color: #000;
    line-height: 6rem;
}

/* square-tab */
.filter-tab .square-tab.meat-part-menu li {
    justify-content: flex-start;
    min-height: 6rem;
    height: auto;
    padding: 1.2rem 1rem 1rem;
    border-width: 1px;
    box-sizing: border-box;
}


.filter-tab .square-tab li label {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}



.filter-tab .square-tab.rank li p:nth-child(2) {
    font-size: 1.4rem;
    font-weight: normal;
    letter-spacing: -0.7px;
    text-align: center;
    color: #b2b2b2;
    margin-top: 0.5rem;
}

.filter-tab .square-tab.rank {
    margin-top: 1.4rem;
}

/* meat-part-tab-wrapper */
.filter-tab .meat-part-tab-wrapper {
    border-radius: 10px;
    border: solid 1px #eee;
}

.filter-tab .meat-part-storage {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
}

.filter-tab .meat-part-storage li {
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: -0.63px;
    color: #979797;
    background-color: #f7f8f8;
    cursor: pointer;
}

.filter-tab .meat-part-storage li.on {
    color: #000000;
    background-color: #ffffff;
}

.filter-tab .meat-part-slaughter {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #eee;
}

.filter-tab .meat-part-slaughter li {
    flex: none;
    width: 33.3%;
    line-height: 6rem;
    padding: 0 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: -0.9px;
    color: #757575;
    cursor: pointer;
}

.filter-tab .meat-part-slaughter li span {
    display: inline-block;
    line-height: inherit;
    border-bottom: 3px solid transparent;
}

.filter-tab .meat-part-slaughter li.on span {
    border-bottom: 3px solid #f02d40;
    color: #f02d40;
    padding: 0 2rem;
    font-weight: 600;

}

/* tag-tab */
.filter-tab .tag-tab-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.4rem;
}

.filter-tab .tag-tab {
    display: flex;
    justify-content: flex-start;
    align-items: center;
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

.another-btn-wrap {
    display: flex;
    align-items: center;
}

.filter-tab .btn-filter-reset,
.filter-tab .btn-share {
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
    margin-left: .6rem;
}

.filter-tab .btn-filter-reset:hover,
.filter-tab .btn-share:hover {
    border-color: #b2b2b2;
}

.filter-tab .btn-filter-reset i {
    width: 3rem;
    height: 3rem;
}

.filter-tab .btn-share i img {
    height: 1.8rem;
    margin-left: .2rem;
}


</style>
