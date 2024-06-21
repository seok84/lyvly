<template>
    <div class="alert-modal pin-modal" v-show="open">
        <div class="modal-wrap" :class="{ 'shadow': open }">


            <div class="modal-header">
                <h6 class="modal-logo">
                    <img src="~/assets/images/common/layout/img_logo.png" alt="라이블리 도매몰">
                </h6>
                <h6 class="screen-out">결제 비밀번호 입력 (PIN)</h6>
            </div>
            <div class="modal-body">
                <div class="modal-content">

                    <p>{{ userName }}({{ userLoginID }})님의</p>
                    <strong>비밀번호 입력</strong>

                    <div class="pin-password">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <nuxt-link to="/">비밀번호 재설정</nuxt-link>

                    <div class="number-pad-container">
                        <!-- 확인필요 -->
                        <!-- <button type="button" class="number-pad number" v-for="number in numberPad"
                        @click.prevent="inputPinNumber(number)">{{ number }}</button> -->
                        <span class="number-pad number">1</span>
                        <span class="number-pad number">2</span>
                        <span class="number-pad number">3</span>
                        <span class="number-pad number">4</span>
                        <span class="number-pad number">5</span>
                        <span class="number-pad number">6</span>
                        <span class="number-pad number">7</span>
                        <span class="number-pad number">8</span>
                        <span class="number-pad number">9</span>
                        <button type="button" class="number-pad delete-all" @click="deletePinNumberAll()">전체삭제</button>
                        <span class="number-pad number">0</span>
                        <button type="button" class="number-pad delete-prev" @click="deletePinNumber()">지우기</button>
                    </div>
                    <!-- <button type="button" class="screen-out" @click="submit()"> [확 인] </button>
                    <button type="button" class="screen-out" @click="closeModal()"> [ 취 소 ]</button> -->
                </div>
            </div>
            <span class="modal-close black" @click="closeModal()">닫기</span>

        </div>
        <div class="dimmed-bg" v-if="open" @click=""></div>
    </div>
</template>
<script>
export default {
    props: {
        open: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            pinNumber: '',
            numberPad: [],
            userName: '김온파',
            userLoginID: 'kimonp012',
        }
    },
    mounted() {
        this.shuffleNumber();
    },
    methods: {
        submit() {
            if (this.pinNumber === '' || this.pinNumber.length !== 6) {
                this.$saleson.alert('PIN 번호 6자리를 입력해 주십시오.');
                return;
            }

            this.$emit('pinNumber', this.pinNumber);
            this.closeModal();
        },
        closeModal() {
            this.pinNumber = '';
            this.displayPasswordIcon();
            this.shuffleNumber();
            this.$emit('close')
        },


        /**
         * [PINPAY] pin number 숫자 섞기
         */
        shuffleNumber() {
            const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            for (let i = numbers.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
            }
            this.numberPad = numbers;
        },

        inputPinNumber(n) {
            if (this.pinNumber.length < 6) {
                this.pinNumber = this.pinNumber + '' + n;
            }

            this.displayPasswordIcon();
        },

        deletePinNumber() {
            if (this.pinNumber.length > 0) {
                this.pinNumber = this.pinNumber.substring(0, this.pinNumber.length - 1);
            }

            this.displayPasswordIcon();
        },

        deletePinNumberAll() {
            this.pinNumber = '';
            this.displayPasswordIcon();
        },

        displayPasswordIcon() {
            const passwordDots = document.querySelectorAll('.pin-password span');
            passwordDots.forEach((dot, index) => {
                if (index < this.pinNumber.length) {
                    dot.classList.add('on')
                } else {
                    dot.classList.remove('on')
                }
            });
        },
    },
}
</script>
<style scoped>
.alert-modal .screen-out {
    display: none;
}

.alert-modal {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

.alert-modal {
    z-index: 9999;
}

.alert-modal .modal-header {
    background-color: #ffffff;
    padding: 2rem 1.6rem 0;
}

.alert-modal .modal-header img {
    height: 3.4rem;
}

.alert-modal .modal-wrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 36rem;
    overflow: hidden;
    z-index: 1;
}

.alert-modal .modal-wrap.shadow {
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.08);
}

.alert-modal .modal-close {
    position: absolute;
    top: 3rem;
    right: 1rem;
    transform: translateY(-50%);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    color: #000;
    font-size: 0;
    background: url('~/assets/images/common/ico_close_black.png') no-repeat center / 1.7rem auto;
    cursor: pointer;
}

.alert-modal .modal-body {
    padding: 0;
    background-color: #fff;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    font-size: 1.4rem;
    line-height: 1.43;
}

.alert-modal .modal-content {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 6rem 0 0;
}

.alert-modal .modal-content>p {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 0.8rem;
}


.alert-modal .modal-content>strong {
    font-size: 2.6rem;
    font-weight: 800;
    margin-bottom: 4rem;
}

.alert-modal .pin-password {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 4rem;
}


.alert-modal .modal-content>a {
    font-weight: 500;
    font-size: 1.4rem;
    color: #979797;
    padding-right: 2rem;
    background: url("~/assets/images/common/arrow/ico_arr_gray_large_right.png") no-repeat right center / auto 110%;
}

/* modal-full */
.alert-modal .modal-full .modal-wrap {
    max-width: 100vw;
    height: 100vh;
    border-radius: 0;
}

.alert-modal .modal-full .modal-wrap .modal-body {
    height: 100%;
}

@media (max-width:480px) {
    .alert-modal .modal-wrap {
        margin: 0;
        width: 100vw;
        height: 100vh;
    }

    .alert-modal .modal-body,
    .alert-modal .modal-content,
    .number-pad-container {
        flex: 1 1 auto;
    }

}

/* SKC */
.number-pad-container {
    display: flex;
    flex-wrap: wrap;
    background-color: #da0015;
    padding: 3rem 1.6rem;
    margin-top: 6.2rem;
}

.number-pad {
    flex: none;
    width: 100%;
    display: inline-flex;
    max-width: 33.3%;
    font-size: 2.6rem;
    box-sizing: border-box;
    padding: 1.5rem 2rem;
    color: #ffffff;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.number-pad.delete-prev {
    font-size: 0;
    background: url("~/assets/images/common/input/img_delete_prev.png") no-repeat center / auto 19px;
}

.number-pad.delete-all {
    font-size: 2rem;
}

.pin-password span {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #eeeeee;
    margin-left: 1.4rem;
}

.pin-password span:first-child {
    margin-left: 0;
}

.pin-password span.on {
    background-color: #ff3145;
}
</style>
