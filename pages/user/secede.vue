<template>
    <section class="secede">
        <div class="user-inner">
            <h3 class="page-title">회원탈퇴</h3>
            <p class="sub-text">
                회원탈퇴시 상품 구매내역, 쿠폰 및 적립금 등 모든 정보가 삭제되며,<span class="divider"></span>
                회원 서비스를 모두 이용할 수 없습니다.
            </p>
            <div class="point-info">
                <p>
                    소멸예정 적립금 <span>{{ exitPoint }}</span>원
                </p>
            </div>
            <form action="">
                <p class="form-title"><span>탈퇴이유</span></p>
                <p class="form-caption">그동안 라이블리를 이용해 주셔서 감사합니다. <br />
                    더 나은 운영을 위한 설문조사 이므로 솔직한 답변 부탁 드립니다.
                </p>
                <div class="radio-wrap">
                    <label for="difficult">
                        <input type="radio" name="secedeForm" id="difficult" checked="checked"> <span>상품설명이 알기 어렵기
                            때문에</span>
                    </label>
                    <label for="unsatisfied">
                        <input type="radio" name="secedeForm" id="unsatisfied"> <span>주문 및 문의 시 직원의 대응이
                            만족스럽지 않아서</span>
                    </label>
                    <label for="badCondition">
                        <input type="radio" name="secedeForm" id="badCondition"> <span>상품의 상태가 좋지
                            않아서</span>
                    </label>
                    <label for="highPrice">
                        <input type="radio" name="secedeForm" id="highPrice"> <span>상품의 가격이 높아서</span>
                    </label>
                    <label for="noProduct">
                        <input type="radio" name="secedeForm" id="noProduct"> <span>원하는 상품이 없어서</span>
                    </label>
                    <label for="other">
                        <input type="radio" name="secedeForm" id="other"> <span>기타</span>
                    </label>
                    <textarea name="" id="" placeholder="기타 사유가 있다면 입력해주세요" cols="30" rows="10"
                        class="form-basic"></textarea>
                </div>
                <p class="form-title"><span>비밀번호</span></p>
                <client-only>
                <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback form-pwd">
                    <input v-model="password" type="password" name="password" :class="{ 'invalid': errors.length }"
                        class="form-basic" placeholder="비밀번호" />
                    <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                </ValidationProvider>
                </client-only>

                <button type="button" class="btn btn-secondary">탈퇴</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            exitPoint: '9,999,999'
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>
<style scoped>
.secede .sub-text {
    font-size: 1.5rem;
    line-height: 1.47;
}

.secede .sub-text .divider {
    display: block;
}


.secede .point-info {
    display: block;
    margin: 3rem 0 5rem;
    padding: 2.3rem;
    border: 1px solid #e1e1e1;
    border-radius: 1rem;
    text-align: center;
}

.secede .point-info p {
    font-weight: 800;
}

.secede .point-info p span {
    font-weight: inherit;
    font-size: 2.2rem;
    margin-left: .6rem;
}

.secede .form-title {
    margin-bottom: 0.8rem;
}

.secede .form-caption {
    line-height: 1.47;
}

.secede .radio-wrap {
    flex-direction: column;
    height: auto;
    line-height: unset;
    margin: 3rem 0 6rem;
}

.secede .radio-wrap label {
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
}

.secede .radio-wrap label span {
    margin-left: 0.8rem;
}

.secede .radio-wrap label:last-of-type {
    margin-bottom: 1rem;
}

.secede .radio-wrap textarea {
    min-height: 12.7rem;
    padding: 1rem 1.2rem;
    font-family: inherit;
    font-size: 1.5rem;
}

.secede .btn {
    margin: 4rem 0 11rem;
}


/* 모바일 */
@media (max-width: 480px) {
    .secede .sub-text {
        word-break: keep-all;
    }

    .secede .sub-text .divider {
        display: none;
    }

    .secede .btn {
        margin: 4rem 0;
        font-size: 1.8rem;
    }
}
</style>