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
            <nuxt-link :to="{path: '/customer/notice-detail', query:{id: index}}" class="notice-list" v-for="(info, index) in noticeList" :key="'notice_' + index">
                <div class="title">
                    <div>
                        <span class="noti-label" v-if="info.post.accent">공지</span>
                        <strong>{{ info.post.title }}</strong>
                    </div>
                    <span class="date">{{ info.post.date }}</span>
                </div>
            </nuxt-link>
        </div>
        <etc-pagination></etc-pagination>
    </section>
</template>
  
<script>
export default {
    layout: "divide",
    data() {
        return {
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
    }
}
</script>
<style scoped>
@import url("~/assets/css/page/customer.css");
</style>