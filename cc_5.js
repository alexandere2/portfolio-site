// Declaring Employee Objects

const employees = [
{name: "Jerry", hourlyRate: 30.00, hoursWorked: 48.00},
{name: "Tony", hourlyRate: 24.00, hoursWorked: 40.00},
{name: "Bruce", hourlyRate: 18.00, hoursWorked: 32.00}
];

// Calculating Base/Gross Pay

function calculateBasePay (rate, hours) {
    const minimumHours = Math.min (hours, 40)
    return hourlyRate * minimumHours
}; 

const basePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);

// Calculating Overtime Pay 

function calculateOvertimePay (rate, hours) {
    if (hours >= 40.00) {
        return rate = 1.5 * hourlyRate
      }  else 
      {return 0}
};
const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);

// Calculaying Gross Pay

const grossPay = basePay + overtimePay

// Calculating Taxes
function calculateTaxes(grossPay) 
{
    const taxRate= 0.15 
    return grossPay * taxRate
}
const taxes = calculateTaxes(grossPay);
{
    function calculateNetPay(taxRate {
        return grossPay - taxes
    }
const netPay = grossPay - taxes
};

// Process Payroll 
function processPayroll(employee) {
  
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




