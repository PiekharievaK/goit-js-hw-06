const allCategories =document.querySelector("#categories");

const categoriesItem = allCategories.querySelectorAll(`.item`);



// const categoryTitleText = titleEL.forEach(elem => console.log(`category: `, elem.textContent));
// const categoryLetgth = categoriesItem.forEach(elem => console.log(`number: `, elem.querySelectorAll(`ul>li`).length))
console.log (`Number of categories: `, allCategories.children.length);

categoriesItem.forEach(elem => {
    console.log(`Category: `, elem.querySelector(`h2`).textContent, );
    console.log (`Elements: `, elem.querySelectorAll(`li`).length);
    });



