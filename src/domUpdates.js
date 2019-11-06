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
      list += `<article class="booking">
        <p class="booking-id">Booking ID: ${obj.id}</p>
        <p class="booking-date">Date: ${obj.date}</p>
        <p class="booking-userID">User ID: ${obj.userID}</p>
        <p class="booking-room">Room Number: ${obj.roomNumber}</p>
        </article>`
    })
    return list
  },

  appendRooms(arr) {
    let list = `<ul class="rooms-list">`
    arr.forEach(obj => {
      list += `<article class="room">
          <p class="room__number">Room: ${obj.number}</p>
          <p class="room__type">Type: ${obj.roomType}</p>
          <p class="room__bidet">Bidet: ${obj.bidet}</p> 
          <p class="room__beds">Bed Size: ${obj.bedSize}</p>
          <p class="room__beds">Number of Beds: ${obj.numBeds}</p>
          <p class="room__cost">Cost Per Night: $${obj.costPerNight}</p>
        </article>`
    })
    return list
  }

};

export default domUpdates;