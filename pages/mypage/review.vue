<template>
    <section class="mypage-view mypage-review ">
        <div class="content-title left">이용후기</div>
        <div class="content-top" v-if="!myReview">
            <span>전체({{ reviewList.length }})</span>
        </div>
        <!-- 조회기간 -->
        <div class="period-check mt-20" v-if="!myReview">
            <select name="" id="" class="select-small-arrow">
                <option value="조회기간">조회기간</option>
                <option value="week">회원/정보관리</option>
            </select>
            <button type="button" class="btn btn-black">조회</button>
        </div>
        <!-- 리스트 영역 -->
        <div class="customer-container" v-if="!myReview">
            <div class="customer-list" v-for="(item, index) in reviewList" :key="'review_' + index">
                <div class="item-list-container text">
                    <p class="user-id">
                        <span>{{ item.user.loginId }}</span>
                        <span class="mobile">작성일:{{ item.user.date }}</span>
                    </p>
                    <div class="item-list">
                        <div class="item">
                            <div class="item-thumbnail-small">
                                <img :src="require(`@/static/images/${item.details.thumbSmall}.png`)"
                                    :alt="item.details.brandName">
                            </div>
                            <table class="basic-item-table">
                                <tbody>
                                    <!-- 1 -->
                                    <tr class="row1">
                                        <!-- 라벨 영역 -->
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
                                    <!-- 2 -->
                                    <tr class="row2">
                                        <td class="text-brand">{{ item.details.brandName }}</td>
                                    </tr>
                                    <!-- 3 -->
                                    <tr class="row3">
                                        <td>
                                            <strong class="text-big">{{ item.details.itemTitle }}</strong>
                                        </td>
                                    </tr>
                                    <!-- 4 -->
                                    <tr class="row4">
                                        <td class="item-part"><span class="text-gray">{{ item.details.subDesc }}</span>
                                        </td>
                                    </tr>
                                    <!-- 5 -->
                                    <tr class="row5">
                                        <td class="process-date"><strong>가공일자</strong>
                                            {{ item.details.processDate }}<span>({{ item.details.oldMonth }}개월령)</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="list-content">
                    <span class="customer-content" v-html="item.user.content"></span>
                    <!-- 썸네일 -->
                    <ul class="thumbnail-area">
                        <!-- @click="openThumbSwiper()" -->
                        <li class="thumbnail" v-for="(image, index) in item.reviewImages" :key="'img_' + index"
                            @click="active(item.reviewImages)">
                            <div>
                                <img :src="require(`@/static/images/${image.imgSrc}.png`)" :alt="'img_' + index">
                            </div>
                        </li>
                    </ul>
                    <!-- <etc-photo-thumbnail :thumbList="item.reviewImages"
                        :activeThumbSwiper="item.activeThumbSwiper"
                        @openSwiper="item.activeThumbSwiper = !item.activeThumbSwiper"></etc-photo-thumbnail> -->
                    <!-- 관리자 답변 -->
                    <div class="admin-answer" v-if="item.admin.status">
                        <strong>{{ item.admin.siteName }} 관리자</strong>
                        <span v-html="item.admin.answer"></span>
                    </div>
                </div>
                <div class="btn-wrap">
                    <span class="thumbs-up">
                        <span>도움됐어요</span>
                        <!-- strong + active 활성화 스타일 -->
                        <strong><i></i>{{ item.goodCount }}+</strong>
                    </span>
                    <div class="btn btn-gray" @click="hideModal.modalShow = true">삭제</div>
                </div>
            </div>
        </div>
        <etc-pagination v-if="!myReview"></etc-pagination>
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
        <etc-photo-thumbnail :thumbList="temp.images" :activeThumbSwiper="temp.activeThumbSwiper"
            @openSwiper="temp.activeThumbSwiper = !temp.activeThumbSwiper"
            v-show="temp.activeThumbSwiper"></etc-photo-thumbnail>
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
            myReview: false,
            reviewList: [
                {
                    showContent: false,
                    user: {
                        loginId: 'myid***',
                        date: '2023-01-02',
                        content: '고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다.'
                    },
                    details: {
                        thumbSmall: 'img_item_sample_01',
                        brandName: '브랜드명',
                        itemTitle: '제목줄이 나오는 영역입니다',
                        subDesc: '윗등심 + 아랫등심 반두분',
                        processDate: '2023-08-14',
                        oldMonth: 29,
                    },
                    reviewImages: [
                        { imgSrc: 'img_thumbnail_small' },
                        { imgSrc: 'img_item_sample_01' },
                        { imgSrc: 'img_item_sample_02' },
                        { imgSrc: 'img_none_1194x922' },
                    ],
                    admin: {
                        status: true,
                        siteName: '라이블리',
                        answer: '관리자 답변이 달립니다. 관리자 답변이 달립니다. 관리자 답변이 달립니다. 관리자 답변이 달립니다.'
                    },
                    goodCount: 99,
                },
                {
                    showContent: false,
                    user: {
                        loginId: 'myid***',
                        date: '2023-01-01',
                        content: '고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다. 고객이 남기는 질문 상세 내용 영역입니다.'
                    },
                    details: {
                        thumbSmall: 'img_item_sample_02',
                        brandName: '브랜드명',
                        itemTitle: '제목줄이 나오는 영역입니다',
                        subDesc: '윗등심 + 아랫등심 반두분',
                        processDate: '2023-08-14',
                        oldMonth: 29,
                    },
                    reviewImages: [
                        { imgSrc: 'img_test_sample_00' },
                        { imgSrc: 'img_test_sample_01' },
                        { imgSrc: 'img_test_sample_02' },
                        { imgSrc: 'img_test_sample_03' },
                    ],
                    admin: {
                        status: false,
                        siteName: '라이블리',
                        answer: '관리자 답변이 달립니다. 관리자 답변이 달립니다. 관리자 답변이 달립니다. 관리자 답변이 달립니다.'
                    },
                    goodCount: 30,
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
            temp: {
                images: [],
                activeThumbSwiper: false
            }

        }
    },
    methods: {
        deleteList(index) {
            this.reviewList.splice(index, 1);
            this.hideModal.modalShow = false
        },
        active(image) {
            this.temp.images = image;
            this.temp.activeThumbSwiper = true;
        }
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





@media (max-width:767px) {}
</style>