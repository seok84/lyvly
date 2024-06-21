<template>
    <div id="shipping-info">


        <table class="shipping-info-table">
            <caption>배송정보</caption>
            <colgroup>
                <col>
                <col>
                <col>
            </colgroup>
            <tbody>
                <!-- 신선물류 -->
                <tr>
                    <th rowspan="3">신선물류</th>
                    <td colspan="2">신선물류 브랜드 일괄배송 (자체차량 탑차 직배송, CJ대한통운 탑차 직배송, 택배배송)</td>
                </tr>
                <tr class="shipping-bg">
                    <td colspan="2">* 배송일정 / 배송방법</td>
                </tr>
                <tr class="shipping-area">
                    <td>
                        <p>
                            수도권 (서울, 경기, 인천)
                        </p>
                        <p>
                            밤 10시까지 결제 시 당일 출고, 익일도착
                        </p>
                        <p>
                            출고일 : 월, 화, 수, 목, 금, 일 <br>
                            자체차량 탑차 직배송
                        </p>
                    </td>
                    <td>
                        <p>
                            지방권
                        </p>
                        <p>
                            오전 10시 결제 시 당일 출고, 익일 도착
                        </p>
                        <p>
                            출고일 : 월, 화, 수, 목, 금 <br>
                            CJ대한통운 탑차 직배송, 택배배송
                        </p>
                    </td>
                </tr>
                <!-- 개별배송 -->
                <tr>
                    <th rowspan="3">개별배송</th>
                    <td colspan="2">브랜드 개별배송 (자체차량 배송, 택배배송)</td>
                </tr>
                <tr class="shipping-bg">
                    <td colspan="2">* 배송일정 / 배송방법</td>
                </tr>
                <tr>
                    <td colspan="2">브랜드 개별 배송 안내 영역에서 확인</td>
                </tr>
            </tbody>
        </table>

        <p class="info-notice-title">[신선물류 유의사항]</p>
        <p class="info-notice-title">※ 유의사항</p>
        <ul class="info-notice-desc">
            <li>- 부재중 인 경우 : 배송 메세지란에 ' 매장 비밀번호 및 희망장소 ' 기입</li>
            <li>- 직배송 이용을 원하지 않는 경우 : 배송 메세지란에 ' 택배요청 ' 기입</li>
            <li>- 탑차 직배송이 불가한 지역은 택배배송으로 배송될 수 있음</li>
        </ul>

        <p class="info-notice-title">[개별배송 유의사항]</p>
        <p class="info-notice-title">※ 유의사항</p>
        <ul class="info-notice-desc">
            <li>- 부재중 인 경우 : 배송 메세지란에 ' 매장 비밀번호 및 희망장소 ' 기입</li>
            <li>- 자체차량 배송 이용을 원하지 않는 경우 : 배송 메세지란에 ' 택배요청 ' 기입</li>
            <li>- 자체차량 배송이 불가한 지역은 택배배송으로 배송될 수 있음</li>
        </ul>
        <div class="shipping-info-edit">
            <div class="photo-area">
                <img src="~/static/images/banner/img_user_banner_mc.png" alt="상품상세 이미지">
            </div>
        </div>





    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<style scoped>
/* shipping-info-table */
.shipping-info-table {
    width: 100%;
    margin: 3rem 0 1.5rem;
}

.shipping-info-table caption {
    display: none;
}

.shipping-info-table,
.shipping-info-table th,
.shipping-info-table td {
    border-collapse: collapse;
    border: 1px solid #eee;
    border-right: 0;
    border-left: 0;
}

.shipping-info-table tr {
    min-height: 5rem;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.47;
}

.shipping-info-table th,
.shipping-info-table td {
    text-align: left;
    padding: 1.6rem 0 1.6rem 3rem;
    vertical-align: top;
}

.shipping-info-table th {
    font-weight: Medium;
    color: #000;
    background-color: #fafafa;
}

.shipping-info-table td {
    color: #787878;
}

.shipping-info-table td span {
    display: inline-block;
    white-space: unset;
    word-break: break-all;
}

.shipping-area td:nth-child(2) {
    border-left: 1px solid #eee;
}

.shipping-area p {
    margin-bottom: 1rem;
}

.shipping-area p:last-child {
    margin-bottom: 0;
}

.shipping-bg {
    background-color: #FBFBFB;
}

.shipping-bg td {
    border: none;
}

.shipping-bg+tr td {
    border-top: none;
}

/* info-title */
.info-notice-title {
    font-size: 1.5rem;
    font-weight: 400;
    color: #757575;
    line-height: 2.1rem;
}

.info-notice-desc {
    font-size: 1.5rem;
    font-weight: 400;
    color: #757575;
    line-height: 2.1rem;
}

#shipping-info .info-desc li:before {
    display: none;
}

/* shipping-info-edit */
.shipping-info-edit {
    position: relative;
    margin-top: 10.5rem;
}

.shipping-info-edit .photo-area {
    height: 100%;
    overflow: hidden;
    margin-bottom: 3.1rem;
    transition: height 1s ease-in;
}

.shipping-info-edit .photo-area img {
    border: 0;
    display: block;
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    height: auto;
    transform: none;
    max-width: 100rem;
    margin: 0 auto;
}

/* 태블릿 */
@media (max-width: 768px) {

    .info-notice-desc {
        padding-left: 1.6rem;
        padding-right: 1.6rem;
    }
}

/* 모바일 */
@media (max-width: 480px) {

    .shipping-area {
        display: flex;
        flex-direction: column;
    }

    #shipping-info {
        padding: 0 2rem;
    }

    .shipping-info-table th {
        width: 13rem;
    }

    .shipping-info-table th,
    .shipping-info-table td {
        padding: 1.4rem;
        font-size: 1.4rem;
    }

    .shipping-info-table td:last-child {
        border: 0;
    }

    .shipping-area td:nth-child(2) {
        border-left: 0;
        border-bottom: 1px solid #eee;

    }
}
</style>