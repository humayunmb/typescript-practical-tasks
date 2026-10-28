// 1. Create a User interface with id, name, and optional address (address has optional city)
interface Address {
    city?: string;
}

interface User {
    id: number;
    name: string;
    address?: Address;
}

// 2. Implement isUser() with an unknown parameter and type predicate (arg is User)
function isUser(data: unknown): data is User {
    return (
        typeof data === "object" &&
        data !== null &&
        "id" in data &&
        typeof (data as User).id === "number" &&
        "name" in data &&
        typeof (data as User).name === "string"
    );
}

// 3. Implement processUserData() to validate and display data safely
function processUserData(data: unknown): void {
    if (isUser(data)) {
        // Use optional chaining (?.) and nullish coalescing (??) to display "Unknown City" when city is missing
        const cityName = data.address?.city ?? "Unknown City";
        console.log(`User: ${data.name} | City: ${cityName}`);
    } else {
        console.log("Invalid user data");
    }
}

// 4. Test with at least three cases (valid with city, valid without city, invalid data)
const testCase1: unknown = { id: 1, name: "Rahim", address: { city: "Moulvibazar" } };
const testCase2: unknown = { id: 2, name: "Karim", address: {} }; // Missing city
const testCase3: unknown = { id: "invalid-id", name: "Salam" }; // Invalid data (id is string instead of number)

processUserData(testCase1);
processUserData(testCase2);
processUserData(testCase3);