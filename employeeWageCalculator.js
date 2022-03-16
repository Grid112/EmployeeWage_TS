console.log("\nWelcome to Employee Wage Calculator \n");
var EmpWageBuilder = /** @class */ (function () {
    function EmpWageBuilder(companyName, emp_ratePerHrs, workingDays, workingHrs) {
        this.empHrs = 0;
        this.totalEmpHrs = 0;
        this.totalWorkingDay = 0;
        this.absentDay = 0;
        this.fullTimeEmpWage = 8;
        this.partTimeEmpWage = 4;
        this.companyName = companyName;
        this.empRatePerHrs = emp_ratePerHrs;
        this.workingDays = workingDays;
        this.workingHrs = workingHrs;
    }
    EmpWageBuilder.prototype.Function_EmpWage = function () {
        while (this.totalEmpHrs <= this.workingHrs || this.totalWorkingDay < this.workingDays) {
            var CheckEmp = Math.floor(Math.random() * 10 % 3);
            switch (CheckEmp) {
                case 1:
                    this.empHrs = this.fullTimeEmpWage;
                    // console.log("Employee is full-time present----Days are : " + this.totalWorkingDay
                    //     + " & Employee Hrs is : " + this.empHrs);
                    break;
                case 2:
                    this.empHrs = this.partTimeEmpWage;
                    // console.log("Employee is part-time present----Days are : " + this.totalWorkingDay
                    //     + " & Employee Hrs is : " + this.empHrs);
                    break;
                default:
                    // console.log("Employee is absent----Day are : " + this.absentDay);
                    this.empHrs = 0;
            }
            this.absentDay++;
            this.totalWorkingDay++;
            this.totalEmpHrs += this.empHrs;
        }
        this.totalEmpWage = this.totalEmpHrs * this.empRatePerHrs;
        console.log("company Name :", this.companyName, "And total Employee Wage In One Month Is :", this.totalEmpWage);
    };
    return EmpWageBuilder;
}());
var JioMart = new EmpWageBuilder("JioMart", 10, 28, 100);
JioMart.Function_EmpWage();
console.log("\n.........................................................................................\n");
var DMart = new EmpWageBuilder("DMart", 30, 30, 105);
DMart.Function_EmpWage();
console.log("\n.........................................................................................\n");
var AbcMart = new EmpWageBuilder("AbcMart", 20, 31, 98);
AbcMart.Function_EmpWage();
