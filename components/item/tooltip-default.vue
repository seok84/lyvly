<template>
    <article class="tooltip" v-show="toolTiplInfo.show">
        <div type="button" class="tooltip-close" @click="$emit('close')"></div>
        <div class="tooltip-title">{{ toolTiplInfo.title }}</div>
        <div class="tooltip-body">
            <slot />
            {{toolTiplInfo.txt }}
        </div>
    </article>
</template>
<script>
export default {
    props: {
        toolTiplInfo: {
            type: Object,
            default: () => ({
                show: false,
                title: "",
                txt: ""
            }),
        },
    },
    methods: {},
}
</script>