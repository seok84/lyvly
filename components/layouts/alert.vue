
<template>
    <!-- <div id="op-alert" class="" tabindex="-1" role="dialog" style="display: none;">
    <div class="">
        <div class="">
            <div class="">
                <div class="pop_txt">
                    <p></p>
                </div>
                <div class="alert-type">
                    <div class="">
                        <button type="button" class="btn btn_lg btn_primary op-modal-ok"
                            data-dismiss="modal">확인</button>
                    </div>
                </div>
                <div class="confirm-type">
                    <div class="">
                        <button type="button" class="btn btn_lg btn_default op-modal-cancel"
                            data-dismiss="modal">취소</button>
                    </div>
                    <div class="">
                        <button type="button" class="btn btn_lg btn_primary op-modal-ok"
                            data-dismiss="modal">확인</button><
                    </div>
                </div>
            </div>
            <button type="button" class="modal_close" data-dismiss="modal">
                <span class="screen_out">닫기</span>
            </button>
        </div>
    </div>
</div> -->
    <div class="alert-modal" v-show="alertShow">
        <div class="modal-wrap shadow">
            <div class="modal-body">
                <div class="modal-content">
                    <div class="text-center">
                        {{ alertInfo.message }}
                    </div>
                    <div class="flex-center btn-wrap">
                        <button type="button" class="btn  btn-middle btn-default" v-if="alertInfo.alertType === 'CONFIRM'"
                            @click="$emit('alertClose')">취소</button>
                        <button type="button" class="btn  btn-middle btn-secondary" ref="confirm">확인</button>
                    </div>
                </div>
            </div>
            <!-- <span class="modal-close gray" @click="$emit('alertClose')">
                닫기
            </span> -->
            <span class="modal-close gray" @click="alertShow=false">
                닫기
            </span>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        alertInfo: {
            type: Object,
            default: () => ({
                message: '',
                // alertType: 'ALERT',
                alertType: 'CONFIRM',
            }),
        },
        alertShow: {
            type: Boolean,
            default: false
        }
    },
    methods: {
    },
    mounted() {
    },

};
</script>
<style scoped>
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

.alert-modal .modal-wrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: auto;
    max-width: 340px;
    overflow: hidden;
    z-index: 1;
}

.alert-modal .modal-wrap.shadow {
    width: 100%;
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
    background: url('~/assets/images/common/ico_close_white.png') no-repeat center / 1.7rem auto;
    cursor: pointer;
}

.alert-modal .modal-close.gray {
    background: url('~/assets/images/common/ico_close_gray.png') no-repeat center / 1.7rem auto;
}

.alert-modal .modal-body {
    padding: 3rem;
    background-color: #fff;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    font-size: 1.4rem;
    line-height: 1.43;
}

.alert-modal .modal-content {
    flex: 1;
}

.alert-modal .modal-content .text-center {
    width: 100%;
    text-align: center;
    margin: 2rem 0;
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
    .alert-modal .modal-body{
        width: 100%;
    }
    
    .alert-modal .modal-wrap {
        margin: 0 1.6rem;
    }
    

}
</style>