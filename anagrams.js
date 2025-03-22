/** Check one provided string is anagram of other string
 * String1 = listen
 * String 2 = silent 
 */
function cleanStr(str){
    return str.toLowerCase().replace(/[\W]/g,'').split('').sort().join('');
        
} 

function anagram(stringA,stringB){

    return cleanStr(stringA) === cleanStr(stringB);
}

console.log(anagram('RAIL! SAFETYS!', 'fairy tales'))

