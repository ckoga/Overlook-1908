import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies'
import User from '../src/User';
import usersData from './customer-sample-data';


describe('User', () => {

  let user;

  beforeEach(() => {
    user = new User(usersData[0])
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be able to return a name', () => {
    expect(user.returnUserName()).to.equal('Leatha Ullrich')
  });
})