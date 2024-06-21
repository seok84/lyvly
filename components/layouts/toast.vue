<template>
    <section id="op-toast" style="display: none;" v-show="showAlertToast" ref="opToast">
        <div class="toast_bg">
            <div class="toast_wrap">
                <p>{{ toastText }}</p>
            </div>
            <span class="close" @click="toastClose($event)">닫기</span>
        </div>
    </section>
</template>
<script>
export default {
    name: 'toast',
    data() {
        return {
            // showAlertToast: false, 
        }
    },
    props: {
        toastText: {
            type: String,
            default: '',
        },
        showAlertToast: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toastClose() {
            // this.$refs.opToast.classList.add('animate');
            // setTimeout(() => {
            //     this.$refs.opToast.style.display = 'none';
            //     this.$emit.showAlertToast = false
            //     this.$refs.opToast.classList.remove('animate');
            // }, 2500);
        },
    },
    watch: {
        showAlertToast(value) {
            // if (value == true) {
            //     setTimeout(() => {
            //         this.$refs.opToast.classList.add('animate');
            //     }, 3500);
            //     setTimeout(() => {
            //         this.$emit.showAlertToast = false
            //         this.$refs.opToast.style.display = 'none';
            //         this.$refs.opToast.classList.remove('animate');
            //     }, 4000);
            // }
        }
    }
}
</script>
<style scoped>
/* 
=========
toast
=========
*/

#op-toast {
    position: fixed;
    z-index: 9999;
    top: 60%;
    left: 50%;
    width: 100%;
    height: auto;
    text-align: center;
    transform: translate(-50%, -50%);
}

.toast_bg {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 32.8rem;
    height: 5.2rem;
    margin: 1rem auto;
    padding: 1.6rem 3rem;
    box-sizing: border-box;
    font-size: 1.4rem;
    text-align: left;
    color: #fff;
    background-color: #f02d40;
    border-radius: 3rem;
    box-shadow: 0 15px 15px 0 #ff314530;
}

.animate .toast_bg {
    opacity: 0;
    animation: toastAnimation 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

@keyframes toastAnimation {
    0% {
        transform: translateY(0);
        opacity: 1;
    }

    10% {
        transform: translateY(-10%);
    }

    30% {
        transform: translateY(20%);
        opacity: 1;
    }

    80% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(-100%);
        opacity: 0;
    }
}

.toast_wrap {
    max-width: calc(100% - 3rem);
}

.toast_wrap p {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
}

.toast_bg .close {
    width: 3rem;
    height: 1rem;
    background: url("~/assets/images/common/ico_close_white.png") no-repeat right center / 1rem auto;
    font-size: 0;
    cursor: pointer;
}

@media (max-width:480px) {

    .toast_bg {
        height: auto;
        border-radius: 2rem;
    }

    .toast_wrap p {
        -webkit-line-clamp: 2;
        line-height: 1.4;
        text-align: center;
    }
}
</style>
