<template>
    <section class="inner">
        <div class="event-content">
            <h3 class="page-title page-title-event">룰렛 이벤트</h3>
            <div class="event-title">
                <div>
                    <p class="date">[2023.02.22 ~ 2024.03.04]</p>
                    <p class="title">이벤트상세 제목</p>
                </div>
                <button type="button" class="sns_share">sns 공유하기</button>
            </div>
            <div class="event-edit-content">
                <!-- html editor로 등록되는 영역 -->
                <br />
                <img src="@/static/images/event_roulette/bg_01.png" alt="01" />
                <div class="roulette-container">
                    <div class="remain-counter">
                        <span>룰렛 잔여 횟수</span>
                        <span class="divider"></span>
                        <span><strong>3</strong>회</span>
                    </div>
                    <div class="position-center roulette">
                        <img src="@/static/images/event_roulette/img_arr.png" class="arrow" />
                        <canvas ref="canvas1" class="roulette-canvas canvas-01" width="600px" height="600px"></canvas>
                        <canvas ref="canvas2" class="roulette-canvas canvas-02" width="600px" height="600px"></canvas>
                        <button type="button" class="position-center" @click="rotate()">
                            <img src="@/static/images/event_roulette/img_btn.png" alt="룰렛 돌리기 버튼" />
                        </button>
                        <img src="@/static/images/event_roulette/img_back.png" class="back-circle" />
                    </div>
                    <img src="@/static/images/event_roulette/bg_02.png" alt="02" />
                </div>
                <img src="@/static/images/event_roulette/bg_03.png" alt="03" />
            </div>
        </div>
    </section>
</template>
<script>
    export default{
        data() {
            return {
                txtResult: [
                    // key1 : 최대 글자수 10자 (국문, 숫자 포함)
                    // key2 : 최대 글자수 5자 (국문, 숫자 포함)
                    {
                        key1: "아쉽지만...",
                        key2: "꽝",
                    },
                    {
                        key1: "일이삼",
                        key2: "일이삼",
                    },
                    {
                        key1: "일이삼사오",
                        key2: "일이삼사오",
                    },
                    {
                        key1: "적립금",
                        key2: "1만원",
                    },
                    {
                        key1: "일이삼사오육칠팔구십",
                        key2: "12345678",
                    },
                    {
                        key1: "할인쿠폰",
                        key2: "할인",
                    },
                ],
                text1: [],
                text2: [],
                rotateValue: 0,
            }
        },
        mounted() {
            const windowWidth = window.outerWidth;
            const canvas1 = this.$refs.canvas1;
			const canvas2 = this.$refs.canvas2;
			const context1 = canvas1.getContext("2d");
			const context2 = canvas2.getContext("2d");

			this.txtResult.forEach((item) => {
				this.text1.push(item.key1);
				this.text2.push(item.key2);
			});

            if (windowWidth > 1025) {
				canvas1.style.width = "600px";
				canvas1.style.height = "600px";
				canvas2.style.width = "600px";
				canvas2.style.height = "600px";
			} else if (1024 >= windowWidth && windowWidth > 688) {
				canvas1.style.width = "580px";
				canvas1.style.height = "580px";
				canvas2.style.width = "580px";
				canvas2.style.height = "580px";
			} else if (windowWidth <= 687) {
				canvas1.style.width = `${windowWidth - 100}px`;
				canvas1.style.height = `${windowWidth - 100}px`;
				canvas2.style.width = `${windowWidth - 100}px`;
				canvas2.style.height = `${windowWidth - 100}px`;
			}

            this.newMake();
        },
        methods: {
            newMake(){
                const canvas1 = this.$refs.canvas1;
                const canvas2 = this.$refs.canvas2;
                const context1 = canvas1.getContext("2d");
                const context2 = canvas2.getContext("2d");

                const colors = ["#f4f4f4", "#ffffff"]; // 배경색
                const txtColors = ["#272727", "#ef3231"]; //텍스트 색상
                
				const [cw, ch] = [canvas1.width / 2, canvas1.height / 2];
				const arc = Math.PI / (this.text1.length / 2);

				for (let i = 0; i < this.text1.length; i++) {
					context1.beginPath();
					context1.fillStyle = colors[i % colors.length];
					context1.moveTo(cw, ch);
					context1.arc(cw, ch, cw, arc * (i - 1), arc * i);
					context1.fill();
					context1.closePath();
				}

				//텍스트 설정
				context1.font = "700 2.2rem 'GmarketSansBold'";
				context1.textAlign = "center";
				context2.font = "700 3.5rem 'GmarketSansBold'";
				context2.textAlign = "center";

				//text1
				for (let i = 0; i < this.text1.length; i++) {
					const angle = arc * i + arc / 2;
					context1.save();
					context1.translate(cw + Math.cos(angle) * (cw - 70), ch + Math.sin(angle) * (ch - 70));
					context1.rotate(angle + Math.PI / 2);
					context1.fillStyle = txtColors[i % txtColors.length];
					this.text1[i].split(" ").forEach((text, j) => {
						context1.fillText(text, 0, 30 * j);
					});
					context1.restore();
				}
				//text2
				for (let i = 0; i < this.text2.length; i++) {
					const angle = arc * i + arc / 2;
					context2.save();
					context2.translate(cw + Math.cos(angle) * (cw - 110), ch + Math.sin(angle) * (ch - 110));
					context2.rotate(angle + Math.PI / 2);
					context2.fillStyle = txtColors[i % txtColors.length];
					this.text2[i].split(" ").forEach((text, j) => {
						context2.fillText(text, 0, 30 * j);
					});

					context2.restore();
				}
			},
            rotate() {
				setTimeout(() => {
                    const canvas1 = this.$refs.canvas1;
                    const canvas2 = this.$refs.canvas2;

					const ran = Math.floor(Math.random() * this.text1.length);
					const arc = 360 / this.text1.length;
                    this.rotateValue++;
					const rotate = ran * arc + 3600 * this.rotateValue + arc * 3 - arc;

					canvas1.style.transform = `translate(-50%, -50%) rotate(-${rotate}deg)`;
					canvas1.style.transition = `2s`;
					canvas2.style.transform = `translate(-50%, -50%)  rotate(-${rotate}deg)`;
					canvas2.style.transition = `2s`;

					setTimeout(() => alert(`${this.text1[ran]} ${this.text2[ran]}`), 2000);
				}, 1);
			}
        },
    }
</script>
<style scoped>
@import url('@/static/event/roulette-event.css');

.page-title-event {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.event-title {
    padding: 30px 0 20px;
    border-top: 2px solid #000;
    border-bottom: 1px solid #d9d9d9;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.event-title p.date {
    display: block;
    font-size: 18px;
    font-weight: 500;
    margin: 0 0 10px;
    line-height: 1;
}

.event-title p.title {
    font-size: 20px;
    font-weight: bold;
}

.event-title p:last-child {
    display: flex;
}

.sns_share {
    width: 24px;
    height: 26px;
    background: url(~/assets/images/common/ico_sns.png) no-repeat center center;
    background-size: 100% auto;
    border: none;
    color: unset;
    font-size: 0;
    min-width: unset;
    border-radius: unset;
    margin: 0 10px 0 0;
    padding: 1px;
}
</style>
