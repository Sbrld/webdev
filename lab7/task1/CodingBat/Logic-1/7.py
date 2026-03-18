def love6(a, b):
  summ = a + b
  diff = a - b
  
  if a == 6 or b == 6:
    return True
  elif  summ == 6:
    return True
  elif abs(diff) == 6:
    return True
  else:
    return False