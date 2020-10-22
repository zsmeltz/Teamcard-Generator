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