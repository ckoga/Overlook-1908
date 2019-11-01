import $ from 'jquery';

const domUpdates = {

  loginVerification(e) {
    e.preventDefault();
    if ( $('#user-name').val() === 'manager' && $('#password').val() === 'overlook2019') {
      $('#modal').hide();
    }
  }

};

export default domUpdates;