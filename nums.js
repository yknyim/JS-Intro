
// function printNumbers() {
//     for (i=1; i <= 10; i++) {
//         console.log(i);
//     }
// }

function printNumbers(firstNum, secondNum) {
    let start = Number(firstNum);
    let end = Number(secondNum);
    for (i = start; i <= end; i++) {
        console.log(i);
    }
}

printNumbers(1,10);