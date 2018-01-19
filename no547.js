const main = (input) => {
  const input_lines = input.split("\n");
  const second_line_words = input_lines[1].split(" ");
  const third_line_words = input_lines[2].split(" ");

  let answer_words = [];
  let answer_number = 0;

  for (const i in second_line_words) {
    if (second_line_words[i] != third_line_words[i]) {
      answer_words = [second_line_words[i], third_line_words[i]];
      answer_number = parseInt(i) + 1;
      break;
    }
  }

  console.log(answer_number);
  for (const answer_word of answer_words) {
    console.log(answer_word);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));