/**** Palindrom are strings  that form the same word if it is reversed
 * Example
 * madam=madam, so that should return true
 * leetcode!= edocteel, so that should retun false
 * 
 */

function palindrom(str){
    let reversed = '';

    for(let i=0 ; i<str.length; i++){

        reversed = str[i]+reversed;
    }
    
    if (str === reversed){
        return true;
    }
    return false;
}

console.log(palindrom('babyboy'));