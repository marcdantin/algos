var counting = 0
function printAndCount(){
    
    for (i=512; i<4096; i++){
        if(Number.isInteger(i/5)){
            counting += 1
            console.log(i);
        }
    }
}
printAndCount();
console.log(counting);