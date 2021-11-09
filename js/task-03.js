const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  
];

const imageList = document.querySelector(`.gallery`);
console.log (imageList);

const imageElem = [];
const imageData = images.forEach(image =>{
      const imageItem = document.createElement(`li`);
imageItem.className = `item-gallery` ;

    const imageContent = `<img src=${image.url} alt="${image.alt}" width= 150px >`;

imageItem.insertAdjacentHTML("beforeend", imageContent);

imageElem.push(imageItem)
console.log(imageItem)
    });

    imageList.append(...imageElem)
    console.log(imageElem)


// const addImages = images.map((picture)=> `<li><img src="${picture.url}" alt="${picture.alt}" width = 150px></li>`).join(``);
// console.log(addImages)
// imageList.insertAdjacentHTML("beforeend", addImages)


// console.log(imageList)






//   const allImageElem = [];
//   const imageData = images.forEach(image =>{
//     const imageItem = document.createElement(`li`);

//      const data = document.createElement(`img`);
// data.src = `${image.url}`;
// data.alt = `${image.alt}`;
// data.width = `150`;

// imageItem.append(data);
// allImageElem.push(imageItem);

//   } );
//   imageList.append(...allImageElem);
//   console.log(imageList );