def last2(str):
  target = str[-2:]
  counter = 0
  for i in range(0, len(str) - 2):
    if target == str[i: i+2]:
      counter += 1
  return counter