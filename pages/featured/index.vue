<template>
    <section class="inner featured-list" id="featuredList">
        <!-- 20240223 -->
        <h3 class="page-title">룰렛 이벤트</h3>
        <ul class="list-wrap season-event">
            <li :class="{ 'ended': seasonEvent.ended }">
                <nuxt-link to="/featured/season-event">
                    <div class="thumbnail">
                        <div class="dimmed" v-if="seasonEvent.ended"></div>
                        <!-- 
                            비율 때문에 웹/모바일에서 이미지 두개 등록 
                            pc: 1192 x 130 (px)
                            mobile: 492 x 173 (px)
                        -->
                        <img src="~/static/images/banner/img_user_banner_pc.png" :alt="seasonEvent.title" class="pc">
                        <img src="~/static/images/banner/img_user_banner_mc.png" :alt="seasonEvent.title" class="mobile">
                    </div>
                    <div class="desc">
                        <strong>{{ seasonEvent.title }}</strong>
                        <p>{{ seasonEvent.desc }}</p>
                        <span class="badge">
                            {{ seasonEvent.status }}
                        </span>
                    </div>
                </nuxt-link>
            </li>
        </ul>
        <!-- //20240223 -->
        <h3 class="page-title">이벤트</h3>
        <!-- <nuxt-link to="/featured/season-event" class="season-event-container">
            <img src="~/static/images/banner/img_user_banner_pc.png" alt="룰렛이벤트" class="pc">
            <img src="~/static/images/banner/img_user_banner_mc.png" alt="룰렛이벤트" class="mobile">
        </nuxt-link> -->
        <ul class="list-wrap">
            <li :class="{ 'ended': item.ended }" v-for="(item, index) in  listItems " :key="index">
                <nuxt-link to="/">
                    <div class="thumbnail">
                        <div class="dimmed" v-if="item.ended"></div>
                        <img :src="require(`@/static/images/featured-image/${item.imgName}.png`)" :alt="item.title">
                    </div>
                    <div class="desc">
                        <strong>{{ item.title }}</strong>
                        <p>{{ item.desc }}</p>
                        <span class="badge">
                            {{ item.status }}
                        </span>
                    </div>
                </nuxt-link>
            </li>
        </ul>
        <button type="button" class="btn btn-light show-more">
            더보기
            <img src="@/assets/images/common/arrow/ico_arr_gray_bottom.png" alt="">
        </button>
    </section>
</template>

<script>
export default {
    name: 'eventListPage',
    data() {
        return {
            seasonEvent:{
                    title: '돌려라 돌려! 라이블리 행운의 룰렛',
                    desc: '이벤트 설명  2024.03.01',
                    status: '진행중',
                    ended: false,
            },
            listItems: [
                {
                    imgName: 'event_img_01',
                    title: '지금 바로 지인을 추천하면 대박 혜택이!',
                    desc: '이벤트 설명  2023.01.01',
                    status: '진행중',
                    ended: false,
                },
                {
                    imgName: 'event_img_02',
                    title: '신선물류 참여 브랜드 안내',
                    desc: '이벤트 설명  2023.01.01',
                    status: '진행중',
                    ended: false,
                },
                {
                    imgName: 'event_img_03',
                    title: '사업자회원 신규가입시 20% 할인',
                    desc: '이벤트 설명  2023.01.01',
                    status: '진행중',
                    ended: false,
                },
                {
                    imgName: 'event_img_04',
                    title: '라이블리만의 혜택 한돈 10% 자동적립',
                    desc: '이벤트 설명  2023.01.01',
                    status: '진행중',
                    ended: false,
                },
                {
                    imgName: 'event_img_05',
                    title: '소GOOD! 특별행사관 오픈! 전품목 15% 무한적립',
                    desc: '이벤트 설명  2023.01.01',
                    status: '진행중',
                    ended: false,
                },
                {
                    imgName: 'event_img_06',
                    title: '이제 육우 살땐 라이블리 육우 15% 즉시 할인!',
                    desc: '이벤트 설명  2023.01.01',
                    status: '마감',
                    ended: true,
                },
                {
                    imgName: 'event_img_07',
                    title: '한돈인증점 가입하고 다양한 혜택 누리세요!',
                    desc: '이벤트 설명  2023.01.01',
                    status: '마감',
                    ended: true,
                },
                {
                    imgName: 'img_test_sample_03',
                    title: 'test',
                    desc: '이벤트 설명  test~',
                    status: '마감',
                    ended: true,
                },
            ]
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>
<style scoped>
/* 룰렛이벤트가 있을 때만 사용하는 css */
@import url('@/static/event/roulette-event.css');


.featured-list .list-wrap {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -1.5rem;
}

.featured-list .list-wrap li {
    flex: 1 1 auto;
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    max-width: 50%;
    padding: 0 1.5rem;
    margin-bottom: 3rem;
}

.featured-list .list-wrap li a {
    border-radius: 2rem 2rem 8rem 0;
    border: 1px solid #dfdfdf;
    box-sizing: border-box;
    overflow: hidden;
}

.featured-list a .thumbnail {
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 50.85%;
    overflow: hidden;
    text-align: center;
    z-index: 0;
}

.featured-list .thumbnail .dimmed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

.featured-list .thumbnail img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
}

.featured-list a .desc {
    position: relative;
    padding: 2.5rem 1.7rem;
    border-top: 1px solid #dfdfdf;
}

.featured-list .desc strong {
    display: block;
    margin-bottom: 1rem;
    font-size: 2.4rem;
    font-weight: 700;
}

.featured-list .desc p {
    font-size: 1.6rem;
    color: #8f8f9b;
}


.featured-list .desc .badge {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 2.7rem;
    transform: translateY(-50%);
    min-width: 6.5rem;
    height: 3rem;
    line-height: 1;
    padding: 0 1.2rem;
    border-radius: 2rem 2rem 2rem 0;
    background-color: #f02d40;
    font-size: 1.6rem;
    font-weight: 300;
    letter-spacing: -0.06rem;
    color: #ffffff;

}

/* ended */

.featured-list .ended .thumbnail img {
    filter: grayscale(0.3);
}

.featured-list .ended .badge {
    background-color: #333333;
}

.featured-list .show-more {
    display: none;
}

.featured-list .ended .desc strong,
.featured-list .ended .desc p {
    color: #b2b2b2;
}

/* mobile */
@media (max-width:767px) {
    .featured-list .list-wrap {
        margin: 0;
    }

    .featured-list .list-wrap li {
        max-width: unset;
        padding: 0;
    }

    .featured-list .list-wrap li a {
        border-radius: 2rem 2rem 5rem 0;
    }


    .featured-list a .desc {
        padding: 1.4rem;
    }

    .featured-list .desc strong {
        font-size: 1.6rem;
        margin-bottom: 0.6rem;
    }


    .featured-list .desc p {
        font-size: 1.3rem;
    }

    .featured-list .desc .badge {
        font-size: 1.4rem;
        right: 1.4rem;
    }

    .featured-list .show-more {
        display: block;
        width: 16rem;
        line-height: 4.2rem;
        margin: 3rem auto 10rem;
        border-radius: 4rem;
        border: 1px solid #e1e1e1;
        background-color: #ffffff;
        font-size: 1.4rem;
        font-weight: 400;
    }

    .featured-list .show-more img {
        display: inline-block;
        width: 10px;
        margin-left: 5px;
    }
}
</style>