// Coding Challenge 00

// Code goes here

class Employee {
    constructor (name, department) {
    this.name = name;
    this.department = department;
}

describe() {
    return `${this.name} works in the ${this.department} department.`
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
    super(name, department, teamSize);
    this.teamSize = teamSize;
}

isManagerLevel() {
    return this.teamSize >=10;
}

    describe() {
        return `${this.name} manages ${this.teamSize} overall employees within their respective department.`
    }
}
    employees = [
    new Employee("Tobias", "Business Development"),
    new Employee("Ronda", "Investment Team"),
    new Employee("Kaitlyn", "Back Office"),
    new Employee("Nick", "Portfolio Operations")
    ];

for (const employee of employees) {
    console.log(employee.describe())
}
    managers = [
   new Manager("Keisha", "Investment Team", 10),
   new Manager("Darius", "Portfolio Operations", 20)
    ];

for (const manager of managers) {
    console.log(manager.describe())
}

class Company {
    constructor() {
        this.employees = [];
    }
}

function addEmployee(employee) {
return this.employees.push(employee)
}

function listEmployees(employees) {
    return this.employees.forEach((employee) => {
        console.log(employee.describe());
    });
}
