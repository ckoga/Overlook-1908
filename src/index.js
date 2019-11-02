// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import domUpdates from './domUpdates';
import 'jquery-ui/ui/widgets/tabs';
import 'jquery-ui/ui/widgets/datepicker';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


$(document).ready(() => {
  $('#ui-tabs').tabs();
  $('#datepicker').datepicker();

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
      console.log(allFetchData[2])
    });
})

$('#login').click((e) => { domUpdates.loginVerification(e)});