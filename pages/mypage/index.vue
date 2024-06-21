<template>
    <section class="mypage-view mypage-intro">
        <div class="content-title">마이페이지</div>
        <div class="my-info">
            <div class="my-id">
                <div><b>(주)온라인파워스</b> 님은</div>
                <div><b>[사업자회원]</b>입니다</div>
            </div>
            <div class="my-coupon">
                <div><i><img src="~/assets/images/common/mypage/ico_coupon.png" alt="쿠폰"></i>쿠폰</div>
                <div><b>9,999,999</b>장</div>
            </div>
            <div class="my-point">
                <div><i><img src="~/assets/images/common/mypage/ico_point.png" alt="적립금"></i>적립금</div>
                <div><b>9,999,999</b>원</div>
            </div>
        </div>

        <div class="line-title">나의 주문처리 현황 <span>※ 최근 3개월 기준</span></div>
        <div class="process-content">
            <div class="process-wrap">
                <div class="process">
                    <div class="process-name">주문접수</div>
                    <div class="process-value">99</div>
                </div>
                <span class="process-arrow"></span>
                <div class="process">
                    <div class="process-name">결제완료</div>
                    <div class="process-value disable">0</div>
                </div>
                <span class="process-arrow"></span>
                <div class="process">
                    <div class="process-name">배송준비중</div>
                    <div class="process-value disable">0</div>
                </div>
                <br class="mobile">
                <span class="process-arrow"></span>
                <div class="process">
                    <div class="process-name">배송중</div>
                    <div class="process-value">99</div>
                </div>
                <span class="process-arrow"></span>
                <div class="process">
                    <div class="process-name">배송완료</div>
                    <div class="process-value">99</div>
                </div>
            </div>
            <ul class="process-result">
                <li>
                    <div><i><img src="~/assets/images/common/mypage/ico_cancel.png" alt="취소"></i><span>취소</span></div>
                    <div><b>22</b><span>건</span></div>
                </li>
                <li>
                    <div><i><img src="~/assets/images/common/mypage/ico_return.png" alt="반품"></i><span>반품</span></div>
                    <div><b>1</b><span>건</span></div>
                </li>
            </ul>
        </div>
        <layouts-lnb-mypage class="mobile" />
        <div class="copy-link">
            <span class="copy-txt">주소를 복사하여 친구를 쇼핑몰에 초대해보세요</span>
            <span class="form-line form-button">
                <input type="text" class="form-basic" placeholder="https://nhlyvly.com/?reco_id=onlinepowers" />
                <button class="btn btn-black">주소복사</button>
            </span>
        </div>
        <ul class="info-desc">
            <li>추천한 친구가 첫구매 완료시 5,000원 할인 쿠폰이 지급됩니다.</li>
            <li>할인 쿠폰은 2만원 이상 구매시 사용 가능합니다.</li>
        </ul>
    </section>
</template>
  
<script>
export default {
    layout: "divide",
    data() {
        return {
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>
<style scoped>
@import url("~/assets/css/page/mypage.css");

.copy-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    width: 100%;
    height: 8rem;
    border-radius: 10px;
    border: solid 1px #e1e1e1;
    margin-top: 16rem;
}

.copy-link .copy-txt {
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: -0.56px;
}

.copy-link .form-line {
    flex: 1;
    margin-left: 2rem;

}

.copy-link .form-line input,
.copy-link .form-line button {
    height: 4rem !important;
}

.copy-link .form-line input {
    background-color: #f9f9f9;
}

.copy-link .form-line input::placeholder {
    line-height: normal;
}

.copy-link+.info-desc {
    margin-top: 0.8rem;
}

.lnb-wrapper.pc {
    display: none;
}


@media (max-width: 768px) {
    .copy-link {
        flex-direction: column;
        width: 100%;
        height: auto;
        padding: 2rem;
        margin-top: 5rem;
    }

    .copy-link .form-line {
        margin-left: 0;
    }

    .copy-link .copy-txt {
        text-align: left;
    }

    .copy-link .form-line {
        width: 100%;
        margin-top: 1rem;
    }

    .copy-link+.info-desc {
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: -0.42px;
        text-align: left;
        color: #757575;
    }
}
</style>
  