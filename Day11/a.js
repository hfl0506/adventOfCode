const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "input.txt"), {
  encoding: "utf-8",
});

const lines = file.split("\n");

const store = [];

for (let i = 0; i < lines.length; i = i + 7) {
  let obj = {
    items: [],
    inspect: 0,
  };

  if (lines[i + 1]?.includes("Starting items")) {
    obj.items = lines[i + 1].match(/\d+/g).map((n) => Number(n));
  }

  if (lines[i + 2]?.includes("Operation")) {
    const arr = lines[i + 2].match(/[-+/*]|\d+/g);
    if (arr[0] && arr[1]) {
      if (arr[0] === "*") {
        obj.operate = (num) => {
          return num * Number(arr[1]);
        };
      }

      if (arr[0] === "+") {
        obj.operate = (num) => {
          return num + Number(arr[1]);
        };
      }
    }
    if (arr[0] && !arr[1]) {
      if (arr[0] === "*") {
        obj.operate = (num) => {
          return num * num;
        };
      }
      if (arr[0] === "+") {
        obj.operate = (num) => {
          return num + num;
        };
      }
    }
  }

  if (lines[i + 3]?.includes("Test")) {
    const divide = Number(lines[i + 3].match(/\d+/g));
    const trueTarget = Number(lines[i + 4].match(/\d+/g));
    const falseTarget = Number(lines[i + 5].match(/\d+/g));
    obj.test = (num) => {
      return num % divide === 0 ? trueTarget : falseTarget;
    };
  }
  store.push(obj);
}

let round = 20;

//part 1
for (let i = 0; i < round; i++) {
  store.forEach((s) => {
    s.items.forEach((item) => {
      let points = Math.floor(s.operate(item) / 3);
      console.log(points);
      let test = s.test(points);
      const shift = s.items.shift();
      store[test].items.push(shift);
      s.inspect++;
    });
  });
}

store.sort((a, b) => (a.inspect > b.inspect ? -1 : 1));

let sum = store[0].inspect * store[1].inspect;

console.log(sum);
