<template>
    <section class="transfer-step01">
        <h3 class="page-title user-inner">기존회원 가입(이관)</h3>
        <div class="text-center">
            농협 라이블리(https://nhlyvly.com/) 기존회원은 휴대폰 인증을 통해 <br class="divider" />
            농협 라이블리 도매몰(https://nhlyvly.biz/)에 간편하게 가입(이관)이 가능합니다<br /><br />
            기존 쇼핑몰에서 이용하셨던 ID, 휴대폰 번호를 동일하게 입력하세요
        </div>
        <div class="user-inner mt-30">
            <form>
                <client-only>
                    <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                        <input v-model="name" type="text" name="name" :class="{ 'invalid': errors.length }"
                            class="form-basic" placeholder="이름 입력" />
                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-button">
                        <input v-model="phoneNumber" type="text" name="phoneNumber" :class="{ 'invalid': errors.length }"
                            class="form-basic" placeholder="- 없이 휴대전화 숫자만 입력" />
                        <button type="button" class="btn btn-black" v-if="phoneVerification">
                            <span>재전송</span>
                        </button>
                        <button type="button" class="btn btn-black" @click="timeLimit()" v-else>
                            <span>인증요청</span>
                        </button>
                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <!-- 인증번호 입력-->
                    <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-button verification-form"
                        v-if="phoneVerification">
                        <span class="time-limit">
                            {{ timerValueMinutes }} : {{ timerValueSeconds }}
                        </span>
                        <input v-model="verificationNumber" type="text" name="verificationNumber"
                            :class="{ 'invalid': errors.length }" class="form-basic" placeholder="인증번호 입력" />
                        <button type="button" class="btn btn-black"
                            @click="phoneVerification = !phoneVerification">인증완료</button>
                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                </client-only>
                <nuxt-link to="/user/transfer-step02" class="btn btn-lg btn-primary mt-30">회원인증</nuxt-link>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            //핸드폰 인증 요청
            phoneVerification: false,
            timerValueMinutes: '3',
            timerValueSeconds: '00',
        }
    },
    methods: {
        timeLimit() {
            this.phoneVerification = !this.phoneVerification


            // 타이머가 시작되는 시간 (3분)
            const targetTime = 3 * 60 * 1000; // 밀리초 단위로 계산

            // 현재 시간
            let currentTime = 0;

            // 1초마다 실행되는 함수
            const updateTimer = () => {
                currentTime += 1000; // 1초를 더함

                // 남은 시간을 계산
                const remainingTime = targetTime - currentTime;

                // 남은 시간이 0보다 작거나 같으면 타이머 종료
                if (remainingTime <= 0) {
                    clearInterval(timerInterval);
                } else {
                    // 분과 초로 변환
                    const minutes = Math.floor(remainingTime / 60000);
                    const seconds = Math.floor((remainingTime % 60000) / 1000);

                    // 타이머 출력
                    this.timerValueMinutes = `${minutes}`;
                    this.timerValueSeconds = String(seconds).padStart(2, '0');
                }
            }

            // 1초마다 updateTimer 함수 실행
            const timerInterval = setInterval(updateTimer, 1000);

        }
    },
}
</script>
<style scoped>
.transfer-step01 {
    min-height: 60vh;
}

.text-center {
    display: block;
    text-align: center;
    font-size: 2rem;
    line-height: 1.25;
}

.text-center .divider {
    display: block;
}

.transfer-step01 .user-inner {
    min-height: unset;
    padding-bottom: 0;
    margin-left: auto;
    margin-right: auto;
}

.transfer-step01 .form-line {
    margin-bottom: 1rem;
}



@media (max-width:767px) {
    .text-center {
        font-size: 1.6rem;
        padding-right: 2rem;
        padding-left: 2rem;
        word-break: keep-all;
    }
}

@media (max-width:480px) {

    .text-center .divider {
        display: none;
    }

    .transfer-step01 form>.btn {

        font-size: 1.8rem;
        margin-bottom: 10vh;
    }

}
</style>