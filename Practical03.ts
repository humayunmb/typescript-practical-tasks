// 1. Define Role using Literal Types and Type Aliases
type Role = 'Admin' | 'Manager' | 'Employee';

// 2. Create the Employee interface
interface Employee {
    id: number;
    name: string;
    role: Role;
}

// 3. Implement getPermissions() using a switch statement and type narrowing
function getPermissions(role: Role): string {
    switch (role) {
        case 'Admin':
            return 'Manage Users, Manage Products, View Reports';
        case 'Manager':
            return 'Manage Products, View Reports';
        case 'Employee':
            return 'View Products';
        default:
          
            const exhaustiveCheck: never = role;
            return exhaustiveCheck;
    }
}

// 4. Create an employee instance and display details
const employee1: Employee = {
    id: 1,
    name: 'Rahim',
    role: 'Manager'
};

function displayEmployeeDetails(emp: Employee): void {
    const permissions = getPermissions(emp.role);
    console.log(`Name: ${emp.name} | Role: ${emp.role} | Permissions: ${permissions}`);
}


displayEmployeeDetails(employee1);
export {};