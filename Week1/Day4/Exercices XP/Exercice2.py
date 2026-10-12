 #Exercise 2 : Cinemax #2

#A movie theater charges different ticket prices depending on a person’s age.

#if a person is under the age of 3, the ticket is free.

#if they are between 3 and 12, the ticket is $10.

#if they are over the age of 12, the ticket is $15.

#How much does each family member have to pay ?
#Print out the family’s total cost for the movies.
#Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).  

family = {}

n = int(input("How many family members? "))

for i in range(n):
    name = input("Enter the name: ")
    age = int(input("Enter the age: "))
    family[name] = age

total = 0

for name, age in family.items():
    if age < 3:
        price = 0
    elif age <= 12:
        price = 10
    else:
        price = 15

    print(name, "has to pay ", price,"$")
    total = total + price
print(family)
print("total cost for the movies", total,"$")
