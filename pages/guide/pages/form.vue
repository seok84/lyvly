<template>
    <div>
        <p class="head-title">알림설정 버튼</p>
        <div class="alert-set-button"><span class="circle"></span></div>
        <div class="alert-set-button active"><span class="circle"></span></div>
        <p class="head-title">file add 컴포넌트</p>
        <form-add-file />
        <p class="head-title"> 기간조회 컴포넌트</p>
        <form-period-search />
        <p class="head-title"> div 커스텀 셀렉트 박스</p>
        <div class="sorting-area">
            <div class="filter-wrap">
                <etc-custom-select :options="['test01', 'test02', 'test03', 'test04']" :default="'test01'" class="select" />
            </div>
            <div class="filter-wrap">
                <etc-custom-select :options="[]" :default="'빈 셀렉트'" class="select" />
            </div>
        </div>
        <p class="head-title">수량체크 박스</p>
        <div class="quantity-box">
            <div class="btn-quantity-box">
                <button type="button" class="btn-minus">-</button>
                <input type="number" title="수량" value="1" class="number">
                <button type="button" class="btn-plus">+</button>
            </div>
        </div>

        <p class="head-title">라디오, 체크박스</p>
        <div class="radio-wrap">
            <label for="sample01">
                <input type="radio" name="radioSample" id="sample" class="primary" checked>
                <span>샘플01</span>
            </label>
            <label for="sample01">
                <input type="radio" name="radioSample01" id="sample01" checked>
                <span>샘플01</span>
            </label>
            <label for="sample02">
                <input type="radio" name="radioSample01" id="sample02">
                <span>샘플02</span>
            </label>
            <label for="sample11">
                <input type="radio" name="radioSample02" id="sample11" disabled>
                <span>샘플1-1</span>
            </label>
            <label for="sample12">
                <input type="radio" name="radioSample02" id="sample12" disabled checked>
                <span>샘플1-2</span>
            </label>
        </div>
        <br>
        <div>
            <label for="sample05" class="check-wrap">
                <input type="checkbox" name="checkboxSample" id="sample05" checked>
                <span>샘플05</span>
            </label>
            <label for="sample06" class="check-wrap">
                <input type="checkbox" name="checkboxSample" id="sample06">
                <span>샘플06</span>
            </label>
            <label for="sample07" class="check-wrap disabled">
                <input type="checkbox" name="checkboxSample" id="sample07" disabled>
                <span>샘플07</span>
            </label>
        </div>

        <p class="head-title">셀렉트박스 스타일</p>
        <div class="double-form-line">
            <span class="form-line">
                <select class="select-basic" name="" id="">
                    <option value="">옵션01</option>
                    <option value="">옵션02</option>
                    <option value="">옵션03</option>
                </select>
                <div class="form-feedback invalid"><input type="text" value="업태" class="form-basic">
                    <span class="feedback invalid" style="display: none;"></span>
                </div>
            </span>

        </div>
        <br />
        <div class="sub-desc">select-thin</div>
        <span class="form-line">
            <select class="select-thin" name="" id="">
                <option value="">옵션01</option>
                <option value="">옵션02</option>
                <option value="">옵션03</option>
            </select>
        </span>
        <div class="sub-desc">select-small-arrow</div>
        <span class="form-line">
            <select class="select-small-arrow" name="" id="">
                <option value="">옵션01</option>
                <option value="">옵션02</option>
                <option value="">옵션03</option>
            </select>
        </span>
        <div class="sub-desc">select-basic</div>
        <span class="form-line">
            <select class="select-basic" name="" id="">
                <option value="">옵션01</option>
                <option value="">옵션02</option>
                <option value="">옵션03</option>
            </select>
        </span>

        <form action="">
            <fieldset>
                <legend class="screenout">회원가입</legend>
                <p class="head-title">
                    <span>인풋 유효성 노출</span>
                </p>
                <ol class="input-style-desc">
                    <li><b>form-line </b>: input 을 감싸는 한 줄, 레이아웃 관련 클래스</li>
                    <li><b>form-feedback</b> : 유효성 메세지가 노출되는 input을 감싸는 부모 클래스</li>
                    <li>form-line 과 form-feedback 는 개별, 같이 사용 가능</li>
                    <li>form-feedback 과 form-button 은 같이 사용 불가능</li>
                    <li>레이아웃에 따라 form-line 내부에 form-feedback이 존재함</li>
                </ol>
                <pre>
                    &lt;span class="form-line form-feedback "&gt; <br/>
                        &lt;input type="text" class="form-basic" placeholder="아이디(영문,숫자 포함 6자 이상)" /&gt; <br/>
                        &lt;span class="feedback "&gt; 유효성 메세지 자리  &lt;/span&gt; <br/>
                    &lt;/span&gt;
                    <hr>
                     <span class="form-line form-feedback ">
                        <input type="text" class="form-basic invalid" placeholder="아이디(영문,숫자 포함 6자 이상)"/>
                        <span class="feedback invalid">유효성 메세지 자리</span>
                    </span>
                </pre>
                <!-- SAMPLE validate 모듈 사용-->
                <div class="sub-desc">input disabled</div>
                <i>- 커서 이벤트를 css 상에서 막아두었지만 tab 포커싱을 막으려면 disabled 사용이 필요</i><br /><br />

                <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback disabled">
                    <input v-model="email" type="text" name="username" class="form-basic" placeholder="disabled 상태"
                        :class="{ 'invalid': errors.length }" disabled />
                    <p v-if="errors.length" class="feedback invalid">{{ errors[0] }}</p>
                </ValidationProvider>

                <div class="sub-desc">SAMPLE validate 모듈 사용</div>
                <ValidationObserver ref="observer" v-slot="{ validate }">
                    <form @submit.prevent="handleSubmit(validate)">
                        <ValidationProvider rules="required" v-slot="{ errors }" class="form-line form-feedback  form-id">
                            <input v-model="username" type="text" name="username" class="form-basic"
                                :class="{ 'invalid': errors.length }" />
                            <p v-if="errors.length" class="feedback invalid">{{ errors[0] }}</p>
                        </ValidationProvider>

                        <ValidationProvider rules="required|email" v-slot="{ errors }"
                            class="form-line form-feedback  form-pwd">
                            <input v-model="email" type="text" name="username" class="form-basic"
                                :class="{ 'invalid': errors.length }" />
                            <p v-if="errors.length" class="feedback invalid">{{ errors[0] }}</p>
                        </ValidationProvider>
                        <!-- 다른 입력 필드들과 유효성 검사 메시지를 추가합니다. -->
                        <button type="submit">Submit</button>
                    </form>
                </ValidationObserver>
                <!-- SAMPLE 일반 노출 input form-->
                <span class="form-line form-feedback  form-id">
                    <input type="text" class="form-basic" placeholder="아이디(영문,숫자 포함 6자 이상)" />
                    <span class="feedback invalid" style="display: none;"></span>
                </span>
                <span class="form-line form-feedback  form-pwd">
                    <input type="text" class="form-basic" placeholder="비밀번호(영문,숫자,특수문자 포함 6자 이상)" />
                    <span class="feedback invalid" style="display: none;"></span>
                </span>
                <!-- // SAMPLE 일반 노출 input form-->
                <p class="form-title">
                    <span>회원</span>
                </p>
                <FormInputId />
                <p class="form-title accent">
                    <span>비밀번호</span>
                </p>
                <FormInputPwd />
                <FormInputId :valueText="'asdf'" /><!-- 문자열로 전달하기 위해 " ' 문자 ' " -->
                <FormInputPwd :valueText="'asdf1234'" />
                <FormInputId :valueText="'qwer1234'" />
                <FormInputPwd :valueText="'asdf1234!!'" />
                <p class="sub-desc">유효성, placeholder, value props 컴포넌트</p>
                <div class=" form-line">
                    <FormInputFeedback :placeholderText="'placeholder'" :valueText="'010'" :validFeedbackText="'유효합니다!'"
                        :invalidFeedbackText="'유효하지 않습니다!'" />
                </div>
                <div class=" form-line">
                    <FormInputFeedback :placeholderText="'placeholder'" :valueText="''" :validFeedbackText="'유효합니다!'"
                        :invalidFeedbackText="'유효하지 않습니다!'" />
                </div>
                <!-- SAMPLE 일반 노출 input form-->
                <div class="double-form-line">
                    <div class="form-line">
                        <ValidationProvider rules="required" v-slot="{ errors }" class="form-feedback">
                            <input v-model="status" type="text" name="status" :class="{ 'invalid': errors.length }"
                                placeholder="업태" class="form-basic">
                            <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="form-line">
                        <ValidationProvider rules="required" v-slot="{ errors }" class="form-feedback">
                            <input v-model="type" type="text" name="type" :class="{ 'invalid': errors.length }"
                                placeholder="종목" class="form-basic">
                            <span v-if="errors.length" class="feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
            </fieldset>
        </form>

        <p class="head-title">약관동의</p>
        <form-terms-agree />
    </div>
</template>
<script>
//component
import FormInputId from '~/pages/guide/components/form/input-id.vue'
import FormInputPwd from '~/pages/guide/components/form/input-pwd.vue'
import FormInputFeedback from '~/pages/guide/components/form/input-feedback.vue'

export default {
    components: {
        FormInputId,
        FormInputPwd,
        FormInputFeedback,
    },
    data() {
        return {
        }
    },
    methods: {
        handleDeleteImage(index) {
            console.log(index);
            //   this.imageNames.splice(index, 1);
        },
    },
}
</script>
<style scoped>
.form-line {
    margin-bottom: 1rem;
}


.input-style-desc {
    list-style: disc;
    display: block;
    padding: 3rem;
    line-height: 1.4;
    border: 1px solid;
    margin: 0 0 2rem;
    color: #757575;
    letter-spacing: normal;
}

.input-style-desc b {
    font-weight: 800;
    color: #000000;
}
</style>