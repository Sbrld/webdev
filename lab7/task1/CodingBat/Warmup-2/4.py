def string_splosion(str):
  lol = ""
  for i in range(len(str)):
    if i == 0:
      lol += str[0]
    else:
      lol += str[:i + 1]
      
  return lol