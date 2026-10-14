
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")


# David's dog
davids_dog = Dog("Rex", 50)

print(davids_dog.name)
print(davids_dog.height)
davids_dog.bark()
davids_dog.jump()

print("-------------------------")

# Sarah's dog
sarahs_dog = Dog("Teacup", 20)

print(sarahs_dog.name)
print(sarahs_dog.height)
sarahs_dog.bark()
sarahs_dog.jump()

print("-------------------------")

# Check which dog is bigger
if davids_dog.height > sarahs_dog.height:
    print(davids_dog.name)
elif sarahs_dog.height > davids_dog.height:
    print(sarahs_dog.name)
else:
    print("Both dogs have the same height")
