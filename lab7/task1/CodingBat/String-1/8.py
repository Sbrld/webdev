def without_end(str):
  if len(str) <= 1:
    return str
  
  mid = str[1: len(str) - 1]
  return mid