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
    return `${this.id}, ${this.name}, ${this.size}, ${this.ui}, ${this.quantity}`;
  }

}

let milk = new Grocery(1, "Milk", "Medium", "Gallon", 3);
let bread = new Grocery(2, "Bread", "King", "Loaf", 6);
let eggs = new Grocery(3, "Eggs", "X-Large", "Dozen", 11);

let groceries = [];
groceries.push(milk, bread, eggs);

for (let x in groceries) {
  let message = groceries[x].getGroceryProperties();
  let heading = document.createElement('h3');
  heading.textContent = message;
  document.body.appendChild(heading);
};