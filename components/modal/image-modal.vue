<template>
    <div class="modal image-modal" :class="{ 'show': imageModal.modalShow }" v-show="imageModal.modalShow">
        <div class="modal-wrap shadow">
            <div class="modal-body">
                <!-- 수정이 이루어지는 부분 -->
                <slot />
                <!-- end of 수정이 이루어지는 부분 -->
            </div>
            <div class="modal-footer" v-if="imageModal.footer">
                <span class="close" @click="unfixedModal()">오늘 하루 안 보기</span>
                <span class="close" @click="unfixedModal()">닫기</span>
            </div>
            <span class="modal-close black" v-if="!imageModal.footer" @click="unfixedModal()">
                닫기
            </span>
        </div>
        <div class="dimmed-bg" v-if="imageModal.dimmed" @click="unfixedModal()"></div>
    </div>
</template>
  
<script>
export default {
    name: "imageModal",
    props: {
        imageModal: {
            type: Object,
            default: () => ({
                modalShow: false,
                footer: false,
                dimmed: true,
            }),
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
