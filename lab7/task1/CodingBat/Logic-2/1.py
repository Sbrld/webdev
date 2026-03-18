def make_bricks(small, big, goal):
  return goal % 5 <= small and big * 5 + small >= goal