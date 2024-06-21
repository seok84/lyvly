<template>
    <section class="customer-view customer-faq ">
        <div class="content-title">FAQ</div>
        <!-- 모바일 카테고리 -->
        <div class="mobile">
            <ul class="sub-menu">
                <li><nuxt-link to="/customer/notice">공지사항</nuxt-link></li>
                <li><nuxt-link to="/customer/faq">FAQ</nuxt-link></li>
                <li><nuxt-link to="/customer/store-inquiry">입점제휴문의</nuxt-link></li>
            </ul>
        </div>
        <div class="content-top">
            <span>전체({{ qaList.length }})</span>
        </div>
        <!-- 조회기간 -->
        <div class="period-check mt-20">
            <select name="" id="" class="select-small-arrow">
                <option value="조회기간">문의 유형을 설정해주세요</option>
                <option value="week">회원/정보관리</option>
            </select>
            <button type="button" class="btn btn-black">조회</button>
        </div>
        <!-- qa 영역 -->
        <div class="customer-container">
            <div class="customer-list" v-for="(item, index) in qaList" :key="'faq_' + index">

                <div class="list-content">
                    <p class="question">
                        <span>[{{ item.user.category }}]</span><strong>{{ item.user.question }}</strong>
                    </p>
                    <!-- 관리자 답변 -->
                    <div class="admin-answer">
                        <strong>{{ item.admin.siteName }} 관리자</strong>
                        <span v-html="item.admin.answer"></span>
                    </div>
                </div>
            </div>
        </div>
        <etc-pagination></etc-pagination>
    </section>
</template>
<script>
export default {
    layout: "divide",
    data() {
        return {
            qaList: [
                {
                    user: {
                        date: '2023-01-02',
                        category: '회원/정보관리',
                        question: '회원 탈퇴시 회원정보는 모두 삭제되나요?',
                    },
                    admin: {
                        status: true,
                        siteName: '라이블리',
                        answer: '관리자 답변이 달립니다. 관리자 답변이 달립니다. 관리자 답변이 달립니다. 관리자 답변이 달립니다.'
                    }
                },
                {
                    user: {
                        date: '2023-01-01',
                        category: '회원/정보관리',
                        question: '회원 탈퇴시 회원정보는 모두 삭제되나요?',
                    },
                    admin: {
                        status: false,
                        siteName: '라이블리',
                        answer: '관리자 답변이 달립니다. 관리자 답변이 달립니다. 관리자 답변이 달립니다. 관리자 답변이 달립니다.'
                    }
                },

            ],
        }
    },
    methods: {
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

.customer-faq .content-top {
    display: flex;
    justify-content: space-between;
}

.customer-faq .content-top span{
    font-weight: 600;
    
}


.customer-faq .period-check select {
    flex: 1 1 auto;
    max-width: unset;
    margin-left: 0;
}

.customer-faq .info-desc {
    margin-top: 2rem;
}

.customer-faq .suggest-area .select-small-arrow {
    width: 100%;
}

.customer-faq .suggest-area .form-line {
    margin-top: 1rem;
}

.customer-faq .suggest-area textarea {
    padding: 1.4rem;
    min-height: 30rem;
}

.customer-faq .suggest-area .btn-wrap {
    margin: 4rem auto;
}
</style>