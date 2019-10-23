/* eslint-disable comma-dangle */
/* eslint-disable comma-spacing */
/* eslint-disable implicit-arrow-linebreak */
const CategoriesSelectedById = document.querySelectorAll('#categories li.item');

const result = `В списке ${CategoriesSelectedById.length} категории.`;

console.log(result);

CategoriesSelectedById.forEach(element =>
  console.log(
    `Категория: ${element.firstElementChild.textContent}\nКоличество элементов: ${element.lastElementChild.children.length}`,
  ),);
