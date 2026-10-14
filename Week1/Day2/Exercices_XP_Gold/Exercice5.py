#Ask the user for 3 numbers and print the greatest number.
number1=int(input("Input the 1st number:"))
number2=int(input("Input the 2nd number:"))
number3=int(input("Input the 3rd number:"))
if number1 > number2 and number1> number3:
    print("The greatest number is:",number1)
elif number2 > number1 and number2> number3:
    print("The greatest number is:",number2)
else:
    print("The greatest number is:",number3)
       

