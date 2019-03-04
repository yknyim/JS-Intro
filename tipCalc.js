
function tipAmount(bill, service)  {
    let price = '';
    let foodPrice = Number(`${bill}`);
    let satisfaction = `${service}`;
    if (satisfaction === "good") {
        price = foodPrice * .20;
    }
    else if (satisfaction === "fair"){
        price = foodPrice * .15;
    }
    else if (satisfaction === "bad") {
        price = foodPrice * .10;
    }
    return price
}

function totalAmount(bill, service) {
    let totalPrice = tipAmount(`${bill}`, `${service}`) + bill;
    return totalPrice
}

function splitAmount(bill, service, people) {
    let totalPrice = tipAmount(`${bill}`, `${service}`) + bill;
    let howMany = Number(`${people}`)
    let split = totalPrice/howMany
    return split
}
splitAmount(100, 'good', 5);