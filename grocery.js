var Grocery = /** @class */ (function () {
    function Grocery(name, id, quantity, size) {
        this.name = name;
        this.id = id;
        this.quantity = quantity;
        this.size = size;
    }
    Grocery.prototype.getGroceryProperties = function () {
        return "".concat(this.name, " ").concat(this.id, " ").concat(this.quantity, " ").concat(this.size);
    };
    return Grocery;
}());
var milk = new Grocery("Milk", 1, 3, "Medium");
console.log(milk.getGroceryProperties());
var bread = new Grocery("Bread", 1, 3, "Loaf");
console.log(bread.getGroceryProperties());
var eggs = new Grocery("Eggs", 1, 3, "X-Large");
console.log(eggs.getGroceryProperties());
var groceries = [];
groceries.push(milk, bread, eggs);
console.log(groceries);
var message1 = (groceries[0].name + ', ' + groceries[0].id + ', ' + groceries[0].quantity + ', ' + groceries[0].size);
var heading1 = document.createElement('h1');
heading1.textContent = message1;
document.body.appendChild(heading1);
var message2 = (groceries[1].name + ', ' + groceries[1].id + ', ' + groceries[1].quantity + ', ' + groceries[1].size);
var heading2 = document.createElement('h1');
heading2.textContent = message2;
document.body.appendChild(heading2);
var message3 = (groceries[2].name + ', ' + groceries[2].id + ', ' + groceries[2].quantity + ', ' + groceries[2].size);
var heading3 = document.createElement('h1');
heading3.textContent = message3;
document.body.appendChild(heading3);
