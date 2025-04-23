/*
Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800, and 1900 are not leap years, but the year 2000 is.

If 'A' is a multiple of 'B' then A/B = K where K is a natural number OR 'B' is divisible by 'A' without a remainder

A leap year is a year that contains an additional day, February 29th, making it 366 days long instead of the usual 365 days. Leap years are necessary to keep our calendar in alignment with the Earth’s revolutions around the Sun.

A year is a leap year if “any one of ” the following conditions are satisfied: 

The year is multiple of 400.
The year is a multiple of 4 and not a multiple of 100.
*/

function isLeap(year){
    if(year%400==0 || year%4==0 && year%100!=0){
        return "The year is leap"
    }else {
        return "The year is not leap"
    }
}


function iSLP(year){
    if(year%4==0 && year%100!==0 || year%400==0){
        return "The year is leap"
    }else{
        return "The year is not leap"
    }
}
let leapCheck = isLeap(1700);
console.log(leapCheck);

let leapCheckTwo = iSLP(1700)
console.log(leapCheckTwo)