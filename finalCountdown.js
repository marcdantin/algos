function finalCountdown(param1, param2, param3, param4){
    var i = param2;
    while (i<=param3){
        if(i != param4){
            console.log(i);
        }
        i += param1;
    }
    
}
finalCountdown(3,5,17,9);