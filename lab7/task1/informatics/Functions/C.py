def Xor(x, y):
    if(x != y):
        return 1
    else:
        return 0
    
x, y = map(int, input().split())

print(Xor(x, y))