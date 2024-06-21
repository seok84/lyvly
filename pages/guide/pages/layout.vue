<template>
    <div>
        <p class="head-title">page layout sample</p>
        <nuxt-link to="mypage">page layout sample</nuxt-link>

        <p class="head-title">tab style</p>
        <div class="tab-index">
            <div :class="{ active: tabIndex }" @click="tabIndex = !tabIndex"><span>사용가능</span></div>
            <div :class="{ active: !tabIndex }" @click="tabIndex = !tabIndex"><span>사용완료</span></div>
        </div>
        <p class="head-title">갭 속성 대체</p>
        <p>브라우저 호환성 문제로 flex gap을 사용할 수 없어 margin padding 으로 대체</p>
        <p class="sub-desc"> .box 간 여백 30px</p>
        <div class="flex-box gap-wrap">
            <div class="box">
                <div>gap-box-1</div>
            </div>
            <div class="box">
                <div>gap-box-2</div>
            </div>
            <div class="box">
                <div>gap-box-3</div>
            </div>
            <div class="box">
                <div>gap-box-4</div>
            </div>
            <div class="box">
                <div>gap-box-5</div>
            </div>
            <div class="box">
                <div>gap-box-6</div>
            </div>
        </div>
        <p class="sub-desc"> 갭 scroll auto </p>
        <div class="flex-nowrap gap-wrap">
            <div class="box">
                <div>gap-box-1</div>
            </div>
            <div class="box">
                <div>gap-box-2</div>
            </div>
            <div class="box">
                <div>gap-box-3</div>
            </div>
            <div class="box">
                <div>gap-box-4</div>
            </div>
            <div class="box">
                <div>gap-box-5</div>
            </div>
            <div class="box">
                <div>gap-box-6</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabIndex: true
        }
    },
}
</script>
<style scoped>
.flex-box>div[class^="flex"] {
    justify-content: center;
    align-items: center;
    padding: 2rem;
    color: #f8fafc;
    font-size: 1.6rem;
    text-transform: uppercase;
}

.flex-box>div:nth-child(1n)[class^="flex"],
.gap-wrap .box div {
    background-color: #94a3b8;

}

.flex-box>div:nth-child(2n)[class^="flex"] {
    background-color: #64748b;
}

.flex-box>div:nth-child(3n)[class^="flex"] {
    background-color: #475569;
}

.gap-wrap {
    display: flex;
    flex-wrap: wrap;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    /* box 하단 여백만큼 마이너스 */
    margin-bottom: -3rem;
}

.gap-wrap .box {
    display: inline-flex;
    width: 25%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    /* box 하단 여백 */
    padding-bottom: 3rem;
}

.gap-wrap .box div {
    flex: 1;
    padding: 2rem;
    color: #f8fafc;
}

.flex-nowrap.gap-wrap {
    flex-wrap: nowrap;
    overflow-x: auto;
    margin-left: 0;
    margin-right: 0;
}

.flex-nowrap.gap-wrap .box {
    width: 25rem;
    box-sizing: unset;
    margin-right: 1.5rem;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    flex: none;
}

.flex-nowrap.gap-wrap .box:last-child {
    margin-right: 0;
}
</style>