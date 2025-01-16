def bmi(weight, height):
    bmi_formula = weight / (height ** 2)
    if bmi_formula <= 18.5:
        return  "Underweight"
    elif bmi_formula <= 25.0:
        return "Normal"
    elif bmi_formula <= 30.0:
        return "Overweight"
    else:
        return "Obese"
    
print(bmi(75, 180))
