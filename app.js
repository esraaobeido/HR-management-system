'use strict';
function Employee (employeeId, fullName, department, level, imageUrl){
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
}

let seniorSalary;
let midSeniorSalary;
let juniorSalary;
let netSeniorSalary;
let netMidSeniorSalary;
let netJuniorSalary;

Employee.prototype.salary = function(level){
    let tax = 0.075;

    if(level == 'Senior'){
        let min = 1500;
        let max = 2000;
        seniorSalary = Math.floor(Math.random() * (max - min + 1) + min);
        netSeniorSalary = seniorSalary - (seniorSalary * tax);
        document.write(this.fullName + ", Salary = " + netSeniorSalary + '</p>');


    } else if(level == 'Mid-Senior'){
        let min = 1000;
        let max = 1500;
        midSeniorSalary = Math.floor(Math.random() * (max - min + 1) + min);
        netMidSeniorSalary = midSeniorSalary - (midSeniorSalary * tax);
        document.write(this.fullName + ", Salary = " + netMidSeniorSalary + '</p>');

           
    } else if(level == 'Junior'){
        let min = 500;
        let max = 1000;
        juniorSalary = Math.floor(Math.random() * (max - min + 1) + min);
        netJuniorSalary = juniorSalary - (juniorSalary * tax);
        document.write(this.fullName + ", Salary = " + netJuniorSalary + '</p>');

    }
}


let ghaziSamer = new Employee(1000, 'Ghazi Samer','Administration', 'Senior');
ghaziSamer.salary(ghaziSamer.level);

let lanaAli = new Employee(1001, 'Lana Ali', 'Fainance', 'Senior');
lanaAli.salary(lanaAli.level);

let tamaraAyoub = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior');
tamaraAyoub.salary(tamaraAyoub.level);

let saifWaleed = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior');
saifWaleed.salary(saifWaleed.level);

let omarZaid = new Employee(1004, 'Omar Zaid', 'Develoment', 'Senior');
omarZaid.salary(omarZaid.level);

let ranaSaleh = new Employee(1005, 'Rana Saleh', 'Develoment', 'Junior');
ranaSaleh.salary(ranaSaleh.level);

let hadiAhmad = new Employee(1006, 'Hadi Ahmad', 'Fainance', 'Mid-Senior');
hadiAhmad.salary(hadiAhmad.level);
