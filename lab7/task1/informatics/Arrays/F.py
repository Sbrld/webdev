n = int(input())
arr = list(map(int, input().split()))

cnt = 0
i = 1

while i < n - 1:
    if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]:
        cnt += 1
    else:
        cnt += 0
    i += 1
    
print(cnt)