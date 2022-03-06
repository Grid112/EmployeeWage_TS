console.log("\nWelcome to Employee Wage Calculator \n");

const Emp_Rate_Per_Hr: number = 20;
var Working_Days_Per_Month: number = 0;
var Emp_Work_Hrs: number = 0;
var Total_Emp_Work_Hrs: number = 0;
var Total_Emp_Wage: number = 0;
var Emp_Working_Days: number = 0;

for (Working_Days_Per_Month = 0; Working_Days_Per_Month < 20; Working_Days_Per_Month++) {
    
    var empCheck = Math.floor(Math.random() * 10) % 3;

    switch (empCheck) {
        case 0: {
            console.log("Employee Is Absent");
            Emp_Work_Hrs = 0;
            break;
        }
        case 1: {
            console.log("Employee Is Present For FULL Day");
            Emp_Work_Hrs = 8;
            break;
        }
        case 2: {
            console.log("Employee Is Present For HALF Day");
            Emp_Work_Hrs = 4;
            break;
        }
        default: {
            console.log("Employee Not Found");
            break;
        };
    }

    Total_Emp_Work_Hrs += Emp_Work_Hrs;
    console.log("Employee Working Days Are: ", Emp_Working_Days);
    Emp_Working_Days++;    
}
Total_Emp_Wage = Emp_Rate_Per_Hr * Total_Emp_Work_Hrs;
console.log("\nTotal Employee Wage In One Month Is :", Total_Emp_Wage , "\n");

