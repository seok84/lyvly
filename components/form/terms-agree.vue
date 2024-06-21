<template>
    <div class="terms-area">
        <div class="terms-line">
            <div class="check-wrap">
                <label>
                    <input id="allCheck" type="checkbox" v-model="allCheckInput" />
                    <span>모든 약관 동의</span>
                </label>
            </div>
        </div>
        <div class="divider"></div>
        <!-- 나머지 체크박스들 -->
        <div class="terms-line" v-for="(checkboxValue, index) in checkboxValues" :key="index">
            <div>
                <div class="check-wrap">
                    <label>
                        <input type="checkbox" v-model="checkboxValues[index].checked" />
                        <span>{{ terms[index] }}</span>
                    </label>
                </div>
                <span @click="checkboxValue.modalShow = true">약관보기</span>
                <modal-default :modalInfo="checkboxValue.modalInfo" :modalShow="checkboxValue.modalShow"
                    @modalClose="checkboxValue.modalShow = false">
                    <div v-html="checkboxValue.modalText">
                    </div>
                </modal-default>
            </div>
        </div>
        <p class="feedback invalid">필수 약관에 동의해 주세요.</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            //checkbox
            checkboxValues: [
                {
                    checked: true,
                    modalText: "이용약관 내용...",
                    modalInfo: {
                        modalTitle: "이용약관",
                        modalFull: false,
                        headerShow: true,
                        dimmed: true,
                    },
                    modalShow: false,
                },
                {
                    checked: true,
                    modalText: "개인정보 수집 약관 내용...",
                    modalInfo: {
                        modalTitle: "개인정보 수집 약관",
                        modalFull: false,
                        headerShow: true,
                        dimmed: true,
                    },
                    modalShow: false,
                },
                {
                    checked: false,
                    modalText: "마케팅 이용약관 내용...",
                    modalInfo: {
                        modalTitle: "마케팅 이용약관",
                        modalFull: false,
                        headerShow: true,
                        dimmed: true,
                    },
                    modalShow: false,
                },
            ],
            terms: [
                "이용약관 동의(필수)",
                "개인정보 수집·이용목적 및 항목에 동의(필수)",
                "마케팅이용약관 동의(선택)",
            ],
        };
    },
    computed: {
        allCheckInput: {
            get() {
                return this.checkboxValues.every((value) => value.checked);
            },
            set(newValue) {
                this.checkboxValues.forEach((checkbox) => {
                    checkbox.checked = newValue;
                });
            },
        },
    },
};
</script>

<style scoped>
.terms-area .terms-line>div,
.terms-area .check-wrap label {
    display: flex;
    align-items: center;
}

.terms-area .divider {
    display: block;
    width: 100%;
    height: 1px;
    background: #eee;
    margin: 2rem 0;
}

.terms-line {
    flex-wrap: wrap;
}

.terms-line .feedback {
    width: 100%;
    flex: none;
}

.terms-area .terms-line>div {
    justify-content: space-between;
}

.terms-line>div>span {
    cursor: pointer;
    text-decoration: underline;
}
</style>

<style scoped>
.terms-area>div,
.terms-area .check-wrap label {
    display: flex;
    align-items: center;
}

.terms-area .divider {
    display: block;
    width: 100%;
    height: 1px;
    background: #eee;
    margin: 2rem 0;
}

.terms-line {
    flex-wrap: wrap;
}

.terms-line .feedback {
    width: 100%;
    flex: none;
}

.terms-line>div {
    flex: 1;
    justify-content: space-between;
}

.terms-line>div>span {
    cursor: pointer;
    text-decoration: underline;
}
</style>