<template>
    <section class="customer-view customer-notice">
        <div class="content-title">공지사항</div>
        <!-- 모바일 카테고리 -->
        <div class="mobile">
            <ul class="sub-menu">
                <li><nuxt-link to="/customer/notice">공지사항</nuxt-link></li>
                <li><nuxt-link to="/customer/faq">FAQ</nuxt-link></li>
                <li><nuxt-link to="/customer/store-inquiry">입점제휴문의</nuxt-link></li>
            </ul>
        </div>
        <div class="notice-container">
            <div class="notice-list" v-for="(info, index) in noticeList" :key="'notice_' + index" v-show="index == query">
                <div class="title">
                    <p>
                        <span class="noti-label" v-if="info.post.accent">공지</span>
                        <strong>{{ info.post.title }}</strong>
                    </p>
                    <span class="date">{{ info.post.date }}</span>
                </div>
                <div class="content">
                    <img :src="require(`@/static/images/notice/${info.image.imgSrc}.jpg`)" v-if="info.image.showImg">
                    <!-- 텍스트 영역 -->
                    <div v-html="info.content">
                    </div>
                </div>
            </div>
        </div>
        <div class="btn-area">
            <nuxt-link to="/customer/notice" type="button" class="btn btn-list">목록보기</nuxt-link>
        </div>
        
    </section>
</template>
  
<script>
export default {
    layout: "divide",
    data() {
        return {
            query: '',
            noticeList: [
                {
                    hideNoticeContent: false,
                    post: {
                        accent: true,
                        title: '공지가 노출되는 제목줄입니다.',
                        date: '2023-01-02',
                    },
                    image: {
                        imgSrc: null,
                        showImg: false
                    },
                    content: '공지사항 내용 입니다 .공지사항 내용 입니다.공 지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다 .공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다.'
                },
                {
                    hideNoticeContent: true,
                    post: {
                        accent: true,
                        title: '공지가 노출되는 제목줄입니다.',
                        date: '2023-01-02',
                    },
                    image: {
                        imgSrc: null,
                        showImg: false
                    },
                    content: '공지사항 내용 입니다 .공지사항 내용 입니다.공 지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다 .공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다.'
                },
                {
                    hideNoticeContent: false,
                    post: {
                        accent: false,
                        title: '공지가 노출되는 제목줄입니다.',
                        date: '2023-01-01',
                    },
                    image: {
                        imgSrc: null,
                        showImg: false
                    },
                    content: '공지사항 내용 입니다 .공지사항 내용 입니다.공 지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다 .공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다.'
                },
                {
                    hideNoticeContent: false,
                    post: {
                        accent: false,
                        title: '공지가 노출되는 제목줄입니다.',
                        date: '2022-12-31',
                    },
                    image: {
                        imgSrc: '20230811',
                        showImg: true
                    },
                    content: '공지사항 내용 입니다 .공지사항 내용 입니다.공 지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다 .공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다. 공지사항 내용 입니다.'
                },
            ]
        }
    },
    methods: {
        openToggle(info) {
            info.hideNoticeContent = !info.hideNoticeContent
        }
    },
    mounted() {
        this.query = this.$route.query.id;
    }
}
</script>
<style scoped>
@import url("~/assets/css/page/customer.css");
</style>