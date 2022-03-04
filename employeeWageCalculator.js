console.log("Welcome to Employee Wage Calculator");
var Is_Full_Time = 1;
var Emp_Rate_Per_Hr = 20;
var Emp_Work_Hrs = 0;
var Emp_Wage = 0;
var empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == 1) {
    console.log("Employee Is Present");
    Emp_Work_Hrs = 8;
}
else {
    console.log("Employee Is Absent");
    Emp_Work_Hrs = 0;
}
Emp_Wage = Emp_Work_Hrs * Emp_Rate_Per_Hr;
console.log("Employee Daily Wage IS", Emp_Wage);
