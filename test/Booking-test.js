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
  })
}) 