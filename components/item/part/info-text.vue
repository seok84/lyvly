<template>
    <div>
        <table class="basic-item-table text">
            <colgroup>
                <col style="">
                <col style="">
                <col style="">
                <col style="">
                <col style="">
            </colgroup>
            <tbody>
                <!-- 1 -->
                <tr class="row1">
                    <!-- 체크박스 영역 -->
                    <slot />
                    <!-- 라벨 영역 -->
                    <td>
                        <ul class="item-badge">
                            <li class="badge badge-rank">
                                <span>1++B</span>
                            </li>
                            <li class="badge badge-fat no9">
                                <span>NO.9</span>
                            </li>
                            <!-- <li class="badge badge-storage">
                                <span>
                                    <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                                </span>
                                <span>냉장</span>
                            </li> -->
                        </ul>
                    </td>
                    <td rowspan="5">
                        <span><img class="thumbnail" src="~/assets/images/sample/img_logo_sample.png" alt="썸네일"></span>
                    </td>
                    <td></td>
                    <td class="text-red">
                        <span class="unit-accent">kg당 최대 혜택가 10%↓</span>
                        <span class="sells-info tooltip-wrap">
                            <i @click="toolTip = true">?</i>
                            <item-tooltip :toolTip="toolTip" @close="toolTip = false" />
                        </span>
                    </td>
                    <td class="text-blue">
                        <span class="unit-accent">최대 혜택가 10%↓</span>
                    </td>
                </tr>
                <!-- 2 -->
                <tr class="row2">
                    <td class="text-brand">브랜드명</td>
                    <!-- <td></td> -->
                    <td></td>
                    <td class="text-red">
                        <strong>단가(kg당)</strong>
                    </td>
                    <td class="text-blue">
                        <strong>판매가</strong>
                    </td>
                </tr>
                <!-- 3 -->
                <tr class="row3">
                    <td>
                        <strong class="text-big">제목줄이 나오는 영역입니다</strong>
                    </td>
                    <!-- <td></td> -->
                    <td>
                        <strong class="text-big pdl-26">999kg</strong>
                    </td>
                    <td class="text-red">
                        <strong class="text-big">9,999,999</strong>
                        <strong class="text-small">원</strong>
                    </td>
                    <td class="text-big">
                        <strong class="text-big">9,999,999</strong>
                        <strong class="text-small">원</strong>
                    </td>
                </tr>
                <!-- 4 -->
                <tr class="row4">
                    <td class="item-part"><span class="text-gray">윗등심 + 아랫등심 반두분</span></td>
                    <!-- <td></td> -->
                    <td></td>
                    <td>
                        <span class="text-gray text-linethrough">39,800원(kg당)</span>
                    </td>
                    <td>
                        <span class="text-gray text-linethrough">39,800원(kg당)</span>
                    </td>
                </tr>
                <!-- 5 -->

            </tbody>
        </table>
        <!-- 이력 정보 -->
        <div class="item-process">
            <p class="process process-number">
                <span>이력/가공/도축</span>
                <span @click="processModal.modalShow = true">00215719766</span>
            </p>
            <p class="process process-date">
                <span>가공일자</span>
                <span>
                    <b class="extra-bold">2023-06-28</b>
                    <!-- <br class="mobile" /> -->
                    <span>(29개월령)</span>
                </span>
            </p>
            <p class="process process-name">
                <span>가공장명</span>
                <span>송이한우미트송이한우미트</span>
            </p>
            <p class="process process-slaughter">
                <span>도축장명</span>
                <span>농협부천축산물공판장판장</span>
            </p>
        </div>

        <!-- label 20240104 -->
        <div class="item-process  item-benefits-area">
            <ul class="item-benefits">
                <li class="benefit point"><span>행사적립</span>
                </li>
                <li class="benefit coupon"><span>할인혜택</span>
                </li>
                <li class="benefit aging"><span>숙성할인</span>
                </li>
                <!-- 20231219 추가-->
                <li class="benefit"><span>행사할인</span></li>
                <li class="benefit"><span>신선물류</span></li>
                <!-- 20240325 추가 -->
                <li class="benefit"><span>안심한우</span></li>
                <!-- // -->
                <li class="benefit"><span>무항생제</span></li>
            </ul>
        </div>
        

        <!-- 등급 정보 -->
        <ul class="grade-status">
            <li>등지방 13</li>
            <li class="break-point">·</li>
            <li>등심면적 13</li>
            <li class="break-point">·</li>
            <li>근내지방 13</li>
            <li class="break-point">·</li>
            <li>육색 13</li>
            <li class="break-point">·</li>
            <li>지방색 13</li>
            <li class="break-point">·</li>
            <li>조직감 13</li>
            <li class="break-point">·</li>
            <li>성숙도 3</li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        processModal: {
            type: Object,
            default: () => ({
                modalShow: false,
                footer: false,
            }),
        },
        toolTip: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
        }
    },
    methods: {}
}
</script>

<style scoped>
/* 이력정보 */

.item-benefits-area {
    border-top: none;
    padding-top: 0;
}

.item-benefits-area .item-benefits {
    margin-top: 0;
}


.item-process .process {
    display: inline-block;
    margin-right: 1rem;
}


.text .item-process .process span:nth-child(2) {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    margin-left: 0.5rem;
}

.item-process .process .extra-bold {
    color: #000;
    font-weight: 400;
}

/* 노트북 */
@media (max-width:1194px) {}

/* 태블릿 */
@media (max-width:991px) {

    /* 이력정보 */
    .item-process {
        margin-top: 0;
        border: none;
        padding-top: 0;
    }
}

/* 태블릿 */
@media (max-width:768px) {

    /* 등급정보 */
    .grade-status {
        display: none;
    }

}

/* 모바일 */
@media (max-width:480px) {
    .text .item-process .process span:nth-child(2) {
        margin-left: 0;
    }
}
</style>