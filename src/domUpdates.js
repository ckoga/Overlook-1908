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
      list += `<li class="room">
        <label class="room__label" for="room-number">Room:</label>
        <p class="room__number">${obj.number}</p>
        <label class="room__label" for="room-type">Type:</label>
        <p class="room__type" id="room-type">${obj.roomType}</p>
        <label class="room__label" for="room-bidet">Bidet:</label>
        <p class="room__bidet">${obj.bidet}</p> 
        <label class="room__label" for="room-bed-size">Bed Size:</label>
        <p class="room__beds">${obj.bedSize}</p>
        <label class="room__label" for="room-beds">Number of Beds:</label>
        <p class="room__beds">${obj.numBeds}</p>
        <label class="room__label" for="room-cost">Cost Per Night:</label>
        <p class="room__cost">$${obj.costPerNight}</p>
        <button class="room-book" type="button">Book Room</button>`

    })
    return list
  }

};

export default domUpdates;