<template>
    <!-- 상품상세 또 다른 부위에 들어가는 리스트 참고용 컴포넌트 -->
    <!--  품절 시 class="soldout" -->
    <li>
        <!-- 체크박스 영역 -->
        <label class="check-wrap">
            <input type="checkbox" name="checkboxSample">
        </label>
        <!-- 상품 설명 -->
        <div class="inline-flex">
            <!-- 상품 상세 설명 -->
            <div class="item-title">
                <p class="brand">한우비상</p>
                <p class="main">한우암소 등심 제목줄 한줄</p>
                <p class="sub">반두분(윗등심 9.4kg + 아랫등심 7.9kg)</p>
            </div>
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
                    <span class="sells-info tooltip-wrap">
                        <i @click="toolTip = true">?</i>
                        <item-tooltip :toolTip="toolTip"  @close="toolTip = false" />
                    </span>
                    <p class="unit">단가</p>
                    <p rel="판매가" class="sells"><span>39,800<strong>원</strong></span></p>
                    <p rel="소비자가" class="consumer">44,000 원(kg당)</p>
                </div>
                <div class="item-price blue">
                    <p class="unit-accent">
                        최대 혜택가 10%↓
                    </p>
                    <p class="unit">판매가</p>
                    <p rel="판매가" class="sells"><span>39,800<strong>원</strong></span></p>
                </div>
            </div>
            <!-- 판매 완료 문구 -->
            <div class="soldout-txt">
                <span>판매 완료</span>
            </div>
        </div>
    </li>
</template>
<script>
export default {
    props: {
        toolTip: {
            type: Boolean,
            default: false
        },

    },

    methods: {}
}
</script>

<style scoped>
/* 노트북 */
@media (max-width:1194px) {}

/* 태블릿 */
@media (max-width:991px) {}

/* 태블릿 */
@media (max-width:768px) {}

/* 모바일 */
@media (max-width:480px) {}</style>