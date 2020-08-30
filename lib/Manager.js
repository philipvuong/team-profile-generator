class Manager extends Employee {
  constructor() {
    this.officeNumber = officeNumber;
  }
  
  getRole() {
    return 'Manager';
  };
}

module.exports = Manager;