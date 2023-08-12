// Input should be between 0 and 100
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
//prompt 

 let studentScore = prompt("Enter student grade");
   //Conditon for grade A students
 if (studentScore >=79 && studentScore <= 100){
    console.log("Your grade is A");
    //Conditon for grade B students
 }else if (studentScore >=60 && studentScore <= 79){
    console.log("Your grade is B");
    //Conditon for grade C students
 }else if (studentScore >=49 && studentScore <= 59){
    console.log("Your grade is C")
    //Conditon for grade D students
 }else if (studentScore >=40 && studentScore <= 49){
    console.log("Your grade is D")
    //Conditon for grade E students
 }else if (studentScore >=1 && studentScore <= 40){
    console.log("Your grade is E")
    //Conditon for gradeSs that are not between 0-100
}else if (studentScore <= 0 && studentScore > 100){
    console.log("You are not gradeable")
    //default 
} else{
   console.log("Enter a valid student's score")
}















//  switch (studentScore) {
//     case 0:
        
//         console.log("You are an A student");
//         break;
//         default:
//         console.log ("You need to improve");
//   }


//map method
// const inputArr = [1,2,3,4,5];

// const outputArr = inputArr.map((num) => num * 2);
// console.log(outputArr);
// console.log(inputArr);
//  const arr = ["cow", "goat", "sheep", "fly"];
//  const arrLen = arr.length;
//  console.log(arrLen);
// const arrOutp = arr.map((num) => num.length);
// console.log(arrOutp);
 
 