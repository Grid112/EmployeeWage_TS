console.log("\nWelcome to Employee Wage Calculator \n");
class EmployeeWage {
     Emp_Rate_Per_Hr: number = 20;
     Working_Days_Per_Month: number = 20;
     Emp_Work_Hrs: number = 0;
     Total_Emp_Work_Hrs: number = 0;
     Total_Emp_Wage: number = 0;
     Emp_Working_Days: number = 0;
     Emp_Absent_Days: number = 0;


    empDailyCheck(): void {
        while (this.Total_Emp_Work_Hrs < 100 && this.Emp_Working_Days < 20) {

            var empAttendanceCheck = Math.floor(Math.random() * 10) % 3;

            switch (empAttendanceCheck) {
                case 0: {
                    this.Emp_Absent_Days++;
                    console.log("Employee Is Absent");
                    this.Emp_Work_Hrs = 0;
                    break;
                }
                case 1: {

                    console.log("Employee Is Present For FULL Day");
                    this.Emp_Work_Hrs = 8;
                    break;
                }
                case 2: {
                    console.log("Employee Is Present For HALF Day");
                    this.Emp_Work_Hrs = 4;
                    break;
                }
                default: {
                    console.log("Employee Not Found");
                    break;
                };
            }
            this.Emp_Working_Days++;

            this.Total_Emp_Work_Hrs += this.Emp_Work_Hrs;
            console.log("Employee Working Days Are: ", this.Emp_Working_Days);
            console.log("Employee Absent Days Are: ", this.Emp_Absent_Days, "\n");
            this.Total_Emp_Wage = this.Emp_Rate_Per_Hr * this.Total_Emp_Work_Hrs;
            console.log("\nTotal Employee Workinh Hours In A Month: ", this.Total_Emp_Work_Hrs);
            console.log("total Employee Wage In One Month Is :", this.Total_Emp_Wage, "\n");
            // return this.Total_Emp_Work_Hrs;

        }
    }    
}
var employeeWage = new EmployeeWage();
employeeWage.empDailyCheck();

    
