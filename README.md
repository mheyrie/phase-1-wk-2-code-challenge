# phase-1-wk-2-code-challenge
Challenge 1: Student Grade Generator (Toy Problem)
# Description 
Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

# Project setup 
I used if else conditional statement to solve this question.
  # steps
 1. I defined my var using let(and initiated prompt for the user to input a number base on the score for each student to determine their individual grade).
 # e.g
 if (studentScore >=79 && studentScore <= 100){
    console.log("Your grade is A");
 }

 2. According to the challenge the studentScore(this is the variable i used) already has define score range. so i i did was to create about 5 different if else statment based on those predefined grade.
 3. console.log my condtions whilst passing new studentScore to ensure i am getting the required output.
 4. The user is required to input a valid student score to be able to get the grade.

 
Challenge 2: Speed Detector (Toy Problem)
# Description
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
# Project setup
 1. Created a function named (car) and the went ahead to give it a parameter
 2. In the function using let, i defined my variable and left it blank, so that i can input different values and get output based on the user gives.
 3. I defined individual conditions using the if else statement with the parameter.
 4. Fed my input with different values to ensure my program works as required in the question.

Challenge 3: Net Salary Calculator (Toy Problem)

# Description
 Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
# Project setup
 Functions creating
1. Create a function that take the input of the User gross amnount and return it
2. Create a function to calculate tax on gross pay(meant to be deducted from grosspay)
3. Create a function to calculate nhif on grosspay(meant to be deducted from grosspay)
4. Create function to calculate nssf on grosspay(meant to be deducted from grosspay)
5. Create an annonymous function to calculation of total deductions from the gross pay
6. Create an annonymouse function for Net pay calculation
7. console.log Output