def lone_sum(a, b, c):
  summ = 0
  
  if a == b and b == c and a == c:
    sum = 0
  elif a == b:
    summ += c
  elif a == c:
    summ += b
  elif b == c:
    summ += a
  else:
    summ = a + b + c
    
  return summ