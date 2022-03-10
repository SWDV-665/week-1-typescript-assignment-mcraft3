var Grocery = /** @class */ (function () {
    function Grocery(id, name, size, ui, quantity) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.ui = ui;
        this.quantity = quantity;
    }
    Grocery.prototype.getGroceryProperties = function () {
        return "".concat(this.id, ", ").concat(this.name, ", ").concat(this.size, ", ").concat(this.ui, ", ").concat(this.quantity);
    };
    return Grocery;
}());
var milk = new Grocery(1, "Milk", "Medium", "Gallon", 3);
var bread = new Grocery(2, "Bread", "King", "Loaf", 6);
var eggs = new Grocery(3, "Eggs", "X-Large", "Dozen", 11);
var groceries = [];
groceries.push(milk, bread, eggs);
for (var x in groceries) {
    var message = groceries[x].getGroceryProperties();
    var heading = document.createElement('h3');
    heading.textContent = message;
    document.body.appendChild(heading);
}
;
