class Booking {
  constructor(bookingData) {
    this.allBookings = bookingData;

  }

  getCustomerBookings(id) {
    return this.allBookings.filter(booking => {
      return booking.userID === id;
    });
  };

  getTodaysBookings(date) {
    return this.allBookings.filter(booking => {
      return booking.date === date
    });
  };

  calculateRoomsAvailable(date) { // should live in Rooms change 25 to rooms.length
    let availableRooms = (25 - this.getTodaysBookings(date).length)
    return availableRooms;
  };

  calculatePercentRoomsOccupied(date) { //should live on Rooms change 25 to rooms.length
    return `${(this.getTodaysBookings(date).length / 25) * 100}%` 
  }

  
};

export default Booking;