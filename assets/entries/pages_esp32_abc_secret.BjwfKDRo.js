import{j as e,f as g,a as d,b as m,y as i,O as u,x as f,n as x,M as b,R as w,N as v,S as y,s as S,$ as j,P as r,i as p,c as o,d as P,e as k}from"../chunks/chunk-DJl-fdYE.js";import{f as Y}from"../chunks/chunk-5LPJm-p8.js";/* empty css                      */const n=void 0,z=void 0,N=[],F=[],R=({})=>e.jsxs(g,{className:"w-body cef8lky c3i1u3x chk6qok",children:[e.jsxs(d,{className:"w-box cxit5en cogsgih ctdzyps ce19egy",children:[e.jsx(m,{href:"/",className:"w-link",children:e.jsx(i,{src:"/assets/Logo_fgtINaQGBFFapgXNvmtgD.png",width:405,height:451,className:"w-image c942crn c1uzvt68 cp3a1ni"})}),e.jsxs(u,{children:[e.jsx(f,{children:e.jsx(x,{className:"w-button c1ya628u c10ua9p1 c1qy06sr cpbg552 cshxx6g c1lub6ji c77fen c1kt3hjx c1geiwv ckcg2od cealztw cvs4hrp comp0x6 cqpuunw c1wvok5d c1eikf4o c1iwr2ut c1l088 c1fh3e63 c14zbtl7 c14xknmu c1mkwhsj c50kpvg c1tup317 c1lxdi4i c1xm82re caz9sw9 c3ke8ei c1vra1wj c1rkfrji c1t36fdn c1twcrqe",children:e.jsx(i,{src:"/assets/burger_H_E62dUjUdnjYrHNINiU_.png",width:100,height:100,className:"w-image"})})}),e.jsx(b,{className:"w-dialog-overlay c1n92csm c1e0yeox cpjqu7u csvz69a c62v901 cnpumd1 c15kyzwk c1yxak60 cbe9vyj cqsyioe c13jgw8t ccvhcq8",children:e.jsxs(w,{className:"w-dialog-content c1s06m5q cnpumd1 cbe9vyj cqsyioe c15zk8e1 cb947cc c10ury7n ckwfs5l c14zbtl7 c13gmqhk cpg64ub cxu11uu c6t5zc4 chqhe2i c1e23wal c12pfuk9 ci1jhro c1xyla5v",children:[e.jsxs(d,{tag:"nav",role:"navigation",className:"w-box",children:[e.jsxs(d,{className:"w-box cbe9vyj cqsyioe c1p8wosj c1wpxkon",children:[e.jsx(v,{className:"w-dialog-title c19otp7c c14dh9mz cmup7a7 cbyfgle cwvbj7b",children:"Sheet Title"}),e.jsx(y,{className:"w-dialog-description c19otp7c c14dh9mz c1geiwv ckcg2od c8wnu40",children:"Sheet description text you can edit"})]}),e.jsx(S,{className:"w-text",children:"The text you can edit"})]}),e.jsx(j,{className:"w-close-button c193n3ab c11gcw2s ci9xck c164arb c1mydgbc chzyyxd c1rkdclf cspx8cz cbe9vyj c1qy06sr cpbg552 c17x55us cpbtfu3 c1uqrecz c350vec cwwj380 ci4hcet c2ls53r cjhbkuo",children:e.jsx(r,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>',className:"w-html-embed"})})]})})]})]}),e.jsxs(d,{className:"w-box",children:[e.jsx(r,{code:`<canvas id="pong"></canvas>
<div id="game-over">Game Over! Press F5 to Restart</div>

<script>
    // Set up the canvas
    const canvas = document.getElementById('pong');
    const ctx = canvas.getContext('2d');

    // Define game variables
    const paddleWidth = 10, paddleHeight = 100;
    let ballRadius = 8;
    let leftPaddleY = (canvas.height - paddleHeight) / 2;
    let rightPaddleY = (canvas.height - paddleHeight) / 2;
    let ballX = canvas.width / 2;
    let ballY = canvas.height / 2;
    let ballSpeedX = 4, ballSpeedY = 4;
    let leftPaddleSpeed = 0, rightPaddleSpeed = 0;
    let leftScore = 0, rightScore = 0;
    const paddleSpeed = 6;

    // Set up the canvas size
    canvas.width = 800;
    canvas.height = 400;

    // Event listeners for paddle movement
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') rightPaddleSpeed = -paddleSpeed;
        if (e.key === 'ArrowDown') rightPaddleSpeed = paddleSpeed;
        if (e.key === 'w') leftPaddleSpeed = -paddleSpeed;
        if (e.key === 's') leftPaddleSpeed = paddleSpeed;
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') rightPaddleSpeed = 0;
        if (e.key === 'w' || e.key === 's') leftPaddleSpeed = 0;
    });

    // Draw the paddles, ball, and score
    function draw() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw left paddle
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, leftPaddleY, paddleWidth, paddleHeight);

        // Draw right paddle
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(canvas.width - paddleWidth, rightPaddleY, paddleWidth, paddleHeight);

        // Draw the ball
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2, false);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        ctx.closePath();

        // Draw the score
        ctx.font = '32px Arial';
        ctx.fillText(leftScore, canvas.width / 4, 50);
        ctx.fillText(rightScore, (canvas.width * 3) / 4, 50);
    }

    // Update the ball position
    function updateBall() {
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        // Collision with top and bottom walls
        if (ballY + ballRadius > canvas.height || ballY - ballRadius < 0) {
            ballSpeedY = -ballSpeedY;
        }

        // Ball collision with paddles
        if (ballX - ballRadius < paddleWidth && ballY > leftPaddleY && ballY < leftPaddleY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        }

        if (ballX + ballRadius > canvas.width - paddleWidth && ballY > rightPaddleY && ballY < rightPaddleY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        }

        // Ball out of bounds (left or right)
        if (ballX - ballRadius < 0) {
            rightScore++;
            resetBall();
        }

        if (ballX + ballRadius > canvas.width) {
            leftScore++;
            resetBall();
        }
    }

    // Reset ball to the center after scoring
    function resetBall() {
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballSpeedX = -ballSpeedX;
        ballSpeedY = 4;
    }

    // Move the paddles
    function movePaddles() {
        leftPaddleY += leftPaddleSpeed;
        rightPaddleY += rightPaddleSpeed;

        // Prevent paddles from going out of bounds
        if (leftPaddleY < 0) leftPaddleY = 0;
        if (leftPaddleY + paddleHeight > canvas.height) leftPaddleY = canvas.height - paddleHeight;
        if (rightPaddleY < 0) rightPaddleY = 0;
        if (rightPaddleY + paddleHeight > canvas.height) rightPaddleY = canvas.height - paddleHeight;
    }

    // Game loop
    function gameLoop() {
        draw();
        updateBall();
        movePaddles();

        // Check for game over
        if (leftScore >= 10 || rightScore >= 10) {
            document.getElementById('game-over').style.display = 'block';
            return;
        }

        requestAnimationFrame(gameLoop);
    }

    // Start the game
    gameLoop();
<\/script>



`,className:"w-html-embed cvqnsyi"}),e.jsx(i,{src:"/assets/logothomasedison__8RxHCUpZJpoySyG34bKy.png",width:599,height:597,className:"w-image cw8wk4g c1n8335o c1byfc7y c1h1nl5c c13gmqhk cp845gz c1d5e9u5"}),e.jsx(Y,{className:"w-paragraph ck3rk9r cz5s00m cgzpa1h chewl0k c1d5e9u5 c1g05gyx",children:"Hello, you found my secret page"})]})]}),H=({data:t})=>{const{pageMeta:a}=t,{origin:s}=new URL(t.url);let c=a.socialImageUrl;return a.socialImageAssetName&&(c=`${s}${p({src:a.socialImageAssetName,format:"raw"})}`),e.jsxs(e.Fragment,{children:[t.url&&e.jsx("meta",{property:"og:url",content:t.url}),e.jsx("title",{children:a.title}),e.jsx("meta",{property:"og:title",content:a.title}),a.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:a.description}),e.jsx("meta",{property:"og:description",content:a.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),n,c&&e.jsx("meta",{property:"og:image",content:a.socialImageUrl}),n,a.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),a.custom.map(({property:l,content:h})=>e.jsx("meta",{property:l,content:h},l)),z,N.map(l=>e.jsx("link",{rel:"preload",href:`${o}${l.name}`,as:"font",crossOrigin:"anonymous"},l.id)),F.map(l=>e.jsx("link",{rel:"preload",href:`${o}${l.name}`,as:"image"},l.id))]})},T=Object.freeze(Object.defineProperty({__proto__:null,Head:H},Symbol.toStringTag,{value:"Module"})),U=({data:t})=>{const{system:a,resources:s,url:c}=t;return e.jsx(P.Provider,{value:{imageLoader:p,assetBaseUrl:o,resources:s},children:e.jsx(R,{system:a},c)})},q=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),B={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/esp32/abc/secret/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/esp32/abc/secret/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:q}}};export{B as configValuesSerialized};
