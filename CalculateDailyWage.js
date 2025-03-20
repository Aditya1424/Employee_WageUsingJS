// UC2

const partTime=1;
const fullTime=2;
const partTime_Hours=4;
const fullTime_Hours=8;
const wage_per_hour= 20;

let empHrs= 0;
let empCheck= Math.floor(Math.random()*10)%3;

switch(empCheck){
    case partTime:
        empHrs= partTime_Hours;
        break;
    
    case fullTime:
        empHrs= fullTime_Hours;
        break;
    
    default:
        empHrs=0;
}

let empWage= empHrs*wage_per_hour;
console.log(empWage);
