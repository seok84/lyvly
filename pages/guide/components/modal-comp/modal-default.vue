<template>
    <div></div>
    <!-- 가이드 모달 미사용 -->
    <!-- <div class="modal" :class="{ 'modal-full': modalInfo.modalFull }">
        <div class="modal-wrap">
            <div class="modal-header" :class="{ hide: !modalInfo.headerShow }" v-if="modalInfo.headerShow">
                <h6>{{ modalInfo.modalTitle }}</h6>
            </div>
            <div class="modal-body">
                <div class="modal-content">
                    <slot />
                </div>
            </div>
            <span class="modal-close" @click="$emit('modal-close')">닫기</span>
        </div>
        <div class="dimmed-bg" v-if="modalInfo.dimmed"></div>
    </div> -->
</template>
  
<script>
export default {
    props: {
        modalInfo: {
            type: Object,
            default: () => ({
                modalTitle: "",
                modalFull: false,
                headerShow: true,
                dimmed: true,
            }),
        },
    },
};
</script>
<style scoped>
.modal,
.dimmed-bg {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

.modal {
    z-index: 9999;
}

.dimmed-bg {
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.3);
}

.modal-wrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 80rem;
    border-radius: 1rem;
    overflow: hidden;
    z-index: 1;
}



.modal-header {
    display: block;
    width: 100%;
    line-height: 6rem;
    text-align: center;
    background-color: #ff3145;
    color: #cbd5e1;
    font-size: 2.8rem;
    font-weight: 700;
}

.modal-close {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    color: #000;
    transform: translate(-25%, 25%);
}

.modal-header~.modal-close {
    color: #fff;
}

.modal-body {
    padding: 3rem;
    background-color: #fff;
    display: flex;
    width: 100%;
    box-sizing: border-box;
}

.modal-content {
    flex: 1;
}


/* modal-full */
.modal-full .modal-wrap {
    max-width: 100vw;
    height: 100vh;
    border-radius: 0;
}

.modal-wrap .modal-body {
    height: 100%;
}

/* text-center */
.text-center {
    width: 100%;
    text-align: center;
}
</style>
