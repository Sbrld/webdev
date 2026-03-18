import math

number = int(input())

counter = 0

for i in range(1, int(math.sqrt(number) + 1)):
    if number % i == 0:
        counter += 1
        if i != number // i:
            counter += 1

print(counter)