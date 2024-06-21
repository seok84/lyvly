<template>
    <div class="item-info-desc">
        <!-- 뱃지 -->
        <ul class="item-badge">
            <slot />
            <li class="badge badge-rank"><span>1++B</span></li>
            <li class="badge badge-fat no8"><span>N0.8</span></li>
            <!-- 20231219 삭제 -->
            <!-- <li class="badge badge-frozen">
                <span>
                    <img src="~/assets/images/common/items/ico_ice.svg" alt="냉동">
                </span>
                <span>냉동</span>
            </li>
            <li class="badge badge-antibiotic"><span>무항생제</span></li> -->
            <li>
                <p class="brand">한우비상</p>
            </li>
        </ul>
        <!-- 타이틀 -->
        <div class="item-title">
            <!-- <p class="brand pc">한우비상</p> -->
            <p class="main">한우암소 등심 제목줄 한줄</p>
            <p class="sub">반두분(윗등심 9.4kg + 아랫등심 7.9kg)</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        processModal: {
            type: Object,
            default: () => ({
                modalShow: false,
                footer: false,
            }),
        },
        item: Object,
        toolTip: {
            type: Boolean,
            default: false
        },

    },
    data() {
        return {
        }
    }

}
</script>
<style scoped>@import url('~/assets/css/component/item-info-desc.css');</style>