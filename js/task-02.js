const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',

];


const ingredientList = document.querySelector(`#ingredients`);


ingredients.map((ingredient) => {
  const element = document.createElement(`li`);
   element.textContent =`${ingredient}`; 
  element.className = `item`;
  ingredientList.append(element);
} );

  console.log(ingredientList);


