<template>
    <section class="inner">
        <div class="event-content">
            <h3 class="page-title page-title-event">이벤트상세 제목</h3>
            <div class="event-title">
                <div>
                    <p class="date">[2023.07.01 ~ 2024.12.31]</p>
                    <p class="title">이벤트상세 제목</p>
                </div>
                <button type="button" class="sns_share">sns 공유하기</button>
            </div>
            <img src="~/static/images/notice/20230811.jpg" alt="">
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style scoped>
.page-title-event {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.event-title {
    padding: 30px 0 20px;
    border-top: 2px solid #000;
    border-bottom: 1px solid #d9d9d9;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.event-title p.date {
    display: block;
    font-size: 18px;
    font-weight: 500;
    margin: 0 0 10px;
    line-height: 1;
}

.event-title p.title {
    font-size: 20px;
    font-weight: bold;
}

.event-title p:last-child {
    display: flex;
}

.sns_share {
    width: 24px;
    height: 26px;
    background: url(~/assets/images/common/ico_sns.png) no-repeat center center;
    background-size: 100% auto;
    border: none;
    color: unset;
    font-size: 0;
    min-width: unset;
    border-radius: unset;
    margin: 0 10px 0 0;
    padding: 1px;
}
</style>
