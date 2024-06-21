<template>
    <section class="join">
        <div class="user-inner">
            <h3 class="page-title">회원가입</h3>
            <client-only>
                <ValidationObserver ref="observer" v-slot="{ validate }">
                    <form @submit.prevent="handleSubmit(validate)">
                        <dl class="accordion-list">
                            <dt class="list-tit">
                                <p>기본정보</p>
                                <span @click="toggleList($event)">
                                    <img src="~/assets/images/common/arrow/ico_arr_accordion.png" alt="열기/닫기 화살표">
                                </span>
                            </dt>
                            <dd class="list-wrap">
                                <!-- 회원 유형 -->
                                <!-- 회원 -->
                                <div class="form-title accent"><span>회원</span></div>
                                <div class="radio-wrap">
                                    <label for="businessUser"><input type="radio" name="joinUserType" id="businessUser"
                                            @change="toggleType" checked="checked">
                                        <span>사업자회원</span></label>
                                    <label for="normalUser"><input type="radio" name="joinUserType" id="normalUser"
                                            @change="toggleType">
                                        <span>개인회원</span></label>
                                </div>
                                <div class="info-desc" v-if="!business">
                                    <p>
                                        도매물 상품은 공급사의 판매 및 배송정책에 따라 일반 소비자 주문 시 주문이 취소 될 수 있습니다.
                                    </p>
                                </div>
                                <!-- 사업자 - 유형 -->
                                <div v-show="business">
                                    <!-- 사업자 유형 -->
                                    <div class="form-title mt-20"><span>사업자 유형</span></div>
                                    <div class="radio-wrap businessType">
                                        <label for="restaurant"><input type="radio" name="businessType" id="restaurant">
                                            <span>정육점</span></label>
                                        <label for="butcher"><input type="radio" name="businessType" id="butcher">
                                            <span>식당</span></label>
                                        <label for="distribute"><input type="radio" name="businessType" id="distribute">
                                            <span>유통</span></label>
                                        <label for="other"><input type="radio" name="businessType" id="other"
                                                checked="checked">
                                            <span>기타</span></label>
                                    </div>
                                    <div class="form-line">
                                        <input type="text" placeholder="직접 입력하기" class="form-basic">
                                    </div>
                                </div>
                                <!-- 공통 -->
                                <!-- 아이디 -->
                                <p class="form-title accent"><span>아이디</span></p>
                                <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-button">
                                    <input v-model="loginId" type="text" name="loginId" class="form-basic"
                                        :class="{ 'invalid': errors.length }" placeholder="ID (4~16자 이내 영문 소문자, 숫자)" />
                                    <button class="btn btn-black" @click="hideModal.modalShow = true">중복검사</button>
                                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                </ValidationProvider>
                                <!-- 비밀번호 -->
                                <p class="form-title accent"><span>비밀번호</span></p>
                                <ValidationProvider rules="required" v-slot="{ errors }"
                                    class="form-line form-feedback form-pwd">
                                    <input v-model="password" type="password" name="password"
                                        :class="{ 'invalid': errors.length }" class="form-basic custom-placeholder"
                                        placeholder="비밀번호(10~16자 이내 영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합)" />
                                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                </ValidationProvider>
                                <!-- 재입력 -->
                                <p class="form-title accent"><span>비밀번호 재입력</span></p>
                                <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                                    <input v-model="passwordConfirm" type="text" name="passwordConfirm"
                                        :class="{ 'invalid': errors.length }" class="form-basic" placeholder="비밀번호 재입력" />
                                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                </ValidationProvider>
                                <!-- 이메일 -->
                                <p class="form-title accent"><span>이메일</span></p>
                                <ValidationProvider rules="required|email" v-slot="{ errors }"
                                    class="form-line form-feedback">
                                    <input v-model="email" type="text" name="email" :class="{ 'invalid': errors.length }"
                                        class="form-basic" placeholder="example@company.com" />
                                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                </ValidationProvider>
                                <!-- 휴대전화 -->
                                <p class="form-title accent"><span>휴대전화</span></p>
                                <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-button">
                                    <input v-model="phoneNumber" type="text" name="phoneNumber"
                                        :class="{ 'invalid': errors.length }" class="form-basic"
                                        placeholder="- 없이 휴대전화 숫자만 입력" />
                                    <button class="btn btn-black">인증요청</button>
                                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                </ValidationProvider>
                                <ValidationProvider rules="required" v-slot="{ errors }"
                                    class="form-line form-feedback mt-10">
                                    <input v-model="authNumber" type="text" name="authNumber"
                                        :class="{ 'invalid': errors.length }" placeholder="인증번호 입력" class="form-basic">
                                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                </ValidationProvider>
                                <!-- 일반전화 -->
                                <div class="form-title"><span>일반전화</span></div>
                                <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                                    <input v-model="phone" type="text" name="phone" :class="{ 'invalid': errors.length }"
                                        placeholder="- 없이 전화번호 숫자만 입력" class="form-basic">
                                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                </ValidationProvider>
                                <!-- 이름 -->
                                <p class="form-title accent" v-if="!business"><span>이름</span></p>
                                <ValidationProvider rules="required" v-slot="{ errors }"
                                    class="form-line form-feedback form-name" v-if="!business">
                                    <input v-model="name" type="text" name="name" :class="{ 'invalid': errors.length }"
                                        class="form-basic" placeholder="이름 입력" />
                                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                </ValidationProvider>
                                <!-- 생년월일 -->
                                <!-- <div class="form-title"><span>생년월일</span></div>
                                    <div class="user-birth">
                                        <div class="form-line">
                                            <select name="" id="" class="select-small-arrow">
                                                <option value="">선택</option>
                                                <option value="">1999</option>
                                                <option value="">1998</option>
                                                <option value="">1997</option>
                                            </select>
                                        </div>
                                        <div class="form-line">
                                            <select name="" id="" class="select-small-arrow">
                                                <option value="">선택</option>
                                                <option value="">01</option>
                                                <option value="">02</option>
                                                <option value="">03</option>
                                            </select>
                                        </div>
                                        <div class="form-line">
                                            <select name="" id="" class="select-small-arrow">
                                                <option value="">선택</option>
                                                <option value="">01</option>
                                                <option value="">02</option>
                                                <option value="">03</option>
                                            </select>
                                        </div>
                                    </div> -->
                                <!-- 사업자 - 유형 -->
                                <div v-show="business" :class="{ 'mt-40': business == true }">
                                    <!-- 사업자번호 -->
                                    <div class="form-title accent"><span>사업자번호</span></div>
                                    <ValidationProvider rules="required" v-slot="{ errors }"
                                        class="form-line form-feedback">
                                        <input v-model="businessNumber" type="text" name="businessNumber"
                                            :class="{ 'invalid': errors.length }" placeholder="사업자번호 입력" class="form-basic">
                                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                    <!-- 대표자명 -->
                                    <div class="form-title accent"><span>대표자명</span></div>
                                    <ValidationProvider rules="required" v-slot="{ errors }"
                                        class="form-line form-feedback">
                                        <input v-model="represent" type="text" name="represent"
                                            :class="{ 'invalid': errors.length }" placeholder="대표자명 입력" class="form-basic">
                                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                    <!-- 상호명 -->
                                    <div class="form-title accent"><span>상호명</span></div>
                                    <ValidationProvider rules="required" v-slot="{ errors }"
                                        class="form-line form-feedback">
                                        <input v-model="tradeName" type="text" name="tradeName"
                                            :class="{ 'invalid': errors.length }" placeholder="상호명 입력" class="form-basic">
                                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                    <!-- 업종 -->
                                    <div class="form-title accent"><span>업태/종목</span></div>
                                    <div class="double-form-line">
                                        <div class="form-line">
                                            <ValidationProvider rules="required" v-slot="{ errors }" class="form-feedback">
                                                <input v-model="status" type="text" name="status"
                                                    :class="{ 'invalid': errors.length }" placeholder="업태"
                                                    class="form-basic">
                                                <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-line">
                                            <ValidationProvider rules="required" v-slot="{ errors }" class="form-feedback">
                                                <input v-model="type" type="text" name="type"
                                                    :class="{ 'invalid': errors.length }" placeholder="종목"
                                                    class="form-basic">
                                                <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                </div>
                                <!-- 주소 -->
                                <p class="form-title"><span>주소</span></p>
                                <ValidationProvider rules="required" v-slot="{ errors }"
                                    class="form-line form-button user-address mt-10">
                                    <input v-model="postNumber" type="text" name="postNumber"
                                        :class="{ 'invalid': errors.length }" class="form-basic" placeholder="우편번호"
                                        disabled />
                                    <button class="btn btn-black">우편번호 찾기</button>
                                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                </ValidationProvider>
                                <ValidationProvider rules="required" v-slot="{ errors }"
                                    class="form-line form-feedback mt-10">
                                    <input v-model="address" type="text" name="address"
                                        :class="{ 'invalid': errors.length }" placeholder="기본주소" class="form-basic">
                                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                </ValidationProvider>
                                <ValidationProvider rules="required" v-slot="{ errors }"
                                    class="form-line form-feedback mt-10">
                                    <input v-model="addressDetail" type="text" name="addressDetail"
                                        :class="{ 'invalid': errors.length }" placeholder="상세주소" class="form-basic">
                                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                </ValidationProvider>
                                <p class="info-dot">3층 이상 상가 또는 사업장이 아닌 가정집일 경우 일반 택배로 배송되오니 원활한 배송을 위해 가능한 영업장 주소를 적어주시기
                                    바랍니다.
                                </p>
                                <!-- 환불정보 -->
                                <!-- 환불정보 -->
                                <p class="form-title"><span>환불정보</span></p>
                                <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                                    <input v-model="accountName" type="text" name="accountName"
                                        :class="{ 'invalid': errors.length }" placeholder="예금주명" class="form-basic">
                                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                </ValidationProvider>
                                <div class="double-form-line">
                                    <div class="form-line mt-10">
                                        <select name="" id="" class="select-small-arrow">
                                            <option value="">은행명</option>
                                            <option value="">우리은행</option>
                                            <option value="">하나은행</option>
                                            <option value="">신한은행</option>
                                        </select>
                                        <ValidationProvider rules="required" v-slot="{ errors }" class="form-feedback">
                                            <input v-model="bankNumber" type="text" name="bankNumber"
                                                :class="{ 'invalid': errors.length }" placeholder="계좌번호" class="form-basic">
                                            <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <p class="info-dot">부분 취소 시 필요하오니 입력 바랍니다</p>
                                <!-- 아이디 -->
                                <p class="form-title"><span>추천인 아이디</span></p>
                                <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                                    <input v-model="recommend" type="text" name="recommend"
                                        :class="{ 'invalid': errors.length }" placeholder="추천인 아이디" class="form-basic">
                                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </dd>
                        </dl>
                        <dl class="accordion-list term-list">
                            <dt class="list-tit">
                                <p>약관동의</p>
                                <span @click="toggleList($event)">
                                    <img src="~/assets/images/common/arrow/ico_arr_accordion.png" alt="열기/닫기 화살표">
                                </span>
                            </dt>
                            <dd class="list-wrap">
                                <!-- 수신동의 -->
                                <!-- <p class="form-title"><span>SMS 수신동의</span></p>
                                    <div>
                                        <div class="term-desc" v-html="smsText"></div>
                                        <div class="radio-wrap">
                                            <label>
                                                <input type="radio" name="smsAgree" checked="checked">
                                                <span>동의함</span></label>
                                            <label>
                                                <input type="radio" name="smsAgree">
                                                <span>동의안함</span></label>
                                        </div>
                                    </div> -->
                                <!-- 수신동의 -->
                                <!-- <p class="form-title"><span>E-mail 수신동의</span></p>
                                    <div>
                                        <div class="term-desc" v-html="emailText"></div>
                                        <div class="radio-wrap">
                                            <label>
                                                <input type="radio" name="emailAgree" checked="checked">
                                                <span>동의함</span></label>
                                            <label>
                                                <input type="radio" name="emailAgree">
                                                <span>동의안함</span></label>
                                        </div>
                                    </div> -->
                                <!-- 약관동의 -->
                                <div class="terms-area">
                                    <div class="terms-line">
                                        <div class="check-wrap">
                                            <label>
                                                <input id="allCheck" type="checkbox" v-model="allCheckInput" />
                                                <span>모든 약관 동의</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="divider"></div>
                                    <!-- 나머지 체크박스들 -->
                                    <!-- <div class="terms-line" v-for="(checkboxValue, index) in checkboxValues" :key="index"
                                        :id="'modalItem' + index">
                                        <div>
                                            <div class="check-wrap">
                                                <label>
                                                    <input type="checkbox" v-model="checkboxValues[index].checked" />
                                                    <span>{{ terms[index] }}</span>
                                                </label>
                                            </div>
                                            <span @click="checkboxValue.modalShow = true">약관보기</span>
                                            <modal-default :modalInfo="checkboxValue.modalInfo" :modalShow="checkboxValue.modalShow"
                                                @modalClose="checkboxValue.modalShow = false">
                                                <div v-html="checkboxValue.modalText">
                                                </div>
                                            </modal-default>
                                        </div>
                                        </div> -->
                                    <div class="terms-line">
                                        <div>
                                            <div class="check-wrap">
                                                <label>
                                                    <input type="checkbox" v-model="checkboxValues[0].checked" />
                                                    <span>{{ terms[0] }}</span>
                                                </label>
                                            </div>
                                            <span @click="checkboxValues[0].modalShow = true">약관보기</span>
                                            <modal-default :modalInfo="checkboxValues[0].modalInfo"
                                                :modalShow="checkboxValues[0].modalShow"
                                                @modalClose="checkboxValues[0].modalShow = false">
                                                <div v-html="checkboxValues[0].modalText">
                                                </div>
                                            </modal-default>
                                        </div>
                                        <p class="feedback" v-show="!checkboxValues[0].checked">필수 약관에 동의해 주세요.</p>
                                    </div>
                                    <div class="terms-line">
                                        <div>
                                            <div class="check-wrap">
                                                <label>
                                                    <input type="checkbox" v-model="checkboxValues[1].checked" />
                                                    <span>{{ terms[1] }}</span>
                                                </label>
                                            </div>
                                            <span @click="checkboxValues[1].modalShow = true">약관보기</span>
                                            <modal-default :modalInfo="checkboxValues[1].modalInfo"
                                                :modalShow="checkboxValues[1].modalShow"
                                                @modalClose="checkboxValues[1].modalShow = false">
                                                <div v-html="checkboxValues[1].modalText">
                                                </div>
                                            </modal-default>
                                        </div>
                                        <p class="feedback" v-show="!checkboxValues[1].checked">필수 약관에 동의해 주세요.</p>
                                    </div>
                                    <!-- <div class="terms-line">
                                        <div>
                                            <div class="check-wrap">
                                                <label>
                                                    <input type="checkbox" v-model="checkboxValues[2].checked" />
                                                    <span>{{ terms[2] }}</span>
                                                </label>
                                            </div>
                                            <span @click="checkboxValues[2].modalShow = true">약관보기</span>
                                            <modal-default :modalInfo="checkboxValues[2].modalInfo"
                                                :modalShow="checkboxValues[2].modalShow"
                                                @modalClose="checkboxValues[2].modalShow = false">
                                                <div v-html="checkboxValues[2].modalText">
                                                </div>
                                            </modal-default>
                                        </div>
                                        </div> -->
                                    <div class="terms-line receive-ad">
                                        <div class="select-terms">
                                            <div class="check-wrap">
                                                <label>
                                                    <input type="checkbox" v-model="checkboxValues[2].checked" />
                                                    <span>{{ terms[2] }}</span>
                                                </label>
                                            </div>
                                            <span @click="checkboxValues[2].modalShow = true">약관보기</span>
                                            <modal-default :modalInfo="checkboxValues[2].modalInfo"
                                                :modalShow="checkboxValues[2].modalShow"
                                                @modalClose="checkboxValues[2].modalShow = false">
                                                <div v-html="checkboxValues[2].modalText">
                                                </div>
                                            </modal-default>
                                        </div>
                                        <div class="check-wrap">
                                            <label>
                                                <input type="checkbox" v-model="checkboxValues[3].checked" />
                                                <span>SMS</span>
                                            </label>
                                            <label>
                                                <input type="checkbox" v-model="checkboxValues[4].checked" />
                                                <span>E-mail</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-wrap mt-40">
                                    <button class="btn btn-secondary">가입하기</button>
                                </div>
                            </dd>
                        </dl>
                    </form>
                </ValidationObserver>
            </client-only>
        </div>
        <modal-default :modalInfo="hideModal.modalInfo" :modalShow="hideModal.modalShow"
            @modalClose="hideModal.modalShow = false">
            <div class="modal-content">
                <!-- 텍스트 가운데 정렬 -->
                <div class="text-center">
                    {{ hideModal.resultMessage }}
                </div>
                <div class="btn-wrap"><button type="button" class="btn btn-primary">닫기</button></div>
            </div>
        </modal-default>
    </section>
</template>
<script>
export default {
    name: 'joinPage',
    data() {
        return {
            business: true,
            selectedValue: "null",
            //id 중복검사
            hideModal: {
                modalShow: false,
                modalInfo: {
                    modalFull: false,
                    modalWidthSmall: true,
                    headerShow: false,
                    dimmed: true,
                },
                resultMessage: "사용 가능한 아이디입니다."
            },
            //약관
            checkboxValues: [{
                checked: true,
                modalText: "이용약관 내용...",
                modalInfo: {
                    modalTitle: "이용약관",
                    modalFull: false,
                    headerShow: true,
                    dimmed: true,
                },
                modalShow: false,
            },
            {
                checked: true,
                modalText: "개인정보 수집 약관 내용...",
                modalInfo: {
                    modalTitle: "개인정보 수집 약관",
                    modalFull: false,
                    headerShow: true,
                    dimmed: true,
                },
                modalShow: false,
            },
            // {
            //     checked: false,
            //     modalText: "마케팅 이용약관 내용...",
            //     modalInfo: {
            //         modalTitle: "마케팅 이용약관",
            //         modalFull: false,
            //         headerShow: true,
            //         dimmed: true,
            //     },
            //     modalShow: false,
            // },
            {
                checked: false,
                modalText: "광고성 정보 수신 동의 내용...",
                modalInfo: {
                    modalTitle: "광고성 정보 수신 동의",
                    modalFull: false,
                    headerShow: true,
                    dimmed: true,
                },
                modalShow: false,
            },
            { checked: false, },
            { checked: false, },
            ],
            terms: [
                "이용약관 동의(필수)",
                "개인정보 수집·이용 동의(필수)",
                // "마케팅이용약관 동의(선택)",
                "광고성 정보 수신 동의(선택)"
            ],
            // smsText: "수신동의시 쇼핑몰에서 제공하는 이벤트 및 다양한 정보를 SMS / E-mail로 받아볼 수 있습니다. (단, 회원가입, 거래정보-결제/배송/교환/환불 등과 같은 운영정보는 수신동의 여부와 관계없이 발송됩니다.)",
            // emailText: "수신동의시 쇼핑몰에서 제공하는 이벤트 및 다양한 정보를 SMS / E-mail로 받아볼 수 있습니다. (단, 회원가입, 거래정보-결제/배송/교환/환불 등과 같은 운영정보는 수신동의 여부와 관계없이 발송됩니다.)"

        }
    },
    mounted() {
    },
    methods: {
        toggleList(event) {

            let listTitle = event.currentTarget.parentNode.parentNode;

            if (listTitle.classList.contains('closed')) {
                listTitle.classList.remove('closed');
            } else {
                listTitle.classList.add('closed')
            }
        },
        toggleType(event) {
            const inputId = event.target.getAttribute('id');
            if (inputId === 'businessUser') {
                this.business = true;
            } else {
                this.business = false;
            }
        },
    },
    computed: {
        allCheckInput: {
            get() {
                return this.checkboxValues.every((value) => value.checked);
            },
            set(newValue) {
                this.checkboxValues.forEach((checkbox) => {
                    checkbox.checked = newValue;
                });
            },
        },
    },
    watch: {
        'checkboxValues.2.checked': function (newCheckedValue2) {
            if (newCheckedValue2 && this.checkboxValues[2].checked) {
                this.checkboxValues[3].checked = true;
                this.checkboxValues[4].checked = true;
            } else {
                this.checkboxValues[3].checked = false;
                this.checkboxValues[4].checked = false;
            }
        },
        'checkboxValues.3.checked': function (newCheckedValue3) {
            if (newCheckedValue3 && this.checkboxValues[4].checked) {
                this.checkboxValues[2].checked = true;
            }
        },
        'checkboxValues.4.checked': function (newCheckedValue4) {
            if (newCheckedValue4 && this.checkboxValues[4].checked) {
                this.checkboxValues[2].checked = true;
            }
        }
    }
}
</script>
<style scoped>
/* radio */
.join .radio-wrap label {
    margin-right: 4rem;
    font-size: 1.5rem;
}

/* form-line */
.join .form-title {
    margin-top: 4rem;
}

.form-title:first-child {
    margin-top: 0;
}

.join .form-title.mt-20 {
    margin-top: 2rem;
}

.join .form-title+.radio-wrap {
    margin-top: -1rem;
    height: auto;
}

.join .radio-wrap.businessType {
    display: inline-block;
    line-height: 3rem;
    margin-top: 0;
}

.join .radio-wrap.businessType+.form-line {
    margin-top: 1rem;
}

.join .user-birth {
    display: flex;
}

.join .user-birth .form-line {
    flex: 1;
    margin-left: 1rem;
}

.join .user-birth .form-line:first-child {
    margin-left: 0;
}

.user-address.form-button .btn-black {
    max-width: 12rem;
}

.join .info-dot {
    position: relative;
    line-height: 1.33;
    margin-top: 0.6rem;
    padding-left: 0.4rem;
    color: #757575;
    font-size: 1.2rem;
    font-weight: 400;
}

.join .info-dot::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 2px;
    background-color: #757575;
    transform-origin: center;
    transform: translateY(6px);
}


/* terms-area */
.terms-area {
    font-size: 1.5rem;
}

.terms-area .terms-line>div,
.terms-area .check-wrap label {
    display: flex;
    align-items: center;
}

.terms-area .terms-line .select-terms {
    width: 100%;
    flex: 1 1 auto;
}

.terms-area .terms-line.receive-ad>.check-wrap {
    padding: 0 1.4rem;
    margin-top: 1.4rem;
    background-color: unset;
}

.terms-area .terms-line.receive-ad>.check-wrap label {
    flex: 1 1 auto;
}

.terms-area .divider {
    display: block;
    width: 100%;
    height: 1px;
    background: #eee;
    margin: 2rem 0;
}

.terms-line {
    flex-wrap: wrap;
}

.terms-line .feedback {
    width: 100%;
    flex: none;
}

.terms-area .terms-line>div {
    justify-content: space-between;
}

.terms-line .check-wrap {
    flex: 1;
}

.terms-line>div>span {
    color: #b2b2b2;
    cursor: pointer;
    text-decoration: underline;
    margin-left: 2rem;
}

.terms-area>div,
.terms-area .check-wrap label {
    display: flex;
    align-items: center;
}

.terms-area .divider {
    display: block;
    width: 100%;
    height: 1px;
    background: #eee;
    margin: 2rem 0;
}

.terms-line {
    flex-wrap: wrap;
    margin-bottom: 1.4rem;
}

:last-child {
    margin-bottom: 0;
}

.terms-line .check-wrap span {
    margin-left: 1rem;
}

.terms-line .feedback {
    width: 100%;
    flex: none;
}

.terms-line>div {
    flex: 1;
    justify-content: space-between;
}

.terms-line>div>span {
    cursor: pointer;
    text-decoration: underline;
}

.term-desc {
    border: 1px solid #e1e1e1;
    background-color: #fbfbfb;
    padding: 1.4rem 2rem;
    font-size: 1.5rem;
    line-height: 1.67;
    color: #9e9e9e;
    border-radius: 5px 5px 0 0;
}

.term-desc~.radio-wrap {
    display: flex;
    align-items: center;
    height: unset;
    line-height: unset;
    border: 1px solid #e1e1e1;
    border-top: 0;
    padding: 1.4rem 2rem;
}

.join .info-desc * {
    font-size: 1.2rem;
}

@media (max-width: 480px) {
    .join .double-form-line .select-basic {
        max-width: 12.4rem;
    }
}
</style>