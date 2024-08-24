// const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(String);
const [value, ...etc] = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number));

const res = etc.map((v, i) => `Case ${i + 1}: ${v.reduce((a, c) => a + c, 0)}`);

console.log(res.join("\n"));