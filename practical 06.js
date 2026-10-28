"use strict";
// 2. Implement isUser() with an unknown parameter and type predicate (arg is User)
function isUser(data) {
    return (typeof data === "object" &&
        data !== null &&
        "id" in data &&
        typeof data.id === "number" &&
        "name" in data &&
        typeof data.name === "string");
}
// 3. Implement processUserData() to validate and display data safely
function processUserData(data) {
    if (isUser(data)) {
        // Use optional chaining (?.) and nullish coalescing (??) to display "Unknown City" when city is missing
        const cityName = data.address?.city ?? "Unknown City";
        console.log(`User: ${data.name} | City: ${cityName}`);
    }
    else {
        console.log("Invalid user data");
    }
}
// 4. Test with at least three cases (valid with city, valid without city, invalid data)
const testCase1 = { id: 1, name: "Rahim", address: { city: "Moulvibazar" } };
const testCase2 = { id: 2, name: "Karim", address: {} }; // Missing city
const testCase3 = { id: "invalid-id", name: "Salam" }; // Invalid data (id is string instead of number)
processUserData(testCase1);
processUserData(testCase2);
processUserData(testCase3);
