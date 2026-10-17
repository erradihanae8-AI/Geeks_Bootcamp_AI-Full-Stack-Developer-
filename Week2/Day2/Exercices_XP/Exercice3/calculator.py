# Method 1: Import the whole module
import operators 

add=operators.addOperator(2,5)
print("Addition:",add)
div=operators.divideOperator(10,5)
print("Division:",div)
print("---------------------------------------")

# Method 2: Import specific functions
from operators import addOperator, divideOperator

add=addOperator(5,5)
print("Addition:",add)
div=divideOperator(20,5)
print("Division:",div)
print("----------------------------------------")

# Method 3: Import using an alias
import operators as op
add=op.addOperator(15,5)
print("Addition:",add)
div=op.divideOperator(30,5)
print("Division:",div)
