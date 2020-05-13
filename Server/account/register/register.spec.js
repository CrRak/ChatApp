const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const register = require('./register');
const data = require('./register.data');
const ResponseCode = require('../../common/enums/RegisterResponse');

describe('Register', () => {

    register.db = sinon.mock(data);

    it('should return "IncompleteDetails" if user name is empty', () => {
        let user = {
            name: '',
            email : 'email',
            password : 'pass'
        }

        let response = register.doRegister(user);
        expect(response).to.equal(ResponseCode.IncompleteDetails);
    });

    it('should return "IncompleteDetails" if user email is empty', () => {
        let user = {
            name: 'name',
            email : '',
            password : 'pass'
        }

        let response = register.doRegister(user);
        expect(response).to.equal(ResponseCode.IncompleteDetails);
    });

    it('should return "IncompleteDetails" if user pasword is empty', () => {
        let user = {
            name: 'name',
            email : 'email',
            password : ''
        }

        let response = register.doRegister(user);
        expect(response).to.equal(ResponseCode.IncompleteDetails);
    });
})