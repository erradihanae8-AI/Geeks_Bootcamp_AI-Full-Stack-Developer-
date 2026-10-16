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



members = [
    {"name": "Michael", "age": 35, "gender": "Male", "is_child": False},
    {"name": "Sarah", "age": 32, "gender": "Female", "is_child": False}
]

my_family = Family(members, "Smith")

# Add a new baby
my_family.born(name="Lina",age=0,gender="Female",is_child=True)

# Check if family members are over 18
print(my_family.is_18("Michael"))  
print(my_family.is_18("Sarah"))    
print(my_family.is_18("Lina"))     

# Display family information
my_family.family_presentation()