// const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(String);
// const [value, ...etc] = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number));
const [tc, ...items] = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(m => m.trim().split(" ").map(Number));
// const number = Number(require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim());
const res = ["Gnomes:"];

for(let i = 0; i < items.length; i++) {
    let asc = [...items[i]].sort((a, b) => a - b);
    let desc = [...items[i]].sort((a, b) => b - a);

    if(JSON.stringify(items[i]) !== JSON.stringify(asc) && JSON.stringify(items[i]) !== JSON.stringify(desc)) {
        res.push("Unordered");
    } else {
        res.push("Ordered");
    }
}

console.log(res.join("\n"));