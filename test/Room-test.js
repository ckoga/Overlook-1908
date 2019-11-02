import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
import Bookings from '../src/Booking';
import Rooms from '../src/Room';
import roomsData from './room-sample-data';
import bookingData from './booking-sample-data';

describe('Rooms', () => {

  let bookings, rooms;

  beforeEach(() => {

    bookings = new Bookings(bookingData)
    rooms = new Rooms(bookingData, roomsData);
    // chai.spy.on(bookings, )

  });

  it ('should be a function', () => {
    expect(Rooms).to.be.a('function');
  });

  it('should hold all bookings', () => {
    expect(rooms.allBookings).to.be.an('array');
  });

  // tests will live in the rooms-test.js file 
  it('should be able to calculate rooms available today', () => {
    expect(rooms.calculateRoomsAvailable('2019/11/02')).to.equal(20);
  })

  it('should be able to calculate percentage of rooms available', () => {
    expect(rooms.calculatePercentRoomsOccupied('2019/11/02')).to.equal('20%');
  });

  it('should be able to calculate the total bill for a customer', () => {
    expect(rooms.calculateCustomerBill(1)).to.equal(5992.8)
  });

})