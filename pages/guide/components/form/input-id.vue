<template>
    <div class="form-line form-feedback">
        <input type="text" v-model="inputText" class="form-basic"
            :class="{ valid: isValidInput, invalid: !isValidInput && showFeedback }" :placeholder="placeholderText"
            @blur="checkValidity" />
        <p class="feedback" :class="{ valid: isValidInput, invalid: !isValidInput && showFeedback }" v-show="showFeedback">
            {{ feedbackMessage }}
        </p>
    </div>
</template>
  
<script>
export default {
    props: {
        messages: {
            type: Object,
            default: () => ({})
        },
        valueText: {
            type: String,
            default: ''
        },
        placeholderText: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            inputText: this.valueText,
            showFeedback: false
        };
    },
    computed: {
        isValidInput() {
            return /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(this.inputText);
        },
        feedbackMessage() {
            if (this.inputText === '') {
                return '입력해주세요';
            } else {
                return this.isValidInput ? '아이디가 유효합니다.' : '유효하지 않은 ID입니다.';
            }
        }
    },
    mounted() {
        this.checkValidity();
    },
    methods: {
        checkValidity() {
            this.showFeedback = true;
        }
    }
};
</script>
  