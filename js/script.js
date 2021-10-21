// ARRAY img, title, text, //
const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];
const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
]
const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


// Prendo gli elementi dal DOM
const heroContainer = document.querySelector("._container-hero");
const sideBarContainer = document.querySelector("._sidebar-container");


let currentIndex = 0;

// Creo ciclo for con dentro Array
for (let i = 0; i < items.length; i++) {
  const currentItems = items[i];
  const currentTitle = title[i];
  const currentText = text[i];

  let activeHeroImage = "";
  let activePreviewImage = "";

  if (i === currentIndex) {
    activeHeroImage = "_active";
    activePreviewImage = "_active-preview";
  }

  heroContainer.innerHTML += `<div class="_image-container ${activeHeroImage}">
                                <img src="${currentItems}" alt="img-0${i + 1}">
                                <div class="_text-container">
                                  <h3 class="_title m-0">${currentTitle}</h3>
                                  <p class="_text m-0">${currentText}</p>
                                </div>
                              </div>`;

  sideBarContainer.innerHTML += `<img src="${currentItems}" alt="img-0${i + 1}" class="${activePreviewImage}">`;                            
};


// Prendo gli elementi dal DOM
const arrowUp = document.querySelector("._arrow-up");
const arrowDown = document.querySelector("._arrow-down");

// Arrow Down
arrowDown.addEventListener("click", function(){

  const activeHero = heroContainer.querySelector('._image-container._active');
  const activePreview = sideBarContainer.querySelector('img._active-preview');

  activeHero.classList.remove('_active');
  activePreview.classList.remove('_active-preview');

  currentIndex++;

  if (currentIndex > (items.length - 1)) {
    currentIndex = 0;
  }

  const arrayHero = heroContainer.querySelectorAll("._image-container");
  const arrayPreview = sideBarContainer.querySelectorAll("img");

  const newActiveHero = arrayHero[currentIndex];
  const newActivePreview = arrayPreview[currentIndex];

  newActiveHero.classList.add("_active");
  newActivePreview.classList.add("_active-preview");
});




// Arrow Up
arrowUp.addEventListener('click', function () {
  
  const activeHero = heroContainer.querySelector('._image-container._active');
  const activePreview = sideBarContainer.querySelector('img._active-preview');
  activeHero.classList.remove('_active');
  activePreview.classList.remove('_active-preview');

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = items.length - 1;
  }

  const arrayHero = heroContainer.querySelectorAll("._image-container");
  const arrayPreview = sideBarContainer.querySelectorAll("img");

  const newActiveHero = arrayHero[currentIndex];
  const newActivePreview = arrayPreview[currentIndex];

  newActiveHero.classList.add("_active");
  newActivePreview.classList.add("_active-preview");

});