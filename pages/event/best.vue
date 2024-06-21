<template>
    <section class="contents best_contents">
        <h2 class="screen_out">베스트</h2>
        <div class="tit_wrap">
            <h2 class="tit">BEST</h2>
        </div>
        <div class="best_top">
            <ui-item-list :item-list="topItemList" :thumb-class="'col-12 col-md-4 list_area'" :list-name="'배스트'"
                :index-flag="true" @redirect="redirectByItem" />
        </div>
        <div class="best_content">
            <ui-item-list :item-list="contentItemList" :thumb-class="'col-6 col-md-3 list_area'" :list-name="'베스트'"
                :index-flag="true" :start-index="3" @redirect="redirectByItem" />
        </div>
    </section>
</template>

<script>
let $s, vm;

export default {
    head() {
        return {
            script: [],
            link: [
                { rel: 'stylesheet', href: '/static/css/event.css' }
            ]
        }
    },
    beforeCreate() {
        $s = this.$saleson;
        vm = this;
    },
    data() {
        return {
            param: {
                arrayRequiredItems: []
            },
            result: {
                list: []
            }
        }
    },
    methods: {
        getBestItems() {
            let params = {
                'viewTarget': 'WEB',
                'limit': 100
            }

            $s.api.getBestItems(params, function(response) {
                vm.result = response;

                vm.googleAnalyticsImpression(response.list, '베스트');
            });
        },

        redirectByItem(item) {
            this.viewDetails('/items/' + item.itemUserCode, 'paging', 'best');
        },
    },
    mounted() {
        this.$nextTick(function() {



            vm.getBestItems();

            $s.core.setState($s.const.GNB_MENU_TARGET, 'best');
        });
    },
    computed: {
        topItemList() {
            let list = [],
                itemList = this.result.list,
                displayCount = 3;

            if (typeof itemList != 'undefined' && itemList.length > 0) {
                for (let i = 0; i < displayCount; i++) {
                    list.push(itemList[i]);
                }
            }

            return list;
        },
        contentItemList() {
            let list = [],
                itemList = this.result.list,
                startCount = 4;

            if (typeof itemList != 'undefined' && itemList.length >= startCount) {
                for (let i = (startCount - 1); i < itemList.length; i++) {
                    list.push(itemList[i]);
                }
            }

            return list;
        }
    }
}
</script>
