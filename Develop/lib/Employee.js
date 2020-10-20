// TODO: Write code to define and export the Employee class
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const app = require("../app.js");

class Employee {
    constructor(name, id, email, role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName(){
        // console.log(this.name);
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){

    }

};


var ob = new Employee("Tom", 1, "t@t.com");
var ob2 = new Employee("Jerry", 2, "j@j.com");
console.log(ob);
ob.getName();

module.exports = Employee;