<template>
    <section class="mypage-view change-password">
		<div class="user-inner">
			<h3 class="content-title">비밀번호 변경</h3>
			<ValidationObserver ref="observer" v-slot="{ validate }">
				<form @submit.prevent="handleSubmit(validate)">
					<div v-if="changePwd">
						<div class="form-title"><span>기존 비밀번호</span></div>
						<ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
							<input v-model="password" type="password" name="password" placeholder="기존 비밀번호"
								class="form-basic" :class="{ 'invalid': errors.length }">
							<span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
						</ValidationProvider>
						<div class="form-title"><span>새 비밀번호</span></div>
						<ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
							<input v-model="newPassword" type="password" name="newPassword"
								placeholder="비밀번호(10~16자 이내 영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합)"
								class="form-basic custom-placeholder" :class="{ 'invalid': errors.length }">
							<span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
						</ValidationProvider>
						<div class="form-title"><span>새 비밀번호 재입력</span></div>
						<ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
							<input v-model="confirmNewPassword" type="password" name="confirmNewPassword" placeholder="새 비밀번호 재입력"
								class="form-basic" :class="{ 'invalid': errors.length }">
							<span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
						</ValidationProvider>
						<div class="btn-wrap">
							<button type="button" class="btn btn-secondary" @click="changePwd = !changePwd">저장</button>
						</div>
					</div>
					<!-- result  -->
					<div v-else>
						<div class="result">
							<p>비밀번호가 변경되었습니다.</p>
						</div>
						<div class="btn-wrap">
							<nuxt-link to="/user/login" class="btn btn-secondary">로그인</nuxt-link>
						</div>
					</div>
				</form>
			</ValidationObserver>
		</div>
	</section>
</template>
  
<script>
export default {
	layout: "divide",
	name: "change-password",
	data() {
		return {
			changePwd: true
		}
	},
	methods: {
	},
	mounted() {
	}
}
</script>
<style scoped>
.change-password .inner {
	max-width: 46rem;
}

.change-password .form-title {
	margin-top: 3rem;
	margin-bottom: 1rem;
}

.change-password .form-title:first-child {
	margin-top: 0;
}

.change-password .btn-wrap {
	margin-top: 4rem;
}

.change-password .btn-wrap .btn {
	font-weight: 700;
}

.change-password .result {
	text-align: center;
	padding: 1.4rem 0;
	border-radius: 1rem;
	background-color: #fbfbfb;
}
</style>