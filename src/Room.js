import Bookings from './Booking'

class Rooms extends Bookings {
  constructor(bookingData, roomsData) {
    super(bookingData)
    this.rooms = roomsData;
  }
  
  calculateRoomsAvailable(date) {
    let availableRooms = (this.rooms.length - this.getTodaysBookings(date).length)
    return availableRooms;
  };

  calculatePercentRoomsOccupied(date) {
    return `${(this.getTodaysBookings(date).length / this.rooms.length) * 100}%`
  };

  calculateCustomerBill(id) {
    let totalBill = 0;
    this.getCustomerBookings(id).forEach(booking => {
      let room = this.rooms.find(room => room.number === booking.roomNumber)
      totalBill += room.costPerNight
    });
    return totalBill;
  }
};

export default Rooms;