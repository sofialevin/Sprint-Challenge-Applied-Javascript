/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carousel() {

  // create elements
  const carousel = document.createElement('div');
  const left = document.createElement('div');
  const right = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');

  // style elements

  carousel.classList.add('carousel');
  left.classList.add('left-button');
  right.classList.add('right-button');

  // add content to elements

  left.textContent = ' < ';
  right.textContent = ' > ';

  img1.src = "./assets/carousel/mountains.jpeg";
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";

  // add elements to carousel

  carousel.appendChild(left);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(right);

  const images = carousel.querySelectorAll('img');
  let currentIndex = 0;
  let lastIndex = images.length - 1;

  let initialImage = images[currentIndex];
  initialImage.style.display = 'flex';

  right.addEventListener('click', () => {
    images[currentIndex].style.display = 'none';
    if (currentIndex < lastIndex) {
      currentIndex += 1;
    } else {
      currentIndex = 0;
    }
    images[currentIndex].style.display = 'flex';
  })
  
  left.addEventListener('click', () => {
    images[currentIndex].style.display = 'none';
    if (currentIndex > 0) {
        currentIndex -= 1;
    } else {
        currentIndex = lastIndex;
    }
    images[currentIndex].style.display = 'flex';
})

  return carousel;
}

const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.appendChild(carousel());

