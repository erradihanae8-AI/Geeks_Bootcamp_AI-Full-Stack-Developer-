#Ask the user to input a number from 1 to 9 (including).
#Get a random number between 1 and 9. Hint: random module.
#If the user guesses the correct number print a message that says “Winner”.
#If the user guesses the wrong number print a message that says “Better luck next time.”
#Bonus: use a loop that allows the user to keep guessing until they want to quit.
#Bonus 2: on exiting the loop, tally up and display total games won and lost.   

import random

won = 0
lost = 0
play = "yes"

while play == "yes":
    random_number = random.randint(1, 9)
    number = int(input("Enter a number between 1 and 9: "))

    if number == random_number:
        print("Winner")
        won += 1
    else:
        print("Better luck next time.")
        lost += 1

    play = input("Do you want to play again? (yes/no): ")

print("Total games won:", won)
print("Total games lost:", lost)

