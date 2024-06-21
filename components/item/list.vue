<template>
    <!-- class="item-list" -->
    <div>
        <div class="item" v-for="(item, index) in items" :key="index">
            <item-part-thumbnail :cartFn="cartFn" :item="item.thumbnail" :expansionStatus="expansionStatus" />
            <item-part-info :rankFn="rankFn" :gradeFn="gradeFn" :thumbnail="item.thumbnail.thumbnail" :item="item.info"
                :processModal="processModal" />
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
        cartFn: {
            type: Boolean,
            default: false
        },
        rankFn: {
            type: Boolean,
            default: false
        },
        gradeFn: {
            type: Boolean,
            default: false
        },
        items: {
            type: [Array],
            default: () => {
                return []
            }
        },
    },
}
</script>
<style scoped>
/* 노트북 */
@media (max-width: 1194px) {}

/* 태블릿 */
@media (max-width: 768px) {}

/* 모바일 */
@media (max-width: 480px) {}
</style>