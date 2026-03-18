from models import Food, Drink, Dessert, Order

menu = [
    Food("Beshbarmak", 1500, "Kg", True),
    Food("Kuurdak", 1200, "Kg", True),
    Food("Kuurdak", 1200, "Kg", True),
    Drink("Cola", 800, "S", True),
    Drink("Cola", 1000, "L", True),
    Dessert("Ice Cream", 500, "S", True),
    Dessert("Ice Cream", 700, "L", True),
]

print("=== Menu ===")
for item in menu:
    print(item.get_description())

order1 = Order("001")
order2 = Order("002")

print("\n=== Creating Orders ===")
order1.add_item(menu[0])
order1.add_item(menu[3])
order1.add_item(menu[6])