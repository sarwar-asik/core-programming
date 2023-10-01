const name = "Tamin";
const birthDay = "1999-10-24";
const monthSalary = 320000;
const monthsNum = 10;

//! system-1 by function

function calculate_age(birthDay) {
  const difference_month = Date.now() - new Date(birthDay).getTime();
  const age_date = new Date(difference_month);
  return Math.abs(age_date.getUTCFullYear() - 1970);
}

function getSalary(monthSalary, monthsNum) {
  return (monthSalary * monthsNum).toLocaleString();
}
console.log("---------system-1 by Function--------------");
console.log("calculate Age by function", calculate_age(birthDay));
console.log("calculate Salary by function", getSalary(monthSalary, monthsNum));

//! system-2  simple Object by normal js

const person = {
  birthDay: "1999-10-24",

  monthSalary: 320000,
  monthsNum: 10,

  calculate_age() {
    const difference_month = Date.now() - new Date(this.birthDay).getTime();
    const age_date = new Date(difference_month);
    return Math.abs(age_date.getUTCFullYear() - 1970);
  },
  getSalary() {
    return (this.monthSalary * this.monthsNum).toLocaleString();
  },
};

console.log("---------system-2 by Object--------------");
console.log("calculate Age by Object", person.calculate_age());
console.log("calculate Salary by Object", person.getSalary());

// console.log("Age of the person",person.calculate_age());
// console.log("Age of the salary",person.getSalary());

//! system-2 by class

class Player {

    //! private property
    #monthSalary

  constructor(name, birthDay, monthSalary, monthsNum) {
    this.name = name;
    this.birthDay = birthDay;
    this.#monthSalary = monthSalary;
    this.monthsNum = monthsNum;
  }
  calculate_age() {
    const difference_month = Date.now() - new Date(this.birthDay).getTime();
    const age_date = new Date(difference_month);
    return Math.abs(age_date.getUTCFullYear() - 1970);
  }
 //   ! private method
 #getNameAndAge (){
    return `name= ${this.name} age=${this.birthDay}`
  }
  getSalary() {
    const salary = (this.#monthSalary * this.monthsNum).toLocaleString();
    return `salary=${salary} of ${this.#getNameAndAge()}`
  }
  
}

console.log("---------system-3 by Class--------------");
// create a instance ///
const Tamin = new Player(name, birthDay, monthSalary, monthsNum);
const Sakib = new Player("Sakib", birthDay, monthSalary, monthsNum);

console.log("Calculate age  by Class", Tamin.calculate_age());
console.log("Calculate salary  by Class", Tamin.getSalary());

console.log("access Birthday  from Class", Sakib.birthDay);
console.log("access monthSalary private from Class", Sakib.monthSalary);
