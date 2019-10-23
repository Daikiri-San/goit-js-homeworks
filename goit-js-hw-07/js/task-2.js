const ingredientsList = {
  currentList: document.querySelector('#ingredients'),
};

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

function createLiElem(text) {
  const listElement = document.createElement('li');
  listElement.textContent = text;
  return listElement;
}

function createList(array) {
  const result = array.map(el => createLiElem(el));
  return result;
}

const list = createList(ingredients);

ingredientsList.currentList.append(...list);
