"use strict";
// 3. Implement getPermissions() using a switch statement and type narrowing
function getPermissions(role) {
    switch (role) {
        case 'Admin':
            return 'Manage Users, Manage Products, View Reports';
        case 'Manager':
            return 'Manage Products, View Reports';
        case 'Employee':
            return 'View Products';
        default:
            const exhaustiveCheck = role;
            return exhaustiveCheck;
    }
}
// 4. Create an employee instance and display details
const employee1 = {
    id: 1,
    name: 'Rahim',
    role: 'Manager'
};
function displayEmployeeDetails(emp) {
    const permissions = getPermissions(emp.role);
    console.log(`Name: ${emp.name} | Role: ${emp.role} | Permissions: ${permissions}`);
}
displayEmployeeDetails(employee1);
