class Animal:
    def __init__ (self, name, age, color):
        self.name = name
        self.age = age
        self.color = color
    
    def speak(self):
        return "Some suitable for animal sound."
    
    def info(self):
        return f"{self.name} is {self.age} years old and it has {self.color} color"
    
    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, color={self.color})"
    
class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed
    
    def speak(self):
        return f"{self.name} says: Woof!"
    
    def catch(self):
        return f"{self.name} catches the ball."
    
    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, color={self.color}, breed={self.breed})"
    
class Cat(Animal):
    def __init__(self, name, age, color, indoor):
        super().__init__(name, age, color)
        self.indoor = indoor

    def speak(self):
        return f"{self.name} says: Meow!"
    
    def climb(self):
        return f"{self.name} climbing to the furniture."
    
    def __str__(self):
        return f"Cat(name={self.name}, age={self.age}, color={self.color}, indoor={self.indoor})"