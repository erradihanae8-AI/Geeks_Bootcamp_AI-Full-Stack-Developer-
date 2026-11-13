from datetime import datetime

birthdate = input("Enter your birthdate (DD/MM/YYYY): ")
birthdate = datetime.strptime(birthdate, "%d/%m/%Y")

today = datetime.today()
age = today.year - birthdate.year

if (today.month, today.day) < (birthdate.month, birthdate.day):
    age -= 1

candles = age % 10

cake = f"""
       ___{'i' * candles}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
"""

print(cake)

year = birthdate.year

if year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):
    print(cake)