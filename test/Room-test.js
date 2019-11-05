import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
import Bookings from '../src/Booking';
import Rooms from '../src/Room';
import roomsData from './room-sample-data';
import bookingData from './booking-sample-data';
chai.use(spies)

describe('Rooms', () => {

  let bookings, rooms;

  beforeEach(() => {

    bookings = new Bookings(bookingData)
    rooms = new Rooms(bookingData, roomsData);
    chai.spy.on(bookings, 'getTodaysBookings', () => {
      return [
        {id: 1572293130160, userID: 1, date: '2019/11/18', roomNumber: 5, roomServiceCharges: [] },
        { id: 1572293130163, userID: 1, date: '2019/11/12', roomNumber: 21, roomServiceCharges: [] },
        { id: 1572293130163, userID: 1, date: '2019/10/29', roomNumber: 7, roomServiceCharges: [] },
        { id: 1572293130164, userID: 1, date: '2019/11/14', roomNumber: 11, roomServiceCharges: [] },
        { id: 1572293130165, userID: 1, date: '2019/11/28', roomNumber: 3, roomServiceCharges: [] },
        { id: 1572293130170, userID: 1, date: '2019/12/05', roomNumber: 5, roomServiceCharges: [] },
        { id: 1572293130172, userID: 1, date: '2019/10/29', roomNumber: 19, roomServiceCharges: [] },
        { id: 1572293130173, userID: 1, date: '2019/12/17', roomNumber: 12, roomServiceCharges: [] },
        { id: 1572293130174, userID: 1, date: '2019/11/01', roomNumber: 7, roomServiceCharges: [] },
        { id: 1572293130178, userID: 1, date: '2019/12/10', roomNumber: 2, roomServiceCharges: [] },
        { id: 1572293130178, userID: 1, date: '2019/12/11', roomNumber: 19, roomServiceCharges: [] },
        { id: 1572293130181, userID: 1, date: '2019/10/31', roomNumber: 24, roomServiceCharges: [] },
        { id: 1572293130187, userID: 1, date: '2019/12/09', roomNumber: 17, roomServiceCharges: [] },
        { id: 1572293130199, userID: 1, date: '2019/11/08', roomNumber: 19, roomServiceCharges: [] },
        { id: 1572293130205, userID: 1, date: '2019/12/12', roomNumber: 14, roomServiceCharges: [] },
        { id: 1572293130218, userID: 1, date: '2019/11/11', roomNumber: 20, roomServiceCharges: [] },
        { id: 1572293130226, userID: 1, date: '2019/11/13', roomNumber: 3, roomServiceCharges: [] }
      ]
    });

  });

  it ('should be a function', () => {
    expect(Rooms).to.be.a('function');
  });

  it('should hold all bookings', () => {
    expect(rooms.allBookings).to.be.an('array');
  });

  it('should be able to calculate rooms available today', () => {
    expect(rooms.calculateRoomsAvailable('2019/11/02')).to.equal(20);
  })

  it('should be able to calculate percentage of rooms available', () => {
    expect(rooms.calculatePercentRoomsOccupied('2019/11/02')).to.equal('20%');
  });

  it('should be able to calculate the total bill for a customer', () => {
    expect(rooms.calculateCustomerBill('2019/11/02', 1)).to.equal(1164.83)
  });

  it('should be able to return a list of available rooms for today', () => {
    expect(rooms.getAvailableRooms('2019/11/02')).to.have.a.lengthOf(20)
  });

  it('should be able to filter available rooms by roomType', () => {
    expect(rooms.filterAvailableRooms('2019/11/02', 'single room')).to.have.a.lengthOf(12)
  })

  it('should be able to calculate total revenue today', () => {
    expect(rooms.calculateTotalRevenue('2019/11/02')).to.equal('1838.81')
  })
});