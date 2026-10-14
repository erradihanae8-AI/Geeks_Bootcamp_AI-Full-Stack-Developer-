#1.Instantiate three Cat objects using the code provided above.
#2.Outside of the class, create a function that finds the oldest cat and returns the cat.
#3.Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("Tom1", 3)
cat2 = Cat("Tom2", 4)
cat3 = Cat("Tom3", 5)

def oldest_cat(cat1, cat2, cat3):
    if cat1.age > cat2.age and cat1.age > cat3.age:
        return cat1
    elif cat2.age > cat1.age and cat2.age > cat3.age:
        return cat2
    else:
        return cat3

old_cat = oldest_cat(cat1, cat2, cat3)

print(f"The oldest cat is {old_cat.name}, and is {old_cat.age} years old.")
