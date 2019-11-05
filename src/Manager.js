class Manager {
  constructor(userData) {
    this.users = userData;
  }

  getUser(name) {
    return this.users.find(user => user.name.toLowerCase() === name.toLowerCase())
  }
};

export default Manager;