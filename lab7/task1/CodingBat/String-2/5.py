def end_other(a, b):
  newA = a.lower()
  newB = b.lower()
  
  n = 0
  m = 0
  if len(newA) > len(newB):
    n = len(newA)
    m = len(newB)
  else:
    n = len(newB)
    m = len(newA)
  
  for i in range(n):
    if newA[-m:] == newB:
      return True
    elif newB[-m:] == newA:
      return True
    else:
      return False