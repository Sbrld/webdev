class MenuItem:
    def __init__(self, name, price, category, is_available=True):
        self.name = name
        self.price = price
        self.category = category
        self.is_available = is_available

    def get_price(self):
        return self.price

    def get_description(self):
        return f"{self.name}"

    def toggle_availability(self):
        self.is_available = not self.is_available

    def __str__(self):
        return f"{self.name} - {self.price} KZT ({self.category})"


class Food(MenuItem):
    def __init__(self, name, price, is_spicy, cooking_time_mins):
        super().__init__(name, price, "Food")
        self.is_spicy = is_spicy
        self.cooking_time_mins = cooking_time_mins

    def get_description(self):
        spicy = "Spicy" if self.is_spicy else "Not spicy"
        return f"{self.name}: {spicy}, ~{self.cooking_time_mins} mins"


class Drink(MenuItem):
    def __init__(self, name, price, size, is_cold):
        super().__init__(name, price, "Drink")
        self.size = size
        self.is_cold = is_cold

    def get_price(self):
        if self.size == "S":
            return self.price * 0.8
        elif self.size == "M":
            return self.price * 1.0
        elif self.size == "L":
            return self.price * 1.3
        return self.price

    def get_description(self):
        temp = "Cold" if self.is_cold else "Hot"
        return f"{self.name}: {self.size}, {temp} drink"


class Dessert(MenuItem):
    def __init__(self, name, price, calories, contains_nuts):
        super().__init__(name, price, "Dessert")
        self.calories = calories
        self.contains_nuts = contains_nuts

    def get_description(self):
        nuts = "Contains nuts" if self.contains_nuts else "No nuts"
        return f"{self.name}: {self.calories} calories {nuts}"

class Order:
    def __init__(self, order_id):
        self.order_id = order_id
        self.items = []

    def add_item(self, item):
        if item.is_available:
            self.items.append(item)
            return True
        return False

    def remove_item(self, item_name):
        for item in self.items:
            if item.name == item_name:
                self.items.remove(item)
                return True
        return False

    def get_total(self):
        total = 0
        for item in self.items:
            total += item.get_price()
        return total

    def get_item_count(self):
        return len(self.items)

    def __str__(self):
        result = f"Order #{self.order_id}:\n"
        for item in self.items:
            result += f"- {item.name}: {int(item.get_price())} KZT\n"
        result += f"Total: {int(self.get_total())} KZT ({self.get_item_count()} items)"
        return result