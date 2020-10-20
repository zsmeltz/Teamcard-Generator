// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, githubUsername){
    super("name", id, "email");
    this.github = githubUsername;
  };

};

module.exports = Engineer;