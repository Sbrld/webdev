n, m = map(int, input().split())

arr = list(map(int, input().split()))

A = set(map(int, input().split()))
B = set(map(int, input().split()))

happines = 0
for num in arr:
    if num in A:
        happines += 1
    if num in B:
        happines -= 1

print(happines)