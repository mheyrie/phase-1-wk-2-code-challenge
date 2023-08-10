// Input should be between 0 and 100
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

let studentScore = 10;

 if (studentScore >=79 && studentScore <= 100){
    console.log("Your grade is A");
 }else if (studentScore >=60 && studentScore <= 79){
    console.log("Your grade is B");
 }else if (studentScore >=49 && studentScore <= 59){
    console.log("Your grade is C")
 }else if (studentScore >=40 && studentScore <= 49){
    console.log("Your grade is D")
 }else if (studentScore >=0 && studentScore <= 40){
    console.log("Your grade is E")
}else{
    console.log("You are not gradeable")
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
 
 