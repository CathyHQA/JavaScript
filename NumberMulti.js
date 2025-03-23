/*** when serious of numbers give, 
 * then multiples of 3 print 'Fizz',  multiples of 3 print 'Buzz',multiples of 3 and 5 print 'FizzBuzz', */

function MutliNum(n){
 for(let i = 1 ; i<=n ; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz')
    }
    else if( i % 3 === 0 ){

        console.log('Fizz')
    }
    else if ( i % 5 === 0 ){

        console.log('Buzz')
    }
     else{
         console.log(i)
    }

 } 

}

MutliNum(16);