<template>
    <section class="item-guide">
        <p class="head-title">마이페이지 쿠폰</p>
        <div class="coupon-container">
            <div class="box">
                <div class="content-top">
                    <div class="coupon-item">
                        <div class="coupon-body">
                            <span class="ico"></span>
                            <p class="coupon-name">신규가입 할인쿠폰</p>
                            <p class="sale"><span>20</span>%</p>
                        </div>
                        <div class="coupon-head"><span>COUPON</span></div>
                    </div>
                    <span class="showing-item">적용상품보기</span>
                </div>
                <div class="content-bottom">
                    <p class="coupon-title">신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰</p>
                    <span>100,000 원 이상 구매 시 사용가능</span>
                    <span>2023-06-28 ~ 2023-07-28</span>
                </div>
            </div>

        </div>
        <div class="coupon-container deActive">
            <div class="content-top">
                <div class="coupon-item">
                    <div class="coupon-body">
                        <span class="ico"></span>
                        <p class="coupon-name">신규가입 할인쿠폰</p>
                        <p class="sale"><span>20</span>%</p>
                    </div>
                    <div class="coupon-head"><span>COUPON</span></div>
                </div>
                <span class="showing-item">적용상품보기</span>
            </div>
            <div class="content-bottom">
                <p class="coupon-title">신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰</p>
                <span>100,000 원 이상 구매 시 사용가능</span>
                <span>2023-06-28 ~ 2023-07-28</span>
            </div>

        </div>
        <p class="head-title">아이템 리스트 요소</p>
        <p class="sub-desc">아이템 정보 - 가격</p>
        <div class="item-price red">
            <p class="unit-accent">
                최대 혜택가 10%↓
            </p>
            <p class="unit">단가(kg당)</p>
            <p rel="판매가" class="sells"><span>39,800<strong>원</strong></span><span>5.4kg</span></p>
            <p rel="소비자가" class="consumer">44,000 원(kg당)</p>
        </div>
        <br>
        <div class="item-price blue">
            <p class="unit-accent">
                최대 혜택가 10%↓
            </p>
            <p class="unit">단가(kg당)</p>
            <p rel="판매가" class="sells"><span>39,800<strong>원</strong></span><span>5.4kg</span></p>
            <p rel="소비자가" class="consumer">44,000 원(kg당)</p>
        </div>

        <p class="sub-desc">아이템 정보 - 뱃지</p>
        <ul class="item-badge">
            <li class="badge badge-rank">
                <span>1++B</span>
            </li>
            <li class="badge badge-fat no1">
                <span>NO.1</span>
            </li>
            <li class="badge badge-fat no2">
                <span>NO.2</span>
            </li>
            <li class="badge badge-fat no3">
                <span>NO.3</span>
            </li>
            <li class="badge badge-fat no4">
                <span>NO.4</span>
            </li>
            <li class="badge badge-fat no5">
                <span>NO.5</span>
            </li>
            <li class="badge badge-fat no6">
                <span>NO.6</span>
            </li>
            <li class="badge badge-fat no7">
                <span>NO.7</span>
            </li>
            <li class="badge badge-fat no8">
                <span>NO.8</span>
            </li>
            <li class="badge badge-fat no9">
                <span>NO.9</span>
            </li>
            <li class="badge badge-storage">
                <span>
                    <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                </span>
                <span>냉장</span>
            </li>
            <li class="badge badge-frozen">
                <span>
                    <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                </span>
                <span>냉동</span>
            </li>
            <li class="badge badge-antibiotic"><span>무항생제</span></li>
            <li class="badge badge-fresh">
                <span>
                    <img src="~/assets/images/common/items/ico_fresh.png" alt="신선물류">
                </span>
                <span>신선물류</span>
            </li>
        </ul>

        <p class="sub-desc">아이템 정보 - 혜택</p>
        <ul class="item-benefits">
            <li class="benefit point"><span>행사할인 </span>
                <span>
                    <img src="~/assets/images/common/items/ico_point.png" alt="적립혜택">
                </span>
            </li>
            <li class="benefit coupon"><span>할인혜택</span>
                <span>
                    <img src="~/assets/images/common/items/ico_coupon.png" alt="즉시할인">
                </span>
            </li>
            <li class="benefit discount"><span>숙성할인</span>
                <span>
                    <img src="~/assets/images/common/items/ico_aging.png" alt="숙성할인">
                </span>
            </li>
        </ul>
        <p class="sub-desc">아이템 정보 - 기타</p>
        <div class="sells-info">
            <i>?</i>
        </div>

        <p class="sub-desc">툴팁</p>
        <div style="margin: 0 0 1rem; position: relative;">
            <span class="sells-info tooltip-wrap" @mouseover="showTooltip['sample'] = true"><i>?</i>
                <article class="tooltip" v-if="showTooltip['sample']">
                    <div class="tooltip-close" @click="showTooltip['sample'] = false">닫기</div>
                    <div class="tooltip-title">title</div>
                    <div class="tooltip-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto explicabo natus expedita accusamus
                        enim non corporis asperiores magni cum esse, culpa vel consequatur doloremque, voluptatibus velit
                        ratione aut amet quisquam!
                    </div>
                </article>
            </span>
        </div>

        <button type="button" class="btn-code-view" @click="toggleCode($event)">코드 펼치기</button>
        <pre class="code-guide hidden">
            // html
            &lt;span class="sells-info tooltip-wrap" @mouseover="showTooltip['sample'] = true"&gt;&lt;i&gt;?&lt;/i&gt;
                &lt;article class="tooltip" v-if="showTooltip['sample']"&gt;
                    &lt;button type="button" class="tooltip-close"  @click="showTooltip['sample'] = false"&gt;&lt;img src="~/assets/images/common/ico_close_black.png" alt=""&gt;&lt;/button&gt;
                    &lt;div class="tooltip-title"&gt;title&lt;/div&gt;
                    &lt;div class="tooltip-body"&gt;
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto explicabo natus expedita accusamus enim non corporis asperiores magni cum esse, culpa vel consequatur doloremque, voluptatibus velit ratione aut amet quisquam!
                    &lt;/div&gt;
                &lt;/article&gt;
            &lt;/span&gt;
        </pre>
        <!--  -->
        <!--  -->
        <p class="head-title">icon</p>
        <p class="sub-desc">ico ico-list-category</p>
        <div>
            <div class="ico ico-list-category ico-saled-item"></div>
            <div class="ico ico-list-category ico-saled-item active"></div>
            <div class="ico ico-list-category ico-cow"></div>
            <div class="ico ico-list-category ico-cow active"></div>
            <div class="ico ico-list-category ico-pig"></div>
            <div class="ico ico-list-category ico-pig active"></div>
            <div class="ico ico-list-category ico-milkcow"></div>
            <div class="ico ico-list-category ico-milkcow active"></div>
            <div class="ico ico-list-category ico-meat"></div>
            <div class="ico ico-list-category ico-meat active"></div>
        </div>
        <p class="sub-desc">ico ico-m-category</p>
        <span>
            <span class="ico ico-m-category ico-home"></span>
        </span>
        <span class="active">
            <span class="ico ico-m-category ico-home "></span>
        </span>
        <span>
            <span class="ico ico-m-category ico-menu"></span>
        </span>
        <span class="active">
            <span class="ico ico-m-category ico-menu "></span>
        </span>
        <span>
            <span class="ico ico-m-category ico-cart"></span>
        </span>
        <span class="active">
            <span class="ico ico-m-category ico-cart "></span>
        </span>
        <span>
            <span class="ico ico-m-category ico-mypage"></span>
        </span>
        <span class="active">
            <span class="ico ico-m-category ico-mypage "></span>
        </span>
        <span>
            <span class="ico ico-m-category ico-trade"></span>
        </span>
        <span class="active">
            <span class="ico ico-m-category ico-trade "></span>
        </span>
    </section>
</template>
<script>
export default {
    data() {
        return {
            showTooltip: {
                'sample': false,
            },
        }

    },
    methods: {
        // guide 내 토글
        toggleCode(event) {
            let target = event.currentTarget
            target.nextElementSibling.classList.toggle('hidden')
        }

    },
}
</script>
<style>
@import url("~/assets/css/page/mypage.css");

.item-guide .ico {
    display: inline-block;
    width: 3rem;
    height: 3rem;
}
</style>