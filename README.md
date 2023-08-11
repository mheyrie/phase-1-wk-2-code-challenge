# phase-1-wk-2-code-challenge
Challenge 1: Student Grade Generator (Toy Problem)
# Instruction 
Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

# Solution 
I used if else conditional statement to solve this question.
  # steps
 1. I defined my var using let(and that because i intend to resign it based of the score of each student to determine their individual grade).
 # e.g
 if (studentScore >=79 && studentScore <= 100){
    console.log("Your grade is A");
 }

 2. According to the challenge the studentScore(this is the variable i used) already has define score range. so i i did was to create about 5 different if else statment based on those predefined grade.
 3. console.log my condtions whilst passing new studentScore to ensure i am getting the required output.
 4. The user is required to input a valid student score to be able to get the grade.

 
Challenge 2: Speed Detector (Toy Problem)
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
# Solution

 
