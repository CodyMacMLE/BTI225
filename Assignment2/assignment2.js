/*************************************
 *          ALL DATA                 *
 *  write your produceItemDB Object  *
 *      BELOW this Object            *
 *************************************/

var allData = [
    { type: "supermarket", data: { supermarketId: 222, name: "Loblaws Bayview Village", addressId: 1453, website: "https://www.loblaws.ca/" } },
    { type: "supermarket", data: { supermarketId: 225, name: "Metro Bathurst & Steeles", addressId: 1680, website: "https://www.metro.ca/" } },
    { type: "supermarket", data: { supermarketId: 325, name: "Whole Foods Market", addressId: 1870, website: "https://www.wholefoodsmarket.com/" } },
    { type: "supermarket", data: { supermarketId: 433, name: "FreshCo McCowan & Bur Oak", addressId: 1968, website: "https://freshco.com/" } },
    { type: "supermarket", data: { supermarketId: 365, name: "Listro's NOFRILLS North York", addressId: 1972, website: "https://www.nofrills.ca/" } },
    { type: "supermarket", data: { supermarketId: 512, name: "T&T Supermarket Weldrick Store", addressId: 2024, website: "https://sdswebapp.com" } },
    { type: "produceItem", data: { PLUCode: "3000", supermarketId: 222, type: "Fruits", name: "Apples fresh & generic", unit: "lb", price: 2.49, modified: null } },
    { type: "produceItem", data: { PLUCode: "3062", supermarketId: 325, type: "Herbs", name: "Bay Leaves Culinary", unit: "100g", price: 4.95, modified: null } },
    { type: "produceItem", data: { PLUCode: "4925", supermarketId: 225, type: "Nuts", name: "Organic Almonds Unroaasted & Unsalted", unit: "10oz", price: 6.99, modified: null } },
    { type: "produceItem", data: { PLUCode: "3079", supermarketId: 222, type: "Vegetables", name: "Asparagus Green", unit: "200g", price: 3.50, modified: null } },
    { type: "produceItem", data: { PLUCode: "4866", supermarketId: 433, type: "Dried Fruits", name: "Prunes Dried Plums", unit: "100g", price: 2.67, modified: null } },
    { type: "produceItem", data: { PLUCode: "3016", supermarketId: 225, type: "Fruits", name: "Pears General", unit: "lb", price: 1.99, modified: null } },
    { type: "produceItem", data: { PLUCode: "3086", supermarketId: 365, type: "Vegetables", name: "Corn Sweet", unit: "3pcs", price: 5.99, modified: null } },
    { type: "produceItem", data: { PLUCode: "4889", supermarketId: 325, type: "Herbs", name: "Chinese Parsley/Coriander", unit: "100g", price: 3.55, modified: null } },
    { type: "produceItem", data: { PLUCode: "4938", supermarketId: 512, type: "Nuts", name: "Pine Nuts Pignoli", unit: "911", price: 8.98, modified: null } },
    { type: "produceItem", data: { PLUCode: "4070", supermarketId: 222, type: "Vegetables", name: "Celery Bunch", unit: "bunch", price: 3.99, modified: null } },
    { type: "address", data: { addressId: 1453, street: "2877 Bayview Ave", city: "Toronto", province: "ON", postalCode: "M2K 2S3" } },
    { type: "address", data: { addressId: 1680, street: "6201 Bathurst St.", city: "North York", province: "ON", postalCode: "M2R 2A5" } },
    { type: "address", data: { addressId: 1870, street: "3139 Sheridan Dr", city: "Amherst", province: "NY", postalCode: "14226" } },
    { type: "address", data: { addressId: 1968, street: "9580 McCowan Rd", city: "Markham", province: "ON", postalCode: "L3P 8M1" } },
    { type: "address", data: { addressId: 1972, street: "3555 Don Mills Road", city: "North York", province: "ON", postalCode: "M2H 3N3" } },
    { type: "address", data: { addressId: 2000, street: "9625 Yonge St", city: "Richmond Hill", province: "ON", postalCode: "L4C 5T2" } },
    { type: "address", data: { addressId: 2024, street: "165 Yorkland Blvd", city: "Toronto", province: "ON", postalCode: "M2J 4R2" } }
];


let produceItemDB = {
    produceItems: [],
    addresses: [],
    supermarkets: [],
    loadData: function(allData) {
        for (let i = 0; i < allData.length; i++)
        {
            if (allData[i].type == "supermarket") {
                this.addSupermarket(allData[i].data);
            } else if (allData[i].type == "produceItem") {
                this.addProduceItem(allData[i].data);
            } else if (allData[i].type == "address") {
                this.addAddress(allData[i].data);
            }
        }
    },
    addProduceItem: function(produceItemObj) {
        produceItemObj.modified = new Date();
        produceItemObj.modified = produceItemObj.modified.toUTCString();
        this.produceItems.push(produceItemObj);
    },
    printProduceItemByCode: function(Code) {
        let current = this.produceItems.PLUCode.findIndex(Code);
        console.log(`Produce Item ${Code}: ${this.produceItems[current].name}, ${this.produceItems[current].type}, $${this.produceItems[current].price} (per ${this.produceItems[current].unit})\nDate Modified: ${this.produceItems[current].modified}`);
    },
    printAllProduceItems: function() {
        console.log(`All Produce Items (count: ${this.produceItems.length})\n\n`);
        for (let i = 0; i < this.produceItems.length; i++) {
            console.log(`Produce Item ${this.produceItems[i].PLUCode}: ${this.produceItems[i].name}, ${this.produceItems[i].type}, $${this.produceItems[i].price} (per ${this.produceItems[i].unit})\nDate Modified: ${this.produceItems[i].modified}\n`);
        }
    },
    printProduceItemsBySupermarket: function(supermarketId) {
       let supermarketProduce = [];
       let supermarketObj = this.getSupermarketById(supermarketId);
       for (let i = 0; i < this.produceItems.length; i++)
       {
            if (this.produceItems[i].supermarketId == supermarketId)
            {
                supermarketProduce.push(this.produceItems[i]);
            }
       }
       console.log(`Produce Items in Supermarket: ${supermarketObj.name} (count: ${supermarketProduce.length})\n\n`);
       for (let i = 0; i < supermarketProduce.length; i++)
       {
            console.log(`Produce Item ${supermarketProduce[i].PLUCode}: ${supermarketProduce[i].name}, ${supermarketProduce[i].type}, $${supermarketProduce[i].price} (per ${supermarketProduce[i].unit})\n`);
            console.log(`Date modified: ${supermarketProduce[i].modified}\n\n`);
       }
    },
    printProduceItemsByType: function(produceType) {
        let produceItems = [];
        for (let i = 0; i < this.produceItems.length; i++)
        {
            if (this.produceItems[i].type == produceType)
            {
                produceItems.push(this.produceItems[i]);
            }
        }
        console.log(`Produce Items by produce type: ${produceType} (count: ${produceItems.length})\n\n`);
        for (let i = 0; i < produceItems.length; i++)
        {
            console.log(`Produce Item ${produceItems[i].PLUCode}: ${produceItems[i].name}, ${produceItems[i].type}, $${produceItems[i].price} (per ${produceItems[i].unit})\n`);
            console.log(`Date modified: ${produceItems[i].modified}\n\n`);
         }
    },
    removeProduceItemByCode(PLUCode) {
        for (let i = 0; i < this.produceItems.length; i++)
        {
            if (this.produceItems[i].PLUCode == PLUCode)
            {
                this.produceItems.splice(i, 1);
            }
        }
    },
    addAddress: function(addressObj) {
        this.addresses.push(addressObj);
    },
    getAddressById: function(addressIdInput) {
        let addressObj = {};
        for (let i = 0; i < this.addresses.length; i++)
        {
            if (this.addresses[i].addressId == addressIdInput)
            {
                addressObj = this.addresses[i];
            }
        }
        return addressObj;
    },
    printAllAddresses: function() {
        const arrLen = this.addresses.length;
        console.log(`All Addressees (count: ${arrLen})\n`);
        for (let i = 0; i < arrLen; i++) {
            console.log(`Address ${this.addresses[i].addressId}: ${this.addresses[i].street}, ${this.addresses[i].city}, ${this.addresses[i].province}, ${this.addresses[i].postalCode}\n`);
        }
    },
    removeAddressById: function(addressId) {
        for (let i = 0; i < this.addresses.length; i++)
        {
            if (this.addresses[i].addressId == addressId)
            {
                let exists = false;
                for (let j = 0; j < this.supermarkets.length; j++)
                {
                    if (this.supermarkets[j].addressId == addressId)
                        exists = true;
                }
                if (!exists)
                this.addresses.splice(i, 1)
            }
        }
    },
    addSupermarket: function(supermarketObj) {
        this.supermarkets.push(supermarketObj);
    },
    getSupermarketById: function(supermarketId) {
        for (let i = 0; i < this.supermarkets.length; i++)
        {
            if (this.supermarkets[i].supermarketId == supermarketId)
            {
                return this.supermarkets[i];
            }
        }
    },
    printAllSupermarkets: function() {
        const arrLen = this.supermarkets.length;
        console.log(`All Supermarkets (count: ${arrLen})\n\n`);
        for (let i = 0; i < arrLen; i++) {
            let addressObj = this.getAddressById(this.supermarkets[i].addressId);
            console.log(`Supermarket ${this.supermarkets[i].supermarketId}: ${this.supermarkets[i].name}\n`);
            console.log(`Location (${addressObj.addressId}): ${addressObj.street}, ${addressObj.city}, ${addressObj.province}, ${addressObj.postalCode}\n\n`);
        }
    }
};


/*  Write your produceItemDB Object Here.  Do not forget to uncomment the "TEST DATA" section
    when you're ready.  Your code is required to run against these tests before you submit */


/*************************************
 *          TEST DATA                *
 *  write your produceItemDB Object  *
 *      ABOVE this code              *
 *                                   *
 *  Uncomment this block of code     *
 *  when you're ready to test        *
 *  your produceItemDB Object        *
 *                                   *
 *  You MUST Hand in your code       *
 *  with the test data               *
 *  uncommented, as this will        *
 *  help check your code for         *
 *  correctness                      *
 *************************************/


// Insert all Data into the Database

produceItemDB.loadData(allData);

// print all produceItems
console.log("-----------------------------");
console.log("produceItemDB.printAllProduceItems();\n-----------------------------");
produceItemDB.printAllProduceItems();
console.log("-----------------------------");

// print all addresses

console.log("produceItemDB.printAllAddresses();\n-----------------------------");
produceItemDB.printAllAddresses();
console.log("-----------------------------");

// print all supermarkets

console.log("produceItemDB.printAllSupermarkets();\n-----------------------------");
produceItemDB.printAllSupermarkets();
console.log("-----------------------------");

// print all produceItems in supermarket "Loblaws Bayview Village" (supermarketId 222)

console.log("produceItemDB.printProduceItemsBySupermarket(222);\n-----------------------------");
produceItemDB.printProduceItemsBySupermarket(222);
console.log("-----------------------------");

// print all produceItems by produce type "Fruits"

console.log("produceItemDB.printProduceItemsByType('Fruits');\n-----------------------------");
produceItemDB.printProduceItemsByType('Fruits');
console.log("-----------------------------");

// remove ProduceItem "Apples fresh & generic" (PLUCode 3000) and "Pears General"(PLUCode 3016)

console.log("produceItemDB.removeProduceItemByCode('3000');\nproduceItemDB.removeProduceItemByCode('3016');\n");
produceItemDB.removeProduceItemByCode("3000");
produceItemDB.removeProduceItemByCode("3016");
console.log("-----------------------------");

// print all produceItems again
// NOTE: "Apples fresh & generic" and "Pears General" should be missing

console.log("produceItemDB.printAllProduceItems();\n-----------------------------");
produceItemDB.printAllProduceItems();
console.log("-----------------------------");


// remove Address "67 Rhymer Ave., Stouffville, ON L3C8H4" (addressId 2000) and "165 Yorkland Blvd, Toronto, ON M2J4R2" (AddressId 2024)
console.log("produceItemDB.removeAddressById(2000);\nproduceItemDB.removeAddressById(2024);\n");
produceItemDB.removeAddressById(2000);
produceItemDB.removeAddressById(2024);
console.log("-----------------------------");

// print all addresses again
// NOTE: only "Address 2000: 67 Rhymer Ave., Stouffville, ON L3C8H4" should be removed

console.log("produceItemDB.printAllAddresses();\n-----------------------------");
produceItemDB.printAllAddresses();
console.log("-----------------------------");