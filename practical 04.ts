// 1. Define Success Response type using literal type
interface SuccessResponse {
    status: 'success';
    data: string;
}

// 2. Define Error Response type using literal type
interface ErrorResponse {
    status: 'error';
    message: string;
}

// 3. Create an ApiResponse Discriminated Union
type ApiResponse = SuccessResponse | ErrorResponse;

// 4. Implement handleResponse() using a switch statement and type narrowing
function handleResponse(response: ApiResponse): string {
    switch (response.status) {
        case 'success':
            return `Success: ${response.data}`;
        case 'error':
            return `Error: ${response.message}`;
        default:
            // TypeScript Exhaustiveness Check (ensures all cases are handled)
            const exhaustiveCheck: never = response;
            return exhaustiveCheck;
    }
}

// 5. Test the function with at least three cases and print output
const res1: ApiResponse = { status: 'success', data: 'User created successfully' };
const res2: ApiResponse = { status: 'error', message: 'Email already exists' };
const res3: ApiResponse = { status: 'success', data: 'Product added successfully' };

console.log(handleResponse(res1));
console.log(handleResponse(res2));
console.log(handleResponse(res3));