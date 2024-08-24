// const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(String);
// const numbers = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);
const [length, ...info] = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number));
const res = info.map(v => v[0] + Math.floor(v[1] / 4) - Math.floor(v[1] / 7));
console.log(res.join("\n"));