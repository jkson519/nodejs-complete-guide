const http = require('http');

// 1. 별도 함수
// function rqListener(req, res) {
// }
// const server = http.createServer(rqListener);

// 2. 익명 함수
// const server = http.createServer(function(req, res) {
// });

// 3. 화살표 함수
const server = http.createServer((req, res) => {
    console.log(req);
});

// listen은 Node.js가 스크립트를 바로 종료하지 않고 계속 실행되면서 '듣도록' 하는 역할
server.listen(3000);