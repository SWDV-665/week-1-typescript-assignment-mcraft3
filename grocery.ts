interface Grocery { 
  id: number;
  name: string;
  size: string;
  ui: string;
  quantity: number;
}

class Grocery {
  id: number;
  name: string;
  size: string;
  ui: string;
  quantity: number;

  constructor(id: number, name: string, size: string, ui: string, quantity: number) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.ui = ui;
    this.quantity = quantity;
  }
  
  getGroceryProperties() {
    return `${this.id} ${this.name} ${this.size} ${this.ui} ${this.quantity}`;
  }

}

let milk = new Grocery(1, "Milk", "Medium", "Gallon", 3);

let bread = new Grocery(2, "Bread", "King", "Loaf", 6);

let eggs = new Grocery(3, "Eggs", "X-Large", "Dozen", 11);

let groceries = [];
groceries.push(milk, bread, eggs);


let message1: string = (groceries[0].id + ', ' + groceries[0].name + ', ' + groceries[0].size + ', ' + groceries[0].ui + ', ' + groceries[0].quantity);
let heading1 = document.createElement('h3');
heading1.textContent = message1;
document.body.appendChild(heading1);

let message2: string = (groceries[1].id + ', ' + groceries[1].name + ', ' + groceries[1].size + ', ' + groceries[1].ui + ', ' + groceries[1].quantity);
let heading2 = document.createElement('h3');
heading2.textContent = message2;
document.body.appendChild(heading2);

let message3: string = (groceries[2].id + ', ' + groceries[2].name + ', ' + groceries[2].size + ', ' + groceries[2].ui + ', ' + groceries[2].quantity);
let heading3 = document.createElement('h3');
heading3.textContent = message3;
document.body.appendChild(heading3);
