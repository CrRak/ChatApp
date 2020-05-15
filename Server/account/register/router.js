var express = require('express');
var router = express.Router();
var register = require('./register');
const ResponseCode = require('../../common/enums/RegisterResponse');

router.post('/', async (req, res) => {
    const { user } = req.body;
    const retVal = await register.doRegister(user);
    let resObj = {};
    
    switch(retVal.result){
        case ResponseCode.IncompleteDetails : resObj = {'success': false, 'message': 'Please add all then necessary details for registration.'}; break;
        case ResponseCode.ServerError: resObj = {'success': false, 'message': 'There was some problem with your registration. Please try again later.'}; break;
        case ResponseCode.DuplicateEmail : resObj = {'success': false, 'message': 'Email already exists. Please try another.'}; break;
        case ResponseCode.Success : resObj = {'success': true, 'message': 'Registration was successfull!'}; break;
    }
    // Add the id of the new registered user to the response
    resObj.insertedId = retVal.insertedId;

    res.end(JSON.stringify(resObj));
});

module.exports = router;