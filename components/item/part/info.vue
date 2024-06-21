<template>
    <div class="item-info">
        <ul class="item-badge" v-if="item.badge != '' || null || undefined">
            <li class="badge badge-rank" v-if="rankFn && item.rank != null || '' || undefined">
                <span>{{ item.badge.rank }}</span>
            </li>
            <li v-if="item.badge.fat != '' || null || undefined"
                :class="['badge', 'badge-fat', getFatClass(item.badge.fat)]">
                <span>{{ item.badge.fat }}</span>
            </li>
            <!-- 20231218 삭제 -->
            <!-- <li v-if="item.badge.storage === 'cold'" class="badge badge-storage"><span><img
                        src="~/assets/images/common/items/ico_cold.svg" alt="냉장"></span><span>냉장</span>
            </li>
            <li v-if="item.badge.storage === 'ice'" class="badge badge-frozen"><span><img
                        src="~/assets/images/common/items/ico_ice.svg" alt="냉동"></span><span>냉동</span>
            </li>
            <li v-if="item.badge.antibiotic" class="badge badge-antibiotic"><span>무항생제</span></li>
            <li v-if="item.badge.fresh" class="badge badge-fresh"><img src="~/assets/images/common/items/ico_fresh.png"
                    alt="신선물류"><span>신선물류</span></li> -->
        </ul>
        <div class="item-title">
            <p class="brand">{{ item.title.brand }}</p>
            <nuxt-link to="/">
                <p class="main">{{ item.title.main }}</p>
                <p class="sub">{{ item.title.sub }}</p>
            </nuxt-link>
        </div>

        <div class="item-price">
            <p class="unit-accent" v-if="item.price.unitAccent != '' || null || undefined">
                kg당 최대 혜택가 {{ item.price.unitAccent }}↓
            </p>
            <p class="unit">단가</p>
            <p class="sells" rel="판매가">
                <span>{{ item.price.sells }}<strong>원</strong>
                </span>
                <span>{{ item.price.kg }}kg</span>
            </p>
            <p class="consumer" rel="소비자가">{{ item.price.consumer }} 원(kg당)</p>
        </div>
        <div class="item-process">
            <p class="process process-date">
                <span>가공일자</span>
                <span>
                    <b>{{ item.processing.date }}</b>
                    <!-- <br class="mobile" /> -->
                    <span>{{ item.processing.dateDetail }}</span>
                </span>
            </p>
            <p class="process process-name"><span>가공장명</span><span>{{ item.processing.part }}</span></p>
            <p class="process process-number"><span>이력/가공/도축</span>
                <span @click="processModal.modalShow = true">{{
                    item.processing.number }}</span>
            </p>
        </div>
        <ul class="item-benefits">
            <li v-if="item.benefits.point" class="benefit point"><span>적립혜택</span>
            </li>
            <li v-if="item.benefits.coupon" class="benefit coupon"><span>즉시할인</span>
            </li>
            <li v-if="item.benefits.aging" class="benefit aging"><span>숙성할인</span>
            </li>
            <li class="benefit"><span>신선물류</span></li>
            <li class="benefit"><span>행사할인</span></li>
            <li class="benefit"><span>무항생제</span></li>
        </ul>
        <ul class="grade-status pc" v-if="gradeFn">
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
    </div>
</template>
<script>
import TooltipDefault from '../tooltip-default.vue';

export default {
    props: {
        processModal: {
            type: Object,
            default: () => ({
                modalShow: false,
                footer: false,
            }),
        },
        thumbnail: {
            type: String,
            default: "",
        },
        rankFn: {
            type: Boolean,
            default: true
        },
        gradeFn: {
            type: Boolean,
            default: true
        },
        item: {
            type: Object,
            default: {
                thumbnail: "",
                badge: {
                    rank: "",
                    fat: "",
                    fat: "NO.5",
                    storage: "",
                    antibiotic: true,
                    fresh: true,
                },
                title: {
                    brand: "",
                    main: "",
                    sub: "",
                },
                price: {
                    unitAccent: "",
                    sells: "",
                    kg: "",
                    consumer: ""
                },
                processing: {
                    date: "",
                    dateDetial: "",
                    part: "",
                    number: ""
                },
                benefits: {
                    point: "",
                    coupon: "",
                    aging: "1",
                },
                showTooltip: false,
            }
        },
    },
    methods: {
        getFatClass(fat) {
            if (fat === 'NO.1') {
                return 'no1';
            }
            else if (fat === 'NO.1') {
                return 'no2';
            }
            else if (fat === 'NO.2') {
                return 'no2';
            }
            else if (fat === 'NO.3') {
                return 'no3';
            }
            else if (fat === 'NO.4') {
                return 'no4';
            }
            else if (fat === 'NO.5') {
                return 'no5';
            }
            else if (fat === 'NO.6') {
                return 'no6';
            }
            else if (fat === 'NO.7') {
                return 'no7';
            }
            else if (fat === 'NO.8') {
                return 'no8';
            }
            else {
                return 'no9';
            }
        }
    },
    components: { TooltipDefault }
}
</script>

<style scoped>
/** item-info **/
.item-info {
    position: relative;
}



/** item-title **/
.item-title {
    margin-bottom: 1.4rem;
}

.item-title .brand {
    font-size: 18px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 2px;
}

.item-title .main {
    font-size: 1.8rem;
    font-weight: bold;
    color: #000000;
    line-height: normal;
    cursor: pointer;
}

.item-title .sub {
    font-size: 1.4rem;
    font-weight: 500;
    color: #979797;
    margin-top: 0.6rem;
    line-height: 1.15;
}


/* 노트북 */
@media (max-width: 1194px) {}

@media (max-width: 991px) {

    /** .item-badge **/
    .sm-badge .item-badge .badge span {
        font-size: 1.1rem;
    }

    .badge-storage span:nth-child(1) {
        height: 1.2rem;
    }

    .badge-storage span:nth-child(1) img {
        height: 100%;
    }

    .badge-rank,
    .badge-fat {
        height: 1.5rem;
    }

}

/* 태블릿 */
@media (max-width: 768px) {

    /** .item-title **/
    .item-title .brand,
    .item-title .main {
        font-size: 1.6rem;
    }

    .item-title .brand {
        font-weight: normal;
    }

    .item-title .main {
        font-weight: bold;
    }

    .item-title .sub {
        font-size: 1.2rem;
    }

    /** .item-price **/
    .item-price .unit {
        font-size: 1.2rem;
    }

    .item-price .sells span:nth-child(1) {
        font-size: 2rem;
        margin-right: 0.4rem;
    }

    .item-price .sells span:nth-child(2) {
        font-size: 1.6rem;
    }


}

/* 모바일 */
@media (max-width: 480px) {}
</style>