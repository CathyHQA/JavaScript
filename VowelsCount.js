function vowels(str){

    let VowelArray = ['a','e', 'i','o','u']
    let count = 0;

    for(let char of str.toLowerCase()){
        if (VowelArray.includes(char))
            count++

    }
    return count;
}

console.log(vowels('leet code VOWEL'))