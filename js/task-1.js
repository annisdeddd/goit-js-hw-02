// Task 1. Order droids

function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;
    if (customerCredits >= totalPrice) {
       return `You ordered ${quantity} droids worth ${totalPrice} credits!`
    } else {
        return "Insufficient funds!"
    }
}

