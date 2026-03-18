from models import Animal, Dog, Cat

def main():
    simpAnimal = Animal("Murka", 2, "white")
    dog = Dog("Aktos", 3, "white-grey", "Alabai")
    cat = Cat("Musya", 3, "grey", True)

    animals = [simpAnimal, dog, cat]

    for animal in animals:
        print(animal)
        print(animal.info())
        print(animal.speak())
        print()

    print(dog.catch())
    print(cat.climb())

if __name__ == "__main__":
    main()