const main = (input) => {
  const data = input.split("\n");
  const first_line = parseInt(data[0]);
  const second_line = parseInt(data[1]);
  const third_line = parseInt(data[2]);

  let numbers = [
    first_line,
    second_line,
    third_line
  ];

  numbers.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });

  for (const number of numbers) {
    switch (number) {
      case first_line:
        console.log("A");
        continue;
      case second_line:
        console.log("B");
        continue;
      case third_line:
        console.log("C")
        continue;
    }
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));