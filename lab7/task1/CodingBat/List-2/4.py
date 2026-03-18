def sum67(nums):
  summ = 0
  i = 0
  isSection = False
  
  for i in range(len(nums)):
    if nums[i] == 6:
      isSection = True
    if isSection and nums[i] == 7:
      isSection = False
      continue
    if not isSection:
      summ += nums[i]
    
  return summ