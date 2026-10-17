
import random
from Dogs import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = [self.name]
        for dog in args:
            dog_names.append(dog.name)

        print(", ".join(dog_names) + " all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll","stands on his back legs","shakes your hand","plays dead"]
            trick = random.choice(tricks)
            print(f"{self.name} {trick}")


# Create dogs
dog1 = PetDog("Rex", 3, 10)
dog2 = PetDog("Max", 2, 8)
dog3 = PetDog("Buddy", 4, 12)

# Train the dog
dog1.train()

# Play together
dog1.play(dog2, dog3)

# Perform a trick
dog1.do_a_trick()
