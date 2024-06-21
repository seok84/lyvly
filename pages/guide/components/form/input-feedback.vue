<template>
    <div class="form-feedback">
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
        },
        validFeedbackText: {
            type: String,
            default: ''
        },
        invalidFeedbackText: {
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
            return this.inputText !== '';
        },
        feedbackMessage() {
            if (this.inputText === '') {
                return '입력해주세요';
            } else {
                return this.isValidInput ? this.validFeedbackText : this.invalidFeedbackText;
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
  