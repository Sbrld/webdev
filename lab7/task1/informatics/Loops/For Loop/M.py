n = int(input())

counter = 0

for _ in range(n):
    num = int(input())
    if num == 0:
        counter += 1

print(counter)