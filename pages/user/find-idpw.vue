<template>
    <section class="find-idpw">
        <div class="user-inner">
            <h3 class="page-title">아이디 / 비밀번호 찾기</h3>
            <div class="process" v-if="findContent">
                <!-- 아이디/비밀번호 찾기 -->
                <div class="tab-top">
                    <div class="title" :class="{ active: tabTop }" @click="toggleTab">
                        <span>아이디 찾기</span>
                    </div>
                    <div class="title" :class="{ active: !tabTop }" @click="toggleTab">
                        <span>비밀번호 찾기</span>
                    </div>
                </div>
                <!-- findIdContent -->
                <form action="" v-if="findIdContent">
                    <div class="radio-wrap">
                        <label for="userTypeBusiness">
                            <input type="radio" name="userType" id="userTypeBusiness" @click="businessType = !businessType"
                                checked="checked">
                            <span>사업자회원</span>
                        </label>
                        <label for="userTypeNormal">
                            <input type="radio" name="userType" id="userTypeNormal" @click="businessType = false">
                            <span>개인회원</span>
                        </label>
                    </div>
                    <!-- end radio-wrap -->
                    <client-only>
                        <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback"
                            v-if="businessType">
                            <input v-model="name" type="text" name="name" :class="{ 'invalid': errors.length }"
                                class="form-basic" placeholder="대표자 명" />
                            <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback" v-else>
                            <input v-model="name" type="text" name="name" :class="{ 'invalid': errors.length }"
                                class="form-basic" placeholder="이름 입력" />
                            <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-button">
                            <input v-model="phoneNumber" type="text" name="phoneNumber"
                                :class="{ 'invalid': errors.length }" class="form-basic" placeholder="- 없이 휴대전화 숫자만 입력" />
                            <button class="btn btn-black">인증요청</button>
                            <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback mt-10">
                            <input v-model="authNumber" type="text" name="authNumber" :class="{ 'invalid': errors.length }"
                                placeholder="인증번호 입력" class="form-basic">
                            <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback"
                            v-if="businessType">
                            <input v-model="businessNumber" type="text" name="businessNumber"
                                :class="{ 'invalid': errors.length }" placeholder="사업자번호 입력" class="form-basic">
                            <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </client-only>
                    <div class="btn-wrap">
                        <button type="button" class="btn btn-secondary" @click="findId">아이디 찾기</button>
                    </div>
                </form>
                <!-- findPwdContent" -->
                <form action="" v-if="findPwdContent">
                    <div class="radio-wrap">
                        <label for="userTypeBusiness">
                            <input type="radio" name="userType" id="userTypeBusiness" @click="businessType = !businessType"
                                checked="checked">
                            <span>사업자회원</span>
                        </label>
                        <label for="userTypeNormal">
                            <input type="radio" name="userType" id="userTypeNormal" @click="businessType = false">
                            <span>개인회원</span>
                        </label>
                    </div>
                    <!-- end radio-wrap -->
                    <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback"
                            v-if="businessType">
                            <input v-model="name" type="text" name="name" :class="{ 'invalid': errors.length }"
                                class="form-basic" placeholder="대표자 명" />
                            <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback" v-else>
                            <input v-model="name" type="text" name="name" :class="{ 'invalid': errors.length }"
                                class="form-basic" placeholder="이름 입력" />
                            <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                    <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                        <input v-model="name" type="text" name="name" :class="{ 'invalid': errors.length }"
                            class="form-basic" placeholder="이름 입력" />
                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-button">
                        <input v-model="phoneNumber" type="text" name="phoneNumber" :class="{ 'invalid': errors.length }"
                            class="form-basic" placeholder="- 없이 휴대전화 숫자만 입력" />
                        <button class="btn btn-black">인증요청</button>
                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback mt-10">
                        <input v-model="authNumber" type="text" name="authNumber" :class="{ 'invalid': errors.length }"
                            placeholder="인증번호 입력" class="form-basic">
                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <div class="btn-wrap">
                        <button type="button" class="btn btn-secondary" @click="findPassword">SMS로 임시 비밀번호
                            발송</button>
                    </div>
                </form>
            </div>
            <!-- 아이디 찾기 결과 / 비밀번호 찾기 결과 -->
            <div class="result" v-else>
                <!-- 아이디/비밀번호 찾기 -->
                <div class="tab-top">
                    <div class="title" :class="{ active: tabTop == true }">
                        <span>아이디 찾기</span>
                    </div>
                    <div class="title" :class="{ active: tabTop == false }">
                        <span>비밀번호 찾기</span>
                    </div>
                </div>
                <!-- resultIdContent -->
                <div class="content id-content" v-if="resultIdContent">
                    <div>
                        <p>{{ user.name }}회원님의 아이디는</p>
                        <p><span>{{ user.id }}</span>입니다</p>
                    </div>
                    <div class="btn-wrap">
                        <button type="button" class="btn btn-default">SMS로 아이디 받기</button>
                        <button type="button" class="btn btn-secondary" @click="toggleFindContent">비밀번호 찾기</button>
                    </div>
                    <p class="info-dot">SMS 아이디 받기 시, 등록된 회원정보의 휴대전화번호로 메시지가 발송됩니다.</p>
                </div>
                <!-- resultPwdContent -->
                <div class="content pwd-content" v-if="resultPwdContent">
                    <div>
                        <p>임시 비밀번호가 발송 되었습니다.</p>
                    </div>
                    <div class="btn-wrap">
                        <nuxt-link to="/user/login" class="btn btn-secondary">로그인</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            tabTop: true,
            businessType: true,
            findContent: true,
            findIdContent: true,
            findPwdContent: false,
            resultIdContent: false,
            resultPwdContent: false,
            user: {
                name: '김라이블리',
                id: 'lyvl***'
            }
        }
    },
    methods: {
        toggleTab() {
            this.tabTop = !this.tabTop
            this.findIdContent = !this.findIdContent;
            this.findPwdContent = !this.findPwdContent;
        },
        toggleFindContent() {
            this.tabTop = !this.tabTop;
            this.findContent = true;
            this.findIdContent = false;
            this.findPwdContent = true;
        },
        findId() {
            this.findContent = !this.findContent;
            this.resultIdContent = true;
            this.resultPwdContent = false;
        },
        findPassword() {
            this.findContent = !this.findContent;
            this.resultIdContent = false;
            this.resultPwdContent = true;
        }
    },
}
</script>
<style scoped>
.find-idpw .user-inner {
    padding-bottom: 10vh;
}

.find-idpw .form-line {
    margin-bottom: 1rem;
}

.find-idpw .tab-content .btn-primary {
    margin-top: 3rem;
}

.find-idpw .tab-top {
    display: flex;
    justify-content: center;
    align-items: center;
}

.find-idpw .tab-top .title {
    flex: 1;
    border-bottom: 1px solid #e1e1e1;
    margin-bottom: 3rem;
    text-align: center;
}

.tab-top .title span {
    display: inline-flex;
    align-items: center;
    height: 5.7rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: #979797;
    position: relative;
}

.tab-top .title.active span {
    color: #f02d40;
}

.tab-top .title.active span::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #f02d40;
}

.find-idpw .radio-wrap {
    line-height: 5rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
}

.find-idpw .radio-wrap label+label {
    margin-left: 4rem;
}


.find-idpw .btn-wrap {
    margin-top: 4rem;
}

.find-idpw .result .btn-wrap {
    padding: 0;
    margin: 4rem 0 1rem;
}

.find-idpw .btn-wrap .btn {
    letter-spacing: -0.08rem;
    font-size: 1.8rem;
    font-weight: 700;
}

/* 아이디/비밀번호 찾기 결과 */

.result .content>div {
    text-align: center;
    padding: 1.4rem 0;
    border-radius: 1rem;
    background-color: #fbfbfb;
}

.result .content>div>p {
    font-size: 1.5rem;
    line-height: 1.33;
}

.result .content span {
    font-weight: 700;
}

.result .content .btn-default {
    border-color: #959595;
}

.result .info-dot {
    position: relative;
    line-height: 1.33;
    padding-left: 0.4rem;
    color: #757575;
    font-size: 1.2rem;
    letter-spacing: -0.03rem;
}

.result .info-dot::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 2px;
    background-color: #757575;
    transform-origin: center;
    transform: translateY(6px);
}

@media (max-width:480px) {

    .tab-top .title span {
        height: 4.8rem;
    }

    .find-idpw .btn-wrap .btn {
        height: 5.4rem;
    }
}
</style>