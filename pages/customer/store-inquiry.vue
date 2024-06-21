<template>
    <section class="customer-view customer-inquiry">
        <div class="content-title">입점제휴문의</div>
        <!-- 모바일 카테고리 -->
        <div class="mobile">
            <ul class="sub-menu">
                <li><nuxt-link to="/customer/notice">공지사항</nuxt-link></li>
                <li><nuxt-link to="/customer/faq">FAQ</nuxt-link></li>
                <li><nuxt-link to="/customer/store-inquiry">입점제휴문의</nuxt-link></li>
            </ul>
        </div>
        <!-- 인풋 영역 -->
        <div class="suggest-area">
            <ValidationObserver ref="observer" v-slot="{ validate }">
                <form @submit.prevent="handleSubmit(validate)">
                    <p class="form-title">
                        <span>문의내용</span>
                    </p>
                    <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                        <input v-model="phone" type="text" name="phone" :class="{ 'invalid': errors.length }"
                            placeholder="제목을 입력하세요" class="form-basic">
                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                        <input v-model="phone" type="text" name="phone" :class="{ 'invalid': errors.length }"
                            placeholder="대표자명을 입력하세요" class="form-basic">
                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                        <textarea v-model="phone" type="text" name="phone" :class="{ 'invalid': errors.length }"
                            placeholder="내용을 입력하세요" class="form-basic"></textarea>
                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <div class="file-upload-area">
                        <input type="file" value="test">
                        <input ref="fileUpload" type="file" name="chosen-file" id="chosen-file"
                            accept=".png, .jpg, .jpeg, .gif, .pdf">
                        <label for="chosen-file" class="btn btn-gray">파일선택</label>
                        <span class="chosen-file-text" :class="{ 'added': addedFile }" @change="addedFile = !addedFile">
                            {{ selectedFilename }}</span>
                    </div>
                    <!-- file 첨부가 필수라면 v-show 컨트롤 필요 -->
                    <span class="feedback" style="display: none;">파일을 첨부해주세요</span>
                    <div class="info-desc">
                        <p>10MB 이내의 jpg, gif, png, pdf 파일만 업로드 가능합니다.</p>
                    </div>
                    <p class="form-title mt-60">
                        <span>고객정보</span>
                    </p>
                    <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                        <input v-model="phone" type="text" name="phone" :class="{ 'invalid': errors.length }"
                            placeholder="회사명" class="form-basic">
                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                        <input v-model="phone" type="text" name="phone" :class="{ 'invalid': errors.length }"
                            placeholder="담당자명" class="form-basic">
                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                        <input v-model="phone" type="text" name="phone" :class="{ 'invalid': errors.length }"
                            placeholder="전화번호 '-'없이 숫자만 입력" class="form-basic">
                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider rules="required|email" v-slot="{ errors }" class="form-line form-feedback">
                        <input v-model="phone" type="text" name="phone" :class="{ 'invalid': errors.length }"
                            placeholder="example@company.com" class="form-basic">
                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <!-- 약관 -->
                    <div class="terms-area">
                        <div class="terms-line">
                            <div class="check-wrap">
                                <label>
                                    <input type="checkbox" />
                                    <span>개인정보 수집·이용 동의(필수)</span>
                                </label>
                            </div>
                            <span @click="termModal.modalShow = true">약관보기</span>
                        </div>

                    </div>
                    <div class="btn-wrap">
                        <div class="btn btn-secondary btn-large" @click="hideModal.modalShow = true">저장</div>
                    </div>
                </form>
            </ValidationObserver>
            <!-- 약관 모달 -->
            <modal-default :modalInfo="termModal.modalInfo" :modalShow="termModal.modalShow"
                @modalClose="termModal.modalShow = false">
                <div v-html="termModal.modalText">
                </div>
            </modal-default>
            <!-- 연락 안내 모달 -->
            <modal-default :modalInfo="hideModal.modalInfo" :modalShow="hideModal.modalShow"
                @modalClose="hideModal.modalShow = false">
                <div class="modal-content">
                    <!-- 텍스트 가운데 정렬 -->
                    <div class="only-text text-center">
                        문의 내용은 담당자가<br />
                        <b>순차적으로 검토 후 연락</b>드리겠습니다.<br />
                        감사합니다.
                    </div>
                </div>
            </modal-default>
        </div>
    </section>
</template>
<script>
export default {
    layout: "divide",
    computed: {
        selectedFilename() {
            return this.inquiryParam.file == null ? '선택된 파일 없음' : 'test'
        }
    },
    data() {
        return {
            addedFile: false,
            inquiryParam: {
                file: null,
            },
            termModal: {
                modalText: "개인정보 수집 약관 내용...",
                modalInfo: {
                    modalTitle: "개인정보 수집 약관",
                    modalFull: false,
                    headerShow: true,
                    dimmed: true,
                },
                modalShow: false,
            },
            hideModal: {
                modalShow: false,
                modalInfo: {
                    modalFull: false,
                    modalWidthSmall: true,
                    headerShow: false,
                    dimmed: false,
                },
            },
        }
    },
    methods: {

    },
    mounted() {
    }
}
</script>
<style>
@import url("~/assets/css/page/mypage.css");
@import url("~/assets/css/page/customer.css");

.customer-inquiry .period-check select {
    flex: 1 1 auto;
    max-width: unset;
    margin-left: 0;
}

.customer-inquiry .info-desc {
    margin-top: 1rem;
}

.customer-inquiry .suggest-area .select-small-arrow {
    width: 100%;
}

.customer-inquiry .suggest-area .form-line {
    margin-top: 1rem;
}

.customer-inquiry .suggest-area textarea {
    padding: 1.4rem;
    min-height: 30rem;
}

.customer-inquiry .suggest-area .btn-wrap {
    margin: 4rem auto;
}

.mt-60 {
    margin-top: 6rem;
}

.customer-inquiry .terms-area>div {
    margin: 1rem 0 0 0;
    font-size: 1.5rem;
}
</style>