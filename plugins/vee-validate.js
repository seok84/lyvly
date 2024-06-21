import Vue from 'vue';
import { ValidationProvider, extend, ValidationObserver } from "vee-validate" // vee-validate 로 부터 사용할 기능 import
import * as rules from "vee-validate/dist/rules"
for (let rule in rules) {
    console.log('rule: ', rule);
    // add the rule
    extend(rule, rules[rule])
}
import { required, email } from 'vee-validate/dist/rules';

// 필요한 유효성 검사 규칙 추가
extend('required', {
    ...required,
    message: '필수 입력 항목입니다.',
});

extend('email', {
    ...email,
    message: '이메일을 정확히 입력해 주세요.',
});


Vue.component("ValidationProvider", ValidationProvider)
Vue.component("ValidationObserver", ValidationObserver)