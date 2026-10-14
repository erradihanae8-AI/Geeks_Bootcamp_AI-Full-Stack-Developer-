#1.Use a for loop to print all numbers from 1 to 20, inclusive.
#2.Using a for loop, that loops from 1 to 20 (inclusive), print out every element which has an even index.
for numbers in range(1,21):
    print(numbers)
for index, number in enumerate(range(1, 21)):
    if index % 2 == 0:
        print(number)
    