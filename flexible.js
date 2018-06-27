function flexible(lowN, highN, mult){
    for(i=highN; i>=lowN; i-=mult){
        console.log(i);
    }
}
flexible(2,100,5);