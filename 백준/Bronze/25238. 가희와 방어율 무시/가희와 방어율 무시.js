// const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(String);
// const [value, ...etc] = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number));
const [shield, decreasePercent] = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);
const compute = (shield * decreasePercent) / 100;
console.log(shield - (!compute ? 0 : compute) >= 100 ? 0 : 1);