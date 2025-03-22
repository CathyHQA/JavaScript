function Capitaliz(str){
    let words = str.split(' ')
    const result =[];

    for(let word of words){

        result.push(word[0].toUpperCase()+ word.slice(1));
    }

    return result.join(' ');
} 

console.log(Capitaliz('hi lets check capitalization'));