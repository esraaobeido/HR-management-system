"use strict";

let myForm = document.getElementById("employeesForm");
let infoSection = document.getElementById("cardSection");
let employees = [];

function saveData(data) {
  let stringifyData = JSON.stringify(data);
  localStorage.setItem(`${data.id}`, stringifyData);
}

function getData() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key == "maxid" || key <= 1006){
      continue;
    }
    let value = localStorage.getItem(key)
    let data = JSON.parse(value);
    console.log(value)
    let employee = new Employee(data["id"], data["fullName"], data["department"], data["level"], data["image"])
    employee.render()
  }
}

function Employee(id, fullName, department, level, image) {
  this.id = id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.image = image;
  this.salary = this.calculateSalary();
  employees.push(this);
}
//-----------------------------------------------------------------------------------------------------------
myForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  let fullName = event.target.employeeName.value;
  let department = event.target.depa.value;
  let level = event.target.lev.value;
  let image = event.target.img.value;

  let newEmployee = new Employee(null, fullName, department, level, image);
  newEmployee.randomID();
  newEmployee.calculateSalary();
  newEmployee.render();
  saveData({
    "id": newEmployee.id,
    "fullName": newEmployee.fullName,
    "department": newEmployee.department,
    "level": newEmployee.level,
    "image": newEmployee.image,
    "salary": newEmployee.salary
  })
}

//-----------------------------------------------------------------------------------------------
let EmployeeID = localStorage.getItem("maxid")
if (EmployeeID == null) {
  EmployeeID = 1007
}
Employee.prototype.randomID = function () {
  localStorage.setItem("maxid", EmployeeID + 1)
  this.id = EmployeeID++;
};
//------------------------------------------------------------------------------
Employee.prototype.calculateSalary = function () {
  let tax = 0.075;
  let newSalary = 0;
  if (this.level == "senior") {
    let min = 1500;
    let max = 2000;
    let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
    newSalary = randomSalary - randomSalary * tax;
  } else if (this.level == "midSenior") {
    let min = 1000;
    let max = 1500;
    let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
    newSalary = randomSalary - randomSalary * tax;
  } else if (this.level == "junior") {
    let min = 500;
    let max = 1000;
    let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
    newSalary = randomSalary - randomSalary * tax;
  }
  return newSalary;
};
//--------------------------------------------------------------------------------------
Employee.prototype.render = function () {
  const imgEl = document.createElement("img");
  imgEl.src = this.image;
  imgEl.style.width = "140px";
  infoSection.appendChild(imgEl);

  const NameEl = document.createElement("p");
  NameEl.textContent = `Name: ${this.fullName}`;
  infoSection.appendChild(NameEl);

  const IDEl = document.createElement("p");
  IDEl.textContent = `ID: ${this.id}`;
  infoSection.appendChild(IDEl);

  const departmentEl = document.createElement("p");
  departmentEl.textContent = `Department: ${this.department}`;
  infoSection.appendChild(departmentEl);

  const levelEl = document.createElement("p");
  levelEl.textContent = `Level: ${this.level}`;
  infoSection.appendChild(levelEl);

  const salaryEl = document.createElement("p");
  console.log(this.salary);
  salaryEl.textContent = `Salary: ${this.salary}`;
  infoSection.appendChild(salaryEl);
};

let emp1 = new Employee(
  "1000",
  "Ghazi Samer",
  "Administration",
  "senior",
  "./assets/img4.jpg"
);
let emp2 = new Employee("1001", "Lana Ali", "Fainance", "senior", "./assets/img3.jpg");
let emp3 = new Employee(
  "1002",
  "Tamara Ayoub",
  "Marketing",
  "senior",
  "./assets/img2.jpg"
);
let emp4 = new Employee(
  "1003",
  "Safi Walid",
  "Administration",
  "midSenior",
  "./assets/img5.jpg"
);
let emp5 = new Employee(
  "1004",
  "Omar Zaid",
  "Develoment",
  "senior",
  "./assets/img6.jpg"
);
let emp6 = new Employee(
  "1005",
  "Rana Saleh",
  "Develoment",
  "junior",
  "./assets/img7.jpg"
);
let emp7 = new Employee(
  "1006",
  "Hadi Ahmad",
  "Fainance",
  "midSenior",
  "./assets/img8.jpg"
);
for (let i = 0; i < employees.length; i++) {
  employees[i].render();

  let employee = localStorage.getItem(`${employees[i].id}`);
  if (employee == null){
    saveData({
      "id": employees[i].id,
      "fullName": employees[i].fullName,
      "department": employees[i].department,
      "level": employees[i].level,
      "image": employees[i].image,
      "salary": employees[i].salary
    })
  }
}
getData();


console.log(employees);
