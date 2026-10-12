# 1. Create the dictionary brand
brand={'name': 'Zara', 
'creation_date': 1975 ,
'creator_name': 'Amancio Ortega Gaona ',
'type_of_clothes': ['men', 'women', 'children', 'home' ],
'international_competitors':['Gap','H&M', 'Benetton'], 
'number_stores': 7000 ,
'major_color': 
    {'France': 'blue', 
    'Spain': 'red', 
    'US': ['pink', 'green']}}
print(brand)
# 2. Change the number of stores to 2
brand["number_stores"] = 2

# 3. Print a sentence about Zara's clients
print("Zara's clients are:", brand["type_of_clothes"])

# 4. Add country_creation
brand["country_creation"] = "Spain"

# 5. Add Desigual if international_competitors exists
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
    
# 6. Delete the creation date
del brand["creation_date"]

# 7. Print the last international competitor
print(brand["international_competitors"][-1])

# 8. Print the major colors in the US
print(brand["major_color"]["US"])

# 9. Print the number of key-value pairs
print(len(brand))

# 10. Print the keys
print(brand.keys())

# 11. Create more_on_zara
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# 12. Add more_on_zara to brand
brand.update(more_on_zara)

# 13. Print the number of stores
print(brand["number_stores"])
