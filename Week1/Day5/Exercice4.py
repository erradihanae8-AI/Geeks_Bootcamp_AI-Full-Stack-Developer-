
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
        return self

    def get_animals(self):
        for animal in self.animals:
            print(animal)
        return self

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        return self

    def sort_animals(self):
        self.animals.sort()
        return self.get_groups()

    def get_groups(self):
        groups = {}

        for animal in self.animals:
            letter = animal[0].upper()

            if letter not in groups:
                groups[letter] = []

            groups[letter].append(animal)

        for letter, animals in groups.items():
            print(f"{letter}: {animals}")

        return groups


# Create the zoo
new_york_zoo = Zoo("New York Zoo")

# Add animals
new_york_zoo.add_animal("Lion")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Tiger")
new_york_zoo.add_animal("Gazelle")
new_york_zoo.add_animal("Crocodile")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Ape")

# Display animals
print("Animals in the zoo:")
new_york_zoo.get_animals()

# Sell an animal
new_york_zoo.sell_animal("Gazelle")

print("\nAnimals grouped alphabetically:")
new_york_zoo.sort_animals()
