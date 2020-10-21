// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name,id,email,githubUsername,role){
        super(name,id,email,role)
    this.github = githubUsername;
  };

  getGithub() {
    return this.github;
}
getRole() {
    return "Engineer"
}
};



module.exports = Engineer;