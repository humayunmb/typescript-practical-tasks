"use strict";
// 4. Implement handleResponse() using a switch statement and type narrowing
function handleResponse(response) {
    switch (response.status) {
        case 'success':
            return `Success: ${response.data}`;
        case 'error':
            return `Error: ${response.message}`;
        default:
            // TypeScript Exhaustiveness Check (ensures all cases are handled)
            const exhaustiveCheck = response;
            return exhaustiveCheck;
    }
}
// 5. Test the function with at least three cases and print output
const res1 = { status: 'success', data: 'User created successfully' };
const res2 = { status: 'error', message: 'Email already exists' };
const res3 = { status: 'success', data: 'Product added successfully' };
console.log(handleResponse(res1));
console.log(handleResponse(res2));
console.log(handleResponse(res3));
