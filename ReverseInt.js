/** Reverse a Number */
// function reverseInt(num){
// const reversed = num.toString().split('').reverse().join('');
// return parseInt(reversed)*Math.sign(num);

// }

// console.log(reverseInt(-15));

function reverseNum(num){
    if(num>=0 && num<=9){
        return num;
    }
    let reverseN = 0
    while(num !=0 ){
        reverseN= reverseN * 10 + num % 10
        num = Math.floor(num/10)
    }
    return reverseN
}

console.log(reverseNum(123))