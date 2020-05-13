var express = require('express');
var router = express.Router();
var register = require('./register');
const ResponseCode = require('../../common/enums/RegisterResponse');

router.post('/', (req, res) => {
    const { user } = req.body;
    const retVal = register.doRegister(user);
    let resObj = {};
    
    switch(retVal){
        case ResponseCode.IncompleteDetails : resObj = {'success': false, 'message': 'Please add all then necessary details for registeration.'}; break;
        case ResponseCode.ServerError: resObj = {'success': false, 'message': 'There was some problem with your registeration. Please try again later.'}; break;
        case ResponseCode.DuplicateEmail : resObj = {'success': false, 'message': 'Email already exists. Please try another.'}; break;
        case ResponseCode.Success : resObj = {'success': true, 'message': 'Registeration was successfull!'}; break;
    }

    res.end(JSON.stringify(resObj));
});

module.exports = router;