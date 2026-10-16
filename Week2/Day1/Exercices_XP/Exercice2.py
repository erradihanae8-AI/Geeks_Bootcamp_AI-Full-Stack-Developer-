
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        score1 = self.run_speed() * self.weight
        score2 = other_dog.run_speed() * other_dog.weight

        if score1 > score2:
            return f"{self.name} wins the fight"
        elif score2 > score1:
            return f"{other_dog.name} wins the fight"
        else:
            return "It's a tie"


# Create 3 dogs
dog1 = Dog("Rex", 5, 5)
dog2 = Dog("Max", 6, 7)
dog3 = Dog("Rocky", 8, 8)

# Test the methods
print(dog1.bark())
print(dog2.bark())
print(dog3.bark())

print("Dog 1 speed:", dog1.run_speed())
print("Dog 2 speed:", dog2.run_speed())
print("Dog 3 speed:", dog3.run_speed())

print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog1.fight(dog3))
