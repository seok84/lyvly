<template>
	<section class="expired-password">
		<div class="user-inner">
			<h3 class="page-title">90일 경과 비밀번호</h3>
			<p class="sub-text">
				개인정보 보호를 위해, 비밀번호 변경 후<br />
				<strong>90일이 지난 후에는 비밀번호 재설정</strong>을 권장합니다.
			</p>
			<div class="form-title"><span>기존 비밀번호</span></div>
			<client-only>
			<ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
				<input v-model="password" type="password" name="password" placeholder="기존 비밀번호" class="form-basic"
					:class="{ 'invalid': errors.length }">
				<span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
			</ValidationProvider>
			</client-only>
			<div class="form-title"><span>새 비밀번호</span></div>
			<client-only>
			<ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
				<input v-model="newPassword" type="password" name="newPassword"
					placeholder="비밀번호(10~16자 이내 영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합)" class="form-basic custom-placeholder"
					:class="{ 'invalid': errors.length }">
				<span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
			</ValidationProvider>
			</client-only>
			<div class="form-title"><span>새 비밀번호 재입력</span></div>
			<client-only>
			<ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback">
				<input v-model="confirmNewPassword" type="password" name="confirmNewPassword" placeholder="새 비밀번호 재입력"
					class="form-basic" :class="{ 'invalid': errors.length }">
				<span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
			</ValidationProvider>
			</client-only>
			<div class="btn-wrap">
				<button class="btn btn-default btn-half">연장</button>
				<button class="btn btn-secondary btn-half">변경</button>
			</div>
			<p class="info-dot">[연장]버튼을 누르시면 기존 비밀번호로 유지됩니다.</p>
		</div>
	</section>
</template>
<script>
export default {
	data() {
		return {}
	},
	methods: {},
	mounted() { }
}
</script>
<style scoped>
.expired-password .user-inner {
	margin-bottom: 4rem;
}

.expired-password .sub-text {
	font-size: 1.5rem;
	line-height: 1.47;
	margin-bottom: 3rem;
}

.expired-password .form-title {
	margin-top: 3rem;
	margin-bottom: 1rem;
}

.expired-password .form-title:first-child {
	margin-top: 0;
}

.expired-password .btn-wrap {
	margin-top: 4rem;
}

.expired-password .btn-wrap .btn {
	font-weight: 700;
}

.expired-password .btn-wrap .btn-default {
	border-color: #959595;
}

.expired-password .info-dot {
	position: relative;
	line-height: 1.33;
	margin-top: 1rem;
	padding-left: 0.4rem;
	color: #757575;
	font-size: 1.2rem;
	letter-spacing: normal;
}

.expired-password .info-dot::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 2px;
	height: 2px;
	border-radius: 2px;
	background-color: #757575;
	transform-origin: center;
	transform: translateY(6px);
}
</style>