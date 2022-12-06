const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "input.txt"), {
  encoding: "utf-8",
});

let marker = 0;

for (let i = 0; i < file.length; i++) {
  let map = {};
  //part1
  //const partial = file.slice(i, i + 4);
  //part2
  const partial = file.slice(i, i + 14);

  for (let part of partial) {
    if (!map[part]) {
      map[part] = 0;
    }
    map[part] += 1;
  }

  // part1 is 4
  // part2 is 14
  if (Object.keys(map).length === 14) {
    marker = i + 14;
    break;
  }
}

console.log(marker);
