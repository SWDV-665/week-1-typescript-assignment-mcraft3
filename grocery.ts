interface Grocery { 
  id: number;
  name: string;
  size: string;
  ui: string;
  quantity: number;
}

class Grocery {
  constructor(id: number, name: string, size: string, ui: string, quantity: number) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.ui = ui;
    this.quantity = quantity;
  }
  
  getGroceryProperties() {
    return `${this.id} &emsp; ${this.name} &emsp;&emsp; ${this.size} 
    &emsp;&emsp;&emsp; ${this.ui} &emsp;&emsp;&emsp;&emsp;&emsp; ${this.quantity}`;
  }

}

let milk = new Grocery(1, "Milk", "Medium", "Gallon", 3);
let bread = new Grocery(2, "Bread", "King", "Loaf", 6);
let eggs = new Grocery(3, "Eggs", "X-Large", "Dozen", 11);

let groceries = [];
groceries.push(milk, bread, eggs);

for (let x in groceries) {
  var g = document.createElement('li');
  g.id = 'groceries' + [x];
  g.innerHTML = groceries[x].getGroceryProperties();
  document.getElementById("groceries").appendChild(g);
};
