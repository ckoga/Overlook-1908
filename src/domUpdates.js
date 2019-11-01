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
  }

};

export default domUpdates;