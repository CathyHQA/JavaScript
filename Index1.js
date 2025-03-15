// Function
function Multi(number) {
    return number*number;
    }
    let number =Multi(2);
    console.log(number);
    
    // if else condition
    let digit = [];
    digit = [1,2,4,3,5]
    
    if(digit[0]==digit[2]){
        console.log('Yes')
    }
    else{
        console.log('No')
    }

//while loop
let i=0;

while(i<5){
    console.log('Number is' +' '+ i);
    i++;
}

// do while loop

let k=0;
do{
    console.log('Hi Cathy number is' + k);
    k++;
}
while(k<4)  

 // ForLoop
 
 for(let h=0;h<5;h++){
    console.log('Printen Number is' + h);
 }

 //switch
 let game="cricket";
 switch(game){
    case "Socker":
        console.log("My son love to play socker");
        break;
    case "Ice Hockey":
        console.log("Canadian love to watch hokey");
        break;
    case "cricket":
        console.log("I love to watch cricket");
        break;    
        default:
            console.log("No match game found")    
 }
