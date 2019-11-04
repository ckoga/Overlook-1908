class User {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
  }
  
  returnUserName() {
    return this.name
  }

  makeBooking(id, userID, date, roomNumber) {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: Date.now(),
        userID: this.id,
        date: 
      })
    })
  }
}

export default User;