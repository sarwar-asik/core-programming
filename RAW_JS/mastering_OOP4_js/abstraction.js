console.log("abstraction");

class SarwarArray {
  #items;
  constructor() {
    this.#items = [];
  }
  getItem() {
    return [...this.#items];
  }
  addItem(item) {
    this.#items.push(item);
  }
  removeItem(iteToDelete) {
    this.#items = this.#items.filter((item) => item !== iteToDelete);
  }

  modifyItem(itemToChange, newValue) {
    const index = this.#items.indexOf(itemToChange);
    if (index !== -1) {
      this.#items[index] = newValue;
    }
  }
}


const array = new SarwarArray()

array.addItem("I am Sarwar")
array.addItem("custom")
// array.removeItem("custom")

console.log(array.getItem());