// let total = 0;

// function addition(x) {
//     total += x;
//     return total;
// }

// function soustraction(x) {
//     total -= x;
//     return total;
// }

// function division(x) {
//     if (total === 0) {
//         return (total = x);
//     } else {
//         total /= x;
//     return total;
//     }
// }

// function multiplication(x) {
//     if (total === 0) {
//         return (total = x);
//     } else {
//         total *= x;
//     return total;
//     }
// }

// function reset() {
//     total = 0;
// }
let input="";

function showValue(btn){
    input = input + btn.value;
    console.log(input);
    document.getElementById('output').innerHTML = input;    
}

function quickMath(){
    document.getElementById('output').innerHTML = eval(input);
}

function Reset(btn){
    document.getElementById('output').innerHTML = "0"
    input = "";
} 

function remove(btn){
    input = input.replace(input.slice(-1), "");
    document.getElementById('output').innerHTML = input;
}


