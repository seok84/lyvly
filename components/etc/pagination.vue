<template>
    <ul class="pagination">
        <!-- <li class="page-item">
            <a href="javascript:void(0);" class="page-link latest"><span class="sr-only">맨 처음 페이지</span></a>
        </li> -->
        <li class="page-item">
            <a href="javascript:void(0);" class="page-link prev"><span class="sr-only">이전페이지</span></a>
        </li>
        <li class="page-item">
            <a href="javascript:void(0);" class="page-link"><span>1</span></a>
        </li>
        <li class="page-item active">
            <a href="javascript:void(0);" class="page-link"><span>2</span><span class="sr-only">현재페이지</span></a>
        </li>
        <li class="page-item">
            <a href="javascript:void(0);" class="page-link"><span>3</span></a>
        </li>
        <li class="page-item">
            <a href="javascript:void(0);" class="page-link next"><span class="sr-only">다음페이지로</span></a>
        </li>
        <!-- <li class="page-item">
            <a href="javascript:void(0);" class="page-link oldest"><span class="sr-only">맨 마지막 페이지로</span></a>
        </li> -->
    </ul>
</template>

<script>
export default {
    name: 'Pagination',
    data: () => {
        return {
        }
    }
}
</script>

<style scoped>
.pagination {
    list-style: none;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    border-radius: 0.25rem;
    margin: 4rem auto 6rem;
    padding-left: 0;
}

.pagination:last-of-type {
    margin-bottom: 4rem;
}

.pagination .page-item {
    margin-left: 0.6rem;
    width: 3rem;
    height: 3rem;
}

.pagination .page-item:first-child {
    margin-left: 0px;
}

.pagination .page-link {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    font-size: 1.6rem;
    font-weight: 400;
    color: #979797;
    text-align: center;
    box-shadow: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

.pagination .page-item.active .page-link {
    color: #f02d40;
}

.pagination .page-item.active .page-link span {
    font-weight: inherit;
    border-bottom: 1px solid #f02d40;
}

.pagination .page-item a.prev {
    background: url("~/assets/images/common/arrow/ico_arr_prev_black.png") 0px 0px / 100% 100% no-repeat;
    border: 0px;
}

.pagination .page-item a.next {
    background: url("~/assets/images/common/arrow/ico_arr_next_black.png") 0px 0px / 100% 100% no-repeat;
    border: 0px;
}

/* 
.pagination .page-item a.latest {
    background: url("~/assets/img/common/navi_latest.svg") 0px 0px / 100% 100% no-repeat;
    border: 0px;
}

.pagination .page-item a.oldest {
   background: url("~/assets/img/common/navi_oldest.svg") 0px 0px / 100% 100% no-repeat;
    border: 0px;
}
 */
.pagination .page-item a .sr-only {
    font-size: 0;
}
</style>