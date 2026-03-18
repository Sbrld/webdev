import math

num = int(input())
counter = 1

while counter <= num:
    root = math.sqrt(counter)
    if root == int(root):
        print(counter)
    counter += 1