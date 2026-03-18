def round_sum(a, b, c):
  summ = 0
  newA = 0
  newB = 0
  newC = 0
  
  if a % 10 == 0:
    newA = a
  elif 0 < a % 10 <= 4:
    newA = a - a % 10
  elif 5 <= a % 10 <= 9:
    newA = a - a % 10 + 10
    
  if b % 10 == 0:
    newB = b
  elif 0 < b % 10 <= 4:
    newB = b - b % 10
  elif 5 <= b % 10 <= 9:
    newB = b - b % 10 + 10
  
  if c % 10 == 0:
    newC = c
  elif 0 < c % 10 <= 4:
    newC = c - c % 10
  elif 5 <= c % 10 <= 9:
    newC = c - c % 10 + 10
    
  return newA + newB + newC