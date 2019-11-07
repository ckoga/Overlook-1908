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
};

export default Booking;