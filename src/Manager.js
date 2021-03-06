class Manager {
  constructor(userData) {
    this.users = userData;
  }

  getUser(name) {
    return this.users.find(user => user.name.toLowerCase() === name.toLowerCase())
  };

  deleteBooking(bookingID) {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: parseInt(bookingID)
      })
    })
    .then(response => response.json())
    .catch(error => console.log(error))
  }
};

export default Manager;