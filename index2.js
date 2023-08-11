/*Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, 
it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the 
driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. 
If the driver gets more than 12 points, the function should print: “License suspended”.*/

// let message = prompt("What is your car Speed?");
// const speedLimit = 70;
// carSpeed="";
function car(carSpeed){
    let speedPoints;
    if(carSpeed <= 70 && carSpeed > 0)
    return "OK"
    else speedPoints = (carSpeed-70)/5
    if (speedPoints >= 12)
    return "License Suspended"
    else console.log `Your Speed Point is: ${speedPoints}`;
}
    // else if(carSpeed > speedLimit){
    //     console.log()
    // }

 
