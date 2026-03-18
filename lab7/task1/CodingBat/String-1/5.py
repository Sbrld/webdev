def extra_end(str):
  lol = ""
  if len(str) > 2:
    lasts = str[-2:]
    for i in range(3):
      lol += lasts
  else:
    for i in range(3):
      lol += str
  return lol