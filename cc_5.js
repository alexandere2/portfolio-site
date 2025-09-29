// Declaring Employee Objects

const employees = [
{name: "Jerry", hourlyRate: 30.00, hoursWorked: 48.00},
{name: "Tony", hourlyRate: 24.00, hoursWorked: 40.00},
{name: "Bruce", hourlyRate: 18.00, hoursWorked: 32.00}
];

// Calculating Base/Gross Pay

function calculateBasePay (rate, hours) {
    if (hours >= 40.00) {
        return price 
    } else 
    {return 0}
}; 

// Calculating Overtime Pay 

function calculateOvertimePay (rate, hours) {
    if (hours > 40.00) {
        return rate = 1.5 * hourlyRate
      }  else 
      {return 0}
};

// Calculaying Gross Pay

const grossPay = basePay + overtimePay

// Calculating Taxes
function calculateTaxes(grossPay) 
{
    const taxRate= 0.15 
    return grossPay * taxRate
}
{
    return function (taxRate) {
        return netPay = grossPa * (1-taxRate)
    }

};

// Process Payroll 
function processPayroll(employee) {
    const basePay = calculateBasePay (employee.rate, employee.hours);
    const overtimePay = calculateOvertimePay (employee.rate, employee.hours);
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes
    return {
        name: `${employee.name}`, 
        basePay: `$${employee.basePay}`, 
        overtimePay: `$${employee.overtimePay}`, 
        grossPay: `$${employee.grossPay}`, 
        netPay: `$${employee.netPay}`
}
};

// Loop through each payroll for the individual employee
employees.forEach((employee) => {
    const payrollInformation = processPayroll(employee);
    console.log(payrollInformation);
});



