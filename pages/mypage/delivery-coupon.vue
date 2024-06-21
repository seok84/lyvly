<template>
    <section class="mypage-view mypage-point">
        <div class="content-title">배송비 쿠폰</div>
        <div class="tab-index">
            <div :class="{ 'active': useable }" @click="useable = !useable"><span>사용가능</span></div>
            <div :class="{ 'active': !useable }" @click="useable = !useable"><span>사용완료</span></div>
        </div>
        <div class="tab-content">
            <!-- 사용가능 -->
            <div class="useable-point" v-show="useable">
                <div class="period-check">
                    <select name="" id="" class="select-small-arrow">
                        <option value="조회기간">조회기간</option>
                        <option value="week">1주</option>
                        <option value="month">1개월</option>
                        <option value="year">1년</option>
                    </select>
                    <button type="button" class="btn btn-black">조회</button>
                </div>
                <p class="all-items">전체({{ pointInfo.length }})</p>
                <ul class="point-list">
                    <li class="list" v-for="(info, index) in pointInfo" :key="'point-list' + index">
                        <div>
                            <strong>{{ info.title }}</strong>
                            <span class="desc">{{ info.desc }}</span>
                            <p><i>적립일</i><span>{{ info.date }}</span></p>
                            <p><i>소멸예정일</i><span>{{ info.exitDate }}</span></p>
                        </div>
                        <p>+{{ info.point }}장</p>
                    </li>
                </ul>
                <p class="info-title">쿠폰 이용안내</p>
                <ul class="info-desc">
                    <li>사용 기간 내에 사용하지 않은 쿠폰은 삭제됩니다.</li>
                    <li>한번에 조회 가능한 최대 기간은 6개월입니다.</li>
                </ul>
                <etc-pagination />
            </div>
            <!-- 사용완료 -->
            <div class="unusable-point" v-show="!useable">
                <div class="period-check">
                    <select name="" id="" class="select-small-arrow">
                        <option value="조회기간">조회기간</option>
                        <option value="week">1주</option>
                        <option value="month03">3개월</option>
                        <option value="month06">6개월</option>
                        <option value="year">1년</option>
                    </select>
                    <button type="button" class="btn btn-black">조회</button>
                </div>
                <p class="all-items">전체({{ pointInfo.length }})</p>
                <ul class="point-list">
                    <li class="list" v-for="(info, index) in exitPointInfo" :key="'point-list' + index">
                        <div>
                            <strong>{{ info.title }}</strong>
                            <span class="desc">{{ info.desc }}</span>
                            <p><i>사용일</i><span>{{ info.exitDate }}</span></p>
                        </div>
                        <p>-{{ info.point }}장</p>
                    </li>
                </ul>
                <etc-pagination />
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    layout: "divide",
    data() {
        return {
            exitPoint: '1',
            useable: true,
            pointInfo: [
                {
                    title: '사용 전 배송비 쿠폰명이 보여지는 영역입니다 쿠폰명이 길면 이렇게 됩니다.',
                    desc: '배송비 쿠폰 설명이 들어오는 자리입니다.',
                    date: '2023-01-01',
                    exitDate: '2023-01-01',
                    point: '1,111,111'
                },
                {
                    title: '사용 전 배송비 쿠폰명이 보여지는 영역입니다 쿠폰명이 길면 이렇게 됩니다.',
                    desc: '배송비 쿠폰 설명이 들어오는 자리입니다.',
                    date: '2023-01-01',
                    exitDate: '2023-01-01',
                    point: '4,500'
                },
                {
                    title: '사용 전 배송비 쿠폰명이 보여지는 영역입니다 쿠폰명이 길면 이렇게 됩니다.',
                    desc: '배송비 쿠폰 설명이 들어오는 자리입니다.',
                    date: '2023-01-01',
                    exitDate: '2023-01-01',
                    point: '300'
                },
                {
                    title: '사용 전 배송비 쿠폰명이 보여지는 영역입니다 쿠폰명이 길면 이렇게 됩니다.',
                    desc: '배송비 쿠폰 설명이 들어오는 자리입니다.',
                    date: '2023-01-01',
                    exitDate: '2023-01-01',
                    point: '12,345'
                },
                {
                    title: '사용 전 배송비 쿠폰명이 보여지는 영역입니다 쿠폰명이 길면 이렇게 됩니다.',
                    desc: '배송비 쿠폰 설명이 들어오는 자리입니다.',
                    date: '2023-01-01',
                    exitDate: '2023-01-01',
                    point: '1'
                },
            ],
            exitPointInfo: [
                {
                    title: '사용 전 배송비 쿠폰명이 보여지는 영역입니다 쿠폰명이 길면 이렇게 됩니다.',
                    desc: '배송비 쿠폰 설명이 들어오는 자리입니다.',
                    exitDate: '2023-01-01',
                    point: '1'
                },
                {
                    title: '사용 전 배송비 쿠폰명이 보여지는 영역입니다 쿠폰명이 길면 이렇게 됩니다.',
                    desc: '배송비 쿠폰 설명이 들어오는 자리입니다.',
                    exitDate: '2023-01-01',
                    point: '1'
                },
                {
                    title: '사용 전 배송비 쿠폰명이 보여지는 영역입니다 쿠폰명이 길면 이렇게 됩니다.',
                    desc: '배송비 쿠폰 설명이 들어오는 자리입니다.',
                    exitDate: '2023-01-01',
                    point: '1'
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
.mypage-point .point-info {
    display: block;
    margin: 3rem 0;
    padding: 2.3rem;
    border: 1px solid #e1e1e1;
    border-radius: 1rem;
    text-align: center;
}

.mypage-point .point-info p {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 800;
}

.mypage-point .point-info p span {
    font: inherit;
}


.mypage-point .point-info p img {
    display: inline-block;
    margin-right: 1rem;
}

.mypage-point .point-info p .point {
    font-weight: inherit;
    font-size: 2.2rem;
    margin-left: 0.6rem;
    font-weight: 800;
}

/* 조회기간 */
.mypage-point .period-check .select-small-arrow {
    flex: 1 1 auto;
    max-width: unset;
    margin-left: 0;
}

.mypage-point .tab-index {
    margin-bottom: 3rem;
}

.all-items {
    display: block;
    line-height: 6rem;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 500;
}


.mypage-view .info-title {
    margin-top: 4rem;
}


/* 리스트 */
.point-list {
    display: flex;
    flex-direction: column;
}

.point-list .list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 2rem 1rem 2rem 2rem;
    border-top: 1px solid #e0e0e0;
}

.point-list .list:last-child {
    border-bottom: 1px solid #e0e0e0;
}

.point-list .list>p {
    font-size: 2rem;
    font-weight: 700;
    text-align: right;
    color: #006FEE;
    letter-spacing: -0.09rem;
}

.point-list .list>div {
    display: inline-flex;
    flex-direction: column;
    flex: 1 1 auto;
    padding-right: 2rem;
    box-sizing: border-box;
}

.point-list .list>div strong {
    display: block;
    line-height: 1.4;
    font-size: 1.6rem;
    font-weight: 500;
}

.point-list .list .desc {
    display: block;
    margin-top: 0.4rem;
    font-size: 1.4rem;
    color: #979797;
}

.point-list .list div p {
    margin-top: 0.6rem;
    color: #979797;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.25;
}

.point-list .list div p:first-of-type {
    margin-top: 2rem;
}

.point-list .list div i {
    display: inline-block;
    min-width: 6rem;
    margin-right: 1rem;
    font-style: normal;
}

/* 사용완료 */
.unusable-point .point-list .list>p {
    color: #b9b9b9;
}

.unusable-point .point-list .list>div strong {
    color: #757575;
}

.unusable-point .point-list .list .desc,
.unusable-point .point-list .list div p {
    color: #b9b9b9;
}

@media (max-width:767px) {
    .point-list .list {
        padding: 2rem 0;
    }

    .point-list .list>div {
        flex: 1;
        padding-right: 0;
    }

    .point-list .list>p {
        flex: 1;
        max-width: 40%;
        padding-left: 1.6rem;
        box-sizing: border-box;
    }

    .mypage-point .point-info p .point {
        font-size: 2rem;
        margin: 0 0 0 4px;
    }

    .all-items {
        line-height: 1;
        padding: 3rem 0 2rem;
    }
}
</style>