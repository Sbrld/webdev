def string_match(a, b):
  n = 0
  if a > b:
    n = len(a)
  else:
    n = len(b)
    
  counter = 0
  for i in range(n - 1):
    if a[i:i+2] == b[i:i+2]:
      counter += 1
  
  return counter
