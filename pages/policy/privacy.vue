<template>
    <section class="inner policy-inner">
        <h3 class="page-title">개인정보처리방침</h3>
        <select name="terms" id="terms" class="select-basic" v-model="privacyList" @change="selectOption">
            <option value="non_selected" selected> 맨위의 옵션입니다 </option>
            <option v-for="(data, index) in  termsList " :key="`${data.policyId}+${index}`" :value="data.policyId">
                개인정보처리방침 (시행일자 : {{ data.date }})
            </option>
        </select>
        <div class="py-40" v-html="privacyContents">
        </div>
    </section>
</template>
<script>
export default {
    layout: "default",
    name: "terms",
    data() {
        return {
            selectedPrivacy: 'non_selected',
            privacyList: "",
            termsList: [
                { date: '2023.03.01', value: 'a', content: 'test1' },
                { date: '2023.02.01', value: 'b', content: 'test2' },
                { date: '2023.01.01', value: 'c', content: 'test3' },
            ],
            privacyContents: "",
        }
    },
    mounted() {
        this.selectedPrivacy = ' 개인정보처리방침 (시행일자 :' + this.termsList[0].date + ')';
        this.privacyContents = this.termsList[0].content;

        console.log(`${this.selectedPrivacy}`);
    },
    methods: {
        selectOption() {
            this.termsList.forEach((key, value) => {
                if (key.value === this.selectedPrivacy) {
                    this.privacyContents = key.content;
                }
            })
        }
    },
}
</script>
<style>
.policy-inner>.select-basic {
    width: 100%;
}

.policy-inner .py-40 {
    display: block;
    word-break: break-all;
    padding: 4rem 0;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
        "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;

}
</style>