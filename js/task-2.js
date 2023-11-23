// Task 2. Messages formatting

function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        return message;
    } else {
        return message.slice(0, maxLength) + "...";
    }
}

