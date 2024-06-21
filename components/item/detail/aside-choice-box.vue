<template>
    <div class="aside-content" :class="{ 'hide': moreAside }">
        <button class="drag-able mobile" @click="moreAside = !moreAside">토글버튼</button>
        <div class="aside-choice-box">
            <div class="aside-header pc">선택 상품 보기</div>
            <!-- 리스트일 경우 -->
            <ul class="aside-list">
                <li>
                    <div class="btn-delete"><img src="~assets/images/common/ico_close_black2.png" alt="close"></div>
                    <div class="aside-list-item">
                        <p class="item-title"><span class="item-store">바른정육류연구소</span><strong class="item-name">제품명이 나오는 첫째
                                줄입니다 제품명이 나오는 둘째 줄입니다</strong></p>
                        <p class="item-desc">상품에 대한 추가 내용이 들어가는 영역입니다</p>
                        <div class="item-details">
                            <span class="item-price"><span>47,700</span><strong class="unit">원(kg당)</strong></span>
                            <span class="divider"></span>
                            <span class="item-weight"><span>5.4kg</span></span>
                            <span class="item-saled-money">
                                <span class="sale">최대 혜택가 10%↓</span>
                                <span class="price">9,999,999<strong class="unit">원</strong></span>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="btn-delete"><img src="~assets/images/common/ico_close_black2.png" alt="close"></div>
                    <div class="aside-list-item">
                        <p class="item-title"><span class="item-store">바른정육류연구소</span><strong class="item-name">제품명이 나오는 첫째
                                줄입니다 제품명이 나오는 둘째 줄입니다</strong></p>
                        <p class="item-desc">상품에 대한 추가 내용이 들어가는 영역입니다</p>
                        <div class="item-details">
                            <span class="item-price"><span>47,700</span><strong class="unit">원(kg당)</strong></span>
                            <span class="divider"></span>
                            <span class="item-weight"><span>5.4kg</span></span>
                            <span class="item-saled-money">
                                <span class="sale">최대 혜택가 10%↓</span>
                                <span class="price">9,999,999<strong class="unit">원</strong></span>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="btn-delete"><img src="~assets/images/common/ico_close_black2.png" alt="close"></div>
                    <div class="aside-list-item">
                        <p class="item-title"><span class="item-store">바른정육류연구소</span><strong class="item-name">제품명이 나오는 첫째
                                줄입니다 제품명이 나오는 둘째 줄입니다</strong></p>
                        <p class="item-desc">상품에 대한 추가 내용이 들어가는 영역입니다</p>
                        <div class="item-details">
                            <span class="item-price"><span>9,999,999</span><strong class="unit">원(kg당)</strong></span>
                            <span class="divider"></span>
                            <span class="item-weight"><span>11.5kg</span></span>
                            <span class="item-saled-money">
                                <span class="sale">최대 혜택가 10%↓</span>
                                <span class="price">9,999,999<strong class="unit">원</strong></span>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="btn-delete"><img src="~assets/images/common/ico_close_black2.png" alt="close"></div>
                    <div class="aside-list-item">
                        <p class="item-title"><span class="item-store">바른정육류연구소</span><strong class="item-name">제품명이 나오는 첫째
                                줄입니다 제품명이 나오는 둘째 줄입니다</strong></p>
                        <p class="item-desc">상품에 대한 추가 내용이 들어가는 영역입니다</p>
                        <div class="item-details">
                            <span class="item-price"><span>9,999,999</span><strong class="unit">원(kg당)</strong></span>
                            <span class="divider"></span>
                            <span class="item-weight"><span>11.5kg</span></span>
                            <span class="item-saled-money">
                                <span class="sale">최대 혜택가 10%↓</span>
                                <span class="price">9,999,999<strong class="unit">원</strong></span>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            <!-- 옵션/수량일 경우 -->
            <!-- <div class="aside-option item-option mobile">
                <div class="option-txt">
                    <p>브랜드명<b>제품명이 나오는 자리입니다</b></p>
                    <p>상품에 대한 추가사항이 들어가는 영역입니다</p>
                </div>
                <div class="quantity-box">
                    <div class="btn-quantity-box">
                        <button type="button" class="btn-minus">-</button>
                        <input type="number" title="수량" value="1" class="number">
                        <button type="button" class="btn-plus">+</button>
                    </div>
                </div>
                <div class="form-line">
                    <select name="" id="" class="select-basic">
                        <option value="">옵션01</option>
                        <option value="">옵션02</option>
                        <option value="">옵션03</option>
                    </select>
                </div>
            </div> -->
            <!-- 부분육일 경우 : 총 금액 -->
            <div class="aside-footer">
                <div class="aside-amount">
                    <p class="summed-item">
                        <span class="total-amount">12개</span><span class="divider">/</span><span
                            class="total-weight">11.5kg</span>
                    </p>
                    <div class="total-price">
                        <b>합계</b>
                        <p class="price-area">
                            <span class="sale">최대 혜택가 10%↓</span>
                            <span class="price">1,597,500<strong class="unit">원</strong></span>
                        </p>
                    </div>
                </div>
                <div class="btn-wrap">
                    <button type="button" class="btn btn-default">장바구니 담기</button>
                    <button type="button" class="btn btn-primary">바로구매</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            moreAside: true,
        };
    },
};
</script>
<style scoped>
html {
    scroll-behavior: smooth;
}

/* aside-content */
.aside-content {
    position: relative;
}

.aside-content.fixed {
    position: fixed;
    top: 3rem;
    bottom: 7rem;
    width: 28.4rem;
}

.aside-content.fixed.bottom {
    top: unset;
    bottom: 30rem;
}

.aside-choice-box>div,
.aside-choice-box>ul {
    background-color: #ffff;
}

.aside-choice-box .sale {
    font-size: 1.1rem;
    color: #323ef3;
}


.aside-choice-box .total-price .sale {
    position: absolute;
    bottom: 2.6rem;
    right: 0;
}

.aside-content .btn-wrap .btn {
    font-size: 1.8rem;
    font-weight: 700;
}


.aside-header {
    border: 1px solid #e1e1e1;
    border-bottom: none;
    border-radius: 1rem 1rem 0 0;
    text-align: center;
    padding: 1.5rem 0;
}

.aside-header.pc {
    font-size: 1.6rem;
    font-weight: 500;
}

.aside-option {
    padding: 0 1.6rem 3rem;
}

.aside-footer {}

.aside-amount {
    display: flex;
    flex-direction: column;
    max-height: 9.2rem;
    height: auto;
    padding: 1.4rem 2rem;
    margin-bottom: 1rem;
    background-color: #FFF8F9;
    border: 1px solid #e1e1e1;
    border-top: 0;
    border-radius: 0 0 1rem 1rem;
}

.aside-amount .summed-item span {
    font-size: 1.8rem;
    font-weight: 700;

}

.item-detail-right .aside-amount .summed-item span {
    font-size: 1.4rem;

}

.aside-amount .summed-item .divider {
    margin: 0 0.4rem;
}

.aside-amount .price-area {
    position: relative;
    flex: 1 1 auto;
    display: inline-flex;
    flex-direction: column;
    text-align: right;
}

.aside-amount .total-price {
    margin-top: 0.2rem;
}

.aside-amount .total-price b {
    line-height: 3rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: #000000;
}

.aside-amount .total-price .price {
    line-height: 3rem;
    font-size: 2.6rem;
    font-weight: 700;
    color: #f02d40;
}

.item-detail-right .aside-amount .total-price .price {
    font-size: 2rem;
}

.aside-amount .total-price .unit {
    font-size: 1.4rem;
}

.aside-amount .total-price {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.aside-list {
    max-height: 46rem;
    border: solid 1px #e1e1e1;
    font-size: 1.6rem;
    overflow: auto;
}

.aside-list {
    border-bottom: 0;
}

.aside-list li {
    position: relative;
    padding: 1.6rem;
    border-bottom: 1px solid #e1e1e1;
}

.aside-list li .btn-delete {
    position: absolute;
    top: 1rem;
    right: 1.4rem;
    width: 2.4rem;
    height: 2.4rem;
    padding: 0.6rem;
    cursor: pointer;
    z-index: 1;
}

.aside-list-item .item-title {
    line-height: 1.2;
    font-size: 1.5rem;
    padding-right: 5rem;
}

.aside-list-item .item-store {
    font-weight: 400;
    letter-spacing: normal;
    margin-right: 2px;
}

.aside-list-item .item-name {
    font-weight: 700;
}

.aside-list-item .item-desc {
    font-size: 1.3rem;
    color: #979797;
    margin-top: 3px;
    font-weight: normal;
}

.aside-list-item .item-details {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    padding-top: 1.6rem;
}

.aside-list-item .item-price,
.aside-list-item .item-weight {
    flex: unset;
    margin-bottom: 0;
}

.aside-list-item .item-price span,
.aside-list-item .item-weight span {
    font-weight: 700;
}

.aside-list-item .item-price .unit {
    color: #333333;
    font-weight: 400;
    font-size: 12px;
}

.aside-list-item .item-saled-money {
    display: inline-flex;
    flex-direction: column;
    flex: 1 1 auto;
    text-align: right;
}


.aside-list-item .item-saled-money .price {
    font-weight: 700;
    font-size: 1.5rem;
}

.aside-list-item .item-saled-money .unit {
    font-size: 1.2rem;
}

.aside-list-item .divider {
    display: inline-block;
    width: 1px;
    height: 1rem;
    margin: 0 0.4rem;
    background-color: #e1e1e1;
}

.aside-option {
    padding: 0 1.6rem 3rem;
}

/* 노트북 */
@media (max-width:1194px) {}

/* 태블릿 */
@media (max-width:768px) {
    .aside-content {
        padding: 1.6rem;
    }

    .aside-content.fixed {
        width: 100%;
        height: auto;
        /*
        min-height: 40rem;
        */
        max-height: 80vh;
        background-color: #fff;
        top: unset;
        bottom: 0;
        z-index: 1;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .aside-content.fixed .aside-amount {
        margin-bottom: 1rem;
    }

    .item-list-page.has-category .aside-content.fixed {
        bottom: 0;
    }


    .aside-list {
        max-height: 25rem;
        overflow: auto;
        border-radius: 1rem 1rem 0 0;

    }

    .aside-footer {
        position: sticky;
        bottom: 0;
    }

    .aside-option.item-option {
        padding: 0 !important;
        padding-bottom: 1.5rem !important;
        border-top: 0 !important;
        border-bottom: 1px solid #eeeeee;
    }

    .aside-option.item-option .option-txt {
        border-bottom: 1px solid #da0015;
        padding-bottom: 1.4rem;
        margin-bottom: 1.4rem;
    }

    .aside-option.item-option .option-txt p:nth-child(1) {
        font-size: 1.4rem;
        letter-spacing: -0.49px;
        margin-bottom: .4rem;
        color: #000
    }

    .aside-option.item-option .option-txt p:nth-child(1) b {
        font-weight: bold;
        margin-left: .5rem;
        color: #000
    }

    .aside-option.item-option .option-txt p:nth-child(2) {
        font-size: 1.3rem;
        letter-spacing: -0.65px;
        color: #979797;
    }

    .aside-option.item-option .quantity-box+.form-line {
        margin-top: 1.5rem;
    }



    /* aside-content */
    .aside-content {
        box-shadow: 0 0px 10px 0px rgb(0 0 0 / 25%);
    }

    .aside-content .aside-amount {
        display: flex;
        flex-direction: column;
        /*
        height: 9.2rem;
        */
        padding: 1.4rem 2rem;
        margin-bottom: 2rem;
        background-color: #FFF8F9;
        border: 0;
        border-radius: 0 0 1rem 1rem;
    }

    .aside-content.hide .aside-amount {
        border: 0;
    }

    .aside-content .aside-amount {
        border: 1px solid #e1e1e1;
        border-top: 0;
    }

    .aside-content.fixed.bottom:not(.hide) .aside-amount {
        margin-bottom: 1rem;
    }

    /* drag-able */
    .drag-able {
        display: block;
        width: 9rem;
        height: 2.2rem;
        position: absolute;
        left: 50%;
        top: -2.2rem;
        transform: translateX(-50%);
        background: url("~/assets/images/common/arrow/ico_arr_accordion_bottom.png") no-repeat center;
        background-size: 15%;
        background-color: #fff;
        z-index: 1;
        font-size: 0;
        border-radius: 1rem 1rem 0 0;
    }

    .aside-content.hide .drag-able {
        background: url("~/assets/images/common/arrow/ico_arr_accordion.png") no-repeat center;
        background-size: 15%;
        background-color: #fff;
    }

    .drag-able::before {
        content: '';
        width: 9rem;
        height: 2.2rem;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        box-shadow: 0 0px 10px 0px rgb(0 0 0 / 25%);
        border-radius: 1rem 1rem 0 0;
        z-index: -1;
    }

    .drag-able::after {
        content: '';
        width: 15rem;
        height: 1rem;
        position: absolute;
        left: 50%;
        bottom: -1rem;
        transform: translateX(-50%);
        background-color: #ffffff;
    }

    .aside-content.hide .aside-list,
    .aside-content.hide .aside-option {
        display: none;
    }


    .aside-content.fixed.bottom {
        bottom: 0;
    }

    .aside-amount .total-price .price,
    .aside-amount .total-price b {
        line-height: 2rem;
    }

    .aside-content.hide .aside-amount {
        padding-right: 3.6rem;
        padding-left: 3.6rem;
        padding-bottom: 6px;
        padding-top: 6px;
    }

    .item-detail-right .aside-amount .total-price .price {
        font-size: 1.8rem;
    }

    .aside-choice-box .total-price .sale {
        bottom: 2rem;
    }

    .aside-amount .total-price b {
        font-size: 1.6rem;
    }

    .aside-amount .total-price b,
    .aside-amount .total-price p {
        line-height: 1.25;
    }

    .item-detail-right .aside-amount .summed-item span {
        font-size: 1.3rem;
    }

    .aside-content .btn-wrap .btn {
        height: 5rem;
        line-height: 5rem;
    }

}
</style>
