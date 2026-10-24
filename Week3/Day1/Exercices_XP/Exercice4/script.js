
function hotelCost() {
    let nights;

    do {
        nights = prompt("Enter the number of nights:");
    } while (nights === "" || nights === null || isNaN(Number(nights)) || Number(nights) < 0);

    return Number(nights) * 140;
}

function planeRideCost() {
    let destination;

    do {
        destination = prompt("Enter your destination:");
    } while (destination === null || destination.trim() === "");

    destination = destination.trim().toLowerCase();

    if (destination === "london") {
        return 183;
    } else if (destination === "paris") {
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost() {
    let days;

    do {
        days = prompt("Enter the number of days to rent a car:");
    } while (days === "" || days === null || isNaN(Number(days)) || Number(days) < 0);

    let cost = Number(days) * 40;

    if (Number(days) > 10) {
        cost = cost * 0.95;
    }

    return cost;
}

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();

    const total = hotel + plane + car;

    console.log("Hotel cost: $" + hotel);
    console.log("Plane ticket cost: $" + plane);
    console.log("Rental car cost: $" + car);
    console.log("Total vacation cost: $" + total);

    return total;
}

totalVacationCost();
