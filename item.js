const items = require("./fakeDB")

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        //Push all instances into array
        items.push(this);
    }
    //Return array of items
    static findAll() {
        return items
    }

    //Find item with matching name and update attribute
    static update(name, data) {
        let foundItem = Item.findAll(name);
        if(foundItem === undefined) {
            throw {message: "Item Not Found", status: 400}
        }

        foundItem.name = data.name;
        foundItem.price = data.price;

        return foundItem;
    }

    //Find and return item matching name
    static find(name) {
        const foundItem = items.find(item => item.name === name)
        if(foundItem === undefined) {
            throw {message: "Item Not Found", status: 404}
        }
        return foundItem
    }


    //Find and delete item with matching name

    static remove(name) {
        const foundIndex = items.findIndex(item => item.name === name);
        if(foundIndex === -1) {
            throw {message: "Item Not Found", status: 404}
        }
        items.splice(foundIndex, 1)
    }
}

module.exports = Item;