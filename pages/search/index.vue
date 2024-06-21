<template>
    <section id="searchView" class="item-list-page inner">
        <div v-if="items !== '' || undefined || this.items.length > 0">
            <h2 class="title-h2">'{{ searchWord }}' 검색결과</h2>
            <etc-filter-select />
            <div class="item-list-container default">
                <item-list class="item-list" :items="items" :cartFn="cartFn" />
            </div>
            <etc-pagination />
        </div>
        <div v-else>
            <div class="search-txt">
                <h2 class="title-h2">'{{ searchWord }}' 검색결과</h2>
                <div class="no-content search-info">
                    <p>검색 결과가 없습니다.</p>
                    <p>
                        단어의 철자가 정확한지 확인해 보세요.<br />
                        띄어쓰기 또는 넓은 의미의 단어를 사용해 보세요.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: () => {
        return {
            searchWord: "ABCDEF",
            cartFn: true,
            rankFn: false,
            items: [
                {
                    thumbnail:
                    {
                        rank: '1++B',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_01.png"),
                        soldOut: false,
                    },
                    info:
                    {
                        badge: {
                            rank: '1++B',
                            fat: "NO.8",
                            storage: "ice",
                            antibiotic: true,
                            fresh: true
                        },
                        title: {
                            brand: "바를정육류연구소",
                            main: "냉장 한우암소 등심",
                            sub: "윗등심 + 아랫등심 반두분",
                        },
                        price: {
                            unitAccent: "10%",
                            sells: "39,800",
                            kg: "5.4",
                            consumer:
                                "44,000"
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766"
                        },
                        benefits: {
                            point: "10",
                            coupon: "3",
                            aging: "1",

                        },
                    },
                },
                {
                    thumbnail:
                    {
                        rank: 'A+',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_02.png"),
                        soldOut: false,
                    },
                    info:
                    {
                        badge: {
                            rank: 'A+',
                            fat: "NO.4",
                            storage: "cold",
                            antibiotic: true,
                            fresh: true
                        },
                        title: {
                            brand: "바를정육류연구소",
                            main: "냉장 한우암소 등심",
                            sub: "윗등심 + 아랫등심 반두분",
                        },
                        price: {
                            unitAccent: "10%",
                            sells: "39,800",
                            kg: "5.4",
                            consumer: "44,000"
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766"
                        },
                        benefits: {
                            // point: "10",
                            coupon: "3",
                            aging: "1",

                        },
                    },
                },
                {
                    thumbnail:
                    {
                        rank: '',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: false,
                        thumbnail: require("~/static/images/img_item_sample_01.png"),
                        soldOut: false,
                    },
                    info:
                    {
                        badge: {
                            rank: '',
                            fat: "NO.5",
                            storage: "cold",
                            antibiotic: false,
                            fresh: true
                        },
                        title: {
                            brand: "바를정육류연구소",
                            main: "냉장 한우암소 등심",
                            sub: "윗등심 + 아랫등심 반두분",
                        },
                        price: {
                            unitAccent: "10%",
                            sells: "39,800",
                            kg: "5.4",
                            consumer: "44,000"
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766"
                        },
                        benefits: {
                            point: "",
                            coupon: "",
                            aging: "1",

                        },
                    },
                },
                {
                    thumbnail:
                    {
                        rank: '3C',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_02.png"),
                        soldOut: false,
                    },
                    info:
                    {
                        badge: {
                            rank: '3C',
                            fat: "",
                            storage: false,
                            antibiotic: false,
                            fresh: false
                        },
                        title: {
                            brand: "바를정육류연구소",
                            main: "냉장 한우암소 등심",
                            sub: "윗등심 + 아랫등심 반두분",
                        },
                        price: {
                            unitAccent: "10%",
                            sells: "39,800",
                            kg: "5.4",
                            consumer: "44,000"
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766"
                        },
                        benefits: {
                            point: "10",
                            coupon: "3",
                            aging: "1",

                        },
                    },
                },
                {
                    thumbnail:
                    {
                        rank: 'A+',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_01.png"),
                        soldOut: false,
                    },
                    info:
                    {
                        badge: {
                            rank: 'A+',
                            fat: "NO.7",
                            storage: "ice",
                            antibiotic: true,
                            fresh: true
                        },
                        title: {
                            brand: "바를정육류연구소",
                            main: "냉장 한우암소 등심",
                            sub: "윗등심 + 아랫등심 반두분",
                        },
                        price: {
                            unitAccent: "10%",
                            sells: "39,800",
                            kg: "5.4",
                            consumer: "44,000"
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766"
                        },
                        benefits: {
                            point: "10",
                            coupon: "3",
                            aging: "1",

                        },
                    },
                },
                {
                    thumbnail:
                    {
                        rank: '1+B',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: false,
                        thumbnail: require("~/static/images/img_item_sample_02.png"),
                        soldOut: false,
                    },
                    info:
                    {
                        badge: {
                            rank: '1+B',
                            fat: "NO.3",
                            storage: "ice",
                            antibiotic: true,
                            fresh: true
                        },
                        title: {

                            brand: "바를정육류연구소",
                            main: "냉장 한우암소 등심",
                            sub: "윗등심 + 아랫등심 반두분",
                        },
                        price: {
                            unitAccent: "10%",
                            sells: "39,800",
                            kg: "5.4",
                            consumer:
                                "44,000"
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766"
                        },
                        benefits: {
                            point: "10",
                            coupon: "3",
                            aging: "1",

                        },
                    },
                },
                {
                    thumbnail:
                    {
                        rank: '1++A',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_01.png"),
                        soldOut: false,
                    },
                    info:
                    {
                        badge: {
                            rank: '1++A',
                            fat: "NO.1",
                            storage: "ice",
                            antibiotic: true,
                            fresh: true
                        },
                        title: {
                            brand: "바를정육류연구소",
                            main: "냉장 한우암소 등심",
                            sub: "윗등심 + 아랫등심 반두분",
                        },
                        price: {
                            unitAccent: "10%",
                            sells: "39,800",
                            kg: "5.4",
                            consumer: "44,000"
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766"
                        },
                        benefits: {
                            point: "10",
                            coupon: "3",
                            aging: "1",

                        },
                    },
                },
                {
                    thumbnail:
                    {
                        rank: '1+',
                        logo: require("~/assets/images/sample/img_logo_sample.png"),
                        imagesType: true,
                        thumbnail: require("~/static/images/img_item_sample_02.png"),
                        soldOut: false,
                    },
                    info:
                    {
                        badge: {
                            rank: 'A+',
                            fat: "NO.2",
                            storage: "ice",
                            antibiotic: true,
                            fresh: true
                        },
                        title: {

                            brand: "바를정육류연구소",
                            main: "냉장 한우암소 등심",
                            sub: "윗등심 + 아랫등심 반두분",
                        },
                        price: {
                            unitAccent: "10%",
                            sells: "39,800",
                            kg: "5.4",
                            consumer:
                                "44,000"
                        },
                        processing: {
                            date: "2023-06-28",
                            dateDetail: "(29개월령)",
                            part: "송이한우파트",
                            number: "00215719766"
                        },
                        benefits: {
                            point: "10",
                            coupon: "3",
                            aging: "1",

                        },
                    },
                },
            ],
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>
<style scoped>
.search-txt {
    text-align: center;
    margin: 10rem auto;
}

.search-txt>p {
    font-size: 3.4rem;
    line-height: 1.38;
    letter-spacing: -0.2rem;
    margin-bottom: 8rem;
    font-weight: 700;
}

.search-info p:nth-child(1) {
    font-size: 2rem;
    margin-bottom: 3rem;
}

.search-info p:nth-child(2) {
    font-size: 1.5rem;
    color: #9e9e9e;
    line-height: 1.65;
}
</style>
