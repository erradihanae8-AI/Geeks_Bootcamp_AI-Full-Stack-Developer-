
import random

def compare_numbers(number):
    random_number = random.randint(1, 100)

    if number == random_number:
        print("Success! The numbers are the same.")
    else:
        print("Fail! The numbers are different.")
        print("Your number:", number)
        print("Random number:", random_number)

number = int(input("Enter a number between 1 and 100: "))

compare_numbers(number)
