const http = require('http');

const routes = require('./routes');

// 1. 별도 함수
// function rqListener(req, res) {
// }
// const server = http.createServer(rqListener);

// 2. 익명 함수
// const server = http.createServer(function(req, res) {
// });

// 3. 화살표 함수
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);

//     // 이벤트 루프를 종료해서 프로그램 종료
//     // process.exit();

//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>');
//     // res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//     let lang = 'Node.js';
//     res.write(`<body><h1>Hello from my ${lang} Server!</h1></body>`);
//     res.write('</html>');
//     res.end();
//     // end를 호출한 뒤에 새로 입력을 시도할 경우 'ERR_STREAM_WRITE_AFTER_END' 오류 발생
// });

const server = http.createServer(routes.handler);

// listen은 Node.js가 스크립트를 바로 종료하지 않고 계속 실행되면서 '듣도록' 하는 역할
// server.listen(3001);
server.listen(3001, 'localhost', () => {
    console.log(`>> Web Server Start : http://${'localhost'}:${3001}/ 번 포트에서 대기 중`);
});