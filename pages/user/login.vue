<template>
    <section class="login">
        <div class="user-inner">
            <h3 class="page-title">로그인</h3>
            <p class="page-sub-desc">
                <strong>라이블리 </strong><b>도매몰</b>에서 즐거운 쇼핑되세요!
            </p>
            <client-only>
                <!-- 아이디 -->
                <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                    <input v-model="loginId" type="text" name="loginId" class="form-basic"
                        :class="{ 'invalid': errors.length }" placeholder="ID (4~16자 이내 영문 소문자, 숫자)" />
                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                </ValidationProvider>
                <!-- 비밀번호 -->
                <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback form-pwd">
                    <input v-model="password" type="password" name="password" :class="{ 'invalid': errors.length }"
                        class="form-basic" placeholder="비밀번호" />
                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                </ValidationProvider>
            </client-only>
            <div class="user-check-area">
                <label for="sample06" class="check-wrap"><input type="checkbox" name="checkboxSample" id="sample06">
                    <span>아이디 저장</span></label>
                <div class="user-info">
                    <nuxt-link to="/user/find-idpw">아이디</nuxt-link>
                    <span class="dot-divider"></span>
                    <nuxt-link to="/user/find-idpw">비밀번호 찾기</nuxt-link>
                    <span class="divider"></span>
                    <nuxt-link to="/user/join">회원가입</nuxt-link>
                </div>
            </div>
            <div class="btn-wrap">
                <!-- 아이디/비밀번호 작성 후 기존회원 휴대폰 인증  팝업 노출 -->
                <button class="btn btn-secondary" @click="hideModal.modalShow = true">로그인</button>
            </div>
        </div>
        <div class="inner pc">
            <nuxt-link to="/" class="ad-area">
                <img src="~/static/images/banner/img_user_banner_pc.png" class="" :alt="adMessage">
            </nuxt-link>
        </div>
        <div class="inner mobile">
            <nuxt-link to="/" class="ad-area">
                <img src="~/static/images/banner/img_user_banner_mc.png" class="" :alt="adMessage">
            </nuxt-link>
        </div>


        <modal-default :modalInfo="hideModal.modalInfo" :modalShow="hideModal.modalShow"
            @modalClose="hideModal.modalShow = false">
            <div class="modal-content">
                <!-- 텍스트 가운데 정렬 -->
                <div class="only-text">
                    기존회원은 휴대폰 인증을 통해 <br />
                    간편하게 가입(이관) 후 이용 가능합니다
                </div>
                <button type="button" class="btn btn-lg btn-primary">확인</button>
            </div>
        </modal-default>
    </section>
</template>

<script>
export default {
    data() {
        return {
            adMessage: '사업자 신규고객 쿠폰 증정이벤트',
            hideModal: {
                modalShow: false,
                modalInfo: {
                    modalFull: false,
                    modalWidthSmall: true,
                    headerShow: false,
                    dimmed: true,
                },
            },
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>
<style scoped>
.login {
    text-align: center;
}

.login .user-inner {
    min-height: unset;
    margin-bottom: 8rem;
}

.login .ad-area {
    display: inline-block;
    margin-bottom: 20rem;
}

.login .ad-area .pc {
    display: inline-block;
}


.page-sub-desc {
    display: block;
    text-align: center;
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 3rem;
}

.page-sub-desc strong {
    color: #f02d40;
    font-weight: 700;
}

.page-sub-desc b {
    font-weight: 700;
}

.login .form-line+.form-line {
    margin-top: 1rem;
}

.login .user-check-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    margin-top: 0.8rem;
}

.login .user-check-area .user-info {
    flex: 1;
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    color: #757575;
}

.dot-divider,
.divider {
    display: inline-block;
    margin: 0 0.8rem;
    background-color: #787878;
}

.dot-divider {
    width: 2px;
    height: 2px;
    border-radius: 100%;
}

.divider {
    width: 1px;
    height: 1.2rem;
}

.login .btn-wrap {
    margin-top: 4rem;
}

.login .btn-wrap .btn {
    font-size: 1.8rem;
}


@media (max-width:768px) {
    .login .ad-area .mobile {
        display: inline-block !important;
    }
}

@media (max-width:480px) {
    .login .user-inner {
        padding-bottom: 4rem;
        margin-bottom: 4rem;
    }

    .login .ad-area {
        margin-bottom: 10rem;
    }

}
</style>
