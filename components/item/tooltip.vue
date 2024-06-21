<template>
    <article class="tooltip tooltip-benefit-container" v-show="toolTip">
        <div type="button" class="tooltip-close" @click="$emit('close')"></div>
        <div class="tooltip-title">혜택 적용 정보</div>
        <div class="tooltip-body tooltip-benefit-wrap">
            <dl class="tooltip-benefit">
                <dt class="black top">정상 판매가</dt>
                <dd class="black top">147,420원</dd>
                <dt class="">10% 즉시할인</dt>
                <dd class="">14,742원</dd>
                <dt class="">5% 숙성할인</dt>
                <dd class="">14,742원</dd>
                <dt class="black">실결제 금액</dt>
                <dd class="black">147,420원</dd>
                <dt class="">7% 적립혜택</dt>
                <dd class="">14,742원</dd>
                <dt class="last">최대 혜택가<span class="percent">10%↓</span></dt>
                <dd class="last">147,420원</dd>
            </dl>
            <ul class="info-desc">
                <li>최대 혜택가는 할인 및 적립 혜택 모두 반영한 금액</li>
                <li>주문/결제 화면에서 적용하는 쿠폰은 별도 확인</li>
                <li>적립혜택은 배송완료 익일 자동적립</li>
            </ul>
        </div>
    </article>
</template>
<script>
export default {
    props: {
        toolTip: {
            type: Boolean,
            default: false
        },
    },
    methods: {},
}
</script>