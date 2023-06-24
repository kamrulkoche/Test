
numbers = [1,2,3,4,5]
def sum_of_primes(numbers):
    def is_prime(num):
        if num < 2:
            return False
        for i in range(2, int(num * 0.5) +1):
            if num % i == 0:
                return False
        return True

    prime_sum = 0
    for num in numbers:
        if is_prime(num):
            prime_sum = num + prime_sum

    return prime_sum

result = sum_of_primes(numbers)
print(result)  
