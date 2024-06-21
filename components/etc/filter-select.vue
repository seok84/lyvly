
<template>
    <div class="filter-wrapper">
        <span class="all-counter">전체<span class="numbering">(123)</span></span>
        <div class="select-filter">
            <select name="" id="" class="input_select">
                <option value="" selected>kg당 가격 낮은 순</option>
                <option value="">조회순</option>
                <option value="">최신순</option>
                <option value="">높은가격순</option>
                <option value="">낮은가격순</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'filterSelect',
}
</script>

<style scoped>
/* select filter */
.filter-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.all-counter {
    font-size: 1.5rem;
    color: #787878;
    color: #000000;
    letter-spacing: -0.08rem;
}

.all-counter .numbering {
    margin: 0 2px;
}

.select-filter {
    width: auto;
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 3px;
    border: solid 1px #eee;
  
}

.select-filter select {
    width: 17rem;
    height: 3.6rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    min-width: unset;
    font-size: 1.5rem;
    text-align: left;
    background-image: url(~/assets/images/common/arrow/ico_arr_black_bottom.png);
    background-repeat: no-repeat;
    background-position: 90% center;
    background-size: 1rem 0.6rem;
    padding: 0 3rem 0 1.5rem;
}

@media (max-width: 1194px) {
    .filter-wrapper {
        padding: 0 2rem;
    }

}
</style>