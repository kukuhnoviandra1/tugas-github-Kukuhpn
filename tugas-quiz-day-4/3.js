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

function hireRangeDate(employees, startDate, endDate) {
    let isEmpty = true;
    employees.forEach(employee => {
        hire_date = new Date(employee.hire_date).getTime();
        start_date = new Date(startDate).getTime()
        end_date = new Date(endDate).getTime()

        if(hire_date >= start_date && hire_date <= end_date) {
            console.log(employee.first_name, employee.last_name);
            isEmpty = false;
        } 
    })
    if (isEmpty === true) {
        console.log("Tidak menemukan range Waktu");
    }
}

hireRangeDate(employees, '12-01-1993', '12-12-1995');
hireRangeDate(employees, '12-01-1980', '12-12-1990');
hireRangeDate(employees, '12-01-2000', '21-20-2025');