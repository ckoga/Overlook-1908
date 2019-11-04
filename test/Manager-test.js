import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
import Manager from '../src/Manager';
import userData from './customer-sample-data';

describe('Manager', () => {

  let manager

  beforeEach(() => {

    manager = new Manager(userData);
  
  });

  it('should be a function', () => {
    expect(Manager).to.be.a('function');
  });

  it('should be able to hold userData', () => {
    expect(manager.users).to.have.a.lengthOf(10);
  });

  it('should be able to find a user by name', () => {
    expect(manager.getUser('Dell Rath')).to.eql(
      { id: 7, name: "Dell Rath" }
    );
  });

});