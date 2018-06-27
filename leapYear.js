function leapYear(year){
    var test = year/4;
    if (Number.isInteger(test)){
        console.log("leap year!");
    }
    else {
        console.log("not a leap year!");
    }
}
leapYear(2001);