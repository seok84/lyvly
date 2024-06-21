<template>
    <div class="modal"
        :class="{ 'modal-full': modalInfo.modalFull, 'mobile-full': modalInfo.mobileModalFull, 'show': modalShow }"
        v-show="modalShow">
        <div class="modal-wrap" :class="{ 'shadow': !modalInfo.dimmed, 'width-sm': modalInfo.modalWidthSmall }">
            <div class="modal-header" v-if="modalInfo.headerShow" :class="{ 'white': modalInfo.headerWhite }">
                <h6>{{ modalInfo.modalTitle }}</h6>
            </div>
            <div class="modal-body">
                <!-- 수정이 이루어지는 부분 -->
                <slot />
                <!-- end of 수정이 이루어지는 부분 -->
            </div>
            <span class="modal-close" @click="unfixedModal()"
                :class="{ 'black': modalInfo.headerShow && modalInfo.headerWhite, 'gray': !modalInfo.headerShow }">닫기</span>

        </div>
        <div class="dimmed-bg" v-if="modalInfo.dimmed" @click="unfixedModal()"></div>
    </div>
</template>
  
<script>
export default {
    props: {
        modalInfo: {
            type: Object,
            default: () => ({
                modalTitle: "",
                modalFull: false,
                mobileModalFull: false,
                modalWidthSmall: false,
                headerShow: true,
                headerWhite: false, // modal-header 배경색 컬러 하양으로 변경
                dimmed: true,
            }),
        },
        modalShow: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        unfixedModal() {
            this.$emit('modalClose')
        }
    },
    mounted() {
    },
    watch: {
        modalShow(value) {
            if (value == true) {
                document.body.classList.add('overflow-hidden')
                if (document.body.classList.add('overflow-hidden')) {
                    this.$nextTick(() => {
                        this.$refs.modalBody.scrollTop = 0;
                    });
                }
            } else {
                document.body.classList.remove('overflow-hidden')
            }
        }
    },

};
</script>
<style>
@import url('~/assets/css/component/modal-style.css');
</style>
