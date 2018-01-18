const main = (input) => {
  const data = input.split("\n");
  const first_line = data[0];
  const second_line = data[1];

  const answer = `(${first_line}${second_line}${first_line})/`;

  console.log(answer)
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));