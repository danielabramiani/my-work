# Sequential (Step-by-step execution)
print("Start")
result = 2 + 2
print(result)

# Conditional (if-else statement)
x = -5
if x > 0:
    print("Positive number")
else:
    print("Non-positive number")

# Iteration/Looping (while loop)
y = 0
while y < 5:
    print(y)
    y += 1

# Branching (using continue statement inside a loop)
for i in range(1, 6):
    if i == 3:
        continue  # Skip printing when i is 3
    print(i)


word = "coca cola"
if word == "coca cola":
    print("ყოჩაღ შვილო კაია რომ ამოიტანე კოკა კოლა")
else:
    print("მე კოკა კოლა  გთხოვე წადი ამოიტანე")