def xyz_there(str):
  for i in range(len(str) - 2):
    if str[i : i + 3] == "xyz" and str[i - 1: i] != ".":
      return True
  return False