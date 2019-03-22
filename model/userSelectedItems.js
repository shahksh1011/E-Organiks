var UserItem = require('./UserItem');
class UserSelectedItems{
  /**
   * Constructor
   * @param userId
   * @param userItem
   */
   constructor(userId) {
       this._userItem = [];
       this._userId = userId;
   }
   /**
    *
    * Getter and Setters
    */
    get userId(){
      return this._userId;
    }
    set userId(value){
      this._userId = value;
    }
    get userItem(){
      return this._userItem;
    }
    set userItem(value){
      this._userItem = value;
    }
    addItem(userItem) {
       if (userItem instanceof UserItem) {
           this._userItem.push(userItem);
       } else {
           console.log('Invalid Object --> It should be of type UserItem')
       }
     }

     removeItem(userItem) {
       if (userItem instanceof UserItem) {
           this._userItem.filter(function (item) {
               return item != userItem;
           });
       } else {
           console.log('Invalid Object --> It should be of type UserItem')
       }
     }

     updateItem(userItem) {
       if (userItem instanceof UserItem) {
           const index = this._userItem.findIndex((e) => e.item.itemCode === userItem.item.itemCode);
           if (index === -1) {
               console.log('User Item not present in the list');
           } else {
               this._userItem[index] = userItem;
           }
       } else {
           console.log('Invalid Object --> It should be of type UserItem')
       }
     }

     getItems() {
       return this._userItem;
     }

     emptyProfile() {
         this.userItem = [];
     }
}
module.exports = UserSelectedItems;
