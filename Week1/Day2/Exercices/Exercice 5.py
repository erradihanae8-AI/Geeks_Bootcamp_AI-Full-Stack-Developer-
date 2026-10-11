#Exercise 5 : Favorite Numbers

#Create a set called my_fav_numbers with all your favorites numbers.
#Add two new numbers to the set.
#Remove the last number.
#Create a set called friend_fav_numbers with your friend’s favorites numbers.
#Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

my_fav_numbers={3, 7, 10, 21}
my_fav_numbers.add(15)
my_fav_numbers.add(25)
my_fav_numbers.remove(25)
friend_fav_numbers = {8, 7, 19, 20}
our_fav_numbers = my_fav_numbers | friend_fav_numbers
print("My favorite numbers:", my_fav_numbers)
print("My friend's favorite numbers:", friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)

