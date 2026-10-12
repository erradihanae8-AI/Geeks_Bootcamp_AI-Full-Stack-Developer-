

import random

def get_random_temp(season):
    if season == "winter":
        return round(random.uniform(-10, 16), 1)
    elif season == "spring":
        return round(random.uniform(0, 23), 1)
    elif season == "summer":
        return round(random.uniform(16, 40), 1)
    elif season == "autumn" :
        return round(random.uniform(0, 25), 1)

def main():
    month = int(input("Enter a month (1-12): "))

    if month in [12, 1, 2]:
        season = "winter"
    elif month in [3, 4, 5]:
        season = "spring"
    elif month in [6, 7, 8]:
        season = "summer"
    elif month in [9, 10, 11]:
        season = "autumn"
    else:
        print("Invalid month!")
        return

    temperature = get_random_temp(season)

    print("The season is", season)
    print("The temperature right now is", temperature, "degrees Celsius.")

    if temperature < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif temperature <= 16:
        print("Quite chilly! Don't forget your coat.")
    elif temperature <= 23:
        print("It's a nice day! Enjoy the weather.")
    elif temperature <= 32:
        print("It's warm outside! Stay hydrated.")
    else:
        print("It's really hot! Drink plenty of water.")

main()
