import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/Booking';
import spies from 'chai-spies';
import bookingData from './booking-sample-data';

describe('Booking', () => {


  let booking;

  beforeEach(() => {

    booking = new Booking(bookingData);
     
  });

  it ('should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('should hold all bookings', () => {
    expect(booking.allBookings).to.be.an('array');
  });

  it('should be able get a specific user\'s booking data', () => {
    expect(booking.getCustomerBookings(1)).to.have.a.lengthOf(17);
  });

  it('should be able to get bookings for today', () => {
    expect(booking.getTodaysBookings('2019/11/02')).to.have.a.lengthOf(5);
  })

  // tests will live in the rooms-test.js file 
  it('should be able to calculate rooms available today', () => {
    expect(booking.calculateRoomsAvailable('2019/11/02')).to.equal(20);
  })

  it('should be able to calculate percentage of rooms available', () => {
    expect(booking.calculatePercentRoomsOccupied('2019/11/02')).to.equal('20%')
  })

  
}) 