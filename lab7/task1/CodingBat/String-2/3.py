def cat_dog(str):
  counterForCat = 0
  counterForDog = 0
  
  for i in range(len(str) - 2):
    if str[i : i + 3] == "cat":
      counterForCat += 1
    elif str[i : i + 3] == "dog":
      counterForDog += 1
      
  return counterForCat == counterForDog