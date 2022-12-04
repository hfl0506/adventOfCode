const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "input.txt"), {
  encoding: "utf-8",
});

const jobs = file.split("\n");

let count = 0;

for (let job of jobs) {
  const [p1, p2] = job.split(",");
  const [p1l, p1r] = p1.split("-");
  const [p2l, p2r] = p2.split("-");

  if (
    (Number(p1l) <= Number(p2l) && Number(p1r) >= Number(p2r)) ||
    (Number(p2l) <= Number(p1l) && Number(p2r) >= Number(p1r))
  ) {
    count += 1;
    continue;
  }
}

console.log(count);
