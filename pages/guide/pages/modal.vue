<template>
    <div>
        <!-- 
            ////////////////////////////////////////////////////////////
            
            -- 모달 기본 구조
            
                    <div class="modal">  -- 모달 전체 영역
            
                        <div class="modal-wrap">  -- 모달 범위 영역
            
                            <div class="modal-header"></div>  -- 모달 헤더 영역
            
                            <div class="modal-body">  -- 모달 바디 영역
            
                                <div class="modal-content">  -- 모달 컨텐츠 영역
            
                                        -- 슬롯 영역
            
                                </div>
            
                            </div>
            
                        </div>
            
                    </div>
            
            ////////////////////////////////////////////////////////////
            
            -->
        <p class="head-title">modal 사용 텍스트</p>
        <P class="modal-content-title">modal-content 상단 타이틀</P>
        <P class="modal-sub-text">modal-content 서브 설명 텍스트</P>
        <P class="modal-form-title">form-title 모달용</P>

        <p class="head-title">썸네일 클릭하면 확대</p>
        <!-- <ul class="thumbnail-area">
            <li class="thumbnail" v-for="(image, index) in samplePhotoList.sampleImages" :key="'img_' + index"
                @click="samplePhotoList.activeThumbSwiper = !samplePhotoList.activeThumbSwiper">
                <img :src="require(`@/static/images/${image.imgSrc}.png`)" :alt="'img_' + index">
            </li>
        </ul>
        <etc-photo-thumbnail :thumbList="samplePhotoList.sampleImages"
            @openSwiper="samplePhotoList.activeThumbSwiper = !samplePhotoList.activeThumbSwiper"
            :activeThumbSwiper="samplePhotoList.activeThumbSwiper"
            v-show="samplePhotoList.activeThumbSwiper"></etc-photo-thumbnail> -->
        <!-- modal default set -->
        <p class="head-title">modal default set</p>
        <!-- 기본 모달 -->
        <button type="button" @click="showHeader.modalShow = true">타이틀 있는 모달</button>
        <modal-default :modalInfo="showHeader.modalInfo" :modalShow="showHeader.modalShow"
            @modalClose="showHeader.modalShow = false">
            <div class="modal-content">
                <p class="text-center">
                    타이틀이 있는 팝업입니다.
                </p>
            </div>
        </modal-default>
        <!-- 하얀 모달(타이틀O) -->
        <button type="button" @click="whiteModal.modalShow = true">타이틀 있는 모달(하양)</button>
        <modal-default :modalInfo="whiteModal.modalInfo" :modalShow="whiteModal.modalShow"
            @modalClose="whiteModal.modalShow = false">
            <div class="modal-content">
                <p class="text-center">
                    타이틀이 있는 팝업입니다.
                </p>
            </div>
            <div class="flex-center btn-wrap">
                <button type="button" class="btn width-half btn-default">취소</button>
                <button type="button" class="btn width-half btn-secondary">확인</button>
            </div>
        </modal-default>
        <!-- 헤더 하이드 모달 -->
        <button type="button" @click="hideModal.modalShow = true">타이틀 없는 모달</button>
        <modal-default :modalInfo="hideModal.modalInfo" :modalShow="hideModal.modalShow"
            @modalClose="hideModal.modalShow = false">
            <div class="modal-content">
                <!-- 텍스트 가운데 정렬 -->
                <div class="only-text">
                    타이틀이 있는 팝업입니다.
                    <b>b 태그</b>를 쓰면 굵어집니다
                </div>
            </div>
        </modal-default>
        <!-- 풀 사이즈 모달 -->
        <button type="button" @click="fullModal.modalShow = true">풀 사이즈 모달</button>
        <modal-default :modalInfo="fullModal.modalInfo" :modalShow="fullModal.modalShow"
            @modalClose="fullModal.modalShow = false">
            <div class="modal-content">
                타이틀이 있는 팝업입니다.
            </div>
        </modal-default>
        <!-- 이미지 팝업 -->
        <button type="button" @click="imageModal.modalShow = true">이미지 팝업</button>
        <modal-image-modal :imageModal="imageModal" @modalClose="imageModal.modalShow = false">
            <img src="~/static/images/img_item_sample_02.png" alt="">
        </modal-image-modal>
        <!-- payu 팝업 -->
        <button type="button" @click="payuModal.modalShow = true">payu 팝업: 여백없는 팝업</button>
        <modal-payu :modalShow="payuModal.modalShow" @modalClose="payuModal.modalShow = false">
            <div class="modal-content">
                payu 팝업 여백 없는 팝업
            </div>
        </modal-payu>

        <!-- ////////////////////////////////////// -->
        <p class="head-title">modal custom set</p>
        <!-- ////////////////////////////////////// -->

        <!-- 이력번호 -->
        <!-- <button type="button" @click="processModal.modalShow = true">이력번호</button>
        <modal-image-modal class="process-number-modal" :imageModal="processModal"
            @modalClose="processModal.modalShow = false">
            <span><img src="~/static/images/img_item_sample_01.png" alt="썸네일"></span>
            <ul class="grade-status">
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
            <div class="btn-wrap">
                <div class="btn btn-small btn-default">축산물 이력정보</div>
                <div class="btn btn-small btn-black" @click="processModal.modalShow = false">닫기</div>
            </div>
        </modal-image-modal> -->

        <button type="button" @click="processModal.modalShow = true">이력번호</button>
        <modal-process :processModal="processModal" @modalClose="processModal.modalShow = false" />

        <!-- FAQ-modal 팝업 -->
        <button type="button" @click="FAQModal.modalShow = true">메인화면FAQ</button>
        <modal-default :modalInfo="FAQModal.modalInfo" :modalShow="FAQModal.modalShow"
            @modalClose="FAQModal.modalShow = false" class="FAQ-modal">
            <div class="modal-content">
                <h1 class="FAQ-title">회원 탈퇴시 회원정보는 모두 삭제되나요?</h1>
                <div class="FAQ-desc">
                    관리자 답변이 달립니다. 관리자 답변이 달립니다. 관리자 답변이 달립니다. 관리자 답변이 달립니다.
                </div>
            </div>
            <div class="flex-center btn-wrap">
                <button type="button" class="btn width-half btn-default">취소</button>
                <button type="button" class="btn width-half btn-secondary">확인</button>
            </div>
        </modal-default>
        <!-- 배송지 목록 -->
        <button type="button" @click="addressModal.modalShow = true">배송지 목록</button>
        <modal-default :modalInfo="addressModal.modalInfo" :modalShow="addressModal.modalShow"
            @modalClose="addressModal.modalShow = false">
            <ul class="address-content address-list">
                <li v-for="(info, index) in addressInfo" :key="index" class="radio-wrap"
                    :class="{ active: info.checked == true }">
                    <label>
                        <input type="radio" :name="'addressRadio_' + index" :checked="info.checked">
                    </label>
                    <div class="user-info">
                        <p class="address-title">
                            <strong>{{ info.title }}</strong>
                            <span v-if="info.checked">기본배송지</span>
                        </p>
                        <p>{{ info.address }}</p>
                        <p>{{ info.phoneNumber }}</p>
                    </div>
                </li>
            </ul>
            <button type="button" class="btn add-address-item">
                <img src="~/assets/images/common/ico_add.svg" alt="배송지 추가">&nbsp;&nbsp;배송지 추가
            </button>
            <div class="flex-center btn-wrap">
                <button type="button" class="btn width-half btn-secondary">확인</button>
            </div>
        </modal-default>
        <!-- 배송지 추가 -->
        <button type="button" @click="addressModal02.modalShow = true">배송지 추가</button>
        <modal-default :modalInfo="addressModal02.modalInfo" :modalShow="addressModal02.modalShow"
            @modalClose="addressModal02.modalShow = false">
            <div class="address-content">
                <!-- 배송지 -->
                <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                    <input v-model="address" type="text" name="address" :class="{ 'invalid': errors.length }"
                        placeholder="배송지" class="form-basic">
                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                </ValidationProvider>
                <!-- 이름 입력 -->
                <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                    <input v-model="userName" type="text" name="userName" :class="{ 'invalid': errors.length }"
                        placeholder="이름 입력" class="form-basic">
                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                </ValidationProvider>
                <!--  우편번호 -->
                <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-button user-address mt-10">
                    <input v-model="postNumber" type="text" name="postNumber" :class="{ 'invalid': errors.length }"
                        class="form-basic" placeholder="우편번호" disabled />
                    <button class="btn btn-black">우편번호 찾기</button>
                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback mt-10">
                    <input v-model="address" type="text" name="address" :class="{ 'invalid': errors.length }"
                        placeholder="기본주소" class="form-basic">
                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback mt-10">
                    <input v-model="addressDetail" type="text" name="addressDetail" :class="{ 'invalid': errors.length }"
                        placeholder="상세주소" class="form-basic">
                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                </ValidationProvider>
                <!-- 전화번호 -->
                <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                    <input v-model="phone" type="text" name="phone" :class="{ 'invalid': errors.length }"
                        placeholder="- 없이 전화번호 숫자만 입력" class="form-basic">
                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                </ValidationProvider>
                <p class="info-dot">3층 이상 상가 또는 사업장이 아닌 가정집일 경우 일반 택배로 배송되오니 원활한 배송을 위해 가능한 영업장 주소를 적어주시기 바랍니다.</p>
                <div class="check-area">
                    <label class="check-wrap">
                        <input type="checkbox" name="setDefault" checked>
                        <span>기본 배송지로 설정</span>
                    </label>
                    <label class="check-wrap">
                        <input type="checkbox" name="getBasic">
                        <span>기본 정보 가져오기</span>
                    </label>
                </div>
            </div>
            <div class="flex-center btn-wrap">
                <button type="button" class="btn width-half btn-secondary">확인</button>
            </div>
        </modal-default>
        <!-- 취소신청 -->
        <button type="button" @click="orderCancelModal.modalShow = true">취소신청</button>
        <modal-default :modalInfo="orderCancelModal.modalInfo" :modalShow="orderCancelModal.modalShow"
            @modalClose="orderCancelModal.modalShow = false">
            <div class="modal-content order-cancel-content">
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
                                            2023-06-28 (29개월령)<span>(29개월령)</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- // 아이템 영역 -->
                <div class="form-line mt-30">
                    <select name="" id="" class="select-small-arrow">
                        <option value="">사유를 선택하세요</option>
                        <option value="">판매자의 다른상품 주문</option>
                        <option value="">상품 및 옵션 등 선택 실수</option>
                        <option value="">구매의사 없음</option>
                        <option value="">기타</option>
                    </select>
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
                <button type="button" class="btn width-half btn-secondary">확인</button>
            </div>
        </modal-default>
        <!-- 반품신청 -->
        <button type="button" @click="orderReturnModal.modalShow = true">반품신청</button>
        <modal-default class="" :modalInfo="orderReturnModal.modalInfo" :modalShow="orderReturnModal.modalShow"
            @modalClose="orderReturnModal.modalShow = false">
            <div class="modal-content order-return-content">
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
                                            2023-06-28 (29개월령)<span>(29개월령)</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- // 아이템 영역 -->
                <div class="form-line amount-selector">
                    <select name="" id="" class="select-small-arrow">
                        <option value="">999</option>
                    </select>
                </div>
                <div class="form-line">
                    <select name="" id="" class="select-small-arrow">
                        <option value="">사유를 선택하세요</option>
                        <option value="">판매자의 다른상품 주문</option>
                        <option value="">상품 및 옵션 등 선택 실수</option>
                        <option value="">구매의사 없음</option>
                        <option value="">기타</option>
                    </select>
                </div>
                <div class="form-line">
                    <input type="text" placeholder="사유를 입력하세요" class="form-basic">
                    <span class="feedback" style="display: none;"></span>
                </div>
                <form-add-file />
                <p class="info-dot">5MB 이하의 사진 4장까지 첨부 가능</p>
                <div class="form-title"></div>
                <div class="radio-wrap">
                    <label for="useDeliveryCompany">
                        <input type="radio" name="useDeliveryCompany" id="useDeliveryCompany" checked="checked">
                        <span>지정택배사 이용하기</span>
                    </label>
                </div>
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
        <!-- 알림 수신 동의 -->
        <button type="button" @click="agreeModal.modalShow = true">알림 수신 동의</button>
        <modal-default :modalInfo="agreeModal.modalInfo" :modalShow="agreeModal.modalShow"
            @modalClose="agreeModal.modalShow = false">
            <div class="modal-content">
                <div class="text-center">
                    쿠폰 및 특가 등 앱 알림 메시지를 받아보시겠습니까?
                </div>
            </div>
            <div class="flex-center btn-wrap">
                <button type="button" class="btn width-half btn-default" @modalClose="agreeModal.modalShow = false">동의
                    안함</button>
                <button type="button" class="btn width-half btn-secondary">동의함</button>
            </div>
        </modal-default>
        <br>
        <br>
        <!-- 후기작성 -->
        <button type="button" @click="reviewModal.modalShow = true">후기작성</button>
        <modal-default :modalInfo="reviewModal.modalInfo" :modalShow="reviewModal.modalShow"
            @modalClose="reviewModal.modalShow = false" class="review-modal">
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
                                            <td class="item-part"><span class="text-gray">SUB윗등심 + 아랫등심 반두분_DESC</span></td>
                                        </tr>
                                        <tr class="row5">
                                            <td class="process-date"><strong>가공일자</strong>
                                                2023-06-28 (29개월령)<span>(29개월령)</span>
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

        <!-- 적용상품보기 -->
        <button type="button" @click="productModal.modalShow = true">적용상품보기</button>
        <modal-default :modalInfo="productModal.modalInfo" :modalShow="productModal.modalShow"
            @modalClose="productModal.modalShow = false">
            <div class="modal-content">
                <div class="item-list-container default2">
                    <item-list class="item-list" :items="items" :thumbnail="items" />
                </div>
            </div>
            <div class="flex-center btn-wrap">
                <button type="button" class="btn width-half btn-default">취소</button>
                <button type="button" class="btn width-half btn-secondary">확인</button>
            </div>
        </modal-default>
        <!-- ////////////////////////////////////// -->
        <p class="head-title">alert 창</p>
        <!-- ////////////////////////////////////// -->
        <button type="button" @click="alertModal.alertShow = true">ALERT</button>
        <layouts-alert :alertInfo="alertModal.alertInfo" :alertShow="alertModal.alertShow" />
        <button type="button" @click="confirmModal.alertShow = true">CONFIRM</button>
        <layouts-alert :alertInfo="confirmModal.alertInfo" :alertShow="confirmModal.alertShow"
            @alertClose="confirmModal.alertShow = false" />
        <p class="head-title">toast popup</p>
        <section>
            <button type="button" @click="cartPopShow = !cartPopShow">toast 팝업</button>
            <layouts-toast :toastText="'해당 상품이 장바구니에 담겼습니다'" v-show="cartPopShow" />
            <button type="button" @click="copyPopShow = !copyPopShow">toast 팝업</button>
            <layouts-toast :toastText="'URL이 복사되었습니다'" v-show="copyPopShow" />
        </section>
        <p class="head-title">swiper popup</p>
        <!-- 이미지 팝업 -->
        <button type="button" @click="swiperModal.modalShow = true">스와이퍼 팝업</button>
        <modal-swiper-modal :swiperModal="swiperModal" @modalClose="swiperModal.modalShow = false"
            :modalShow="swiperModal.modalShow" :swiperSlides="swiperModal.swiperSlides">
        </modal-swiper-modal>
    </div>
</template>
<script>
export default {
    name: "ModalGuide",

    data() {
        return {
            //스와이퍼 모달
            swiperModal: {
                modalShow: false,
                dimmed: true,
                footer: true,
                swiperSlides: [
                    { imgPath: require("@/static/images/img_test_sample_00.png"), imgLink: '', altText: '카피바라00' },
                    { imgPath: require("@/static/images/img_test_sample_01.png"), imgLink: '', altText: '카피바라01' },
                    { imgPath: require("@/static/images/img_test_sample_02.png"), imgLink: '', altText: '카피바라02' },
                ]

            },
            //이미지 썸네일 컴포넌트
            samplePhotoList: {
                sampleImages: [
                    { imgSrc: 'img_thumbnail_small' },
                    { imgSrc: 'img_item_sample_01' },
                    { imgSrc: 'img_none_378x216' },
                    { imgSrc: 'img_none_1194x922' },
                ],
                activeThumbSwiper: false
            },
            // 각 모달에 대한 상태를 개별적으로 관리
            showHeader: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "헤더 활성화 모달",
                    modalFull: false,
                    headerShow: true,
                    dimmed: true,
                },
            },
            whiteModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "하얀 타이틀 모달",
                    modalFull: false,
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            hideModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "헤더 하이드 모달",
                    modalFull: false,
                    modalWidthSmall: true,
                    headerShow: false,
                    dimmed: true,
                },
            },
            fullModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "풀 사이즈 모달",
                    modalFull: true,
                    headerShow: true,
                    dimmed: false,
                },
            },
            payuModal: {
                modalShow: false,
                modalInfo: {
                    dimmed: true,
                },
            },
            imageModal: {
                modalShow: false,
                footer: true

            },
            processModal: {
                modalShow: false,
            },
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
            FAQModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "FAQModal 메인FAQ",
                    modalFull: false,
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            addressInfo: [
                {
                    title: '배송지',
                    checked: true,
                    address: '[08381] 서울특별시 구로구 디지털로27길 24 711 온라인파워스 주소 여기까지 노출',
                    phoneNumber: '010 - 1234 - 5678',
                    checked: true
                },
                {
                    title: '배송지2',
                    checked: false,
                    address: '[08381] 서울특별시 구로구 디지털로27길 24 711 온라인파워스 주소 여기까지 노출',
                    phoneNumber: '010 - 2345 - 6789',
                    checked: false
                },
                // 나머지 배송지 데이터들
            ],
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
            agreeModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "알림 수신 동의",
                    modalFull: false,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: false,
                },
            },
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
            productModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "적용상품보기",
                    modalFull: true,
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            // alert
            alertModal: {
                alertShow: false,
                alertInfo: {
                    message: "ALERT 내용",
                    alertType: "ALERT",
                }
            },
            confirmModal: {
                alertShow: false,
                alertInfo: {
                    message: "CONFIRM 내용",
                    alertType: "CONFIRM",
                },
            },

            cartPopShow: false,
            copyPopShow: false,
            items: [
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
                {
                    thumbnail: {
                        rank: "",
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_02.png"),
                        soldOut: false,
                    },
                    info: {
                        badge: {
                            rank: "",
                            fat: "",
                            storage: false,
                            antibiotic: false,
                            fresh: false,
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
                {
                    thumbnail: {
                        rank: "A+",
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_01.png"),
                        soldOut: false,
                    },
                    info: {
                        badge: {
                            rank: "A+",
                            fat: "NO.9",
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
                {
                    thumbnail: {
                        rank: "1+B",
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: false,
                        thumbnail: require("~/static/images/img_item_sample_02.png"),
                        soldOut: false,
                    },
                    info: {
                        badge: {
                            rank: "1+B",
                            fat: "NO.3",
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
                {
                    thumbnail: {
                        rank: "1++A",
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_01.png"),
                        soldOut: false,
                    },
                    info: {
                        badge: {
                            rank: "1++A",
                            fat: "NO.1",
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
                {
                    thumbnail: {
                        rank: "1+",
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_02.png"),
                        soldOut: false,
                    },
                    info: {
                        badge: {
                            rank: "A+",
                            fat: "NO.2",
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
        };
    },
};
</script>
<style scoped>
button[type="button"]:not(.btn) {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background-color: #60a5fa;
    color: #fff;
    padding: 1rem;
    border-radius: .5rem;
}

button[type="button"]:not(.btn):hover {
    background-color: #2563eb;
}
</style>