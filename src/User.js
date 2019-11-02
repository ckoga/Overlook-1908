class User {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
  }
  
  returnUserName() {
    return this.name
  }


}

export default User;