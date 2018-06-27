function yourBirthday(integerOne, integerTwo){
    if ((integerOne == 5 || integerTwo == 5) && (integerOne == 7 || integerTwo == 7)){
        console.log("How did you know?");
    }
    else {
        console.log("Just another day...");
    }
}

yourBirthday(5,5);