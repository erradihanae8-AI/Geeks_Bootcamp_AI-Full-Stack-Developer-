#Challenge 1
#Ask the user for a number and a length.
#Create a program that prints a list of multiples of the number until the list length reaches length.
number=int(input("number:"))
lenght=int(input("lenght:"))
multiples_list=[]
for i in range(1 , lenght +1 ):
    multiples_list.append(number *i)

print(multiples_list)