<template>
    <section class="mypage-view alert-set user-inner">
        <h3 class="page-title">알림 설정</h3>
        <div class="alert-container">
            <strong>광고성 정보 수신 동의</strong>
            <div class="alert-set-button" :class="{ active: showAlertToast == true }" @click="toggleAlertToast">
                <span class="circle"></span>
            </div>
            <p>쿠폰 지급 등 혜택에 관한 알림을 받을 수 있습니다.</p>
        </div>
        <div class="divider"></div>
        <div class="info-desc">
            <p>정보성 푸시 알림은 위 설정 여부와 무관하게 받을 수 있습니다. 기기의 알림 설정은 휴대폰 설정 > 알림 > 라이블리 도매몰에서 변경할 수 있습니다.</p>
        </div>
        <layouts-toast :toastText="'라이블리 도매몰의 광고성 정보받기에 동의하셨습니다'" :showAlertToast="showAlertToast" />
    </section>
</template>
<script>
export default {
    layout: "divide",
    name: "alertSetPage",
    data() {
        return {
            showAlertToast: false,
        }
    },
    methods: {
        toggleAlertToast() {
            this.showAlertToast = !this.showAlertToast;
        },
    },

}
</script>
<style>
.alert-set .alert-container {
    display: flex;
    flex-wrap: wrap;
}

.alert-set .alert-container strong {
    flex: 1;
    line-height: 3rem;
    font-weight: 700;
    font-size: 1.8rem;
}

.alert-set .alert-container p {
    flex: none;
    width: 100%;
    margin-top: 1rem;
    font-size: 1.4rem;
    color: #7C7E80;
}

.alert-set .divider {
    display: block;
    height: 1px;
    background-color: #EEEEEE;
    margin: 6rem 0 3rem;
}

@media (min-width: 768px) {
    .alert-set .toast_bg {
        max-width: unset;
        width: auto;
    }
}
</style>
