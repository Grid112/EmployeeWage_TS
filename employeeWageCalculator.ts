console.log("\nWelcome to Employee Wage Calculator \n");
class EmpWageBuilder {

    companyName: string;
    empRatePerHrs: number;
    workingDays: number;
    workingHrs: number;
    totalempwage: number;


    constructor(companyName: string, emp_ratePerHrs: number, workingDays: number, workingHrs: number) {
        this.companyName = companyName;
        this.empRatePerHrs = emp_ratePerHrs;
        this.workingDays = workingDays;
        this.workingHrs = workingHrs;
    }

    Function_EmpWage(): void {
        var emphrs: number = 0;
        var totalemphrs: number = 0;
        var totalworkingday: number = 0;
        var absentDay: number = 0;

        while (totalemphrs <= this.workingHrs || totalworkingday < this.workingDays) {
            
            let CheckEmp = Math.floor(Math.random() * 10 % 3);

            switch (CheckEmp) {
                case 1:
                    emphrs = 8;
                    console.log("Employee is full-time present----Days are : " + totalworkingday
                        + " & Employee Hrs is : " + emphrs);
                    break;
                case 2:
                    emphrs = 4;
                    console.log("Employee is part-time present----Days are : " + totalworkingday
                        + " & Employee Hrs is : " + emphrs);
                    break;
                default:
                    
                    console.log("Employee is absent----Day are : " + absentDay);
                    emphrs = 0;
                    break;
            }
            absentDay++;
            totalworkingday++;
            totalemphrs += emphrs;
        }
        this.totalempwage = totalemphrs * this.empRatePerHrs;
        console.log("company Name :", this.companyName, "And total Employee Wage In One Month Is :", this.totalempwage, "\n");
    }
}

var JioMart = new EmpWageBuilder("JioMart", 10, 28, 100);
JioMart.Function_EmpWage();
console.log("\n.........................................................................................\n")
var DMart = new EmpWageBuilder("DMart", 30, 30, 105);
DMart.Function_EmpWage();
console.log("\n.........................................................................................\n")
var AbcMart = new EmpWageBuilder("AbcMart", 20, 31, 98);
AbcMart.Function_EmpWage();
