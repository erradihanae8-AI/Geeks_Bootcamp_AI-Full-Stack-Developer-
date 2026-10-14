
#1.Ask the user to input a month (1 to 12).

#2.Display the season of the month received:
#Spring runs from March (3) to May (5)
#Summer runs from June (6) to August (8)
#Autumn runs from September (9) to November (11)
#Winter runs from December (12) to February (2)
Month=int(input("enter a month between 1 an 12  "))
print(Month)
if Month in range(3,6):
    print("Spring")
elif Month in range(6,9):
    print("Summer")
elif Month in range(9,12):
    print("Autumn")
elif Month in [1,2,12]:
    print("Winter")
else:
    print("Invalid month ")