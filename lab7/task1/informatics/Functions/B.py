def power(a, b):
    product = 1
    for _ in range(b):
        product *= a
    return product

base, for_pow = input().split()
base = float(base)
for_pow = int(for_pow)

print(power(base, for_pow))