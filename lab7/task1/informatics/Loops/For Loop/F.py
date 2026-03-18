num = input()
reversednum = ""

for i in num[::-1]:
    reversednum += i

print(int(reversednum))