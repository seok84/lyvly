<template>
    <div class="order-step1">
        <div class="fixed-area">
            <h1 class="title-h1">주문/결제</h1>
        </div>

        <section class="item-list type-order">
            <ValidationObserver>
                <form id="buy" name="buy">
                    <div class="col">
                        <div class="orderlist-info fold-title" @click="showOrderInfo = !showOrderInfo"
                            :class="{ closed: showOrderInfo }">
                            <p><strong>주문정보 (150)</strong></p>
                            <span class="toggle-ico">
                                <img src="~/assets/images/common/arrow/ico_arr_red_up.png" alt="열기/닫기 화살표">
                            </span>
                        </div>

                        <ul class="accordion-list" v-if="showOrderInfo">
                            <!-- 신선물류 -->
                            <li class="list">
                                <div class="list-tit fresh">
                                    <div class="flex" :class="{ closed: toggleItem['freshItem'] }">
                                        <div class="col-left">
                                            <h4 @click="toggleItem['freshItem'] = !toggleItem['freshItem']">신선물류
                                                : 8건</h4>
                                        </div>

                                        <div class="col-right">
                                            <span class="price" @click="toggleItem['freshItem'] = !toggleItem['freshItem']">
                                                상품 999,999,999 + 배송비 999,999원 <span class="pc">=</span><br class="mobile">
                                                <span>1,521,000원</span>
                                            </span>
                                            <span class="toggle-ico">
                                                <img src="~/assets/images/common/arrow/ico_arr_accordion.png"
                                                    alt="열기/닫기 화살표">
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p class="accordion-notice">
                                    <span>자체차량 냉장 직배송/CJ대한통운 냉장 직배송</span>
                                    <span class="text-blue">오늘 밤 10시 전까지 결제 시 <br class="mobile">06/22(목) 출고예정

                                        <span class="sells-info tooltip-wrap"
                                            @mouseover="showTooltip['delivery1'] = true"><i>?</i>
                                            <article class="tooltip" v-if="showTooltip['delivery1']"
                                                @mouseleave="showTooltip['delivery1'] = false">
                                                <div class="tooltip-close" @click="showTooltip['delivery1'] = false">닫기
                                                </div>
                                                <div class="tooltip-title">출고예정일 관련 안내</div>
                                                <div class="tooltip-body">
                                                    지역 및 상황에 따라 배송 방법 및 일정
                                                    이 변경될 수 있습니다. <br>
                                                    배송중 단계로 변경 시 상세 정보를 확
                                                    인하실 수 있습니다.
                                                </div>
                                            </article>
                                        </span>
                                    </span>
                                </p>

                                <div class="list-wrap" v-if="toggleItem['freshItem']">
                                    <!-- 농협PB : N건 -->
                                    <div class="brand-title" :class="{ closed: toggleItem['freshItemList1'] }">
                                        <div class="col-left">
                                            <h5 @click="toggleItem['freshItemList1'] = !toggleItem['freshItemList1']">
                                                농협PB : N건</h5>
                                        </div>

                                        <div class="col-right">
                                            <span class="price"
                                                @click="toggleItem['freshItemList1'] = !toggleItem['freshItemList1']">
                                                상품 999,999,999 + 배송비 999,999원 = <span>1,521,000원</span>
                                            </span>
                                            <span class="toggle-ico">
                                                <img src="~/assets/images/common/arrow/ico_arr_gray_top.png"
                                                    alt="열기/닫기 화살표">
                                            </span>
                                        </div>

                                    </div>


                                    <div class="box-wrap" v-if="toggleItem['freshItemList1']">
                                        <div class="box">
                                            <!-- 기본 pc -->
                                            <table class="basic-item-table pc">
                                                <colgroup>
                                                    <col style="min-width: 9rem; width: 10%;">
                                                    <col>
                                                    <col style="width: 12%;">
                                                    <col style="width: 19%;">
                                                    <col style="width: 19%;">
                                                </colgroup>
                                                <tfoot>
                                                    <tr>
                                                        <td></td>
                                                        <td colspan="4">
                                                            <div class="flex">
                                                                <span class="ea-box">수량 : 1개</span>
                                                                <button type="button" class="btn-coupon"
                                                                    @click="showCoupon['couponArea1'] = !showCoupon['couponArea1']">상품쿠폰
                                                                    적용</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="5" class="coupon-area"
                                                            v-if="showCoupon['couponArea1']">
                                                            <div class="flex">
                                                                <div class="first-row">
                                                                    <h6 class="title">상품쿠폰 적용</h6>
                                                                    <button type="button" class="btn-offline-coupon"
                                                                        @click="showOfflineCoupon['offlineCouponArea1'] = !showOfflineCoupon['offlineCouponArea1']">오프라인
                                                                        쿠폰등록</button>
                                                                </div>
                                                                <div class="form-line form-button offline-coupon"
                                                                    v-if="showOfflineCoupon['offlineCouponArea1']">
                                                                    <input type="text" class="form-basic"
                                                                        placeholder="'-' 없이 쿠폰번호 입력" />
                                                                    <button class="btn btn-black">등록</button>
                                                                </div>
                                                                <select class="select-basic">
                                                                    <option value="null">사업자회원 신규가입 쿠폰 - 20%할인 [ 1개 수량만 적용 ]
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                                <tbody>
                                                    <tr>
                                                        <!-- 썸네일 영역 -->
                                                        <td rowspan="6" class="first">
                                                            <span><img class="thumbnail"
                                                                    src="~/static/images/img_item_sample_01.png"
                                                                    alt="썸네일"></span>
                                                            <span class="thumbnail-text">실제 이미지입니다</span>
                                                        </td>
                                                        <!-- 라벨 영역 -->
                                                        <td>
                                                            <ul class="item-badge">
                                                                <li class="badge badge-rank">
                                                                    <span>1++B</span>
                                                                </li>
                                                                <!-- <li class="badge badge-fat no1">
                                                                    <span>NO.1</span>
                                                                </li>
                                                                <li class="badge badge-fat no2">
                                                                    <span>NO.2</span>
                                                                </li>
                                                                <li class="badge badge-fat no3">
                                                                    <span>NO.3</span>
                                                                </li>
                                                                <li class="badge badge-fat no4">
                                                                    <span>NO.4</span>
                                                                </li>
                                                                <li class="badge badge-fat no5">
                                                                    <span>NO.5</span>
                                                                </li>
                                                                <li class="badge badge-fat no6">
                                                                    <span>NO.6</span>
                                                                </li>
                                                                <li class="badge badge-fat no7">
                                                                    <span>NO.7</span>
                                                                </li>
                                                                <li class="badge badge-fat no8">
                                                                    <span>NO.8</span>
                                                                </li>-->
                                                                <li class="badge badge-fat no9">
                                                                    <span>NO.9</span>
                                                                </li>
                                                                <!-- <li class="badge badge-storage">
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                                                                    </span>
                                                                    <span>냉장</span>
                                                                </li>-->
                                                                <li class="badge badge-frozen">
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_ice.svg"
                                                                            alt="냉동">
                                                                    </span>
                                                                    <span>냉동</span>
                                                                </li>
                                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                                                <li class="badge badge-fresh"><span>신선물류</span></li>
                                                            </ul>
                                                        </td>
                                                        <td></td>
                                                        <td class="text-red">
                                                            <span class="unit-accent">kg당 최대 혜택가 10%↓</span>
                                                        </td>
                                                        <td class="text-blue">
                                                            <span class="unit-accent">최대 혜택가 10%↓</span>
                                                            <span class="sells-info tooltip-wrap">
                                                                <i @click="toolTip = true">?</i>
                                                                <item-tooltip :toolTip="toolTip" />
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="text-brand">브랜드명</td>
                                                        <td></td>
                                                        <td class="text-red">
                                                            <strong>단가(kg당)</strong>
                                                        </td>
                                                        <td class="text-blue text-left">
                                                            <strong>판매가</strong>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="title-td">
                                                            <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                                        </td>
                                                        <td class="weight">
                                                            <strong class="text-big">5.4kg</strong>
                                                        </td>
                                                        <td class="text-red">
                                                            <strong class="text-big">47,700</strong>
                                                            <strong class="text-small">원</strong>
                                                        </td>
                                                        <td class="text-big">
                                                            <strong class="text-price">9,999,999</strong>
                                                            <strong class="text-small">원</strong>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="item-part"><span class="text-gray">윗등심 + 아랫등심 반두분</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                                        </td>
                                                        <td>
                                                            <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="item-date">
                                                            <strong>가공일자</strong>
                                                            <strong class="date">2023-06-28</strong>
                                                            (29개월령)
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <ul class="item-benefits">
                                                                <li class="benefit point"><span>행사할인 </span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_point.png"
                                                                            alt="적립혜택">
                                                                    </span>
                                                                </li>
                                                                <li class="benefit coupon"><span>할인혜택</span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_coupon.png"
                                                                            alt="즉시할인">
                                                                    </span>
                                                                </li>
                                                                <li class="benefit discount"><span>숙성할인</span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_aging.png"
                                                                            alt="숙성할인">
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <!-- mobile -->
                                            <div class="basic-item-list mobile">
                                                <!-- 썸네일 영역 -->
                                                <div class="thumbnail-area"><img class="thumbnail"
                                                        src="~/static/images/img_item_sample_01.png" alt="썸네일"></div>

                                                <!-- 라벨 영역 -->
                                                <ul class="item-badge">
                                                    <li class="badge badge-rank">
                                                        <span>1++B</span>
                                                    </li>
                                                    <!-- <li class="badge badge-fat no1">
                                                        <span>NO.1</span>
                                                    </li>
                                                    <li class="badge badge-fat no2">
                                                        <span>NO.2</span>
                                                    </li>
                                                    <li class="badge badge-fat no3">
                                                        <span>NO.3</span>
                                                    </li>
                                                    <li class="badge badge-fat no4">
                                                        <span>NO.4</span>
                                                    </li>
                                                    <li class="badge badge-fat no5">
                                                        <span>NO.5</span>
                                                    </li>
                                                    <li class="badge badge-fat no6">
                                                        <span>NO.6</span>
                                                    </li>
                                                    <li class="badge badge-fat no7">
                                                        <span>NO.7</span>
                                                    </li>
                                                    <li class="badge badge-fat no8">
                                                        <span>NO.8</span>
                                                    </li>-->
                                                    <li class="badge badge-fat no9">
                                                        <span>NO.9</span>
                                                    </li>
                                                    <!-- <li class="badge badge-storage">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                                                        </span>
                                                        <span>냉장</span>
                                                    </li>-->
                                                    <li class="badge badge-frozen">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                        </span>
                                                        <span>냉동</span>
                                                    </li>
                                                    <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                                    <li class="badge badge-fresh">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_fresh.png"
                                                                alt="신선물류">
                                                        </span>
                                                        <span>신선물류</span>
                                                    </li>
                                                </ul>

                                                <p class="item-title">
                                                    <span class="text-brand">브랜드명</span>
                                                    <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                                    <span class="item-part text-gray">윗등심 + 아랫등심 반두분</span>
                                                    <span class="item-date">
                                                        <strong>가공일자</strong>
                                                        <strong class="date">2023-06-28</strong>
                                                        (29개월령)
                                                    </span>
                                                </p>

                                                <div class="item-price">
                                                    <strong class="text-big weight">5.4kg</strong>
                                                    <div class="row">
                                                        <div class="col text-red">
                                                            <span class="unit-accent">최대 혜택가 10%↓</span>
                                                            <p class="text">
                                                                <strong>단가(kg당)</strong>
                                                            </p>
                                                            <div class="price">
                                                                <strong class="text-big">47,700</strong><strong
                                                                    class="text-small">원</strong>
                                                            </div>
                                                            <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                                        </div>
                                                        <div class="col text-blue">
                                                            <span class="unit-accent">최대 혜택가 10%↓</span>
                                                            <span class="sells-info tooltip-wrap">
                                                                <i @click="toolTip = true">?</i>
                                                                <item-tooltip :toolTip="toolTip" />
                                                            </span>
                                                            <p class="text">
                                                                <strong>판매가</strong>
                                                            </p>
                                                            <div class="price">
                                                                <strong class="text-price">9,999,999</strong><strong
                                                                    class="text-small">원</strong>
                                                            </div>
                                                            <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <ul class="item-benefits">
                                                    <li class="benefit point"><span>행사할인 </span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_point.png"
                                                                alt="적립혜택">
                                                        </span>
                                                    </li>
                                                    <li class="benefit coupon"><span>할인혜택</span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_coupon.png"
                                                                alt="즉시할인">
                                                        </span>
                                                    </li>
                                                    <li class="benefit discount"><span>숙성할인</span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_aging.png"
                                                                alt="숙성할인">
                                                        </span>
                                                    </li>
                                                </ul>

                                                <div class="flex">
                                                    <span class="ea-box">수량 : 1개</span>
                                                    <button type="button" class="btn-coupon"
                                                        @click="showCoupon['mCouponArea1'] = !showCoupon['mCouponArea1']">상품쿠폰
                                                        적용</button>
                                                </div>

                                                <div class="coupon-area" v-if="showCoupon['mCouponArea1']">
                                                    <div class="flex">
                                                        <div class="first-row">
                                                            <h6 class="title">상품쿠폰 적용</h6>
                                                            <button type="button" class="btn-offline-coupon"
                                                                @click="showOfflineCoupon['mOfflineCouponArea1'] = !showOfflineCoupon['mOfflineCouponArea1']">오프라인
                                                                쿠폰등록</button>
                                                        </div>
                                                        <div class="form-line form-button offline-coupon"
                                                            v-if="showOfflineCoupon['mOfflineCouponArea1']">
                                                            <input type="text" class="form-basic"
                                                                placeholder="'-' 없이 쿠폰번호 입력" />
                                                            <button class="btn btn-black">등록</button>
                                                        </div>
                                                        <select class="select-basic">
                                                            <option value="null">상품 쿠폰을 선택하세요</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>

                                            <!-- 썸네일 X -->
                                            <table class="basic-item-table pc">
                                                <colgroup>
                                                    <col>
                                                    <col style="width: 12%;">
                                                    <col style="width: 19%;">
                                                    <col style="width: 19%;">
                                                </colgroup>
                                                <tfoot>
                                                    <tr>
                                                        <td colspan="4" class="first">
                                                            <div class="flex">
                                                                <span class="ea-box">수량 : 1개</span>
                                                                <button type="button" class="btn-coupon"
                                                                    @click="showCoupon['couponArea2'] = !showCoupon['couponArea2']">상품쿠폰
                                                                    적용</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="5" class="coupon-area"
                                                            v-if="showCoupon['couponArea1']">
                                                            <div class="flex">
                                                                <div class="first-row">
                                                                    <h6 class="title">상품쿠폰 적용</h6>
                                                                    <button type="button" class="btn-offline-coupon"
                                                                        @click="showOfflineCoupon['offlineCouponArea2'] = !showOfflineCoupon['offlineCouponArea2']">오프라인
                                                                        쿠폰등록</button>
                                                                </div>
                                                                <div class="form-line form-button offline-coupon"
                                                                    v-if="showOfflineCoupon['offlineCouponArea2']">
                                                                    <input type="text" class="form-basic"
                                                                        placeholder="'-' 없이 쿠폰번호 입력" />
                                                                    <button class="btn btn-black">등록</button>
                                                                </div>
                                                                <select class="select-basic">
                                                                    <option value="null">사업자회원 신규가입 쿠폰 - 20%할인 [ 1개 수량만 적용 ]
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                                <tbody>
                                                    <tr>
                                                        <!-- 라벨 영역 -->
                                                        <td class="first">
                                                            <ul class="item-badge">
                                                                <li class="badge badge-rank">
                                                                    <span>1++B</span>
                                                                </li>
                                                                <!-- <li class="badge badge-fat no1">
                                                                    <span>NO.1</span>
                                                                </li>
                                                                <li class="badge badge-fat no2">
                                                                    <span>NO.2</span>
                                                                </li>
                                                                <li class="badge badge-fat no3">
                                                                    <span>NO.3</span>
                                                                </li>
                                                                <li class="badge badge-fat no4">
                                                                    <span>NO.4</span>
                                                                </li>
                                                                <li class="badge badge-fat no5">
                                                                    <span>NO.5</span>
                                                                </li>
                                                                <li class="badge badge-fat no6">
                                                                    <span>NO.6</span>
                                                                </li>
                                                                <li class="badge badge-fat no7">
                                                                    <span>NO.7</span>
                                                                </li>
                                                                <li class="badge badge-fat no8">
                                                                    <span>NO.8</span>
                                                                </li>-->
                                                                <li class="badge badge-fat no9">
                                                                    <span>NO.9</span>
                                                                </li>
                                                                <!-- <li class="badge badge-storage">
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                                                                    </span>
                                                                    <span>냉장</span>
                                                                </li>-->
                                                                <li class="badge badge-frozen">
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_ice.svg"
                                                                            alt="냉동">
                                                                    </span>
                                                                    <span>냉동</span>
                                                                </li>
                                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                                                <li class="badge badge-fresh"><span>신선물류</span></li>
                                                            </ul>
                                                        </td>
                                                        <td></td>
                                                        <td class="text-red">
                                                        </td>
                                                        <td class="text-blue">
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="text-brand first">브랜드명</td>
                                                        <td></td>
                                                        <td class="text-red">
                                                            <strong>단가(kg당)</strong>
                                                        </td>
                                                        <td class="text-blue text-left">
                                                            <strong>판매가</strong>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="first title-td">
                                                            <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                                        </td>
                                                        <td>
                                                            <strong class="text-big">5.4kg</strong>
                                                        </td>
                                                        <td class="text-red">
                                                            <strong class="text-big">47,700</strong>
                                                            <strong class="text-small">원</strong>
                                                        </td>
                                                        <td class="text-big">
                                                            <strong class="text-price">9,999,999</strong>
                                                            <strong class="text-small">원</strong>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="item-part first"><span class="text-gray">윗등심 + 아랫등심
                                                                반두분</span>
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>

                                                    <tr>
                                                        <td class="item-date first">
                                                            <strong>가공일자</strong>
                                                            <strong class="date">2023-06-28</strong>
                                                            (29개월령)
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>

                                                    <tr>
                                                        <td class="first">
                                                            <ul class="item-benefits">
                                                                <li class="benefit point"><span>행사할인 </span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_point.png"
                                                                            alt="적립혜택">
                                                                    </span>
                                                                </li>
                                                                <li class="benefit coupon"><span>할인혜택</span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_coupon.png"
                                                                            alt="즉시할인">
                                                                    </span>
                                                                </li>
                                                                <li class="benefit discount"><span>숙성할인</span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_aging.png"
                                                                            alt="숙성할인">
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <!-- mobile -->
                                            <div class="basic-item-list mobile">
                                                <!-- 라벨 영역 -->
                                                <ul class="item-badge">
                                                    <li class="badge badge-rank">
                                                        <span>1++B</span>
                                                    </li>
                                                    <!-- <li class="badge badge-fat no1">
                                                        <span>NO.1</span>
                                                    </li>
                                                    <li class="badge badge-fat no2">
                                                        <span>NO.2</span>
                                                    </li>
                                                    <li class="badge badge-fat no3">
                                                        <span>NO.3</span>
                                                    </li>
                                                    <li class="badge badge-fat no4">
                                                        <span>NO.4</span>
                                                    </li>
                                                    <li class="badge badge-fat no5">
                                                        <span>NO.5</span>
                                                    </li>
                                                    <li class="badge badge-fat no6">
                                                        <span>NO.6</span>
                                                    </li>
                                                    <li class="badge badge-fat no7">
                                                        <span>NO.7</span>
                                                    </li>
                                                    <li class="badge badge-fat no8">
                                                        <span>NO.8</span>
                                                    </li>-->
                                                    <li class="badge badge-fat no9">
                                                        <span>NO.9</span>
                                                    </li>
                                                    <!-- <li class="badge badge-storage">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                                                        </span>
                                                        <span>냉장</span>
                                                    </li>-->
                                                    <li class="badge badge-frozen">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                        </span>
                                                        <span>냉동</span>
                                                    </li>
                                                    <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                                    <li class="badge badge-fresh">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_fresh.png"
                                                                alt="신선물류">
                                                        </span>
                                                        <span>신선물류</span>
                                                    </li>
                                                </ul>

                                                <p class="item-title">
                                                    <span class="text-brand">브랜드명</span>
                                                    <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                                    <span class="item-part text-gray">윗등심 + 아랫등심 반두분</span>
                                                    <span class="item-date">
                                                        <strong>가공일자</strong>
                                                        <strong class="date">2023-06-28</strong>
                                                        (29개월령)
                                                    </span>
                                                </p>

                                                <div class="item-price">
                                                    <strong class="text-big weight">5.4kg</strong>
                                                    <div class="row">
                                                        <div class="col text-red">
                                                            <p class="text">
                                                                <strong>단가(kg당)</strong>
                                                            </p>
                                                            <div class="price">
                                                                <strong class="text-big">47,700</strong><strong
                                                                    class="text-small">원</strong>
                                                            </div>
                                                        </div>
                                                        <div class="col text-blue">
                                                            <p class="text">
                                                                <strong>판매가</strong>
                                                            </p>
                                                            <div class="price">
                                                                <strong class="text-price">9,999,999</strong><strong
                                                                    class="text-small">원</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <ul class="item-benefits">
                                                    <li class="benefit point"><span>행사할인 </span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_point.png"
                                                                alt="적립혜택">
                                                        </span>
                                                    </li>
                                                    <li class="benefit coupon"><span>할인혜택</span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_coupon.png"
                                                                alt="즉시할인">
                                                        </span>
                                                    </li>
                                                    <li class="benefit discount"><span>숙성할인</span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_aging.png"
                                                                alt="숙성할인">
                                                        </span>
                                                    </li>
                                                </ul>

                                                <div class="flex">
                                                    <span class="ea-box">수량 : 1개</span>
                                                    <button type="button" class="btn-coupon"
                                                        @click="showCoupon['mCouponArea2'] = !showCoupon['mCouponArea2']">상품쿠폰
                                                        적용</button>
                                                </div>

                                                <div class="coupon-area" v-if="showCoupon['mCouponArea2']">
                                                    <div class="flex">
                                                        <div class="first-row">
                                                            <h6 class="title">상품쿠폰 적용</h6>
                                                            <button type="button" class="btn-offline-coupon"
                                                                @click="showOfflineCoupon['mOfflineCouponArea2'] = !showOfflineCoupon['mOfflineCouponArea2']">오프라인
                                                                쿠폰등록</button>
                                                        </div>
                                                        <div class="form-line form-button offline-coupon"
                                                            v-if="showOfflineCoupon['mOfflineCouponArea2']">
                                                            <input type="text" class="form-basic"
                                                                placeholder="'-' 없이 쿠폰번호 입력" />
                                                            <button class="btn btn-black">등록</button>
                                                        </div>
                                                        <select class="select-basic">
                                                            <option value="null">상품 쿠폰을 선택하세요</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>

                                            <p class="shipping">
                                                배송정보 : 무료배송 (자체차량 냉장 직배송)
                                            </p>

                                        </div>

                                        <!-- 브랜드 내 묶음배송 표기 -->
                                        <div class="box">
                                            <!-- 기본 -->
                                            <table class="basic-item-table pc">
                                                <colgroup>
                                                    <col style="min-width: 9rem; width: 10%;">
                                                    <col>
                                                    <col style="width: 12%;">
                                                    <col style="width: 19%;">
                                                    <col style="width: 19%;">
                                                </colgroup>
                                                <tfoot>
                                                    <tr>
                                                        <td></td>
                                                        <td colspan="4">
                                                            <div class="flex">
                                                                <span class="ea-box">수량 : 1개</span>
                                                                <button type="button" class="btn-coupon"
                                                                    @click="showCoupon['couponArea3'] = !showCoupon['couponArea3']">상품쿠폰
                                                                    적용</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="5" class="coupon-area"
                                                            v-if="showCoupon['couponArea3']">
                                                            <div class="flex">
                                                                <div class="first-row">
                                                                    <h6 class="title">상품쿠폰 적용</h6>
                                                                    <button type="button" class="btn-offline-coupon"
                                                                        @click="showOfflineCoupon['offlineCouponArea3'] = !showOfflineCoupon['offlineCouponArea3']">오프라인
                                                                        쿠폰등록</button>
                                                                </div>
                                                                <div class="form-line form-button offline-coupon"
                                                                    v-if="showOfflineCoupon['offlineCouponArea3']">
                                                                    <input type="text" class="form-basic"
                                                                        placeholder="'-' 없이 쿠폰번호 입력" />
                                                                    <button class="btn btn-black">등록</button>
                                                                </div>
                                                                <select class="select-basic">
                                                                    <option value="null">사업자회원 신규가입 쿠폰 - 20%할인 [ 1개 수량만 적용 ]
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                                <tbody>
                                                    <tr>
                                                        <!-- 썸네일 영역 -->
                                                        <td rowspan="6" class="first">
                                                            <span><img class="thumbnail"
                                                                    src="~/static/images/img_item_sample_01.png"
                                                                    alt="썸네일"></span>
                                                            <span class="thumbnail-text">실제 이미지입니다</span>
                                                        </td>
                                                        <!-- 라벨 영역 -->
                                                        <td>
                                                            <ul class="item-badge">
                                                                <li class="badge badge-rank">
                                                                    <span>1++B</span>
                                                                </li>
                                                                <!-- <li class="badge badge-fat no1">
                                                                    <span>NO.1</span>
                                                                </li>
                                                                <li class="badge badge-fat no2">
                                                                    <span>NO.2</span>
                                                                </li>
                                                                <li class="badge badge-fat no3">
                                                                    <span>NO.3</span>
                                                                </li>
                                                                <li class="badge badge-fat no4">
                                                                    <span>NO.4</span>
                                                                </li>
                                                                <li class="badge badge-fat no5">
                                                                    <span>NO.5</span>
                                                                </li>
                                                                <li class="badge badge-fat no6">
                                                                    <span>NO.6</span>
                                                                </li>
                                                                <li class="badge badge-fat no7">
                                                                    <span>NO.7</span>
                                                                </li>
                                                                <li class="badge badge-fat no8">
                                                                    <span>NO.8</span>
                                                                </li>-->
                                                                <li class="badge badge-fat no9">
                                                                    <span>NO.9</span>
                                                                </li>
                                                                <!-- <li class="badge badge-storage">
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                                                                    </span>
                                                                    <span>냉장</span>
                                                                </li>-->
                                                                <li class="badge badge-frozen">
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_ice.svg"
                                                                            alt="냉동">
                                                                    </span>
                                                                    <span>냉동</span>
                                                                </li>
                                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                                                <li class="badge badge-fresh"><span>신선물류</span></li>
                                                            </ul>
                                                        </td>
                                                        <td></td>
                                                        <td class="text-red">
                                                            <span class="unit-accent">kg당 최대 혜택가 10%↓</span>
                                                        </td>
                                                        <td class="text-blue">
                                                            <span class="unit-accent">최대 혜택가 10%↓</span>
                                                            <span class="sells-info tooltip-wrap">
                                                                <i @click="toolTip = true">?</i>
                                                                <item-tooltip :toolTip="toolTip" />
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="text-brand">브랜드명</td>
                                                        <td></td>
                                                        <td class="text-red">
                                                            <strong>단가(kg당)</strong>
                                                        </td>
                                                        <td class="text-blue text-left">
                                                            <strong>판매가</strong>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="title-td">
                                                            <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                                        </td>
                                                        <td>
                                                            <strong class="text-big">5.4kg</strong>
                                                        </td>
                                                        <td class="text-red">
                                                            <strong class="text-big">47,700</strong>
                                                            <strong class="text-small">원</strong>
                                                        </td>
                                                        <td class="text-big">
                                                            <strong class="text-price">9,999,999</strong>
                                                            <strong class="text-small">원</strong>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="item-part"><span class="text-gray">윗등심 + 아랫등심 반두분</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                                        </td>
                                                        <td>
                                                            <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="item-date">
                                                            <strong>가공일자</strong>
                                                            <strong class="date">2023-06-28</strong>
                                                            (29개월령)
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <ul class="item-benefits">
                                                                <li class="benefit point"><span>행사할인 </span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_point.png"
                                                                            alt="적립혜택">
                                                                    </span>
                                                                </li>
                                                                <li class="benefit coupon"><span>할인혜택</span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_coupon.png"
                                                                            alt="즉시할인">
                                                                    </span>
                                                                </li>
                                                                <li class="benefit discount"><span>숙성할인</span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_aging.png"
                                                                            alt="숙성할인">
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <!-- mobile -->
                                            <div class="basic-item-list mobile">
                                                <!-- 썸네일 영역 -->
                                                <div class="thumbnail-area"><img class="thumbnail"
                                                        src="~/static/images/img_item_sample_01.png" alt="썸네일"></div>

                                                <!-- 라벨 영역 -->
                                                <ul class="item-badge">
                                                    <li class="badge badge-rank">
                                                        <span>1++B</span>
                                                    </li>
                                                    <!-- <li class="badge badge-fat no1">
                                                        <span>NO.1</span>
                                                    </li>
                                                    <li class="badge badge-fat no2">
                                                        <span>NO.2</span>
                                                    </li>
                                                    <li class="badge badge-fat no3">
                                                        <span>NO.3</span>
                                                    </li>
                                                    <li class="badge badge-fat no4">
                                                        <span>NO.4</span>
                                                    </li>
                                                    <li class="badge badge-fat no5">
                                                        <span>NO.5</span>
                                                    </li>
                                                    <li class="badge badge-fat no6">
                                                        <span>NO.6</span>
                                                    </li>
                                                    <li class="badge badge-fat no7">
                                                        <span>NO.7</span>
                                                    </li>
                                                    <li class="badge badge-fat no8">
                                                        <span>NO.8</span>
                                                    </li>-->
                                                    <li class="badge badge-fat no9">
                                                        <span>NO.9</span>
                                                    </li>
                                                    <!-- <li class="badge badge-storage">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                                                        </span>
                                                        <span>냉장</span>
                                                    </li>-->
                                                    <li class="badge badge-frozen">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                        </span>
                                                        <span>냉동</span>
                                                    </li>
                                                    <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                                    <li class="badge badge-fresh">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_fresh.png"
                                                                alt="신선물류">
                                                        </span>
                                                        <span>신선물류</span>
                                                    </li>
                                                </ul>

                                                <p class="item-title">
                                                    <span class="text-brand">브랜드명</span>
                                                    <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                                    <span class="item-part text-gray">윗등심 + 아랫등심 반두분</span>
                                                    <span class="item-date">
                                                        <strong>가공일자</strong>
                                                        <strong class="date">2023-06-28</strong>
                                                        (29개월령)
                                                    </span>
                                                </p>

                                                <div class="item-price">
                                                    <strong class="text-big weight">5.4kg</strong>
                                                    <div class="row">
                                                        <div class="col text-red">
                                                            <span class="unit-accent">최대 혜택가 10%↓</span>
                                                            <p class="text">
                                                                <strong>단가(kg당)</strong>
                                                            </p>
                                                            <div class="price">
                                                                <strong class="text-big">47,700</strong><strong
                                                                    class="text-small">원</strong>
                                                            </div>
                                                            <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                                        </div>
                                                        <div class="col text-blue">
                                                            <span class="unit-accent">최대 혜택가 10%↓</span>
                                                            <span class="sells-info tooltip-wrap">
                                                                <i @click="toolTip = true">?</i>
                                                                <item-tooltip :toolTip="toolTip" />
                                                            </span>
                                                            <p class="text">
                                                                <strong>판매가</strong>
                                                            </p>
                                                            <div class="price">
                                                                <strong class="text-price">9,999,999</strong><strong
                                                                    class="text-small">원</strong>
                                                            </div>
                                                            <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <ul class="item-benefits">
                                                    <li class="benefit point"><span>행사할인 </span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_point.png"
                                                                alt="적립혜택">
                                                        </span>
                                                    </li>
                                                    <li class="benefit coupon"><span>할인혜택</span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_coupon.png"
                                                                alt="즉시할인">
                                                        </span>
                                                    </li>
                                                    <li class="benefit discount"><span>숙성할인</span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_aging.png"
                                                                alt="숙성할인">
                                                        </span>
                                                    </li>
                                                </ul>

                                                <div class="flex">
                                                    <span class="ea-box">수량 : 1개</span>
                                                    <button type="button" class="btn-coupon"
                                                        @click="showCoupon['mCouponArea3'] = !showCoupon['mCouponArea3']">상품쿠폰
                                                        적용</button>
                                                </div>

                                                <div class="coupon-area" v-if="showCoupon['mCouponArea3']">
                                                    <div class="flex">
                                                        <div class="first-row">
                                                            <h6 class="title">상품쿠폰 적용</h6>
                                                            <button type="button" class="btn-offline-coupon"
                                                                @click="showOfflineCoupon['mOfflineCouponArea3'] = !showOfflineCoupon['mOfflineCouponArea3']">오프라인
                                                                쿠폰등록</button>
                                                        </div>
                                                        <div class="form-line form-button offline-coupon"
                                                            v-if="showOfflineCoupon['mOfflineCouponArea3']">
                                                            <input type="text" class="form-basic"
                                                                placeholder="'-' 없이 쿠폰번호 입력" />
                                                            <button class="btn btn-black">등록</button>
                                                        </div>
                                                        <select class="select-basic">
                                                            <option value="null">상품 쿠폰을 선택하세요</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>

                                            <p class="shipping">
                                                배송정보 : 무료배송 (자체차량 냉장 직배송)
                                            </p>

                                        </div>

                                    </div>

                                    <!-- 바를정육류연구소 : N건 -->
                                    <div class="brand-title" :class="{ closed: toggleItem['freshItemList2'] }">
                                        <div class="col-left">
                                            <h5 @click="toggleItem['freshItemList2'] = !toggleItem['freshItemList2']">
                                                바를정육류연구소 : N건</h5>
                                        </div>

                                        <div class="col-right">
                                            <span class="price"
                                                @click="toggleItem['freshItemList2'] = !toggleItem['freshItemList2']">
                                                상품 999,999,999 + 배송비 999,999원 = <span>1,521,000원</span>
                                            </span>
                                            <span class="toggle-ico">
                                                <img src="~/assets/images/common/arrow/ico_arr_gray_top.png"
                                                    alt="열기/닫기 화살표">
                                            </span>
                                        </div>
                                    </div>

                                    <p class="accordion-notice">
                                        자체차량 냉장 직배송/CJ대한통운 냉장 직배송<br>
                                        <span class="text-blue">오늘 밤 10시 전까지 결제 시 <br class="mobile">06/22(목) 출고예정

                                            <span class="sells-info tooltip-wrap"
                                                @mouseover="showTooltip['delivery2'] = true"><i>?</i>
                                                <article class="tooltip" v-if="showTooltip['delivery2']"
                                                    @mouseleave="showTooltip['delivery2'] = false">
                                                    <div class="tooltip-close" @click="showTooltip['delivery2'] = false">
                                                        <img src="~/assets/images/common/ico_close_black.png" alt="">
                                                    </div>
                                                    <div class="tooltip-title">출고예정일 관련 안내</div>
                                                    <div class="tooltip-body">
                                                        지역 및 상황에 따라 배송 방법 및 일정
                                                        이 변경될 수 있습니다. <br>
                                                        배송중 단계로 변경 시 상세 정보를 확
                                                        인하실 수 있습니다.
                                                    </div>
                                                </article>
                                            </span>
                                        </span>
                                    </p>

                                    <div class="box-wrap" v-if="toggleItem['freshItemList2']">
                                        <div class="box">
                                            <!-- 기본 -->
                                            <table class="basic-item-table pc">
                                                <colgroup>
                                                    <col style="min-width: 9rem; width: 10%;">
                                                    <col>
                                                    <col style="width: 12%;">
                                                    <col style="width: 19%;">
                                                    <col style="width: 19%;">
                                                </colgroup>
                                                <tfoot>
                                                    <tr>
                                                        <td></td>
                                                        <td colspan="4">
                                                            <div class="flex">
                                                                <span class="ea-box">수량 : 1개</span>
                                                                <button type="button" class="btn-coupon"
                                                                    @click="showCoupon['couponArea4'] = !showCoupon['couponArea4']">상품쿠폰
                                                                    적용</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="5" class="coupon-area"
                                                            v-if="showCoupon['couponArea4']">
                                                            <div class="flex">
                                                                <div class="first-row">
                                                                    <h6 class="title">상품쿠폰 적용</h6>
                                                                    <button type="button" class="btn-offline-coupon"
                                                                        @click="showOfflineCoupon['offlineCouponArea4'] = !showOfflineCoupon['offlineCouponArea4']">오프라인
                                                                        쿠폰등록</button>
                                                                </div>
                                                                <div class="form-line form-button offline-coupon"
                                                                    v-if="showOfflineCoupon['offlineCouponArea4']">
                                                                    <input type="text" class="form-basic"
                                                                        placeholder="'-' 없이 쿠폰번호 입력" />
                                                                    <button class="btn btn-black">등록</button>
                                                                </div>
                                                                <select class="select-basic">
                                                                    <option value="null">사업자회원 신규가입 쿠폰 - 20%할인 [ 1개 수량만 적용 ]
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                                <tbody>
                                                    <tr>
                                                        <!-- 썸네일 영역 -->
                                                        <td rowspan="6" class="first">
                                                            <span><img class="thumbnail"
                                                                    src="~/static/images/img_item_sample_01.png"
                                                                    alt="썸네일"></span>
                                                            <span class="thumbnail-text">실제 이미지입니다</span>
                                                        </td>
                                                        <!-- 라벨 영역 -->
                                                        <td>
                                                            <ul class="item-badge">
                                                                <li class="badge badge-rank">
                                                                    <span>1++B</span>
                                                                </li>
                                                                <!-- <li class="badge badge-fat no1">
                                                                    <span>NO.1</span>
                                                                </li>
                                                                <li class="badge badge-fat no2">
                                                                    <span>NO.2</span>
                                                                </li>
                                                                <li class="badge badge-fat no3">
                                                                    <span>NO.3</span>
                                                                </li>
                                                                <li class="badge badge-fat no4">
                                                                    <span>NO.4</span>
                                                                </li>
                                                                <li class="badge badge-fat no5">
                                                                    <span>NO.5</span>
                                                                </li>
                                                                <li class="badge badge-fat no6">
                                                                    <span>NO.6</span>
                                                                </li>
                                                                <li class="badge badge-fat no7">
                                                                    <span>NO.7</span>
                                                                </li>
                                                                <li class="badge badge-fat no8">
                                                                    <span>NO.8</span>
                                                                </li>-->
                                                                <li class="badge badge-fat no9">
                                                                    <span>NO.9</span>
                                                                </li>
                                                                <!-- <li class="badge badge-storage">
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                                                                    </span>
                                                                    <span>냉장</span>
                                                                </li>-->
                                                                <li class="badge badge-frozen">
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_ice.svg"
                                                                            alt="냉동">
                                                                    </span>
                                                                    <span>냉동</span>
                                                                </li>
                                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                                                <li class="badge badge-fresh"><span>신선물류</span></li>
                                                            </ul>
                                                        </td>
                                                        <td></td>
                                                        <td class="text-red">
                                                            <span class="unit-accent">kg당 최대 혜택가 10%↓</span>
                                                        </td>
                                                        <td class="text-blue">
                                                            <span class="unit-accent">최대 혜택가 10%↓</span>
                                                            <span class="sells-info tooltip-wrap">
                                                                <i @click="toolTip = true">?</i>
                                                                <item-tooltip :toolTip="toolTip" />
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="text-brand">브랜드명</td>
                                                        <td></td>
                                                        <td class="text-red">
                                                            <strong>단가(kg당)</strong>
                                                        </td>
                                                        <td class="text-blue text-left">
                                                            <strong>판매가</strong>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="title-td">
                                                            <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                                        </td>
                                                        <td>
                                                            <strong class="text-big">5.4kg</strong>
                                                        </td>
                                                        <td class="text-red">
                                                            <strong class="text-big">47,700</strong>
                                                            <strong class="text-small">원</strong>
                                                        </td>
                                                        <td class="text-big">
                                                            <strong class="text-price">9,999,999</strong>
                                                            <strong class="text-small">원</strong>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="item-part"><span class="text-gray">윗등심 + 아랫등심 반두분</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                                        </td>
                                                        <td>
                                                            <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="item-date">
                                                            <strong>가공일자</strong>
                                                            <strong class="date">2023-06-28</strong>
                                                            (29개월령)
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <ul class="item-benefits">
                                                                <li class="benefit point"><span>행사할인 </span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_point.png"
                                                                            alt="적립혜택">
                                                                    </span>
                                                                </li>
                                                                <li class="benefit coupon"><span>할인혜택</span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_coupon.png"
                                                                            alt="즉시할인">
                                                                    </span>
                                                                </li>
                                                                <li class="benefit discount"><span>숙성할인</span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_aging.png"
                                                                            alt="숙성할인">
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <!-- 썸네일 X -->
                                            <table class="basic-item-table pc">
                                                <colgroup>
                                                    <col>
                                                    <col style="width: 12%;">
                                                    <col style="width: 19%;">
                                                    <col style="width: 19%;">
                                                </colgroup>
                                                <tfoot>
                                                    <tr>
                                                        <td colspan="4" class="first">
                                                            <div class="flex">
                                                                <span class="ea-box">수량 : 1개</span>
                                                                <button type="button" class="btn-coupon"
                                                                    @click="showCoupon['couponArea5'] = !showCoupon['couponArea5']">상품쿠폰
                                                                    적용</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="5" class="coupon-area"
                                                            v-if="showCoupon['couponArea5']">
                                                            <div class="flex">
                                                                <div class="first-row">
                                                                    <h6 class="title">상품쿠폰 적용</h6>
                                                                    <button type="button" class="btn-offline-coupon"
                                                                        @click="showOfflineCoupon['offlineCouponArea5'] = !showOfflineCoupon['offlineCouponArea5']">오프라인
                                                                        쿠폰등록</button>
                                                                </div>
                                                                <div class="form-line form-button offline-coupon"
                                                                    v-if="showOfflineCoupon['offlineCouponArea5']">
                                                                    <input type="text" class="form-basic"
                                                                        placeholder="'-' 없이 쿠폰번호 입력" />
                                                                    <button class="btn btn-black">등록</button>
                                                                </div>
                                                                <select class="select-basic">
                                                                    <option value="null">사업자회원 신규가입 쿠폰 - 20%할인 [ 1개 수량만 적용 ]
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                                <tbody>
                                                    <tr>
                                                        <!-- 라벨 영역 -->
                                                        <td class="first">
                                                            <ul class="item-badge">
                                                                <li class="badge badge-rank">
                                                                    <span>1++B</span>
                                                                </li>
                                                                <!-- <li class="badge badge-fat no1">
                                                                    <span>NO.1</span>
                                                                </li>
                                                                <li class="badge badge-fat no2">
                                                                    <span>NO.2</span>
                                                                </li>
                                                                <li class="badge badge-fat no3">
                                                                    <span>NO.3</span>
                                                                </li>
                                                                <li class="badge badge-fat no4">
                                                                    <span>NO.4</span>
                                                                </li>
                                                                <li class="badge badge-fat no5">
                                                                    <span>NO.5</span>
                                                                </li>
                                                                <li class="badge badge-fat no6">
                                                                    <span>NO.6</span>
                                                                </li>
                                                                <li class="badge badge-fat no7">
                                                                    <span>NO.7</span>
                                                                </li>
                                                                <li class="badge badge-fat no8">
                                                                    <span>NO.8</span>
                                                                </li>-->
                                                                <li class="badge badge-fat no9">
                                                                    <span>NO.9</span>
                                                                </li>
                                                                <!-- <li class="badge badge-storage">
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                                                                    </span>
                                                                    <span>냉장</span>
                                                                </li>-->
                                                                <li class="badge badge-frozen">
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_ice.svg"
                                                                            alt="냉동">
                                                                    </span>
                                                                    <span>냉동</span>
                                                                </li>
                                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                                                <li class="badge badge-fresh"><span>신선물류</span></li>
                                                            </ul>
                                                        </td>
                                                        <td></td>
                                                        <td class="text-red">
                                                        </td>
                                                        <td class="text-blue">
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="text-brand first">브랜드명</td>
                                                        <td></td>
                                                        <td class="text-red">
                                                            <strong>단가(kg당)</strong>
                                                        </td>
                                                        <td class="text-blue text-left">
                                                            <strong>판매가</strong>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="first">
                                                            <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                                        </td>
                                                        <td>
                                                            <strong class="text-big">5.4kg</strong>
                                                        </td>
                                                        <td class="text-red">
                                                            <strong class="text-big">47,700</strong>
                                                            <strong class="text-small">원</strong>
                                                        </td>
                                                        <td class="text-big">
                                                            <strong class="text-price">9,999,999</strong>
                                                            <strong class="text-small">원</strong>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="item-part first"><span class="text-gray">윗등심 + 아랫등심
                                                                반두분</span>
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>

                                                    <tr>
                                                        <td class="item-date first">
                                                            <strong>가공일자</strong>
                                                            <strong class="date">2023-06-28</strong>
                                                            (29개월령)
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>

                                                    <tr>
                                                        <td class="first">
                                                            <ul class="item-benefits">
                                                                <li class="benefit point"><span>행사할인 </span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_point.png"
                                                                            alt="적립혜택">
                                                                    </span>
                                                                </li>
                                                                <li class="benefit coupon"><span>할인혜택</span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_coupon.png"
                                                                            alt="즉시할인">
                                                                    </span>
                                                                </li>
                                                                <li class="benefit discount"><span>숙성할인</span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_aging.png"
                                                                            alt="숙성할인">
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <!-- mobile -->
                                            <div class="basic-item-list mobile">
                                                <!-- 썸네일 영역 -->
                                                <div class="thumbnail-area"><img class="thumbnail"
                                                        src="~/static/images/img_item_sample_01.png" alt="썸네일"></div>

                                                <!-- 라벨 영역 -->
                                                <ul class="item-badge">
                                                    <li class="badge badge-rank">
                                                        <span>1++B</span>
                                                    </li>
                                                    <!-- <li class="badge badge-fat no1">
                                                        <span>NO.1</span>
                                                    </li>
                                                    <li class="badge badge-fat no2">
                                                        <span>NO.2</span>
                                                    </li>
                                                    <li class="badge badge-fat no3">
                                                        <span>NO.3</span>
                                                    </li>
                                                    <li class="badge badge-fat no4">
                                                        <span>NO.4</span>
                                                    </li>
                                                    <li class="badge badge-fat no5">
                                                        <span>NO.5</span>
                                                    </li>
                                                    <li class="badge badge-fat no6">
                                                        <span>NO.6</span>
                                                    </li>
                                                    <li class="badge badge-fat no7">
                                                        <span>NO.7</span>
                                                    </li>
                                                    <li class="badge badge-fat no8">
                                                        <span>NO.8</span>
                                                    </li>-->
                                                    <li class="badge badge-fat no9">
                                                        <span>NO.9</span>
                                                    </li>
                                                    <!-- <li class="badge badge-storage">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                                                        </span>
                                                        <span>냉장</span>
                                                    </li>-->
                                                    <li class="badge badge-frozen">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                        </span>
                                                        <span>냉동</span>
                                                    </li>
                                                    <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                                    <li class="badge badge-fresh">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_fresh.png"
                                                                alt="신선물류">
                                                        </span>
                                                        <span>신선물류</span>
                                                    </li>
                                                </ul>

                                                <p class="item-title">
                                                    <span class="text-brand">브랜드명</span>
                                                    <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                                    <span class="item-part text-gray">윗등심 + 아랫등심 반두분</span>
                                                    <span class="item-date">
                                                        <strong>가공일자</strong>
                                                        <strong class="date">2023-06-28</strong>
                                                        (29개월령)
                                                    </span>
                                                </p>

                                                <div class="item-price">
                                                    <strong class="text-big weight">5.4kg</strong>
                                                    <div class="row">
                                                        <div class="col text-red">
                                                            <span class="unit-accent">최대 혜택가 10%↓</span>
                                                            <p class="text">
                                                                <strong>단가(kg당)</strong>
                                                            </p>
                                                            <div class="price">
                                                                <strong class="text-big">47,700</strong><strong
                                                                    class="text-small">원</strong>
                                                            </div>
                                                            <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                                        </div>
                                                        <div class="col text-blue">
                                                            <span class="unit-accent">최대 혜택가 10%↓</span>
                                                            <span class="sells-info tooltip-wrap">
                                                                <i @click="toolTip = true">?</i>
                                                                <item-tooltip :toolTip="toolTip" />
                                                            </span>
                                                            <p class="text">
                                                                <strong>판매가</strong>
                                                            </p>
                                                            <div class="price">
                                                                <strong class="text-price">9,999,999</strong><strong
                                                                    class="text-small">원</strong>
                                                            </div>
                                                            <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <ul class="item-benefits">
                                                    <li class="benefit point"><span>행사할인 </span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_point.png"
                                                                alt="적립혜택">
                                                        </span>
                                                    </li>
                                                    <li class="benefit coupon"><span>할인혜택</span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_coupon.png"
                                                                alt="즉시할인">
                                                        </span>
                                                    </li>
                                                    <li class="benefit discount"><span>숙성할인</span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_aging.png"
                                                                alt="숙성할인">
                                                        </span>
                                                    </li>
                                                </ul>

                                                <div class="flex">
                                                    <span class="ea-box">수량 : 1개</span>
                                                    <button type="button" class="btn-coupon"
                                                        @click="showCoupon['mCouponArea4'] = !showCoupon['mCouponArea4']">상품쿠폰
                                                        적용</button>
                                                </div>

                                                <div class="coupon-area" v-if="showCoupon['mCouponArea4']">
                                                    <div class="flex">
                                                        <div class="first-row">
                                                            <h6 class="title">상품쿠폰 적용</h6>
                                                            <button type="button" class="btn-offline-coupon"
                                                                @click="showOfflineCoupon['mOfflineCouponArea4'] = !showOfflineCoupon['mOfflineCouponArea4']">오프라인
                                                                쿠폰등록</button>
                                                        </div>
                                                        <div class="form-line form-button offline-coupon"
                                                            v-if="showOfflineCoupon['mOfflineCouponArea4']">
                                                            <input type="text" class="form-basic"
                                                                placeholder="'-' 없이 쿠폰번호 입력" />
                                                            <button class="btn btn-black">등록</button>
                                                        </div>
                                                        <select class="select-basic">
                                                            <option value="null">상품 쿠폰을 선택하세요</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>

                                            <p class="shipping">
                                                배송정보 : 무료배송 (자체차량 냉장 직배송)
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </li>

                            <!-- 개별배송 -->
                            <li class="list">
                                <div class="list-tit">
                                    <div class="flex" :class="{ closed: toggleItem['eachItem'] }">
                                        <div class="col-left">
                                            <h4 @click="toggleItem['eachItem'] = !toggleItem['eachItem']">개별배송 :
                                                N건</h4>
                                        </div>

                                        <div class="col-right">
                                            <span class="price" @click="toggleItem['eachItem'] = !toggleItem['eachItem']">
                                                상품 999,999,999 + 배송비 999,999원 <span class="pc">=</span><br class="mobile">
                                                <span>1,521,000원</span>
                                            </span>
                                            <span class="toggle-ico">
                                                <img src="~/assets/images/common/arrow/ico_arr_accordion.png"
                                                    alt="열기/닫기 화살표">
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="list-wrap" v-if="toggleItem['eachItem']">
                                    <!-- 농협PB : N건 -->
                                    <div class="brand-title" :class="{ closed: toggleItem['eachItemList1'] }">
                                        <div class="col-left">
                                            <h5 @click="toggleItem['eachItemList1'] = !toggleItem['eachItemList1']">
                                                바를정육류연구소 : N건</h5>
                                        </div>

                                        <div class="col-right">
                                            <span class="price"
                                                @click="toggleItem['eachItemList1'] = !toggleItem['eachItemList1']">
                                                상품 999,999,999 + 배송비 999,999원 = <span>1,521,000원</span>
                                            </span>
                                            <span class="toggle-ico">
                                                <img src="~/assets/images/common/arrow/ico_arr_gray_top.png"
                                                    alt="열기/닫기 화살표">
                                            </span>
                                        </div>
                                    </div>

                                    <p class="accordion-notice tooltip-wrap">
                                        자체차량 냉장 직배송/CJ대한통운 냉장 직배송<br>
                                        <span class="text-blue">오늘 밤 10시 전까지 결제 시 <br class="mobile">06/22(목) 출고예정

                                            <span class="sells-info tooltip-wrap"
                                                @mouseover="showTooltip['delivery3'] = true"><i>?</i>
                                                <article class="tooltip" v-if="showTooltip['delivery3']"
                                                    @mouseleave="showTooltip['delivery3'] = false">
                                                    <div class="tooltip-close" @click="showTooltip['delivery3'] = false">
                                                        <img src="~/assets/images/common/ico_close_black.png" alt="">
                                                    </div>
                                                    <div class="tooltip-title">출고예정일 관련 안내</div>
                                                    <div class="tooltip-body">
                                                        지역 및 상황에 따라 배송 방법 및 일정
                                                        이 변경될 수 있습니다. <br>
                                                        배송중 단계로 변경 시 상세 정보를 확
                                                        인하실 수 있습니다.
                                                    </div>
                                                </article>
                                            </span>
                                        </span>
                                    </p>

                                    <div class="box-wrap" v-if="toggleItem['eachItemList1']">
                                        <div class="box">
                                            <!-- 기본 -->
                                            <table class="basic-item-table pc">
                                                <colgroup>
                                                    <col style="min-width: 9rem; width: 10%;">
                                                    <col>
                                                    <col style="width: 12%;">
                                                    <col style="width: 19%;">
                                                    <col style="width: 19%;">
                                                </colgroup>
                                                <tfoot>
                                                    <tr>
                                                        <td></td>
                                                        <td colspan="4">
                                                            <div class="flex">
                                                                <span class="ea-box">수량 : 1개</span>
                                                                <button type="button" class="btn-coupon"
                                                                    @click="showCoupon['couponArea5'] = !showCoupon['couponArea5']">상품쿠폰
                                                                    적용</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="5" class="coupon-area"
                                                            v-if="showCoupon['couponArea5']">
                                                            <div class="flex">
                                                                <div class="first-row">
                                                                    <h6 class="title">상품쿠폰 적용</h6>
                                                                    <button type="button" class="btn-offline-coupon"
                                                                        @click="showOfflineCoupon['offlineCouponArea5'] = !showOfflineCoupon['offlineCouponArea5']">오프라인
                                                                        쿠폰등록</button>
                                                                </div>
                                                                <div class="form-line form-button offline-coupon"
                                                                    v-if="showOfflineCoupon['offlineCouponArea5']">
                                                                    <input type="text" class="form-basic"
                                                                        placeholder="'-' 없이 쿠폰번호 입력" />
                                                                    <button class="btn btn-black">등록</button>
                                                                </div>
                                                                <select class="select-basic">
                                                                    <option value="null">사업자회원 신규가입 쿠폰 - 20%할인 [ 1개 수량만 적용 ]
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                                <tbody>
                                                    <tr>
                                                        <!-- 썸네일 영역 -->
                                                        <td rowspan="6" class="first">
                                                            <span><img class="thumbnail"
                                                                    src="~/static/images/img_item_sample_01.png"
                                                                    alt="썸네일"></span>
                                                            <span class="thumbnail-text">실제 이미지입니다</span>
                                                        </td>
                                                        <!-- 라벨 영역 -->
                                                        <td>
                                                            <ul class="item-badge">
                                                                <li class="badge badge-rank">
                                                                    <span>1++B</span>
                                                                </li>
                                                                <!-- <li class="badge badge-fat no1">
                                                                    <span>NO.1</span>
                                                                </li>
                                                                <li class="badge badge-fat no2">
                                                                    <span>NO.2</span>
                                                                </li>
                                                                <li class="badge badge-fat no3">
                                                                    <span>NO.3</span>
                                                                </li>
                                                                <li class="badge badge-fat no4">
                                                                    <span>NO.4</span>
                                                                </li>
                                                                <li class="badge badge-fat no5">
                                                                    <span>NO.5</span>
                                                                </li>
                                                                <li class="badge badge-fat no6">
                                                                    <span>NO.6</span>
                                                                </li>
                                                                <li class="badge badge-fat no7">
                                                                    <span>NO.7</span>
                                                                </li>
                                                                <li class="badge badge-fat no8">
                                                                    <span>NO.8</span>
                                                                </li>-->
                                                                <li class="badge badge-fat no9">
                                                                    <span>NO.9</span>
                                                                </li>
                                                                <!-- <li class="badge badge-storage">
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                                                                    </span>
                                                                    <span>냉장</span>
                                                                </li>-->
                                                                <li class="badge badge-frozen">
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_ice.svg"
                                                                            alt="냉동">
                                                                    </span>
                                                                    <span>냉동</span>
                                                                </li>
                                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                                                <li class="badge badge-fresh"><span>신선물류</span></li>
                                                            </ul>
                                                        </td>
                                                        <td></td>
                                                        <td class="text-red">
                                                            <span class="unit-accent">kg당 최대 혜택가 10%↓</span>
                                                        </td>
                                                        <td class="text-blue">
                                                            <span class="unit-accent">최대 혜택가 10%↓</span>
                                                            <span class="sells-info tooltip-wrap">
                                                                <i @click="toolTip = true">?</i>
                                                                <item-tooltip :toolTip="toolTip" />
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="text-brand">브랜드명</td>
                                                        <td></td>
                                                        <td class="text-red">
                                                            <strong>단가(kg당)</strong>
                                                        </td>
                                                        <td class="text-blue text-left">
                                                            <strong>판매가</strong>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="title-td">
                                                            <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                                        </td>
                                                        <td>
                                                            <strong class="text-big">5.4kg</strong>
                                                        </td>
                                                        <td class="text-red">
                                                            <strong class="text-big">47,700</strong>
                                                            <strong class="text-small">원</strong>
                                                        </td>
                                                        <td class="text-big">
                                                            <strong class="text-price">9,999,999</strong>
                                                            <strong class="text-small">원</strong>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="item-part"><span class="text-gray">윗등심 + 아랫등심 반두분</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                                        </td>
                                                        <td>
                                                            <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="item-date">
                                                            <strong>가공일자</strong>
                                                            <strong class="date">2023-06-28</strong>
                                                            (29개월령)
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <ul class="item-benefits">
                                                                <li class="benefit point"><span>행사할인 </span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_point.png"
                                                                            alt="적립혜택">
                                                                    </span>
                                                                </li>
                                                                <li class="benefit coupon"><span>할인혜택</span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_coupon.png"
                                                                            alt="즉시할인">
                                                                    </span>
                                                                </li>
                                                                <li class="benefit discount"><span>숙성할인</span>
                                                                    <span>
                                                                        <img src="~/assets/images/common/items/ico_aging.png"
                                                                            alt="숙성할인">
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <!-- mobile -->
                                            <div class="basic-item-list mobile">
                                                <!-- 썸네일 영역 -->
                                                <div class="thumbnail-area"><img class="thumbnail"
                                                        src="~/static/images/img_item_sample_01.png" alt="썸네일"></div>

                                                <!-- 라벨 영역 -->
                                                <ul class="item-badge">
                                                    <li class="badge badge-rank">
                                                        <span>1++B</span>
                                                    </li>
                                                    <!-- <li class="badge badge-fat no1">
                                                        <span>NO.1</span>
                                                    </li>
                                                    <li class="badge badge-fat no2">
                                                        <span>NO.2</span>
                                                    </li>
                                                    <li class="badge badge-fat no3">
                                                        <span>NO.3</span>
                                                    </li>
                                                    <li class="badge badge-fat no4">
                                                        <span>NO.4</span>
                                                    </li>
                                                    <li class="badge badge-fat no5">
                                                        <span>NO.5</span>
                                                    </li>
                                                    <li class="badge badge-fat no6">
                                                        <span>NO.6</span>
                                                    </li>
                                                    <li class="badge badge-fat no7">
                                                        <span>NO.7</span>
                                                    </li>
                                                    <li class="badge badge-fat no8">
                                                        <span>NO.8</span>
                                                    </li>-->
                                                    <li class="badge badge-fat no9">
                                                        <span>NO.9</span>
                                                    </li>
                                                    <!-- <li class="badge badge-storage">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                                                        </span>
                                                        <span>냉장</span>
                                                    </li>-->
                                                    <li class="badge badge-frozen">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                        </span>
                                                        <span>냉동</span>
                                                    </li>
                                                    <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                                    <li class="badge badge-fresh">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_fresh.png"
                                                                alt="신선물류">
                                                        </span>
                                                        <span>신선물류</span>
                                                    </li>
                                                </ul>

                                                <p class="item-title">
                                                    <span class="text-brand">브랜드명</span>
                                                    <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                                    <span class="item-part text-gray">윗등심 + 아랫등심 반두분</span>
                                                    <span class="item-date">
                                                        <strong>가공일자</strong>
                                                        <strong class="date">2023-06-28</strong>
                                                        (29개월령)
                                                    </span>
                                                </p>

                                                <div class="item-price">
                                                    <strong class="text-big weight">5.4kg</strong>
                                                    <div class="row">
                                                        <div class="col text-red">
                                                            <span class="unit-accent">최대 혜택가 10%↓</span>
                                                            <p class="text">
                                                                <strong>단가(kg당)</strong>
                                                            </p>
                                                            <div class="price">
                                                                <strong class="text-big">47,700</strong><strong
                                                                    class="text-small">원</strong>
                                                            </div>
                                                            <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                                        </div>
                                                        <div class="col text-blue">
                                                            <span class="unit-accent">최대 혜택가 10%↓</span>
                                                            <span class="sells-info tooltip-wrap">
                                                                <i @click="toolTip = true">?</i>
                                                                <item-tooltip :toolTip="toolTip" />
                                                            </span>
                                                            <p class="text">
                                                                <strong>판매가</strong>
                                                            </p>
                                                            <div class="price">
                                                                <strong class="text-price">9,999,999</strong><strong
                                                                    class="text-small">원</strong>
                                                            </div>
                                                            <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <ul class="item-benefits">
                                                    <li class="benefit point"><span>행사할인 </span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_point.png"
                                                                alt="적립혜택">
                                                        </span>
                                                    </li>
                                                    <li class="benefit coupon"><span>할인혜택</span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_coupon.png"
                                                                alt="즉시할인">
                                                        </span>
                                                    </li>
                                                    <li class="benefit discount"><span>숙성할인</span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_aging.png"
                                                                alt="숙성할인">
                                                        </span>
                                                    </li>
                                                </ul>

                                                <div class="flex">
                                                    <span class="ea-box">수량 : 1개</span>
                                                    <button type="button" class="btn-coupon"
                                                        @click="showCoupon['mCouponArea5'] = !showCoupon['mCouponArea5']">상품쿠폰
                                                        적용</button>
                                                </div>

                                                <div class="coupon-area" v-if="showCoupon['mCouponArea5']">
                                                    <div class="flex">
                                                        <div class="first-row">
                                                            <h6 class="title">상품쿠폰 적용</h6>
                                                            <button type="button" class="btn-offline-coupon"
                                                                @click="showOfflineCoupon['mOfflineCouponArea5'] = !showOfflineCoupon['mOfflineCouponArea5']">오프라인
                                                                쿠폰등록</button>
                                                        </div>
                                                        <div class="form-line form-button offline-coupon"
                                                            v-if="showOfflineCoupon['mOfflineCouponArea5']">
                                                            <input type="text" class="form-basic"
                                                                placeholder="'-' 없이 쿠폰번호 입력" />
                                                            <button class="btn btn-black">등록</button>
                                                        </div>
                                                        <select class="select-basic">
                                                            <option value="null">상품 쿠폰을 선택하세요</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>

                                            <p class="shipping">
                                                배송정보 : 3,000원 (CJ대한통운 냉장 직배송)
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </li>

                        </ul>

                        <!-- 주문자 정보
                        <div class="form-area">
                            <h2 class="fold-title" @click="toggleArea">주문자 정보
                                <span class="toggle-ico">
                                    <img src="~/assets/images/common/arrow/ico_arr_red_up.png" alt="열기/닫기 화살표">
                                </span>
                            </h2>

                            <div class="fold-area">
                                <p class="form-title"><span>이름</span></p>
                                <div class="form-line">
                                    <input type="text" class="form-basic" placeholder="이름 입력" />
                                    <span class="feedback" style="display: none;"></span>
                                </div>

                                <p class="form-title"><span>일반전화</span></p>
                                <div class="form-line form-mobile form-button">
                                    <input type="number" class="form-basic" placeholder="휴대폰 번호 숫자만 입력" />
                                    <span class="feedback" style="display: none;"></span>
                                </div>

                                <p class="form-title"><span>이메일</span></p>
                                <div class="form-line form-email">
                                    <input type="text" class="form-basic" placeholder="example@company.com" />
                                    <span class="feedback" style="display: none;"></span>
                                </div>
                            </div>
                        </div> -->

                        <!-- 배송지 정보 -->
                        <div class="form-area address">
                            <h2 class="fold-title" @click="foldTarget['foldTarget1'] = !foldTarget['foldTarget1']"
                                :class="{ closed: foldTarget['foldTarget1'] }">배송지 정보
                                <span class="toggle-ico">
                                    <img src="~/assets/images/common/arrow/ico_arr_red_up.png" alt="열기/닫기 화살표">
                                </span>
                            </h2>

                            <div class="fold-area" v-if="foldTarget['foldTarget1']">
                                <div class="radio-wrap">
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="address-input" checked>
                                            <span>기본 배송지</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="address-input">
                                            <span>새로운 배송지</span>
                                        </label>
                                    </div>
                                    <button type="button" class="btn btn-addresslist"
                                        @click="addressModal.modalShow = true">배송지
                                        목록</button>

                                </div>

                                <p class="form-title"><span>이름</span></p>
                                <div class="form-line">
                                    <input type="text" class="form-basic" placeholder="이름 입력" />
                                    <span class="feedback" style="display: none;"></span>
                                </div>

                                <!-- 주소 -->
                                <p class="form-title mt-20"><span>주소</span></p>
                                <div class="form-line form-button user-address">
                                    <input type="text" class="form-basic" placeholder="우편번호" disabled />
                                    <button class="btn btn-black">우편번호 찾기</button>
                                    <span class="feedback" style="display: none;"></span>
                                </div>
                                <div class="form-line ">
                                    <input type="text" placeholder="기본주소" class="form-basic">
                                </div>
                                <div class="form-line ">
                                    <input type="text" placeholder="상세주소" class="form-basic">
                                </div>
                                <p class="info-dot">3층 이상 상가 또는 사업장이 아닌 가정집일 경우 일반 택배로 배송되오니 원활한 배송을 위해 가능한 영업장 주소를 적어주시기
                                    바랍니다.</p>

                                <p class="form-title mt-20"><span>휴대전화</span></p>
                                <div class="form-line">
                                    <input type="number" placeholder="- 없이 전화번호 숫자만 입력" class="form-basic">
                                </div>

                                <p class="form-title mt-20"><span>일반전화</span></p>
                                <div class="form-line">
                                    <input type="number" placeholder="- 없이 전화번호 숫자만 입력" class="form-basic">
                                </div>

                                <p class="form-title  mt-20"><span>요청사항</span></p>
                                <div class="form-line">
                                    <select class="select-basic">
                                        <option value="null">최근 배송 요청사항 선택</option>
                                    </select>
                                </div>

                                <div class="form-line">
                                    <input type="text" placeholder="배송요청 사항 입력" class="form-basic">
                                </div>

                            </div>

                        </div>

                        <!-- 쿠폰 적용 -->
                        <div class="form-area">
                            <h2 class="fold-title" @click="foldTarget['foldTarget2'] = !foldTarget['foldTarget2']"
                                :class="{ closed: foldTarget['foldTarget2'] }">쿠폰 적용
                                <span class="toggle-ico">
                                    <img src="~/assets/images/common/arrow/ico_arr_red_up.png" alt="열기/닫기 화살표">
                                </span>
                            </h2>
                            <ul class="apply-coupon fold-area" v-if="foldTarget['foldTarget2']">
                                <li>
                                    <span class="th">상품쿠폰</span>
                                    <span class="td">
                                        <span class="coupon-price">9,999,999원</span>
                                        <button type="button" class="btn btn-coupon">쿠폰선택</button>
                                    </span>
                                </li>
                                <li>
                                    <span class="th">장바구니 쿠폰</span>
                                    <span class="td">
                                        <span class="coupon-price">9,999,999원</span>
                                        <button type="button" class="btn btn-coupon">쿠폰선택</button>
                                    </span>
                                </li>
                                <li>
                                    <span class="th">배송비 쿠폰</span>
                                    <span class="td">
                                        <span class="coupon-price">9,999,999원</span>
                                        <button type="button" class="btn btn-coupon">쿠폰선택</button>
                                    </span>
                                </li>
                            </ul>

                        </div>


                        <!-- 적립금 적용 -->
                        <div class="form-area">
                            <h2 class="fold-title" @click="foldTarget['foldTarget3'] = !foldTarget['foldTarget3']"
                                :class="{ closed: foldTarget['foldTarget3'] }">적립금 적용
                                <span class="toggle-ico">
                                    <img src="~/assets/images/common/arrow/ico_arr_red_up.png" alt="열기/닫기 화살표">
                                </span>
                            </h2>

                            <div class="apply-point fold-area" v-if="foldTarget['foldTarget3']">
                                <div class="col">
                                    <span>
                                        <span class="th">보유 적립금</span>
                                        <span class="mypoint">9,999</span>
                                    </span>
                                    <span class="text-blue">적립예정 9,999원</span>
                                </div>

                                <div class="form-button">
                                    <input type="number" class="form-basic" placeholder="0" />
                                    <button class="btn btn-black">사용</button>
                                </div>
                                <div class="use-all">
                                    <button class="btn-use-all">보유 적립금 모두 사용</button>
                                </div>
                                <p>·  적립금은 상품금액의 최대 50%까지 사용 가능합니다</p>
                            </div>

                        </div>

                        <!-- 간편결제 -->
                        <div class="form-area payment-area">
                            <h2 class="fold-title" @click="foldTarget['foldTarget4'] = !foldTarget['foldTarget4']"
                                :class="{ closed: foldTarget['foldTarget4'] }">
                                간편결제
                                <span class="toggle-ico">
                                    <img src="~/assets/images/common/arrow/ico_arr_red_up.png" alt="열기/닫기 화살표">
                                </span>
                            </h2>

                            <div class="fold-area" v-if="foldTarget['foldTarget4']">
                                <p>간편결제 카드 등록은 농협 라이블리 결제전용카드만 등록 가능합니다.</p>

                                <ul class="payway-card-list">
                                    <li class="active" @click="alert('test')">
                                        <div class="card-img">
                                            <img src="~/static/images/order/card_sample.png">
                                        </div>
                                        <span class="text"><span class="card-name">KB국민 nori 체크카드(RF)</span>(1541)</span>
                                    </li>
                                    <li class="active">
                                        <div class="card-img vertical"><!-- 세로형 이미지의 경우 vertical class 추가 -->
                                            <img src="~/static/images/order/card_sample2.png">
                                        </div>
                                        <span class="text"><span class="card-name">KB국민 nori 체크카드(RF)</span>(1541)</span>
                                    </li>
                                    <!-- card loading -->
                                    <li class="loading-card">
                                        <div class="card-img">
                                            <img src="~/static/images/order/no_card.png">
                                            <span class="offset-text">카드 이미지 자동<br>불러와짐</span>
                                        </div>
                                        <span class="text"><span class="card-name">KB국민 nori 체크카드(RF)</span>(1541)</span>
                                    </li>
                                    <!-- card loading -->
                                    <li class="loading-card">
                                        <div class="card-img">
                                            <img src="~/static/images/order/no_card.png">
                                        </div>
                                        <span class="text"><span class="card-name">KB국민 nori 체크카드(RF)</span>(1541)</span>
                                    </li>
                                    <li class="add-card">
                                        <div class="card-img">
                                            <img src="~/static/images/order/no_card_light.png">
                                        </div>
                                        <div class="inner">
                                            <span class="add-text">결제 수단 등록하기</span>
                                            <span class="text">
                                                <span class="text-red">
                                                    NH전용카드/계좌를<br>
                                                    등록해주세요.
                                                </span>
                                            </span>
                                        </div>
                                    </li>
                                    <li class="add-account">
                                        <div class="card-img">
                                            <img src="~/static/images/order/no_card_light.png">
                                        </div>
                                        <div class="inner">
                                            <span class="add-text">계좌 등록하기</span>
                                            <span class="text">
                                                빠르고 간편한 결제를 위해
                                                <span class="text-red">계좌를 등록해주세요.</span>
                                            </span>
                                        </div>
                                    </li>
                                </ul>

                                <div class="payment-option p-20">
                                    <h3>신용카드 할부</h3>

                                    <h4 class="padding-top10 padding-bottom10">할부개월</h4>

                                    <select class="select-basic">
                                        <option value="null">일시불</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>

                                    <h4>카드사 포인트 사용</h4>
                                    <div class="radio-wrap">
                                        <label>
                                            <input type="radio" name="cardpoint-input">
                                            <span>사용함</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="cardpoint-input" checked>
                                            <span>사용안함</span>
                                        </label>
                                    </div>

                                </div>

                                <div class="save-payment">
                                    <label class="check-wrap"><input type="checkbox" />
                                        <span>결제수단 다음에도 사용</span>
                                    </label>
                                </div>

                            </div>

                        </div>

                        <!-- 간편결제 신용카드 등록 시 화면 -->
                        <div class="payment-area">
                            <h2 class="fold-title" @click="foldTarget['foldTarget5'] = !foldTarget['foldTarget5']"
                                :class="{ closed: foldTarget['foldTarget5'] }">
                                간편결제
                                <span class="toggle-ico">
                                    <img src="~/assets/images/common/arrow/ico_arr_red_up.png" alt="열기/닫기 화살표">
                                </span>
                            </h2>

                            <div class="fold-area" v-if="foldTarget['foldTarget5']">
                                <p>간편결제 카드 등록은 농협 라이블리 결제전용카드만 등록 가능합니다.</p>

                                <ul class="payway-card-list">
                                    <li @click="paymentSelect" :class="{ active: isActive }">
                                        <div class="card-img">
                                            <img src="~/static/images/order/card_sample.png">
                                        </div>
                                        <span class="text"><span class="card-name">KB국민 nori 체크카드(RF)</span>(1541)</span>
                                    </li>
                                    <li>
                                        <div class="card-img vertical"><!-- 세로형 이미지의 경우 vertical class 추가 -->
                                            <img src="~/static/images/order/card_sample2.png">
                                        </div>
                                        <span class="text"><span class="card-name">KB국민 nori 체크카드(RF)</span>(1541)</span>
                                    </li>
                                    <li class="add-card" @click="alert('test')">
                                        <div class="card-img">
                                            <img src="~/static/images/order/no_card_light.png">
                                        </div>
                                        <div class="inner">
                                            <span class="add-text">결제 수단 등록하기</span>
                                            <span class="text">
                                                <span class="text-red">
                                                    NH전용카드/계좌를<br>
                                                    등록해주세요.
                                                </span>
                                            </span>
                                        </div>
                                    </li>
                                </ul>

                                <div class="radio-wrap"><!-- v-show="isActive" -->
                                    <label>
                                        <input type="radio" name="payment-input1" v-model="paymentParam" value="null"
                                            checked>
                                        <span>신청안함</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="payment-input1" v-model="paymentParam" value="tax">
                                        <span>세금계산서</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="payment-input1" v-model="paymentParam" value="cash">
                                        <span>현금영수증</span>
                                    </label>
                                </div>
                                <div class="payment-option">
                                    <!-- 현금영수증 -->
                                    <div class="input-area" v-show="paymentParam == 'cash'">
                                        <div class="radio-wrap">
                                            <label>
                                                <input type="radio" name="payment-input1" v-model="cashParam" value="cash">
                                                <span>현금영수증</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="payment-input1" v-model="cashParam" value="null">
                                                <span>신청안함</span>
                                            </label>
                                        </div>

                                        <div class="radio-wrap" v-show="cashParam == 'cash'">
                                            <label>
                                                <input type="radio" name="payment-input1" v-model="taxParam"
                                                    value="business">
                                                <span>사업자</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="payment-input1" v-model="taxParam"
                                                    value="individual">
                                                <span>개인</span>
                                            </label>
                                        </div>

                                        <div class="form-area" v-show="taxParam == 'business'">
                                            <p class="form-title accent"><span>사업자번호</span></p>
                                            <div class="form-line ">
                                                <input type="number" class="form-basic" placeholder="사업자번호 입력">
                                            </div>
                                        </div>

                                        <div class="form-area" v-show="taxParam == 'individual'">
                                            <p class="form-title accent"><span>일반전화</span></p>
                                            <div class="form-line">
                                                <input type="number" placeholder="- 없이 전화번호 숫자만 입력" class="form-basic">
                                            </div>
                                        </div>

                                    </div>

                                    <!-- 세금계산서 -->
                                    <div class="input-area address" v-show="paymentParam == 'tax'">
                                        <h3>세금계산서</h3>
                                        <div class="radio-wrap">
                                            <label>
                                                <input type="radio" name="payment-input1" v-model="taxParam" value="tax">
                                                <span>세금계산서 신청</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="payment-input1" v-model="taxParam" value="null">
                                                <span>신청안함</span>
                                            </label>
                                        </div>

                                        <div v-show="taxParam == 'tax'">
                                            <ul class="dot-list">
                                                <li>세금 계산서 발행 신청을 위해 아래 모든 입력사항을 빠짐없이 입력하세요</li>
                                                <li>신청양식 작성 후 사업자등록증 사본을 카카오톡 채널(@농협 라이블리 도매몰)로 보내주세요</li>
                                                <li>신청하신 사업자정보로 익월 초 발행됩니다</li>
                                                <li>세금계산서 신청 정보를 수정하시고 싶을 경우 마이페이지에서 변경하실 수 있습니다</li>
                                            </ul>

                                            <p class="form-title accent"><span>사업자번호</span></p>
                                            <div class="form-line ">
                                                <input type="number" class="form-basic" placeholder="사업자번호 입력">
                                            </div>

                                            <p class="form-title accent"><span>대표자명</span></p>
                                            <div class="form-line ">
                                                <input type="text" class="form-basic" placeholder="대표자명 입력">
                                            </div>

                                            <p class="form-title accent"><span>상호명</span></p>
                                            <div class="form-line ">
                                                <input type="text" class="form-basic" placeholder="상호명 입력">
                                            </div>

                                            <!-- 주소 -->
                                            <div class="form-line form-button user-address">
                                                <input type="text" class="form-basic" placeholder="우편번호" disabled />
                                                <button class="btn btn-black">우편번호 찾기</button>
                                                <span class="feedback" style="display: none;"></span>
                                            </div>
                                            <div class="form-line ">
                                                <input type="text" placeholder="기본주소" class="form-basic">
                                            </div>
                                            <div class="form-line">
                                                <input type="text" placeholder="상세주소" class="form-basic">
                                            </div>
                                            <!-- <p class="dot-text">3층 이상 상가 또는 사업장이 아닌 가정집일 경우 일반 택배로 배송되오니 원활한 배송을 위해 가능한 영업장 주소를 적어주시기 바랍니다.</p> -->

                                            <p class="form-title accent"><span>업태/종목</span></p>
                                            <div class="form-line ">
                                                <input type="text" class="form-basic half" placeholder="업태">
                                                <input type="text" class="form-basic half" placeholder="종목">
                                            </div>

                                            <p class="form-title accent"><span>일반전화</span></p>
                                            <div class="form-line">
                                                <input type="number" placeholder="- 없이 전화번호 숫자만 입력" class="form-basic">
                                            </div>

                                            <p class="form-title accent"><span>이메일</span></p>
                                            <div class="form-line">
                                                <input type="email" placeholder="example@company.com" class="form-basic">
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <!-- <div class="save-payment">
                                    <label class="check-wrap"><input type="checkbox" /></label>
                                    결제수단 다음에도 사용
                                </div> -->

                            </div>

                        </div>

                        <!-- 일반결제 -->
                        <div class="payment-area">
                            <h2 class="fold-title" @click="foldTarget['foldTarget6'] = !foldTarget['foldTarget6']"
                                :class="{ closed: foldTarget['foldTarget6'] }">
                                일반결제
                                <span class="toggle-ico">
                                    <img src="~/assets/images/common/arrow/ico_arr_red_up.png" alt="열기/닫기 화살표">
                                </span>
                            </h2>

                            <div class="fold-area" v-if="foldTarget['foldTarget6']">
                                <div class="btn-area">
                                    <button type="button" class="btn btn-nhcard">신용카드</button> <!-- active class 추기시 활성화 -->
                                    <button type="button" class="btn btn-default active">무통장입금(가상계좌)</button>
                                </div>


                                <!-- 에스크로 -->
                                <ul class="escrow-area table">
                                    <li>
                                        <div class="th"><span>에스크로</span></div>
                                        <div class="td">
                                            <label class="check-wrap"><input type="checkbox"> 에스크로(구매안전) 서비스를 적용합니다.</label>
                                            <span class="dot-text">에스크로 선택 시 이메일 주소로 구매결정 요청 메일이 발송되며, 적립금 지급이 지연될 수
                                                있습니다.</span>
                                            <span class="dot-text">소액 결제일 경우 PG사 정책에 따라 결제 금액 제한이 있을 수 있습니다.</span>
                                        </div>
                                    </li>
                                </ul>


                                <div class="radio-wrap">
                                    <label>
                                        <input type="radio" name="payment-input2" v-model="paymentParam" value="null"
                                            checked>
                                        <span>신청안함</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="payment-input2" v-model="paymentParam" value="tax">
                                        <span>세금계산서</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="payment-input2" v-model="paymentParam" value="cash">
                                        <span>현금영수증</span>
                                    </label>
                                </div>

                                <div class="payment-option">
                                    <!-- 현금영수증 -->
                                    <div class="input-area" v-show="paymentParam == 'cash'">
                                        <h3>현금영수증</h3>
                                        <div class="radio-wrap">
                                            <label>
                                                <input type="radio" name="payment-input1" checked="checked">
                                                <span>사업자</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="payment-input1">
                                                <span>개인</span>
                                            </label>
                                        </div>

                                        <div class="form-area">
                                            <p class="form-title accent"><span>사업자번호</span></p>
                                            <div class="form-line ">
                                                <input type="number" class="form-basic" placeholder="사업자번호 입력">
                                            </div>
                                        </div>

                                        <div class="radio-wrap mt-70">
                                            <label>
                                                <input type="radio" name="payment-input2" checked="checked">
                                                <span>사업자</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="payment-input2">
                                                <span>개인</span>
                                            </label>
                                        </div>

                                        <div class="form-area">
                                            <p class="form-title accent"><span>휴대전화</span></p>
                                            <div class="form-line">
                                                <input type="number" placeholder="- 없이 전화번호 숫자만 입력" class="form-basic">
                                            </div>
                                        </div>

                                    </div>

                                    <!-- 세금계산서 -->
                                    <div class="input-area address" v-show="paymentParam == 'tax'">
                                        <h3>세금계산서</h3>
                                        <div class="radio-wrap">
                                            <label>
                                                <input type="radio" name="payment-input1">
                                                <span>세금계산서 신청</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="payment-input1">
                                                <span>신청안함</span>
                                            </label>
                                        </div>

                                        <div>
                                            <ul class="dot-list">
                                                <li>세금 계산서 발행 신청을 위해 아래 모든 입력사항을 빠짐없이 입력하세요</li>
                                                <li>신청양식 작성 후 사업자등록증 사본을 카카오톡 채널(@농협 라이블리 도매몰)로 보내주세요</li>
                                                <li>신청하신 사업자정보로 익월 초 발행됩니다</li>
                                                <li>세금계산서 신청 정보를 수정하시고 싶을 경우 마이페이지에서 변경하실 수 있습니다</li>
                                            </ul>

                                            <p class="form-title accent mt-40"><span>사업자번호</span></p>
                                            <div class="form-line ">
                                                <input type="number" class="form-basic" placeholder="사업자번호 입력">
                                            </div>

                                            <p class="form-title accent mt-40"><span>대표자명</span></p>
                                            <div class="form-line ">
                                                <input type="text" class="form-basic" placeholder="대표자명 입력">
                                            </div>

                                            <p class="form-title accent mt-40"><span>상호명</span></p>
                                            <div class="form-line ">
                                                <input type="text" class="form-basic" placeholder="상호명 입력">
                                            </div>

                                            <!-- 주소 -->
                                            <p class="form-title accent mt-40"><span>주소</span></p>
                                            <div class="form-line form-button user-address">
                                                <input type="text" class="form-basic" placeholder="우편번호" />
                                                <button class="btn btn-black">우편번호 찾기</button>
                                                <span class="feedback" style="display: none;"></span>
                                            </div>
                                            <div class="form-line ">
                                                <input type="text" placeholder="기본주소" class="form-basic">
                                            </div>
                                            <div class="form-line">
                                                <input type="text" placeholder="상세주소" class="form-basic">
                                            </div>
                                            <!-- <p class="dot-text">3층 이상 상가 또는 사업장이 아닌 가정집일 경우 일반 택배로 배송되오니 원활한 배송을 위해 가능한 영업장 주소를 적어주시기 바랍니다.</p> -->

                                            <p class="form-title accent mt-40"><span>업태/종목</span></p>
                                            <div class="form-line ">
                                                <input type="text" class="form-basic half" placeholder="업태">
                                                <input type="text" class="form-basic half" placeholder="종목">
                                            </div>

                                            <p class="form-title accent mt-40"><span>일반전화</span></p>
                                            <div class="form-line">
                                                <input type="number" placeholder="- 없이 전화번호 숫자만 입력" class="form-basic">
                                            </div>

                                            <p class="form-title accent mt-40"><span>이메일</span></p>
                                            <div class="form-line">
                                                <input type="email" placeholder="example@company.com" class="form-basic">
                                            </div>

                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>

                        <!-- 상품금액 20230817 추가 -->
                        <div class="order-info-box">
                            <!-- 상품금액 -->
                            <dl class="table">
                                <dt>
                                    <span class="th">상품금액</span>
                                    <span class="td">9,999,999원</span>
                                </dt>
                                <!-- 20230828 :: 삭제 
                                <dd>
                                    <span class="th">상품 즉시할인</span>
                                    <span class="td">-2,500원</span>
                                </dd>
                                <dd>
                                    <span class="th">상품 숙성할인</span>
                                    <span class="td">-2,000원</span>
                                </dd>-->
                            </dl>

                            <!-- 배송비 -->
                            <ul class="table">
                                <li>
                                    <span class="th">배송비</span>
                                    <span class="td">0원</span>
                                </li>
                            </ul>

                            <!-- 쿠폰할인 -->
                            <dl class="table">
                                <dt>
                                    <span class="th">쿠폰할인</span>
                                    <span class="td">-10,000원</span>
                                </dt>
                                <dd>
                                    <span class="th">상품 쿠폰할인</span>
                                    <span class="td">-2,500원</span>
                                </dd>
                                <dd>
                                    <span class="th">상품 숙성할인</span>
                                    <span class="td">-2,500원</span>
                                </dd>
                                <dd>
                                    <span class="th">배송비 쿠폰할인<br>(신규회원 할인 쿠폰)</span>
                                    <span class="td">0원</span>
                                </dd>
                            </dl>

                            <!-- 적립혜택 -->
                            <dl class="table no-line">
                                <dt>
                                    <span class="th">행사적립</span>
                                    <span class="td">-10,000원</span>
                                </dt>
                                <dd>
                                    <span class="th">상품별 적립금</span>
                                    <span class="td">-2,500원</span>
                                </dd>
                                <dd>
                                    <span class="th">회원 적립금</span>
                                    <span class="td">-2,500원</span>
                                </dd>
                                <dd>
                                    <span class="th">쿠폰 적립금</span>
                                    <span class="td">0원</span>
                                </dd>
                                <!-- 20230825 :: 적립예정 금액 삭제
                                <dt class="foot">
                                    <span class="th">적립예정 금액</span>
                                    <span class="td">9,999원</span>
                                </dt>-->
                            </dl>

                            <div class="foot">
                                <div class="total-ea">선택상품 : <span class="text-red">20</span>건</div>
                                <div class="total-price"><strong>999,999,999</strong>원</div>
                            </div>

                        </div>


                    </div>

                    <div class="order-info " v-scroll="handleScroll">
                        <div class="red-box pc">
                            <div class="total-ea">전체상품 : <span class="text-red">20</span>건</div>
                            <!-- 상품금액 -->
                            <dl>
                                <span class="th">상품금액</span>
                                <span class="td strong">9,999,999원</span>
                            </dl>
                            <dl>
                                <span class="th">상품금액</span>
                                <span class="td strong">9,999,999원</span>
                            </dl>
                            <dl>
                                <span class="th">상품금액</span>
                                <span class="td strong">9,999,999원</span>
                            </dl>
                            <dl>
                                <span class="th">상품금액</span>
                                <span class="td strong">9,999,999원</span>
                            </dl>
                            <dl>
                                <dt>
                                    <span class="th">상품금액</span>
                                    <span class="td strong">9,999,999원</span>
                                </dt>
                                <!--<dd>
                                    <span class="th">상품할인</span>
                                    <span class="td"> -9,999원</span>
                                </dd>-->
                            </dl>
                            <!-- 20230817 변경 -->
                            <!-- 배송비 -->
                            <dl>
                                <dt>
                                    <span class="th">배송비</span>
                                    <span class="td">0원</span>
                                </dt>
                                <!-- 230817
                                <dd>
                                    <span class="th">신선물류</span>
                                    <span class="td">0원</span>
                                </dd>
                                <dd>
                                    <span class="th">개별배송</span>
                                    <span class="td">2,500원</span>
                                </dd>
                                <dd>
                                    <span class="th">일반택배</span>
                                    <span class="td">2,500원</span>
                                </dd> -->
                            </dl>

                            <!-- 할인혜택 -->
                            <dl>
                                <dt>
                                    <span class="th">할인혜택</span>
                                    <span class="td strong">-10,000원</span>
                                </dt>
                            </dl>

                            <!-- 쿠폰혜택 -->
                            <dl>
                                <dt>
                                    <span class="th">행사적립</span>
                                    <span class="td strong">215,325원</span>
                                </dt>
                            </dl>
                            <!-- // 20230817 변경 -->

                            <!-- 20230825 :: 적립예정 금액 삭제
                            <div class="total-benenfit">
                                <span class="th">적립예정 금액</span>
                                <span class="td">9,999원</span>
                            </div> -->
                        </div>
                        <div class="info-text">
                            <ul>
                                <li>
                                    <span class="title">
                                        <label class="check-wrap">
                                            <input type="checkbox" name="checkboxSample" v-model="isChecked">
                                            <span>
                                                개인정보 제3자 제공동의
                                            </span>
                                        </label>
                                        <span class="toggle-ico" :class="{ on: isChecked }">
                                            <img src="~/assets/images/common/arrow/ico_arr_black_bottom.png"
                                                alt="열기/닫기 화살표">
                                        </span>
                                    </span>
                                    <span class="hide-text" :class="{ on: isChecked }">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolor deserunt
                                        assumenda
                                        repellendus ab repudiandae quidem, delectus aliquid voluptate molestias laborum
                                        excepturi
                                        quos, ex est, laudantium veritatis omnis. Quaerat, officia!
                                    </span>
                                </li>
                                <li class="text">
                                    <label class="check-wrap"><input type="checkbox" name="checkboxSample">
                                        <span>주문할 상품의 상품명, 상품가격, 배송정보를 확인하였으며, 구매에 동의하시겠습니까?</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <!-- <div class="mobile">
                            <div class="total-ea">선택상품 : <span class="text-red">20</span>건</div>
                            <div class="total-price">999,999,999원</div>
                        </div> -->
                        <div class="btn-area">
                            <button type="button" class="btn btn-order"><span class="number">9,999,999</span>원 결제하기</button>
                        </div>
                    </div>
                </form>
            </ValidationObserver>


            <!-- 배송지 목록 -->
            <modal-default :modalInfo="addressModal.modalInfo" :modalShow="addressModal.modalShow"
                @modalClose="addressModal.modalShow = false">
                <ul class="address-content address-list">
                    <li class="radio-wrap basic-address">
                        <label for="">
                            <input type="radio" name="address-checked" checked>
                        </label>
                        <div class="user-info">
                            <p class="address-title"><strong>배송지</strong><span>기본배송지</span></p>
                            <p>[08381] 서울특별시 구로구 디지털로27길 24 711 온라인파워스 주소 여기까지 노출</p>
                            <p>010 - 1234 - 5678</p>
                        </div>
                    </li>
                    <li class="radio-wrap">
                        <label for="">
                            <input type="radio" name="address-checked">
                        </label>
                        <div class="user-info">
                            <p class="address-title">
                                <strong>배송지2</strong>
                                <!-- <span>기본배송지</span> -->
                            </p>
                            <p>[08381] 서울특별시 구로구 디지털로27길 24 711 온라인파워스 주소 여기까지 노출</p>
                            <p>010 - 1234 - 5678</p>
                        </div>
                    </li>
                    <li class="radio-wrap">
                        <label for="">
                            <input type="radio" name="address-checked">
                        </label>
                        <div class="user-info">
                            <p class="address-title">
                                <strong>배송지2</strong>
                                <!-- <span>기본배송지</span> -->
                            </p>
                            <p>[08381] 서울특별시 구로구 디지털로27길 24 711 온라인파워스 주소 여기까지 노출</p>
                            <p>010 - 1234 - 5678</p>
                        </div>
                    </li>
                </ul>
                <button type="button" class="btn add-address-item"
                    @click="addressModal.modalShow = false, addressModal02.modalShow = true">
                    <img src="~/assets/images/common/ico_add.svg" alt="배송지 추가">&nbsp;&nbsp;배송지 추가
                </button>
                <div class="flex-center btn-wrap">
                    <button type="button" class="btn width-half btn-primary">확인</button>
                </div>
            </modal-default>

            <!-- 배송지 추가 -->
            <modal-default :modalInfo="addressModal02.modalInfo" :modalShow="addressModal02.modalShow"
                @modalClose="addressModal02.modalShow = false">
                <ValidationObserver>
                    <form>
                        <div class="address-content">
                            <!-- 배송지 -->
                            <ValidationProvider class="form-line">
                                <input type="text" placeholder="배송지" class="form-basic">
                                <span class="feedback" style="display: none;"></span>
                            </ValidationProvider>
                            <!-- 이름 입력 -->
                            <ValidationProvider class="form-line">
                                <input type="text" placeholder="이름 입력" class="form-basic">
                                <span class="feedback" style="display: none;"></span>
                            </ValidationProvider>
                            <!--  우편번호 -->
                            <ValidationProvider class="form-line form-button">
                                <input type="text" class="form-basic" placeholder="우편번호" value="" />
                                <button class="btn btn-black width-120">우편번호 찾기</button>
                                <span class="feedback" style="display: none;"></span>
                            </ValidationProvider>
                            <!-- 기본 주소 -->
                            <ValidationProvider class="form-line">
                                <input type="text" placeholder="기본 주소" class="form-basic">
                                <span class="feedback" style="display: none;"></span>
                            </ValidationProvider>
                            <!-- 상세 주소 -->
                            <ValidationProvider class="form-line">
                                <input type="text" placeholder="상세 주소" class="form-basic">
                                <span class="feedback" style="display: none;"></span>
                            </ValidationProvider>
                            <!-- 전화번호 -->
                            <ValidationProvider class="form-line">
                                <input type="text" placeholder="전화번호 '-' 없이 숫자만 입력" class="form-basic">
                                <span class="feedback" style="display: none;"></span>
                            </ValidationProvider>
                            <p class="info-dot">3층 이상 상가 또는 사업장이 아닌 가정집일 경우 일반 택배로 배송되오니 원활한 배송을 위해 가능한 영업장 주소를
                                적어주시기 바랍니다.</p>
                            <div class="check-area">
                                <label for="" class="check-wrap">
                                    <input type="checkbox" name="" id="" checked>
                                    <span>기본 배송지로 설정</span>
                                </label>
                                <label for="" class="check-wrap">
                                    <input type="checkbox" name="" id="">
                                    <span>기본 정보 가져오기</span>
                                </label>
                            </div>
                        </div>
                        <div class="flex-center btn-wrap">
                            <button type="button" class="btn width-half btn-primary">확인</button>
                        </div>
                    </form>
                </ValidationObserver>
            </modal-default>

        </section>

    </div>
</template>

<script>
export default {
    data() {
        return {
            toolTip: false,
            addressModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "배송지 목록",
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            addressModal02: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "배송지 추가",
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            showOrderInfo: true,
            showHidden: true,
            foldTarget: {
                'foldTarget1': true,
                'foldTarget2': true,
                'foldTarget3': true,
                'foldTarget4': true,
                'foldTarget5': true,
                'foldTarget6': true
            },
            toggleItem: {
                'freshItem': true,
                'freshItemList1': true,
                'freshItemList2': true,
                'eachItem': true,
                'eachItemList1': true,
                'eachItemList2': true,
            },
            showTooltip: {
                'delivery1': false,
                'delivery2': false,
                'delivery3': false,
                'delivery4': false,
                'delivery5': false,
                'discount1': false,
                'discount2': false,
                'discount3': false,
                'discount4': false,
                'discount5': false,
                'mDiscount1': false,
                'mDiscount2': false,
                'mDiscount3': false,
                'mDiscount4': false,
                'mDiscount5': false,
            },
            showCoupon: {
                'couponArea1': false,
                'couponArea2': false,
                'couponArea3': false,
                'couponArea4': false,
                'couponArea5': false,
                'mCouponArea1': false,
                'mCouponArea2': false,
                'mCouponArea3': false,
                'mCouponArea4': false,
                'mCouponArea5': false,
            },
            showOfflineCoupon: {
                'offlineCouponArea1': false,
                'offlineCouponArea2': false,
                'offlineCouponArea3': false,
                'offlineCouponArea4': false,
                'offlineCouponArea5': false,
                'mOfflineCouponArea1': false,
                'mOfflineCouponArea2': false,
                'mOfflineCouponArea3': false,
                'mOfflineCouponArea4': false,
                'mOfflineCouponArea5': false,
            },
            isActive: false,
            paymentParam: 'null',
            taxParam: 'null',
            cashParam: 'null',
            taxParam: 'individual',
            isChecked: false // checkbox상태 저장
        }
    },

    mounted() {
        document.querySelector("header").removeAttribute('id')
    },

    methods: {
        toggleArea(event) {
            //console.log('toggle init: ',event)
            let foldTarget = event.currentTarget.nextElementSibling
            //console.log('toggle foldTarget: ', foldTarget)
            foldTarget.classList.toggle('hidden')
        },

        // scroll event 20240503
        handleScroll() {
            if (document.getElementById("top-banner") == null
                || document.querySelector(".title-h1") == null
                || document.querySelector(".order-info") == null
                || document.querySelector(".item-list") == null
            ) {
                return;
            }

            let topBannerH = document.getElementById("top-banner").offsetHeight
            let titleH = document.querySelector(".title-h1").offsetHeight
            let headerH = document.querySelector("header").offsetHeight
            let footerH = document.querySelector("footer").offsetHeight
            let orderInfo = document.querySelector(".order-info")
            let windowWidth = window.outerWidth;
            let windowH = window.innerHeight
            let contentH = document.querySelector(".item-list").offsetHeight
            let offsetTopPos = contentH - orderInfo.offsetHeight + footerH
            let fixedPosInit = headerH + topBannerH + titleH

            // header fixed
            if (windowH < contentH) {
                if (fixedPosInit < window.scrollY) {
                    //document.querySelector("header").id = "header-fixed"
                    //document.querySelector(".fixed-area").classList.add("fixed")
                    orderInfo.classList.add('fixed')
                    
                    if (offsetTopPos < window.scrollY) {
                        if (windowWidth >= 768) {
                            orderInfo.classList.remove('fixed')
                            orderInfo.classList.add('offset')
                        }
                            orderInfo.style.top = (offsetTopPos / 10) + "rem"
                    } else {
                        orderInfo.classList.add('fixed')
                        orderInfo.classList.remove('offset')
                        orderInfo.style.top = null
                    }
                    
                } else {
                    //document.querySelector("header").removeAttribute('id')
                    //document.querySelector(".fixed-area").classList.remove("fixed")
                    orderInfo.classList.remove('fixed')
                }

            }

        },

        // accordion-list event
        toggleList(event) {
            let listTitle = event.currentTarget.parentNode.parentNode

            //console.log("listTitle: ", listTitle)

            if (listTitle.classList.contains('open')) {
                //console.log("listTitle open")
                listTitle.classList.remove('open')
            } else {
                listTitle.classList.add('open')
            }

        },

        paymentSelect() {
            this.isActive = !this.isActive;
        },

        alert(event) {
            alert(event)
        },

    },
}
</script>

<style>
@import url('~/assets/scss/page/order.scss');


.order-info .info-text .check-wrap>span {
    color: #000;
    font-weight: 400;
}

.order-step1 .item-list .basic-item-table tr td.weight {
    padding: 0 1rem 0 2rem
}

.order-step1 .basic-item-table td[class^="text-"] .text-big {
    font-size: 2.6rem;
}

@media (max-width:768px) {



    #header-fixed+.order-step1 {
        padding-top: 10.4rem;
    }

    #header-fixed+.order-step1 .fixed-area.fixed {
        display: none;
    }

    .order-step1 .list-wrap .item-title {
        padding: 0 1.6rem
    }

    .order-info-box>.foot {
        padding-top: 1.2rem;
        padding-bottom: 2rem;
    }

    .order-step1 .item-list .basic-item-list .item-title {
        padding-right: 1.6rem;
        padding-left: 1.6rem;
    }

    .order-step1 .item-list .list-wrap .basic-item-list>.flex {
        background-color: #fff;
    }

    .order-step1 .basic-item-list .coupon-area select {
        width: 100%;
        max-width: 100%;
    }

    .order-step1 .col>.accordion-list .list-tit+.list-wrap {
        padding-top: 0;
        padding-bottom: 0;
    }

    .tooltip-benefit-container.tooltip {
        margin: 0;
        left: unset;
        right: 0;
        transform: translateX(25%);
    }

    .item-list .sells-info {
        position: relative;
        z-index: 10;
    }
}
</style>
