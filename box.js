
function printBox(width, height) {
    let topBox = '';
    for (i = 0; i <= (width - 1); i++) {
        topBox += "*"
    }
    console.log(topBox)
    let middleBox = '';
    for (x = 0; x <= (height - 3); x++) {
        middleBox += "*";
    }
    console.log(middleBox);
    let middleBox2 = middleBox;
    let bottomBox = topBox;
    console.log(bottomBox);
}
printBox(6,4)