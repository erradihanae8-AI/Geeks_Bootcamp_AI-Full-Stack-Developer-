#Exercise 1 : Convert lists into dictionaries

#Convert the two following lists, into dictionaries.
#Hint: Use the zip method
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

dic = dict(zip(keys, values))

print(dic)