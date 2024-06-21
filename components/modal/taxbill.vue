<template>
    <div class="tax-bill-wrap">
        <table>
            <colgroup>
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="20%">
                <col width="auto">
                <col width="auto">
                <col width="auto">
                <col width="auto">
                <col width="auto">
                <col width="15%">
                <col width="auto">
            </colgroup>
            <thead>
                <tr>
                    <th>발행일자</th>
                    <th>공급자<br />(판매자)</th>
                    <th>공급받는 자<br />(판매자)</th>
                    <th>상품정보</th>
                    <th>공급가액</th>
                    <th>세액</th>
                    <th>상품판매가</th>
                    <th>결제금액</th>
                    <th>적립금 사용</th>
                    <th>비고</th>
                    <th>상태</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(tableContentItem, index) in tableContent">
                    <tr v-for="(item, index) in tableContentItem.tdItems" :key="index">
                        <td v-if="item.date != null" :rowSpan="tableContentItem.tdItems.length">
                            {{ item.date }}
                        </td>
                        <td v-if="item.seller != null" :rowSpan="tableContentItem.tdItems.length">
                            {{ item.seller }}
                        </td>
                        <td v-if="item.buyer != null" :rowSpan="tableContentItem.tdItems.length">
                            {{ item.buyer }}
                        </td>
                        <td>{{ item.itemInfo }}</td>
                        <td style="text-align: right;">{{ item.supplyPrice }}원</td>
                        <td style="text-align: right;">{{ item.amountTax }}원</td>
                        <td style="text-align: right;">{{ item.sellPrice }}원</td>
                        <td style="text-align: right;">{{ item.paymentAmount }}원</td>
                        <td>{{ item.usePoint }}p</td>
                        <td>{{ item.remark }}</td>
                        <td>
                            <a :href="item.link" target="_blank" class="print-btn">출력</a>
                        </td>
                    </tr>
                </template>
                <!--
                <tr v-for="(item, index) in tableContent" :key="'item' + index" :class="`tr-${index}`">
                    <td>
                        {{ item.date }}
                    </td>
                    <td>
                        {{ item.seller }}
                    </td>
                    <td>
                        {{ item.buyer }}
                    </td>
                    <td style="text-align: left;">{{ item.itemInfo }}</td>
                    <td style="text-align: right;">{{ item.supplyPrice }}원</td>
                    <td style="text-align: right;">{{ item.amountTax }}원</td>
                    <td style="text-align: right;">{{ item.sellPrice }}원</td>
                    <td style="text-align: right;">{{ item.paymentAmount }}원</td>
                    <td>{{ item.usePoint }}p</td>
                    <td>{{ item.remark }}</td>
                    <td>
                        <a :href="item.link" target="_blank" class="print-btn">출력</a>
                    </td>
                </tr>
                -->
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props:{
        tableContent:{
            date:"",
            seller:"",
            buyer:"",
            itemInfo:"",
            supplyPrice:"",
            amountTax:"",
            sellPrice:"",
            paymentAmount:"",
            usePoint:"",
            remark:"",
            link:""
        }
    },
    methods:{
        getRowSpan(arr,data){
            console.log(arr,data);
            let rowSpan = 0;
            arr.forEach(item => {
                if(item.seller == data.seller){
                    rowSpan++;
                }
            });
            return rowSpan;
        }
    }
}
</script>
<style scoped>
.tax-bill-wrap h3 {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.tax-bill-wrap table {
    width: 100%;
    font-size: 1.4rem;
}

.tax-bill-wrap table th,
.tax-bill-wrap table td {
    vertical-align: middle;
    text-align: center;
    border: 1px solid #ddd;
}

.tax-bill-wrap table th {
    border-top: 2px solid #aaa;
    line-height: 1.25;
    padding: 0.8rem 0;
}

.tax-bill-wrap table th:first-child,
.tax-bill-wrap table td:first-child {
    border-left-color: transparent;
}

.tax-bill-wrap table th:last-child,
.tax-bill-wrap table td:last-child {
    border-right-color: transparent;
}

.tax-bill-wrap table td {
    padding: 1rem;
}

.tax-bill-wrap thead tr {
    background-color: #eee;
}

.tax-bill-wrap .print-btn {
    padding: 0.6rem 1rem;
    background-color: #333;
    color: #fff;
}

@media (max-width: 768px) {
    .tax-bill-wrap table {
        width: 1240px;
    }

}
</style>