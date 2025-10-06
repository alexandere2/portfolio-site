// Coding Challenge 00

// Code goes here

// Created Employee Class

class Employee {
    constructor (name, department) {
    this.name = name;
    this.department = department;
}

describe() {
    return `${this.name} works in the ${this.department} department.`
    }
}

// Created Manager Subclass

class Manager extends Employee {
    constructor(name, department, teamSize) {
    super(name, department, teamSize);
    this.teamSize = teamSize;
}
    
// Defined Team Size by Manager
    
isManagerLevel() {
    return this.teamSize >=10;
}

    describe() {
        return `${this.name} manages ${this.teamSize} overall employees within their respective department.`
    }
}

// Created Sample Employees

    employees = [
    new Employee("Tobias", "Business Development"),
    new Employee("Ronda", "Investment Team"),
    new Employee("Kaitlyn", "Back Office"),
    new Employee("Nick", "Portfolio Operations")
    ];

for (const employee of employees) {
    console.log(employee.describe())
}

// Created Sample Managers

    managers = [
   new Manager("Keisha", "Investment Team", 10),
   new Manager("Darius", "Portfolio Operations", 20)
    ];

for (const manager of managers) {
    console.log(manager.describe())
}

// Created Company class and established the employees as an array 

class Company {
    constructor() {
        this.employees = [];
    }
}

// Added Employee to the array 

function addEmployee(employee) {
return this.employees.push(employee)
}

// Log Each Employee Description 

function listEmployees(employees) {
    return this.employees.forEach((employee) => {
        console.log(employee.describe());
    });
}

const myCompany = new Company("Ground Beef Private Equity");

function addStaff(employees) {
    return myCompany.staff.push(employees)
}

function listStaff(employees) {
    return myCompany.staff.forEach((employees) => {
        console.log(employees.describe());
    });
}

function addBosses(managers) {
    return myCompany.bosses.push(managers)
}

function listBosses(managers) {
    retur myCompany.bosses.forEach((managers) => {
        console.log(managers.describe());
    });
}
