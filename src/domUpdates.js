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

  appendRooms(arr) {
    let list = `<ul class="rooms-open">`
    arr.forEach(obj => {
      list += `<li class="room-open">
        <p class="room-number">${obj.number}</p>
        <p class="room-type">${obj.roomType}</p>
        <p class="room-bidet">Bidet: ${obj.bidet}</p> 
        <p class="room-beds">Number of Beds: ${obj.numBeds}</p>
        <p class="room-cost">Cost Per Night: $${obj.costPerNight}`

    })
    return list
  }

};

export default domUpdates;