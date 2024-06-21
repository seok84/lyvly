<template>
    <div class="category-navigation">
        <div class="drop-down-wrap">
            <div class="drop-down">
                <button class="drop-tit" type="button">
                    홈
                </button>
            </div>
            <div class="connection"><span>+</span></div>
            <div class="drop-down">
                <div class="drop-tit more-desc" @click="toggleCate($event)">
                    1차 카테고리
                </div>
                <div class="drop-down-menu">
                    <a class="drop-down-item" href="javascript:void(0);">01</a>
                    <a class="drop-down-item" href="javascript:void(0);">02</a>
                    <a class="drop-down-item" href="javascript:void(0);">03</a>
                    <a class="drop-down-item" href="javascript:void(0);">04</a>
                    <a class="drop-down-item" href="javascript:void(0);">05</a>
                    <a class="drop-down-item" href="javascript:void(0);">06</a>
                </div>
            </div>
            <div class="connection"><span>+</span></div>
            <div class="drop-down">
                <div class="drop-tit more-desc" @click="toggleCate($event)">
                    2차 카테고리
                </div>
                <div class="drop-down-menu">
                    <a class="drop-down-item on" href="javascript:void(0);">더미카테고리</a>
                    <a class="drop-down-item" href="javascript:void(0);">더미카테고리</a>
                    <a class="drop-down-item" href="javascript:void(0);">더미카테고리</a>
                    <a class="drop-down-item" href="javascript:void(0);">더미카테고리</a>
                    <a class="drop-down-item" href="javascript:void(0);">더미카테고리</a>
                    <a class="drop-down-item" href="javascript:void(0);">더미카테고리</a>
                    <a class="drop-down-item" href="javascript:void(0);">더미카테고리</a>
                    <a class="drop-down-item" href="javascript:void(0);">더미카테고리</a>
                    <a class="drop-down-item" href="javascript:void(0);">더미카테고리</a>
                    <a class="drop-down-item" href="javascript:void(0);">더미카테고리</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cate-navi',
    methods: {
        toggleCate(e) {
            let dropTitle = e.target.parentNode;
            dropTitle.classList.toggle("on");
        }
    }

}
</script>

<style scoped>
.category-navigation {
    display: block;
    width: 100%;
    max-width: 119.4rem;
    position: relative;
    margin: 4rem auto 2rem;
    z-index: 11;
}

.category-navigation .drop-down-wrap {
    position: relative;
    display: inline-flex;
    text-align: center;
    border: 0;
    z-index: 6;
}

.category-navigation .connection {
    font-size: 1rem;
    color: var(--color-font-01);
    line-height: 1.8rem;
    padding: 0 1rem;
}

.category-navigation .connection span {
    transform-origin: center;
    transform: translateY(4px);
    font-size: 0;
    display: inline-block;
    width: 2px;
    height: 2px;
    background: #333;
    border-radius: 3px;
}

.category-navigation .drop-down {
    position: relative;
    cursor: pointer;
}

.category-navigation .drop-tit {
    font-size: 1.3rem;
    color: #979797;
    line-height: 1.8rem;
    font-weight: 400;
}

.category-navigation .drop-tit.more-desc {
    background: #fff url("~/assets/images/common/arrow/ico_arr_gray_bottom.png") no-repeat center right / 8px auto;
    padding: 0 2rem 0 0;
}

.category-navigation .drop-down .drop-down-menu {
    display: none;
}

.category-navigation .drop-down.on .drop-down-menu {
    position: absolute;
    top: 2.8rem;
    left: 50%;
    display: block;
    width: auto;
    min-width: 13.8rem;
    padding: 0;
    background-color: #fff;
    border: 1px solid #979797;
    border-radius: 1rem;
    transform: translateX(-50%);
    overflow: hidden;
}

.category-navigation .drop-down-item {
    display: block;
    overflow: hidden;
    font-size: 1.3rem;
    font-weight: 400;
    cursor: pointer;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    color: var(--color-font-03);
    box-sizing: border-box;
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    text-align: left;
    padding: 0 1rem;
    flex: unset;
}

.category-navigation .drop-down-item:hover,
.category-navigation .drop-down-item.on {
    background-color: #fafafa;
    color: #000;
    font-weight: 500;
}

@media (max-width:480px) {
    .category-navigation {
        margin: 2rem 0;
    }
}
</style>