const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientList = document.querySelector(`#ingredients`);

const result = [];
ingredients.forEach(ingredient => {
 const element = document.createElement(`li`);
 element.textContent =`${ingredient}`; 
 element.className = `item`;
 result.push(element)
} );
 
  ingredientList.append(...result);

  console.log(ingredientList);


