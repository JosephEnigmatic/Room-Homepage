const desktopImages = [
  "images/desktop-image-hero-1.jpg",
  "images/desktop-image-hero-2.jpg",
  "images/desktop-image-hero-3.jpg",
];

const mobileImages = [
  "images/mobile-image-hero-1.jpg",
  "images/mobile-image-hero-2.jpg",
  "images/mobile-image-hero-3.jpg",
];

const introText = [
  {
    h1: "Discover innovative ways to decorate",
    p: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
  },
  {
    h1: "We are available all across the globe",
    p: `  With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.
  `,
  },
  {
    h1: 'Manufactured with the best materials',
    p: `  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.
  `
  }
];

let currentSlide = 0;

const sliderRightBtn = document.getElementById("slider-right-btn");
const sliderLeftBtn = document.getElementById("slider-left-btn");
const heroImage = document.querySelector(".hero__image");
const introHeader = document.querySelector('.intro__text h1');
const introParagraph = document.querySelector('.intro__text p');

sliderRightBtn.addEventListener("click", () => {
  currentSlide++;

  if (currentSlide > 2) {
    currentSlide = 0;
  }

  heroImage.innerHTML = `
  <source
  media="(max-width: 960px)"
  srcset=${mobileImages[currentSlide]}
  />
  <img class="slideInRight" src=${desktopImages[currentSlide]} alt="A set of chairs">
  `;

  introHeader.textContent = introText[currentSlide].h1
  introParagraph.textContent = introText[currentSlide].p
});

sliderLeftBtn.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = 2;
  } else {
    currentSlide--;
  }

  heroImage.innerHTML = `
  <source
            media="(max-width: 960px)"
            srcset=${mobileImages[currentSlide]}
  />
          <img class="slideInLeft" src=${desktopImages[currentSlide]} alt="A set of chairs">
  `;

  introHeader.textContent = introText[currentSlide].h1
  introParagraph.textContent = introText[currentSlide].p
});

const navToggleBtn = document.querySelector('.nav__toggle');
const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-nav');

navToggleBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open')
  document.body.style.overflow = 'hidden'
})

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open')
  document.body.style.overflow = 'auto'
})

// close nav on resizing
window.addEventListener('resize', () => {
  let windowWidth = window.innerWidth;

  if(windowWidth > 1000) {
    mobileMenu.classList.remove('open')
    document.body.style.overflow = 'auto'
  }
})