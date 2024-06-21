<template>
    <div class="private-order">
        <h1 class="title-h1">지정거래</h1>

        <ul class="private-order-list">
            <li>
                <div class="head">
                    <span class="date">2023-01-17</span>
                    <span class="store">과연미트</span>
                </div>
                <div class="body">
                    <div class="col title-area">
                        상품정보 제목줄이 나오는 영역입니다<br>
                        상품정보 제목줄이 나오는 영역입니다<br>
                        상품정보 제목줄이 나오는 영역입니다
                    </div>
                    <div class="col ea-area">10개</div>
                    <div class="col price-area">
                        <div class="small-text">판매가 : 5,000,000원</div>
                        <div class="small-text">할인 : 1,000,000원 <span class="text-red">(20%)</span></div>
                        <div class="price">결제금액 : 4,000,000원</div>
                    </div>
                    <div class="col delivery-area">
                        <strong class="text-blue">직송</strong>
                        <div><span class="text-gray">기한</span> 2023-06-28</div>
                    </div>

                    <div class="col btn-group">
                        <button type="button" class="btn btn-default">견적서보기</button>
                        <button type="button" class="btn btn-primary">주문하기</button>
                    </div>
                </div>
                <div class="foot">
                    <span class="text-red">가공일자 유의</span>
                </div>
            </li>

            <li>
                <div class="head">
                    <span class="date">2023-01-17</span>
                    <span class="store">과연미트</span>
                </div>
                <div class="body">
                    <div class="col title-area">
                        상품정보 제목줄이 나오는 영역입니다<br>
                        상품정보 제목줄이 나오는 영역입니다
                    </div>
                    <div class="col ea-area">10개</div>
                    <div class="col price-area">
                        <div class="small-text">판매가 : 5,000,000원</div>
                        <div class="small-text">할인 : 1,000,000원 <span class="text-red">(20%)</span></div>
                        <div class="price">결제금액 : 4,000,000원</div>
                    </div>
                    <div class="col delivery-area">
                        <strong class="text-blue">직송</strong>
                        <div><span class="text-gray">기한</span> 2023-06-28</div>
                    </div>

                    <div class="col btn-group">
                        <button type="button" class="btn btn-default">견적서보기</button>
                        <button type="button" class="btn btn-primary">주문하기</button>
                    </div>
                </div>
                <div class="foot">
                    <span class="text-red">배송메세지 노출되는 영역</span>
                </div>
            </li>

            <li>
                <div class="head">
                    <span class="date">2023-01-17</span>
                    <span class="store">과연미트</span>
                </div>
                <div class="body">
                    <div class="col title-area">
                        상품정보 제목줄이 나오는 영역입니다
                    </div>
                    <div class="col ea-area">10개</div>
                    <div class="col price-area">
                        <div class="small-text">판매가 : 5,000,000원</div>
                        <div class="small-text">할인 : 1,000,000원 <span class="text-red">(20%)</span></div>
                        <div class="price">결제금액 : 4,000,000원</div>
                    </div>
                    <div class="col delivery-area">
                        <strong class="text-blue">직송</strong>
                        <div><span class="text-gray">기한</span> 2023-06-28</div>
                    </div>

                    <div class="col btn-group">
                        <button type="button" class="btn btn-default">견적서보기</button>
                        <button type="button" class="btn btn-primary">주문하기</button>
                    </div>
                </div>
                <div class="foot">
                    <span class="text-red">배송메세지 노출되는 영역</span>
                </div>
            </li>

            <li>
                <div class="head">
                    <span class="date">2023-01-17</span>
                    <span class="store">과연미트</span>
                </div>
                <div class="body">
                    <div class="col title-area">
                        상품정보 제목줄이 나오는 영역입니다<br>
                        상품정보 제목줄이 나오는 영역입니다<br>
                        상품정보 제목줄이 나오는 영역입니다
                    </div>
                    <div class="col ea-area">10개</div>
                    <div class="col price-area">
                        <div class="small-text">판매가 : 5,000,000원</div>
                        <div class="small-text">할인 : 1,000,000원 <span class="text-red">(20%)</span></div>
                        <div class="price">결제금액 : 4,000,000원</div>
                    </div>
                    <div class="col delivery-area">
                        <strong class="text-blue">직송</strong>
                        <div><span class="text-gray">기한</span> 2023-06-28</div>
                    </div>

                    <div class="col btn-group">
                        <button type="button" class="btn btn-disabled">주문완료</button>
                    </div>
                </div>
                <div class="foot">
                    <span class="text-red">배송메세지 노출되는 영역</span>
                </div>
            </li>

        </ul>

        <!-- pagination -->
        <etc-pagination></etc-pagination>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },

    mounted() {

    },

    methods: {

    },
}
</script>

<style scoped>@import url('~/assets/scss/page/order.scss');</style>
