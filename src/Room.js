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

  calculateCustomerBill(date, id) {
    let totalBill = 0;
    let history = this.getCustomerBookings(id).filter(booking => {
      let dateBooking = booking.date.split('/')
      let todayDate = (date.split('/'))

      if (dateBooking[1] < todayDate[1] || (dateBooking[1] === todayDate[1] && dateBooking[2] <= todayDate[2])) {
        return booking
      } 
    })
    
    history.forEach(booking => {
      let room = this.rooms.find(room => room.number === booking.roomNumber)
      totalBill += room.costPerNight
    });
    return totalBill;
  };

  getAvailableRooms(date) {
    let roomsOccupied = this.getTodaysBookings(date).map(booking => booking.roomNumber)
    let availableRooms = this.rooms.filter(room => {
      return !roomsOccupied.includes(room.number)
    });
    return availableRooms;
  };

  filterAvailableRooms(date, type) {
    return this.getAvailableRooms(date).filter(room => {
      if (room.roomType === type) {
        return room;
      };
    });
  };


}


export default Rooms;