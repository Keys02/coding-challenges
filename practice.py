grade = 0

match grade:
    case 1:
        print("You aced the test")
    case 2:
        print("You did excellent")
    case 3:
        print("You did good")
    case 4:
        print("You passed")
    case 5:
        print("You failed")
    case _:
        print("You did not take part in the test")


ages = [10, 17, 18, 20]

for age in ages:
    print(age);