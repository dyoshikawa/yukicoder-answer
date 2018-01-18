const main = (input) => {
  const number = parseInt(input);
  const answer = number * 10;
  console.log(answer);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));

// 数件テスト通らない。オーバーヘッド？