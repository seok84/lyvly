<template>
    <section class="mypage-view mypage-payment">
        <div class="content-title">
            <span>간편결제수단 관리</span>
            <button class="btn btn-title-side">간편 결제 사용 취소</button>
        </div>
        <!-- contents -->
        <div class="mypage-list-container" v-if="paymentList">
            <div class="mypage-list" v-for="( info, index ) in  paymentInfo " :key="'payment_' + index">
                <div class="content">
                    <div class="card-img">
                        <img :src="require(`@/static/images/order/${info.cardImg}.png`)" :alt="info.cardName">
                    </div>
                    <div>
                        <strong>{{ info.cardName }}</strong>
                        <span>({{ info.cardNumber }})</span>
                    </div>
                </div>
                <div class="btn-wrap">
                    <div class="btn btn-gray" @click="pinModal=true">삭제</div>
                </div>
            </div>
        </div>
        <div class="no-content" v-else>
            등록된 배송지 정보가 없습니다.
        </div>
        <button class="mypage-add-btn">
            <img src="~/assets/images/common/ico_add.svg">
            결제 수단 등록하기
        </button>
        <!-- 간편결제 삭제 -->
        <ui-pinNumber :open="pinModal"/>
        <!-- <modal-default :modalInfo="hideModal.modalInfo" :modalShow="hideModal.modalShow"
            @modalClose="hideModal.modalShow = false">
            <div class="modal-content">
                <div class="text-center">
                    해당 간편결제를 삭제합니까?
                </div>
                <div class="flex-center btn-wrap">
                    <button type="button" class="btn width-half btn-default">취소</button>
                    <button type="button" class="btn width-half btn-primary" @click="deleteList()">확인</button>
                </div>
            </div>
        </modal-default> -->
    </section>
</template>
  
<script>
import pinNumberVue from '../../components/ui/pin-number.vue';

export default {
    layout: "divide",
    data() {
        return {
            paymentList: true,
            paymentInfo: [
                {
                    cardImg: 'card_sample',
                    cardName: '국민카드',
                    cardNumber: '234*'
                },
                {
                    cardImg: 'card_sample02',
                    cardName: '카카오뱅크',
                    cardNumber: '333*****80490'
                },
            ],
            pinModal: false
            // hideModal: {
            //     modalShow: false,
            //     modalInfo: {
            //         modalFull: false,
            //         modalWidthSmall: true,
            //         headerShow: false,
            //         dimmed: true,
            //     },
            // },
        }
    },
    methods: {
        deleteList(index) {
            this.paymentInfo.splice(index, 1);
            this.hideModal.modalShow = false
            if (this.paymentInfo.length <= 0) {
                this.paymentList = !this.paymentList
            }
        }
    },
    mounted() {
    }
}
</script>
<style scoped>
@import url("~/assets/css/page/mypage.css");



.mypage-payment .mypage-list-container .mypage-list .content {
    display: flex;
    align-items: center;
}

.mypage-payment .mypage-list-container .card-img {
    display: inline-block;
    width: 9.954rem;
    height: 6.3rem;
    border-radius: 5px;
    background-color: #757575;
    margin-right: 1.4rem;
}

.mypage-payment .card-img img {
    width: auto;
    height: 100%;
}


.mypage-payment .content strong,
.mypage-payment .content strong~span {
    display: block;
    font-size: 1.6rem;
}

.mypage-payment .content strong {
    font-weight: 700;
}

@media (max-width: 767px) {
    .mypage-view .content-title {
        text-align: right;
    }
}
</style>