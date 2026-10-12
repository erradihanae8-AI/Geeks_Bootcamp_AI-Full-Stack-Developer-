#Exercise 4 : Some Geography
#1.Write a function called describe_city() that accepts the name of a city and its country as parameters.
#2.The function should print a simple sentence, such as “city is in country”.
#(For example Reykjavik is in Iceland)
#3.Give the country parameter a default value.
#4.Call your function.

def describe_city(city, country="Morocco"):
    print(city, "is in", country)

describe_city("Kenitra")
describe_city("Reykjavik", "Iceland")
describe_city("Rabat")
describe_city("Casa")