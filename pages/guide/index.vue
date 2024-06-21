<template>
    <div class="inner guide-contents">
        <ul class="guide-list">
            <li v-for="(tabItem, index) in tabItems" :key="(index)"
                :class="['flex-center list', index === tabIndex ? 'active' : '']" @click="tabActive(index)">
                <span>{{ tabItem }}</span>
            </li>

        </ul>

        <ul class="guide-contents">
            <li>
                <component :is="currentTabComponent" class="tab"></component>
            </li>
        </ul>

    </div>
</template>

<script>

//content
import guideForm from '~/pages/guide/pages/form.vue'
import guideButton from '~/pages/guide/pages/button.vue'
import guideText from '~/pages/guide/pages/text.vue'
import guideItem from '~/pages/guide/pages/item.vue'
import guideModal from '~/pages/guide/pages/modal.vue'
import guideLayout from '~/pages/guide/pages/layout.vue'
import guideConstruction from '~/pages/guide/pages/construction.vue'


export default {
    name: 'IndexPage',
    layout: 'base',
    components: {
        guideForm,
        guideButton,
        guideText,
        guideItem,
        guideModal,
        guideLayout,
        guideConstruction,
    },
    data() {
        return {
            tabIndex: 0,
            tabItems: [
                'form',
                'button',
                'text',
                'item',
                'modal',
                'layout',
                'construction'
            ],
            tabContent: [
                guideForm,
                guideButton,
                guideText,
                guideItem,
                guideModal,
                guideLayout,
                guideConstruction,
            ],
            clickEvent: null,
        }
    },
    computed: {
        currentTabComponent() {
            return this.tabContent[this.tabIndex]
        }
    },
    methods: {
        tabActive(index) {
            this.tabIndex = index
        }
    }
}
</script>

<style>
.guide-contents {
    font-size: 1.4rem;
    padding-bottom: 8rem;
}

.guide-contents .guide-list {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #334155;
}

.guide-contents .guide-list .list {
    flex: 1 1 auto;
    text-align: center;
    font-size: 2rem;
    height: 6rem;

    color: #334155;
    background-color: #cbd5e1;
}

.guide-contents .guide-list .list {
    border-right: 1px solid #334155;
}

.guide-contents .guide-list .list:last-child {
    border-right: 0;
}

.guide-contents .guide-list .list.active {
    color: #fff;
    background-color: #334155;
    font-weight: 700;
}

.guide-contents li.contents {
    padding: 2rem 0;
}

.guide-contents .head-title {
    font-size: 1.6rem;
    line-height: 2.2;
    color: #cbd5e1;
    background-color: #334155;
    padding: 0 2rem;
    margin: 3rem 0;
}

.guide-contents .sub-desc {
    font-size: 1.4rem;
    line-height: 1.8;
    color: #334155;
    background-color: #cbd5e1;
    padding: 0 2rem;
    margin: 2rem 0;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width:767px) {
    .guide-contents .guide-list .list {
        width: 25%;

    }

}
</style>