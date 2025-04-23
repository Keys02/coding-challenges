num = int(input("Enter the num"));

if(num%3==0 and num%5==0):
    print("FizzBuzz");
elif(num%3==0):
    print("Fizz");
elif(num%5==0):
    print("Buzz");
else:
    print("The number is not divisible 3 or 5");