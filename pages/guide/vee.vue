<template>
    <div class="inner">
        <ValidationObserver ref="observer" v-slot="{ validate }">
            <form @submit.prevent="handleSubmit(validate)">
                <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-id form-feedback">
                    <input v-model="username" type="text" name="username" class="form-basic"
                        :class="{ 'invalid': errors.length }" />
                    <p v-if="errors.length" class="feedback invalid">{{ errors[0] }}</p>
                </ValidationProvider>

                <ValidationProvider rules="required|email" v-slot="{ errors }" class="form-line form-pwd form-feedback">
                    <input v-model="email" type="text" name="username" class="form-basic"
                        :class="{ 'invalid': errors.length }" />
                    <p v-if="errors.length" class="feedback invalid">{{ errors[0] }}</p>
                </ValidationProvider>
                <!-- 다른 입력 필드들과 유효성 검사 메시지를 추가합니다. -->
                <button type="submit">Submit</button>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            username: '',
        };
    },
    methods: {
        async handleSubmit(validate) {
            try {
                // 모든 유효성 검사를 수행합니다.
                const isValid = await validate();

                if (isValid) {
                    // 폼 유효성 검사를 통과한 경우에만 제출 로직 실행
                    console.log('Form submitted successfully!');
                } else {
                    console.log('Form validation failed.');
                }
            } catch (error) {
                console.error('Form validation error:', error);
            }
        },
    },
};
</script>
