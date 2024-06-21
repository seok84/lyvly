<template>
    <section class="mypage-view inquiry-page">
        <div class="content-title">
            <span>주문/배송 조회</span>
            <button class="btn btn-title-side">2023년 7월 1일 이전 주문내역</button>
        </div>
        <form-period-search />
        <ul class="inquiry-wrap">
            <!-- 리스트 -->
            <li class="inquiry-list" v-for="(item, index) in info" :key="index">
                <!-- 1행 -->
                <div class="order-status">
                    <div class="date">{{ item.date }}</div>
                    <div class="invoice">
                        <nuxt-link to="/mypage/inquiry-item">
                            <span>{{ item.invoice }}</span><span v-if="item.delivery" class="pc">주문/배송 상세 조회 ></span>
                        </nuxt-link>
                    </div>
                    <div class="amount">{{ item.amount }}</div>
                    <div class="title">
                        <span @click="toolTiplInfo[index].show = true">
                            <b>{{ item.brand }}</b>{{ item.title }}
                        </span>
                        <span @click="toolTiplInfo[index].show = true">
                            1++(7)B NO.9 외 <b>3</b>건
                        </span>
                        <!-- 툴팁 -->
                        <item-tooltip-default class="inquiry-tool-tip" :toolTiplInfo="toolTiplInfo[index]"
                            @close="toolTiplInfo[index].show = false">
                            <ul class="order-list-wrap">
                                <li class="order-list">
                                    <span><b>[농협PB]</b>냉장 한우거세 아랫등심 1++(7)B NO.9</span>
                                    <span>1개</span>
                                </li>
                                <li class="order-list">
                                    <span><b>[농협PB]</b>냉장 한우거세 1++(7)B NO.9</span>
                                    <span>1개</span>
                                </li>
                                <li class="order-list">
                                    <span><b>[농협PB]</b>냉동 한우거세 1++(7)B NO.9</span>
                                    <span>1개</span>
                                </li>
                                <li class="order-list">
                                    <span><b>[농협PB]</b>냉장 한우거세 아랫등심 NO.9</span>
                                    <span>1개</span>
                                </li>
                                <li class="order-list">
                                    <span><b>[농협PB]</b>냉장 한우거세 아랫등심 1++(7)B NO.9</span>
                                    <span>1개</span>
                                </li>
                                <li class="order-list">
                                    <span><b>[농협PB]</b>냉장 한우거세 아랫등심 1++(7)B NO.9</span>
                                    <span>1개</span>
                                </li>
                                <li class="order-list">
                                    <span><b>[농협PB]</b>냉장 한우거세 아랫등심 1++(7)B NO.9</span>
                                    <span>1개</span>
                                </li>
                            </ul>

                        </item-tooltip-default>
                    </div>
                    <div class="payment">
                        <div class="type">{{ item.payment.type }}</div>
                        <div class="detail" v-if="item.payment.detail != ''" :class="{ 'complete': item.payment.status }"
                            @click="taxBillModal.modalShow = true">
                            {{ item.payment.detail }}
                        </div>
                        <p class="taxPublish" :class="{ 'complete': item.payment.status }"
                            v-if="item.payment.publishedState != ''">
                            {{ item.payment.publishedState }}
                        </p>
                    </div>
                </div>
                <!-- 2행 -->
                <ul class="delivery-status">
                    <li>총 : {{ item.status.length }}건</li>
                    <li v-for="(item, index) in item.status" :key="'status-' + index">{{ item }} 1건</li>
                </ul>
            </li>
        </ul>
        <etc-pagination class="pc" />
        <!-- 계산서 팝업 -->
        <modal-default :modalShow="taxBillModal.modalShow" :modalInfo="taxBillModal.modalInfo"
            @modalClose="taxBillModal.modalShow = false" class="taxbill-lg">
            <modal-taxbill :tableContent="taxBillModal.tableContent"></modal-taxbill>
        </modal-default>
    </section>
</template>
  
<script>
export default {
    layout: "divide",
    data() {
        return {
            toolTiplInfo: [
                {
                    show: false,
                    title: "[참우돈]냉장 육우거세 안심 5등급 외 5건",
                    txt: ""
                },
                {
                    show: false,
                    title: "[참우돈]냉장 육우거세 등심 1등급 외 5건",
                    txt: ""
                },
                {
                    show: false,
                    title: "[참참참]냉동 육우거세 안심 2등급 외 5건",
                    txt: ""
                },
                {
                    show: false,
                    title: "[참우돈]냉장 육우거세 안심 2등급 외 5건",
                    txt: ""
                },
            ],
            info: [
                {

                    delivery: true,
                    date: "2023-01-17",
                    invoice: "K1000000249",
                    amount: "1,057,900원",
                    brand: "[대신육가공]",
                    title: "냉장 한우안심 무항생제",

                    payment: {
                        type: "적립금,무통장 입금",
                        detail: "카드매출전표",
                        status: false,
                        publishedState:"",
                    },
                    status: [
                        "배송준비중",
                        "배송중",
                        "배송완료",
                        "반품/취소"
                    ]
                },
                {

                    delivery: true,
                    date: "2023-01-17",
                    invoice: "K1000000249",
                    amount: "900원",
                    brand: "",
                    title: "무항생제",

                    payment: {
                        type: "적립금,실시간 계좌이체",
                        detail: "",
                        status: false,
                        publishedState:"계산서 발행 전",
                    },
                    status: [
                        "배송완료",
                        "반품/취소"
                    ]
                },
                {

                    delivery: false,
                    date: "2023-01-17",
                    invoice: "K1000000249",
                    amount: "1,057원",
                    brand: "[육가공]",
                    title: "냉장 한우안심",

                    payment: {
                        type: "가상계좌",
                        detail: "",
                        status: true,
                        publishedState:"계산서 발행 완료",
                    },

                    status: [
                        "배송준비중",
                    ]
                },
                {
                    delivery: false,
                    date: "2023-01-17",
                    invoice: "K1000000249",
                    amount: "1,057,900원",
                    brand: "[대신육가공]",
                    title: "냉장 한우안심 무항생제",

                    payment: {
                        type: "적립금",
                        detail: "",
                        status: false,
                        publishedState:"",
                    },

                    status: [
                        "배송완료",
                    ]
                },

            ],
            taxBillModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "계산서",
                    modalFull: false,
                    mobileModalFull: true,
                    headerShow: true,
                    dimmed: true,
                },
                tableContent:[
                    {
                        tdItems: [
                            {
                                date:"2023-11-14",
                                seller:"순한한우(b2b)",
                                buyer:"한우랑치즈랑",
                                itemInfo:"냉장 한우거세",
                                supplyPrice:"403,920",
                                amountTax:"0",
                                sellPrice:"450,000",
                                paymentAmount:"403,920",
                                usePoint:"46,098",
                                remark:"20231114-1005128",
                            },
                            {
                                itemInfo:"냉장 한우거세",
                                supplyPrice:"403,920",
                                amountTax:"0",
                                sellPrice:"450,000",
                                paymentAmount:"403,920",
                                usePoint:"46,098",
                                remark:"20231114-1005128",
                            },
                        ]
                        
                    },
                    {
                        tdItems: [
                            {
                                date:"2023-11-14",
                                seller:"자사",
                                buyer:"한우랑치즈랑",
                                itemInfo:"냉장 한우거세 윗등심",
                                supplyPrice:"538,537",
                                amountTax:"0",
                                sellPrice:"600,000",
                                paymentAmount:"538,537",
                                usePoint:"61,463",
                                remark:"20231114-1005128",
                            }
                        ]
                        
                    },
                ]
            },
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<style >
@import url("~/assets/css/page/mypage.css");

@media (max-width:768px) {
    .mypage-view {
        margin-bottom: 0;
    }
}
</style>
  
  