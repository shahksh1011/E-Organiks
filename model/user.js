class User {

    /**
     * Constructor
     * @param userId
     * @param userFirstName
     * @param userLastName
     * @param emailAddress
     * @param address1
     * @param address2
     * @param city
     * @param state
     * @param zipCode
     * @param country

     */

    constructor(userId, userFirstName, userLastName,  emailAddress, address1, address2, city, state, zipCode, country) {
        this._userId = userId;
        this._userFirstName = userFirstName;
        this._userLastName = userLastName;
        this._emailAddress = emailAddress;
        this._address1 = address1;
        this._address2 = address2;
        this._city = city;
        this._state = state;
        this._zipCode = zipCode;
        this._country = country;
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


    get userFirstName() {
        return this._userFirstName;
    }

    set userFirstName(value) {
        this._userFirstName = value;
    }

    get userLastName() {
        return this._userLastName;
    }

    set userLastName(value) {
        this._userLastName = value;
    }

    get emailAddress() {
        return this._emailAddress;
    }

    set emailAddress(value) {
        this._emailAddress = value;
    }


    get address1() {
        return this._address1;
    }

    set address1(value) {
        this._address1 = value;
    }

    get address2() {
        return this._address2;
    }

    set address2(value) {
        this._address2 = value;
    }

    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }

    get zipCode() {
        return this._zipCode;
    }

    set zipCode(value) {
        this._zipCode = value;
    }

    get country() {
        return this._country;
    }

    set country(value) {
        this._country = value;
    }
}
module.exports = User;
