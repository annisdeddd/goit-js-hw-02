// Task 3. Spam checking

function checkForSpam(message) {
    const lowerCaseInput = message.toLowerCase();
    return lowerCaseInput.includes("spam") || lowerCaseInput.includes("sale");
}

