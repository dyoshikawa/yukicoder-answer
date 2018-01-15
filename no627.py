input_count = int(input())

current_place = 0
before_place = 0
answer = True

for i in range(input_count):
    input_number = int(input())

    if answer == False:
        continue

    if i == 0 and input_number != 1 and input_number != -1:
        answer = False

    if i == 0:
        before_place = input_number
        continue

    current_place = input_number

    if current_place == before_place + 1 or current_place == before_place - 1:
        answer = True
    else:
        answer = False
        continue

    before_place = current_place

if answer:
    print("T")
else:
    print("F")
