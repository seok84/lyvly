<template>
    <div>
        <section>
            <p class="head-title">버튼 사이즈</p>
            <p>
                버튼 사이즈는 사이트별로 상이 - 해당 사이트 내 대표 사이즈를 지정
            </p>
            <article>
                <button type="button" class="btn btn-small btn-default">btn btn-small</button>
                <button type="button" class="btn btn-middle btn-default">btn btn-middle</button>
                <button type="button" class="btn btn-large btn-default">btn btn-large</button>
            </article>
            <p>
                버튼 사이즈는 width-넓이값으로 지정 - eg) half = 50%, full = 100%
            </p>
            <article>
                <div class="flex-center">
                    <button type="button" class="btn width-half btn-default">btn width-half</button>
                    <button type="button" class="btn width-half btn-default">btn width-half</button>
                </div>
                <button type="button" class="btn width-full btn-default">btn width-full</button>
            </article>

        </section>

        <section>
            <p class="head-title">버튼 컬러</p>
            <button type="button" class="btn btn-small btn-primary">btn-primary</button>
            <button type="button" class="btn btn-small btn-secondary">btn-secondary</button>
            <button type="button" class="btn btn-small btn-tertiary">btn-tertiary</button>
            <br/>
            <button type="button" class="btn btn-small btn-black">btn-black</button>
            <button type="button" class="btn btn-small btn-light">btn-light</button>
            <button type="button" class="btn btn-small btn-default">btn-default</button>
            <button type="button" class="btn btn-small btn-disabled">btn-disabled</button>
            <button type="button" class="btn btn-small btn-gray">btn-gray</button>

        </section>

        <section>
            <p class="sub-desc">.btn + .btn</p>
            <pre>
            &lt;div class="btn-wrap"&gt;
                &lt;button type="button" class="btn btn-primary">btn&lt;/button&gt;
                &lt;button type="button" class="btn btn-primary">btn&lt;/button&gt;
            &lt;/div&gt;
            </pre>
            <div class="btn-wrap">
                <button type="button" class="btn btn-primary ">btn</button>
                <button type="button" class="btn btn-default">btn</button>
            </div>
            <div class="btn-wrap">
                <button type="button" class="btn btn-primary">btn</button>
                <button type="button" class="btn btn-default">btn</button>
                <button type="button" class="btn btn-primary">btn</button>
            </div>
            <div class="btn-wrap">
                <button type="button" class="btn btn-primary">btn</button>
                <button type="button" class="btn btn-default">btn</button>
                <button type="button" class="btn btn-primary">btn</button>
                <button type="button" class="btn btn-default">btn</button>
            </div>
            <div class="btn-wrap">
                <button type="button" class="btn btn-primary">btn</button>
                <button type="button" class="btn btn-default">btn</button>
                <button type="button" class="btn btn-primary">btn</button>
                <button type="button" class="btn btn-default">btn</button>
                <button type="button" class="btn btn-primary">btn</button>
            </div>

        </section>

    </div>
</template>

<script>
export default {

}
</script>
<style scoped>
section p,
section div,
section pre,
section article {
    margin: 0 0 2rem;
}

section pre {
    padding: 1rem;
    border: 1px solid #eee;
}
</style>