<template>
    <div>
        <p class="head-title">리스트 스타일</p>
        <p class="info-title">휴면계정시 제한사항</p>
        <ul class="info-desc">
            <li>회원의 개인 정보는 별도 분리 하여 보관</li>
            <li>메일 수신 중지</li>
        </ul>
        <p class="head-title">노컨텐츠 영역</p>
        <div class="content-txt">
            <h2 class="title-h2">'ㅋㅋㅋㅋㅋㅋㅋㅋㅋ' 검색결과</h2>
            <div class="no-content content-info">
                <p>등록된 상품이 없습니다.</p>
                <p>
                    빠른 시일 내에 업데이트하겠습니다.
                </p>
            </div>
        </div>
        <hr>
        <div class="content-txt">
            <div class="no-content content-info">
                <p>등록된 상품이 없습니다.</p>
                <p>
                    빠른 시일 내에 업데이트하겠습니다.
                </p>
            </div>
        </div>
        <br>
        <p class="head-title">큰 텍스트 타이틀</p>

        <text-title-lg :titleLgText="'큰 텍스트 타이틀'" />
        <br>
        <text-title-lg :titleLgText="'큰 텍스트 타이틀 + 링크'" :linkShow="true" />
        <hr>
        <h3 class="page-title">페이지 타이틀: 회원가입</h3>
        <h3 class="content-title">컨텐츠 타이틀: 마이페이지/공지사항</h3>
        <h3 class="content-title left">왼쪽 타이틀</h3>
        <h3 class="line-title">왼쪽 밑줄 타이틀</h3>
        <p class="sub-text"><strong>강조텍스트</strong>가 들어있는 서브텍스트</p>
        <br />
        <p class="head-title">폰트 참고</p>
        <p class="sub-desc">Pretendard</p>
        <span style="margin-right:6px; font:100 24px/normal Pretendard, sans-serif;">프리텐다드</span>
        <span style="margin-right:6px; font:200 24px/normal Pretendard, sans-serif;">프리텐다드</span>
        <span style="margin-right:6px; font:300 24px/normal Pretendard, sans-serif;">프리텐다드</span>
        <span style="margin-right:6px; font:400 24px/normal Pretendard, sans-serif;">프리텐다드</span>
        <span style="margin-right:6px; font:500 24px/normal Pretendard, sans-serif;">프리텐다드</span>
        <span style="margin-right:6px; font:600 24px/normal Pretendard, sans-serif;">프리텐다드</span>
        <span style="margin-right:6px; font:700 24px/normal Pretendard, sans-serif;">프리텐다드</span>
        <span style="margin-right:6px; font:800 24px/normal Pretendard, sans-serif;">프리텐다드</span>
        <span style="margin-right:6px; font:900 24px/normal Pretendard, sans-serif;">프리텐다드</span>
        <br>
        <br>
        <!-- 영문 -->
        <span style="margin-right:6px; font:100 24px/normal Pretendard, sans-serif;">Pretendard</span>
        <span style="margin-right:6px; font:200 24px/normal Pretendard, sans-serif;">Pretendard</span>
        <span style="margin-right:6px; font:300 24px/normal Pretendard, sans-serif;">Pretendard</span>
        <span style="margin-right:6px; font:400 24px/normal Pretendard, sans-serif;">Pretendard</span>
        <span style="margin-right:6px; font:500 24px/normal Pretendard, sans-serif;">Pretendard</span>
        <span style="margin-right:6px; font:600 24px/normal Pretendard, sans-serif;">Pretendard</span>
        <span style="margin-right:6px; font:700 24px/normal Pretendard, sans-serif;">Pretendard</span>
        <span style="margin-right:6px; font:800 24px/normal Pretendard, sans-serif;">Pretendard</span>
        <span style="margin-right:6px; font:900 24px/normal Pretendard, sans-serif;">Pretendard</span>
    </div>
</template>
<script>

export default {
    data() {
        return {

        }
    },
}
</script>
<style></style>