 function reverseStr(str){

    let reversed = '';

     for(let i=0;i<str.length;i++){
         reversed = str[i] + reversed;
     }
     return reversed;

 }

console.log(reverseStr("Burger"));

/*****Use JavaSript builtin function to reverse */

// function reverseStr(str){

//     let reversed = '';

//     for(let Bag of str){
//         reversed = Bag + reversed;
//     }
//     return reversed;

// }

// console.log(reverseStr("Burger"));

/***** String Reversed************/

function reverse(str){

       
     return str.split('').reverse().join('');

 }

console.log(reverse("LeetCode"));