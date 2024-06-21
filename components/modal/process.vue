<template>
    <div class="modal image-modal process-number-modal" :class="{ 'show': processModal.modalShow }"
        v-show="processModal.modalShow">
        <div class="modal-wrap shadow">
            <div class="modal-body">
                <span class="thumbnail">
                    <span class="notice">참고용 이미지입니다.</span>
                    <img src="~/static/images/img_item_sample_01.png" alt="썸네일">
                </span>
                <div class="process-info">
                    <p>
                        <span>가공장명</span>
                        <span>엔에이치순우조합 공동사업법인유통센터</span>
                    </p>
                    <p>
                        <span>도축장명</span>
                        <span>농협 나주축산물공판장</span>
                    </p>
                </div>
                <ul class="grade-status">
                    <li>등지방 13</li>
                    <li class="break-point">·</li>
                    <li>등심면적 13</li>
                    <li class="break-point">·</li>
                    <li>근내지방 13</li>
                    <li class="break-point">·</li>
                    <li>육색 13</li>
                    <li class="break-point">·</li>
                    <li>지방색 13</li>
                    <li class="break-point">·</li>
                    <li>조직감 13</li>
                    <li class="break-point">·</li>
                    <li>성숙도 3</li>
                </ul>
                <div class="btn-wrap">
                    <div class="btn btn-small btn-primary">축산물 이력정보</div>
                    <div class="btn btn-small btn-black" @click="processModal.modalShow = false">닫기</div>
                </div>
            </div>
            <span class="modal-close black" @click="close()">
                닫기
            </span>
        </div>
        <div class="dimmed-bg" @click="close"></div>
    </div>
</template>
  
<script>
export default {
    name: "imageModal",
    props: {
        processModal: {
            type: Object,
            default: () => ({
                modalShow: false,
            }),
        },
    },


    methods: {
        close() {
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
