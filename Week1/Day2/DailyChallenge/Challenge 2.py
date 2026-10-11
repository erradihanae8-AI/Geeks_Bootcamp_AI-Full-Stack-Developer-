#Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
text = input("user's word :")

result = ""

for i in range(len(text)):
    if i == 0 or text[i] != text[i - 1]:
        result += text[i]

print(result)