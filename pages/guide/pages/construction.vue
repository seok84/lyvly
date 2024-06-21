<template>
    <div>
        <!-- 아코디언 -->
        <section>
            <p class="head-title">아코디언 구조</p>
            <!-- common.css 에 맞춰 수정 -->
            <dl class="accordion-list" :class="{ closed: toggleItem['toggleContent1'] }">
                <dt class="list-tit" @click="toggleItem['toggleContent1'] = !toggleItem['toggleContent1']">
                    <p>기본정보</p>
                    <span @click="toggleList($event)">
                        <img src="~/assets/images/common/arrow/ico_arr_accordion.png" alt="열기/닫기 화살표">
                    </span>
                </dt>
                <dd class="list-wrap">
                    test
                </dd>
            </dl>
            <!-- <ul class="accordion-list">
                <li class="list">
                    <div class="list-tit" :class="{ closed: toggleItem['toggleContent1'] }"
                        @click="toggleItem['toggleContent1'] = !toggleItem['toggleContent1']">
                        <h4>기본정보</h4>
                        <span>
                            <img src="~/assets/images/common/arrow/ico_arr_accordion.png" alt="열기/닫기 화살표">
                        </span>
                    </div>
                    <div class="list-wrap">
                        list 내부
                    </div>
                </li>
                <li class="list">
                    <div class="list-tit" :class="{ closed: toggleItem['toggleContent2'] }"
                        @click="toggleItem['toggleContent2'] = !toggleItem['toggleContent2']">
                        <h4>기본정보</h4>
                        <span>
                            <img src="~/assets/images/common/arrow/ico_arr_accordion.png" alt="열기/닫기 화살표">
                        </span>
                    </div>
                    <div class="list-wrap">
                        list 내부
                    </div>
                </li>
                <li class="list">
                    <div class="list-tit" :class="{ closed: toggleItem['toggleContent3'] }"
                        @click="toggleItem['toggleContent3'] = !toggleItem['toggleContent3']">
                        <h4>기본정보</h4>
                        <span>
                            <img src="~/assets/images/common/arrow/ico_arr_accordion.png" alt="열기/닫기 화살표">
                        </span>
                    </div>
                    <div class="list-wrap">
                        list 내부
                    </div>
                </li>
            </ul> -->

            <button type="button" class="btn-code-view" @click="toggleCode($event)">코드 펼치기</button>
            <pre class="code-guide hidden">
                //HTML
                &lt;div class="list-tit" :class="{ closed : toggleItem['toggleContent1'] }"  @click="toggleItem['toggleContent1'] = !toggleItem['toggleContent1']"&gt;
                    &lt;h4&gt;기본정보&lt;/h4&gt;
                    &lt;span&gt;
                        &lt;img src="~/assets/images/common/arrow/ico_arr_accordion.png" alt="열기/닫기 화살표"&gt;
                    &lt;/span&gt;
                &lt;/div&gt;
                &lt;div class="list-wrap"&gt;
                    list 내부
                &lt;/div&gt;
            </pre>

        </section>

        <!-- 상품리스트 -->
        <section>
            <p class="head-title">상품리스트</p>
            <p>basic-item-list</p>
            <br>
            <ul class="basic-item-list">
                <!-- 썸네일 true -->
                <li>
                    <!-- 체크박스 영역 -->
                    <label class="check-wrap">
                        <input type="checkbox" name="checkboxSample">
                    </label>

                    <!-- 상품 설명 -->
                    <div class="inline-flex">
                        <!-- 썸네일 -->
                        <div class="item-thumbnail">
                            <span><img class="thumbnail" src="~/static/images/img_item_sample_01.png" alt="썸네일"></span>
                            <!-- <span class="no-data"><img src="~/static/images/img_none_thumbnail.png" alt=""></span> -->
                            <span class="thumbnail-text">실제 이미지입니다</span>
                        </div>

                        <!-- 상품 상세 설명 -->
                        <div class="item-title">
                            <p class="brand">한우비상</p>
                            <p class="main">한우암소 등심 제목줄 한줄</p>
                            <p class="sub">반두분(윗등심 9.4kg + 아랫등심 7.9kg)</p>
                            <p class="item-date"><strong>가공일자 2023-06-28</strong> (29개월령)</p>
                            <ul class="item-benefits">
                                <li class="benefit point"><span>10%적립</span>
                                    <span>
                                        <img src="~/assets/images/common/items/ico_point.png" alt="적립혜택">
                                    </span>
                                </li>
                                <li class="benefit coupon"><span>3%할인</span>
                                    <span>
                                        <img src="~/assets/images/common/items/ico_coupon.png" alt="즉시할인">
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <!-- 상품 무게 -->
                        <div class="item-weight">
                            <p>5.4kg</p>
                        </div>

                        <!-- 상품 가격 -->
                        <div class="item-price-group">
                            <div class="item-price red">
                                <p class="unit-accent">
                                    최대 혜택가 10%↓
                                </p>
                                <p class="unit">단가(kg당)</p>
                                <p rel="판매가" class="sells"><span>39,800<strong>원</strong></span></p>
                                <p rel="소비자가" class="consumer">44,000 원(kg당)</p>
                            </div>
                            <div class="item-price blue">
                                <p class="unit-accent">
                                    최대 혜택가 10%↓
                                </p>
                                <span class="sells-info">
                                    <i>?</i>
                                </span>
                                <p class="unit">단가(kg당)</p>
                                <p rel="판매가" class="sells"><span>39,800<strong>원</strong></span></p>
                                <!-- <p rel="소비자가" class="consumer">44,000 원(kg당)</p> -->
                            </div>
                        </div>

                    </div>

                </li>

                <!-- 썸네일 false -->
                <li>
                    <!-- 체크박스 영역 -->
                    <label class="check-wrap">
                        <input type="checkbox" name="checkboxSample">
                    </label>

                    <!-- 상품 설명 -->
                    <div class="inline-flex">
                        <!-- 상품 상세 설명 -->
                        <div class="item-title">
                            <p class="brand">한우비상</p>
                            <p class="main">한우암소 등심 제목줄 한줄</p>
                            <p class="sub">반두분(윗등심 9.4kg + 아랫등심 7.9kg)</p>
                            <p class="item-date"><strong>가공일자 2023-06-28</strong> (29개월령)</p>
                            <ul class="item-benefits">
                                <li class="benefit point"><span>10%적립</span>
                                    <span>
                                        <img src="~/assets/images/common/items/ico_point.png" alt="적립혜택">
                                    </span>
                                </li>
                                <li class="benefit coupon"><span>3%할인</span>
                                    <span>
                                        <img src="~/assets/images/common/items/ico_coupon.png" alt="즉시할인">
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <!-- 상품 무게 -->
                        <div class="item-weight">
                            <p>5.4kg</p>
                        </div>

                        <!-- 상품 가격 -->
                        <div class="item-price-group">
                            <div class="item-price red">
                                <p class="unit-accent">
                                    최대 혜택가 10%↓
                                </p>
                                <p class="unit">단가(kg당)</p>
                                <p rel="판매가" class="sells"><span>39,800<strong>원</strong></span></p>
                                <p rel="소비자가" class="consumer">44,000 원(kg당)</p>
                            </div>
                            <div class="item-price blue">
                                <p class="unit-accent">
                                    최대 혜택가 10%↓
                                </p>
                                <span class="sells-info">
                                    <i>?</i>
                                </span>
                                <p class="unit">단가(kg당)</p>
                                <p rel="판매가" class="sells"><span>39,800<strong>원</strong></span></p>
                                <p rel="소비자가" class="consumer">44,000 원(kg당)</p>
                            </div>
                        </div>

                    </div>

                </li>
            </ul>

            <button type="button" class="btn-code-view" @click="toggleCode($event)">코드 펼치기</button>
            <pre class="code-guide hidden">
                &lt;ul class="basic-item-list"&gt;
                    &lt;!-- 썸네일 true --&gt;
                    &lt;li&gt;
                        &lt;!-- 체크박스 영역 --&gt;
                        &lt;label class="check-wrap"&gt;
                            &lt;input type="checkbox" name="checkboxSample"&gt;
                        &lt;/label&gt;

                        &lt;!-- 상품 설명 --&gt;
                        &lt;div class="inline-flex"&gt;
                            &lt;!-- 썸네일 --&gt;
                            &lt;div class="item-thumbnail"&gt;
                                &lt;span&gt;&lt;img class="thumbnail" src="~/static/images/img_item_sample_01.png" alt="썸네일"&gt;&lt;/span&gt;
                                &lt;!-- &lt;span class="no-data"&gt;&lt;img src="~/static/images/img_none_thumbnail.png" alt=""&gt;&lt;/span&gt; --&gt;
                                &lt;span class="thumbnail-text"&gt;실제 이미지입니다&lt;/span&gt;
                            &lt;/div&gt;
                            
                            &lt;!-- 상품 상세 설명 --&gt;
                            &lt;div class="item-title"&gt;
                                &lt;p class="brand"&gt;한우비상&lt;/p&gt;
                                &lt;p class="main"&gt;한우암소 등심 제목줄 한줄&lt;/p&gt;
                                &lt;p class="sub"&gt;반두분(윗등심 9.4kg + 아랫등심 7.9kg)&lt;/p&gt;
                                &lt;p class="item-date"&gt;&lt;strong&gt;가공일자 2023-06-28&lt;/strong&gt; (29개월령)&lt;/p&gt;
                                &lt;ul class="item-benefits"&gt;
                                    &lt;li class="point"&gt;&lt;span&gt;10%적립&lt;/span&gt;
                                        &lt;span&gt;
                                            &lt;img src="~/assets/images/common/items/ico_point.png" alt="적립혜택"&gt;
                                        &lt;/span&gt;
                                    &lt;/li&gt;
                                    &lt;li class="coupon"&gt;&lt;span&gt;3%할인&lt;/span&gt;
                                        &lt;span&gt;
                                            &lt;img src="~/assets/images/common/items/ico_coupon.png" alt="할인"&gt;
                                        &lt;/span&gt;
                                    &lt;/li&gt;
                                &lt;/ul&gt;
                            &lt;/div&gt;

                            &lt;!-- 상품 무게 --&gt;
                            &lt;div class="item-weight"&gt;
                                &lt;p&gt;5.4kg&lt;/p&gt;
                            &lt;/div&gt;

                            &lt;!-- 상품 가격 --&gt;
                            &lt;div class="item-price-group"&gt;
                                &lt;div class="item-price red"&gt;
                                    &lt;p class="unit-accent"&gt;
                                        최대 혜택가 10%↓
                                    &lt;/p&gt;
                                    &lt;p class="unit"&gt;단가(kg당)&lt;/p&gt;
                                    &lt;p rel="판매가" class="sells"&gt;&lt;span&gt;39,800&lt;strong&gt;원&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;
                                    &lt;p rel="소비자가" class="consumer"&gt;44,000 원(kg당)&lt;/p&gt;
                                &lt;/div&gt;
                                &lt;div class="item-price blue"&gt;
                                    &lt;p class="unit-accent"&gt;
                                        최대 혜택가 10%↓
                                        &lt;/p&gt;
                                        &lt;span class="sells-info"&gt;
                                            &lt;span&gt;?&lt;/span&gt;
                                        &lt;/span&gt;
                                    &lt;p class="unit"&gt;단가(kg당)&lt;/p&gt;
                                    &lt;p rel="판매가" class="sells"&gt;&lt;span&gt;39,800&lt;strong&gt;원&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;
                                    &lt;!-- &lt;p rel="소비자가" class="consumer"&gt;44,000 원(kg당)&lt;/p&gt; --&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;

                        &lt;/div&gt;

                    &lt;/li&gt;

                    &lt;!-- 썸네일 false --&gt;
                    &lt;li&gt;
                        &lt;!-- 체크박스 영역 --&gt;
                        &lt;label class="check-wrap"&gt;
                            &lt;input type="checkbox" name="checkboxSample"&gt;
                        &lt;/label&gt;

                        &lt;!-- 상품 설명 --&gt;
                        &lt;div class="inline-flex"&gt;
                            &lt;!-- 상품 상세 설명 --&gt;
                            &lt;div class="item-title"&gt;
                                &lt;p class="brand"&gt;한우비상&lt;/p&gt;
                                &lt;p class="main"&gt;한우암소 등심 제목줄 한줄&lt;/p&gt;
                                &lt;p class="sub"&gt;반두분(윗등심 9.4kg + 아랫등심 7.9kg)&lt;/p&gt;
                                &lt;p class="item-date"&gt;&lt;strong&gt;가공일자 2023-06-28&lt;/strong&gt; (29개월령)&lt;/p&gt;
                                &lt;ul class="item-benefits"&gt;
                                    &lt;li class="benefit point"&gt;&lt;span&gt;10%적립&lt;/span&gt;
                                        &lt;span&gt;
                                            &lt;img src="~/assets/images/common/items/ico_point.png" alt="적립혜택"&gt;
                                        &lt;/span&gt;
                                    &lt;/li&gt;
                                    &lt;li class="benefit coupon"&gt;&lt;span&gt;3%할인&lt;/span&gt;
                                        &lt;span&gt;
                                            &lt;img src="~/assets/images/common/items/ico_coupon.png" alt="할인"&gt;
                                        &lt;/span&gt;
                                    &lt;/li&gt;
                                &lt;/ul&gt;
                            &lt;/div&gt;

                            &lt;!-- 상품 무게 --&gt;
                            &lt;div class="item-weight"&gt;
                                &lt;p&gt;5.4kg&lt;/p&gt;
                            &lt;/div&gt;

                            &lt;!-- 상품 가격 --&gt;
                            &lt;div class="item-price-group"&gt;
                                &lt;div class="item-price red"&gt;
                                    &lt;p class="unit-accent"&gt;
                                        최대 혜택가 10%↓
                                    &lt;/p&gt;
                                    &lt;p class="unit"&gt;단가(kg당)&lt;/p&gt;
                                    &lt;p rel="판매가" class="sells"&gt;&lt;span&gt;39,800&lt;strong&gt;원&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;
                                    &lt;p rel="소비자가" class="consumer"&gt;44,000 원(kg당)&lt;/p&gt;
                                &lt;/div&gt;
                                &lt;div class="item-price blue"&gt;
                                    &lt;p class="unit-accent"&gt;
                                        최대 혜택가 10%↓
                                        &lt;/p&gt;
                                        &lt;span class="sells-info"&gt;
                                            &lt;span&gt;?&lt;/span&gt;
                                        &lt;/span&gt;
                                    &lt;p class="unit"&gt;단가(kg당)&lt;/p&gt;
                                    &lt;p rel="판매가" class="sells"&gt;&lt;span&gt;39,800&lt;strong&gt;원&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;
                                    &lt;!-- &lt;p rel="소비자가" class="consumer"&gt;44,000 원(kg당)&lt;/p&gt; --&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;

                        &lt;/div&gt;

                    &lt;/li&gt;
                &lt;/ul&gt;
            </pre>


            <br>
            <br>
            <br>
            <p>basic-item-table</p>
            <br>

            <table class="basic-item-table">
                <colgroup>
                    <col style="width:">
                    <col style="width:">
                    <col style="width:">
                    <col>
                </colgroup>
                <tbody>
                    <tr>
                        <!-- 체크박스 영역 -->
                        <th rowspan="6">
                            <label class="check-wrap">
                                <input type="checkbox" name="checkboxSample">
                            </label>
                        </th>
                        <!-- 썸네일 영역 -->
                        <td rowspan="6">
                            <span><img class="thumbnail" src="~/static/images/img_item_sample_01.png" alt="썸네일"></span>
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
                                <li class="badge badge-storage">
                                    <span>
                                        <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                                    </span>
                                    <span>냉장</span>
                                </li>
                                <li class="badge badge-frozen">
                                    <span>
                                        <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                    </span>
                                    <span>냉동</span>
                                </li>
                                <!-- <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                <li class="badge badge-fresh">
                                    <span>
                                        <img src="~/assets/images/common/items/ico_fresh.png" alt="신선물류">
                                    </span>
                                    <span>신선물류</span>
                                </li>-->
                            </ul>
                        </td>
                        <td></td>
                        <td class="text-red">
                            <span class="unit-accent">적립혜택</span>
                        </td>
                        <td class="text-blue">
                            <span class="unit-accent">할인혜택</span>
                            <span class="sells-info"><i>?</i></span>
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
                            <strong class="text-big">제목줄이 나오는 영역입니다</strong>
                        </td>
                        <td>
                            <strong class="text-big">5.4kg</strong>
                        </td>
                        <td class="text-red">
                            <strong class="text-big">47,700</strong>
                            <strong class="text-small">원</strong>
                        </td>
                        <td class="text-big">
                            <strong class="text-big">472,824</strong>
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
                        <td>
                            2023-06-28 (29개월령)
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>
                            <ul class="item-benefits">
                                <li class="point"><span>적립혜택</span>
                                    <span>
                                        <img src="~/assets/images/common/items/ico_point.png" alt="적립혜택">
                                    </span>
                                </li>
                                <li class="coupon"><span>할인혜택</span>
                                    <span>
                                        <img src="~/assets/images/common/items/ico_coupon.png" alt="즉시할인">
                                    </span>
                                </li>
                                <li class="benefit aging"><span>숙성할인</span>
                                    <span>
                                        <img src="~/assets/images/common/items/ico_aging.png" alt="숙성할인">
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

            <button type="button" class="btn-code-view" @click="toggleCode($event)">코드 펼치기</button>
            <pre class="code-guide hidden">
                // html
                &lt;table class="basic-item-table"&gt;
                    &lt;colgroup&gt;
                        &lt;col style="width:"&gt;
                        &lt;col style="width:"&gt;
                        &lt;col style="width:"&gt;
                        &lt;col&gt;
                    &lt;/colgroup&gt;
                    &lt;tbody&gt;
                        &lt;tr&gt;
                            &lt;!-- 체크박스 영역 --&gt;
                            &lt;th rowspan="6"&gt;
                                &lt;label class="check-wrap"&gt;
                                    &lt;input type="checkbox" name="checkboxSample"&gt;
                                &lt;/label&gt;
                            &lt;/th&gt;
                            &lt;!-- 썸네일 영역 --&gt;
                            &lt;td rowspan="6"&gt;
                                &lt;span&gt;&lt;img class="thumbnail" src="~/static/images/img_item_sample_01.png" alt="썸네일"&gt;&lt;/span&gt;
                                &lt;span class="thumbnail-text"&gt;실제 이미지입니다&lt;/span&gt;
                            &lt;/td&gt;
                            &lt;!-- 라벨 영역 --&gt;
                            &lt;td&gt;
                                &lt;ul class="item-badge"&gt;
                                    &lt;li class="badge badge-rank"&gt;
                                        &lt;span&gt;1++B&lt;/span&gt;
                                    &lt;/li&gt;
                                    &lt;!-- &lt;li class="badge badge-fat no1"&gt;
                                        &lt;span&gt;NO.1&lt;/span&gt;
                                    &lt;/li&gt;
                                    &lt;li class="badge badge-fat no2"&gt;
                                        &lt;span&gt;NO.2&lt;/span&gt;
                                    &lt;/li&gt;
                                    &lt;li class="badge badge-fat no3"&gt;
                                        &lt;span&gt;NO.3&lt;/span&gt;
                                    &lt;/li&gt;
                                    &lt;li class="badge badge-fat no4"&gt;
                                        &lt;span&gt;NO.4&lt;/span&gt;
                                    &lt;/li&gt;
                                    &lt;li class="badge badge-fat no5"&gt;
                                        &lt;span&gt;NO.5&lt;/span&gt;
                                    &lt;/li&gt;
                                    &lt;li class="badge badge-fat no6"&gt;
                                        &lt;span&gt;NO.6&lt;/span&gt;
                                    &lt;/li&gt;
                                    &lt;li class="badge badge-fat no7"&gt;
                                        &lt;span&gt;NO.7&lt;/span&gt;
                                    &lt;/li&gt;
                                    &lt;li class="badge badge-fat no8"&gt;
                                        &lt;span&gt;NO.8&lt;/span&gt;
                                    &lt;/li&gt;--&gt;
                                    &lt;li class="badge badge-fat no9"&gt;
                                        &lt;span&gt;NO.9&lt;/span&gt;
                                    &lt;/li&gt;
                                    &lt;li class="badge badge-storage"&gt;
                                        &lt;span&gt;
                                            &lt;img src="~/assets/images/common/items/ico_cold.svg" alt="냉장"&gt;
                                        &lt;/span&gt;
                                        &lt;span&gt;냉장&lt;/span&gt;
                                    &lt;/li&gt;
                                    &lt;li class="badge badge-storage"&gt;
                                        &lt;span&gt;
                                            &lt;img src="~/assets/images/common/items/ico_ice.svg" alt="냉동"&gt;
                                        &lt;/span&gt;
                                        &lt;span&gt;냉동&lt;/span&gt;
                                    &lt;/li&gt;
                                    &lt;!-- &lt;li class="badge badge-antibiotic"&gt;&lt;span&gt;무항생제&lt;/span&gt;&lt;/li&gt;
                                    &lt;li class="badge badge-fresh"&gt;&lt;span&gt;신선물류&lt;/span&gt;&lt;/li&gt;--&gt;
                                &lt;/ul&gt;
                            &lt;/td&gt;
                            &lt;td&gt;&lt;/td&gt;
                            &lt;td class="text-red"&gt;
                                &lt;span class="unit-accent"&gt;최대 혜택가 10%↓&lt;/span&gt;
                            &lt;/td&gt;
                            &lt;td class="text-blue"&gt;
                                &lt;span class="unit-accent"&gt;최대 혜택가 10%↓&lt;/span&gt;
                            &lt;/td&gt;
                        &lt;/tr&gt;
                        
                        &lt;tr&gt;
                            &lt;td class="text-brand"&gt;브랜드명&lt;/td&gt;
                            &lt;td&gt;&lt;/td&gt;
                            &lt;td class="text-red"&gt;
                                &lt;strong&gt;단가(kg당)&lt;/strong&gt;
                            &lt;/td&gt;
                            &lt;td class="text-blue"&gt;
                                &lt;strong&gt;판매가&lt;/strong&gt;
                            &lt;/td&gt;
                        &lt;/tr&gt;

                        &lt;tr&gt;
                            &lt;td&gt;
                                &lt;strong class="text-big"&gt;제목줄이 나오는 영역입니다&lt;/strong&gt;
                            &lt;/td&gt;
                            &lt;td&gt;
                                &lt;strong class="text-big"&gt;5.4kg&lt;/strong&gt;
                            &lt;/td&gt;
                            &lt;td class="text-red"&gt;
                                &lt;strong class="text-big"&gt;47,700&lt;/strong&gt;
                                &lt;strong class="text-small"&gt;원&lt;/strong&gt;
                            &lt;/td&gt;
                            &lt;td class="text-big"&gt;
                                &lt;strong class="text-big"&gt;472,824&lt;/strong&gt;
                                &lt;strong class="text-small"&gt;원&lt;/strong&gt;
                            &lt;/td&gt;
                        &lt;/tr&gt;

                        &lt;tr&gt;
                            &lt;td class="item-part"&gt;&lt;span class="text-gray"&gt;윗등심 + 아랫등심 반두분&lt;/span&gt;&lt;/td&gt;
                            &lt;td&gt;&lt;/td&gt;
                            &lt;td&gt;
                                &lt;span class="text-gray text-linethrough"&gt;39,800원(kg당)&lt;/span&gt;
                            &lt;/td&gt;
                            &lt;td&gt;
                                &lt;span class="text-gray text-linethrough"&gt;39,800원(kg당)&lt;/span&gt;
                            &lt;/td&gt;
                        &lt;/tr&gt;

                        &lt;tr&gt;
                            &lt;td&gt;
                                2023-06-28 (29개월령)
                            &lt;/td&gt;
                            &lt;td&gt;&lt;/td&gt;
                            &lt;td&gt;&lt;/td&gt;
                            &lt;td&gt;&lt;/td&gt;
                        &lt;/tr&gt;

                        &lt;tr&gt;
                            &lt;td&gt;
                                &lt;ul class="item-benefits"&gt;
                                    &lt;li class="point"&gt;&lt;span&gt;10%적립&lt;/span&gt;
                                        &lt;span&gt;
                                            &lt;img src="~/assets/images/common/items/ico_point.png" alt="적립혜택"&gt;
                                        &lt;/span&gt;
                                    &lt;/li&gt;
                                    &lt;li class="coupon"&gt;&lt;span&gt;3%할인&lt;/span&gt;
                                        &lt;span&gt;
                                            &lt;img src="~/assets/images/common/items/ico_coupon.png" alt="할인"&gt;
                                        &lt;/span&gt;
                                    &lt;/li&gt;
                                &lt;/ul&gt;
                            &lt;/td&gt;
                            &lt;td&gt;&lt;/td&gt;
                            &lt;td&gt;&lt;/td&gt;
                            &lt;td&gt;&lt;/td&gt;
                        &lt;/tr&gt;

                    &lt;/tbody&gt;
                &lt;/table&gt;
            </pre>

            <br>
            <br>
            <br>
            <p> 기본 세로형 리스트 (메인, 검색)</p>
            <br>
            <div class="item-list-container default">
                <item-list class="item-list" :items="items" :cartFn="cartFn" />
            </div>

            <br>
            <br>
            <br>
            <p> 상품상세 리스트 (또 다른 부위)</p>
            <br>
            <!-- <div class="another-item-content">
                <h4 class="product-info-title"> -->
            <!-- pc 전체선택 -->
            <!-- <label for="sample05" class="check-wrap">
                        <input type="checkbox" name="checkboxSample" id="sample05" checked="checked">
                        <span>전체선택</span>
                    </label>
                    <div>
                        <p>같은 소, 다른 부위</p>
                        <p>이 소의 다른 부위를 <b>체크버튼을 클릭하시면 함께 구입</b> 하실 수 있습니다.</p>
                    </div>
                </h4> -->
            <!-- mobile 전체선택 -->
            <!-- <label for="sample05" class="check-wrap">
                    <input type="checkbox" name="checkboxSample" id="sample05" checked="checked">
                    <span>전체선택</span>
                </label> -->
            <!-- 또 다른 부위 리스트 -->
            <ul class="basic-item-list another-item-list">
                <item-part-info-another />
                <item-part-info-another class="soldout" />
            </ul>
            <!-- </div> -->


            <br>
            <br>
            <br>
            <p> 썸네일형 리스트</p>
            <br>
            <div class="item-list-container horizon">
                <div class="item-list" :items="items" :cartFn="cartFn">
                    <div class="item" v-for="(item, index) in items" :key="index">
                        <!-- 체크박스 -->
                        <div class="check-wrap">
                            <label>
                                <input type="checkbox">
                            </label>
                        </div>
                        <!-- 썸네일 -->
                        <item-part-thumbnail :cartFn="cartFn" :item="item.thumbnail" />
                        <!-- 아이템 정보 -->
                        <item-part-info-desc :processModal="processModal" />
                    </div>
                </div>
            </div>

            <br>
            <br>
            <br>
            <p> 텍스트형 리스트</p>
            <br>
            <!-- 텍스트형 리스트 -->
            <div class="item-list-container text">
                <div class="item-list">
                    <!-- 구조가 달라서 pc/mobile 따로 작업 -->
                    <div class="item">
                        <item-part-info-text class="pc" :processModal="processModal" />
                        <item-part-info-desc class="mobile" :processModal="processModal" />
                    </div>
                </div>
            </div>
        </section>
        <!-- 이력번호 팝업 -->
        <modal-process :processModal="processModal" @modalClose="processModal.modalShow = false" />

    </div>
</template>
<script>
export default {
    data() {
        return {
            processModal: {
                modalShow: false
            },
            cartFn: true,
            items: [
                {
                    thumbnail:
                    {
                        rank: '1++B',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_01.png"),
                    },
                    info:
                    {
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
                            sells: "39,800",
                            kg: "5.4",
                            consumer:
                                "44,000"
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

                        },
                    },
                },
            ],
            toggleItem: {
                'toggleContent1': false,
                'toggleContent2': false,
                'toggleContent3': false
            },
        }
    },
    methods: {
        toggleList(event) {

            let listTitle = event.currentTarget.parentNode;

            if (listTitle.classList.contains('closed')) {
                listTitle.classList.remove('closed');
            } else {
                listTitle.classList.add('closed')
            }

        },

        // guide 내 토글
        toggleCode(event) {
            let target = event.currentTarget
            target.nextElementSibling.classList.toggle('hidden')
        }
    },
}
</script>
<style scoped>
@import url("~/assets/css/common.css");

/* GUIDE 확인용 */
.accordion-list dd {
    background-color: #eeeeee;
}


.btn-code-view {
    padding: 1rem;
    margin: 0 0 1rem;
    border: .1rem solid #ccc;
    border-radius: .5rem;
}

.code-guide {
    padding: 1rem;
    margin: 0 0 3rem;
    border: .1rem solid #ccc;
}
</style>