class UserItem{
  /**
   * Constructor
   * @param userId
   * @param itemCode
   * @param rating
   * @param usedIt
   * @param itemName
   */
   constructor(userId, itemCode, itemName, rating, usedIt) {
       this._itemCode = itemCode;
       this._userId = userId;
       this._rating = rating;
       this._usedIt = usedIt;
       this._itemName = itemName;
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
    get itemName(){
      return this._itemName;
    }
    set itemName(value){
      this._itemName = value;
    }
    get itemCode() {
        return this._itemCode;
    }

    set itemCode(value) {
        this._itemCode = value;
    }

    get rating() {
        return this._rating;
    }

    set rating(value) {
        this._rating = value;
    }

    get usedIt() {
        return this._usedIt;
    }

    set usedIt(value) {
        this._usedIt = value;
    }
}
module.exports = UserItem;
