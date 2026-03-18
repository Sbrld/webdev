n = int(input())
arr = list(map(int, input().split()))

cnt = 0

for i in range(1, n):
    if arr[i] > 0 and arr[i - 1] > 0:
        cnt += 1
    elif arr[i] < 0 and arr[i - 1] < 0:
        cnt += 1
    else:
        cnt += 0

if cnt > 0:
    print("YES")
else:
    print("NO")