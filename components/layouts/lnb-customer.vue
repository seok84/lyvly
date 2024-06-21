<template>
    <div class="lnb-wrapper pc">
        <div class="lnb-title">고객센터</div>
        <!-- <p class="title">쇼핑정보</p> -->
        <ul class="sub-menu">
            <li><nuxt-link to="/customer/notice">공지사항</nuxt-link></li>
            <li><nuxt-link to="/customer/faq">FAQ</nuxt-link></li>
            <li><nuxt-link to="/customer/store-inquiry">입점제휴문의</nuxt-link></li>
        </ul>

    </div>
</template>
  
<script>
export default {
    name: 'LNB',
}
</script>

<style scoped>
.lnb-wrapper .lnb-title {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: -0.7px;
    text-align: left;
    color: #000;
    margin: 3rem 0 2rem;
}

.lnb-wrapper .title {
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: -0.63px;
    text-align: left;
    color: #000;
}

.lnb-wrapper ul {
    width: 100%;
    margin-bottom: 3.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
}

.lnb-wrapper ul li a {
    display: block;
    width: 100%;
    height: 3.4rem;
    font-size: 1.5rem;
    line-height: 2.53;
    letter-spacing: -0.53px;
    text-align: left;
    color: #757575;
    background-image: url("~/assets/images/common/arrow/ico_arr_lnb-disable.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: calc(100% - 1.2rem) center;
}

.lnb-wrapper ul li a:hover,
.lnb-wrapper ul li a.nuxt-link-active {
    font-weight: bold;
    color: #f02d40;
    background-image: url("~/assets/images/common/arrow/ico_arr_lnb_active.png");
}

/* 노트북 */
@media (max-width: 1194px) {}

/* 태블릿 */
@media (max-width: 768px) {
    .lnb-wrapper {
        width: 100%;
        margin-right: 0;
        margin-top: 3rem;
    }

    .lnb-wrapper ul li a{
        height: 4rem;
        line-height: 4rem;
    }
}

/* 모바일 */
@media (max-width: 480px) {}
</style>