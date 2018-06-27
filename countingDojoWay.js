function countingDojoWay(){
    for(i=1; i<=100; i++){
        if((Number.isInteger(i/5)) && (Number.isInteger(i/10))){
            console.log("Coding Dojo");
        } else if(Number.isInteger(i/5)) {
            console.log("Coding");
        } else {
            console.log(i);
        }
    }
}
countingDojoWay();