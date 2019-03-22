var Item = require('../model/Item');

module.exports.getItems = function () {

    let items = [];
    for (let i = 0; i < data.length; i++) {
        let item = new Item(data[i].itemCode,
            data[i].itemName,
            data[i].catalogCategory,
            data[i].description,
            data[i].rating,
            data[i].imgUrl);

        items.push(item);

    } // end of for
    return items;

    // return data;
};

/**
 *
 * @param itemCode
 * @returns {*}
 */
module.exports.getItem = function (itemCode) {
    console.info("from DB, Item code :" + itemCode)
    for (var i = 0; i < data.length; i++) {
        // var itemCode = data.itemCode;
        console.log("Data" + JSON.stringify(data[i].imgUrl));
        if (parseInt(data[i].itemCode) == itemCode) {
            console.log("Inside if");
            let item = new Item(data[i].itemCode,
                data[i].itemName,
                data[i].catalogCategory,
                data[i].description,
                data[i].rating,
                data[i].imgUrl
                )

            console.log("Item"+JSON.stringify(item));

            return item;
        }
        // console.log("Data"+i);

    }
};

// Hard coded data
var data = [
    {
        itemCode: 1,
        itemName: "Veggies",
        catalogCategory: "Produce",
        description: "Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds. The alternate definition of the term vegetable is applied somewhat arbitrarily, often by culinary and cultural tradition. It may exclude foods derived from some plants that are fruits, nuts, and cereal grains, but include fruits from others such as tomatoes and courgettes and seeds such as pulses.",
        rating: 3,
        imgUrl: "/images/veggies.jpg",

    },
    {
        itemCode: 2,
        itemName: "Root Vegetables",
        catalogCategory: "Produce",
        description: "Root vegetables are generally storage organs, enlarged to store energy in the form of carbohydrates. They differ in the concentration and the balance among starches, sugars, and other types of carbohydrate. Of particular economic importance are those with a high carbohydrate concentration in the form of starch; starchy root vegetables are important staple foods, particularly in tropical regions, overshadowing cereals throughout much of Central Africa, West Africa and Oceania, where they are used directly or mashed to make fufu or poi.",
        rating: 4,
        imgUrl: "/images/root_veggies.jpg",
    },


    {
        itemCode: 3,
        itemName: "Fresh Herbs",
        catalogCategory: "Produce",
        description: "Fresh herbs like mint, basil, and tarragon have long been prized throughout the world for their curative properties (mint for indigestion, basil for kidney problems, and tarragon for snake bites). This guide focuses on the herbs' culinary applications. Read on for a list of herbs that are commonly used to create delicious dishes, as well as expert tips on choosing, storing and cooking with fresh herbs.",
        rating: 3,
        imgUrl: "/images/fresh_herbs.jpg",
    },


    {
        itemCode: 4,
        itemName: "Rice",
        catalogCategory: "Pantry",
        description: "Single polish means that this rice has been polished only once (generally, most of the rice in the market is polished 2-3 times). Ambe-mohar literally means “Mango blossom”. This is a fragrant, oval grained, non-hybrid, tall-growing rice variety cultivated in Western Maharashtra. It is now rare to find farmers who grow Ambemohar regularly. Since the production cost is high, the retail cost in turn has to be high. So, retailers in Maharashtra, pass off lookalikes as original Ambemohar to gain higher profit margins. This has further discouraged the production of Ambemohar, since the farmers can earn more profit themselves by growing lookalikes. Jeera Sambhar rice from Andhra Pradesh and Jawaful from Madhya Pradesh are the most popular lookalikes sold by retailers.",
        rating: 3,
        imgUrl: "/images/rice.jpg",
    },

    {
        itemCode: 5,
        itemName: "Eggs",
        catalogCategory: "Dairy",
        description: "The chicken or the egg causality dilemma is commonly stated as 'which came first: the chicken or the egg?'. The dilemma stems from the observation that all chickens hatch from eggs and all chicken eggs are laid by chickens. 'Chicken-and-egg' is a metaphoric adjective describing situations where it is not clear which of two events should be considered the cause and which should be considered the effect, or to express a scenario of infinite regress, or to express the difficulty of sequencing actions where each seems to depend on others being done first. Plutarch posed the question as a philosophical matter in his essay The Symposiacs, written in the 1st century CE.",
        rating: 3,
        imgUrl: "/images/eggs.jpg",
    },
];

module.exports.isExist = function(itemCode){
    var exist = false;
    for (var i = 0; i < data.length; i++) {
        if (parseInt(data[i].itemCode) == itemCode) {
            exist = true;
        }
    }
    return exist;
}

var category = ["Produce", "Pantry", "Dairy"];
module.exports.getCategories = function(){
    return category;
};
