'use strict';

function Employee(employeeId, fullName, department, level, imageUrl){
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
}

let empArr = [];

Employee.prototype.salary = function(level){
    let randomSalary = 0;
    let tax = 0.075;
    if(level == 'Senior'){
        let min = 1500;
        let max = 2000;
        randomSalary = Math.floor(Math.random() * (max - min + 1)) + min;
        this.salary = randomSalary-randomSalary * tax;


    } else if(level == 'Mid-Senior'){
        let min = 1000;
        let max = 1500;
        randomSalary = Math.floor(Math.random() * (max - min + 1)) + min;
        this.salary = randomSalary-randomSalary * tax;

           
    } else if(level == 'Junior'){
        let min = 500;
        let max = 1000;
        randomSalary = Math.floor(Math.random() * (max - min + 1)) + min;
        this.salary = randomSalary-randomSalary * tax;

    }
}
Employee.prototype.render = function(){
    document.write(`Name : ${this.fullName} <br> Salary = ${this.salary} <br><br>`);

}


let ghaziSamer = new Employee(1000, 'Ghazi Samer','Administration', 'Senior');
empArr.push(ghaziSamer);

let lanaAli = new Employee(1001, 'Lana Ali', 'Fainance', 'Senior');
empArr.push(lanaAli);

let tamaraAyoub = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior');
empArr.push(tamaraAyoub);

let saifWaleed = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior');
empArr.push(saifWaleed);

let omarZaid = new Employee(1004, 'Omar Zaid', 'Develoment', 'Senior');
empArr.push(omarZaid);

let ranaSaleh = new Employee(1005, 'Rana Saleh', 'Develoment', 'Junior');
empArr.push(ranaSaleh);

let hadiAhmad = new Employee(1006, 'Hadi Ahmad', 'Fainance', 'Mid-Senior');
empArr.push(hadiAhmad);

for(let i = 0; i < empArr.length; i++){
    empArr[i].salary(empArr[i].level);
    empArr[i].render();
}
