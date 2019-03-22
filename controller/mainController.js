var express = require('express');
var router = express.Router();
var userDb = require('../utility/userDB');
var itemDb = require('../utility/ItemDB');
var session = require('express-session');
var bodyParser = require('body-parser');
var UserSelectedItems = require('../model/UserSelectedItems');

var User = require('../model/User');
// var UserProfile = require('../model/UserProfile');
var UserItem = require('../model/UserItem');

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({ extended:false }));

router.use(session({secret: 'iloveuit'}));

var user = null;
var userData = [];

router.use(function getSession(req,res,next){
    if(req.session.theUser){
        var temp = req.session.theUser;
        user = new User(temp._userId, temp._firstName, temp._lastName, temp._email, temp._address1,
            temp._address2,temp._city,temp._state,temp._country);
        var userProfileTemp = req.session.userProfile;
        console.log("hi");
        console.log(userProfileTemp);
        console.log("bye");
        userData = new UserSelectedItems(userProfileTemp.userId);
        for(var j=0;j< userProfileTemp.length; j++){

          var userItem = new UserItem(
            userProfileTemp[j]._userId,
            userProfileTemp[j]._itemCode,
            userProfileTemp[j]._itemName,
            userProfileTemp[j]._rating,
            userProfileTemp[j]._usedIt
          );
          console.log(userItem);
          userData.addItem(userItem);
        }

    }else{
        user = null;
        userData = [];
    }
    next();
});

/* GET home page. */

// app.post('/login',function(req,res){
//
// 	// Very basic. Set the session e-mail to whatever the user has added.
//
// });
router.get('/login',function(req,res){
  req.session.email = "johndoe@unknown.com";
  console.log("ho");
	res.end('done');
})
// app.get('/admin',function(req,res){
//
// 	if(req.session.email) {
// 		res.write('<h1>Hello '+req.session.email+'</h1>');
// 		res.write('<a href="/logout">Logout</a>');
// 		res.end();
// 	} else {
// 		res.write('<h1>Please login first.</h1>');
// 		res.write('<a href="/">Login</a>');
// 		res.end();
// 	}
// });

router.get('/', function(req, res){
    res.render('index');
});

router.get('/categories', function(req, res) {
    var itemData = itemDb.getItems();
    var categories = itemDb.getCategories();
    var data= {
        title:'Categories',
        path: req.url,
        categories: categories,
        items: itemData
    }
    res.render('categories',{data: data});
});

router.get('/contact', function(req, res) {
    res.render('contact');
});

router.get('/about', function(req, res) {
  console.log(userData);
    res.render('about');
});

router.get('/categories/item/:itemCode', function(req, res) {
    var exist = itemDb.isExist(req.params.itemCode)
    if(exist){
      var itemData = itemDb.getItem(req.params.itemCode);
      var data= {
          title:'Item',
          path: req.url,
          item: itemData
      }
      res.render('item',{data: data});
    }
    else {
      res.redirect('/categories');
    }

});
router.get('/categories/item/add/:itemCode',function(req,res){
  if(req.session.theUser){
    var exist = itemDb.isExist(req.params.itemCode);
    if(exist){
      var itemData = itemDb.getItem(req.params.itemCode);
      var temp = new UserItem(
        req.session.theUser._userId,
        itemData.itemCode,
        itemData.itemName,
        itemData.rating,
        'No'
      )
      req.session.userProfile.push(temp);
      userData.addItem(temp);
      var data = {
          title: 'myItems',
          path: req.url,
          user: user,
          userData: userData
      };
      res.render('myItems',
        {
          data:data
        }
      )
    }




  }
  else {
    res.redirect('/404');
  }
})
router.get('/categories/item/delete/:itemCode',function(req,res){
  if(req.session.theUser){
    var itemData = itemDb.getItem(req.params.itemCode);
    var exist = itemDb.isExist(req.params.itemCode);

    if(exist){
      var index = getSelectedItem(req.session.userProfile, req.params.itemCode);
      if(index != -2){
        // userData.splice(index,1);
        req.session.userProfile.splice(index,1);
        var userProfileTemp = req.session.userProfile;
        userData = new UserSelectedItems(userProfileTemp.userId);
        for(var j=0;j< userProfileTemp.length; j++){

          var userItem = new UserItem(
            userProfileTemp[j]._userId,
            userProfileTemp[j]._itemCode,
            userProfileTemp[j]._itemName,
            userProfileTemp[j]._rating,
            userProfileTemp[j]._usedIt
          );
          console.log(userItem);
          userData.addItem(userItem);
        }

        var data = {
            title: 'myItems',
            path: req.url,
            user: user,
            userData: userData
        };
        res.render("myitems",{
          data:data
        } );
      }
      else {
        res.redirect('/about');
      }
      // var data= {
      //     title:'Item',
      //     path: req.url,
      //     item: itemData
      // }
      // res.render('update',{data: data});
    }
    else{
      res.redirect('/404');
    }
  }
  else {
    res.redirect('/404');
  }

});
router.get('/myitems', function(req, res) {

    if (req.session.theUser) {
        var data = {
            title: 'myItems',
            path: req.url,
            user: user,
            userData: userData
        };
        console.log("boooye");
        console.log(userData);
        console.log(data.userData._userItem.length);
        res.render('myItems', {
            data: data
        });
    } else {

        // userData.emptyProfile();
        var users = userDb.getUsers();

        var data = {
            title: 'myItems',
            path: req.url,
            user: null,
            userData: null
        };
        console.log("boo");
        console.log(data.userData);
        // console.log(data.userData._userItem.length);
        res.render('myItems', {
            data: data
        });

    }
});

router.get('/feedback', function(req, res) {
    res.render('feedback');
});

router.get('/categories/item/update/:itemCode', function(req, res) {
  if(req.session.theUser){
    var itemData = itemDb.getItem(req.params.itemCode);
    var exist = itemDb.isExist(req.params.itemCode);
    if(exist){
      var data= {
          title:'Item',
          path: req.url,
          item: itemData
      }
      res.render('update',{data: data});
    }
    else{
      res.redirect('404');
    }
  }
  else {
    res.redirect('404');
  }

    // res.render('update');
});

router.post('/myItems', function(req, res){
  if(req.session.theUser){
    console.log("goodnight");
    console.log(req.body);
    userData._userItem.find(x =>x._itemCode == req.body.itemCode)._rating = req.body.ratingUser;
    userData._userItem.find(x=> x._itemCode == req.body.itemCode)._usedIt = req.body.usedIt;
    console.log(userData);
    var data = {
        title: 'myItems',
        path: req.url,
        user: user,
        userData: userData
    };
    console.log("boooye");
    console.log(userData);
    console.log(data.userData._userItem.length);
    res.render('myItems', {
        data: data
    });
  }
  else {
    res.redirect("404");
  }

});
router.get('/*',function(req,res){
  res.render('404');
})
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
