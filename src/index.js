import $ from 'jquery';
import domUpdates from './domUpdates';
import 'jquery-ui/ui/widgets/tabs';
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/ui/widgets/controlgroup';
import Room from '../src/Room';
import Booking from '../src/Booking';
import User from '../src/User';
import Manager from '../src/Manager';
import './css/base.scss';


$(document).ready(() => {
  $('#ui-tabs').tabs();
  $('.controlgroup').controlgroup();
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
    data(booking, rooms, user, manager)
  })
  .catch(error => console.log(error));

function getTodaysDate() {
  let year = new Date().getFullYear()
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();

  return `${year}/${month < 10 ? '0' + month : '' + month}/${day < 10 ? '0' + day : '' + day}`
}

$('#login').click((e) => {
  domUpdates.loginVerification(e);
});

function data(booking, rooms, user, manager) {
  $('#manager-datepicker').datepicker({
    dateFormat: "yy/mm/dd"
  });
  $('#customer-datepicker').datepicker({
    dateFormat: "yy/mm/dd"
  });
  $('#rooms-open').text(rooms.getAvailableRooms(getTodaysDate()).length);
  $('#daily-revenue').html(rooms.calculateTotalRevenue(getTodaysDate()));
  $('#percent-occupied').text(rooms.calculatePercentRoomsOccupied(getTodaysDate()));
  $('#tabs__booking').append(domUpdates.appendRooms(rooms.getAvailableRooms(getTodaysDate())));

  $('#customer-name').text(`${user.returnUserName()}!`)
  $('#booking-history').append(domUpdates.appendBookings(booking.getCustomerBookings(50)));
  $('.customer__available-rooms').html(domUpdates.appendRooms(rooms.getAvailableRooms(getTodaysDate())));
  $('#customer-spending').append(`Total Bill: $${rooms.calculateCustomerBill(getTodaysDate(), 50)}`);

  $(document).on("change", "select", function () {
    $("option[value=" + this.value + "]", this).attr("selected", true).siblings().removeAttr("selected")
  });

  $('#room-search').click(() => {
    if(rooms.filterAvailableRooms($('#customer-datepicker').val(), $('select option:selected').val()).length > 0) {
      $('.customer__available-rooms').html(domUpdates.appendRooms(rooms.filterAvailableRooms($('#customer-datepicker').val(), $('select option:selected').val())));
    } else {
      $('.rooms-list').html("We deeply apologise, the date/room type you have selected is completely booked please choose another date/room type.")
    }
  
  });
  
  $('.submit-name').click(() => {
    $('.guest__form').append(domUpdates.appendBookings(booking.getCustomerBookings(manager.getUser($('#guest-input').val()).id)))
    $('.guest__billing').append(`Total Bill: ${rooms.calculateCustomerBill(getTodaysDate(), user.id)}`)
  });

  
}; 

$('.room').click((event) => {
  console.log(event.target)
  $(event.target.parentElement).addClass('selected')
  console.log($('#customer-datepicker').val())
  console.log($(event.target.childNodes[3]).text())

  // user.makeBooking($('#customer-datepicker').val(), $('.room__number').text());
});

