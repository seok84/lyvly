<template>
    <div class="cart">
        <div class="fixed-area">
            <h1 class="title-h1">장바구니</h1>

            <section class="category-area">
                <button type="button" class="btn-select">전체선택(총 30건)</button>
                <button type="button" class="btn-del">선택삭제</button>
            </section>
        </div>

        <section class="item-list type-cart">
            <ul class="accordion-list">
                <!-- 신선 물류 전체금액: 종류별 리스트 전체 금액표현해야하므로 최대혜택가 따로 노출 할 수 없음 단 상품건별로 최대혜택가 확인가능 -->
                <li class="list">
                    <div class="list-tit fresh mb-20">
                        <div class="flex" :class="{ closed: !toggleItem['freshItem'] }">
                            <div class="col-left">
                                <label class="check-wrap"><input type="checkbox" /></label>
                                <h4 @click="toggleItem['freshItem'] = !toggleItem['freshItem']">신선물류 : 8건</h4>
                            </div>

                            <div class="col-right">
                                <span class="price" @click="toggleItem['freshItem'] = !toggleItem['freshItem']">
                                    상품 999,999,999 + 배송비 999,999원 <span class="pc">=</span><br class="mobile">
                                    <span>1,521,000원</span>
                                </span>
                                <span class="toggle-ico">
                                    <img src="~/assets/images/common/arrow/ico_arr_accordion.png" alt="열기/닫기 화살표">
                                </span>
                            </div>
                        </div>
                    </div>

                    <p class="accordion-notice fresh">
                        자체차량 냉장 직배송/CJ대한통운 냉장 직배송<br>
                        <span class="text-blue">오늘 밤 10시 전까지 결제 시 <br class="mobile">06/22(목) 출고예정

                            <span class="sells-info tooltip-wrap"><i @click="showTooltip['delivery1'] = true">?</i>
                                <article class="tooltip" v-if="showTooltip['delivery1']"
                                    @mouseleave="showTooltip['delivery1'] = false">
                                    <div class="tooltip-close" @click="showTooltip['delivery1'] = false">닫기</div>
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
                        <div class="brand-title" :class="{ closed: !toggleItem['freshItemList1'] }">
                            <div class="col-left">
                                <label class="check-wrap"><input type="checkbox" /></label>
                                <h5 @click="toggleItem['freshItemList1'] = !toggleItem['freshItemList1']">농협PB : N건</h5>
                            </div>

                            <div class="col-right">
                                <span class="price" @click="toggleItem['freshItemList1'] = !toggleItem['freshItemList1']">
                                    상품 999,999,999 + 배송비 999,999원<span>= 1,521,000원</span>
                                </span>
                                <span class="toggle-ico">
                                    <img src="~/assets/images/common/arrow/ico_arr_gray_top.png" alt="열기/닫기 화살표">
                                </span>
                            </div>
                        </div>
                        <!-- 브랜드 내 묶음상품 -->
                        <div class="box-wrap" v-if="toggleItem['freshItemList1']">





                            <!-- 최대혜택가 판매가 일반상품 -->
                            <!-- box case1 -->
                            <div class="box">
                                <!-- pc -->
                                <table class="basic-item-table" v-for="item in items">
                                    <colgroup>
                                        <col style="min-width: 3.2rem; width: 4%;">
                                        <col style="min-width: 9rem; width: 10%;">
                                        <col>
                                        <col style="width: 12%;">
                                        <col style="width: 19%;">
                                        <col style="width: 19%;">
                                    </colgroup>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td colspan="5">
                                                <button type="button" class="btn-order">바로구매</button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <!-- 체크박스 영역 -->
                                            <th rowspan="6">
                                                <label class="check-wrap">
                                                    <input type="checkbox" name="checkboxSample">
                                                </label>
                                            </th>
                                            <!-- 썸네일 영역 -->
                                            <td rowspan="6" class="thumbnail-td">
                                                <span><img class="thumbnail" :src="item.thumbnail" alt="썸네일"></span>
                                            </td>
                                            <!-- 라벨 영역 -->
                                            <td>
                                                <ul class="item-badge" v-if="item.badge != '' || null || undefined">
                                                    <li class="badge badge-rank"
                                                        v-if="rankFn && item.rank != null || '' || undefined">
                                                        <span>{{ item.badge.rank }}</span>
                                                    </li>
                                                    <li v-if="item.badge.fat != '' || null || undefined"
                                                        :class="['badge', 'badge-fat', getFatClass(item.badge.fat)]">
                                                        <span>{{ item.badge.fat }}</span>
                                                    </li>
                                                    <li v-if="item.badge.storage === 'cold'" class="badge badge-storage">
                                                        <span><img src="~/assets/images/common/items/ico_cold.svg"
                                                                alt="냉장"></span><span>냉장</span>
                                                    </li>
                                                    <li v-if="item.badge.storage === 'ice'" class="badge badge-frozen">
                                                        <span><img src="~/assets/images/common/items/ico_ice.svg"
                                                                alt="냉동"></span><span>냉동</span>
                                                    </li>
                                                    <li v-if="item.badge.antibiotic" class="badge badge-antibiotic">
                                                        <span>무항생제</span>
                                                    </li>
                                                    <li v-if="item.badge.fresh" class="badge badge-fresh"><img
                                                            src="~/assets/images/common/items/ico_fresh.png"
                                                            alt="신선물류"><span>신선물류</span></li>
                                                </ul>
                                            </td>
                                            <td></td>
                                            <td class="text-red">
                                                <span class="unit-accent"
                                                    v-if="item.price.unitAccent != '' || null || undefined">
                                                    kg당 최대 혜택가 {{ item.price.unitAccent }}↓
                                                </span>
                                            </td>
                                            <td class="text-blue">
                                                <div v-if="item.price.unitAccent != '' || null || undefined">
                                                    <span class="unit-accent">
                                                        최대 혜택가 {{ item.price.unitAccent }}↓
                                                    </span>
                                                    <span class="sells-info tooltip-wrap">
                                                        <i @click="toolTip = true">?</i>
                                                        <item-tooltip :toolTip="toolTip" />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="text-brand">{{ item.title.brand }}</td>
                                            <td></td>
                                            <td class="text-red">
                                                <strong>단가(kg당)</strong>
                                            </td>
                                            <td class="text-blue text-left">
                                                <strong>판매가</strong>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong class="text-title text-big">{{ item.title.main }}</strong>
                                            </td>
                                            <td>
                                                <strong class="text-big">{{ item.price.kg }}kg</strong>
                                            </td>
                                            <td class="text-red">
                                                <strong class="text-big">{{ item.price.discountConsumer }}</strong>
                                                <strong class="text-small">원</strong>
                                            </td>
                                            <td class="text-big">
                                                <strong class="text-price">{{ item.price.discountSells }}</strong>
                                                <strong class="text-small">원</strong>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="item-part"><span class="text-gray">{{ item.title.sub }}</span></td>
                                            <td></td>
                                            <td>
                                                <span class="text-gray text-linethrough">{{ item.price.consumer
                                                }}원(kg당)</span>
                                            </td>
                                            <td>
                                                <span class="text-gray text-linethrough">{{ item.price.sells }}원</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="item-date">
                                                <strong>가공일자</strong>
                                                <strong class="date">{{ item.processing.date }}</strong>
                                                {{ item.processing.dateDetail }}
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <ul class="item-benefits">
                                                    <li v-show="item.benefits.point" class="benefit point"><span>{{
                                                        item.benefits.point }}%적립</span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_point.png"
                                                                alt="적립혜택">
                                                        </span>
                                                    </li>
                                                    <li v-show="item.benefits.coupon" class="benefit coupon"><span>{{
                                                        item.benefits.coupon }}%할인</span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_coupon.png"
                                                                alt="즉시할인">
                                                        </span>
                                                    </li>
                                                    <li v-show="item.benefits.discount" class="benefit discount">
                                                        <span>숙성할인</span>
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_aging.png" alt="할인">
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

                                <!-- pc -->
                                <table class="basic-item-table pc">
                                    <colgroup>
                                        <col style="min-width: 3.2rem; width: 4%;">
                                        <col style="min-width: 9rem; width: 10%;">
                                        <col>
                                        <col style="width: 12%;">
                                        <col style="width: 19%;">
                                        <col style="width: 19%;">
                                    </colgroup>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td colspan="5">
                                                <button type="button" class="btn-order">바로구매</button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <!-- 체크박스 영역 -->
                                            <th rowspan="6">
                                                <label class="check-wrap">
                                                    <input type="checkbox" name="checkboxSample">
                                                </label>
                                            </th>
                                            <!-- 썸네일 영역 -->
                                            <td rowspan="6" class="thumbnail-td">
                                                <span><img class="thumbnail" src="~/static/images/img_item_sample_01.png"
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
                                            </td>
                                            <td></td>
                                            <td class="text-red">
                                            </td>
                                            <td class="text-blue">
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="text-brand">브랜드명</td>
                                            <td></td>
                                            <td class="text-red">
                                                <strong>단가(kg당)</strong>
                                            </td>
                                            <td class="text-blue">
                                                <strong>판매가</strong>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                            </td>
                                            <td>
                                                <strong class="text-big">5.4kg</strong>
                                            </td>
                                            <td class="text-red">
                                                <strong class="text-price">9,999,999</strong>
                                                <strong class="text-small">원</strong>
                                            </td>
                                            <td class="text-big">
                                                <strong class="text-price">9,999,999</strong>
                                                <strong class="text-small">원</strong>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="item-part"><span class="text-gray">윗등심 + 아랫등심 반두분</span></td>
                                            <td></td>
                                            <td>
                                            </td>
                                            <td>
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
                                                            <img src="~/assets/images/common/items/ico_aging.png" alt="할인">
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
                                    <label class="check-wrap">
                                        <input type="checkbox" name="checkboxSample">
                                    </label>

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
                                                <img src="~/assets/images/common/items/ico_fresh.png" alt="신선물류">
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
                                                <span class="unit-accent">kg당 최대 혜택가 10%↓</span>
                                                <span class="sells-info tooltip-wrap">
                                                    <i @click="toolTip = true">?</i>
                                                    <item-tooltip :toolTip="toolTip" />
                                                </span>
                                                <div class="price">
                                                    <strong class="text-big">47,700</strong><strong
                                                        class="text-small">원</strong>
                                                </div>
                                                <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                            </div>
                                            <div class="col text-blue">
                                                <span class="unit-accent">최대 혜택가 10%↓</span>

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
                                                <img src="~/assets/images/common/items/ico_point.png" alt="적립혜택">
                                            </span>
                                        </li>
                                        <li class="benefit coupon"><span>할인혜택</span>
                                            <span>
                                                <img src="~/assets/images/common/items/ico_coupon.png" alt="즉시할인">
                                            </span>
                                        </li>
                                        <li class="benefit discount"><span>숙성할인</span>
                                            <span>
                                                <img src="~/assets/images/common/items/ico_aging.png" alt="숙성할인">
                                            </span>
                                        </li>
                                    </ul>

                                    <div class="btn-area">
                                        <button type="button" class="btn-order">바로구매</button>
                                    </div>

                                </div>

                                <!-- mobile -->
                                <div class="basic-item-list mobile">
                                    <label class="check-wrap">
                                        <input type="checkbox" name="checkboxSample">
                                    </label>

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
                                                <img src="~/assets/images/common/items/ico_fresh.png" alt="신선물류">
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
                                                <span class="unit-accent">kg당 최대 혜택가 10%↓</span>
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
                                                <img src="~/assets/images/common/items/ico_point.png" alt="적립혜택">
                                            </span>
                                        </li>
                                        <li class="benefit coupon"><span>할인혜택</span>
                                            <span>
                                                <img src="~/assets/images/common/items/ico_coupon.png" alt="즉시할인">
                                            </span>
                                        </li>
                                        <li class="benefit discount"><span>숙성할인</span>
                                            <span>
                                                <img src="~/assets/images/common/items/ico_aging.png" alt="숙성할인">
                                            </span>
                                        </li>
                                    </ul>

                                    <div class="btn-area">
                                        <button type="button" class="btn-order">바로구매</button>
                                    </div>

                                </div>

                                <p class="shipping">
                                    배송정보 : 무료배송 (자체차량 냉장 직배송)
                                </p>

                            </div>

                            <!-- box case2 -->
                            <div class="box">
                                <!-- pc -->
                                <table class="basic-item-table pc">
                                    <colgroup>
                                        <col style="min-width: 3.2rem; width: 4%;">
                                        <col style="min-width: 9rem; width: 10%;">
                                        <col>
                                        <col style="width: 12%;">
                                        <col style="width: 19%;">
                                        <col style="width: 19%;">
                                    </colgroup>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td colspan="5">
                                                <div class="flex">
                                                    <div class="item-order">
                                                        <div class="btn-quantity-box">
                                                            <button type="button" class="btn-minus">-</button>
                                                            <input type="number" title="수량" value="1" class="number">
                                                            <button type="button" class="btn-plus">+</button>
                                                        </div>
                                                        <button type="button" class="btn-change">변경</button>
                                                    </div>
                                                    <button type="button" class="btn-order">바로구매</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <!-- 체크박스 영역 -->
                                            <th rowspan="4">
                                                <label class="check-wrap">
                                                    <input type="checkbox" name="checkboxSample">
                                                </label>
                                            </th>
                                            <!-- 썸네일 영역 -->
                                            <td rowspan="4">
                                                <span><img class="thumbnail" src="~/static/images/img_item_sample_01.png"
                                                        alt="썸네일"></span>
                                                <span class="thumbnail-text">실제 이미지입니다</span>
                                            </td>
                                            <td class="text-brand">브랜드명</td>
                                            <td></td>
                                            <td class="text-red">
                                            </td>
                                            <td class="text-blue text-left">
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                            </td>
                                            <td>
                                                <strong class="text-big">5.4kg</strong>
                                            </td>
                                            <td class="text-red">
                                            </td>
                                            <td class="text-big">
                                                <strong class="text-price">9,999,999</strong>
                                                <strong class="text-small">원</strong>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="item-part"><span class="text-gray">윗등심 + 아랫등심 반두분</span></td>
                                            <td></td>
                                            <td>
                                            </td>
                                            <td>
                                                <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                            </td>
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
                                                            <img src="~/assets/images/common/items/ico_aging.png" alt="할인">
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

                                <table class="basic-item-table pc">
                                    <colgroup>
                                        <col style="min-width: 3.2rem; width: 4%;">
                                        <col style="min-width: 9rem; width: 10%;">
                                        <col>
                                        <col style="width: 12%;">
                                        <col style="width: 19%;">
                                        <col style="width: 19%;">
                                    </colgroup>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td colspan="5">
                                                <button type="button" class="btn-order">바로구매</button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <!-- 체크박스 영역 -->
                                            <th rowspan="6">
                                                <label class="check-wrap">
                                                    <input type="checkbox" name="checkboxSample">
                                                </label>
                                            </th>
                                            <!-- 썸네일 영역 -->
                                            <td rowspan="6" class="thumbnail-td">
                                                <span><img class="thumbnail" src="~/static/images/img_item_sample_01.png"
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
                                            <td class="text-blue">
                                                <strong>판매가</strong>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                            </td>
                                            <td>
                                                <strong class="text-big">5.4kg</strong>
                                            </td>
                                            <td class="text-red">
                                                <strong class="text-price">9,999,999</strong>
                                                <strong class="text-small">원</strong>
                                            </td>
                                            <td class="text-big">
                                                <strong class="text-price">9,999,999</strong>
                                                <strong class="text-small">원</strong>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="item-part"><span class="text-gray">윗등심 + 아랫등심 반두분</span></td>
                                            <td></td>
                                            <td>
                                            </td>
                                            <td>
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
                                                            <img src="~/assets/images/common/items/ico_aging.png" alt="할인">
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
                                    <label class="check-wrap">
                                        <input type="checkbox" name="checkboxSample">
                                    </label>

                                    <!-- 썸네일 영역 -->
                                    <div class="thumbnail-area"><img class="thumbnail"
                                            src="~/static/images/img_item_sample_01.png" alt="썸네일"></div>

                                    <p class="item-title border-none">
                                        <span class="text-brand">브랜드명</span>
                                        <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                        <span class="item-part text-gray">옵션이 노출되는 공간입니다</span>
                                    </p>

                                    <div class="item-price">
                                        <div class="price">
                                            <strong class="text-price">9,999,999</strong><strong
                                                class="text-small">원</strong>
                                        </div>
                                        <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                    </div>

                                    <ul class="item-benefits">
                                        <li class="benefit point"><span>행사할인 </span>
                                            <span>
                                                <img src="~/assets/images/common/items/ico_point.png" alt="적립혜택">
                                            </span>
                                        </li>
                                        <li class="benefit coupon"><span>할인혜택</span>
                                            <span>
                                                <img src="~/assets/images/common/items/ico_coupon.png" alt="즉시할인">
                                            </span>
                                        </li>
                                        <li class="benefit discount"><span>숙성할인</span>
                                            <span>
                                                <img src="~/assets/images/common/items/ico_aging.png" alt="숙성할인">
                                            </span>
                                        </li>
                                    </ul>

                                    <div class="item-order">
                                        <div class="btn-quantity-box">
                                            <button type="button" class="btn-minus">-</button>
                                            <input type="number" title="수량" value="1" class="number">
                                            <button type="button" class="btn-plus">+</button>
                                        </div>
                                        <button type="button" class="btn-change">변경</button>
                                    </div>

                                    <div class="btn-area">
                                        <button type="button" class="btn-order">바로구매</button>
                                    </div>

                                </div>

                                <p class="shipping">
                                    배송정보 : 무료배송 (자체차량 냉장 직배송)
                                </p>

                            </div>

                        </div>

                        <!-- 바를정육류연구소 : N건 -->
                        <div class="brand-title" :class="{ closed: !toggleItem['freshItemList2'] }">
                            <div class="col-left">
                                <label class="check-wrap"><input type="checkbox" /></label>
                                <h5 @click="toggleItem['freshItemList2'] = !toggleItem['freshItemList2']">바를정육류연구소 : N건</h5>
                            </div>

                            <div class="col-right">
                                <span class="price" @click="toggleItem['freshItemList2'] = !toggleItem['freshItemList2']">
                                    상품 999,999,999 + 배송비 999,999원 = <span>1,521,000원</span>
                                </span>
                                <span class="toggle-ico">
                                    <img src="~/assets/images/common/arrow/ico_arr_gray_top.png" alt="열기/닫기 화살표">
                                </span>
                            </div>
                        </div>

                        <p class="accordion-notice">
                            자체차량 냉장 직배송/CJ대한통운 냉장 직배송<br>
                            <span class="text-blue">오늘 밤 10시 전까지 결제 시 <br class="mobile">06/22(목) 출고예정

                                <span class="sells-info tooltip-wrap"><i @click="showTooltip['delivery2'] = true">?</i>
                                    <article class="tooltip" v-if="showTooltip['delivery2']"
                                        @mouseleave="showTooltip['delivery2'] = false">
                                        <div class="tooltip-close" @click="showTooltip['delivery2'] = false">닫기</div>
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
                            <!-- box case3 -->
                            <div class="box">
                                <!-- pc -->
                                <table class="basic-item-table pc">
                                    <colgroup>
                                        <col style="min-width: 3.2rem; width: 4%;">
                                        <col style="min-width: 9rem; width: 10%;">
                                        <col>
                                        <col style="width: 12%;">
                                        <col style="width: 19%;">
                                        <col style="width: 19%;">
                                    </colgroup>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td colspan="5">
                                                <button type="button" class="btn-order">바로구매</button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <!-- 체크박스 영역 -->
                                            <th rowspan="6">
                                                <label class="check-wrap">
                                                    <input type="checkbox" name="checkboxSample">
                                                </label>
                                            </th>
                                            <!-- 썸네일 영역 -->
                                            <td rowspan="6" class="thumbnail-td">
                                                <span><img class="thumbnail" src="~/static/images/img_item_sample_01.png"
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
                                            <td>
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
                                            <td class="item-part"><span class="text-gray">윗등심 + 아랫등심 반두분</span></td>
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
                                                            <img src="~/assets/images/common/items/ico_aging.png" alt="할인">
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

                                <table class="basic-item-table pc">
                                    <colgroup>
                                        <col style="min-width: 3.2rem; width: 4%;">
                                        <col style="min-width: 9rem; width: 10%;">
                                        <col>
                                        <col style="width: 12%;">
                                        <col style="width: 19%;">
                                        <col style="width: 19%;">
                                    </colgroup>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td colspan="5">
                                                <button type="button" class="btn-order">바로구매</button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <!-- 체크박스 영역 -->
                                            <th rowspan="6">
                                                <label class="check-wrap">
                                                    <input type="checkbox" name="checkboxSample">
                                                </label>
                                            </th>
                                            <!-- 썸네일 영역 -->
                                            <td rowspan="6" class="thumbnail-td">
                                                <span><img class="thumbnail" src="~/static/images/img_item_sample_01.png"
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
                                            </td>
                                            <td></td>
                                            <td class="text-red">
                                            </td>
                                            <td class="text-blue">
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
                                            <td>
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
                                            <td class="item-part"><span class="text-gray">윗등심 + 아랫등심 반두분</span></td>
                                            <td></td>
                                            <td>
                                            </td>
                                            <td>
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
                                                            <img src="~/assets/images/common/items/ico_aging.png" alt="할인">
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
                                    <label class="check-wrap">
                                        <input type="checkbox" name="checkboxSample">
                                    </label>

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
                                                <img src="~/assets/images/common/items/ico_fresh.png" alt="신선물류">
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
                                                <span class="unit-accent">kg당 최대 혜택가 10%↓</span>
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
                                                <div class="price">
                                                    <strong class="text-price">9,999,999</strong><strong
                                                        class="text-small">원</strong>
                                                </div>
                                                <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul class="item-benefits">
                                        <li class="point"><span>즉시할인</span>
                                            <span><img src="~/assets/images/common/items/ico_point.png" alt="적립혜택"></span>
                                        </li>
                                        <li class="coupon"><span>할인혜택</span>
                                            <span><img src="~/assets/images/common/items/ico_coupon.png" alt="즉시할인"></span>
                                        </li>
                                        <li class="benefit discount"><span>숙성할인</span>
                                            <span>
                                                <img src="~/assets/images/common/items/ico_aging.png" alt="숙성할인">
                                            </span>
                                        </li>
                                    </ul>

                                    <div class="btn-area">
                                        <button type="button" class="btn-order">바로구매</button>
                                    </div>

                                </div>

                                <p class="shipping">
                                    배송정보 : 무료배송 (CJ대한통운 냉장 직배송)
                                </p>

                            </div>

                        </div>

                    </div>
                </li>

                <!-- 개별배송 전체금액: 종류별 리스트 전체 금액표현해야하므로 최대혜택가 따로 노출 할 수 없음 단 상품건별로 최대혜택가 확인가능 -->
                <li class="list">
                    <div class="list-tit">
                        <div class="flex" :class="{ closed: toggleItem['eachItem'] }">
                            <div class="col-left">
                                <label class="check-wrap"><input type="checkbox" /></label>
                                <h4 @click="toggleItem['eachItem'] = !toggleItem['eachItem']">개별배송 : N건</h4>
                            </div>

                            <div class="col-right">
                                <span class="price" @click="toggleItem['eachItem'] = !toggleItem['eachItem']">
                                    상품 999,999,999 + 배송비 999,999원 <span class="pc">=</span><br class="mobile">
                                    <span>1,521,000원</span>
                                </span>
                                <span class="toggle-ico">
                                    <img src="~/assets/images/common/arrow/ico_arr_accordion.png" alt="열기/닫기 화살표">
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="list-wrap" v-if="toggleItem['eachItem']">
                        <!-- 농협PB : N건 -->
                        <div class="brand-title" :class="{ closed: toggleItem['eachItemList1'] }">
                            <div class="col-left">
                                <label class="check-wrap"><input type="checkbox" /></label>
                                <h5 @click="toggleItem['eachItemList1'] = !toggleItem['eachItemList1']">농협PB : N건</h5>
                            </div>

                            <div class="col-right">
                                <span class="price" @click="toggleItem['eachItemList1'] = !toggleItem['eachItemList1']">
                                    상품 999,999,999 + 배송비 999,999원 = <span>1,521,000원</span>
                                </span>
                                <span class="toggle-ico">
                                    <img src="~/assets/images/common/arrow/ico_arr_gray_top.png" alt="열기/닫기 화살표">
                                </span>
                            </div>
                        </div>

                        <p class="accordion-notice">
                            자체차량 냉장 직배송/CJ대한통운 냉장 직배송<br>
                            <span class="text-blue">오늘 밤 10시 전까지 결제 시 <br class="mobile">06/22(목) 출고예정

                                <span class="sells-info tooltip-wrap"><i @click="showTooltip['delivery1'] = true">?</i>
                                    <article class="tooltip" v-if="showTooltip['delivery1']"
                                        @mouseleave="showTooltip['delivery1'] = false">
                                        <div class="tooltip-close" @click="showTooltip['delivery1'] = false">닫기</div>
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
                            <!-- box case4 -->
                            <div class="box">
                                <!-- pc -->
                                <table class="basic-item-table pc">
                                    <colgroup>
                                        <col style="min-width: 3.2rem; width: 4%;">
                                        <col style="min-width: 9rem; width: 10%;">
                                        <col>
                                        <col style="width: 12%;">
                                        <col style="width: 19%;">
                                        <col style="width: 19%;">
                                    </colgroup>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td colspan="5">
                                                <div class="flex">
                                                    <div class="item-order">
                                                        <div class="btn-quantity-box">
                                                            <button type="button" class="btn-minus">-</button>
                                                            <input type="number" title="수량" value="1" class="number">
                                                            <button type="button" class="btn-plus">+</button>
                                                        </div>
                                                        <button type="button" class="btn-change">변경</button>
                                                    </div>
                                                    <button type="button" class="btn-order">바로구매</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <!-- 체크박스 영역 -->
                                            <th rowspan="4">
                                                <label class="check-wrap">
                                                    <input type="checkbox" name="checkboxSample">
                                                </label>
                                            </th>
                                            <!-- 썸네일 영역 -->
                                            <td rowspan="4">
                                                <span><img class="thumbnail" src="~/static/images/img_item_sample_01.png"
                                                        alt="썸네일"></span>
                                                <span class="thumbnail-text">실제 이미지입니다</span>
                                            </td>
                                            <td class="text-brand">브랜드명</td>
                                            <td></td>
                                            <td class="text-red">
                                            </td>
                                            <td class="text-blue text-left">
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                            </td>
                                            <td>
                                                <strong class="text-big">5.4kg</strong>
                                            </td>
                                            <td class="text-red">
                                            </td>
                                            <td class="text-big">
                                                <strong class="text-price">9,999,999</strong>
                                                <strong class="text-small">원</strong>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="item-part"><span class="text-gray">윗등심 + 아랫등심 반두분</span></td>
                                            <td></td>
                                            <td>
                                            </td>
                                            <td>
                                                <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                            </td>
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
                                                            <img src="~/assets/images/common/items/ico_aging.png" alt="할인">
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
                                    <label class="check-wrap">
                                        <input type="checkbox" name="checkboxSample">
                                    </label>

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
                                                <img src="~/assets/images/common/items/ico_fresh.png" alt="신선물류">
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
                                                <span class="unit-accent">kg당 최대 혜택가 10%↓</span>
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
                                                <img src="~/assets/images/common/items/ico_point.png" alt="적립혜택">
                                            </span>
                                        </li>
                                        <li class="benefit coupon"><span>할인혜택</span>
                                            <span>
                                                <img src="~/assets/images/common/items/ico_coupon.png" alt="즉시할인">
                                            </span>
                                        </li>
                                        <li class="benefit discount"><span>숙성할인</span>
                                            <span>
                                                <img src="~/assets/images/common/items/ico_aging.png" alt="숙성할인">
                                            </span>
                                        </li>
                                    </ul>

                                    <div class="btn-area">
                                        <button type="button" class="btn-order">바로구매</button>
                                    </div>

                                </div>

                                <p class="shipping">
                                    배송정보 : 3,000원 (택배사명)
                                </p>

                            </div>

                            <!-- box case5 -->
                            <div class="box">
                                <!-- pc -->
                                <table class="basic-item-table pc">
                                    <colgroup>
                                        <col style="min-width: 3.2rem; width: 4%;">
                                        <col style="min-width: 9rem; width: 10%;">
                                        <col>
                                        <col style="width: 12%;">
                                        <col style="width: 19%;">
                                        <col style="width: 19%;">
                                    </colgroup>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td colspan="5">
                                                <div class="flex">
                                                    <div class="item-order">
                                                        <div class="btn-quantity-box">
                                                            <button type="button" class="btn-minus">-</button>
                                                            <input type="number" title="수량" value="1" class="number">
                                                            <button type="button" class="btn-plus">+</button>
                                                        </div>
                                                        <button type="button" class="btn-change">변경</button>
                                                    </div>
                                                    <button type="button" class="btn-order">바로구매</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <!-- 체크박스 영역 -->
                                            <th rowspan="4">
                                                <label class="check-wrap">
                                                    <input type="checkbox" name="checkboxSample">
                                                </label>
                                            </th>
                                            <!-- 썸네일 영역 -->
                                            <td rowspan="4">
                                                <span><img class="thumbnail" src="~/static/images/img_item_sample_01.png"
                                                        alt="썸네일"></span>
                                                <span class="thumbnail-text">실제 이미지입니다</span>
                                            </td>
                                            <td class="text-brand">브랜드명</td>
                                            <td></td>
                                            <td class="text-red">
                                            </td>
                                            <td class="text-blue text-left">
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                            </td>
                                            <td>
                                                <strong class="text-big">5.4kg</strong>
                                            </td>
                                            <td class="text-red">
                                            </td>
                                            <td class="text-big">
                                                <strong class="text-price">9,999,999</strong>
                                                <strong class="text-small">원</strong>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="item-part"><span class="text-gray">윗등심 + 아랫등심 반두분</span></td>
                                            <td></td>
                                            <td>
                                            </td>
                                            <td>
                                                <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                            </td>
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
                                                            <img src="~/assets/images/common/items/ico_aging.png" alt="할인">
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

                                <table class="basic-item-table pc">
                                    <colgroup>
                                        <col style="min-width: 3.2rem; width: 4%;">
                                        <col style="min-width: 9rem; width: 10%;">
                                        <col>
                                        <col style="width: 12%;">
                                        <col style="width: 19%;">
                                        <col style="width: 19%;">
                                    </colgroup>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td colspan="5">
                                                <button type="button" class="btn-order">바로구매</button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <!-- 체크박스 영역 -->
                                            <th rowspan="6">
                                                <label class="check-wrap">
                                                    <input type="checkbox" name="checkboxSample">
                                                </label>
                                            </th>
                                            <!-- 썸네일 영역 -->
                                            <td rowspan="6" class="thumbnail-td">
                                                <span><img class="thumbnail" src="~/static/images/img_item_sample_01.png"
                                                        alt="썸네일"></span>
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
                                            </td>
                                            <td></td>
                                            <td class="text-red">
                                            </td>
                                            <td class="text-blue">
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
                                            <td>
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
                                            <td class="item-part"><span class="text-gray">윗등심 + 아랫등심 반두분</span></td>
                                            <td></td>
                                            <td>
                                            </td>
                                            <td>
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
                                                            <img src="~/assets/images/common/items/ico_aging.png" alt="할인">
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
                                    <label class="check-wrap">
                                        <input type="checkbox" name="checkboxSample">
                                    </label>

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
                                                <img src="~/assets/images/common/items/ico_fresh.png" alt="신선물류">
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
                                                <span class="unit-accent">kg당 최대 혜택가 10%↓</span>
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
                                                <img src="~/assets/images/common/items/ico_point.png" alt="적립혜택">
                                            </span>
                                        </li>
                                        <li class="benefit coupon"><span>할인혜택</span>
                                            <span>
                                                <img src="~/assets/images/common/items/ico_coupon.png" alt="즉시할인">
                                            </span>
                                        </li>
                                        <li class="benefit discount"><span>숙성할인</span>
                                            <span>
                                                <img src="~/assets/images/common/items/ico_aging.png" alt="숙성할인">
                                            </span>
                                        </li>
                                    </ul>

                                    <div class="btn-area">
                                        <button type="button" class="btn-order">바로구매</button>
                                    </div>

                                </div>

                                <p class="shipping">
                                    배송정보 : 3,000원 (택배사명)
                                </p>

                            </div>

                        </div>

                        <!-- 바를정육류연구소 : N건 -->
                        <div class="brand-title" :class="{ closed: toggleItem['eachItemList2'] }">
                            <div class="col-left">
                                <label class="check-wrap"><input type="checkbox" /></label>
                                <h5 @click="toggleItem['eachItemList2'] = !toggleItem['eachItemList2']">바를정육류연구소 : N건</h5>
                            </div>

                            <div class="col-right">
                                <span class="price" @click="toggleItem['eachItemList2'] = !toggleItem['eachItemList2']">
                                    상품 999,999,999 + 배송비 999,999원 = <span>1,521,000원</span>
                                </span>
                                <span class="toggle-ico">
                                    <img src="~/assets/images/common/arrow/ico_arr_gray_top.png" alt="열기/닫기 화살표">
                                </span>
                            </div>
                        </div>

                        <p class="accordion-notice">
                            자체차량 냉장 직배송/CJ대한통운 냉장 직배송<br>
                            <span class="text-blue">오늘 밤 10시 전까지 결제 시 <br class="mobile">06/22(목) 출고예정

                                <span class="sells-info tooltip-wrap"><i @click="showTooltip['delivery4'] = true">?</i>
                                    <article class="tooltip" v-if="showTooltip['delivery4']"
                                        @mouseleave="showTooltip['delivery4'] = false">
                                        <div class="tooltip-close" @click="showTooltip['delivery4'] = false"><img
                                                src="~/assets/images/common/ico_close_black.png" alt=""></div>
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

                        <div class="box-wrap" v-if="toggleItem['eachItemList2']">
                            <!-- box case6 -->
                            <div class="box">
                                <!-- pc -->
                                <table class="basic-item-table pc">
                                    <colgroup>
                                        <col style="min-width: 3.2rem; width: 4%;">
                                        <col style="min-width: 9rem; width: 10%;">
                                        <col>
                                        <col style="width: 12%;">
                                        <col style="width: 19%;">
                                        <col style="width: 19%;">
                                    </colgroup>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td colspan="5">
                                                <div class="flex">
                                                    <div class="item-order">
                                                        <div class="btn-quantity-box">
                                                            <button type="button" class="btn-minus">-</button>
                                                            <input type="number" title="수량" value="1" class="number">
                                                            <button type="button" class="btn-plus">+</button>
                                                        </div>
                                                        <button type="button" class="btn-change">변경</button>
                                                    </div>
                                                    <button type="button" class="btn-order">바로구매</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <!-- 체크박스 영역 -->
                                            <th rowspan="4">
                                                <label class="check-wrap">
                                                    <input type="checkbox" name="checkboxSample">
                                                </label>
                                            </th>
                                            <!-- 썸네일 영역 -->
                                            <td rowspan="4">
                                                <span><img class="thumbnail" src="~/static/images/img_item_sample_01.png"
                                                        alt="썸네일"></span>
                                                <span class="thumbnail-text">실제 이미지입니다</span>
                                            </td>
                                            <td class="text-brand">브랜드명</td>
                                            <td></td>
                                            <td class="text-red">
                                            </td>
                                            <td class="text-blue text-left">
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                            </td>
                                            <td>
                                                <strong class="text-big">5.4kg</strong>
                                            </td>
                                            <td class="text-red">
                                            </td>
                                            <td class="text-big">
                                                <strong class="text-price">9,999,999</strong>
                                                <strong class="text-small">원</strong>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="item-part"><span class="text-gray">윗등심 + 아랫등심 반두분</span></td>
                                            <td></td>
                                            <td>
                                            </td>
                                            <td>
                                                <span class="text-gray text-linethrough">39,800원(kg당)</span>
                                            </td>
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
                                                            <img src="~/assets/images/common/items/ico_aging.png" alt="할인">
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

                                <table class="basic-item-table pc">
                                    <colgroup>
                                        <col style="min-width: 3.2rem; width: 4%;">
                                        <col style="min-width: 9rem; width: 10%;">
                                        <col>
                                        <col style="width: 12%;">
                                        <col style="width: 19%;">
                                        <col style="width: 19%;">
                                    </colgroup>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td colspan="5">
                                                <button type="button" class="btn-order">바로구매</button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <!-- 체크박스 영역 -->
                                            <th rowspan="6">
                                                <label class="check-wrap">
                                                    <input type="checkbox" name="checkboxSample">
                                                </label>
                                            </th>
                                            <!-- 썸네일 영역 -->
                                            <td rowspan="6" class="thumbnail-td">
                                                <span><img class="thumbnail" src="~/static/images/img_item_sample_01.png"
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
                                            </td>
                                            <td></td>
                                            <td class="text-red">
                                            </td>
                                            <td class="text-blue">
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="text-brand">브랜드명</td>
                                            <td></td>
                                            <td class="text-red">
                                                <strong>단가(kg당)</strong>
                                            </td>
                                            <td class="text-blue">
                                                <strong>판매가</strong>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong class="text-title text-big">제목줄이 나오는 영역입니다</strong>
                                            </td>
                                            <td>
                                                <strong class="text-big">5.4kg</strong>
                                            </td>
                                            <td class="text-red">
                                                <strong class="text-price">9,999,999</strong>
                                                <strong class="text-small">원</strong>
                                            </td>
                                            <td class="text-big">
                                                <strong class="text-price">9,999,999</strong>
                                                <strong class="text-small">원</strong>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="item-part"><span class="text-gray">윗등심 + 아랫등심 반두분</span></td>
                                            <td></td>
                                            <td>
                                            </td>
                                            <td>
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
                                                            <img src="~/assets/images/common/items/ico_aging.png" alt="할인">
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
                                    <label class="check-wrap">
                                        <input type="checkbox" name="checkboxSample">
                                    </label>

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
                                                <img src="~/assets/images/common/items/ico_fresh.png" alt="신선물류">
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
                                                <span class="unit-accent">kg당 최대 혜택가 10%↓</span>
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
                                                <img src="~/assets/images/common/items/ico_point.png" alt="적립혜택">
                                            </span>
                                        </li>
                                        <li class="benefit coupon"><span>할인혜택</span>
                                            <span>
                                                <img src="~/assets/images/common/items/ico_coupon.png" alt="즉시할인">
                                            </span>
                                        </li>
                                        <li class="benefit discount"><span>숙성할인</span>
                                            <span>
                                                <img src="~/assets/images/common/items/ico_aging.png" alt="숙성할인">
                                            </span>
                                        </li>
                                    </ul>

                                    <div class="btn-area">
                                        <button type="button" class="btn-order">바로구매</button>
                                    </div>

                                </div>


                                <p class="shipping">
                                    배송정보 : 3,000원 (택배사명)
                                </p>

                            </div>

                        </div>

                    </div>

                </li>
            </ul>

            <!-- 장바구니는 상품금액/배송비 총 금액만 노출 -->
            <div class="order-info" v-scroll="handleScroll">
                <div class="red-box">
                    <div class="total-ea">선택상품 : <span class="text-red">20</span>건</div>
                    <ul>
                        <li>
                            <span class="th">상품금액</span>
                            <span class="td">9,999,999원</span>
                        </li>
                        <li>
                            <span class="th">상품금액</span>
                            <span class="td">9,999,999원</span>
                        </li>
                        <li>
                            <span class="th">상품금액</span>
                            <span class="td">9,999,999원</span>
                        </li>
                        <li>
                            <span class="th">상품금액</span>
                            <span class="td">9,999,999원</span>
                        </li>
                        <li>
                            <span class="th">상품금액</span>
                            <span class="td">9,999,999원</span>
                        </li>
                        <li>
                            <span class="th">상품금액</span>
                            <span class="td">9,999,999원</span>
                        </li>
                        <li>
                            <span class="th">상품금액</span>
                            <span class="td">9,999,999원</span>
                        </li>
                        <li class="shipping">
                            <span class="th">배송비</span>
                            <span class="td">2,500원</span>
                        </li>

                    </ul>
                    <div class="total-price-title">총 주문금액</div>
                    <div class="total-price">999,999,999원</div>
                </div>

                <div class="mobile-fix">
                    <div class="mobile">
                        <div class="total-ea">선택상품 : <span class="text-red">20</span>건</div>
                        <div class="total-price">999,999,999원</div>
                    </div>
                    <div class="btn-area">
                        <button type="button" class="btn btn-order">주문하기</button>
                        <button type="button" class="btn btn-print" @click="openInvoicePopup">견적서 출력</button>
                    </div>
                    <p class="info-text pc">
                        쿠폰/적립금은 주문서 화면에서 사용 가능하며, 보유하신 내역에 따라 실결제금액이 달라질 수 있습니다
                    </p>

                </div>
                <p class="info-text mobile">
                    쿠폰/적립금은 주문서 화면에서 사용 가능하며, 보유하신 내역에 따라 실결제금액이 달라질 수 있습니다
                </p>
            </div>
        </section>

        <div class="cart-null hidden">
            <p>장바구니에 담긴 상품이 없습니다.</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        rankFn: {
            type: Boolean,
            default: true
        },
        gradeFn: {
            type: Boolean,
            default: true
        },

        items: [
            {
                thumbnail: require("~/static/images/img_item_sample_01.png"),
                soldOut: false,
                badge: {
                    rank: '1++B',
                    fat: "NO.8",
                    storage: "ice",
                    antibiotic: true,
                    fresh: true
                },
                title: {
                    brand: "바를정육류연구소",
                    main: "냉장 한우암소 등심",
                    sub: "윗등심 + 아랫등심 반두분",
                },
                price: {
                    unitAccent: "10%",
                    kg: "5.4",
                    discountSells: "213,840",
                    sells: "237,600",
                    discountConsumer: "39,600",
                    consumer: "44,000"
                },
                processing: {
                    date: "2023-06-28",
                    dateDetail: "(29개월령)",
                    part: "송이한우파트",
                    number: "00215719766"
                },
                benefits: {
                    point: "10",
                    coupon: "3",
                    aging: "1",
                    discount: true,
                },
            },
            {
                thumbnail: require("~/static/images/img_item_sample_01.png"),
                soldOut: false,
                badge: {
                    fat: "NO.8",
                    storage: "ice",
                    antibiotic: true,
                    fresh: true
                },
                title: {
                    brand: "바를정육류연구소",
                    main: "냉장 한우암소 등심",
                    sub: "윗등심 + 아랫등심 반두분",
                },
                price: {
                    unitAccent: "10%",
                    kg: "5.4",
                    discountSells: "213,840",
                    sells: "237,600",
                    discountConsumer: "39,600",
                    consumer: "44,000"
                },
                processing: {
                    date: "2023-06-28",
                    dateDetail: "(29개월령)",
                    part: "송이한우파트",
                    number: "00215719766"
                },
                benefits: {
                    point: "10",
                    coupon: "3",
                    aging: "1",
                    discount: true,
                },
            },
        ],
    },
    data() {
        return {
            toolTip: false,
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
                'discount1': false,
                'discount2': false,
                'discount3': false,
                'discount4': false,
                'mDiscount1': false,
                'mDiscount2': false,
                'mDiscount3': false,
                'mDiscount4': false,
                'mDiscount5': false,
                'mDiscount6': false,
            },
            modalInvoice: false,
        }
    },

    methods: {
        // scroll event 20231004
        handleScroll() {

            let windowWidth = window.outerWidth;

            let topBannerH = document.getElementById("top-banner").offsetHeight
            let titleH = document.querySelector(".title-h1").offsetHeight
            let orderInfo = document.querySelector(".order-info")
            let windowH = window.innerHeight
            let contentH = document.querySelector(".item-list").offsetHeight
            let headerH = document.querySelector("header").offsetHeight
            let footerH = document.querySelector("footer").offsetHeight
            let offsetTopPos = contentH - orderInfo.offsetHeight - headerH - footerH + 60


            if (document.querySelector('.cart-null').classList.contains('hidden')) {
                if (windowH < contentH) {
                    // header fixed
                    if (topBannerH < window.scrollY) {
                        document.querySelector("header").id = "header-fixed"
                        //document.querySelector(".fixed-area").classList.add("fixed")
                        orderInfo.classList.add('fixed')

                        if (offsetTopPos < window.scrollY) {

                            if (windowWidth >= 768) {
                                orderInfo.classList.remove('fixed')
                                orderInfo.classList.add('offset')
                            }
                            orderInfo.style.top = ((offsetTopPos + 348) / 10) + "rem"
                            // console.log(`${offsetTopPos} < ${window.scrollY}`);
                        } else {
                            orderInfo.classList.add('fixed')
                            orderInfo.classList.remove('offset')
                            orderInfo.style.top = null
                        }


                    } else {
                        document.querySelector("header").removeAttribute('id')
                        //document.querySelector(".fixed-area").classList.remove("fixed")
                        orderInfo.classList.remove('fixed')
                    }
                }

            }

        },

        getFatClass(fat) {
            if (fat === 'NO.1') {
                return 'no1';
            } else if (fat === 'NO.1') {
                return 'no2';
            } else if (fat === 'NO.2') {
                return 'no2';
            } else if (fat === 'NO.3') {
                return 'no3';
            } else if (fat === 'NO.4') {
                return 'no4';
            } else if (fat === 'NO.5') {
                return 'no5';
            } else if (fat === 'NO.6') {
                return 'no6';
            } else if (fat === 'NO.7') {
                return 'no7';
            } else if (fat === 'NO.8') {
                return 'no8';
            } else {
                return 'no9';
            }
        },


        // invoice popup
        openInvoicePopup() {
            this.pop = window.open("/cart/invoice", "openInvoicepopup", "width=1183, height=2272");
        },

    },
}
</script>

<style >
@import url('~/assets/scss/page/cart.scss');
</style>
