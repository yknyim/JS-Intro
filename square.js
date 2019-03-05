
function printSquare(stars) {
    let star = '';
    for (let i=1; i <= stars; i++) {
        star += "*";
    }
    let box = star;
    for (let x = 1; x <= stars; x++) {
        console.log(box);
    }

}

printSquare(5);