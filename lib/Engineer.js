class Engineer extends Employee {
  constructor(name, id, email, github) {
    this.github = github;
  }
  
  getGitHub() {

  };

  getRole() {
    return 'Engineer';
  };
}

module.exports = Engineer;