# # codewars

# def feast(beast, dish):
#     if beast[0] == dish[0]  and dish[-1] == beast[-1]:
#         return True
#     else:
#         return False
    
# def get_char(c):
#     return chr(c)

# # დაწერეთ პროგრამა, რომელიც დაბეჭდავს "გამარჯობა, მსოფლიო!" ტექსტს.

# print("hello worlds")

# # მომხმარებელს სთხოვეთ შეიყვანოს მისი სახელი და დაბეჭდეთ მისალმება მისი სახელით.

# name = input("Enter your name")
# print(f"hello {name}")

# # დაწერეთ პროგრამა, რომელიც ითვლის ორი რიცხვის ჯამს.

# a = 2
# b=3
# print(a + b)

# # შეამოწმეთ, არის თუ არა რიცხვი ლუწი თუ კენტი.
# def even_or_odd(n):
#     return "Even" if n  % 2 ==0 else "odd"
# print(even_or_odd(4))
# print(even_or_odd(5))

# # შექმენით ცვლადი, რომელშიც ინახება მომხმარებლის ასაკი და დაბეჭდეთ მისი ორმაგი ასაკი.
# age = int(input("Enter your age"))
# print(age * 2)
# # შეიყვანეთ რიცხვი და იპოვეთ მისი კვადრატი.
# num = int(input("Enter num"))
# print(num ** 2)
# # დაწერეთ პროგრამა, რომელიც გადააქცევს გრადუსებს ცელსიუსიდან ფარენჰაიტში.

# celsius = 30
# print((9/5 * celsius) + 32)

# # შექმენით სია (list) თქვენი 5 საყვარელი ფილმით და დაბეჭდეთ სია.
# films = ["bronx tail", "godfather", "scarface", "fight club", "goodfellas"]

# # დაბეჭდეთ 1-დან 10-მდე ყველა რიცხვი ციკლის გამოყენებით.
# for i in range(1, 11):
#     print(i)
# გამოიტანეთ ციფრების ჯამი მოცემულ სიაში: [2, 4, 6, 8, 10].
lst = [2, 4, 6, 8, 10]
print(sum(lst))

num = 29

flag = False

if num == 0 or num == 1:
    print(num, "is not a prime number")
elif num > 1:
    for i in range(2, num):
        if num % i == 0:
            flag = True
    if flag:
        print(num, "is not a prime number")
    else:
        print(num, "is a prime number")

# შეადგინეთ ფუნქცია, რომელიც აბრუნებს მოცემული სიტყვის სიმბოლოების რაოდენობას.

# შექმენით პროგრამა, რომელიც შეამოწმებს, არის თუ არა სიტყვა პალინდრომი.
# დაწერეთ პროგრამა, რომელიც გადაიყვანს რიცხვს ორობით სისტემაში.
# შექმენით ლექსიკონი (dictionary), სადაც ინახება სახელები და ასაკები, და დაბეჭდეთ ლექსიკონის ელემენტები.
# დაწერეთ პროგრამა, რომელიც გამოითვლის რიცხვების საშუალო არითმეტიკულს სიიდან.
# შექმენით ფუნქცია, რომელიც განსაზღვრავს, არის თუ არა წელიწადი ნაკიანი.
# დაწერეთ პროგრამა, რომელიც მოცემულ რიცხვს გადააქცევს ბანქოს ქართულ სიტყვას (მაგ., 2 → "ორი").
# შექმენით ლექსიკონი, სადაც ინახება წიგნების ავტორები და მათი წიგნები.
# დაწერეთ პროგრამა, რომელიც ააგებს პითონის სიაში ელემენტების უნიკალურ მნიშვნელობებს.


list = [1,2,-1,5]
print(min(list))
print(max(list))
# 8 kyu
# even or odd
def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"
# 8 kyu
# Reversed Strings
def solution(string):
    return string[::-1]
# 8 kyu
# Find the smallest integer in the array
def find_smallest_int(arr):
    smallest = arr[0]
    for i in arr:
        if i < smallest:
            smallest = i
    return smallest
# 8 kyu
# Multiply
def multiply(a, b):
    return a * b

