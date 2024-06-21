<template>
    <div class="main-customer-area">
        <div class="top" @click="mainNoticeModal.modalShow = !mainNoticeModal.modalShow">
            <strong>공지사항</strong>
            <p>
                <!-- notice 클래스 추가 -->
                <span class="notice">{{ mainNotice.desc }}</span>
                <span class="divider"></span>
                <span>{{ mainNotice.registDate }}</span>
            </p>
            <span class="pc">더보기<img src="~/assets/images/common/arrow/ico_arr_link_small.png" alt="더보기"></span>
        </div>
        <div class="pc">
            <div class="content">
                <div class="link-list">
                    <div @click="FAQModal.modalShow = true">
                        <strong>세무관련 안내</strong>
                        <p>계산서 발행 및 카드전표 등</p>
                    </div>
                    <div @click="FAQModal.modalShow = true">
                        <strong>상품등재 안내</strong>
                        <p>주요 축종 · 브랜드별 등재 / 요일 · 시간</p>
                    </div>
                    <div @click="FAQModal.modalShow = true">
                        <strong>회원혜택 안내</strong>
                        <p>라이블리만의 특별한 할인 혜택</p>
                    </div>
                    <div @click="FAQModal.modalShow = true">
                        <strong>반품/환불 안내</strong>
                        <p>자세한 방법을 안내드려요</p>
                    </div>
                </div>
                <div class="customer-center">
                    <p class="tit">고객센터</p>
                    <a href="tel:1588-4192">1588-4192</a>
                    <div>
                        <nuxt-link to="/">카카오톡 문의</nuxt-link>
                        <nuxt-link to="/">1:1 문의</nuxt-link>
                    </div>
                    <p><b>전화 문의</b><span>09:00 - 18:00</span></p>
                    <p><b>채팅 상담</b><span>09:00 - 18:00</span></p>
                    <p><b>운영 상담</b><span>24시간 접수 가능</span></p>
                </div>
            </div>
        </div>
        <div class="mobile">
            <div class="content mb-40">
                <p>가장 궁금해 하시는 정보</p>
                <div class="link-list">
                    <div @click="FAQModal.modalShow = true">
                        <img src="~/assets/images/common/mobile/ico_m_info_01.png" alt="세무관련안내">
                        <p>세무관련</p>
                        <p>안내<span class="arrow"><img src="~/assets/images/common/mobile/ico_m_footer_link.png"></span></p>
                    </div>
                    <div @click="FAQModal.modalShow = true">
                        <img src="~/assets/images/common/mobile/ico_m_info_02.png" alt="상품등재안내">
                        <p>상품등재</p>
                        <p>안내<span class="arrow"><img src="~/assets/images/common/mobile/ico_m_footer_link.png"></span></p>
                    </div>
                    <div @click="FAQModal.modalShow = true">
                        <img src="~/assets/images/common/mobile/ico_m_info_03.png" alt="회원혜택안내">
                        <p>회원혜택</p>
                        <p>안내<span class="arrow"><img src="~/assets/images/common/mobile/ico_m_footer_link.png"></span></p>
                    </div>
                    <div @click="FAQModal.modalShow = true">
                        <img src="~/assets/images/common/mobile/ico_m_info_04.png" alt="반품환불안내">
                        <p>반품/환불</p>
                        <p>안내<span class="arrow"><img src="~/assets/images/common/mobile/ico_m_footer_link.png"></span></p>
                    </div>
                </div>
                <!-- <div class="customer-center">
                    <a href="tel:1588-4192" class="tel-link">
                        <img src="~/assets/images/common/layout/ico_m_ask.png">
                        주문 . 상담 <span>1588-4192</span>
                    </a>
                    <strong>전화상담</strong>
                    <p><b>평일</b><span>오전 9시 ~ 오후 6시 (주말/공휴일 휴무)</span></p>
                    <p><b>점심시간</b><span>오후 12시 ~ 오후 1시</span></p>
                    <nuxt-link to="/customer/notice" class="btn btn-gray">고객센터 바로가기<img
                            src="~/assets/images/common/arrow/ico_footer_link.png"></nuxt-link>
                </div> -->
            </div>
        </div>

        <modal-default :modalInfo="mainNoticeModal.modalInfo" :modalShow="mainNoticeModal.modalShow"
            @modalClose="mainNoticeModal.modalShow = false">
            <div class="modal-content" v-text="mainNotice.desc"></div>
        </modal-default>


        <!-- FAQ-modal 팝업 -->
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

    </div>
</template>
<script>
export default {
    data() {
        return {
            mainNotice: {
                desc: '2주년 마감임박 세일 (~7월 2일까지) 2주년 마감임박 세일 (~7월 2일까지) 2주년 마감임박 세일 (~7월 2일까지) 2주년 마감임박 세일 (~7월2일까지) 2주년 마감임박세일 (~7월 2일까지) 2주년 마감임박 세일 (~7월 2일까지) 2주년 마감임박 세일 (~7월 2일까지)',
                registDate: '2023-06-25'
            },
            mainNoticeModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: '공지사항',
                    modalFull: false,
                    headerShow: true,
                    dimmed: true,
                },
            },
            FAQModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "세무관련 안내",
                    modalFull: false,
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
        }
    }
}
</script>
<style>
.main-customer-area {
    width: 100%;
    max-width: 119.4rem;
    margin: 0 auto;
}

.main-customer-area>div,
.main-customer-area>.top {
    width: 100%;
    margin-bottom: 4rem;
}

.main-customer-area .top {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    padding: 1.7rem 2rem;
    box-sizing: border-box;
    border: 1px solid #e1e1e1;
    cursor: pointer;
}

.main-customer-area .top>strong,
.main-customer-area .top>.pc {
    flex: none;
}

.main-customer-area .top>p {
    flex: 1;
}

.main-customer-area .top strong {
    display: inline-block;
    font-size: 1.8rem;
    color: #000;
    margin-right: 2rem;
    font-weight: 700;
}

.main-customer-area .top .pc,
.main-customer-area .top>p {
    display: inline-flex;
    align-items: center;
    font-size: 1.4rem;
    color: #979797;
}

.main-customer-area .top .pc {
    text-align: right;
    margin-left: 1rem;
}

.main-customer-area .top span.notice {
    max-width: 68%;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    word-break: keep-all;
    text-overflow: ellipsis;
    overflow: hidden;
}

.main-customer-area .top span img {
    width: 0.6rem;
    height: auto;
    margin-left: 0.6rem;
}

.main-customer-area .top .divider {
    display: inline-block;
    width: 2px;
    height: 1.4rem;
    margin: 0 1.4rem;
    background-color: #979797;
}

.main-customer-area .pc .content {
    display: flex;
}

.main-customer-area .pc .content .link-list {
    display: inline-flex;
    flex-wrap: wrap;
    flex: 1;
    max-width: 65%;
}

.main-customer-area .pc .link-list>div {
    display: flex;
    flex-direction: column;
    flex: none;
    width: calc(50% - 1rem);
    background: #fbfbfb url('~/assets/images/common/arrow/ico_arr_gray_large_right.png') no-repeat calc(100% - 2.5rem) center / 4rem auto;
    padding: 2.4rem 1.9rem 2.1rem;
    margin-top: 2rem;
    border-radius: 1rem;
    cursor: pointer;
}

.main-customer-area .pc .link-list>div:nth-child(odd) {
    margin-right: 1rem;
}

.main-customer-area .pc .link-list>div:nth-child(even) {
    margin-left: 1rem;
}

.main-customer-area .pc .link-list>div:nth-child(n+1):nth-child(-n+2) {
    margin-top: 0;
}

.main-customer-area .pc .link-list strong {
    display: block;
    font-size: 1.8rem;
    font-weight: 700;
    margin: .4rem 0;
}

.main-customer-area .pc .link-list p {
    font-size: 1.4rem;
    color: #757575;
    margin: .4rem 0;
}

.main-customer-area .pc .customer-center {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 26.9%;
    margin-left: 8.1%;
}

.main-customer-area .pc .customer-center .tit {
    font-size: 1.8rem;
    font-weight: 700;
    color: #000;
}

.main-customer-area .pc .customer-center>a {
    font-size: 4rem;
    font-weight: 700;
    color: #f02d40;
    margin: 0.4rem 0 1rem;
    letter-spacing: -0.1rem;
}

.main-customer-area .pc .customer-center>div {
    display: flex;
    flex-direction: row;
    margin-bottom: 1.3rem;
}

.main-customer-area .pc .customer-center div a {
    display: inline-block;
    width: 100%;
    max-width: calc(50% - 0.6rem);
    line-height: 3.8rem;
    margin-right: 0.6rem;
    font-size: 1.4rem;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid #e1e1e1;
    background-color: #fff;
}

.main-customer-area .pc .customer-center p {
    font-size: 1.4rem;
    line-height: 1.45;
}

.main-customer-area .pc .customer-center p b {
    color: #757575;
    margin-right: 1.3rem
}

.main-customer-area .pc .customer-center p span {
    font-weight: 500;
}


@media (max-width:767px) {
    .main-customer-area .mobile {
        margin-bottom: 0;
    }

    .main-customer-area .top {
        padding: 1.4rem 1rem;
        margin-right: 1.6rem;
        margin-left: 1.6rem;
        max-width: calc(100% - 3.2rem);
    }

    .main-customer-area .top strong {
        font-size: 1.4rem;
        margin-right: 0.8rem;
    }

    .main-customer-area .top>p {
        font-size: 1.2rem;
    }

    .main-customer-area .top .divider {
        width: 1px;
        height: 0.8rem;
        margin: 0 0.8rem;
    }

    .mobile .content>p,
    .mobile .content .link-list {
        padding-right: 1.6rem;
        padding-left: 1.6rem;
    }

    .mobile .content>p {
        margin-bottom: 2rem;
        font-size: 2.2rem;
        font-weight: 700;
        color: #000;
    }

    .mobile .content .link-list {
        display: flex;
    }

    .mobile .content .link-list>div {
        flex: 1;
        margin-right: 6px;
        padding: 1rem;
        border-radius: 5px;
        background-color: #f5f6f8;
        cursor: pointer;
    }

    .mobile .content .link-list>div:last-child {
        margin-right: 0;
    }

    .mobile .content .link-list>div>img {
        width: 4rem;
        height: auto;
        margin: 0 auto 1rem;
    }

    .mobile .content .link-list>div>p {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        margin: 2px 0;
        color: #333;
    }

    .mobile .content .link-list .arrow {
        display: inline-block;
        width: 1.4rem;
        height: auto;
        margin-left: 3px;
    }

    .mobile .customer-center {
        margin-top: 4rem;
        padding: 3.2rem 1.6rem 3rem;
        background: #f5f6f8;
    }

    .mobile .customer-center .tel-link {
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 6rem;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 3rem;
        color: #fff;
        border-radius: 3rem;
        box-shadow: 4.5px 7.8px 24px 0 rgba(50, 50, 50, 0.25);
        background-image: linear-gradient(to top, #ed2c2c, #f44e72);
    }

    .mobile .customer-center>a>span {
        font-size: 2.3rem;
        font-weight: 700;
        margin-left: 0.8rem;
    }

    .mobile .customer-center>a img {
        width: 2rem;
        height: auto;
        margin-right: 0.7rem;
    }

    .mobile .customer-center strong {
        display: block;
        font-size: 1.6rem;
        font-weight: 700;
        margin-bottom: 1rem;
        line-height: 1.25;
    }

    .mobile .customer-center p {
        position: relative;
        padding-left: 0.6rem;
        margin-bottom: 0.4rem;
        font-size: 1.4rem;
        line-height: 1.25;
    }

    .mobile .customer-center p:last-child {
        margin-bottom: 0;
    }

    .mobile .customer-center p::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 2px;
        height: 2px;
        border-radius: 2px;
        transform: translateY(-50%);
        background-color: #000;
    }

    .mobile .customer-center p b {
        font-weight: 700;
        margin-right: 0.4rem;
        color: #333;
    }

    .mobile .customer-center p span {
        font-weight: 400;
        color: #757575;
    }

    .main-customer-area .top span {
        font-size: 1.2rem;
        flex: none;
    }

    .main-customer-area .top span:last-child {
        text-align: right;
    }

    .mobile .customer-center a.btn-gray {
        width: 13.5rem;
        height: 3.4rem;
        line-height: 1;
        margin: 1.4rem 0 0;
        border-radius: 5px;
        color: #333;
        font-weight: 400;
        font-size: 1.4rem;
        white-space: nowrap;
    }

    .mobile .customer-center a.btn-gray img {
        margin: 0 0 0 4px;
        width: auto;
        height: 10px;
    }
}
</style>