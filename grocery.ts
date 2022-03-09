interface Grocery { 
  name: string;
  id: number;
  quantity: number;
  size: string;
}

class Grocery {
  constructor(name: string, id: number, quantity: number, size: string) {
    this.name = name;
    this.id = id;
    this.quantity = quantity;
    this.size = size;
  }
  
  getGroceryProperties() {
    return `${this.name} ${this.id} ${this.quantity} ${this.size}`;
  }

}

let milk = new Grocery("Milk", 1, 3, "Medium");
console.log(milk.getGroceryProperties());
let bread = new Grocery("Bread", 1, 3, "Loaf");
console.log(bread.getGroceryProperties());
let eggs = new Grocery("Eggs", 1, 3, "X-Large");
console.log(eggs.getGroceryProperties());

let groceries = [];
groceries.push(milk, bread, eggs);
console.log(groceries);

let message1: string = (groceries[0].name + ', ' + groceries[0].id + ', ' + groceries[0].quantity + ', ' + groceries[0].size);
let heading1 = document.createElement('h1');
heading1.textContent = message1;
document.body.appendChild(heading1);

let message2: string = (groceries[1].name + ', ' + groceries[1].id + ', ' + groceries[1].quantity + ', ' + groceries[1].size);
let heading2 = document.createElement('h1');
heading2.textContent = message2;
document.body.appendChild(heading2);

let message3: string = (groceries[2].name + ', ' + groceries[2].id + ', ' + groceries[2].quantity + ', ' + groceries[2].size);
let heading3 = document.createElement('h1');
heading3.textContent = message3;
document.body.appendChild(heading3);