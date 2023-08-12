//Write a program whose major task is to calculate an individual’s Net Salary by getting 
//the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions,
//NSSFDeductions, gross salary, and net salary. 

// as @July 2023

//function containing all the grosspay range
function grossPay(amount){
    if (amount<=24000) return amount
    else if (grossPay >=24001 && grossPay <=32333) return amount
    else if (grossPay >=32334 && grossPay <=500000) return amount
    else if (grossPay >=500001 && grossPay <=800000) return amount
    else
    return amount
}

//function to calculate tax on grossPay
function taxed(grossPay, taxRate){
    if (grossPay<=24000) {
    taxRate = 0.1
    return grossPay*taxRate
    }else if (grossPay >= 24001 && grossPay <=32333){
    taxRate = 0.25
    return grossPay*taxRate}
    else if (grossPay >=32334 && grossPay <=500000){
        taxRate = 0.3
        return grossPay*taxRate
    } else if (grossPay >=500001 && grossPay <=800000){
        taxRate = 0.325
        return grossPay*taxRate
        } else (grossPay>=800001)
        taxRate = 0.35
        return grossPay*taxRate
    }



//function to calculate nhif on grosspay
function nhif(grossPay){
    if(grossPay<5999) return 150
    else if(grossPay>=6000 && grossPay<=7999) return 300
    else if(grossPay>=8000 && grossPay<=11999) return 400
    else if(grossPay>=12000 && grossPay<=14999) return 500
    else if(grossPay>=15000 && grossPay<=19999) return 600
    else if(grossPay>=20000 && grossPay<=24999) return 750
    else if(grossPay>=25000 && grossPay<=29999) return 850
    else if(grossPay>=30000 && grossPay<=34999) return 900
    else if(grossPay>=35000 && grossPay<=39999) return 950
    else if(grossPay>=40000 && grossPay<=44999) return 1000 
    else if(grossPay>=45000 && grossPay<=49999) return 1100
    else if(grossPay>=50000 && grossPay<=59999) return 1200
    else if(grossPay>=60000 && grossPay<=69999) return 1300
    else if(grossPay>=70000 && grossPay<=79999) return 1400
    else if(grossPay>=80000 && grossPay<=89999) return 1500
    else if(grossPay>=90000 && grossPay<=99999) return 1600
    else (grossPay>=100000) 
        return 1700
}

//function to calculate nssf on grosspay
function nssf(grossPay){
    if (nssfRate = 0.06)  return grossPay * nssfRate
}

//calculation of total deductions from the gross pay
function totalDeduction() {
    return (taxed(500000) + nssf(500000) + nhif(500000))
}

//function for Net pay
function netPay(){
    return (grossPay(500000)-totalDeduction())
}

//Outputs
console.log("Gross pay:", grossPay(500000))
console.log(`Your Total deduction is: ${totalDeduction()}Ksh`)
console.log("Yoor Net Pay is:",netPay())















































