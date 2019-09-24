/* eslint-disable func-names */
const inventory = {
  items: ['Монорельса', 'Фильтр'],
  add(itemName) {
    this.items.push(itemName);
    return this.add;
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
    return this.remove;
  },
};

const invokeInventoryOperation = function (itemName, inventoryAction) {
  console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
  inventoryAction(itemName);
};

invokeInventoryOperation('Аптечка', inventory.add.bind(inventory));
// Invoking add opeartion on Аптечка

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryOperation('Фильтр', inventory.remove.bind(inventory));
// Invoking remove opeartion on Фильтр

console.log(inventory.items); // ['Монорельса', 'Аптечка']
