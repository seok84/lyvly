<template>
    <div class="item-info-desc">
        <!-- 뱃지 -->
        <ul class="item-badge">
            <slot />
            <li class="badge badge-rank"><span>1++B</span></li>
            <li class="badge badge-fat no8"><span>N0.8</span></li>
            <!-- 20231219 삭제 -->
            <!-- <li class="badge badge-frozen">
                <span>
                    <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                </span>
                <span>냉동</span>
            </li>
            <li class="badge badge-antibiotic"><span>무항생제</span></li> -->
            <li>
                <p class="brand">한우비상</p>
            </li>
        </ul>
        <!-- 타이틀 -->
        <div class="item-title">
            <!-- <p class="brand pc">한우비상</p> -->
            <p class="main">한우암소 등심 제목줄 한줄</p>
            <p class="sub">반두분(윗등심 9.4kg + 아랫등심 7.9kg)</p>
        </div>
        <!-- 가격 정보 pc -->
        <table class="item-price-area">
            <colgroup>
                <col width="24%">
                <col width="38%">
                <col width="38%">
            </colgroup>
            <tbody>
                <tr class="item-price-benefit">
                    <td></td>
                    <td class="consumer">
                        <div class="unit-accent">
                            <strong>kg당 최대 혜택가 15%↓</strong>
                            <span class="sells-info tooltip-wrap">
                                <i @click="toolTip = true">?</i>
                                <item-tooltip :toolTip="toolTip" @close="toolTip = false" />
                            </span>
                        </div>
                    </td>
                    <td class="sells">
                        <div class="sells-accent">
                            <strong>최대 혜택가 10%↓</strong>

                        </div>
                    </td>
                </tr>
                <tr class="unit">
                    <td></td>
                    <td class="consumer">단가</td>
                    <td class="sells">판매가</td>
                </tr>
                <tr class="price">
                    <td class="weight">5.4kg</td>
                    <td class="consumer"><span>39,800<strong>원(kg당)</strong></span></td>
                    <td class="sells"><span>39,800<strong>원</strong></span></td>
                </tr>
                <tr class="price-ori">
                    <td></td>
                    <td class="consumer">44,000 원(kg당)</td>
                    <td class="sells">44,000 원</td>
                </tr>
            </tbody>
        </table>
        <!-- 이력 정보 + 가격 정보 mobile -->
        <div class="divide-wrap">
            <!-- 이력 정보 -->
            <div class="item-process">
                <p class="process process-number">
                    <span>이력/가공/도축</span>
                    <span @click="processModal.modalShow = true">00215719766</span>
                </p>
                <p class="process process-date">
                    <span>가공일자</span>
                    <span>
                        <b>2023-06-28</b>
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
            <!-- 가격 정보 mobile -->
            <div class="item-price-area-mobile">
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
                        <span class="sells-info">
                            <i @click="toolTip = true">?</i>
                            <item-tooltip :toolTip="toolTip" @close="toolTip = false" />
                        </span>
                        <p class="unit">단가</p>
                        <p rel="판매가" class="sells"><span>39,800<strong>원</strong></span></p>
                        <p rel="소비자가" class="consumer">44,000 원(kg당)</p>
                    </div>
                    <div class="item-price blue">
                        <p class="unit-accent">
                            최대 혜택가 15%↓
                        </p>
                        <p class="unit">단가</p>
                        <p rel="판매가" class="sells"><span>39,800<strong>원</strong></span></p>
                        <p rel="소비자가" class="consumer">44,000 원(kg당)</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 혜택 정보 -->
        <ul class="item-benefits">
            <li class="benefit point"><span>행사적립</span>
            </li>
            <li class="benefit coupon"><span>할인혜택</span>
            </li>
            <li class="benefit aging"><span>숙성할인</span>
            </li>
            <!-- 20231219 추가-->
            <li class="benefit"><span>신선물류</span></li>
            <li class="benefit"><span>행사할인</span></li>
            <li class="benefit"><span>무항생제</span></li>
        </ul>
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
        item: Object,
        toolTip: {
            type: Boolean,
            default: false
        },

    },
    data() {
        return {
        }
    }

}
</script>

<style scoped>
@import url('~/assets/css/component/item-info-desc.css');
</style>