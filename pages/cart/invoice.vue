<template>
    <div class="invoice-popup" id="invoice">
        <div class="content-wrapper">
            <div class="content-header non-print-wrap">
                <div class="text-left mt-2">
                    <button class="btn-print mr-2 ml-4" id="all-print" data-type="all" onclick="print()">
                        <i class="fa fa-print mr-2" aria-hidden="true"></i>전체출력
                    </button>
                    <button type="button" class="btn-date" data-toggle="modal" data-target="#changeDateModal"  @click="changeDateModal.modalShow = true">
                        <i class="fa fa-calendar mr-2" aria-hidden="true"></i>배송일자 변경
                    </button>
                    
                </div>
            </div>
            
            <div class="specification" style="">
                <div class="specification-header" data-id="20230726-0003041">
                    <h1>거 래 명 세 서</h1>
                </div>
                <div class="specification-first">
                    <table class="table table-bordered table-hover">
                        <tbody class="supply-body">
                            <tr>
                                <td class="width-110" rowspan="4">공급자</td>
                                <td class="width-140">사업자등록번호</td>
                                <td style="width:340px;"></td>
                                <td class="width-110" rowspan="4">공급받는자</td>
                                <td class="width-140">사업자등록번호</td>
                                <td></td>

                                <!-- <c:choose> 
                                    <c:when test="${invoice.userDetail.businessCode == 'BUSINESS'}">
                                        <td class="width-140">사업자등록번호</td>
                                        <td></td>
                                    </c:when>
                                    <c:otherwise>
                                        <td class="width-140">성함</td>
                                        <td>${invoice.orderShippingInfo.receiveName}</td>
                                    </c:otherwise>
                                </c:choose>-->
                            </tr>
                            <tr>
                                <td class="width-140">상호</td>
                                <td><!--${invoiceOrderSeller.seller.companyName}--></td>
                                <td class="width-140">상호</td>
                                <td></td>
                                <!-- <c:choose>
                                    <c:when test="${invoice.userDetail.businessCode == 'BUSINESS'}">
                                        <td class="width-140">상호</td>
                                        <td>${invoice.userDetail.companyName}</td>
                                    </c:when>
                                    <c:otherwise>
                                        <td></td>
                                        <td></td>
                                    </c:otherwise>
                                </c:choose> -->
                            </tr>
                            <tr>
                                <td class="width-140">대표자</td>
                                <td>
                                    <span class="signature-wrap">
                                        <!-- ${invoiceOrderSeller.seller.representativeName}
                                        <img class="signature" src="${invoiceOrderSeller.seller.stampImageSrc}" alt="도장등록 필요"> -->
                                    </span>
                                </td>
                                <td class="width-140">대표자</td>
                                <td></td>
                                <!-- <c:choose>
                                    <c:when test="${invoice.userDetail.businessCode == 'BUSINESS'}">
                                        <td class="width-140">대표자</td>
                                        <td>${invoice.orderShippingInfo.receiveName}</td>
                                    </c:when>
                                    <c:otherwise>
                                        <td></td>
                                        <td></td>
                                    </c:otherwise>
                                </c:choose> -->
                            </tr>
                            <tr>
                                <td class="width-140">주소</td>
                                <td><!-- ${invoiceOrderSeller.seller.address} ${invoiceOrderSeller.seller.addressDetail}--></td>
                                <td></td>
                                <td></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class="specification-second table-responsive">
                    <table class="table table-bordered table-hover">
                        <tbody class="ship-body">
                            <tr>

                                <td class="width-110" rowspan="5">배송정보</td>

                                <td class="width-140">배송일자</td>
                                <td class="date-area delivery-date-field">
                                    <!-- <fmt:formatDate value="${today}" pattern="yyyy-MM-dd" /> -->
                                </td>
                            </tr>
                            <tr>
                                <td>배송 받는분</td>
                                <td><span class="fw-bold"><!-- ${invoice.orderShippingInfo.receiveName} --></span></td>
                            </tr>
                            <tr>
                                <td>주소</td>
                                <td><!-- ${invoice.orderShippingInfo.receiveAddress} ${invoice.orderShippingInfo.receiveAddressDetail} --></td>
                            </tr>
                            <tr>
                                <td>연락처</td>
                                <td><!-- ${invoice.orderShippingInfo.receiveMobile == '' ? invoice.orderShippingInfo.receivePhone : invoice.orderShippingInfo.receiveMobile } --></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class="specification-last table-responsive" style="">
                    <table class="table table-bordered table-hover">
                        <colgroup>
                            <col style="width:;">
                            <col style="width:;">
                            <col style="width:;">
                            <col style="width:;">
                            <col style="width:;">
                            <col style="width:;">
                            <col style="width:;">
                            <col style="width:;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>상품명</th>
                                <th>등급</th>
                                <th>중량(kg)</th>
                                <th>개체번호</th>
                                <th>도축장/가공장</th>
                                <th>공급단가(원/kg)</th>
                                <th>공급가액(원)</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                            <!-- <c:forEach items="${invoiceOrderSeller.orderItemList}" var="orderItem" varStatus="status">-->
                                <td class="sorting_1"><!--${status.index + 1}-->&nbsp;</td>
                                <td><!--${orderItem.itemName}--></td>
                                <td><!--${orderItem.grade}--></td>
                                <td><!--${orderItem.weight}--></td>
                                <td><!--${orderItem.traceNumber}--></td>
                                <td><!--${orderItem.butcheryPlace} / ${orderItem.processPlace}--></td>
                                <td><!--${orderItem.unitPrice}--></td>
                                <td>
                                    <!-- <c:choose>
                                        <c:when test="${orderItem.commissionType == '1' or orderItem.commissionType == '2'}">
                                            ${orderItem.commissionRate}
                                        </c:when>
                                        <c:otherwise>
                                            ${orderItem.supplyPrice}
                                        </c:otherwise>
                                    </c:choose> -->
                                </td>
                            <!-- </c:forEach>-->
                            </tr>
                        </tbody>
                    </table>
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th width="">판매금액</th>
                            <th width="">배송비</th>
                            <th width="">할인금액</th>
                            <th width="">총금액</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="text-align: right;">
                                    <!-- ${op:numberFormat(invoiceOrderSeller.itemTotalAmount)} -->
                                    &nbsp;
                                </td>
                                <td><!-- ( + ) ${op:numberFormat(invoiceOrderSeller.shippingTotalAmount)} --></td>
                                <td><!-- ( - ) ${op:numberFormat(invoiceOrderSeller.discountTotalAmount)} --></td>
                                <td style="text-align: right;">
                                        <!-- ${op:numberFormat(invoiceOrderSeller.orderTotalAmount)} -->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="specification-animal ">
                    <!-- <c:forEach items="${invoiceOrderSeller.documentList}" var="doc">
                        <div data-key="${doc.traceNumber}" class="animal-img-wrap paper">
                            <div class="animal-img-wrapper" style="width:1125px">
                                <img src="${doc.inspectionCertificateImage}">
                            </div>
                            <div class="animal-img-wrapper" style="width:1125px">
                                <img src="${doc.itemQualityJudgementImage}">
                            </div>
                        </div>
                    </c:forEach>
                    <div class="animal-img-wrapper" style="height: 837.929px;">
                        <img src="~/static/images/certificate1.png" style="width: 837.929px; transform: rotate(90deg) translateY(-100%); transform-origin: left top; position: absolute; left: 0px; top: 0px;">
                    </div>
                    <div class="animal-img-wrapper" style="height: 837.429px;">
                        <img src="~/static/images/certificate2.png" style="width: 837.429px; transform: rotate(90deg) translateY(-100%); transform-origin: left top; position: absolute; left: 0px; top: 0px;">                                        </div>
                    </div> -->
                </div>
            </div>

            <!-- 배송일자 변경 modal -->
            <modal-default :modalInfo="changeDateModal.modalInfo" :modalShow="changeDateModal.modalShow"
                @modalClose="changeDateModal.modalShow = false" class="change-date-modal">
                <div class="change-date-content">
                    <input type="text" class="form-control hasDatepicker" id="datepicker" value="2023-07-27">
                </div>
                <div class="btn-wrap">
                    <button type="button" class="btn-default" @click="changeDateModal.modalShow = false">닫기</button>
                    <button type="button" class="btn-primary">확인</button>
                </div>
            </modal-default>

            <!-- 배송일자 변경 Modal 기존 
            <div class="modal fade" id="changeDateModal" tabindex="-1" aria-labelledby="changeDateModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="changeDateModalLabel">배송일자 변경</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control hasDatepicker" id="datepicker" value="2023-07-27">
                                <div class="input-group-append">
                                    <label class="input-group-text" for="datepicker">
                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-center">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
                            <button type="button" class="btn btn-primary" id="applyDeliveryDate">적용</button>
                        </div>
                    </div>
                </div>
            </div> -->


        </div>
    </div>
</template>

<script>
export default {
    props: ["empty"],
    layout: "empty",
    data() {
        return {
            changeDateModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "배송일자 변경",
                    headerShow: true,
                    headerWhite: true,
                    modalWidthSmall: true,
                    dimmed: true,
                    footer: false
                },
            },
        }
    },

    methods: {
        print() {
            window.print()
        },
    },

};
</script>
<style scoped>
    body {
        background: #fff;
    }

    table {
        width: 100%;
    }

    .specification {
        background: #fff;
        width: 1040px;
    }
    .specification .table {
        margin: 0 0 20px;
    }

    .specification .specification-header {
        background: #f2f2f2;
        text-align: center;
        padding: 17px 0 10px 0;
        margin-bottom: 20px;
    }

    .specification .specification-header h1 {
        font-size: 36px;
        font-weight: 600;
    }

    .specification .table.table-bordered {
        border: 2px solid #000;
    }

    .specification .table.table-bordered th,
    .specification .table.table-bordered tfoot td {
        background-color: #f2f2f2;
        font-size: 12px;
        font-weight: 600;
        padding: 8px;
        line-height: 1.42857143;
    }

    .specification .table.table-bordered th,
    .specification .table.table-bordered td {
        font-size: 12px;
        color: #000;
        padding: 8px;
        min-height: 34px;
        border: 1px solid #000 !important;
        vertical-align: middle;
        text-align: center;
    }
    .table-hover > tbody > tr:hover {
        background-color: #f5f5f5;
    }

    .specification .signature-wrap {
        position: relative;
    }

    .specification img.signature {
        display: inline-block;
        right: -4px;
        top: 10px;
        position: absolute;
        transform: translate(100%, -50%);
        max-width: 65px;
        height: 60px;
    }

    .specification-animal {
        margin-top: 50px;
    }

    .ui-datepicker {
        z-index: 9999 !important;
    }
 

    @media print {
        @page {
            margin: 0;
            size: a4 !important;
            margin: 0 auto;
        }

        html, body { 
            size: a4;
            width: 210mm; 
            height: 297mm; 
        }
        table { 
            page-break-inside:auto; 
        }
        tr    { 
            page-break-inside:avoid; 
            page-break-after:auto; 
        }
        thead { 
            display:table-header-group; 
        }
        tfoot { 
            display:table-footer-group; 
        }

        header, footer {
            display: none;
        }
        
        body {
            background: transparent;
            margin: 1.6cm;
        }

        .specification {
            size: a4;
            page-break-after: auto;
        }

        .specification-last,
        .specification-animal {
            page-break-after: auto;
        }
        .animal-img-wrapper {
            page-break-after: always;
        }
    }

    @media (max-width: 768px) {
        #datepicker {
            width: 100px;
        }
    }

    .btn {
        padding: 10px;
    }

    .btn-print {
        border-radius: 8px !important;
        padding: 4px 11px 4px 11px;
        background: #bcb6b6;
        border: 0;
    }

    .btn-update {
        border-radius: 8px !important;
        padding: 4px 11px 4px 11px;
        background: #bcb6b6;
        border: 0
    }

    .btn-date {
        border-radius: 8px !important;
        padding: 4px 11px 4px 11px;
        background: #bcb6b6;
        border: 0
    }

    .width-110 {
        width: 110px;
    }

    .width-140 {
        width: 140px;
    }

    .ship-body {
        height: 200px;
    }

    .supply-body {
        height: 200px;
    }

    .animal-img-wrap {
        text-align: center;
        page-break-after: always;
    }

    .animal-img-wrapper {
        position: relative;
    }

    .animal-img-wrap img {
        width: 100%;
        overflow: hidden;
    }

    .specification-animal {
        margin-top: 0;
    }
    @media print {
        header, footer, .no-print { display: none; }
    }

</style>