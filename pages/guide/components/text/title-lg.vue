<template>
    <div class="title-lg">
        <h3>
            {{ titleLgText }}
        </h3>
        <a :href="to" v-if="linkShow">더보기</a>
    </div>
</template>
<script>
export default {
    name: 'title-lg',
    props: ["titleLgText", "to", "linkShow"],
    data() {
        return {
        }
    },
}
</script>
<style scoped>
.title-lg {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.title-lg h3 {
    font-size: 2.8rem;
    color: #0f172a;
    font-weight: 700;
    line-height: 1;
    flex: 1;
}

.title-lg a {
    flex: none;
}
</style>