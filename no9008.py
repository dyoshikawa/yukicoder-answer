input()
numbers = list(map(int, input().split()))
total = 0
for number in numbers:
    total += number
print(total)