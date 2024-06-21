<template>
    <section class="join-complete">
        <div class="inner">
            <h3 class="page-title">회원가입</h3>
            <p class="sub-text">
                <strong>라이블리</strong>&nbsp;회원가입이 모두 완료되었어요!
            </p>
            <div class="animate-area">
                <div class="check-animation">
                    <div class="twinkle-wrap"><span class="twinkle twinkle-L"></span> <span
                            class="twinkle twinkle-R"></span></div>
                    <nuxt-link to="/" class="circle-img">
                        <img src="~/assets/images/common/login/img_animate_circle.png">
                    </nuxt-link>
                </div>
            </div>
            <div class="info-area">
                <p>지금 로그인 하시면 <strong>라이블리 도매몰의 다양한 서비스</strong>를<br /> 이용하실 수 있습니다.</p>
            </div>
            <nuxt-link to="/user/login" class="btn btn-large btn-secondary">로그인</nuxt-link>
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
.join-complete {
    text-align: center;
    min-height: 80vh;
}


.info-area {
    max-width: 46rem;
    margin: 0 auto 4rem;
    padding: 1.4rem 0;
    font-size: 1.5rem;
    text-align: center;
    background-color: #fafafa;
    line-height: 1.5;
    letter-spacing: -0.06rem;
}

.info-area strong {
    font-weight: 700;
}

.join-complete .btn-secondary {
    background-color: #F02D40;
}

/* animate */

.animate-area {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5rem auto;
}

.check-animation {
    width: 10.4rem;
    height: 10.4rem;
    margin: 0 auto;
    position: relative;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle-img {
    width: 10.4rem;
    height: 10.4rem;
    position: relative;
    border-radius: 50%;
    transform-origin: center center;
    transform: scale(1);
    animation: popCircle 0.65s cubic-bezier(0.075, 0.82, 0.165, 1);
}

@keyframes popCircle {
    0% {
        transform: scale(0.7);
    }

    30% {
        transform: scale(0.6);
    }

    100% {
        transform: scale(1);
    }
}

.circle-img::before,
.circle-img::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: inherit;
    top: 0;
    left: 0;
    z-index: 0;
    background-color: #FF7784;
    border-radius: inherit;
    animation: pulsing 1.5s linear infinite;
    z-index: -1;
}

.circle-img:after {
    animation: pulsing1 1.5s linear infinite;
    animation-delay: 0.5s;
}

@keyframes pulsing {
    0% {
        opacity: 1;
        transform: scaleY(1) scaleX(1);
    }

    20% {
        opacity: 0.5;
    }

    70% {
        opacity: 0.2;
        transform: scaleY(1.2) scaleX(1.2);
    }

    80% {
        opacity: 0;
        transform: scaleY(1.15) scaleX(1.15);
    }

    90% {
        opacity: 0;
        transform: scaleY(1) scaleX(1);
        background-color: #FFC4C9;
    }
}

@keyframes pulsing1 {
    0% {
        opacity: 1;
        transform: scaleY(1) scaleX(1);
    }

    20% {
        opacity: 0.5;
    }

    70% {
        opacity: 0.2;
        transform: scaleY(1.2) scaleX(1.2);
    }

    80% {
        opacity: 0;
        transform: scaleY(1.2) scaleX(1.2);
    }

    90% {
        opacity: 0;
        transform: scaleY(1) scaleX(1);
        background-color: #ffffff;
    }
}

.twinkle-wrap {
    width: 130%;
    height: 100%;
    position: absolute;
}

.twinkle {
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    position: absolute;
    transform-origin: center;
    z-index: 0;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 1;
}

.twinkle-L {
    width: 2.8rem;
    height: 3.9rem;
    animation: moveTwinkleL 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-delay: 0.2s;
    top: 0%;
    left: 0%;
    transform: translate(-50%, -50%) scale(1);
    background-image: url("~/assets/images/common/login/img_animate_star_top_left.png");
}

.twinkle-R {
    width: 3.6rem;
    height: 3.1rem;
    animation: moveTwinkleR 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-delay: 0.2s;
    bottom: 0%;
    right: 0%;
    transform: translate(50%, 50%) scale(1);
    background-image: url("~/assets/images/common/login/img_animate_star_bottom_right.png");
}

@keyframes moveTwinkleL {
    0% {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.5);
    }

    10% {}

    100% {
        top: 0%;
        left: 0%;
        transform: translate(-50%, -50%) scale(1);
    }
}

@keyframes moveTwinkleR {
    0% {
        bottom: 50%;
        right: 50%;
        transform: translate(50%, 50%) scale(0.5);
    }

    10% {}

    100% {
        bottom: 0%;
        right: 0%;
        transform: translate(50%, 50%) scale(1);
    }
}

@media (max-width:480px) {


    .animate-area {
        margin: 3.2rem auto;
    }

    .check-animation,
    .circle-img {
        width: 8.5rem;
        height: 8.5rem;
    }

    .twinkle-L {
        width: 2.3rem;
        height: 3.2rem;
    }

    .twinkle-R {
        width: 3rem;
        height: 2.6rem;
    }

    .info-area {
        font-size: 1.4rem;
    }

    .join-complete .btn-secondary {
        font-size: 1.8rem;
    }
}
</style>