from models import Food, Drink, Dessert, Order

menu = [
    Food("Beshbarmak", 3500, True, 45),
    Food("Plov", 2800, False, 40),
    Food("Lagman", 2200, True, 30),

    Drink("Cola", 800, "M", True),
    Drink("Green Tea", 600, "S", False),
    Drink("Latte", 1200, "L", False),

    Dessert("Chak-Chak", 1500, 450, True),
    Dessert("Baursak", 800, 300, False),
    Dessert("Medovik", 1800, 500, True)
]

print("=== Restaurant Menu ===")
for item in menu:
    print(item)

order1 = Order("001")
order2 = Order("002")

print("\n=== Creating Orders ===")

print("Order #001: Adding Beshbarmak -", "Success" if order1.add_item(menu[0]) else "Fail")
print("Order #001: Adding Cola -", "Success" if order1.add_item(menu[3]) else "Fail")
print("Order #001: Adding Chak-Chak -", "Success" if order1.add_item(menu[6]) else "Fail")

print("Order #002: Adding Plov -", "Success" if order2.add_item(menu[1]) else "Fail")
print("Order #002: Adding Green Tea -", "Success" if order2.add_item(menu[4]) else "Fail")

menu[0].toggle_availability()
print("Order #002: Adding unavailable Beshbarmak -",
      "Success" if order2.add_item(menu[0]) else "Fail")

print("\n=== Drink Price Variation ===")
cola_s = Drink("Cola", 800, "S", True)
cola_m = Drink("Cola", 800, "M", True)
cola_l = Drink("Cola", 800, "L", True)

print("Cola (S):", int(cola_s.get_price()), "KZT")
print("Cola (M):", int(cola_m.get_price()), "KZT")
print("Cola (L):", int(cola_l.get_price()), "KZT")

print("\n=== Item Descriptions (Polymorphism) ===")
for item in menu:
    print(item.get_description())

order1.remove_item("Cola")

print("\n=== Order Summaries ===")
print(order1)
print()
print(order2)