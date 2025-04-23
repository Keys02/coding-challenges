function isPrime(num){
    if(num==1){
        return false;
    }
    else if(num==2){
        return true; 
    }
    else{
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num%i==0){
                return false
            }
        }
        return true;
    }
}

function sumPrimeStartToEnd(start, end){
    let sum = 0
    for(i=start; i<=end; i++){
        if(isPrime(i)){
            sum+=i;
        }
    }
    return sum
}

let result = sumPrimeStartToEnd(0,100)
console.log(result);