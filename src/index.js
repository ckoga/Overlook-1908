// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import domUpdates from './domUpdates';
import 'jquery-ui/ui/widgets/tabs';
import 'jquery-ui/ui/widgets/datepicker';
import Room from '../src/Room';
import Booking from '../src/Booking';
import User from '../src/User';
import Manager from '../src/Manager';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


$(document).ready(() => {
  $('#ui-tabs').tabs();
  $('#manager-datepicker').datepicker();
})


const usersFetch = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
  .then(response => response.json())
  .then(data => data.users)
  .catch(error => console.log(error));

const roomsFetch = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
  .then(response => response.json())
  .then(data => data.rooms)
  .catch(error => console.log(error));

const bookingsFetch = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
  .then(response => response.json())
  .then(data => data.bookings)
  .catch(error => console.log(error));
    
Promise.all([usersFetch, roomsFetch, bookingsFetch])
  .then(allFetchData => {
    const booking = new Booking(allFetchData[2]);
    const rooms = new Room(allFetchData[2], allFetchData[1]);
    const user = new User(allFetchData[0][49]);
    const manager = new Manager(allFetchData[0])
    console.log(allFetchData)
    data(booking, rooms, user, manager)
  })
  .catch(error => console.log(error));

function getTodaysDate() {
  let year = new Date().getFullYear()
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();

  return `${year}/${month < 10 ? '0' + month : '' + month}/${day < 10 ? '0' + day : '' + day}`
}

function data(booking, rooms, user, manager) {
  $('#available-rooms').text(rooms.getAvailableRooms(getTodaysDate()).length)
  $('#daily-revenue').html(rooms.calculateTotalRevenue(getTodaysDate()))
  $('#percent-occupied').text(rooms.calculatePercentRoomsOccupied(getTodaysDate()))


  $('#booking-history').html(domUpdates.appendBookings(booking.getCustomerBookings(50)))
  $('.customer__available-rooms').html(domUpdates.appendRooms(rooms.getAvailableRooms(getTodaysDate())))
  $()
} 



$('#login').click((e) => {
  domUpdates.loginVerification(e);
});