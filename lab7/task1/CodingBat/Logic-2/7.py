def make_chocolate(small, big, goal):
  use_big = min(big, goal // 5)
  remainder = goal - use_big * 5
  
  if remainder <= small:
    return remainder
  else:
    return -1