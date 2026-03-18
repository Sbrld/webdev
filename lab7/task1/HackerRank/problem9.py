n = int(input())

stamps = set()

for _ in range(n):
    country = input()
    stamps.add(country)

print(len(stamps))