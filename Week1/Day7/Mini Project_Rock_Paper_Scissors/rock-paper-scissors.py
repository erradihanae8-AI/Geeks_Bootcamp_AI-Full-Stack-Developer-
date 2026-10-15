
from gamee import Game

def get_user_menu_choice():
    print("1. Play a new game")
    print("2. Show scores")
    print("q. Quit")

    choice = input("Your choice: ").lower()

    if choice in ["1", "2", "q"]:
        return choice
    else:
        print("Invalid choice")
        return None


def print_results(results):
    print("Wins:", results["win"])
    print("Losses:", results["loss"])
    print("Draws:", results["draw"])
    print("Thank you for playing!")


def main():
    results = {"win": 0, "loss": 0, "draw": 0}

    while True:
        choice = get_user_menu_choice()

        if choice == "1":
            game = Game()
            result = game.play()
            results[result] += 1

        elif choice == "2":
            print_results(results)

        elif choice == "q":
            print_results(results)
            break



main()