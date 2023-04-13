let stats = {
  Administration: { employees: 0, total_salary: 0 },
  Marketing: { employees: 0, total_salary: 0 },
  Develoment: { employees: 0, total_salary: 0 },
  Fainance: { employees: 0, total_salary: 0 },
};

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  if (key == "maxid") {
    continue;
  }
  let value = localStorage.getItem(key);
  value = JSON.parse(value);

  stats[value.department].employees += 1;
  stats[value.department].total_salary += value.salary;
}


function render(dep, employees, salary) {
    const table = document.getElementById("stats")
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");

    td1.textContent = dep;
    td2.textContent = employees;
    td3.textContent = salary;
    td4.textContent = salary / employees;

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    table.appendChild(tr)


}

let all_employees = 0;
let all_salaries = 0;

for (let key in stats) {

    all_employees += stats[key].employees;
    all_salaries += stats[key].total_salary;
    render(key, stats[key].employees, stats[key].total_salary)

}

render('ALL', all_employees, all_salaries)
