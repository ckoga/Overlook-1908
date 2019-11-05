import $ from 'jquery';

const domUpdates = {

  loginVerification(e) {
    e.preventDefault();
    if ( $('#user-name').val() === 'manager' && $('#password').val() === 'overlook2019') {
      $('#modal').hide();
    } else if ($('#user-name').val() === 'customer50' && $('#password').val() === 'overlook2019') {
      $('#modal').hide();
      $('#manager-ui').hide();
      $('#customer-ui').show();
    }
  },

  appendBookings(arr) {
    let list = `<ul class="booking__list">`
    arr.forEach(obj => {
      list += `<li class="bookings">
        <p class="booking-id">Booking ID: ${obj.id}</p>
        <p class="booking-date">Date: ${obj.date}</p>
        <p class="booking-userID">User ID: ${obj.userID}</p>
        <p class="booking-room">Room Number: ${obj.roomNumber}</p>`
    })
    return list
  },

  appendRooms(arr) {
    let list = `<ul class="rooms-list">`
    arr.forEach(obj => {
      list += `<li class="rooms">
        <p class="room-number">${obj.number}</p>
        <p class="room-type">${obj.roomType}</p>
        <p class="room-bidet">Bidet: ${obj.bidet}</p> 
        <p class="room-beds">Number of Beds: ${obj.numBeds}</p>
        <p class="room-cost">Cost Per Night: $${obj.costPerNight}</p>`

    })
    return list
  }

};

export default domUpdates;