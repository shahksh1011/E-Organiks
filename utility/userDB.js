var User = require('../model/User');
var UserItem = require('../model/userItem');
var itemDB = require('./itemDB');
//Getting all items from itemDb.js inorder to later map it with the userProfile
var allItems = itemDB.getItems();
module.exports.getUsers = function () {

    let users = [];
    for (let i = 0; i < data.length; i++) {
        let user = new User(data[i].userId,
            data[i].userFirstName,
            data[i].userLastName,
            data[i].emailAddress,
            data[i].address1,
            data[i].address2,
            data[i].city,
            data[i].state,
            data[i].zipCode,
            data[i].country,);

        users.push(user);

    } // end of for
    return users;

    // return data;
};

module.exports.getUserProfile = function(userId){

    let returnData = [];
    for(var i=0; i<userItemsData.length;i++){
      let itemData = new UserItem(
            userItemsData[i].userId,
            userItemsData[i].item,
            userItemsData[i].itemName,
            userItemsData[i].rating,
            userItemsData[i].usedIt);
        returnData.push(itemData);
    }
    return returnData;
}
var userItemsData = [{
    userId: 1,
    item: 1,
    itemName: itemDB.getItem(1)._itemName,
    rating: 3,
    usedIt: "Yes"
  },
  {
    userId: 1,
    item: 2,
    itemName: itemDB.getItem(2)._itemName,
    rating: 2,
    usedIt: "No"
  }];
var data = [{
      userId: 1,
      userFirstName: "John",
      userLastName: "Doe",
      emailAddress: "johndoe@unknown.com",
      address1: "221B Baker Street",
      address2: "-",
      city: "Charlotte",
      state: "North Carolina",
      zipCode: "28262",
      country: "USA"
}];
