<template>
    <div class="error inner">
        <img src="~/assets/images/common/layout/img_error.png" alt="errorImg" class="error-img">
        <div class="error-txt">
            <p>요청한 페이지를 찾을 수 없습니다.</p>
            <p>홈페이지 이용에 불편을 드려 죄송합니다 <br>
                새로고침을 누르시거나, 잠시 후에 이용해 주시기 바랍니다.</p>
        </div>
        <div class="btn-wrap">
            <button type="button" class="btn btn-default">이전화면</button>
            <button type="button" class="btn btn-secondary">메인화면</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["error"],
    layout: "nofooter",
    mounted() {
    }
}
</script>

<style scoped>
.error {
    position: relative;
    width: 100%;
    max-width: 119.4rem;
    margin: 0 auto;
}

.error .error-img {
    width: 24rem;
    margin: 18rem auto 5rem;
}

.error .error-txt {
    display: block;
    text-align: center;
    letter-spacing: -0.1rem;
}

.error .error-txt p:nth-child(1) {
    font-size: 28px;
    color: #000;
    margin-bottom: 3rem;
}

.error .error-txt p:nth-child(2) {
    font-size: 15px;
    color: #757575;
    letter-spacing: -0.75px;
    line-height: 2;
}

.error .btn-default {
    border-color: #959595;
}

@media (min-width: 480px) {
    .btn-wrap {
        display: none;
    }
}

/* 모바일 */
@media (max-width: 480px) {
    .error {
        height: calc(100vh - 10.8rem);
    }

    .error .error-img {
        width: 50%;
        margin: 7rem auto 5rem;
    }

    .btn-wrap {
        margin: 4rem auto;
        max-width: 46rem;
    }

    .btn-wrap .btn {
        flex: 1;
        height: 5.4rem;
    }

    .error .error-txt p:nth-child(1) {
        margin: 3rem 0;
        font-size: 2.3rem;
        font-weight: 700;
        letter-spacing: -0.09rem;
    }

    .error .error-txt p:nth-child(2) {
        line-height: 2.5rem;
    }

}
</style>