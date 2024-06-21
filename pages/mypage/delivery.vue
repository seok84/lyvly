<template>
    <section class="mypage-view mypage-delivery">
        <div class="content-title" :class="{ 'left': !addressList }">
            <span>배송주소록 관리</span>
            <button class="btn btn-title-side">기본 배송지 설정</button>
        </div>
        <div class="mypage-list-container" v-if="addressList">
            <div class="mypage-list" v-for="( info, index ) in addressInfo" :key="'address_' + index"
                :class="{ active: info.checked == true }">
                <div class="radio-wrap content">
                    <label>
                        <input type="radio" name="defaultAddress" :checked="info.checked">
                        <div class="info">
                            <p class="title"><strong>{{ info.title }}</strong><span class="default-label"
                                    v-if="info.checked">기본배송지</span>
                            </p>
                            <p>{{ info.userName }}</p>
                            <p class="address"><span>[{{ info.post }}]</span> {{ info.roadName }}</p>
                            <p>{{ info.phoneNumber }}</p>
                            <p>{{ info.homeNumber }}</p>
                        </div>
                    </label>
                </div>
                <div class="btn-wrap">
                    <div class="btn btn-gray" @click="modifyAddressModal.modalShow = !modifyAddressModal.modalShow">
                        수정
                    </div>
                    <div class="btn btn-gray" @click="hideModal.modalShow = true">삭제</div>
                </div>
            </div>
        </div>
        <div class="no-content" v-else>
            등록된 배송지 정보가 없습니다.
        </div>
        <button class="mypage-add-btn" @click="addAddressModal.modalShow = !addAddressModal.modalShow">
            <img src="~/assets/images/common/ico_add.svg">
            배송지 추가
        </button>
        <!-- 배송지 수정 -->
        <modal-default :modalInfo="modifyAddressModal.modalInfo" :modalShow="modifyAddressModal.modalShow"
            @modalClose="modifyAddressModal.modalShow = false">
            <form>
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
                    <ValidationProvider rules="required" v-slot="{ errors }"
                        class="form-line form-button user-address mt-10">
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
                        <input v-model="addressDetail" type="text" name="addressDetail"
                            :class="{ 'invalid': errors.length }" placeholder="상세주소" class="form-basic">
                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <!-- 휴대폰 -->
                    <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                        <input v-model="phone" type="text" name="phone" :class="{ 'invalid': errors.length }"
                            placeholder="- 없이 휴대폰 숫자만 입력" class="form-basic">
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
                    <button type="button" class="btn width-half btn-primary">확인</button>
                </div>
            </form>
        </modal-default>
        <!-- 주소 삭제 -->
        <modal-default :modalInfo="hideModal.modalInfo" :modalShow="hideModal.modalShow"
            @modalClose="hideModal.modalShow = false">
            <div class="modal-content">
                <!-- 텍스트 가운데 정렬 -->
                <div class="only-text">
                    해당 주소를 삭제합니까?
                </div>
                <div class="flex-center btn-wrap">
                    <button type="button" class="btn width-half btn-default">취소</button>
                    <button type="button" class="btn width-half btn-primary" @click="deleteList()">확인</button>
                </div>
            </div>
        </modal-default>
        <!-- 배송지 추가 -->
        <modal-default :modalInfo="addAddressModal.modalInfo" :modalShow="addAddressModal.modalShow"
            @modalClose="addAddressModal.modalShow = false">
            <form>
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
                    <ValidationProvider rules="required" v-slot="{ errors }"
                        class="form-line form-button user-address mt-10">
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
                        <input v-model="addressDetail" type="text" name="addressDetail"
                            :class="{ 'invalid': errors.length }" placeholder="상세주소" class="form-basic">
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
                    <button type="button" class="btn width-half btn-primary">확인</button>
                </div>
            </form>
        </modal-default>
    </section>
</template>
<script>
export default {
    layout: "divide",
    data() {
        return {
            addressList: true,
            addressInfo: [
                {
                    title: '기본배송지',
                    userName: '강가가',
                    post: '08381',
                    roadName: '서울특별시 구로구 디지털로27길 24 711 온라인파워스',
                    phoneNumber: '010 - 1234 - 5678',
                    homeNumber: '010 - 1234 - 5678',
                    checked: true
                },
                {
                    title: '배송지02',
                    userName: '누나나',
                    post: '08381',
                    roadName: '서울특별시 구로구 디지털로27길 24 711 온라인파워스',
                    phoneNumber: '010 - 1234 - 5678',
                    homeNumber: '010 - 1234 - 5678',
                    checked: ''
                },
                {
                    title: '배송지03',
                    userName: '도다다',
                    post: '08381',
                    roadName: '서울특별시 구로구 디지털로27길 24 711 온라인파워스',
                    phoneNumber: '010 - 1234 - 5678',
                    homeNumber: '010 - 1234 - 5678',
                    checked: ''
                },
            ],
            addAddressModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "배송지 추가",
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            hideModal: {
                modalShow: false,
                modalInfo: {
                    modalFull: false,
                    modalWidthSmall: true,
                    headerShow: false,
                    dimmed: true,
                },
            },
            modifyAddressModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "배송지 수정",
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
        }
    },
    methods: {
        deleteList(index) {
            this.addressInfo.splice(index, 1);
            this.hideModal.modalShow = false
            if (this.addressInfo.length <= 0) {
                this.addressList = !this.addressList
            }
        }
    },
    mounted() {
    }
}
</script>
<style scoped>
@import url("~/assets/css/page/mypage.css");




.mypage-list-container .content label {
    align-items: flex-start;
}

.mypage-list-container .content label input {
    min-width: 2.4rem;
    margin-right: 1rem;
}

.mypage-list-container .content .title {
    display: flex;
    align-items: center;
    line-height: 2.4rem;
}

.mypage-list-container .content .title+p {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.mypage-list-container .content p {
    line-height: 1.3;
}

.mypage-list-container .content p.address {
    margin-bottom: 2px;
}

.mypage-list-container .content strong {
    font-weight: 700;
}

.mypage-list-container .content .default-label {
    padding: 4px 6px;
    margin-left: 6px;
    line-height: 1;
    border: 1px solid #ff3145;
    border-radius: 1.2rem;
    font-size: 1.2rem;
    color: #ff3145;
}



@media (max-width: 767px) {
    .mypage-view .content-title {
        text-align: right;
    }

}
</style>