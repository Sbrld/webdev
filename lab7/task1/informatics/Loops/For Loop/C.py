import math

num1 = int(input())
num2 = int(input())

for i in range(num1, num2 + 1):
    root = math.sqrt(i)
    if(root == int(root)):
        print(i, end=" ")