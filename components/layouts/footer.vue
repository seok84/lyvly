<template>
    <footer>
        <layouts-mobile-category />
        <div class="direction-reverse">
            <div class="link-area">
                <ul class="inner link">
                    <li>
                        <nuxt-link to="/company/about">라이블리도매몰소개</nuxt-link>
                    </li>
                    <span class="divider"></span>
                    <li>
                        <nuxt-link to="/policy/terms">이용약관</nuxt-link>
                    </li>
                    <span class="divider"></span>
                    <li>
                        <nuxt-link to="/policy/privacy">개인정보 처리방침</nuxt-link>
                    </li>
                    <span class="divider"></span>
                    <li>
                        <nuxt-link to="/customer/store-inquiry">입점제휴문의</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="inner info">
                <div class="footer-logo">
                    <img src="~/assets/images/common/layout/img_logo_gray.png" alt="농협 라이블리 로고" />
                    <select name="" id="" class="mobile">
                        <option value="사업자정보">사업자정보</option>
                    </select>
                </div>
                <div class="mobile">
                    <div class="link-wrap">
                        <nuxt-link to="/customer/faq" class="customer-link">고객센터
                            <img src="~/assets/images/common/arrow/ico_footer_link.png">
                        </nuxt-link>
                        <a href="tel:1588-4192" class="tel-link">
                            <img src="~/assets/images/common/layout/ico_m_ask.png">
                            주문 . 상담 <span>1588-4192</span>
                        </a>
                    </div>
                </div>
                <div class="footer-info">
                    <span>상호명 : <strong>농협경제지주주식회사(축산경제)</strong></span>
                    <span>대표자 : <strong>안병우</strong></span>
                    <span>사업자등록번호: <strong>845-85-00512</strong> [<a href="/" target="_blank">사업자정보확인</a>]</span>
                    <span class="divider pc"></span>
                    <span class="leading-15">사업장소재지 : <span class="divider mobile"></span><strong>(04516) 서울특별시 중구 새문안로 16
                            (충정로1가)</strong></span>
                    <span>통신판매업 신고번호 : <strong>2017-서울중구-0503</strong></span>
                    <span class="divider pc"></span>
                    <span>개인정보관리책임자 : <strong>김칠석 (<a href="mailto:help@nhlyvly.com">help@nhlyvly.com</a>)</strong></span>
                    <p class="pc">Copyright &copy; 농협 LYVLY Co., LTD. All rights reserved.</p>
                </div>
            </div>
        </div>
        <p class="mobile copyright">Copyright &copy; 농협 LYVLY Co., LTD. All rights reserved.</p>
    </footer>
</template>
  
<script>

export default {
    data() {
        return {};
    },
    methods: {
    },
    mounted() { },
};
</script>
  
<style scoped>
footer {
    padding-bottom: 9.6rem;
    font-size: 1.4rem;
    margin-top: 4rem;
}




.direction-reverse {
    width: 100%;
}

footer>.inner {
    display: flex;
    flex-wrap: wrap;
    /* padding-bottom: 20rem; */
}

footer .link-area {
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
}

footer ul.link {
    display: flex;
    flex-direction: row;
    flex: none;
    width: 100%;
    padding: 1.7rem 0;
}

footer ul.link>.divider {
    display: inline-block;
    width: 1px;
    height: 10px;
    margin: 0 2rem;
    background-color: #979797;
}

footer ul.link li {
    letter-spacing: -0.09rem;
    color: #757575;
}



footer ul.link li a {
    font-weight: 500;
}

footer .info {
    display: flex;
}

.footer-logo {
    margin-top: 3.5rem;
    margin-right: 4.2rem;
}

.footer-info {
    display: block;
    flex: 1 1 0;
    margin-top: 3.5rem;
    letter-spacing: -0.04rem;
    color: #757575;
}

.footer-info>span {
    margin-right: 1.2rem;
    margin-bottom: 0.8rem;
}

.footer-info>span:last-of-type {
    margin-bottom: 0;
}

.footer-info .divider {
    display: block;
}

.footer-info p {
    margin-top: 1.2rem;
    color: #979797;
}

@media (max-width: 767px) {
    footer {
        font-size: 1.2rem;
        background-color: #f5f6f8;
    }

    .item-list-page~footer {
        padding-bottom: 16rem;
    }

    footer .info {
        padding: 0 1.6rem;
        border-top: 1px solid #e1e1e1;
        background-color: #f5f6f8;
    }

    footer .inner p.mobile {
        margin: 2.3rem auto 2.1rem;
        font-size: 1.2rem;
        color: #b2b2b2;
        letter-spacing: -0.025rem;
    }

    .direction-reverse {
        display: flex;
        flex-direction: column-reverse;
        margin: 0;
        font-size: 1.2rem;
    }

    footer .link-area {
        border: none;
        padding: 0 1.6rem;
    }

    footer ul.link {
        justify-content: space-around;
        padding: 2.4rem 0 2rem;
        border-bottom: 1px solid #e1e1e1;
        background-color: none;
    }

    footer ul.link li:last-child {
        color: #757575;
    }

    footer ul.link>.divider {
        margin: 0 0.6rem;
    }

    footer .info {
        flex-direction: column;
    }

    .footer-logo select.mobile {
        border: none;
        font-size: 1.4rem;
        font-weight: 400;
        color: #757575;
        padding-right: 1.6rem;
        background: url('~/assets/images/common/arrow/ico_arr_gray_top.png') no-repeat center right / 9px auto;
    }

    .footer-logo {
        display: flex;
        width: 100%;
        margin: 3rem 0 0;
    }

    .footer-logo img {
        max-width: 14.3rem;
    }

    .footer-logo select {
        margin-left: auto;
    }

    .footer-info {
        display: flex;
        flex-direction: column;
        margin-top: 2.2rem;
    }

    footer ul.link li a {
        font-weight: normal;
    }

    footer .copyright {
        text-align: center;
        padding: 2.3rem 0 0;
        font-size: 12px;
        color: #b2b2b2;
    }

    footer .mobile .link-wrap {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        margin: 2rem 0 0;
        padding: 0;

    }

    footer .mobile .link-wrap .customer-link {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        border: 1px solid #b2b2b2;
        border-radius: 5px;
        line-height: 2.6rem;
        padding: 0 6px;
        margin-right: 6px;
    }

    footer .mobile .link-wrap .customer-link img {
        margin: 0 0 0 4px;
    }

    footer .mobile .link-wrap .tel-link {
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 2.6rem;
        font-size: 1.2rem;
        font-weight: 400;
        color: #fff;
        border-radius: 3rem;
        padding: 0 2.2rem;
        box-shadow: 4.5px 7.8px 24px 0 rgba(50, 50, 50, 0.25);
        background-image: linear-gradient(to top, #ed2c2c, #f44e72);
    }

    footer .mobile .link-wrap .tel-link>span {
        font-size: 1.4rem;
        font-weight: 600;
        margin-left: 6px;
    }

    footer .mobile .link-wrap .tel-link>img {
        width: 10px;
        height: auto;
        margin-right: 4px;
    }

    .footer-info>span {
        margin-bottom: 4px;
    }

    .leading-15 {
        line-height: 1.25;
    }
}
</style>
  