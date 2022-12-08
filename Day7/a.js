const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "input.txt"), {
  encoding: "utf-8",
});

const dirs = file.split("\n");

let count = 0;

let map = { "/": { size: 0 } };

let dirArr = ["/"];

for (let dir of dirs) {
  const a = dir.split(" ");
  if (a[0] === "$") {
    if (a[1] === "ls") continue;

    if (a[1] === "cd") {
      if (a[2] === "..") {
        dirArr.pop();
      } else {
        dirArr.push(a[2]);

        const j = dirArr.join("/");
        map[j] = {};
        map[j].size = 0;
      }
    }
  } else if (a[0] === "dir") continue;
  else {
    const size = Number(a[0]);
    const temp = [];
    dirArr.forEach((d) => {
      temp.push(d);
      const temp2 = temp.join("/");
      map[temp2].size += size;
    });
  }
}

for (let m in map) {
  if (map[m].size <= 100_000) {
    count += map[m].size;
  }
}

const sizeToDump = map["/"].size - 70_000_000 + 30_000_000;
let closestSize = 70_000_000;

for (let m in map) {
  if (map[m].size > sizeToDump && map[m].size < closestSize) {
    closestSize = map[m].size;
  }
}

console.log(count);
console.log(closestSize);
