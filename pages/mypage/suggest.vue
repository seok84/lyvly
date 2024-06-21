<template>
    <section class="mypage-view mypage-suggest ">
        <div class="content-title" :class="{ 'left': doSuggest == true }">건의하기</div>
        <div class="content-top" v-if="!doSuggest">
            <span>전체({{ qaList.length }})</span>
            <span class="link" @click="doSuggest = !doSuggest">건의하기</span>
        </div>
        <!-- 조회기간 -->
        <div class="period-check mt-20" v-if="!doSuggest">
            <select name="" id="" class="select-small-arrow">
                <option value="문의 유형을 설정해주세요">문의 유형을 설정해주세요</option>
                <option value="week">회원/정보관리</option>
            </select>
            <button type="button" class="btn btn-black">조회</button>
        </div>
        <!-- qa 영역 -->
        <div class="customer-container" v-if="!doSuggest">
            <div class="customer-list" v-for="(item, index) in qaList" :key="'qa_' + index"
                @click="item.showContent = !item.showContent">
                <div class="list-top">
                    <span class="status-completed" v-if="item.admin.status">답변완료</span>
                    <span class="status-waiting" v-else>답변대기</span>
                    <span class="date">{{ item.user.date }}</span>
                </div>
                <div class="list-content">
                    <p class="question">
                        <span>[{{ item.user.category }}]</span><strong>{{ item.user.question }}</strong>
                    </p>
                    <span class="customer-content" v-html="item.user.content" v-show="item.showContent"></span>
                    <!-- 관리자 답변 -->
                    <div class="admin-answer" v-show="item.showContent">
                        <strong>{{ item.admin.siteName }} 관리자</strong>
                        <span v-html="item.admin.answer"></span>
                    </div>
                </div>
                <div class="btn-wrap mt-20">
                    <div class="btn btn-gray" @click="hideModal.modalShow = true">삭제</div>
                </div>
            </div>
        </div>
        <!-- 건의 인풋 영역 -->
        <div class="suggest-area" v-if="doSuggest">
            <ValidationObserver ref="observer" v-slot="{ validate }">
                <form @submit.prevent="handleSubmit(validate)">
                    <select name="" id="" class="select-small-arrow">
                        <option value="">문의 유형을 선택해주세요</option>
                        <option value="">문의 유형-1</option>
                        <option value="">문의 유형-2</option>
                    </select>
                    <span class="feedback">필수 입력 항목입니다.</span>
                    <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                        <input v-model="suggestTitle" type="text" name="phone" :class="{ 'invalid': errors.length }"
                            placeholder="제목을 입력하세요" class="form-basic">
                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
                        <textarea v-model="suggestContent" type="text" name="phone" :class="{ 'invalid': errors.length }"
                            placeholder="내용을 입력하세요" class="form-basic"></textarea>
                        <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <div class="file-upload-area">
                        <input type="file" value="test">
                        <input ref="fileUpload" type="file" name="chosen-file" id="chosen-file"
                            accept=".png, .jpg, .jpeg, .gif, .pdf">
                        <label for="chosen-file" class="btn btn-gray">파일선택</label>
                        <span class="chosen-file-text" :class="{ 'added': addedFile }" @change="addedFile = !addedFile">{{
                            selectedFilename }}</span>
                    </div>
                    <span class="feedback">파일을 첨부해주세요</span>
                    <div class="info-desc">
                        <p>10MB 이내의 jpg, gif, png, pdf 파일만 업로드 가능합니다.</p>
                    </div>
                    <div class="btn-wrap">
                        <button type="button" class="btn btn-gray btn-middle" @click="doSuggest = !doSuggest">취소</button>
                        <button type="submit" class="btn btn-secondary btn-middle">저장</button>
                    </div>
                </form>
            </ValidationObserver>
        </div>
        <etc-pagination v-if="!doSuggest"></etc-pagination>
        <!-- 삭제 확인 모달 -->
        <modal-default :modalInfo="hideModal.modalInfo" :modalShow="hideModal.modalShow"
            @modalClose="hideModal.modalShow = false">
            <div class="modal-content">
                <!-- 텍스트 가운데 정렬 -->
                <div class="only-text">
                    해당 문의를 삭제합니까?
                </div>
                <div class="flex-center btn-wrap">
                    <button type="button" class="btn width-half btn-default">취소</button>
                    <button type="button" class="btn width-half btn-primary" @click="deleteList()">확인</button>
                </div>
            </div>
        </modal-default>
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
            doSuggest: false,
            qaList: [
                {
                    showContent: false,
                    user: {
                        date: '2023-01-02',
                        category: '회원/정보관리',
                        question: '회원 탈퇴시 회원정보는 모두 삭제되나요?',
                        content: '고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다.'
                    },
                    admin: {
                        status: true,
                        siteName: '라이블리',
                        answer: '관리자 답변이 달립니다. 관리자 답변이 달립니다. 관리자 답변이 달립니다. 관리자 답변이 달립니다.'
                    }
                },
                {
                    showContent: false,
                    user: {
                        date: '2023-01-01',
                        category: '회원/정보관리',
                        question: '회원 탈퇴시 회원정보는 모두 삭제되나요?',
                        content: '고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다.'
                    },
                    admin: {
                        status: false,
                        siteName: '라이블리',
                        answer: '관리자 답변이 달립니다. 관리자 답변이 달립니다. 관리자 답변이 달립니다. 관리자 답변이 달립니다.'
                    }
                },

            ],
            hideModal: {
                modalShow: false,
                modalInfo: {
                    modalFull: false,
                    modalWidthSmall: true,
                    headerShow: false,
                    dimmed: true,
                },
            },
            addedFile: false,
            inquiryParam: {
                file: null,
            },
        }
    },
    methods: {
        deleteList(index) {
            this.qaList.splice(index, 1);
            this.hideModal.modalShow = false
        },
    },
    mounted() {
    }
}
</script>
<style scoped>
@import url("~/assets/css/page/mypage.css");
@import url("~/assets/css/page/customer.css");

.link {
    text-decoration: underline;
    cursor: pointer;
}

.mypage-suggest .content-top {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
}


.mypage-suggest .content-top > span:first-child{
    font-weight: 600;
}

.mypage-suggest .period-check select {
    flex: 1 1 auto;
    max-width: unset;
    margin-left: 0;
}

.mypage-suggest .info-desc {
    margin-top: 1rem;
}

.mypage-suggest .suggest-area .select-small-arrow {
    width: 100%;
}

.mypage-suggest .suggest-area .form-line {
    margin-top: 1rem;
}

.mypage-suggest .suggest-area textarea {
    padding: 1.4rem;
    min-height: 30rem;
}

.mypage-suggest .suggest-area .btn-wrap {
    margin: 4rem auto;
}
</style>