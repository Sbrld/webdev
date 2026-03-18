def centered_average(nums):
  maxx = nums[0]
  minn = nums[0]
  
  base = 0
  
  for i in range(len(nums)):
    if nums[i] > maxx:
      maxx = nums[i]
    if nums[i] < minn:
      minn = nums[i]
      
    base += nums[i]
    
  return (base - minn - maxx) / (len(nums) - 2)