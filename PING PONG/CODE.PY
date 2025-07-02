def factorial(n):
    if n < 0:
        return "no factorial"
    if n == 0 or n == 1:
        return 1

    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

print(factorial(4))

def max_num_in_list(list):
    max_num = list[0]
    for i in list:
        if i > max_num:
            max_num = i
    return max_num
print(max_num_in_list([2, -1, 20, 100]))