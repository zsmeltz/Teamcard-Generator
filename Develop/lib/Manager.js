// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name,id,email,officeNumber,role){
        super(name,id,email,role)
    this.officeNumber = officeNumber;
  };

  getOfficeNum() {
    return this.officeNumber;
}
getRole() {
    return "Manager";
}
};



module.exports = Manager;