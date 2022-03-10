var Grocery = /** @class */ (function () {
    function Grocery(id, name, size, ui, quantity) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.ui = ui;
        this.quantity = quantity;
    }
    Grocery.prototype.getGroceryProperties = function () {
        return "".concat(this.id, " ").concat(this.name, " ").concat(this.size, " ").concat(this.ui, " ").concat(this.quantity);
    };
    return Grocery;
}());
var milk = new Grocery(1, "Milk", "Medium", "Gallon", 3);
var bread = new Grocery(2, "Bread", "King", "Loaf", 6);
var eggs = new Grocery(3, "Eggs", "X-Large", "Dozen", 11);
var groceries = [];
groceries.push(milk, bread, eggs);
var message1 = (groceries[0].id + ', ' + groceries[0].name + ', ' + groceries[0].size + ', ' + groceries[0].ui + ', ' + groceries[0].quantity);
var heading1 = document.createElement('h3');
heading1.textContent = message1;
document.body.appendChild(heading1);
var message2 = (groceries[1].id + ', ' + groceries[1].name + ', ' + groceries[1].size + ', ' + groceries[1].ui + ', ' + groceries[1].quantity);
var heading2 = document.createElement('h3');
heading2.textContent = message2;
document.body.appendChild(heading2);
var message3 = (groceries[2].id + ', ' + groceries[2].name + ', ' + groceries[2].size + ', ' + groceries[2].ui + ', ' + groceries[2].quantity);
var heading3 = document.createElement('h3');
heading3.textContent = message3;
document.body.appendChild(heading3);
