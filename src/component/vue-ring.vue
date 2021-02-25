<template>
    <div id="ring">
        <div class="canvas-ring">
            <canvas :id="option.ringContainerId" :width="option.width" :height="option.height">
                <p>您的设备当前暂不支持canvas</p>
            </canvas>
        </div>
    </div>
</template>
<script>
export default {
    name: 'vue-ring',
    props: {
        option: {
            type: Object,
            default: {
                width: 150,
                height: 150,
                progressColor: "#1479E1",
                ringBackgroundColor: "#eee",
                numerator: 186,
                denominator: 200,
                numColor: '#000',
                textColor: '#000',
                numFontSize: 16,
                textFontSize: 19,
                textContent: '部分 / 全部',
                lineWidth: 10
            }
        }
    },
    data() {
        return {
            ringContainerId: 'canvas-ring'
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.drawRing()
        },
        drawRing() {
            // 基本参数
            var canvas = document.getElementById(this.ringContainerId),
                ctx = canvas.getContext('2d'),
                dpr = window.devicePixelRatio,
                // 中心x坐标
                circleX = canvas.width / 2,
                // 中心y坐标
                circleY = canvas.height / 2,
                // 圆环半径
                radius = (this.option.width - this.option.lineWidth) / 2,
                // 圆形线条的宽度
                lineWidth = this.option.lineWidth,
                // 圆环底层颜色
                backgroundColor = this.option.ringBackgroundColor,
                // 进度条颜色
                progressColor = this.option.progressColor,
                // 中心数字字体大小
                numFontSize = this.option.numFontSize,
                // 中心文字字体大小
                textFontSize = this.option.textFontSize,
                // 中间数字文字颜色
                numColor = this.option.numColor,
                // 中间文字颜色
                textColor = this.option.textColor,
                // 中间文字内容
                textContent = this.option.textContent,
                // 占比
                numerator = '',
                denominator = '',
                // 最终百分比
                percent = ''

            // 数字比例预处理
            if (this.option.numerator > this.option.denominator) {
                denominator = this.option.denominator
                numerator = denominator
            } else {
                denominator = this.option.denominator
                numerator = this.option.numerator
            }
            percent = (numerator / denominator) * 60

            // 移动端模糊问题处理
            var {
                width: cssWidth,
                height: cssHeight
            } = canvas.getBoundingClientRect()
            canvas.width = dpr * cssWidth
            canvas.height = dpr * cssHeight
            ctx.scale(dpr, dpr)

            // 底层圆环绘制函数
            function circle(cx, cy, r) {
                ctx.beginPath()
                ctx.lineWidth = lineWidth
                ctx.strokeStyle = backgroundColor
                ctx.arc(cx, cy, r, Math.PI * 1, Math.PI * 2)
                ctx.stroke()
            }

            // 进度条层圆环
            function sector(cx, cy, r, startAngle, endAngle) {
                ctx.beginPath()
                ctx.lineWidth = lineWidth
                // 进度条颜色
                ctx.strokeStyle = progressColor
                //圆弧两端的样式
                ctx.lineCap = 'round'
                //圆弧
                ctx.arc(
                    cx,
                    cy,
                    r,
                    Math.PI * 1,
                    Math.PI * 1 + (endAngle / 100) * ((Math.PI * 5) / 3),
                    false
                )
                ctx.stroke()
            }

            // 刷新
            function loading() {
                // 进度条加载完成了
                if (process >= percent) {
                    clearInterval(circleLoading)
                }
                // 清除上一次canvas内容
                ctx.clearRect(0, 0, circleX * 2, circleY * 2)
                // 中间的文本信息
                textFontSize === '' ? ctx.font = '0px April' : ctx.font = textFontSize + 'px April'
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                numColor === '' ? ctx.fillStyle = '#000' : ctx.fillStyle = numColor
                ctx.fillText(numerator + '/' + denominator, circleX, circleY)
                numFontSize === '' ? ctx.font = '0px April' : ctx.font = numFontSize + 'px April'
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                textColor === '' ? ctx.fillStyle = '#000' : ctx.fillStyle = textColor
                ctx.fillText(textContent, circleX, circleY + 30)
                // 底层圆环绘制
                circle(circleX, circleY, radius)
                // 进度条层圆环绘制
                sector(circleX, circleY, radius, (Math.PI * 2) / 3, process)
                // 控制结束时动画的速度
                if (process / percent > 0.9) {
                process += 0.3
                } else if (process / percent > 0.8) {
                process += 0.55
                } else if (process / percent > 0.7) {
                process += 0.75
                } else {
                process += 1.0
                }
            }
            // 进度
            var process = 0.0
            var circleLoading = window.setInterval(function() {
                loading()
            }, 15)
        }
    }
}
</script>
<style>
</style>
