// TODO: Write code to define and export the Employee class
//const Manager = require("./lib/Manager");
//const Engineer = require("./Engineer");
//const Intern = require("./Intern");
//const app = require("../app.js");

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
        return "Employee";
    }

};


module.exports = Employee;