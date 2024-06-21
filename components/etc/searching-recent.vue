<template>
    <div>
        <div class="searching-history">
            <div class="col">
                <h2>최근 검색어</h2>
                <ol>
                    <li><nuxt-link to="/">등심</nuxt-link><button type="button" class="btn-del"
                            @click="searchingResultDel($event)">del</button></li>
                    <li><nuxt-link to="/">암소</nuxt-link><button type="button" class="btn-del"
                            @click="searchingResultDel($event)">del</button></li>
                    <li><nuxt-link to="/">치마살</nuxt-link><button type="button" class="btn-del"
                            @click="searchingResultDel($event)">del</button></li>
                    <li><nuxt-link to="/">업진살</nuxt-link><button type="button" class="btn-del"
                            @click="searchingResultDel($event)">del</button></li>
                    <li><nuxt-link to="/">양지</nuxt-link><button type="button" class="btn-del"
                            @click="searchingResultDel($event)">del</button></li>
                </ol>
                <span class="null">최근 검색내역이 없습니다.</span>
            </div>
            <div class="col">
                <h2>인기 검색어</h2>
                <ol>
                    <li v-for="(item, index) in menuItems" :key="item.index">
                        <nuxt-link :to="item.link">
                            <em>{{ index + 1 }}</em>
                            {{ item.name }}</nuxt-link>
                    </li>
                </ol>
                <span class="null">최근 검색내역이 없습니다.</span>
            </div>
            <div class="searching-history-foot">
                <button type="button" @click="closeSearchList">닫기</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                { name: '등심', link: '/' },
                { name: '암소', link: '/' },
                { name: '치마살', link: '/' },
                { name: '업진살', link: '/' },
                { name: '양지', link: '/' }
            ]
        }
    },
    methods: {

        // 검색 리스트 닫기
        closeSearchList() {
            document.querySelector(".searching-history-pc").classList.add("hidden")
        },
        // 검색어 삭제
        searchingResultDel(e) {
            let target = e.target
            target.parentElement.remove()
        }


    },
}
</script>

<style scoped></style>