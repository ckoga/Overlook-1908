class Manager {
  constructor(userData) {
    this.users = userData;
  }

  getUser(name) {
    console.log(this.users)
    return this.users.find(user => user.name.toLowerCase() === name.toLowerCase())
  }
};

export default Manager;