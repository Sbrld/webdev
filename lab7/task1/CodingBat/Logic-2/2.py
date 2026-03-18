def no_teen_sum(a, b, c):
  summ = 0
  def fix_teen(a):
    if a in [13, 14, 17, 18, 19]:
      return 0
    return a
  summ = fix_teen(a) + fix_teen(b) + fix_teen(c)
  return summ