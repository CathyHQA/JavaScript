function isPrime(n){
    if(n<2){
        //console.log('This number is not a prime number :' + n)
        return 'This number is not a prime number : ' + n
    }

    for(let i=2 ; i<n ; i++){

        if(n % i === 0) {
            return 'This is a not prime number :' + n
        }
        else{
            return 'This is a prime number : ' + n ;
        }

    }
       
    
}

console.log(isPrime(17));