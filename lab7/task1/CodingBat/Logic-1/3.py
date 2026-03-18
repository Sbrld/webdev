def squirrel_play(temp, is_summer):
  if not is_summer and (60 <= temp <= 90):
    return True
  elif is_summer and (60 <= temp <= 100):
    return True
  else:
    return False