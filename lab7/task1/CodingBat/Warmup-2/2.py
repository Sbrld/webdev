def front_times(str, n):
  lol = ""
  if len(str) >= 3:
    changed = str[:3]
    for i in range(n):
      lol += changed
  else:
    for i in range(n):
      lol += str
  return lol