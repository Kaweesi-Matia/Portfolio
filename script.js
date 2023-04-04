/*
-------------------------------------------
Toggle function for the Overlay Mobile menu
-------------------------------------------
*/

const mobileMenu = document.getElementById('mobile-menu');

function showMobileMenu() {
  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'block';
  }
}
showMobileMenu();

function exitMobileMenu() {
  mobileMenu.style.display = 'none';
}
exitMobileMenu();

/*
------------------------------
Data Object stored in an Array
------------------------------
*/

const worksData = [
  {
    id: 1,
    title: 'Bookstore App',
    info: {
      client: 'Capstone',
      role: 'Front End Dev',
      year: 2022,
    },
    screenshot: {
      screenshotMobile: './images/bookstore-mobile-black.png',
      screenshotDesktop: './images/bookstore-laptop.png',
    },
    description: {
      descMobile: 'In this project, I built a React-Redux API based Bookstore. This allows users to add and delete books from the API. I styled the App using Zeplin as a collaboration tool.',
      descDesktop: 'In this project, I built a React-Redux API based Bookstore. This allows users to add and delete books from the API. I styled the App using Zeplin as a collaboration tool.',
      descPopup: 'In this project, I built a React-Redux API based Bookstore. This allows users to add and delete books from the API. I styled the App using Zeplin as a collaboration tool.',
    },
    skills: ['React', 'Redux', 'CSS'],
    liveLink: 'https://gentle-fudge-ee2e87.netlify.app/',
    sourceLink: 'https://github.com/Kaweesi-Matia/book-store-react_redux',
  },

  {
    id: 2,
    title: 'i-Model-Cars',
    info: {
      client: 'Group Capstone',
      role: 'Back/FrontEnd Dev',
      year: 2023,
    },
    screenshot: {
      screenshotMobile: './images/i-cars-mobile.jpg',
      screenshotDesktop: './images/i-model-cars.jpg',
    },
    description: {
      descMobile: 'I Model Cars is a car booking service app where you can book a car for a test drive, you can pick a car from the catalogue, pick a date and city and your appointment will be set up. The app was built with Ruby on Rails and React.JS',
      descPopup: 'I Model Cars is a car booking service app where you can book a car for a test drive, you can pick a car from the catalogue, pick a date and city and your appointment will be set up. The app was built with Ruby on Rails and React.JS, the is split into a backend and frontend part.',
    },
    skills: ['Rails', 'React', 'Ruby'],
    liveLink: 'https://wondrous-gumption-278ae4.netlify.app/',
    sourceLink: 'https://github.com/Okechukwu-muokwugwo/i-model-cars-frontend',
  },
  {
    id: 3,
    title: 'Budget App',
    info: {
      client: 'Capstone',
      role: 'Full stack Dev',
      year: 2023,
    },
    screenshot: {
      screenshotMobile: './images/budget-app-mobile.png',
      screenshotDesktop: './images/budget-app.png',
    },
    description: {
      descMobile: 'The budget app helps users to manage their budgets. It has a list of transactions associated with a category so that you can see how much money you spent, and on what. It is built on Rails using Rubygem as a software package system.',
      descPopup: 'The budget app helps users to manage their budgets. It has a list of transactions associated with a category so that you can see how much money you spent, and on what. It is built on Rails using Rubygem as a software package system.',
    },
    skills: ['Rails', 'Ruby', 'PostgreSQL'],
    liveLink: 'https://rails-dm6g.onrender.com/',
    sourceLink: 'https://github.com/Okechukwu-muokwugwo/budget-app',
  },

  {
    id: 4,
    title: 'Math App',
    info: {
      client: 'Capstone',
      role: 'Frontend Dev',
      year: 2022,
    },
    screenshot: {
      screenshotMobile: './images/math-app-mobile.png',
      screenshotDesktop: './images/math-app.png',
    },
    description: {
      descMobile: 'Mathmagician is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
      descDesktop: 'Mathmagician is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
      descPopup: 'Mathmagician is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
    },
    skills: ['html', 'css', 'React'],
    liveLink: 'https://mathmagiciansapps.netlify.app/',
    sourceLink: 'https://github.com/Okechukwu-muokwugwo/math-magicians',
  },
];

/*
  ------------------------------------------------
  Using map() to iterate through  project Data
  ------------------------------------------------
  */
const myPortfolio = document.querySelector('.works-wrapper');
const displayWorksData = worksData.map((works, index) => `<div class="card1-container">
<div class="image-holder">
  <div class="mobile">
   <img 
   src=${works.screenshot.screenshotMobile} 
   alt="tonic mobile snapshoot"
   class="">
  </div>
  <div class="desktop">
   <img 
   src=${works.screenshot.screenshotDesktop} 
   alt="tonic desktop snapshoot">
  </div>
</div>
<div class="category-a">
   <h1 class="project-title">${works.title}</h1>
   <div class="project-desc">
      <p class="client">${works.info.client}</p>
      <img src="./images/counter.svg" alt="counter">
      <p class="role">${works.info.role}</p>
      <img src="./images/counter.svg" alt="another counter">
      <p class="year">${works.info.year}</p>
   </div>
   <p class="read-msg">${works.description.descMobile}</p>
   <ul class="tech-tags">
      <li><button class="html-btn">${works.skills[0]}</button></li>
      <li><button class="css-btn">${works.skills[1]}</button></li>
      <li><button class="javascript-btn">${works.skills[2]}</button></li>
   </ul>
   <button class="see-project-btn" id=${index}>See Project</button>
   <div class="skewed-bar"></div>
   <div class="skewed2-bar"></div>
</div>
</div>`).join('');

myPortfolio.innerHTML = displayWorksData;

const popUpWindow = worksData.map((works) => `<div class="popup-container" id="popup">
<div class="popup-holder">
   <div class="close-popup">
      <h1 class="work
      -title">${works.title}</h1>
      <img src="./images/cancel.svg" onclick="closePopUpWindow()" alt="close popup dialog" id="close">
   </div>
   <div class="project-desc">
      <p class="client">${works.info.client}</p>
      <img src="./images/counter.svg" alt="counter">
      <p class="role">${works.info.role}</p>
      <img src="./images/counter.svg" alt="another counter">
      <p class="year">${works.info.year}</p>
   </div>
   <div class="image-holder">
   <div class="mobile">
   <img 
   src=${works.screenshot.screenshotMobile} 
   alt="tonic mobile snapshoot">
  </div>
  <div class="desktop">
   <img 
   src=${works.screenshot.screenshotDesktop} 
   alt="tonic desktop snapshoot">
  </div>
   </div>
   <div class="bottom-block">
      <p class="read-desc">${works.description.descPopup}</p>
      <div>
         <div class="tech-tags">
            <button class="html-btn">${works.skills[0]}</button>
            <button class="css-btn">${works.skills[1]}</button>
            <button class="javascript-btn">${works.skills[2]}</button>
         </div>
         <div class="live-btn">
            <a href="${works.liveLink}" target="_blank" rel="noopener noreferrer"><img src="./images/see-live-btn.svg" alt="see live button" class="see-live"></a>
            <a href="${works.sourceLink}"  target="_blank" rel="noopener noreferrer"><img src="./images/see-source-btn.svg" alt="see source button" class="see-source"></a>
         </div>
      </div>
   </div>
</div>
</div>`);

const modal = document.getElementById('popup');
modal.innerHTML = popUpWindow;
function closePopUpWindow() {
  modal.style.display = 'none';
}
closePopUpWindow();

// function to display the popup Window

const seeProject1 = document.getElementById('0');
const seeProject2 = document.getElementById('1');
const seeProject3 = document.getElementById('2');
const seeProject4 = document.getElementById('3');

function openPopUp() {
  if (modal.style.display === 'none') {
    const e = Number(this.id);
    modal.innerHTML = popUpWindow[e];
    modal.style.display = 'block';
  } else {
    modal.style.display = 'none';
  }
}

seeProject1.onclick = openPopUp;
seeProject2.onclick = openPopUp;
seeProject3.onclick = openPopUp;
seeProject4.onclick = openPopUp;

/*
-----------------------------------
Display Skills Details
-----------------------------------
*/
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.dropdown');

dropdownToggle.addEventListener('click', (e) => {
  e.preventDefault();
  dropdown.classList.toggle('open');
});

/*
-----------------------------------
Display Languages Details
-----------------------------------
*/
const arrowdownToggle = document.querySelector('.arrowdown-toggle');
const arrowdown = document.querySelector('.arrowdown');

arrowdownToggle.addEventListener('click', (e) => {
  e.preventDefault();
  arrowdown.classList.toggle('open');
});

/*

/*
-----------------------------------
Display Framework Details
-----------------------------------
*/
const frameworkToggle = document.querySelector('.frameworks-toggle');
const frameworkArrow = document.querySelector('.frameworks-arrow');

frameworkToggle.addEventListener('click', (e) => {
  e.preventDefault();
  frameworkArrow.classList.toggle('open');
});

/*
------------------------------------
Check E-mail Validity for Lowercase
====================================
*/
const submitForm = document.querySelector('#contact-form');
const enterEmail = document.querySelector('#mail');
const invalidMsg = document.querySelector('.error-msg');

// adding eventlistener to Get in touch button
submitForm.addEventListener('submit', (event) => {
  if (enterEmail.value !== enterEmail.value.toLowerCase()) {
    event.preventDefault();
    // then display error message
    invalidMsg.classList.add('.error-msg');
    invalidMsg.innerHTML = 'Please enter your email in lowercase, try again!';
  } else {
    invalidMsg.textContent = '';
  }
});
