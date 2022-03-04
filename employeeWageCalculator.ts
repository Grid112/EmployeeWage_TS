console.log("Welcome to Employee Wage Calculator");
var Is_Present : number = 1;
var Is_Full_Time : number = 1;
var Emp_Rate_Per_Hr : number = 20;
var Emp_Work_Hrs : number = 0;
var Emp_Wage : number = 0;

var empCheck = Math.floor(Math.random() * 10) % 2;
var empDailyCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck == Is_Present) {
    console.log("Employee Is Present");
    if (empDailyCheck == Is_Full_Time) {
        console.log("Employee Is Present For FULL Day");
        Emp_Work_Hrs  = 8;    
    } else {
        console.log("Employee Is Present For HALF Day");
        Emp_Work_Hrs  = 4;    
    }
}
else {
    console.log("Employee Is Absent");
    Emp_Work_Hrs  = 0;
}

Emp_Wage = Emp_Work_Hrs * Emp_Rate_Per_Hr;
console.log("Employee Daily Wage Is", Emp_Wage)