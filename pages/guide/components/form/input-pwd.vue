<template>
    <div class="form-line  form-feedback">
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
            const hasLetter = /[a-zA-Z]/.test(this.inputText);
            const hasNumber = /\d/.test(this.inputText);
            const hasSpecialChar = /[!@#$%^&*]/.test(this.inputText);
            const isLongEnough = this.inputText.length >= 8;

            return hasLetter && hasNumber && hasSpecialChar && isLongEnough;
        },
        inputClass() {
            return {
                valid: this.isValidInput && this.showFeedback,
                invalid: !this.isValidInput && this.showFeedback
            };
        },
        feedbackMessage() {
            if (this.inputText === '') {
                return '입력해주세요';
            }
            return this.isValidInput ? '비밀번호가 유효합니다.' : '유효하지 않은 비밀번호입니다.';
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
  
<style scoped></style>
  