//part 1
const employees = [
    {
      "firstName": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": 40000,
      "raiseEligible": true
    },
    {
      "firstName": "Mary",
     "department": "Finance",
      "designation": "Trainee",
      "salary": 18500,
      "raiseEigible": true
    },
    {
      "firstName": "Bill",
      "department": "HR",
      "designation": "Executive",
      "salary": 21200,
      "raiseEligible": false
    },
];
console.log("Question 1")
console.log(employees);

//part 2 
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees}

console.log("Question 2")
console.log(company)

//part 3
const employees2 = [
    {
        "firstName": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raiseEligible": true
      },
      {
        "firstName": "Mary",
       "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raiseEigible": true
      },
      {
        "firstName": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raiseEligible": false
      },
    {
        "first_name": "Anna",
        "department": "Tech",
        "designation": "Executive",
        "salary": 25600,
        "raise_eligible": false}
];

console.log("Question 3")
console.log(employees2)

// part 4
function totalSalary(employees2){
        let totalSalary = 0;

    for(employee of employees2){
        totalSalary +=employee.salary;
    }
    return totalSalary;
    }
    console.log("Question 4")
    console.log(totalSalary(employees2))



//part 5 its raise time!!!!!


function raiseSalary(employees2){

    for( let employee of employees2){
        if( employee.raiseEigible){
            employee.salary *= 1.1;
            employee.raiseEigible = false;
        }
    }
}



raiseSalary(employees2);

console.log("Question 5");
console.log(employees2);


//part 6

function workFromHome(employees2){
    let totalSalary = 0;

for(let employee of employees2){
    totalSalary +=employee.salary;
}
return totalSalary;
}
console.log("Question 6")
console.log(totalSalary(employees2))


