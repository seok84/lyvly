<template>
    <div class="modal modal-payu mobile-full" :class="{'show': modalShow }" v-show="modalShow">
        <div class="modal-wrap shadow">
            <div class="modal-body">
                <slot />
            </div>
        </div>
        <div class="dimmed-bg" @click="unfixedModal()"></div>
    </div>
</template>
  
<script>
export default {
    props: {
        modalShow: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        unfixedModal() {
            this.$emit('modalClose')
        }
    },
    mounted() {
    },
    watch: {
        modalShow(value) {
            if (value == true) {
                document.body.classList.add('overflow-hidden')
            } else {
                document.body.classList.remove('overflow-hidden')
            }
        }
    },

};
</script>
<style>
@import url('~/assets/css/component/modal-style.css');
</style>
