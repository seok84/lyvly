<template>
    <div class="order-step2">
        <h1 class="title-h1">주문/결제</h1>

        <section class="complete-message">
            <i><img src="~/assets/images/common/order/img_order_complete.svg" alt=""></i>
            <p class="sucess-message">
                고객님의 주문이 정상적으로<br class="mobile">완료되었습니다.
            </p>
        </section>

        <section class="box order-number-info">
            <span class="th">주문번호</span>
            <nuxt-link to="/" class="order-link">20230620-0001913</nuxt-link>
            <span class="date">2019-12-17 12:00:00</span>
        </section>

        <!-- 신용카드+적립금 결제시 노출 -->
        <section class="box pay-info">
            <h3>결제정보</h3>
            <ul class="table">
                <li>
                    <span class="th">결제방법</span>
                    <span class="td strong">신용카드</span>
                </li>
                <li class="sub">
                    <span class="th">간편결제 : 신용카드</span>
                    <span class="td">40,000원</span>
                </li>
                <li class="sub">
                    <span class="th">적립금</span>
                    <span class="td">2,000원</span>
                </li>
                <li>
                    <span class="th">결제상태</span>
                    <span class="td strong">결제완료</span>
                </li>
                <li>
                    <span class="th">결제일</span>
                    <span class="td strong">2023-01-01  12:00:00</span>
                </li>
            </ul>
        </section>
            
        <!-- 기본 결제정보 -->
        <section class="box pay-info">
            <h3>결제정보</h3>
            <ul class="table">
                <li>
                    <span class="th">결제방법</span>
                    <span class="td strong">신용카드</span>
                </li>
                <li>
                    <span class="th">결제상태</span>
                    <span class="td strong">결제완료</span>
                </li>
                <li>
                    <span class="th">결제일</span>
                    <span class="td strong">2023-01-01  12:00:00</span>
                </li>
            </ul>
        </section>

            
        <section class="box delivery-info">
            <h3>배송지 정보</h3>
            <ul class="table">
                <li>
                    <span class="th">받는분</span>
                    <span class="td text-left strong">홍길동</span>
                </li>
                <li>
                    <span class="th">주소</span>
                    <span class="td text-left strong">[08381] 서울 구로구 디지털로27길 24(벽산디지털밸리) 711호 온라인파워스</span>
                </li>
                <li>
                    <span class="th">휴대전화</span>
                    <span class="td text-left strong">010-1234-5678</span>
                </li>
                <li>
                    <span class="th">일반전화</span>
                    <span class="td text-left strong">02-1234-1234</span>
                </li>
                <li>
                    <span class="th">요청사항</span>
                    <span class="td text-left strong">경비실에 맡겨주세요.</span>
                </li>
            </ul>
        </section>

        <section class="btn-group">
            <button type="button" class="btn btn-default">주문내역 확인</button>
            <button type="button" class="btn btn-primary">쇼핑 계속하기</button>
        </section>

    </div>
</template>
  
<script>
export default {
    data() {
        return {}
    },
    methods: {
    },
    mounted() {
    }
}
</script>
  
<style scoped>
    @import url('~/assets/scss/page/order.scss');
</style>
