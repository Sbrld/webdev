def sum2(nums):
  sum = 0
  
  if len(nums) == 0:
    return 0
  elif len(nums) == 1:
    sum += nums[0]
  else:
    for i in range(0, 2):
      sum += nums[i]
  return sum