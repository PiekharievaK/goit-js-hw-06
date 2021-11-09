const allCategories =document.querySelector("#categories");
const categoriesItem = allCategories.querySelectorAll(`.item`);

console.log (`Number of categories: `, allCategories.children.length);

categoriesItem.forEach(elem => {
    console.log(`Category: `, elem.querySelector(`h2`).textContent);
     console.log (`Elements: `, elem.querySelectorAll(`li`).length);
    });



