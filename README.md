<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>球体晃动与缩放动画</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .container {
            text-align: center;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        h1 {
            color: white;
            margin-bottom: 2rem;
            text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }
        
        .ball {
            width: 100px;
            height: 100px;
            background: radial-gradient(circle at 30% 30%, #ff9966, #ff5e62);
            border-radius: 50%;
            margin: 0 auto;
            box-shadow: 
                inset -10px -10px 20px rgba(0, 0, 0, 0.2),
                inset 5px 5px 15px rgba(255, 255, 255, 0.3),
                0 10px 30px rgba(0, 0, 0, 0.4);
            
            /* 动画定义 */
            animation: 
                wobble 2.5s ease-in-out infinite alternate,
                scale 3s ease-in-out infinite alternate;
        }
        
        /* 晃动动画 */
        @keyframes wobble {
            0%, 100% {
                transform: translateX(-5px) rotate(-2deg);
            }
            50% {
                transform: translateX(5px) rotate(2deg);
            }
        }
        
        /* 缩放动画 */
        @keyframes scale {
            0%, 100% {
                transform: scale(0.95);
            }
            50% {
                transform: scale(1.05);
            }
        }
        
        .controls {
            margin-top: 2rem;
            display: flex;
            justify-content: center;
            gap: 1rem;
        }
        
        button {
            padding: 0.7rem 1.5rem;
            border: none;
            border-radius: 50px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        button:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-3px);
        }
        
        .info {
            color: white;
            margin-top: 2rem;
            max-width: 500px;
            line-height: 1.6;
            background: rgba(0, 0, 0, 0.2);
            padding: 1rem;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS球体晃动与缩放动画</h1>
        <div class="ball"></div>

        <div class="controls">
            <button onclick="toggleAnimation()">暂停/继续动画</button>
            <button onclick="changeColor()">改变颜色</button>
        </div>
        
        <div class="info">
            <h3>动画说明</h3>
            <p>这个球体同时应用了两种CSS动画：</p>
            <ul>
                <li><strong>晃动动画</strong>：球体在X轴上轻微移动并旋转，模拟晃动效果</li>
                <li><strong>缩放动画</strong>：球体在95%到105%之间循环缩放</li>
            </ul>
            <p>两种动画使用不同的时间周期，创造出更自然的动态效果。</p>
        </div>
    </div>

    <script>
        const ball = document.querySelector('.ball');
        let isPaused = false;
        
        function toggleAnimation() {
            if (isPaused) {
                ball.style.animationPlayState = 'running';
                isPaused = false;
            } else {
                ball.style.animationPlayState = 'paused';
                isPaused = true;
            }
        }
        
        function changeColor() {
            const colors = [
                'radial-gradient(circle at 30% 30%, #ff9966, #ff5e62)',
                'radial-gradient(circle at 30% 30%, #36D1DC, #5B86E5)',
                'radial-gradient(circle at 30% 30%, #a8ff78, #78ffd6)',
                'radial-gradient(circle at 30% 30%, #ffafbd, #ffc3a0)',
                'radial-gradient(circle at 30% 30%, #ffd89b, #19547b)'
            ];
            
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            ball.style.background = randomColor;
        }
    </script>
</body>
</html>
