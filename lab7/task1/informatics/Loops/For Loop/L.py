import math

number = input()
lengthnum = 0

number10 = 0

for i in number[::-1]:
    number10 += int(i) * pow(2, lengthnum)
    lengthnum += 1

print(number10)