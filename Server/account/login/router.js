var express = require('express');
var router = express.Router();
var login = require('./login');
const ResponseCode = require('../../common/enums/LoginResponse');

router.post('/', async (req, res) => {
    const { user } = req.body;
    const retVal = await login.doLogin(user);
    let resObj = {};
    switch(retVal.result){
        case ResponseCode.IncompleteDetails : resObj = {'success': false, 'message': 'Please add all then necessary details for login.'}; break;
        case ResponseCode.ServerError: resObj = {'success': false, 'message': 'There was some problem with your login. Please try again later.'}; break;
        case ResponseCode.DuplicateEmail : resObj = {'success': false, 'message': 'Email already exists. Please try another.'}; break;
        case ResponseCode.Success : resObj = {'success': true, 'message': 'Login was successfull!'}; break;
    }
    resObj.user = retVal.user;
    res.end(JSON.stringify(resObj));
});

module.exports = router;