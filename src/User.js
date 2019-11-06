class User {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
  }
  
  returnUserName() {
    return this.name
  }

  makeBooking(date, num) {
    
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userID: this.id,
        date: date,
        roomNumber: parseInt(num)
      })
    }).catch(error => console.log('We\'re very sorry, there was an error submitting your booking', error))
  }
}

export default User; 