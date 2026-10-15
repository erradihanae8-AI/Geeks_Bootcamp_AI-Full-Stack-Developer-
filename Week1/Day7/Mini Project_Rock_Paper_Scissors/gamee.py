
import random

class Game:

    def get_user_item(self):
        while True:
            item = input("Choose (r)ock (p)aper or (s)cissors: ").lower()

            if item in ["r", "p", "s"]:
                return item
            else:
                print("Invalid choice Try again!")

    def get_computer_item(self):
        return random.choice(["r", "p", "s"])

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"

        elif user_item == "r" and computer_item == "s":
            return "win"
        elif user_item == "p" and computer_item == "r":
            return "win"
        elif user_item == "s" and computer_item == "p":
            return "win"
        else:
            return "loss"

    def play(self):
        user = self.get_user_item()
        computer = self.get_computer_item()

        print("You selected:", user)
        print("Computer selected:", computer)

        result = self.get_game_result(user, computer)
        print("Result:", result)

        return result
