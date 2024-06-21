<template>
    <section class="sleep-user">
        <div class="user-inner">
            <h3 class="page-title">휴면회원 해제</h3>
            <div class="desc">
                <span>
                    회원님의 계정은 개인정보보호를 위해 1년 이상 라이블리 도매몰을 이용하지
                    않은 계정에 속하여 정보통신망 이용 촉진 및 정보보호 등에 관한 법률에 따
                    라 휴면 계정으로 전환되었습니다.
                    <br />
                    <br />
                    라이블리 도매몰을 다시 이용하시려면,<br />
                    하단의 "계속 이용하기" 버튼을 클릭해주세요.
                </span>
            </div>
            <div class="btn-wrap">
                <nuxt-link to="/" class="btn btn-primary">휴면 해제</nuxt-link>
            </div>
            <p class="info-title">휴면계정시 제한사항</p>
            <ul class="info-desc">
                <li>회원의 개인 정보는 별도 분리 하여 보관</li>
                <li>메일 수신 중지</li>
            </ul>
            <p class="info-title">일반회원 전환시 변경사항</p>
            <ul class="info-desc">
                <li>개인메일 복원 및 메일수신 복원</li>
            </ul>
        </div>
    </section>
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
.sleep-user .user-inner .desc {
    padding: 3rem 2rem;
    margin: 0 0 3rem;
    border-radius: 10px;
    background-color: #fafafa;
}

.sleep-user .desc span {
    line-height: 1.47;
    font-weight: 400;
}

.sleep-user .user-inner .info-title {
    margin-top: 3rem;
}
</style>