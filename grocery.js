var Grocery = /** @class */ (function () {
    function Grocery(id, name, size, ui, quantity) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.ui = ui;
        this.quantity = quantity;
    }
    Grocery.prototype.getGroceryProperties = function () {
        return "".concat(this.id, " &emsp; ").concat(this.name, " &emsp;&emsp; ").concat(this.size, " \n    &emsp;&emsp;&emsp; ").concat(this.ui, " &emsp;&emsp;&emsp;&emsp;&emsp; ").concat(this.quantity);
    };
    return Grocery;
}());
var milk = new Grocery(1, "Milk", "Medium", "Gallon", 3);
var bread = new Grocery(2, "Bread", "King", "Loaf", 6);
var eggs = new Grocery(3, "Eggs", "X-Large", "Dozen", 11);
var groceries = [];
groceries.push(milk, bread, eggs);
for (var x in groceries) {
    var g = document.createElement('li');
    g.id = 'groceries' + [x];
    g.innerHTML = groceries[x].getGroceryProperties();
    document.getElementById("groceries").appendChild(g);
}
;
// Add on Script to build Table of Groceries
var table = document.querySelector(".groceryTable");
for (var _i = 0, groceries_1 = groceries; _i < groceries_1.length; _i++) {
    var obj = groceries_1[_i];
    var tr = table.insertRow();
    tr.insertCell().textContent = obj.id;
    tr.insertCell().textContent = obj.name;
    tr.insertCell().textContent = obj.size;
    tr.insertCell().textContent = obj.ui;
    tr.insertCell().textContent = obj.quantity;
}
