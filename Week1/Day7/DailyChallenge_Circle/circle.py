
import math
import turtle

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            self.radius = 1
            self.diameter = 2

    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Radius: {self.radius}, Diameter: {self.diameter}"

    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)

    def __gt__(self, other):
        return self.radius > other.radius

    def __eq__(self, other):
        return self.radius == other.radius

    def __lt__(self, other):
        return self.radius < other.radius


# Create circles
c1 = Circle(radius=20)
c2 = Circle(radius=30)
c3 = Circle(radius=10)

# Display information
print(c1)
print("Area:", c1.area())

# Add circles
c4 = c1 + c2
print("Added circles:", c4)

# Compare circles
print(c1 > c2)
print(c1 == c2)

# Sort circles
circles = [c1, c2, c3]
circles.sort()

for c in circles:
    print(c)

# Draw sorted circles 
pen = turtle.Turtle()
pen.speed(3)
x = -200

for c in circles:
    pen.penup()
    pen.goto(x, -c.radius)
    pen.pendown()
    pen.circle(c.radius)
    x += c.diameter + 20

turtle.done()
