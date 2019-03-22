var express = require('express');
var router = express.Router();
var userDB = require('../utility/userDB');
var itemDb = require('../utility/itemDB');

var bodyParser = require('body-parser');
var session = require('express-session');

var User = require('../model/User');
// var UserProfile = require('../model/UserProfile');
var UserItem = require('../model/UserItem');

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({ extended:false }));

router.use(session({secret: 'iloveuit'}));

router.post('/login', function(req, res){
    if(req.session.theUser){
        console.log('User already logged in');
        res.redirect('/');
    }else{
        users = userDB.getUsers();
        console.log(users);
        var user = users[Math.floor(Math.random()*users.length)];
        //console.log(user);
        req.session.theUser = user;
        req.session.userProfile = userDB.getUserProfile(user.userId);
        //console.log('seesion userprofile', req.session.userProfile);
        res.redirect('/myItems');
    }
});

router.post('/logout', function(req, res){
    if(req.session.theUser){
        req.session.theUser = null;
        res.redirect('/');
    }
});



var getSelectedItem = function (itemList, itemCode) {
    for (var index = 0; index < itemList.length; index++) {
        //console.log(itemList[index]._itemCode);
        //console.log(itemList[index]._itemCode == parseInt(itemCode,10));
        if (itemList[index]._itemCode == parseInt(itemCode, 10)) {
            return index;
        }
    }
    return -2;
};

module.exports = router;
