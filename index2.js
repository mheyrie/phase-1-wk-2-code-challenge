/*Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, 
it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the 
driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. 
If the driver gets more than 12 points, the function should print: “License suspended”.*/


function car(carSpeed){
//     // var defined doesn't have a value
    let speedPoints;
//     //for speed below 70km/h
    if(carSpeed <= 70)
    return "OK, ride on"
//     //for speed above the speedLimit of 70km/h and divide by 5 to get point for driver
    else speedPoints = (carSpeed-70)/5
    if (speedPoints >= 12)
    return "License Suspended"
//     // Print total points
    else return `Your Speed Point is: ${speedPoints}`;
}
    console.log(car(100));

// Soluution 2
// let carSpeed;
// let speed = 1110;
// if (speed <= 70)
// console.log("Ok, ride on")
//  else if(carSpeed = (speed-70)/5) 
//     if (carSpeed >= 12)
//     console.log("Linence Suspended")
//     else console.log(`Your speed point is: ${carSpeed}`)


 

