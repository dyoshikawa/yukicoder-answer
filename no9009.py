input_first = int(input())
inputs_after_first = []
for i in range(0, input_first):
  inputs_after_first.append(int(input()))
total = 0
for number in inputs_after_first:
  total += number
print(total)