<template>
    <div class="custom-select">
        <div class="selected" :class="{ open: open }" @click="open = !open">
            <span>{{ selected }}</span><img src="~/assets/images/common/arrow/ico_arr_small.svg">
        </div>
        <ul class="items" :class="{ selectHide: !open }">
            <li v-for="(option, index) of options" :key="index"
                @click=" selected = option; open = false; $emit('input', option);">
                {{ option }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        options: {
            type: Array,
            required: true,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },

    },
    data() {
        return {
            selected: this.default
                ? this.default
                : this.options.length > 0
                    ? this.options[0]
                    : null,
            open: false,
        };
    },
    mounted() {
        this.$emit("input", this.selected);
    },
};
</script>