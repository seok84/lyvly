<template>
    <div class="mypage-view inquiry-item-page">
        <div class="content-title">주문/배송 상세조회</div>
        <!-- 주문번호/(거래명세서||계산서) -->
        <div class="order-number-wrap">
            <div class="order-number">
                <p>주문번호<span>K12345678901349</span></p>
                <p>2023-12-17 12:00:00</p>
            </div>
            <div class="statement-wrap">
                <div class="statement">거래명세서</div>
                <div class="statement" @click="taxBillModal.modalShow = true">계산서</div>
            </div>
            <!-- <div class="statement">계산서</div> -->
        </div>
        <!-- 신선물류 컨텐츠 -->
        <dl class="accordion-list">
            <!-- 신선물류 총 합계 -->
            <dt class="list-tit fresh" @click="toggleList($event)">
                <p>신선물류 : 8건</p>
                <p>
                    <span class="price">
                        상품 999,999,999 + 배송비 999,999원 = <br class="mobile" /><b>1,521,000원</b>
                    </span>
                    <span>
                        <img src="~/assets/images/common/arrow/ico_arr_accordion.png" alt="열기/닫기 화살표">
                    </span>
                </p>
            </dt>
            <!-- 신선물류 리스트 -->
            <dd class="list-wrap">
                <!-- 브랜드1 -->
                <div class="accordion-list">
                    <!-- 브랜드명-->
                    <div class="list-tit brand" @click="toggleList($event)">
                        <p>농협PB : N건</p>
                        <p>
                            <span class="price">
                                상품 999,999,999 + 배송비 999,999원 = <b>1,521,000원</b>
                            </span>
                            <span>
                                <img src="~/assets/images/common/arrow/ico_arr_gray_top.png" alt="열기/닫기 화살표">
                            </span>
                        </p>
                    </div>
                    <!-- 브랜드 리스트 -->
                    <div class="list-wrap">
                        <!-- 배송 알림 -->
                        <div class="accordion-notice">
                            <p>
                                자체차량 냉장 직배송/CJ대한통운 냉장 직배송
                            </p>
                            <p class="text-blue">
                                <span>
                                    오늘 밤 10시 전까지 결제 시 <br class="mobile">06/22(목) 출고예정
                                    <span class="sells-info tooltip-wrap">
                                        <i @click="showTooltip['duedate'] = true">?</i>
                                        <article class="tooltip tooltip-duedate-wrap" v-if="showTooltip['duedate']">
                                            <div class="tooltip-close" @click="showTooltip['duedate'] = false"></div>
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
                        </div>
                        <!-- 리스트 -->
                        <div>
                            <!-- 결제완료 -->
                            <ul class="order-list-wrap">
                                <li class="order-list" v-for="(item, index) in item" :key="'cancel-' + index">
                                    <div class="row2">
                                        <div class="item-thumbnail">
                                            <nuxt-link to="/">
                                                <img class="thumbnail" :src="item.thumbnail.thumbnail" alt="썸네일">
                                            </nuxt-link>
                                        </div>
                                        <div class="item-info">
                                            <!-- 태그 -->
                                            <ul class="item-badge">
                                                <li class="badge badge-rank"><span>1++B</span></li>
                                                <li class="badge badge-fat no8"><span>N0.8</span></li>
                                                <li class="badge badge-frozen">
                                                    <span>
                                                        <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                    </span>
                                                    <span>냉동</span>
                                                </li>
                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                            </ul>
                                            <!-- 정보 -->
                                            <div class="item-detail">
                                                <div class="item-desc">
                                                    <div class="item-title">
                                                        <p class="brand">{{ item.info.title.brand }}</p>
                                                        <nuxt-link to="/">
                                                            <p class="main">{{ item.info.title.main }}</p>
                                                            <p class="sub">{{ item.info.title.sub }}</p>
                                                        </nuxt-link>
                                                    </div>
                                                    <div class="item-process">
                                                        <p class="process process-number">
                                                            <span>이력/가공/도축</span>
                                                            <span @click="processModal.modalShow = true">00215719766</span>
                                                        </p>

                                                    </div>
                                                    <div class="certificate" @click="certificateModal.modalShow = true">
                                                        등급판정확인서/도축검사증명서</div>
                                                </div>
                                                <div class="item-desc2 weight">99.9kg / 1개</div>
                                                <div class="item-desc2 sell">
                                                    <div class="sell-dc">
                                                        <span class="sell-price">판매가 175,937</span>
                                                        <span class="saled-item">상품할인 112,497원</span>
                                                        <span class="user-coupon">(우수고객쿠폰)쿠폰할인 -29,000원</span>
                                                    </div>
                                                    <span class="sell-price">판매가 1,057,213원</span>
                                                    <span class="reserves">적립금 : 30,000원</span>
                                                </div>
                                                <div class="item-desc2 status">
                                                    결제완료
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row3 shipping-info">
                                        <p>
                                            배송정보 : 무료배송 (CJ대한통운 냉장 직배송)
                                        </p>
                                        <div class="btn-wrap">
                                            <span class="btn btn-small btn-default w50">배송조회</span>
                                            <span class="btn btn-small btn-default w50"
                                                @click="orderReturnModal.modalShow = true">반품신청</span>
                                            <span class="btn btn-small btn-secondary w100"
                                                @click="reviewModal.modalShow = true">후기작성</span>

                                            <!-- <span class="btn btn-small btn-default w100" @click="orderCancelModal.modalShow = true">주문취소</span> -->
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <!-- 배송준비중 -->
                            <ul class="order-list-wrap">
                                <li class="order-list" v-for="(item, index) in item" :key="'cancel-' + index">
                                    <div class="row2">
                                        <div class="item-thumbnail">
                                            <nuxt-link to="/">
                                                <img class="thumbnail" :src="item.thumbnail.thumbnail" alt="썸네일">
                                            </nuxt-link>
                                        </div>
                                        <div class="item-info">
                                            <!-- 태그 -->
                                            <ul class="item-badge">
                                                <li class="badge badge-rank"><span>1++B</span></li>
                                                <li class="badge badge-fat no8"><span>N0.8</span></li>
                                                <li class="badge badge-frozen">
                                                    <span>
                                                        <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                    </span>
                                                    <span>냉동</span>
                                                </li>
                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                            </ul>
                                            <!-- 정보 -->
                                            <div class="item-detail">
                                                <div class="item-desc">
                                                    <div class="item-title">
                                                        <p class="brand">{{ item.info.title.brand }}</p>
                                                        <nuxt-link to="/">
                                                            <p class="main">{{ item.info.title.main }}</p>
                                                            <p class="sub">{{ item.info.title.sub }}</p>
                                                        </nuxt-link>
                                                    </div>
                                                    <div class="item-process">
                                                        <p class="process process-number">
                                                            <span>이력/가공/도축</span>
                                                            <span @click="processModal.modalShow = true">00215719766</span>
                                                        </p>

                                                    </div>
                                                    <div class="certificate" @click="certificateModal.modalShow = true">
                                                        등급판정확인서/도축검사증명서</div>
                                                </div>
                                                <div class="item-desc2 weight">99.9kg / 1개</div>
                                                <div class="item-desc2 sell">
                                                    <div class="sell-dc">
                                                        <span class="sell-price">판매가 175,937</span>
                                                        <span class="saled-item">상품할인 112,497원</span>
                                                        <span class="user-coupon">(우수고객쿠폰)쿠폰할인 -29,000원</span>
                                                    </div>
                                                    <span class="sell-price">판매가 1,057,213원</span>
                                                    <span class="reserves">적립금 : 30,000원</span>
                                                </div>
                                                <div class="item-desc2 status">
                                                    배송준비중
                                                    <span class="sells-info tooltip-wrap preparing">
                                                        <i @click="showTooltip['preparing'] = true">?</i>
                                                        <article class="tooltip tooltip-preparing"
                                                            v-if="showTooltip['preparing']">
                                                            <div class="tooltip-close"
                                                                @click="showTooltip['preparing'] = false"></div>
                                                            <div class="tooltip-title">주문 취소 관련 안내</div>
                                                            <div class="tooltip-body tooltip-preparing-wrap">
                                                                <p>
                                                                    [배송준비중] 상태에서는 [주문취소]시,<br>
                                                                    <b>고객센터로 별도 문의</b>가 필요합니다.
                                                                </p>
                                                                <p>
                                                                    고객센터 : 1588-4192로 문의 또는<br>
                                                                    카카오톡/1:1문의를 이용해주세요.
                                                                </p>
                                                            </div>
                                                        </article>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row3 shipping-info">
                                        <p>
                                            배송정보 : 무료배송 (CJ대한통운 냉장 직배송)
                                        </p>
                                        <div class="btn-wrap">
                                            <!-- <span class="btn btn-small btn-default w50">배송조회</span>   
                                            <span class="btn btn-small btn-default w50" @click="orderReturnModal.modalShow = true">반품신청</span>
                                            <span class="btn btn-small btn-secondary w100" @click="reviewModal.modalShow = true">후기작성</span> -->
                                            <span class="btn btn-small btn-default w100"
                                                @click="orderCancelModal.modalShow = true">주문취소</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <!-- 배송중 -->
                            <ul class="order-list-wrap">
                                <li class="order-list" v-for="(item, index) in item" :key="'cancel-' + index">
                                    <div class="row2">
                                        <div class="item-thumbnail">
                                            <nuxt-link to="/">
                                                <img class="thumbnail" :src="item.thumbnail.thumbnail" alt="썸네일">
                                            </nuxt-link>
                                        </div>
                                        <div class="item-info">
                                            <!-- 태그 -->
                                            <ul class="item-badge">
                                                <li class="badge badge-rank"><span>1++B</span></li>
                                                <li class="badge badge-fat no8"><span>N0.8</span></li>
                                                <li class="badge badge-frozen">
                                                    <span>
                                                        <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                    </span>
                                                    <span>냉동</span>
                                                </li>
                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                            </ul>
                                            <!-- 정보 -->
                                            <div class="item-detail">
                                                <div class="item-desc">
                                                    <div class="item-title">
                                                        <p class="brand">{{ item.info.title.brand }}</p>
                                                        <nuxt-link to="/">
                                                            <p class="main">{{ item.info.title.main }}</p>
                                                            <p class="sub">{{ item.info.title.sub }}</p>
                                                        </nuxt-link>
                                                    </div>
                                                    <div class="item-process">
                                                        <p class="process process-number">
                                                            <span>이력/가공/도축</span>
                                                            <span @click="processModal.modalShow = true">00215719766</span>
                                                        </p>

                                                    </div>
                                                    <div class="certificate" @click="certificateModal.modalShow = true">
                                                        등급판정확인서/도축검사증명서</div>
                                                </div>
                                                <div class="item-desc2 weight">99.9kg / 1개</div>
                                                <div class="item-desc2 sell">
                                                    <!-- <div class="sell-dc">
                                                                                                               <span class="sell-price">판매가 175,937</span>
                                                        <span class="saled-item">상품할인 112,497원</span>
                                                        <span class="user-coupon">(우수고객쿠폰)쿠폰할인 -29,000원</span>
                                                    </div> -->
                                                    판매가 1,057,213원 <span></span>
                                                </div>
                                                <div class="item-desc2 status">배송중<span><a href="/">CJ대한통운</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row3 shipping-info">
                                        <p>
                                            배송정보 : 무료배송 (CJ대한통운 냉장 직배송)
                                        </p>
                                        <!-- <div class="btn-wrap"> -->
                                        <!-- <span class="btn btn-small btn-default w50">배송조회</span>
                                            <span class="btn btn-small btn-default w50" @click="orderReturnModal.modalShow = true">반품신청</span>
                                            <span class="btn btn-small btn-secondary w100" @click="reviewModal.modalShow = true">후기작성</span> -->
                                        <!-- <span class="btn btn-small btn-default w100" @click="orderCancelModal.modalShow = true">주문취소</span> -->
                                        <!-- </div> -->
                                    </div>
                                </li>
                            </ul>
                            <!-- 반품완료 -->
                            <ul class="order-list-wrap">
                                <li class="order-list" v-for="(item, index) in item" :key="'cancel-' + index">
                                    <div class="row2">
                                        <div class="item-thumbnail">
                                            <nuxt-link to="/">
                                                <img class="thumbnail" :src="item.thumbnail.thumbnail" alt="썸네일">
                                            </nuxt-link>
                                        </div>
                                        <div class="item-info">
                                            <!-- 태그 -->
                                            <ul class="item-badge">
                                                <li class="badge badge-rank"><span>1++B</span></li>
                                                <li class="badge badge-fat no8"><span>N0.8</span></li>
                                                <li class="badge badge-frozen">
                                                    <span>
                                                        <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                    </span>
                                                    <span>냉동</span>
                                                </li>
                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                            </ul>
                                            <!-- 정보 -->
                                            <div class="item-detail">
                                                <div class="item-desc">
                                                    <div class="item-title">
                                                        <p class="brand">{{ item.info.title.brand }}</p>
                                                        <nuxt-link to="/">
                                                            <p class="main">{{ item.info.title.main }}</p>
                                                            <p class="sub">{{ item.info.title.sub }}</p>
                                                        </nuxt-link>
                                                    </div>
                                                    <div class="item-process">
                                                        <p class="process process-number">
                                                            <span>이력/가공/도축</span>
                                                            <span @click="processModal.modalShow = true">00215719766</span>
                                                        </p>

                                                    </div>
                                                    <div class="certificate" @click="certificateModal.modalShow = true">
                                                        등급판정확인서/도축검사증명서</div>
                                                </div>
                                                <div class="item-desc2 weight">99.9kg / 1개</div>
                                                <div class="item-desc2 sell">
                                                    <div class="sell-dc">
                                                        <span class="sell-price">판매가 175,937</span>
                                                        <span class="saled-item">상품할인 112,497원</span>
                                                        <span class="user-coupon">(우수고객쿠폰)쿠폰할인 -29,000원</span>
                                                    </div>
                                                    판매가 1,057,213원 <span></span>
                                                </div>
                                                <div class="item-desc2 status">반품완료<span><a href="/">CJ대한통운</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row3 shipping-info">
                                        <p>
                                            배송정보 : 무료배송 (CJ대한통운 냉장 직배송)
                                        </p>
                                        <div class="btn-wrap">
                                            <span class="btn btn-small btn-default w50">배송조회</span>
                                            <span class="btn btn-small btn-default w50"
                                                @click="orderReturnModal.modalShow = true">반품신청</span>
                                            <span class="btn btn-small btn-secondary w100"
                                                @click="reviewModal.modalShow = true">후기작성</span>
                                            <!-- <span class="btn btn-small btn-default w100" @click="orderCancelModal.modalShow = true">주문취소</span> -->
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <!-- 반품처리중 -->
                            <ul class="order-list-wrap">
                                <li class="order-list" v-for="(item, index) in item" :key="'cancel-' + index">
                                    <div class="row2">
                                        <div class="item-thumbnail">
                                            <nuxt-link to="/">
                                                <img class="thumbnail" :src="item.thumbnail.thumbnail" alt="썸네일">
                                            </nuxt-link>
                                        </div>
                                        <div class="item-info">
                                            <!-- 태그 -->
                                            <ul class="item-badge">
                                                <li class="badge badge-rank"><span>1++B</span></li>
                                                <li class="badge badge-fat no8"><span>N0.8</span></li>
                                                <li class="badge badge-frozen">
                                                    <span>
                                                        <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                    </span>
                                                    <span>냉동</span>
                                                </li>
                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                            </ul>
                                            <!-- 정보 -->
                                            <div class="item-detail">
                                                <div class="item-desc">
                                                    <div class="item-title">
                                                        <p class="brand">{{ item.info.title.brand }}</p>
                                                        <nuxt-link to="/">
                                                            <p class="main">{{ item.info.title.main }}</p>
                                                            <p class="sub">{{ item.info.title.sub }}</p>
                                                        </nuxt-link>
                                                    </div>
                                                    <div class="item-process">
                                                        <p class="process process-number">
                                                            <span>이력/가공/도축</span>
                                                            <span @click="processModal.modalShow = true">00215719766</span>
                                                        </p>

                                                    </div>
                                                    <div class="certificate" @click="certificateModal.modalShow = true">
                                                        등급판정확인서/도축검사증명서</div>
                                                </div>
                                                <div class="item-desc2 weight">99.9kg / 1개</div>
                                                <div class="item-desc2 sell">
                                                    <div class="sell-dc">
                                                        <span class="sell-price">판매가 175,937</span>
                                                        <span class="saled-item">상품할인 112,497원</span>
                                                        <span class="user-coupon">(우수고객쿠폰)쿠폰할인 -29,000원</span>
                                                    </div>
                                                    <span class="sell-price">판매가 1,057,213원</span>
                                                    <span class="reserves">적립금 : 30,000원</span>
                                                </div>
                                                <div class="item-desc2 status">반품처리중<span><a href="/">CJ대한통운</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row3 shipping-info">
                                        <p>
                                            배송정보 : 무료배송 (CJ대한통운 냉장 직배송)
                                        </p>
                                        <div class="btn-wrap">
                                            <span class="btn btn-small btn-default w50">배송조회</span>
                                            <span class="btn btn-small btn-default w50"
                                                @click="orderReturnModal.modalShow = true">반품신청</span>
                                            <span class="btn btn-small btn-secondary w100"
                                                @click="reviewModal.modalShow = true">후기작성</span>
                                            <!-- <span class="btn btn-small btn-default w100" @click="orderCancelModal.modalShow = true">주문취소</span> -->
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <!-- 취소처리중 -->
                            <ul class="order-list-wrap">
                                <li class="order-list" v-for="(item, index) in item" :key="'cancel-' + index">
                                    <div class="row2">
                                        <div class="item-thumbnail">
                                            <nuxt-link to="/">
                                                <img class="thumbnail" :src="item.thumbnail.thumbnail" alt="썸네일">
                                            </nuxt-link>
                                        </div>
                                        <div class="item-info">
                                            <!-- 태그 -->
                                            <ul class="item-badge">
                                                <li class="badge badge-rank"><span>1++B</span></li>
                                                <li class="badge badge-fat no8"><span>N0.8</span></li>
                                                <li class="badge badge-frozen">
                                                    <span>
                                                        <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                    </span>
                                                    <span>냉동</span>
                                                </li>
                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                            </ul>
                                            <!-- 정보 -->
                                            <div class="item-detail">
                                                <div class="item-desc">
                                                    <div class="item-title">
                                                        <p class="brand">{{ item.info.title.brand }}</p>
                                                        <nuxt-link to="/">
                                                            <p class="main">{{ item.info.title.main }}</p>
                                                            <p class="sub">{{ item.info.title.sub }}</p>
                                                        </nuxt-link>
                                                    </div>
                                                    <div class="item-process">
                                                        <p class="process process-number">
                                                            <span>이력/가공/도축</span>
                                                            <span @click="processModal.modalShow = true">00215719766</span>
                                                        </p>

                                                    </div>
                                                    <div class="certificate" @click="certificateModal.modalShow = true">
                                                        등급판정확인서/도축검사증명서</div>
                                                </div>
                                                <div class="item-desc2 weight">99.9kg / 1개</div>
                                                <div class="item-desc2 sell">
                                                    <div class="sell-dc">
                                                        <span class="sell-price">판매가 175,937</span>
                                                        <span class="saled-item">상품할인 112,497원</span>
                                                        <span class="user-coupon">(우수고객쿠폰)쿠폰할인 -29,000원</span>
                                                    </div>
                                                    <span class="sell-price">판매가 1,057,213원</span>
                                                    <span class="reserves">적립금 : 30,000원</span>
                                                </div>
                                                <div class="item-desc2 status">취소처리중<span></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row3 shipping-info">
                                        <p>
                                            배송정보 : 무료배송 (CJ대한통운 냉장 직배송)
                                        </p>
                                        <div class="btn-wrap">
                                            <span class="btn btn-small btn-default w50">배송조회</span>
                                            <span class="btn btn-small btn-default w50"
                                                @click="orderReturnModal.modalShow = true">반품신청</span>
                                            <span class="btn btn-small btn-secondary w100"
                                                @click="reviewModal.modalShow = true">후기작성</span>
                                            <!-- <span class="btn btn-small btn-default w100" @click="orderCancelModal.modalShow = true">주문취소</span> -->
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <!-- 취소완료 -->
                            <ul class="order-list-wrap">
                                <li class="order-list" v-for="(item, index) in item" :key="'cancel-' + index">
                                    <div class="row2">
                                        <div class="item-thumbnail">
                                            <nuxt-link to="/">
                                                <img class="thumbnail" :src="item.thumbnail.thumbnail" alt="썸네일">
                                            </nuxt-link>
                                        </div>
                                        <div class="item-info">
                                            <!-- 태그 -->
                                            <ul class="item-badge">
                                                <li class="badge badge-rank"><span>1++B</span></li>
                                                <li class="badge badge-fat no8"><span>N0.8</span></li>
                                                <li class="badge badge-frozen">
                                                    <span>
                                                        <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                    </span>
                                                    <span>냉동</span>
                                                </li>
                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                            </ul>
                                            <!-- 정보 -->
                                            <div class="item-detail">
                                                <div class="item-desc">
                                                    <div class="item-title">
                                                        <p class="brand">{{ item.info.title.brand }}</p>
                                                        <nuxt-link to="/">
                                                            <p class="main">{{ item.info.title.main }}</p>
                                                            <p class="sub">{{ item.info.title.sub }}</p>
                                                        </nuxt-link>
                                                    </div>
                                                    <div class="item-process">
                                                        <p class="process process-number">
                                                            <span>이력/가공/도축</span>
                                                            <span @click="processModal.modalShow = true">00215719766</span>
                                                        </p>

                                                    </div>
                                                    <div class="certificate" @click="certificateModal.modalShow = true">
                                                        등급판정확인서/도축검사증명서</div>
                                                </div>
                                                <div class="item-desc2 weight">99.9kg / 1개</div>
                                                <div class="item-desc2 sell">판매가 1,057,213원<span></span></div>
                                                <div class="item-desc2 status">취소완료<span></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row3 shipping-info">
                                        <p>
                                            배송정보 : 무료배송 (CJ대한통운 냉장 직배송)
                                        </p>
                                        <div class="btn-wrap">
                                            <span class="btn btn-small btn-default w50">배송조회</span>
                                            <span class="btn btn-small btn-default w50"
                                                @click="orderReturnModal.modalShow = true">반품신청</span>
                                            <span class="btn btn-small btn-secondary w100"
                                                @click="reviewModal.modalShow = true">후기작성</span>
                                            <!-- <span class="btn btn-small btn-default w100" @click="orderCancelModal.modalShow = true">주문취소</span> -->
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </dd>
        </dl>

        <!-- 개별배송 컨텐츠 -->
        <dl class="accordion-list">
            <!-- 개별배송 총 합계 -->
            <dt class="list-tit individual" @click="toggleList($event)">
                <p>개별배송 :8건</p>
                <p>
                    <span class="price">
                        상품 999,999,999 + 배송비 999,999원 =<br class="mobile" /><b>1,521,000원</b>
                    </span>
                    <span>
                        <img src="~/assets/images/common/arrow/ico_arr_accordion.png" alt="열기/닫기 화살표">
                    </span>
                </p>
            </dt>
            <!-- 신선물류 리스트 -->
            <dd class="list-wrap">
                <!-- 브랜드1 -->
                <div class="accordion-list">
                    <!-- 브랜드명-->
                    <div class="list-tit brand" @click="toggleList($event)">
                        <p>농협PB : N건</p>
                        <p>
                            <span class="price">
                                상품 999,999,999 + 배송비 999,999원 = <b>1,521,000원</b>
                            </span>
                            <span>
                                <img src="~/assets/images/common/arrow/ico_arr_gray_top.png" alt="열기/닫기 화살표">
                            </span>
                        </p>
                    </div>
                    <!-- 브랜드 리스트 -->
                    <div class="list-wrap">
                        <!-- 배송 알림 -->
                        <div class="accordion-notice">
                            <p>
                                자체차량 냉장 직배송/CJ대한통운 냉장 직배송
                            </p>
                            <p class="text-blue">
                                <span>
                                    오늘 밤 10시 전까지 결제 시 <br class="mobile">06/22(목) 출고예정
                                    <span class="sells-info tooltip-wrap">
                                        <i @click="showTooltip['duedate'] = true">?</i>
                                        <article class="tooltip tooltip-duedate-wrap" v-if="showTooltip['duedate']">
                                            <div class="tooltip-close" @click="showTooltip['duedate'] = false"></div>
                                            <div class="tooltip-title">출고예정일 관련 안내</div>
                                            <div class="tooltip-body ">
                                                지역 및 상황에 따라 배송 방법 및 일정
                                                이 변경될 수 있습니다. <br>
                                                배송중 단계로 변경 시 상세 정보를 확
                                                인하실 수 있습니다.
                                            </div>
                                        </article>
                                    </span>
                                </span>

                            </p>
                        </div>
                        <!-- 리스트 -->
                        <div>
                            <ul class="order-list-wrap">
                                <li class="order-list" v-for="(item, index) in item" :key="'cancel-' + index">
                                    <div class="row2">
                                        <div class="item-thumbnail">
                                            <nuxt-link to="/">
                                                <img class="thumbnail" :src="item.thumbnail.thumbnail" alt="썸네일">
                                            </nuxt-link>
                                        </div>
                                        <div class="item-info">
                                            <!-- 태그 -->
                                            <ul class="item-badge">
                                                <li class="badge badge-rank"><span>1++B</span></li>
                                                <li class="badge badge-fat no8"><span>N0.8</span></li>
                                                <li class="badge badge-frozen">
                                                    <span>
                                                        <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                    </span>
                                                    <span>냉동</span>
                                                </li>
                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                            </ul>
                                            <!-- 정보 -->
                                            <div class="item-detail">
                                                <div class="item-desc">
                                                    <div class="item-title">
                                                        <p class="brand">{{ item.info.title.brand }}</p>
                                                        <nuxt-link to="/">
                                                            <p class="main">{{ item.info.title.main }}</p>
                                                            <p class="sub">{{ item.info.title.sub }}</p>
                                                        </nuxt-link>
                                                    </div>
                                                    <div class="item-process">
                                                        <p class="process process-number">
                                                            <span>이력/가공/도축</span>
                                                            <span @click="processModal.modalShow = true">00215719766</span>
                                                        </p>

                                                    </div>
                                                    <div class="certificate" @click="certificateModal.modalShow = true">
                                                        등급판정확인서/도축검사증명서</div>
                                                </div>
                                                <div class="item-desc2 weight">99.9kg / 1개</div>
                                                <div class="item-desc2 sell">
                                                    <div class="sell-dc">
                                                        <span class="sell-price">판매가 175,937</span>
                                                        <span class="saled-item">상품할인 112,497원</span>
                                                        <span class="user-coupon">(우수고객쿠폰)쿠폰할인 -29,000원</span>
                                                    </div>
                                                    <span class="sell-price">판매가 1,057,213원</span>
                                                    <span class="reserves">적립금 : 30,000원</span>
                                                </div>
                                                <div class="item-desc2 status">취소처리중<span><a href="/"></a></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row3 shipping-info">
                                        <p>
                                            배송정보 : 무료배송 (CJ대한통운 냉장 직배송)
                                        </p>
                                        <div class="btn-wrap">
                                            <span class="btn btn-small btn-default w50">배송조회</span>
                                            <span class="btn btn-small btn-default w50"
                                                @click="orderReturnModal.modalShow = true">반품신청</span>
                                            <span class="btn btn-small btn-secondary w100"
                                                @click="reviewModal.modalShow = true">후기작성</span>
                                            <!-- <span class="btn btn-small btn-default w100" @click="orderCancelModal.modalShow = true">주문취소</span> -->
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="order-list-wrap">
                                <li class="order-list" v-for="(item, index) in item" :key="'cancel-' + index">
                                    <div class="row2">
                                        <div class="item-thumbnail">
                                            <nuxt-link to="/">
                                                <img class="thumbnail" :src="item.thumbnail.thumbnail" alt="썸네일">
                                            </nuxt-link>
                                        </div>
                                        <div class="item-info">
                                            <!-- 태그 -->
                                            <ul class="item-badge">
                                                <li class="badge badge-rank"><span>1++B</span></li>
                                                <li class="badge badge-fat no8"><span>N0.8</span></li>
                                                <li class="badge badge-frozen">
                                                    <span>
                                                        <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                    </span>
                                                    <span>냉동</span>
                                                </li>
                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                            </ul>
                                            <!-- 정보 -->
                                            <div class="item-detail">
                                                <div class="item-desc">
                                                    <div class="item-title">
                                                        <p class="brand">{{ item.info.title.brand }}</p>
                                                        <nuxt-link to="/">
                                                            <p class="main">{{ item.info.title.main }}</p>
                                                            <p class="sub">{{ item.info.title.sub }}</p>
                                                        </nuxt-link>
                                                    </div>
                                                    <div class="item-process">
                                                        <p class="process process-number">
                                                            <span>이력/가공/도축</span>
                                                            <span @click="processModal.modalShow = true">00215719766</span>
                                                        </p>

                                                    </div>
                                                    <div class="certificate" @click="certificateModal.modalShow = true">
                                                        등급판정확인서/도축검사증명서</div>
                                                </div>
                                                <div class="item-desc2 weight">99.9kg / 1개</div>
                                                <div class="item-desc2 sell">
                                                    <div class="sell-dc">
                                                        <span class="sell-price">판매가 175,937</span>
                                                        <span class="saled-item">상품할인 112,497원</span>
                                                        <span class="user-coupon">(우수고객쿠폰)쿠폰할인 -29,000원</span>
                                                    </div>
                                                    <span class="sell-price">판매가 1,057,213원</span>
                                                    <span class="reserves">적립금 : 30,000원</span>
                                                </div>
                                                <div class="item-desc2 status">배송준비중
                                                    <span class="sells-info tooltip-wrap">
                                                        <i @click="showTooltip['preparing'] = true">?</i>
                                                        <article class="tooltip tooltip-preparing"
                                                            v-if="showTooltip['preparing']">
                                                            <div class="tooltip-close"
                                                                @click="showTooltip['preparing'] = false"></div>
                                                            <div class="tooltip-title">주문 취소 관련 안내</div>
                                                            <div class="tooltip-body tooltip-preparing-wrap">
                                                                <p>
                                                                    [배송준비중] 상태에서는 [주문취소]시,<br>
                                                                    <b>고객센터로 별도 문의</b>가 필요합니다.
                                                                </p>
                                                                <p>
                                                                    고객센터 : 1588-4192로 문의 또는<br>
                                                                    카카오톡/1:1문의를 이용해주세요.
                                                                </p>
                                                            </div>
                                                        </article>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row3 shipping-info">
                                        <p>
                                            배송정보 : 무료배송 (CJ대한통운 냉장 직배송)
                                        </p>
                                        <div class="btn-wrap">
                                            <span class="btn btn-small btn-default w50">배송조회</span>
                                            <span class="btn btn-small btn-default w50"
                                                @click="orderReturnModal.modalShow = true">반품신청</span>
                                            <span class="btn btn-small btn-secondary w100"
                                                @click="reviewModal.modalShow = true">후기작성</span>
                                            <!-- <span class="btn btn-small btn-default w100" @click="orderCancelModal.modalShow = true">주문취소</span> -->
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="order-list-wrap">
                                <li class="order-list" v-for="(item, index) in items" :key="'cancel-' + index">
                                    <div class="row2">
                                        <div class="item-thumbnail">
                                            <nuxt-link to="/">
                                                <img class="thumbnail" :src="item.thumbnail.thumbnail" alt="썸네일">
                                            </nuxt-link>
                                        </div>
                                        <div class="item-info">
                                            <!-- 태그 -->
                                            <ul class="item-badge">
                                                <li class="badge badge-rank"><span>1++B</span></li>
                                                <li class="badge badge-fat no8"><span>N0.8</span></li>
                                                <li class="badge badge-frozen">
                                                    <span>
                                                        <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                    </span>
                                                    <span>냉동</span>
                                                </li>
                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                            </ul>
                                            <!-- 정보 -->
                                            <div class="item-detail">
                                                <div class="item-desc">
                                                    <div class="item-title">
                                                        <p class="brand">{{ item.info.title.brand }}</p>
                                                        <nuxt-link to="/">
                                                            <p class="main">{{ item.info.title.main }}</p>
                                                            <p class="sub">{{ item.info.title.sub }}</p>
                                                        </nuxt-link>
                                                    </div>
                                                    <div class="item-process">
                                                        <p class="process process-number">
                                                            <span>이력/가공/도축</span>
                                                            <span @click="processModal.modalShow = true">00215719766</span>
                                                        </p>

                                                    </div>
                                                    <div class="certificate" @click="certificateModal.modalShow = true">
                                                        등급판정확인서/도축검사증명서</div>
                                                </div>
                                                <div class="item-desc2 weight">99.9kg / 1개</div>
                                                <div class="item-desc2 sell">
                                                    <div class="sell-dc">
                                                        <span class="sell-price">판매가 175,937</span>
                                                        <span class="saled-item">상품할인 112,497원</span>
                                                        <span class="user-coupon">(우수고객쿠폰)쿠폰할인 -29,000원</span>
                                                    </div>
                                                    <span class="sell-price">판매가 1,057,213원</span>
                                                    <span class="reserves">적립금 : 30,000원</span>
                                                </div>
                                                <div class="item-desc2 status">취소처리중<span><a href="/"></a></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row3 shipping-info">
                                        <p>
                                            배송정보 : 무료배송 (CJ대한통운 냉장 직배송)
                                        </p>
                                        <div class="btn-wrap">
                                            <span class="btn btn-small btn-default w50">배송조회</span>
                                            <span class="btn btn-small btn-default w50"
                                                @click="orderReturnModal.modalShow = true">반품신청</span>
                                            <span class="btn btn-small btn-secondary w100"
                                                @click="reviewModal.modalShow = true">후기작성</span>
                                            <!-- <span class="btn btn-small btn-default w100" @click="orderCancelModal.modalShow = true">주문취소</span> -->
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 브랜드2-->
                <div class="accordion-list">
                    <!-- 브랜드명-->
                    <div class="list-tit brand" @click="toggleList($event)">
                        <p>농협PB : N건</p>
                        <p>
                            <span class="price">
                                상품 999,999,999 + 배송비 999,999원 = <b>1,521,000원</b>
                            </span>
                            <span>
                                <img src="~/assets/images/common/arrow/ico_arr_gray_top.png" alt="열기/닫기 화살표">
                            </span>
                        </p>
                    </div>
                    <!-- 브랜드 리스트 -->
                    <div class="list-wrap">
                        <!-- 배송 알림 -->
                        <div class="accordion-notice">
                            <p>
                                자체차량 냉장 직배송/CJ대한통운 냉장 직배송
                            </p>
                            <p class="text-blue">
                                <span class="sells-info tooltip-wrap">
                                    <i @click="showTooltip['duedate'] = true">?</i>
                                    <article class="tooltip tooltip-duedate-wrap" v-if="showTooltip['duedate']">
                                        <div class="tooltip-close" @click="showTooltip['duedate'] = false"></div>
                                        <div class="tooltip-title">출고예정일 관련 안내</div>
                                        <div class="tooltip-body ">
                                            지역 및 상황에 따라 배송 방법 및 일정
                                            이 변경될 수 있습니다. <br>
                                            배송중 단계로 변경 시 상세 정보를 확
                                            인하실 수 있습니다.
                                        </div>
                                    </article>
                                </span>

                            </p>
                        </div>
                        <!-- 리스트 -->
                        <div>
                            <ul class="order-list-wrap">
                                <li class="order-list" v-for="(item, index) in item" :key="'cancel-' + index">
                                    <div class="row2">
                                        <div class="item-thumbnail">
                                            <nuxt-link to="/">
                                                <img class="thumbnail" :src="item.thumbnail.thumbnail" alt="썸네일">
                                            </nuxt-link>
                                        </div>
                                        <div class="item-info">
                                            <!-- 태그 -->
                                            <ul class="item-badge">
                                                <li class="badge badge-rank"><span>1++B</span></li>
                                                <li class="badge badge-fat no8"><span>N0.8</span></li>
                                                <li class="badge badge-frozen">
                                                    <span>
                                                        <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                    </span>
                                                    <span>냉동</span>
                                                </li>
                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                            </ul>
                                            <!-- 정보 -->
                                            <div class="item-detail">
                                                <div class="item-desc">
                                                    <div class="item-title">
                                                        <p class="brand">{{ item.info.title.brand }}</p>
                                                        <nuxt-link to="/">
                                                            <p class="main">{{ item.info.title.main }}</p>
                                                            <p class="sub">{{ item.info.title.sub }}</p>
                                                        </nuxt-link>
                                                    </div>
                                                    <div class="item-process">
                                                        <p class="process process-number">
                                                            <span>이력/가공/도축</span>
                                                            <span @click="processModal.modalShow = true">00215719766</span>
                                                        </p>

                                                    </div>
                                                    <div class="certificate" @click="certificateModal.modalShow = true">
                                                        등급판정확인서/도축검사증명서</div>
                                                </div>
                                                <div class="item-desc2 weight">99.9kg / 1개</div>
                                                <div class="item-desc2 sell">
                                                    <div class="sell-dc">
                                                        <span class="sell-price">판매가 175,937</span>
                                                        <span class="saled-item">상품할인 112,497원</span>
                                                        <span class="user-coupon">(우수고객쿠폰)쿠폰할인 -29,000원</span>
                                                    </div>
                                                    <span class="sell-price">판매가 1,057,213원</span>
                                                    <span class="reserves">적립금 : 30,000원</span>
                                                </div>
                                                <div class="item-desc2 status">취소처리중<span><a href="/"></a></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row3 shipping-info">
                                        <p>
                                            배송정보 : 무료배송 (CJ대한통운 냉장 직배송)
                                        </p>
                                        <div class="btn-wrap">
                                            <span class="btn btn-small btn-default w50">배송조회</span>
                                            <span class="btn btn-small btn-default w50"
                                                @click="orderReturnModal.modalShow = true">반품신청</span>
                                            <span class="btn btn-small btn-secondary w100"
                                                @click="reviewModal.modalShow = true">후기작성</span>
                                            <!-- <span class="btn btn-small btn-default w100" @click="orderCancelModal.modalShow = true">주문취소</span> -->
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="order-list-wrap">
                                <li class="order-list" v-for="(item, index) in item" :key="'cancel-' + index">
                                    <div class="row2">
                                        <div class="item-thumbnail">
                                            <nuxt-link to="/">
                                                <img class="thumbnail" :src="item.thumbnail.thumbnail" alt="썸네일">
                                            </nuxt-link>
                                        </div>
                                        <div class="item-info">
                                            <!-- 태그 -->
                                            <ul class="item-badge">
                                                <li class="badge badge-rank"><span>1++B</span></li>
                                                <li class="badge badge-fat no8"><span>N0.8</span></li>
                                                <li class="badge badge-frozen">
                                                    <span>
                                                        <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                    </span>
                                                    <span>냉동</span>
                                                </li>
                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                            </ul>
                                            <!-- 정보 -->
                                            <div class="item-detail">
                                                <div class="item-desc">
                                                    <div class="item-title">
                                                        <p class="brand">{{ item.info.title.brand }}</p>
                                                        <nuxt-link to="/">
                                                            <p class="main">{{ item.info.title.main }}</p>
                                                            <p class="sub">{{ item.info.title.sub }}</p>
                                                        </nuxt-link>
                                                    </div>
                                                    <div class="item-process">
                                                        <p class="process process-number">
                                                            <span>이력/가공/도축</span>
                                                            <span @click="processModal.modalShow = true">00215719766</span>
                                                        </p>

                                                    </div>
                                                    <div class="certificate" @click="certificateModal.modalShow = true">
                                                        등급판정확인서/도축검사증명서</div>
                                                </div>
                                                <div class="item-desc2 weight">99.9kg / 1개</div>
                                                <div class="item-desc2 sell">
                                                    <div class="sell-dc">
                                                        <span class="sell-price">판매가 175,937</span>
                                                        <span class="saled-item">상품할인 112,497원</span>
                                                        <span class="user-coupon">(우수고객쿠폰)쿠폰할인 -29,000원</span>
                                                    </div> <span class="sell-price">판매가 1,057,213원</span>
                                                    <span class="reserves">적립금 : 30,000원</span>
                                                </div>

                                                <div class="item-desc2 status">배송준비중
                                                    <span class="sells-info tooltip-wrap">
                                                        <i @click="showTooltip['preparing'] = true">?</i>
                                                        <article class="tooltip tooltip-preparing"
                                                            v-if="showTooltip['preparing']">
                                                            <div class="tooltip-close"
                                                                @click="showTooltip['preparing'] = false"></div>
                                                            <div class="tooltip-title">주문 취소 관련 안내</div>
                                                            <div class="tooltip-body tooltip-preparing-wrap">
                                                                <p>
                                                                    [배송준비중] 상태에서는 [주문취소]시,<br>
                                                                    <b>고객센터로 별도 문의</b>가 필요합니다.
                                                                </p>
                                                                <p>
                                                                    고객센터 : 1588-4192로 문의 또는<br>
                                                                    카카오톡/1:1문의를 이용해주세요.
                                                                </p>
                                                            </div>
                                                        </article>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row3 shipping-info">
                                        <p>
                                            배송정보 : 무료배송 (CJ대한통운 냉장 직배송)
                                        </p>
                                        <div class="btn-wrap">
                                            <span class="btn btn-small btn-default w50">배송조회</span>
                                            <span class="btn btn-small btn-default w50"
                                                @click="orderReturnModal.modalShow = true">반품신청
                                            </span>
                                            <span class="btn btn-small btn-secondary w100"
                                                @click="reviewModal.modalShow = true">후기작성
                                            </span>
                                            <!-- <span class="btn btn-small btn-default w100" @click="orderCancelModal.modalShow = true">주문취소</span> -->
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="order-list-wrap">
                                <li class="order-list" v-for="(item, index) in items" :key="'cancel-' + index">
                                    <div class="row2">
                                        <div class="item-thumbnail">
                                            <nuxt-link to="/">
                                                <img class="thumbnail" :src="item.thumbnail.thumbnail" alt="썸네일">
                                            </nuxt-link>
                                        </div>
                                        <div class="item-info">
                                            <!-- 태그 -->
                                            <ul class="item-badge">
                                                <li class="badge badge-rank"><span>1++B</span></li>
                                                <li class="badge badge-fat no8"><span>N0.8</span></li>
                                                <li class="badge badge-frozen">
                                                    <span>
                                                        <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                                                    </span>
                                                    <span>냉동</span>
                                                </li>
                                                <li class="badge badge-antibiotic"><span>무항생제</span></li>
                                            </ul>
                                            <!-- 정보 -->
                                            <div class="item-detail">
                                                <div class="item-desc">
                                                    <div class="item-title">
                                                        <p class="brand">{{ item.info.title.brand }}</p>
                                                        <nuxt-link to="/">
                                                            <p class="main">{{ item.info.title.main }}</p>
                                                            <p class="sub">{{ item.info.title.sub }}</p>
                                                        </nuxt-link>
                                                    </div>
                                                    <div class="item-process">
                                                        <p class="process process-number">
                                                            <span>이력/가공/도축</span>
                                                            <span @click="processModal.modalShow = true">00215719766</span>
                                                        </p>

                                                    </div>
                                                    <div class="certificate" @click="certificateModal.modalShow = true">
                                                        등급판정확인서/도축검사증명서</div>
                                                </div>
                                                <div class="item-desc2 weight">99.9kg / 1개</div>
                                                <div class="item-desc2 sell">
                                                    <div class="sell-dc">
                                                        <span class="sell-price">판매가 175,937</span>
                                                        <span class="saled-item">상품할인 112,497원</span>
                                                        <span class="user-coupon">(우수고객쿠폰)쿠폰할인 -29,000원</span>
                                                    </div>
                                                    <span class="sell-price">판매가 1,057,213원</span>
                                                    <span class="reserves">적립금 : 30,000원</span>
                                                </div>
                                                <div class="item-desc2 status">취소처리중<span><a href="/"></a></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row3 shipping-info">
                                        <p>
                                            배송정보 : 무료배송 (CJ대한통운 냉장 직배송)
                                        </p>
                                        <div class="btn-wrap">
                                            <span class="btn btn-small btn-default w50">배송조회</span>
                                            <span class="btn btn-small btn-default w50"
                                                @click="orderReturnModal.modalShow = true">반품신청</span>
                                            <span class="btn btn-small btn-secondary w100"
                                                @click="reviewModal.modalShow = true">후기작성</span>
                                            <!-- <span class="btn btn-small btn-default w100" @click="orderCancelModal.modalShow = true">주문취소</span> -->
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </dd>
        </dl>

        <!-- 결제정보 -->
        <div class="payment-content">
            <!-- 결제정보 -->
            <div class="payment-wrap payment-info">
                <div class="payment-title">
                    <h6>결제정보</h6>
                </div>
                <dl>
                    <dt class="payment-top">결제수단</dt>
                    <dd>신용카드<button type="button" class="btn-print">카드매출전표 인쇄</button></dd>
                    <!-- 결제방법 필요한 경우 -->
                    <dt class="indent">간편결제 : 신용카드</dt>
                    <dd>40,000원</dd>
                    <dt class="indent">일반결제 : 신용카드</dt>
                    <dd>40,000원</dd>
                    <dt class="indent">적립금 : 신용카드</dt>
                    <dd>2,000원</dd>
                    <!--  -->
                    <dt>결제상태</dt>
                    <dd>결제완료</dd>
                    <dt>결제일</dt>
                    <dd>2023-01-01 12:00:00</dd>
                </dl>
                <!-- 부분취소 있을 경우 노출 -->
                <dl class="payment-line">
                    <dt>결제방법</dt>
                    <dd>적립금</dd>
                    <dt class="indent">적립금 : 신용카드</dt>
                    <dd>40,000원</dd>
                    <dt>결제상태</dt>
                    <dd class="red">결제취소</dd>
                    <dt>결제일</dt>
                    <dd>2023-01-01 12:00:00</dd>
                </dl>
            </div>
            <!-- 결제금액 -->
            <div class="payment-wrap payment-amount">
                <div class="payment-title">
                    <h6>결제금액</h6>
                </div>
                <dl>
                    <dt class="strong">총 상품금액</dt>
                    <dd class="strong">1,230,180원</dd>
                    <dt>할인혜택</dt>
                    <dd class="bold">42,497원</dd>
                    <dt class="indent">상품할인</dt>
                    <dd>-12,490원</dd>
                    <dt class="indent">상품 쿠폰할인</dt>
                    <dd>-29,000원</dd>
                    <dt class="indent">주문서 쿠폰할인 (신규회원 할인 쿠폰)</dt>
                    <dd>-1,000원</dd>
                </dl>
                <dl class="payment-line">
                    <dt class="extra">총 결제 금액</dt>
                    <dd class="extra">9,999,999원</dd>
                    <dt class="point">적립예정 적립금</dt>
                    <dd class="point">0원</dd>
                </dl>
            </div>
            <div class="payment-wrap payment-delivery">
                <div class="payment-title">
                    <h6>배송지 정보</h6>
                </div>
                <dl>
                    <dt>받으시는분</dt>
                    <dd>문수환</dd>
                    <dt>주소</dt>
                    <dd>(08381) 서울시 구로구 디지터로27길 24 벽산디지털밸리 1차 711호</dd>
                    <dt>휴대전화</dt>
                    <dd>010-1234-1234</dd>
                    <dt>일반전화</dt>
                    <dd>02-1234-1234</dd>
                    <dt>요청사항</dt>
                    <dd>배송 시 미리 연락주세요.</dd>
                </dl>
            </div>
        </div>

        <!-- 팝업 -->
        <!-- 후기작성 -->
        <modal-default class="item-modal review-modal" :modalInfo="reviewModal.modalInfo" :modalShow="reviewModal.modalShow"
            @modalClose="reviewModal.modalShow = false">
            <form action="">
                <div class="modal-content ">
                    <h4 class="modal-content-title">구매확정 감사합니다.</h4>
                    <p class="modal-sub-text">
                        지금 바로 고객님의 소중한 후기를 남겨주세요.<br />
                        작성해 주시는 이용후기는 다른 분의 쇼핑에 소중한 정보가 됩니다.
                    </p>
                    <div class="item-list-container text">
                        <div class="item-list">
                            <div class="item">
                                <div class="item-thumbnail-small">
                                    <img src="~/static/images/img_item_sample_01.png" alt="">
                                </div>
                                <table class="basic-item-table">
                                    <tbody>
                                        <tr class="row1">
                                            <td>
                                                <ul class="item-badge">
                                                    <li class="badge badge-rank">
                                                        <span>1++B</span>
                                                    </li>
                                                    <li class="badge badge-fat no9">
                                                        <span>NO.9</span>
                                                    </li>
                                                    <li class="badge badge-storage">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                                                        </span>
                                                        <span>냉장</span>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="row2">
                                            <td class="text-brand">브랜드명</td>
                                        </tr>
                                        <tr class="row3">
                                            <td>
                                                <strong class="text-big">제목줄이 나오는 영역입니다</strong>
                                            </td>
                                        </tr>
                                        <tr class="row4">
                                            <td class="item-part"><span class="text-gray">SUB윗등심 + 아랫등심 반두분_DESC</span>
                                            </td>
                                        </tr>
                                        <tr class="row5">
                                            <td class="process-date"><strong>가공일자</strong>
                                                2023-06-28<span>(29개월령)</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <label class="check-wrap">
                        <input type="checkbox" name="" id=""><span>상품옵션 미노출</span>
                    </label>
                    <p class="modal-form-title mt-40">후기를 작성해주세요</p>
                    <textarea name="" id="" cols="30" rows="10" class="form-basic" placeholder="내용을 입력하세요"></textarea>
                    <p class="info-dot">이용후기는 구매확정 된 상품에 한하여 주문일로부터 90일내 작성 가능합니다.</p>
                    <p class="info-dot">한번에 조회 가능한 최대 기간은 6개월 입니다.</p>
                    <form-add-file />
                    <p class="info-dot">한번에 조회 가능한 최대 기간은 6개월 입니다.</p>
                </div>
                <div class="flex-center btn-wrap">
                    <button type="button" class="btn width-half btn-gray" @click="reviewModal.modalShow = false">취소</button>
                    <button type="button" class="btn width-half btn-secondary">저장</button>
                </div>
            </form>
        </modal-default>
        <!-- 취소신청 -->
        <modal-default class="item-modal order-cancel-modal" :modalInfo="orderCancelModal.modalInfo"
            :modalShow="orderCancelModal.modalShow" @modalClose="orderCancelModal.modalShow = false">
            <div class="modal-content order-cancel-content">
                <!-- 체크박스 영역 -->
                <label for="" class="check-wrap">
                    <input type="checkbox" name="" id="allCheck" class="">
                    <span>전체선택</span>
                </label>
                <!-- 아이템 영역 -->
                <div class="item-list-container text">
                    <div class="item-list">
                        <div class="item-wrap">
                            <!-- 아이템 -->
                            <div class="item">
                                <!-- 체크박스 영역 -->
                                <label class="check-wrap">
                                    <input type="checkbox" name="checkboxSample" :id="item.itemId" :checked="item.selected"
                                        @click="addOne(index, !item.selected)">
                                </label>
                                <!-- 썸네일 -->
                                <div class="item-thumbnail-small">
                                    <img src="~/static/images/img_item_sample_01.png" alt="">
                                </div>
                                <!-- 아이템 정보 -->
                                <table class="basic-item-table">
                                    <tbody>
                                        <tr class="row1">
                                            <td>
                                                <ul class="item-badge">
                                                    <li class="badge badge-rank">
                                                        <span>1++B</span>
                                                    </li>
                                                    <li class="badge badge-fat no9">
                                                        <span>NO.9</span>
                                                    </li>
                                                    <li class="badge badge-storage">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                                                        </span>
                                                        <span>냉장</span>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="row2">
                                            <td class="text-brand">브랜드명</td>
                                        </tr>
                                        <tr class="row3">
                                            <td>
                                                <strong class="text-big">제목줄이 나오는 영역입니다</strong>
                                            </td>
                                        </tr>
                                        <tr class="row4">
                                            <td class="item-part"><span class="text-gray">SUB윗등심 + 아랫등심 반두분_DESC</span>
                                            </td>
                                        </tr>
                                        <tr class="row5">
                                            <td class="process-date"><strong>가공일자</strong>
                                                2023-06-28<span>(29개월령)</span>
                                            </td>
                                        </tr>
                                        <tr class="row6">
                                            <td class="item-price">
                                                <span>
                                                    판매가 1,057,213원
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- 수량 -->
                            <div class="form-line amount-selector">
                                <select name="" id="" class="select-small-arrow">
                                    <option value="">999</option>
                                </select>
                            </div>
                        </div>
                        <div class="item-wrap">
                            <!-- 아이템 -->
                            <div class="item">
                                <!-- 체크박스 영역 -->
                                <label class="check-wrap">
                                    <input type="checkbox" name="checkboxSample" :id="item.itemId" :checked="item.selected"
                                        @click="addOne(index, !item.selected)">
                                </label>
                                <!-- 썸네일 -->
                                <div class="item-thumbnail-small">
                                    <img src="~/static/images/img_item_sample_01.png" alt="">
                                </div>
                                <!-- 아이템 정보 -->
                                <table class="basic-item-table">
                                    <tbody>
                                        <tr class="row1">
                                            <td>
                                                <ul class="item-badge">
                                                    <li class="badge badge-rank">
                                                        <span>1++B</span>
                                                    </li>
                                                    <li class="badge badge-fat no9">
                                                        <span>NO.9</span>
                                                    </li>
                                                    <li class="badge badge-storage">
                                                        <span>
                                                            <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                                                        </span>
                                                        <span>냉장</span>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="row2">
                                            <td class="text-brand">브랜드명</td>
                                        </tr>
                                        <tr class="row3">
                                            <td>
                                                <strong class="text-big">제목줄이 나오는 영역입니다</strong>
                                            </td>
                                        </tr>
                                        <tr class="row4">
                                            <td class="item-part"><span class="text-gray">SUB윗등심 + 아랫등심 반두분_DESC</span>
                                            </td>
                                        </tr>
                                        <tr class="row5">
                                            <td class="process-date"><strong>가공일자</strong>
                                                2023-06-28<span>(29개월령)</span>
                                            </td>
                                        </tr>
                                        <tr class="row6">
                                            <td class="item-price">
                                                <span>
                                                    판매가 1,057,213원
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- 수량 -->
                            <div class="form-line amount-selector">
                                <select name="" id="" class="select-small-arrow">
                                    <option value="">999</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- // 아이템 영역 -->
                <div class="form-line mt-30">
                    <select name="" id="" class="select-small-arrow">
                        <option value="">취소 사유를 선택하세요</option>
                        <option value="">판매자의 다른상품 주문</option>
                        <option value="">상품 및 옵션 등 선택 실수</option>
                        <option value="">구매의사 없음</option>
                        <option value="">직접입력</option>
                    </select>
                </div>
                <div class="form-line">
                    <input type="text" placeholder="취소 사유를 입력하세요" class="form-basic">
                </div>
                <ul class="info-desc">
                    <li>주문 시 사용한 쿠폰과 적립금은 취소 시 복구됩니다. (단, 쿠폰의 경우 유효기간이 남은 쿠폰에 한함)</li>
                    <li>이미 상품이 발송된 것으로 확인되면 취소 요청이 자동으로 철회되며, 이 경우 상품을 받으신 후 반품신청을 하실 수 있습니다.</li>
                </ul>
                <p class="form-title mt-30"><span>환불정보</span></p>
                <div class="form-line">
                    <input type="text" placeholder="예금주명" class="form-basic">
                    <span class="feedback" style="display: none;"></span>
                </div>
                <div class="double-form-line">
                    <div class="form-line">
                        <select name="" id="" class="select-small-arrow">
                            <option value="">은행명</option>
                        </select>
                        <div class="form-feedback">
                            <input type="text" placeholder="계좌번호" class="form-basic">
                            <span class="feedback" style="display: none;"></span>
                        </div>
                    </div>
                </div>
                <table class="order-receipt mt-30">
                    <tr>
                        <th>상품금액</th>
                        <td>9,999,999 원</td>
                    </tr>
                    <tr>
                        <th>배송비</th>
                        <td>9,999,999 원</td>
                    </tr>
                    <tr class="divider">
                        <td colspan="2"><span></span></td>
                    </tr>
                    <tr class="total-sum">
                        <th>총 환불금액</th>
                        <td>9,999,999 원</td>
                    </tr>
                </table>
            </div>
            <div class="flex-center btn-wrap">
                <button type="button" class="btn width-half btn-default"
                    @modalClose="orderCancelModal.modalShow = false">취소</button>
                <button type="button" class="btn width-half btn-secondary">저장</button>
            </div>
        </modal-default>
        <!-- 반품신청 -->
        <modal-default class="item-modal order-return-modal" :modalInfo="orderReturnModal.modalInfo"
            :modalShow="orderReturnModal.modalShow" @modalClose="orderReturnModal.modalShow = false">
            <div class="modal-content">
                <!-- 아이템 영역 -->
                <div class="item-list-container text">
                    <div class="item-list">
                        <div class="item">
                            <div class="item-thumbnail-small">
                                <img src="~/static/images/img_item_sample_01.png" alt="">
                            </div>
                            <table class="basic-item-table">
                                <tbody>
                                    <tr class="row1">
                                        <td>
                                            <ul class="item-badge">
                                                <li class="badge badge-rank">
                                                    <span>1++B</span>
                                                </li>
                                                <li class="badge badge-fat no9">
                                                    <span>NO.9</span>
                                                </li>
                                                <li class="badge badge-storage">
                                                    <span>
                                                        <img src="~/assets/images/common/items/ico_cold.svg" alt="냉장">
                                                    </span>
                                                    <span>냉장</span>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr class="row2">
                                        <td class="text-brand">브랜드명</td>
                                    </tr>
                                    <tr class="row3">
                                        <td>
                                            <strong class="text-big">제목줄이 나오는 영역입니다</strong>
                                        </td>
                                    </tr>
                                    <tr class="row4">
                                        <td class="item-part"><span class="text-gray">SUB윗등심 + 아랫등심 반두분_DESC</span></td>
                                    </tr>
                                    <tr class="row5">
                                        <td class="process-date"><strong>가공일자</strong>
                                            2023-06-28<span>(29개월령)</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- 수량 -->
                <div class="form-line amount-selector">
                    <select name="" id="" class="select-small-arrow">
                        <option value="">999</option>
                    </select>
                </div>
                <div class="form-line">
                    <select name="" id="" class="select-small-arrow">
                        <option value="">반품 사유를 선택하세요</option>
                        <option value="">판매자의 다른상품 주문</option>
                        <option value="">상품 및 옵션 등 선택 실수</option>
                        <option value="">구매의사 없음</option>
                        <option value="">직접입력</option>
                    </select>
                </div>
                <div class="form-line">
                    <input type="text" placeholder="반품 사유를 입력하세요" class="form-basic">
                    <span class="feedback" style="display: none;"></span>
                </div>
                <form-add-file />
                <p class="info-dot">5MB 이하의 사진 4장까지 첨부 가능</p>
                <!-- 주소 -->
                <!-- <p class="form-title"><span>주소</span></p>
                        <div class="form-line">
                            <input type="text" class="form-basic" placeholder="예금주명" />
                            <span class="feedback" style="display: none;"></span>
                        </div>
                        <div class="form-line form-button user-address">
                            <input type="text" class="form-basic" placeholder="우편번호" disabled />
                            <button class="btn btn-black width-120">우편번호 찾기</button>
                            <span class="feedback" style="display: none;"></span>
                        </div>
                        <div class="form-line">
                            <input type="text" placeholder="기본주소" class="form-basic">
                        </div>
                        <div class="form-line">
                            <input type="text" placeholder="상세주소" class="form-basic">
                        </div> -->
                <p class="form-title mt-40"><span>환불정보</span></p>
                <div class="form-line">
                    <input type="text" class="form-basic" placeholder="예금주명" />
                    <span class="feedback" style="display: none;"></span>
                </div>
                <div class="double-form-line">
                    <div class="form-line">
                        <select name="" id="" class="select-small-arrow width-150">
                            <option value="">은행명</option>
                            <option value="">우리은행</option>
                            <option value="">하나은행</option>
                            <option value="">신한은행</option>
                        </select>
                        <div class="form-feedback"><input type="text" placeholder="계좌번호" class="form-basic">
                            <span class="feedback" style="display: none;"></span>
                        </div>
                    </div>
                </div>
                <ul class="info-desc">
                    <li>주문하신 상품 수령일로부터 7일 이내만 반품이 가능합니다.</li>
                    <!-- <li>반품 사유에 따라 반품배송비가 발생할 수 있습니다. (환불 금액에서 차감됩니다.)</li>
                            <li>1박스당 반품배송비는 6,000원 이며 업체발송건은 업체마다 반품배송비가 상이합니다. (제주 및 도서산간 박스당 반품배송비 12,000원)</li>
                            <li>냉장/냉동상품, 업체발송 상품 중 선도유지 상품은 반품불가 합니다.</li> -->
                </ul>
            </div>
            <div class="flex-center btn-wrap">
                <button type="button" class="btn width-half btn-default"
                    @modalClose="orderReturnModal.modalShow = false">취소</button>
                <button type="button" class="btn width-half btn-secondary">저장</button>
            </div>
        </modal-default>

        <!-- 이력번호 팝업 -->
        <modal-process :processModal="processModal" @modalClose="processModal.modalShow = false" />


        <!-- 등급판정확인서/도축검사증명서 팝업 -->
        <etc-photo-thumbnail :thumbList="certificateModal.images" :activeThumbSwiper="certificateModal.modalShow"
            @openSwiper="certificateModal.modalShow = false" v-show="certificateModal.modalShow">
        </etc-photo-thumbnail>
        <!-- 계산서 팝업 -->
        <modal-default :modalShow="taxBillModal.modalShow" :modalInfo="taxBillModal.modalInfo"
            @modalClose="taxBillModal.modalShow = false" class="taxbill-lg">
            <modal-taxbill :tableContent="taxBillModal.tableContent" />
        </modal-default>
    </div>
</template>
  
<script>
export default {
    layout: "divide",
    data() {
        return {
            reviewModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "후기작성",
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            orderCancelModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "취소신청",
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            orderReturnModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "반품신청",
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            certificateModal: {
                images: [
                    { imgSrc: "certificate1" },
                    { imgSrc: "certificate2" },
                    // "~/static/images/certificate1.png",
                    // "~/static/images/certificate2.png",
                ],
                modalShow: false
            },
            showTooltip: {
                'duedate': false,
                'preparing': false,
            },
            processModal: {
                modalShow: false,
            },
            item: [
                {
                    thumbnail: {
                        rank: "1++B",
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_01.png"),
                        soldOut: false,
                    },
                    info: {
                        badge: {
                            rank: "1++B",
                            fat: "NO.8",
                            storage: "ice",
                            antibiotic: true,
                            fresh: true,
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
                            consumer: "44,000",
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766",
                        },
                        benefits: {
                            point: "10",
                            coupon: "3",
                            aging: "1",
                        },
                    },
                },
            ],
            items: [
                {
                    thumbnail: {
                        rank: "A+",
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_02.png"),
                        soldOut: false,
                    },
                    info: {
                        badge: {
                            rank: "A+",
                            fat: "NO.4",
                            storage: "cold",
                            antibiotic: true,
                            fresh: true,
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
                            consumer: "44,000",
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766",
                        },
                        benefits: {
                            // point: "10",
                            coupon: "3",
                            aging: "1",
                        },
                    },
                },
                {
                    thumbnail: {
                        rank: "",
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: false,
                        thumbnail: require("~/static/images/img_item_sample_01.png"),
                        soldOut: false,
                    },
                    info: {
                        badge: {
                            rank: "",
                            fat: "",
                            storage: "cold",
                            antibiotic: false,
                            fresh: true,
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
                            consumer: "44,000",
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766",
                        },
                        benefits: {
                            point: "",
                            coupon: "",
                            aging: "1",
                        },
                    },
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
        toggleList(event) {
            let listTitle = event.currentTarget.parentNode;
            if (listTitle.classList.contains('closed')) {
                listTitle.classList.remove('closed');
            } else {
                listTitle.classList.add('closed')
            }

        },
    },
    mounted() {
    }
}
</script>

<style scoped>
@import url("~/assets/css/page/mypage.css");

.item-badge .badge:not(.badge-fat, .badge-rank) span {
    font-size: 1.5rem;
}

.item-process {
    margin-bottom: 1rem;
}

.item-process .process span:nth-child(1) {
    font-size: 1.4rem;
}

.item-process .process-number span:nth-child(2) {
    font-size: 1.3rem;
}
</style>