class Family:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print("Congratulations to the family!")

    def is_18(self, name):
        for member in self.members:
            if member["name"] == name:
                return member["age"] > 18
        return False

    def family_presentation(self):
        print("Family name:", self.last_name)

        for member in self.members:
            print(member)


class TheIncredibles(Family):

    def use_power(self, name):
        for member in self.members:
            if member["name"] == name:
                if self.is_18(name):
                    print(member["power"])
                else:
                    print(name, "is not old enough to use their power.")
                return

        print("Member not found.")

    def incredible_presentation(self):
        print("Here is our powerful family")
        super().family_presentation()


# Create the family
members = [{"name": "Michael","age": 35,"gender": "Male","is_child": False,"power": "fly","incredible_name": "MikeFly"},
          { "name": "Sarah", "age": 32,"gender": "Female","is_child": False,"power": "read minds","incredible_name": "SuperWoman"}]

my_family = TheIncredibles(members, "Incredibles")

# Display the family
my_family.incredible_presentation()

# Test the powers
my_family.use_power("Michael")
my_family.use_power("Sarah")

# Add Baby Jack
my_family.born( name="Baby Jack", age=0, gender="Male",is_child=True,power="Unknown Power",incredible_name="BabyJack")
my_family.incredible_presentation()
my_family.use_power("Baby Jack")