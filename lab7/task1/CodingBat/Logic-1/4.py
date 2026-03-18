def caught_speeding(speed, is_birthday):
  if not is_birthday and speed <= 60:
    return 0
  elif is_birthday and speed <= 65:
    return 0
  elif not is_birthday and 60 <= speed <= 80:
    return 1
  elif is_birthday and 65 <= speed <= 85:
    return 1
  elif not is_birthday and speed >= 81:
    return 2
  elif is_birthday and speed >= 86:
    return 2