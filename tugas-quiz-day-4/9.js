const employees = [
    {
    employee_id: 100,
    first_name: "Steven",
    last_name: "King",
    email: "steven.king@sqltutorial.org",
    phone_number: "515.123.4567",
    hire_date: "1987-06-17",
    job_id: 4,
    salary: "2400",
    manager_id: null,
    department_id: 9,
    employees_images: [
    {
    epim_id: 27,
    epim_filename: "after order.jpg",
    epim_path: "/uploads/after order.jpg",
    epim_primary: false,
    epim_employee_id: 100
    },
    {
    epim_id: 26,
    epim_filename: "cangkir jadul.jpg",
    epim_path: "/uploads/cangkir jadul.jpg",
    epim_primary: false,
    epim_employee_id: 100
    },
    ]   
     },    
{
    employee_id: 99,
    first_name: "Adam",
    last_name: "Smith",
    email: "adam.smith@sqltutorial.org",
    phone_number: "515.123.1245",
    hire_date: "1988-06-17",
    job_id: 3,
    salary: "2000",
    manager_id: null,
    department_id: 9,
    employees_images: [
    {
    epim_id: 25,
    epim_filename: "after order.jpg",
    epim_path: "/uploads/after order.jpg",
    epim_primary: false,
    epim_employee_id: 100
    },
    {
    epim_id: 24,
    epim_filename: "cangkir jadul.jpg",
    epim_path: "/uploads/cangkir jadul.jpg",
    epim_primary: false,
    epim_employee_id: 100
    },
    ]
        },
 {
    employee_id: 98,
    first_name: "Lisa",
    last_name: "Amelia",
    email: "lisa.amelia@sqltutorial.org",
    phone_number: "515.123.4444",
    hire_date: "1989-06-17",
    job_id: 4,
    salary: "1900",
    manager_id: null,
    department_id: 9,
    employees_images: [
    {
    epim_id: 23,
    epim_filename: "after order.jpg",
    epim_path: "/uploads/after order.jpg",
    epim_primary: false,
    epim_employee_id: 100
    },
    {
    epim_id: 2,
    epim_filename: "cangkir jadul.jpg",
    epim_path: "/uploads/cangkir jadul.jpg",
    epim_primary: false,
    epim_employee_id: 100
         },
    ]   
 }

]
function salaryMinMax(employees) {
    let salary_min = +employees[0].salary;
    let salary_max = +employees[0].salary;
    let employee_min = `${employees[0].first_name} ${employees[0].last_name}`;
    let employee_max = `${employees[0].first_name} ${employees[0].last_name}`;

    for(let i = 0; i < employees.length; i++) {
        for (let j = i+1; j < employees.length; j++) {
            if (+employees[j].salary > +employees[i].salary) {
                salary_max = +employees[j].salary;
                employee_max = `${employees[j].first_name} ${employees[j].last_name}`;
            } else if (+employees[j].salary < +employees[i].salary) {
                salary_min = +employees[j].salary;
                employee_min = `${employees[j].first_name} ${employees[j].last_name}`;
            }
        }

        return console.log(`${employee_min}: ${salary_min}\n${employee_max}: ${salary_max}`);
    }
    
    
}


salaryMinMax(employees);