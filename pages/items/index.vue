<template>
    <div class="item-list-page has-category inner" v-scroll="headerFixed">
        <item-category-list />
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }

    },
    mounted() {

    },
    methods: {
        // scroll event 20231004
        headerFixed() {
            let windowWidth = window.outerWidth

            if (windowWidth < 768) {
                if (window.scrollY > 20) {
                    document.querySelector("header").id = "header-fixed"
                } else {
                    document.querySelector("header").removeAttribute('id')
                }
            }
        },
    },
}
</script>
<style>
@import url('~/assets/css/page/item.css');

.item-list-page .filter-tab .tag-tab li i {
    width: 1.9rem;
    height: 1.9rem;
}

.item-list-page .item-thumbnail .top-left {
    width: 8.6rem;
    height: 8.6rem;
    font-size: 2.6rem;
}

.aside-choice-box .item-saled-money .sale {
    margin-bottom: 2px;
}


.item.horizon .item-info-desc .item-process .process-slaughter {
    display: inline-flex;
}

.item.horizon .item-info-desc .item-process .process-slaughter>span:first-child {
    flex: none;
}

.item.horizon .divide-wrap .item-process {
    margin-bottom: 4px;
}

.item-list .item-info-desc>.item-badge {
    margin-bottom: 1.8rem;
}

.item-list .item-badge li .brand {
    font-size: 1.6rem;
}


/* 태블릿 */
@media (max-width: 768px) {
    .item-list-page.has-category .title-h2 {
        margin: 6rem 0 3rem;
    }

    .item-list-page .item-thumbnail .top-left {
        width: 6rem;
        height: 6rem;
        font-size: 1.6rem;
    }

    .item-list-container.default .item-thumbnail .top-left {
        width: 4rem;
        height: 4rem;
        font-size: 1.4rem;
    }

    .item-list-page .item-title .brand {
        font-size: 1.6rem;
    }

    .item-list-page .item-process .process span:last-child {
        margin-left: 0;
    }

    .item-list-page .item-process .process>p {
        line-height: 1.2;
    }

    .item.horizon .item-info-desc .item-process .process-slaughter {
        display: inline-block;
    }

    .item.horizon .item-info-desc .item-process .process-slaughter>span:nth-child(2) {
        display: block;
    }

    .item-list-page .item-price .consumer {
        font-size: 1.3rem;
    }

    .item-list-page .item-list-container .item.horizon {
        padding-bottom: 0;
    }

    .item-list-page .item-title .sub {
        font-size: 12px;
    }

    .item-list-page .divide-wrap {
        margin-bottom: 0;
    }

    .item-list-page .item-benefits {
        margin-top: 1.4rem;
    }

    .item-list-page .item-benefits li {
        /* margin-top: 2rem;
        margin-bottom: 2rem; */
    }

    .item-list .item-badge li .brand {
        font-size: 1.4rem;
    }

    .item-list-page .item-list .item-badge li.check-wrap {
        width: auto;
        margin-bottom: 0;
    }

    .item-list-page .item-list-container .item.text {
        padding-bottom: 0;
        margin-bottom: 1.4rem;
    }

    .item-detail .tooltip-benefit-container.tooltip {
        width: calc(100vw - 4.8rem);
        max-width: 32rem;
        top: unset;
        bottom: 0;
        left: unset;
        right: 50%;
    }

    .item-detail .modified-horizon .tooltip-benefit-container {
        right: unset;
        left: 0;
        transform: translateY(110%);
    }

    .item-list-page .sells-info.tooltip-wrap.above {
        position: relative;
        z-index: 1;
    }

    .item-list-page .item-detail li.above .tooltip-benefit-container.tooltip {
        right: 0;
        transform: translateX(10%);
    }


    .item-list-page .item-info-desc.mobile .divide-wrap {
        position: relative;
    }

    .item-list-page .item-info-desc.mobile .divide-wrap .tooltip-benefit-container {
        top: unset;
        right: unset;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 70%);
    }

    /* 20231219 */
    .item-list-page .item-info-desc.mobile .divide-wrap {
        flex-direction: column-reverse;
    }

    .text .item-info-desc.mobile .item-price-area-mobile,
    .text .item-price-area-mobile .item-price-group {
        display: flex;
        align-items: center;
        flex-direction: row;
        flex: 1;
        justify-content: space-evenly;
    }

    .item-price-area-mobile .item-weight {
        flex: 1;
        padding-right: 1.4rem;
        box-sizing: border-box;
    }

    .text .item-price-area-mobile .item-price-group {
        flex: 5;
    }

    .item.text .item-process .process {
        max-width: unset;
        margin: 0 1rem 0 0;
    }

    .text .item-process .process span:nth-child(2) {
        max-width: unset;
        flex: 1;
    }


    .item-list .item-info-desc>.item-badge {
        margin-bottom: 1rem;
    }
}

@media (max-width:480px) {

    .item-list-page .aside-content.fixed.hide {
        padding: 0;
    }

    .item-list-page .aside-content.fixed.hide .aside-choice-box .aside-footer {
        position: relative;
        z-index: 1;
    }

    .aside-content.hide .aside-amount {
        margin-bottom: 0;
    }

    .aside-content.hide .btn-wrap {
        padding: 0 1.6rem 1rem;
    }


}
</style>
