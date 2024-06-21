<template>
    <div id="item-detail-view" v-scroll="headerFixed">
        <etc-category-navigation class="pc" />
        <section class="item-info-container" ref="target">
            <!-- 아이템 썸네일 -->
            <article class="item-info-thumbnail">
                <!-- 하나 -->
                <div class="swiper common-control thumbnail-swiper" :ref="'ThumbsOne'">
                    <div class="mobile">
                        <div class="swiper-pagination"></div>
                    </div>
                    <div class="item-thumbnail above" :class="{ 'sold-out': soldOut }">
                        <div class="item-thumbnail-area">
                            <p class="top-left" v-if="rank != '' || null || undefined">{{ rank }}</p>
                            <p class="top-right"><span><img :src="logo" alt="로고"></span></p>
                            <p class="bottom-left real" v-if="imagesType">실제 이미지입니다</p>
                            <p class="bottom-left default" v-else>대표 이미지입니다</p>
                            <p class="bottom-right">
                                <span v-if="cartFn">
                                    <img src="~/assets/images/common/items/ico_cart.png" alt="장바구니">
                                </span>
                            </p>
                        </div>
                        <div class="sold-out-wrap">
                            <span class="bottom-right">
                                <img src="~/assets/images/common/items/sold_out.png" alt="품절">
                            </span>
                        </div>
                    </div>
                    <div class="swiper-wrapper">
                        <div class="item swiper-slide" v-for="(item, index) in items" :key="index">
                            <!-- <item-part-thumbnail :item="item.thumbnail" /> -->
                            <!-- 썸네일 컴포넌트 구조 -->
                            <div class="item-thumbnail">
                                <span class="item-thumb-wrap">
                                    <img class="thumbnail" :src="item.thumbnail" alt="썸네일">
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 리스트 -->
                <div class="swiper-disable-wrapper">
                    <div class="swiper common-control  thumbnail-list-swiper pc">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item, index) of items" :key="index"
                                @click.prevent="activateSlide(index)" :ref="'ThumbsList'">
                                <div class="item-thumbnail" :class="{ 'sold-out': soldOut }">
                                    <div class="sold-out-wrap">
                                        <span class="bottom-right">
                                            <img src="~/assets/images/common/items/sold_out.png" alt="품절">
                                        </span>
                                    </div>
                                    <span class="img-wrap">
                                        <img :src="item.thumbnail" alt="상품상세 이미지">
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-inner pc">
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                    </div>
                </div>

                <div class="seller-information">
                    <div class="seller-notice">
                        <div class="seller-logo pc"><img src="~/static/static/images/logo.png" alt="판매자 로고"></div>
                        <div class="seller-phrase">
                            <p>판매자 공지사항<span @click="sellerInfo.show = true">한우비상 판매자 정보</span></p>
                            <p>품질 좋은 고기만을 취급합니다. / 일반 배송 / 010-1234-5678</p>
                            <!-- 판매자 정보 클릭 시  -->
                            <article class="tooltip seller-phrase-tooltip" v-show="sellerInfo.show">
                                <div class="tooltip-title">판매자 정보</div>
                                <div class="tooltip-body">
                                    <dl class="">
                                        <dt>대표자</dt>
                                        <dd>김준대</dd>
                                        <dt>상호</dt>
                                        <dd>(주)유어초이스</dd>
                                        <dt>전화</dt>
                                        <dd>031-283-2951</dd>
                                        <dt>이메일</dt>
                                        <dd>yourchoice@wehago.com</dd>
                                        <dt>사업자등록번호</dt>
                                        <dd>2158614677</dd>
                                        <dt>사업장소재지</dt>
                                        <dd>경기도 용인시 기흥구 보라동 455-1</dd>
                                    </dl>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div class="btn-wrap pc">
                    <button class="btn" @click="imageModal.modalShow = true">
                        <span>등심이미지 보기 (참고용)</span>
                    </button>
                    <button class="btn">
                        <span>축산물 이력정보</span>
                    </button>
                </div>
                <ul class="grade-status pc">
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
            </article>

            <!-- 아이템 정보 -->
            <article class="item-info-desc">
                <div class="item-brand">
                    <div class="item-brand-info">
                        <span class="item-brand-logo"><img src="~/static/static/images/logo.png" alt="로고"></span>
                        <span><nuxt-link to="/">한우비상</nuxt-link></span>
                    </div>
                    <nuxt-link to="/" class="item-brand-link">링크</nuxt-link>
                </div>
                <ul class="item-badge" v-if="meat">
                    <li class="badge badge-rank"><span>1++B</span></li>
                    <li class="badge badge-fat no8"><span>N0.8</span></li>
                    <!-- 20231218 -->
                    <li class="benefit"><span>숙성할인</span></li>
                    <!-- 20240325 -->
                    <li class="benefit"><span>안심한우</span></li>
                    <!-- // -->
                    <li class="benefit"><span>무항생제</span></li>
                </ul>
                <div class="item-title">
                    <p class="brand">한우비상</p>
                    <p class="main">한우암소 등심 제목줄 한줄</p>
                    <p class="sub">반두분(윗등심 9.4kg + 아랫등심 7.9kg)</p>
                    <!-- <p class="origin">원산지 : 상품상세참조</p> -->
                </div>

                <!-- 육류일 경우 노출 -->
                <table class="item-info-table item-info-price" v-if="meat">
                    <tr class="weight">
                        <th>중량</th>
                        <td class="value">3.8kg</td>
                    </tr>
                    <tr class="unit">
                        <th>단가<span>(kg당)</span>
                        </th>
                        <td>
                            <div class="unit-accent">
                                <strong>kg당 최대 혜택가 10%↓</strong><span class="sells-info tooltip-wrap">
                                    <i @click="toolTip = true">?</i>
                                </span>
                            </div>
                            <div class="value">82,900<b>원</b><strong>9,999,999원(kg당)</strong></div>
                        </td>
                    </tr>
                    <tr class="sells">
                        <th>판매가</th>
                        <td>
                            <div class="sells-accent">
                                <strong>최대 혜택가 10%↓</strong>

                            </div>
                            <div class="value">9,999,999<b>원</b><strong>82,900원</strong></div>
                        </td>
                    </tr>
                </table>
                <table class="item-info-table item-info-process" v-if="meat">
                    <tr>
                        <th class="coupon">상품쿠폰</th>
                        <td @click="couponModal.modalShow = true">
                            <button type="button" class="btn btn-black btn-coupon-down">
                                쿠폰받기<img src="~/assets/images/common/ico_download.png">
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th>이력번호</th>
                        <td class="number">
                            <span class="box">
                                <span @click="processModal.modalShow = true">00215719766</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th>가공일자</th>
                        <td>2023-06-17</td>
                    </tr>
                    <tr>
                        <th>유통기한</th>
                        <td>가공일로부터 60일</td>
                    </tr>
                    <tr>
                        <th>가공장명</th>
                        <td>(주)한우비상</td>
                    </tr>
                    <tr>
                        <th>도축장명</th>
                        <td>냉장 -2~10°C</td>
                    </tr>
                    <tr>
                        <th>보관방법</th>
                        <td>당일 12시 주문시 다음날 새벽배송 <br>
                            브랜드 배송상품입니다</td>
                    </tr>
                    <!-- <tr>
                        <th>배송정보</th>
                        <td class="delivery">오늘 밤 10시 전까지 결제 시 06/22(목) 배송예정</td>
                    </tr> -->
                    <!-- <tr>
                        <th>배송정보</th>
                        <td class="delivery">
                            개별배송
                            <span class="sells-info tooltip-wrap">
                                <i @click="toolTipDelivery.show = true">?</i>
                                    지역 및 상황에 따라 배송 방법 및 일정
                                    이 변경될 수 있습니다. <br>
                                    배송중 단계로 변경 시 상세 정보를 확
                                    인하실 수 있습니다.
                                </item-tooltip-default>
                            </span>
                        </td>
                    </tr> -->
                    <tr>
                        <th>배송정보</th>
                        <td class="delivery">
                            신선물류/오늘밤 10시 전까지 결제 시
                            8/25(금) 출고예정/ <br class="pc">
                            자체차량 탑차 직배송
                            <span class="sells-info tooltip-wrap">
                                <i @click="toolTipDelivery.show = !toolTipDelivery.show">?</i>
                                <div class="pc">
                                    <item-tooltip-default :toolTiplInfo="toolTipDelivery"
                                        @close="toolTipDelivery.show = false">
                                        지역 및 상황에 따라 배송 방법 및 일정
                                        이 변경될 수 있습니다. <br>
                                        배송중 단계로 변경 시 상세 정보를 확
                                        인하실 수 있습니다.
                                    </item-tooltip-default>
                                </div>
                            </span>
                            <div class="mobile">
                                <item-tooltip-default :toolTiplInfo="toolTipDelivery"
                                    @close="toolTipDelivery.show = false">
                                    지역 및 상황에 따라 배송 방법 및 일정
                                    이 변경될 수 있습니다. <br>
                                    배송중 단계로 변경 시 상세 정보를 확
                                    인하실 수 있습니다.
                                </item-tooltip-default>
                            </div>

                        </td>
                    </tr>
                </table>
                <!-- 육류일 경우 노출 end -->

                <!-- 일반상품일 경우 노출-->
                <div class="item-info-price-default" v-if="!meat">
                    <div>82,000원</div>
                    <div class="">
                        <p>9,999,999<span>원</span></p>
                        <p>27%</p>
                        <span class="sells-info tooltip-wrap">
                            <i @click="toolTip = true">?</i>
                        </span>
                    </div>
                </div>
                <table class="item-info-table item-info-process" v-if="!meat">
                    <tr>
                        <th>상품쿠폰</th>
                        <td @click="couponModal.modalShow = true">
                            <button type="button" class="btn btn-black btn-coupon-down">
                                쿠폰받기<img src="~/assets/images/common/ico_download.png">
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th>상품코드</th>
                        <td><nuxt-link to="/" class="product-number">002162156580</nuxt-link> </td>
                    </tr>
                    <tr>
                        <!-- 디자인 변경으로 인해 임시 주석 -->
                        <!-- 
                        <th>배송정보</th>
                        <td>
                            무료배송 <br>
                            <nuxt-link to="" class="more-delivery">도서산간 지역보기</nuxt-link>
                        </td> 
                        -->
                        <th>배송정보</th>
                        <td class="delivery">
                            개별배송
                            <span class="sells-info tooltip-wrap">
                                <i @click="toolTipDelivery.show = !toolTipDelivery.show">?</i>
                                <item-tooltip-default :toolTiplInfo="toolTipDelivery"
                                    @close="toolTipDelivery.show = false">
                                    지역 및 상황에 따라 배송 방법 및 일정
                                    이 변경될 수 있습니다. <br>
                                    배송중 단계로 변경 시 상세 정보를 확
                                    인하실 수 있습니다.
                                </item-tooltip-default>
                            </span>
                        </td>
                    </tr>
                </table>

                <!-- 일반상품-옵션텍스트형 -->
                <!-- <div class="option-type option-text">
                    <p class="option-txt">*상품을 구매하려면 필수 옵션을 작성하세요.</p>
                    <span class="form-line form-button">
                        <input type="text" class="form-basic" placeholder="요청문구" />
                        <button class="btn btn-black">추가</button>
                    </span>
                    <span class="form-line form-button">
                        <input type="text" class="form-basic" placeholder="폰트사이즈" />
                        <button class="btn btn-black">추가</button>
                    </span>
                </div> -->

                <!-- 일반상품-옵션조합형1 -->
                <!-- <div class="option-type option-dropdown">
                    <p class="option-txt">*상품을 구매하려면 필수 옵션을 작성하세요.</p>
                    <div class="dropdown-box">
                        <div class="select-type1" @click="openOption($event)">[상품1] 상품 옵션을 선택하세요</div>
                        <div class="option-drop">
                            <div class="drop-inner">
                                <p class="drop-tit">[상품1] 상품 옵션을 선택하세요</p>
                                <div class="dropdown-area">
                                    <button class="tit" @click="toggleOption($event)">옵션 1</button>
                                    <div class="option-btn" ref="optionMenu">
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)1</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)2</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)3</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)4</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)5</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)6</button>
                                    </div>
                                </div>
                                <div class="dropdown-area">
                                    <button class="tit" @click="toggleOption($event)">옵션 2</button>
                                    <div class="option-btn" ref="optionMenu">
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                    </div>
                                </div>
                                <button type="button" class="drop-close" @click.prevent="closeOption($event)">
                                    <span class="screen-out">옵션 닫기 버튼</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div> -->

                <!-- 일반상품-옵션조합형2 -->
                <!-- <div class="option-type option-dropdown">
                    <p class="option-txt">*상품을 구매하려면 필수 옵션을 작성하세요.</p>
                    <div class="dropdown-box">
                        <div class="select-type1" @click="openOption($event)">[상품1] 상품 옵션을 선택하세요</div>
                        <div class="option-drop">
                            <div class="drop-inner">
                                <p class="drop-tit">[상품1] 상품 옵션을 선택하세요</p>
                                <div class="dropdown-area">
                                    <button class="tit" @click="toggleOption($event)">옵션 1</button>
                                    <div class="option-btn" ref="optionMenu">
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)1</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)2</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)3</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)4</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)5</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)6</button>
                                    </div>
                                </div>
                                <div class="dropdown-area">
                                    <button class="tit" @click="toggleOption($event)">옵션 2</button>
                                    <div class="option-btn" ref="optionMenu">
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                    </div>
                                </div>
                                <div class="dropdown-area">
                                    <button class="tit" @click="toggleOption($event)">옵션 3</button>
                                    <div class="option-btn" ref="optionMenu">
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                    </div>
                                </div>
                                <button type="button" class="drop-close" @click.prevent="closeOption($event)">
                                    <span class="screen-out">옵션 닫기 버튼</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- 일반상품-옵션선택형 -->
                <!-- <div class="option-type option-dropdown">
                    <p class="option-txt">*상품을 구매하려면 필수 옵션을 작성하세요.</p>
                    <div class="dropdown-box">
                        <div class="select-type1" @click="openOption($event)">[상품1] 상품 옵션을 선택하세요</div>
                        <div class="option-drop">
                            <div class="drop-inner">
                                <p class="drop-tit">[상품1] 상품 옵션을 선택하세요</p>
                                <div class="dropdown-area">
                                    <button class="tit" @click="toggleOption($event)">옵션 1</button>
                                    <div class="option-btn" ref="optionMenu">
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)1</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)2</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)3</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)4</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)5</button>
                                        <button type="button">일러스트 : 심슨 쿠션(쇼파)6</button>
                                    </div>
                                </div>
                                <button type="button" class="drop-close" @click.prevent="closeOption($event)">
                                    <span class="screen-out">옵션 닫기 버튼</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div> -->

                <!-- 일반상품-옵션미사용 -->
                <!-- <div class="option-type">
                    <div class="quantity-box">
                        <div class="btn-quantity-box">
                            <button type="button" class="btn-minus">-</button>
                            <input type="number" title="수량" value="1" class="number">
                            <button type="button" class="btn-plus">+</button>
                        </div>
                    </div>
                </div> -->
                <!-- 일반상품일 경우 노출 end -->

                <!-- 옵션/수량 기능있는 경우 -->
                <div class="item-option" v-if="hasOption">
                    <div class="form-line">
                        <select name="" id="" class="select-basic">
                            <option value="">옵션01</option>
                            <option value="">옵션02</option>
                            <option value="">옵션03</option>
                        </select>
                    </div>
                    <div class="quantity-box">
                        <div class="btn-quantity-box">
                            <button type="button" class="btn-minus">-</button>
                            <input type="number" title="수량" value="1" class="number">
                            <button type="button" class="btn-plus">+</button>
                        </div>
                    </div>
                </div>

                <!-- 옵션 리스트  -->
                <div class="option-list">
                    <ul class="list-in">
                        <li>
                            <div class="wrap-tit">
                                <p class="option-tit">
                                    <span class="prd-num">상품<span>03</span> </span>
                                    앙버터 부쉬맨 120g 1박스(10개)
                                </p>
                                <div class="btn-item-delete"></div>
                            </div>
                            <p class="option">[옵션1] 옵션명이 들어가는 영역 옵션명이 들어가는 영역 +22,000원 추가</p>
                            <p class="option">[추가상품] 추가상품명이 들어가는 영역</p>
                            <div class="price-wrap">
                                <div class="quantity-box">
                                    <div class="btn-quantity-box">
                                        <button type="button" class="btn-minus">-</button>
                                        <input type="number" title="수량" value="1" class="number">
                                        <button type="button" class="btn-plus">+</button>
                                    </div>
                                </div>
                                <p class="option-price"><span>299,000</span>원</p>
                            </div>
                        </li>
                        <li>
                            <div class="wrap-tit">
                                <p class="option-tit">
                                    <span class="prd-num">상품<span>03</span> </span>
                                    앙버터 부쉬맨 120g 1박스(10개)
                                </p>
                                <div class="btn-item-delete"></div>
                            </div>
                            <div class="price-wrap">
                                <div class="quantity-box">
                                    <div class="btn-quantity-box">
                                        <button type="button" class="btn-minus">-</button>
                                        <input type="number" title="수량" value="1" class="number">
                                        <button type="button" class="btn-plus">+</button>
                                    </div>
                                </div>
                                <p class="option-price"><span>299,000</span>원</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- 옵션 합계 -->
                <div class="option-total-amount">
                    <span>합계</span>
                    <div class="total-amount">
                        <span>11.5kg</span>
                        <span class="">3,289,000<b>원</b></span>
                    </div>
                </div>

                <div class="btn-wrap">
                    <!--
                        20231013
                        선택상품 담기 버튼 disabled 상태 추가
                    -->
                    <button type="button" class="btn btn-default" v-if="meat">선택상품 담기</button>
                    <button type="button" class="btn btn-default" v-if="!meat">장바구니 담기</button>
                    <button type="button" class="btn btn-primary">바로구매</button>
                </div>
            </article>

        </section>
        <!-- 아이템 상세 -->
        <section class="item-detail">
            <article class="item-detail-left">
                <ul class="item-detail-tab">
                    <li :class="{ 'on': tabIndex === 0 }" @click="tabIndex = 0"><span>상세정보</span></li>
                    <li :class="{ 'on': tabIndex === 1 }" @click="tabIndex = 1"><span>배송안내</span></li>
                    <li :class="{ 'on': tabIndex === 2 }" @click="tabIndex = 2"><span>취소·반품 안내</span></li>
                </ul>
                <div class="item-detail-contents">
                    <item-detail-product-info v-show="tabIndex === 0" />
                    <item-detail-shipping-info v-show="tabIndex === 1" />
                    <item-detail-refund-info v-show="tabIndex === 2" />
                </div>
            </article>
            <article class="item-detail-right">
                <item-detail-aside-choice-box v-if="meat" :class="{ 'fixed': isFixed, 'bottom': isBottom }" />
                <item-detail-aside-choice-general v-if="!meat" :class="{ 'fixed': isFixed, 'bottom': isBottom }" />
            </article>
        </section>

        <!-- 등심이미지보기 팝업 -->
        <modal-image-modal :imageModal="imageModal" @modalClose="imageModal.modalShow = false">
            <img src="~/static/images/img_item_sample_02.png" alt="">
        </modal-image-modal>
        <!-- 이력번호 팝업 -->

        <!-- 쿠폰다운로드 팝업 -->
        <modal-default :modalInfo="couponModal.modalInfo" :modalShow="couponModal.modalShow">
            <div class="modal-content">
                <button class="btn btn-secondary">
                    <img src="~/assets/images/common/ico_download.png">
                    다운로드 가능쿠폰 모두받기
                </button>
                <ul class="down-coupon-wrap">
                    <li v-for="(item, index) in couponList" :key="'coupon_' + index">
                        <div class="coupon-modal-info">
                            <strong>{{ item.title }}</strong>
                            <p class="desc">{{ item.desc }}</p>
                            <p>{{ item.condition }}</p>
                            <p>{{ item.period }}</p>
                        </div>
                        <div>
                            <button type="button" class="btn btn-black btn-coupon-down">
                                쿠폰받기<img src="~/assets/images/common/ico_download.png">
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
            <etc-pagination />
        </modal-default>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default {
    props: {
        toolTip: {
            type: Boolean,
        },
    },
    data() {
        return {
            activeIndex: 0,
            imageModal: {
            },
            processModal: {
            },
            sellerInfo: {
                link: "",
            },
            toolTipDelivery: {
                show: false,
                title: "출고예정일관련",
            },
            couponModal: {
                modalInfo: {
                    modalTitle: "다운로드 가능쿠폰",
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            couponList: [
                {
                    name: '상품 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28'
                },
                {
                    name: '주문서 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    accent: true
                },
                {
                    name: '상품 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28'
                },
                {
                    name: '상품 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28'
                },
                {
                    name: '주문서 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    accent: true
                },
                {
                    name: '주문서 쿠폰',
                    sale: '20',
                    title: '신규회원 PB상품 20% 할인쿠폰 신규회원 PB상품 20% 할인쿠폰',
                    desc: '쿠폰설명이 들어오는 자리입니다.',
                    condition: '100,000 원 이상 구매 시 사용가능',
                    period: '2023-06-28 ~ 2023-07-28',
                    accent: true
                },

            ],
            thumbnailSwiper: null,
            thumbnailListSwiper: null,
            tabIndex: 0,
            alertInfo01: {
                message: '내용내용',
                // alertType: 'ALERT',
                alertType: 'CONFIRM',
            },
            meat: true, // 육류일때
            hasOption: true, // 옵션수량기능 가지고 있을 때
            // itemThumbnail: [
            //     require("~/static/images/img_item_sample_01.png"),
            //     require("~/static/images/img_item_sample_02.png"),
            //     require("~/static/images/img_item_sample_01.png"),
            //     require("~/static/images/img_item_sample_02.png"),
            //     require("~/static/images/img_item_sample_01.png"),
            //     require("~/static/images/img_item_sample_02.png"),
            //     require("~/static/images/img_item_sample_01.png"),
            //     require("~/static/images/img_item_sample_02.png"),
            // ],
            soldOut: false, //true  false
            imagesType: true,
            logo: require("~/assets/images/sample/img_brand_sample_01.png"),
            rank: '1++B',
            items: [
                {
                    thumbnail: require("~/static/images/img_item_sample_01.png"),
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
                    thumbnail: require("~/static/images/img_test_sample_03.png"),
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
                {
                    thumbnail: require("~/static/images/img_item_sample_01.png"),
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
                {
                    thumbnail: require("~/static/images/img_item_sample_02.png"),
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
                {
                    thumbnail: require("~/static/images/img_item_sample_01.png"),
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
                {
                    thumbnail: require("~/static/images/img_item_sample_02.png"),
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
                {
                    thumbnail: require("~/static/images/img_test_sample_02.png"),
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
                {
                    thumbnail: require("~/static/images/img_item_sample_02.png"),
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
                {
                    thumbnail: require("~/static/images/img_test_sample_01.png"),
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
                {
                    thumbnail: require("~/static/images/img_item_sample_02.png"),
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
            isFixed: false,
            isBottom: false,
            cartFn: false,

        }
    },

    mounted() {
        this.initSwipers();
        window.addEventListener('scroll', this.handleScroll);
        this.getwindowWidth()
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        getwindowWidth() {
            let windowWidth = window.outerWidth;
            if (windowWidth <= 768) {
                this.isFixed = true
                this.isBottom = false;
            }
        },
        handleScroll() {

            let windowWidth = window.outerWidth;
            if (windowWidth > 768) {
                const target = this.$refs.target;
                const rect = target.getBoundingClientRect();
                const height = -rect.height - 300;

                this.isFixed = rect.top !== 0 && height >= rect.top;
            } else {
                this.isFixed = true
            }

            const documentHeight = document.documentElement.scrollHeight;
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            if (windowHeight < 1300 && scrollPosition + windowHeight >= documentHeight - 50) {
                this.isBottom = true;
            } else {

            }
        },
        // scroll event 20231004
        headerFixed() {
            let windowWidth = window.outerWidth

            if (windowWidth < 768) {
                if (window.scrollY > 20) {
                    document.querySelector("header").id = "header-fixed"
                } else {
                    document.querySelector("header").removeAttribute('id')
                }
            }
        },
        //thumbnailSwiper
        initSwipers() {
            // this.thumbnailSwiper = new Swiper(this.$refs.ThumbsOne, {
            this.thumbnailSwiper = new Swiper(".thumbnail-swiper", {
                slidesPerView: 1,
                spaceBetween: 0,
                slidesPerGroup: 1,
                pagination: {
                    el: ".common-control  .swiper-pagination",
                    type: "fraction",
                    formatFractionCurrent: function (number) {
                        return ("0" + number).slice(-2);
                    },
                    formatFractionTotal: function (number) {
                        return ("0" + number).slice(-2);
                    },
                    renderFraction: function (currentClass, totalClass) {
                        return '<span class="' + currentClass + '"></span>' + "&nbsp;/&nbsp;" + '<span class="' + totalClass + '"></span>';
                    },
                },
                on: {
                    slideChange: () => {
                        this.activeIndex = this.thumbnailSwiper.activeIndex;
                        this.thumbnailListSwiper.slideTo(this.activeIndex);
                        console.log(`1개짜리 :  ${this.activeIndex}`);

                    },
                },
            });

            // thumbnailListSwiper
            this.thumbnailListSwiper = new Swiper(".thumbnail-list-swiper", {
                slidesPerView: 5,
                spaceBetween: 0,
                slidesPerGroup: 1,
                navigation: {
                    nextEl: " .common-control .swiper-button-next",
                    prevEl: " .common-control .swiper-button-prev",
                },
                clickable: true,
                breakpoints: {
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 6,
                    },
                    1023: {
                        slidesPerView: 5,
                        spaceBetween: 6,
                    },
                },
                on: {
                    slideChange: () => {
                        this.activeIndex = this.thumbnailListSwiper.activeIndex;
                        this.thumbnailSwiper.slideTo(this.activeIndex);
                    },
                },
            });

        },

        activateSlide(index) {
            console.log(`this.activeIndex ${this.activeIndex}`);
            this.activeIndex = index;
            this.thumbnailListSwiper.slideTo(index);
            this.thumbnailSwiper.slideTo(index);

            const slideElements = this.$refs.ThumbsList
            slideElements.forEach((element, idx) => {
                if (idx === index) {
                    element.classList.add("swiper-slide-active");
                } else {
                    element.classList.remove("swiper-slide-active");
                }
            });
        },

        // 드롭다운
        openOption(e) {
            e.target.nextElementSibling.classList.add("on")
        },
        closeOption(e) {
            const optionMenu = this.$refs.optionMenu
            optionMenu.classList.remove("on")
            e.target.parentNode.parentNode.classList.remove("on")
        },
        toggleOption(e) {
            console.log(e.target.nextElementSibling)
            const optionMenu = e.target.nextElementSibling
            optionMenu.classList.toggle("on")
        },
    },

}
</script>
<style>
@import url(~/assets/css/page/item.css);

.item-info-container .btn-wrap .btn.disabled {
    color: #b2b2b2;
    border: solid 1px #e1e1e1;
    background-color: #fafafa;
    border-color: transparent;
    cursor: none;
    pointer-events: none;
    font-weight: 600;
    font-size: 1.8rem;
}


#item-detail-view .thumbnail-swiper .item-thumbnail .top-left {
    width: 8.6rem;
    height: 8.6rem;
    font-size: 2.6rem;
}

#item-detail-view .item-info-container .item-thumbnail {
    margin-bottom: 0;
}

.item-info-thumbnail {
    position: relative;
}

.item-thumbnail.above {
    position: unset;
    overflow: visible;
    z-index: 2;
    border: none;
}

.item-thumbnail.above .item-thumbnail-area {
    position: unset;
}

.item-thumbnail.above .item-thumbnail-area p {
    z-index: 2;
}

.sold-out .sold-out-wrap {
    z-index: 3;
}

#item-detail-view .item-info-table.item-info-price tr {
    margin-bottom: 1.8rem;
}

#item-detail-view .item-info-table.item-info-price tr.weight {
    margin-bottom: 1.4rem;
}



@media (min-width:991px) {
    #item-detail-view .coupon-modal .modal-body {
        padding: 3rem 4rem 3rem !important;
    }
}

@media (min-width:768px) {
    #item-detail-view .item-info-table.item-info-process .delivery .sells-info .tooltip {
        top: 0;
        left: 100%;
        transform: translate(-10px, -100%);
    }


    #item-detail-view .item-info-table.item-info-price .sells-accent .sells-info {
        position: relative;
        z-index: 10;
    }

    #item-detail-view .basic-item-list.another-item-list span.sells-info.tooltip-wrap {
        z-index: 0;
    }

    #item-detail-view .basic-item-list.another-item-list span.sells-info.tooltip-wrap.above {
        z-index: 10;
    }

}

@media (max-width:767px) {
    #item-detail-view .thumbnail-swiper .item-thumbnail {
        border-radius: 0;
        border: none;
        margin-bottom: 0;
    }

    #item-detail-view .item-thumbnail .top-left {
        border-top-left-radius: 0;
    }

    #item-detail-view .thumbnail-swiper .item-thumbnail .top-left {
        display: none;
    }

    .sold-out .sold-out-wrap {
        border-radius: 0;
    }

    #item-detail-view .thumbnail-swiper {
        border: none;
    }


    #item-detail-view .item-info-table.item-info-process .delivery .sells-info {
        position: relative;
        z-index: 9;
    }

    #item-detail-view .item-info-table.item-info-process .delivery .sells-info .tooltip,
    #item-detail-view .item-info-table.item-info-price .sells-accent .sells-info .tooltip-benefit-container {
        max-width: 36rem;
        transform: translate(10px, 10px);

    }

    #item-detail-view .item-detail-right {
        z-index: 11;
    }

    #item-detail-view .aside-content.fixed.hide {
        padding: 0;
    }

    #item-detail-view .aside-content.fixed.hide .aside-choice-box .aside-footer {
        position: relative;
        z-index: 1;
    }

    .aside-content.hide .aside-amount {
        margin-bottom: 0;
    }

    .aside-content.hide .btn-wrap {
        padding: 0 1.6rem 1rem;
    }

    .basic-item-list .item-price>p {
        position: relative;
        z-index: 0;
    }

    .aside-amount .total-price {
        margin-top: 0;
    }

    .basic-item-list .item-price>.sells-info.tooltip-wrap {
        position: relative;
        z-index: 1;
    }

    .basic-item-list .item-price>.sells-info.tooltip-wrap.above {
        position: relative;
        z-index: 2;
    }

    #item-detail-view .item-detail li.above .sells-info.tooltip-wrap.above {
        position: relative;
    }


    #item-detail-view .item-detail li.above>.tooltip.mobile {
        position: absolute;
        top: unset;
        right: 0;
        bottom: 0;
        width: 32rem;
        transform: translate(0, 78%);
    }


    .basic-item-list .item-price-group .item-price {
        z-index: unset;
    }

    #item-detail-view .item-info-table.item-info-price .sells-accent .sells-info {
        z-index: 10;
    }

    #item-detail-view .item-info-price-default div:nth-child(2) {
        position: relative;
        z-index: 11;
    }

    #item-detail-view .item-info-price-default .sells-info .tooltip {
        top: 2.4rem;
        right: 0;
        transform: translateX(-30%);
        max-width: 32rem;
    }

    #item-detail-view .item-info-table.item-info-price .sells-accent .sells-info .tooltip-benefit-container.pc {
        display: none !important;
    }

    #item-detail-view .item-info-desc {
        position: relative;
    }


    #item-detail-view .item-info-desc>.tooltip.tooltip-benefit-container.mobile {
        bottom: 0;
        left: 50%;
        transform: translate(-50%, calc(-50% + -20px));
    }

    #item-detail-view .item-info-desc {
        position: relative;
    }


    #item-detail-view .item-info-desc>.mobile>.tooltip {
        left: 50%;
        transform: translateX(-50%);
    }

    #item-detail-view .item-info-desc>.mobile>.tooltip-benefit-container {
        left: 50%;
        transform: translate(-50%, -40px);
    }

}

@media (max-width:480px) {



    #item-detail-view .item-info-table.item-info-price .sells-accent .sells-info .tooltip-benefit-container {
        position: absolute;
        top: 28px;
        right: unset;
        left: 0;
        transform: translateX(-47.5%);
        max-width: 36rem;
    }


    #item-detail-view .item-info-table.item-info-process .delivery .sells-info .tooltip {
        z-index: 9;
        transform: translateX(-45%);
        max-width: 36rem;

    }



}
</style>
