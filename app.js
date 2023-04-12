'use strict';

let myForm =document.getElementById("employeesForm");
let infoSection = document.getElementById("cardSection");
let employees = [];

function Employee (id ,fullName, isAdministration , isMarketing ,isDevelopment,isFinance,isJunior,ismidSenior,isSenior, image){
    this.fullName = fullName;
    this.isAdministration = isAdministration;
    this.isMarketing = isMarketing;
    this.isDevelopment = isDevelopment;
    this.isFinance = isFinance;
    this.isJunior = isJunior;
    this.ismidSenior = ismidSenior;
    this.isSenior = isSenior;
    this.image = image;
    this.salary = 0;
    if(id){
        this.employeeId = id;
    }else{
        this.employeeId =0;
    }
    employees.push(this);
}
Employee.prototype.Salary=function(Level){
    let tax =0.075;
 if(Level =="Senior"){
   let min = 1500;
   let max = 2000;
   let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
   this.salary = randomSalary - (randomSalary*tax); 
  }

 else if(Level=="Mid-Senior"){
   let  min = 1000;
   let  max = 1500;
   let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
   this.salary = randomSalary- (randomSalary*tax);
 }

 else if(Level=="Junior"){
   let min = 500;
   let max = 1000;
   let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
   this.salary = randomSalary - (randomSalary*tax);
 }
}
myForm.addEventListener('submit',handleSubmit);
function handleSubmit(event){
 event.preventDefault();
 let fullName= event.target.employeeName.value;
 let administration= event.target.administration.checked;
 let marketing= event.target.marketing.checked;
 let development= event.target.development.checked;
 let finance= event.target.finance.checked;
 let junior= event.target.junior.checked;
 let midSenior = event.target.midSenior.checked;
 let senior= event.target.senior.checked; 
 let image= event.target.img.value;

let newEmployee = new Employee("null", fullName, administration, marketing, development, finance, junior, midSenior, senior, image);
newEmployee.generateEmployeeID();

if(newEmployee.isJunior == true){
    newEmployee.Salary("Junior"); 
}else if(newEmployee.ismidSenior == true){
    newEmployee.Salary("Mid-Senior"); 
} else if(newEmployee.isSenior == true){
    newEmployee.Salary("Senior"); 
}
newEmployee.render();
}

Employee.prototype.render = function() {
    let level = '';
    let department = '';
    if (this.isJunior) {
        level = 'Junior';
    } else if (this.ismidSenior) {
        level = 'Mid-Senior';
    } else if ( this.isSenior){
        level = 'Senior';
    }

    if (this.isMarketing == true ) {
        department = 'Marketing';
    } else if (this.isAdministration == true) {
        department = 'Administration';
    } else if (this.isFinance == true) {
        department = 'Finance';
    } else if (this.isDevelopment == true){
        department = 'Development';
    }

    let div1 = document.createElement('div');
    let img = document.createElement('img');
    let div2 = document.createElement('div');
    let h4 = document.createElement('h4');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    
    div1.classList.add('card')
    div2.classList.add('container')

    h4.textContent = `Name: ${this.fullName} - ID: ${this.employeeId}`;
    p1.textContent = `Department: ${department} - Level: ${level}`;
    p2.textContent = `${this.salary}`;

    img.src = this.image;
    img.style.width = '200px';
    img.style.height = '250px';

    div1.appendChild(img);
    div1.appendChild(div2);
    div2.appendChild(h4);
    div2.appendChild(p1);
    div2.appendChild(p2);
    
    if(this.isMarketing){
        document.getElementById('marketing-dept').append(div1)
    }else if(this.isAdministration){
        document.getElementById('admin-dept').append(div1)
    }else if(this.isFinance){
        document.getElementById('finance-dept').append(div1)
    }else{
        document.getElementById('development-dept').append(div1)
    }
}

// // This is the render method before refactoring
//     Employee.prototype.render = function(){
//     const imgEl = document.createElement('img');
//     imgEl.src = this.image;
//     imgEl.style.width = '140px';
//     infoSection.appendChild(imgEl);

//     const NameEl = document.createElement('p');
//     NameEl.textContent = `Name: ${this.fullName}`;
//     infoSection.appendChild(NameEl);

//     const IDEl = document.createElement('p');
//     IDEl.textContent = `ID: ${this.employeeId}`;
//     infoSection.appendChild(IDEl);

//     const depEl = document.createElement('p');
//     if(this.isAdministration == true){
//         depEl.textContent = "Department: Administration";
//     } else if (this.isMarketing == true){
//         depEl.textContent = "Department: Marketing";
//     } else if (this.isDevelopment == true){
//         depEl.textContent = "Department: Development";
//     } else if (this.isFinance == true){
//         depEl.textContent = "Department: Finance";
//     }
//     infoSection.appendChild(depEl)

//     const levEl = document.createElement('p');
//     const salaryEl = document.createElement('p');
//     if(this.isJunior == true){
//         levEl.textContent = "Level: Junior";
//         salaryEl.textContent = `Salary: ${this.salary}`;
//     }else if(this.ismidSenior == true){
//         levEl.textContent = "Level: Mid-Senior";
//         salaryEl.textContent = `Salary: ${this.salary}`;  
//     }else if(this.isSenior == true){
//         levEl.textContent = "Level: Senior";
//         salaryEl.textContent = `Salary: ${this.salary}`;
//     }
//     infoSection.appendChild(levEl);
//     infoSection.appendChild(salaryEl);
// }

    Employee.prototype.generateEmployeeID = function(id){
    this.employeeId = Math.floor(1000 + Math.random() * 9000);
    return this.employeeId;
}

let emp1 = new Employee(1000, 'Ghazi Samer',true , false, false, false , false, false, true,'./assets/img4.jpg');
let emp2 = new Employee(1001, 'Lana Ali', false , false, false, true , false, false, true,'./assets/img3.jpg');
let emp3 = new Employee(1002, 'Tamara Ayoub', false , true, false, false , false, false, true,'./assets/img2.jpg');
let emp4 = new Employee(1003, 'Safi Walid', true , false, false, false , false, true, false,'./assets/img5.jpg' );
let emp5 = new Employee(1004, 'Omar Zaid', false , false, true, false , false, false, true,'./assets/img6.jpg' );
let emp6 = new Employee(1005, 'Rana Saleh', false , false, true, false , true, false, true,'./assets/img7.jpg' );
let emp7 = new Employee(1006, 'Hadi Ahmad', false , false, false, true , false, true, false,'./assets/img8.jpg' );

let emps = [emp1, emp2, emp3, emp4, emp5, emp6, emp7]
for (let i = 0; i< emps.length; i++){
    if(emps[i].isJunior){
        emps[i].Salary('Junior');
    } else if (emps[i].ismidSenior){
        emps[i].Salary('Mid-Senior');
    } else if (emps[i].isSenior){
        emps[i].Salary('Senior');
    }
    emps[i].render();
}


// for(let i = 0; i < employees.length; i++){
//     employees[i].generateEmployeeID();
//     employees[i].render();
// }

console.log(employees);
  
